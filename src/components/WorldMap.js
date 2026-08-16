import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './WorldMap.css';
import { WORLD_LAND_PATH, WORLD_VIEWBOX, WORLD_VIEW } from './worldLandPath';

// Projection canvas. WORLD_VIEW is the visible crop of it.
const W = 1000;
const H = 500;

// Each place may have 0-3 photos, named <slug>-1.jpg ... <slug>-3.jpg
// in public/travel/. Missing files are simply skipped.
const MAX_PHOTOS = 3;

// region is the country shown under the place name.
// fun / work are subjective, 0-5.
// caption is an optional one-liner shown under the place name. Leave '' to hide it.
const PLACES = [
  // Australia
  { slug: 'melbourne',    name: 'Melbourne',    region: 'Australia', lat: -37.81, lon: 144.96, fun: 4, work: 5, caption: 'My home now. Has the best cafe and beach.' },
  { slug: 'sydney',       name: 'Sydney',       region: 'Australia', lat: -33.87, lon: 151.21, fun: 4, work: 5, caption: 'Great sunsets.' },
  { slug: 'uluru',        name: 'Uluru',        region: 'Australia', lat: -25.34, lon: 131.04, fun: 3, work: 2, caption: 'A giant rock in the middle of red desert.' },
  { slug: 'tasmania',     name: 'Tasmania',     region: 'Australia', lat: -42.88, lon: 147.33, fun: 3, work: 2, caption: '' },
  { slug: 'gold-coast',   name: 'Gold Coast',   region: 'Australia', lat: -28.02, lon: 153.40, fun: 5, work: 5, caption: '' },

  // Europe
  { slug: 'copenhagen',   name: 'Copenhagen',   region: 'Denmark', lat: 55.68, lon: 12.57,  fun: 5, work: 5, caption: 'Fashion!' },
  { slug: 'barcelona',    name: 'Barcelona',    region: 'Spain', lat: 41.39, lon: 2.17,   fun: 5, work: 2, caption: '' },
  { slug: 'split',        name: 'Split',        region: 'Croatia', lat: 43.51, lon: 16.44,  fun: 5, work: 4, caption: 'Columbia is one of my favorite country! People here are really nice.' },
  { slug: 'dubrovnik',    name: 'Dubrovnik',    region: 'Croatia', lat: 42.65, lon: 18.09,  fun: 5, work: 4, caption: '' },
  { slug: 'napoli',       name: 'Napoli',       region: 'Italy', lat: 40.85, lon: 14.27,  fun: 4, work: 1, caption: 'Best place for pizza.' },
  { slug: 'milan',        name: 'Milan',        region: 'Italy', lat: 45.46, lon: 9.19,   fun: 3, work: 3, caption: '' },
  { slug: 'florence',     name: 'Florence',     region: 'Italy', lat: 43.77, lon: 11.26,  fun: 5, work: 3, caption: '' },
  { slug: 'venice',       name: 'Venice',       region: 'Italy', lat: 45.44, lon: 12.32,  fun: 5, work: 1, caption: '' },
  { slug: 'reykjavik',    name: 'Reykjavik',    region: 'Iceland', lat: 64.15, lon: -21.94, fun: 4, work: 1, caption: '' },
  { slug: 'snaefellsnes', name: 'Snæfellsnes',  region: 'Iceland', lat: 64.87, lon: -23.35, fun: 4, work: 0, caption: 'Cannot put words to how pretty this place is...' },
  { slug: 'zurich',       name: 'Zurich',       region: 'Switzerland', lat: 47.38, lon: 8.54,   fun: 3, work: 4, caption: 'Very rich ha.' },
  { slug: 'monaco',       name: 'Monaco',       region: 'Monaco', lat: 43.74, lon: 7.42,   fun: 2, work: 1, caption: '' },
  { slug: 'nice',         name: 'Nice',         region: 'France', lat: 43.70, lon: 7.27,   fun: 4, work: 4, caption: 'Nice is nice.' },

  // China
  { slug: 'beijing',      name: 'Beijing',      region: 'China', lat: 39.90, lon: 116.41, fun: 4, work: 2, caption: 'Lived there for 7 years when I was a child! 四季分明。' },
  { slug: 'shanghai',     name: 'Shanghai',     region: 'China', lat: 31.23, lon: 121.47, fun: 5, work: 5, caption: 'Lots of nice shops.' },
  { slug: 'guangzhou',    name: 'Guangzhou',    region: 'China', lat: 23.13, lon: 113.26, fun: 3, work: 2, caption: 'Food....' },
  { slug: 'hong-kong',    name: 'Hong Kong',    region: 'China', lat: 22.32, lon: 114.17, fun: 3, work: 3, caption: '' },

  // Indonesia
  { slug: 'bali',         name: 'Bali',         region: 'Indonesia', lat: -8.34, lon: 115.09, fun: 4, work: 3, caption: 'You can literally try any dangerous sports here.' },
  { slug: 'surabaya',     name: 'Surabaya',     region: 'Indonesia', lat: -7.25, lon: 112.75, fun: 5, work: 0, caption: 'Vocano!' },

  // Japan
  { slug: 'tokyo',        name: 'Tokyo',        region: 'Japan', lat: 35.68, lon: 139.65, fun: 4, work: 1, caption: 'How can people be this quiet?' },
  { slug: 'kyoto',        name: 'Kyoto',        region: 'Japan', lat: 35.01, lon: 135.77, fun: 5, work: 5, caption: 'Having matcha everyday.' },
  { slug: 'osaka',        name: 'Osaka',        region: 'Japan', lat: 34.69, lon: 135.50, fun: 4, work: 3, caption: '' },

  // USA
  { slug: 'pittsburgh',     name: 'Pittsburgh',      region: 'USA', lat: 40.44, lon: -79.99,  fun: 1, work: 2, caption: '1.5 years of jail life... met some great friends here.' },
  { slug: 'hawaii',         name: 'Hawaii',          region: 'USA', lat: 21.31, lon: -157.86, fun: 5, work: 3, caption: 'I want to move to hawaii!' },
  { slug: 'los-angeles',    name: 'LA',              region: 'USA', lat: 34.05, lon: -118.24, fun: 5, work: 5, caption: 'Definitely coming back again.' },
  { slug: 'san-diego',      name: 'San Diego',       region: 'USA', lat: 32.72, lon: -117.16, fun: 5, work: 5, caption: 'Day of the Dead vibes.' },
  { slug: 'new-york',       name: 'New York',        region: 'USA', lat: 40.71, lon: -74.01,  fun: 4, work: 4, caption: 'We ate pizza at midnight at Times Square.' },
  { slug: 'las-vegas',      name: 'Las Vegas',       region: 'USA', lat: 36.17, lon: -115.14, fun: 5, work: 3, caption: 'Smells like freedom.' },
  { slug: 'orlando',        name: 'Orlando',         region: 'USA', lat: 28.54, lon: -81.38,  fun: 5, work: 3, caption: '' },
  { slug: 'miami',          name: 'Miami',           region: 'USA', lat: 25.76, lon: -80.19,  fun: 3, work: 3, caption: '' },
  { slug: 'silicon-valley', name: 'Silicon Valley',  region: 'USA', lat: 37.39, lon: -122.08, fun: 3, work: 3, caption: 'Everyone here are developers.' },
  { slug: 'san-francisco',  name: 'San Francisco',   region: 'USA', lat: 37.77, lon: -122.42, fun: 3, work: 2, caption: '' },
  { slug: 'boston',         name: 'Boston',          region: 'USA', lat: 42.36, lon: -71.06,  fun: 4, work: 5, caption: 'Such a nice city.' },
  { slug: 'chicago',        name: 'Chicago',         region: 'USA', lat: 41.88, lon: -87.63,  fun: 4, work: 2, caption: '' },
  { slug: 'arizona',        name: 'Arizona',         region: 'USA', lat: 34.05, lon: -111.09, fun: 5, work: 1, caption: 'Best views.' },

  // Mexico
  { slug: 'cancun',       name: 'Cancun',       region: 'Mexico', lat: 21.16, lon: -86.85, fun: 4, work: 4, caption: '' }
];

