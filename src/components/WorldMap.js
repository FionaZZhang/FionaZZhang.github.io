import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import './WorldMap.css';
import { WORLD_LAND_PATH, WORLD_VIEW } from './worldLandPath';

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

const MAX_ZOOM = 8;
const BASE_DOT_R = 4.5;
const BASE = WORLD_VIEW;

const clampView = (v) => {
  // Never zoom out past the whole world, and never pan outside it.
  const w = Math.min(BASE.w, Math.max(BASE.w / MAX_ZOOM, v.w));
  const h = w * (BASE.h / BASE.w);
  return {
    w,
    h,
    x: Math.min(BASE.x + BASE.w - w, Math.max(BASE.x, v.x)),
    y: Math.min(BASE.y + BASE.h - h, Math.max(BASE.y, v.y))
  };
};

// Below this width the card becomes a bottom sheet, so it must not be
// positioned next to its dot.
const SHEET_QUERY = '(max-width: 640px)';

const WorldMap = () => {
  const [isSheet, setIsSheet] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(SHEET_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(SHEET_QUERY);
    const onChange = (e) => setIsSheet(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Hover previews a place; clicking a dot pins the card so it can be used.
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(null);
  const [missing, setMissing] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [view, setView] = useState(BASE);

  const svgRef = useRef(null);
  const pointers = useRef(new Map());   // active pointers, for pinch
  const gesture = useRef({ dist: 0, mid: null, moved: false });

  const active = pinned || hovered;
  const zoom = BASE.w / view.w;
  const isZoomed = zoom > 1.02;

  const dots = useMemo(() => {
    const base = PLACES.map((p) => {
      const { x, y } = project(p.lat, p.lon);
      return { ...p, trueX: x, trueY: y };
    });
    return relax(base);
  }, []);

  const activeDot = dots.find((d) => d.slug === active) || null;

  const photos = activeDot
    ? Array.from({ length: MAX_PHOTOS }, (_, i) => i + 1)
        .filter((n) => !missing[`${activeDot.slug}-${n}`])
    : [];

  useEffect(() => { setPhotoIndex(0); }, [active]);

  const safeIndex = photos.length ? Math.min(photoIndex, photos.length - 1) : 0;

  const step = useCallback((delta) => {
    if (photos.length < 2) return;
    setPhotoIndex((i) => (i + delta + photos.length) % photos.length);
  }, [photos.length]);

  const togglePin = (slug) => {
    if (gesture.current.moved) return;          // a drag, not a tap
    setPinned((current) => (current === slug ? null : slug));
  };

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

  /* ---------------- zoom + pan ---------------- */

  // Scale about a client point so the world stays put under the fingers.
  const zoomAt = (clientX, clientY, factor) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    setView((v) => {
      const fx = (clientX - rect.left) / rect.width;
      const fy = (clientY - rect.top) / rect.height;
      const wx = v.x + fx * v.w;
      const wy = v.y + fy * v.h;
      const w = v.w / factor;
      const h = v.h / factor;
      return clampView({ x: wx - fx * w, y: wy - fy * h, w, h });
    });
  };

  const panBy = (dxClient, dyClient) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    setView((v) => clampView({
      ...v,
      x: v.x - (dxClient / rect.width) * v.w,
      y: v.y - (dyClient / rect.height) * v.h
    }));
  };

  const onPointerDown = (e) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    gesture.current.moved = false;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current.dist = Math.hypot(a.x - b.x, a.y - b.y);
    }
  };

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const next = { x: e.clientX, y: e.clientY };
    pointers.current.set(e.pointerId, next);

    if (pointers.current.size === 2) {
      // Pinch: scale by the change in finger separation.
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (gesture.current.dist > 0) {
        zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, dist / gesture.current.dist);
      }
      gesture.current.dist = dist;
      gesture.current.moved = true;
      return;
    }

    // Single pointer drags the map, but only once zoomed in — otherwise the
    // page must stay scrollable under the finger.
    if (!isZoomed) return;
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) gesture.current.moved = true;
    if (gesture.current.moved) panBy(dx, dy);
  };

  const endPointer = (e) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) gesture.current.dist = 0;
    // let the click handler see the flag, then clear it
    setTimeout(() => { gesture.current.moved = false; }, 0);
  };

  const onWheel = (e) => {
    if (!e.ctrlKey && !e.metaKey) return;   // don't hijack normal page scroll
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1.12 : 1 / 1.12);
  };

  const zoomCentre = (factor) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, factor);
  };

  // Counter-scale dots so they keep a constant on-screen size while zoomed.
  const dotR = BASE_DOT_R * (view.w / BASE.w);

  const cardSide = activeDot && activeDot.x > view.x + view.w * 0.62 ? 'left' : 'right';
  const cardVert = activeDot && activeDot.y > view.y + view.h * 0.58 ? 'up' : 'down';

  return (
    <section className="world-map-section">
      <div className="world-map-frame">
        <div className="wm-header">
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

        <div className={`world-map-canvas${isZoomed ? ' is-zoomed' : ''}`}>
          <svg
            ref={svgRef}
            className="world-map-svg"
            viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
            role="img"
            aria-label="Map of places I have travelled to"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
            onPointerLeave={endPointer}
            onWheel={onWheel}
          >
            <path className="wm-land" d={WORLD_LAND_PATH} vectorEffect="non-scaling-stroke" />

            {dots.map((d) => {
              const moved = Math.abs(d.x - d.trueX) + Math.abs(d.y - d.trueY) > 2.5;
              return moved ? (
                <line
                  key={`leader-${d.slug}`}
                  className="wm-leader"
                  x1={d.trueX} y1={d.trueY} x2={d.x} y2={d.y}
                  vectorEffect="non-scaling-stroke"
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
                  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePin(d.slug); }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={pinned === d.slug}
                aria-label={d.name}
              >
                <circle className="wm-dot-hit" cx={d.x} cy={d.y} r={dotR * 3.6} />
                {d.slug === 'melbourne' ? (
                  /* home */
                  <g
                    className="wm-home"
                    transform={`translate(${d.x} ${d.y}) scale(${
                      ((active === d.slug ? dotR * 1.35 : dotR) / 4.5) * 0.95
                    })`}
                    vectorEffect="non-scaling-stroke"
                  >
                    <path d="M-6.4 -0.6 L0 -6.6 L6.4 -0.6" vectorEffect="non-scaling-stroke" />
                    <path d="M-4.6 -1.1 V5 H4.6 V-1.1" vectorEffect="non-scaling-stroke" />
                    <path d="M-1.5 5 V1.5 H1.5 V5" vectorEffect="non-scaling-stroke" />
                  </g>
                ) : (
                  <circle
                    className="wm-dot-core"
                    cx={d.x} cy={d.y}
                    r={active === d.slug ? dotR * 1.55 : dotR}
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </g>
            ))}
          </svg>

          <p className="wm-hint" aria-hidden="true">Zoom and tap</p>
          <div className="wm-zoom" role="group" aria-label="Zoom">
            <button type="button" onClick={() => zoomCentre(1 / 1.6)} aria-label="Zoom out">−</button>
            <button type="button" onClick={() => zoomCentre(1.6)} aria-label="Zoom in">+</button>
            {isZoomed && (
              <button type="button" className="wm-zoom-reset" onClick={() => setView(BASE)}>
                Reset
              </button>
            )}
          </div>

          {activeDot && (
            <div
              className={
                `wm-card${isSheet ? ' is-sheet' : ` wm-card-${cardSide} wm-card-${cardVert}`}` +
                `${pinned ? ' is-pinned' : ''}`
              }
              /* Anchored to its dot on desktop; a bottom sheet on phones, where
                 an inline left/top would override the fixed positioning. */
              style={
                isSheet
                  ? undefined
                  : {
                      left: `${((activeDot.x - view.x) / view.w) * 100}%`,
                      top: `${((activeDot.y - view.y) / view.h) * 100}%`
                    }
              }
            >
              {photos.length > 0 && (
                <div className="wm-card-media">
                  {photos.map((n, i) => (
                    <img
                      key={n}
                      className={i === safeIndex ? 'is-shown' : ''}
                      src={`${process.env.PUBLIC_URL}/travel/${activeDot.slug}-${n}.jpg`}
                      alt={activeDot.name}
                      onError={() =>
                        setMissing((prev) => ({ ...prev, [`${activeDot.slug}-${n}`]: true }))
                      }
                    />
                  ))}

                  {photos.length > 1 && (
                    <>
                      <button type="button" className="wm-nav wm-nav-prev" onClick={() => step(-1)} aria-label="Previous photo">‹</button>
                      <button type="button" className="wm-nav wm-nav-next" onClick={() => step(1)} aria-label="Next photo">›</button>
                      <div className="wm-pips">
                        {photos.map((n, i) => (
                          <span key={n} className={`wm-pip${i === safeIndex ? ' is-on' : ''}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {pinned && (
                <button type="button" className="wm-close" onClick={() => setPinned(null)} aria-label="Close">×</button>
              )}

              <div className="wm-card-body">
                <h4 className="wm-card-title">{activeDot.name}</h4>
                <p className="wm-card-region">{activeDot.region}</p>
                {activeDot.caption && <p className="wm-card-caption">{activeDot.caption}</p>}
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
