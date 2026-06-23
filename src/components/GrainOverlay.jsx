import { useEffect, useRef } from "react";

export default function GrainOverlay({ opacity = 0.12 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const sz = 200;
    canvas.width = sz;
    canvas.height = sz;
    const ctx = canvas.getContext("2d");
    const d = ctx.createImageData(sz, sz);
    for (let i = 0; i < d.data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      d.data[i] = v;
      d.data[i + 1] = v;
      d.data[i + 2] = v;
      d.data[i + 3] = 255;
    }
    ctx.putImageData(d, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity,
        mixBlendMode: "soft-light",
        imageRendering: "pixelated",
      }}
    />
  );
}