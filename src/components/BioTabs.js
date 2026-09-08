import React, { useState } from 'react';
import { Hand, Hammer, Telescope, Plane, ArrowRight } from 'lucide-react';

/**
 * The bio, split into four parts. Each part is an icon control: hovering
 * previews its paragraphs, clicking pins them. Read in order, the four panels
 * are still the same continuous bio.
 */
const PARTS = [
  {
    key: 'me',
    label: 'Me',
    icon: Hand,
    body: [
      <>
        Hellooooo! I&apos;m Fiona 👩🏼‍💻, a Machine Learning Engineer based in{' '}
        Melbourne 🇦🇺.
      </>,
      <>This website isn&apos;t only about work, tho 👀.</>
    ]
  },
  {
    key: 'build',
    label: 'Build Stuff',
    icon: Hammer,
    body: [
      <>
        I build AI systems that actually ship 🤖 — agents, retrieval systems, evals, and all the
        unglamorous plumbing in between.
      </>,
      <>
        The part I care about is whether a clever demo survives contact with real users.
      </>
    ]
  },
  {
    key: 'curious',
    label: 'Stay Curious',
    icon: Telescope,
    body: [
      <>
        I&apos;ve always had a bit of serial curiosity 🧐: I get excited about
        something, dive deep into it, and somehow end up somewhere completely different.
      </>,
      <>
        I started my bachelor&apos;s at the University of Melbourne studying
        physics 🪐 before specialising in Computer Software Systems 💻, and
        studied Virtual Reality 🥽 at the University of Copenhagen 🇩🇰 along the way.
      </>,
      <>
        Then came my master&apos;s at Carnegie Mellon University 🎓, where I kept
        trying a little bit of everything: computer networks 🌐, information security 🔐,
        autonomous racing cars 🏎️, and training LLMs 🧠.
      </>
    ]
  },
  {
    key: 'explore',
    label: 'Keep Exploring',
    icon: Plane,
    body: [
      <>
        If you ask me what my dream job is, I&apos;d love to eventually work somewhere in the
        space or rocket industry 🔭. There&rsquo;s just something romantic about space...
      </>,
      <>
        Outside of work you&apos;ll usually find me plotting my next trip ✈️. My partner and I are
        trying to make the most of Australia&apos;s generous workplace benefits and become{' '}
        part-time digital nomads 🌏, working from different corners of the world
        whenever we can.
      </>
    ]
  }
];

const BioTabs = () => {
  const [pinned, setPinned] = useState(0);
  const [hovered, setHovered] = useState(null);
  const activeIndex = hovered !== null ? hovered : pinned;
  const active = PARTS[activeIndex];
  const Icon = active.icon;

  return (
    <div className="biotabs">
      <div className="biotabs-tabs">
        {PARTS.map((part, i) => {
          const TabIcon = part.icon;
          return (
            <button
              key={part.key}
              type="button"
              className={`biotabs-tab${activeIndex === i ? ' is-active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              onClick={() => { setPinned(i); setHovered(null); }}
              aria-pressed={pinned === i}
              aria-label={part.label}
              title={part.label}
            >
              <TabIcon size={20} strokeWidth={1.75} />
            </button>
          );
        })}
        <button
          type="button"
          className="biotabs-next"
          onClick={() => setPinned((i) => (i + 1) % PARTS.length)}
          aria-label="Next part of the bio"
          title="Next"
        >
          <ArrowRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="biotabs-panel" key={active.key}>
        <span className="biotabs-icon" aria-hidden="true">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <div className="biotabs-copy">
          {active.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioTabs;