const project = (lat, lon) => ({
  x: ((lon + 180) / 360) * W,
  y: ((90 - lat) / 180) * H
});

/**
 * Cities like Nice/Monaco or Kyoto/Osaka land within a couple of pixels of each
 * other at world scale, which makes the lower ones impossible to hover. Nudge
 * overlapping dots apart deterministically so every one stays reachable, and
 * draw a hairline back to the true position where a dot has moved.
 */
const relax = (points, minDist = 15, iterations = 90) => {
  const laid = points.map((p) => ({ ...p, x: p.trueX, y: p.trueY }));
  for (let it = 0; it < iterations; it += 1) {
    for (let i = 0; i < laid.length; i += 1) {
      for (let j = i + 1; j < laid.length; j += 1) {
        const a = laid[i];
        const b = laid[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist >= minDist) continue;
        if (dist === 0) {
          // Deterministic tie-break so the layout is stable across renders.
          dx = (j % 2 === 0 ? 1 : -1) * 0.5;
          dy = (j % 3 === 0 ? 1 : -1) * 0.5;
          dist = Math.sqrt(dx * dx + dy * dy);
        }
        const push = (minDist - dist) / 2;
        const ux = (dx / dist) * push;
        const uy = (dy / dist) * push;
        a.x -= ux; a.y -= uy;
        b.x += ux; b.y += uy;
      }
    }
  }
  return laid;
};

