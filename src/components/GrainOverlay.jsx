import { useMemo } from "react";

function makeGrainUrl() {
  const sz = 150;
  const c = document.createElement("canvas");
  c.width = sz;
  c.height = sz;
  const ctx = c.getContext("2d");
  const d = ctx.createImageData(sz, sz);
  for (let i = 0; i < d.data.length; i += 4) {
    const v = (Math.random() * 255) | 0;
    d.data[i] = v;
    d.data[i + 1] = v;
    d.data[i + 2] = v;
    d.data[i + 3] = 255;
  }
  ctx.putImageData(d, 0, 0);
  return c.toDataURL("image/png");
}

let _cached = null;
function getGrainUrl() {
  if (!_cached) _cached = makeGrainUrl();
  return _cached;
}

export default function GrainOverlay({ opacity = 0.13 }) {
  const url = useMemo(() => getGrainUrl(), []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity,
        mixBlendMode: "overlay",
        backgroundImage: `url("${url}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "150px 150px",
      }}
    />
  );
}