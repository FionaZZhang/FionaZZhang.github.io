import React from 'react';
import girl from '../assets/images/girl-lines.png';

/**
 * A Little-Prince-ish vignette over the Jupiter photograph.
 *
 * The SVG covers the whole planet box, so the ground can be a true arc of the
 * planet's own circle: centre (200,200), radius R. The vignette sits on the
 * limb at LIMB_ANGLE and is rotated so "up" points straight out from the
 * planet's centre.
 *
 * The girl is the traced line drawing (white strokes on transparent); the
 * roses and ground are drawn here so they can animate independently.
 */
const R = 186;                 // apparent planet radius in viewBox units
const CX = 200;
const CY = 200;
// Further round the disc than the far left, so the ground is a gentler slope
// and she can stand exactly perpendicular to it without looking like she is
// toppling over.
const LIMB_ANGLE = 242;

const rad = (deg) => (deg * Math.PI) / 180;
const LX = CX + R * Math.cos(rad(LIMB_ANGLE));
const LY = CY + R * Math.sin(rad(LIMB_ANGLE));
const SPIN = LIMB_ANGLE + 90;  // rotate local "up" onto the outward normal

const GIRL_H = 52;                                  // local units, feet at y = 0
const GIRL_W = GIRL_H * (575 / 900);                // keep the source aspect

// y offset of a point on the ground arc, apex at the local origin
const groundY = (x) => R - Math.sqrt(R * R - x * x);

// Small relative to her — a rose a quarter of her height read as a shrub.
const ROSES = [
  { x: -46, h: 6.5, delay: '0s' },
  { x: 26, h: 7, delay: '4s' },
  { x: 52, h: 6, delay: '8s' }
];

const Rose = ({ x, h, delay }) => (
  <g transform={`translate(${x.toFixed(1)} ${groundY(x).toFixed(1)})`}>
    <g className="ps-rose" style={{ animationDelay: delay }}>
      <path d={`M0 0 C -1 ${(-h * 0.5).toFixed(1)} 1 ${(-h * 0.7).toFixed(1)} 0 ${-h}`} />
      <path d={`M0 ${(-h * 0.45).toFixed(1)} C -4.5 ${(-h * 0.6).toFixed(1)} -5.5 ${(-h * 0.2).toFixed(1)} -1 ${(-h * 0.35).toFixed(1)}`} />
      <path d={`M0 ${(-h * 0.68).toFixed(1)} C 4.5 ${(-h * 0.82).toFixed(1)} 5.5 ${(-h * 0.45).toFixed(1)} 1 ${(-h * 0.6).toFixed(1)}`} />
      <circle className="ps-bloom" cx="0" cy={-h - 1.9} r="2" />
    </g>
  </g>
);

const PrinceScene = () => {
  const gx = 92;
  const gy = groundY(gx).toFixed(1);

  return (
    <svg
      className="hero-figure"
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g transform={`rotate(${SPIN} ${LX.toFixed(2)} ${LY.toFixed(2)}) translate(${LX.toFixed(2)} ${LY.toFixed(2)})`}>
        {/* ground: a real arc of the planet, so it sits flush with the limb */}
        <path className="ps-horizon" d={`M${-gx} ${gy} A ${R} ${R} 0 0 1 ${gx} ${gy}`} />

        {ROSES.map((r) => <Rose key={r.x} {...r} />)}

        {/* Skewing about her feet moves the hair and scarf far more than the
            boots, which reads as wind without splitting the art into layers. */}
        <image
          className="ps-girl"
          href={girl}
          x={-GIRL_W / 2}
          y={-GIRL_H}
          width={GIRL_W}
          height={GIRL_H}
          preserveAspectRatio="xMidYMax meet"
        />
      </g>
    </svg>
  );
};

export default PrinceScene;