const Stars = ({ score }) => (
  <span className="wm-stars" aria-label={`${score} out of 5`}>
    {[0, 1, 2, 3, 4].map((i) => (
      <span key={i} className={i < score ? 'wm-star wm-star-on' : 'wm-star'}>★</span>
    ))}
  </span>
);

const WorldMap = () => {
  // Hover previews a place; clicking a dot pins the card so it can be used.
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);
  const [missing, setMissing] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);

  const active = pinned || hovered;

  const dots = useMemo(() => {
    const base = PLACES.map((p) => {
      const { x, y } = project(p.lat, p.lon);
      return { ...p, trueX: x, trueY: y };
    });
    return relax(base);
  }, []);

  const activeDot = dots.find((d) => d.slug === active) || null;

  // Photos are optional: render the slots that have not 404'd.
  const photos = activeDot
    ? Array.from({ length: MAX_PHOTOS }, (_, i) => i + 1)
        .filter((n) => !missing[`${activeDot.slug}-${n}`])
    : [];

  // Restart the carousel whenever the shown place changes.
  useEffect(() => {
    setPhotoIndex(0);
  }, [active]);

  // A photo 404ing can shrink the list under the current index.
  const safeIndex = photos.length ? Math.min(photoIndex, photos.length - 1) : 0;

  const step = useCallback(
    (delta) => {
      if (photos.length < 2) return;
      setPhotoIndex((i) => (i + delta + photos.length) % photos.length);
    },
    [photos.length]
  );

  const togglePin = (slug) => {
    setPinned((current) => (current === slug ? null : slug));
  };

  // Escape closes a pinned card; arrows page through its photos.
  useEffect(() => {
    if (!pinned) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setPinned(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pinned, step]);

  // Flip the card to the other side / above when the dot sits near an edge.
  const cardSide = activeDot && activeDot.x > WORLD_VIEW.x + WORLD_VIEW.w * 0.62 ? 'left' : 'right';
  const cardVert = activeDot && activeDot.y > WORLD_VIEW.y + WORLD_VIEW.h * 0.58 ? 'up' : 'down';

  return (
    <section className="world-map-section">
      <div className="world-map-frame">
        <div className="wm-header">
          <h2 className="wm-title">My footprints</h2>
          <div className="wm-header-body">
          <p className="wm-intro">
            Places I&apos;ve travelled to, some of my favorite photos, along with my completely subjective rankings of them 🌏
          </p>
          <dl className="wm-legend">
            <div className="wm-legend-row">
              <dt>Fun:</dt>
              <dd>How much I enjoyed the place overall.</dd>
            </div>
            <div className="wm-legend-row">
              <dt>Workcation:</dt>
              <dd>
                How good it is for working remotely, based on Wi-Fi availability, cafés,
                weather, noise levels, and overall work environment.
              </dd>
            </div>
          </dl>
          </div>
        </div>

        <div className="world-map-canvas">
          <svg
            className="world-map-svg"
            viewBox={WORLD_VIEWBOX}
            role="img"
            aria-label="Map of places I have travelled to"
          >
            <path className="wm-land" d={WORLD_LAND_PATH} />

            {dots.map((d) => {
              const moved = Math.abs(d.x - d.trueX) + Math.abs(d.y - d.trueY) > 2.5;
              return moved ? (
                <line
                  key={`leader-${d.slug}`}
                  className="wm-leader"
                  x1={d.trueX}
                  y1={d.trueY}
                  x2={d.x}
                  y2={d.y}
                />
              ) : null;
            })}

            {dots.map((d) => (
              <g
                key={d.slug}
                className={
                  `wm-dot${active === d.slug ? ' is-active' : ''}` +
                  `${pinned === d.slug ? ' is-pinned' : ''}`
                }
                onMouseEnter={() => setHovered(d.slug)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(d.slug)}
                onBlur={() => setHovered(null)}
                onClick={() => togglePin(d.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePin(d.slug);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={pinned === d.slug}
                aria-label={d.name}
              >
                <circle className="wm-dot-hit" cx={d.x} cy={d.y} r="12" />
                <circle className="wm-dot-core" cx={d.x} cy={d.y} r="4.5" />
              </g>
            ))}
          </svg>

          {activeDot && (
            <div
              className={
                `wm-card wm-card-${cardSide} wm-card-${cardVert}` +
                `${pinned ? ' is-pinned' : ''}`
              }
              style={{
                left: `${((activeDot.x - WORLD_VIEW.x) / WORLD_VIEW.w) * 100}%`,
                top: `${((activeDot.y - WORLD_VIEW.y) / WORLD_VIEW.h) * 100}%`
              }}
            >
              {photos.length > 0 && (
                <div className="wm-card-media">
                  {/* All slots stay mounted so onError can prune missing files,
                      but only the current one is shown. */}
                  {photos.map((n, i) => (
                    <img
                      key={n}
                      className={i === safeIndex ? 'is-shown' : ''}
                      src={`${process.env.PUBLIC_URL}/travel/${activeDot.slug}-${n}.jpg`}
                      alt={activeDot.name}
                      onError={() =>
                        setMissing((prev) => ({
                          ...prev,
                          [`${activeDot.slug}-${n}`]: true
                        }))
                      }
                    />
                  ))}

                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="wm-nav wm-nav-prev"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="wm-nav wm-nav-next"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                      >
                        ›
                      </button>
                      <div className="wm-pips">
                        {photos.map((n, i) => (
                          <span
                            key={n}
                            className={`wm-pip${i === safeIndex ? ' is-on' : ''}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {pinned && (
                <button
                  type="button"
                  className="wm-close"
                  onClick={() => setPinned(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              )}

              <div className="wm-card-body">
                <h4 className="wm-card-title">{activeDot.name}</h4>
                <p className="wm-card-region">{activeDot.region}</p>
                {activeDot.caption && (
                  <p className="wm-card-caption">{activeDot.caption}</p>
                )}
                <div className="wm-rating">
                  <span className="wm-rating-label">Fun</span>
                  <Stars score={activeDot.fun} />
                </div>
                <div className="wm-rating">
                  <span className="wm-rating-label">Workcation</span>
                  <Stars score={activeDot.work} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
