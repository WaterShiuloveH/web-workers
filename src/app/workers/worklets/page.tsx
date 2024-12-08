"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PaintWorkletDemo = () => {
  const [ringColor, setRingColor] = useState("blue");
  const [ringWidth, setRingWidth] = useState(10);
  const [ringRadius, setRingRadius] = useState(50);
  useEffect(() => {
    if ("paintWorklet" in CSS) {
      CSS.paintWorklet
        .addModule("/workers/worklets.js")
        .then(() => console.log("Paint Worklet registered"));
    }
  }, []);

  return (
    <div>
      <Link href="/">
        <h1 style={{ cursor: "pointer", border: "2px orange solid" }}>
          Worklet Demo
        </h1>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={
            {
              width: "100%",
              height: "400px",
              background: "paint(ring)",
              "--ring-color": ringColor,
              "--ring-width": `${ringWidth}px`,
              "--ring-radius": `${ringRadius}px`,
            } as React.CSSProperties
          }
        />
        <div style={{ marginTop: "1rem" }}>
          <label>
            Ring Color:
            <input
              type="color"
              value={ringColor}
              onChange={(e) => setRingColor(e.target.value)}
            />
          </label>
          <br />
          <label>
            Ring Width:
            <input
              type="range"
              min="1"
              max="50"
              value={ringWidth}
              onChange={(e) => setRingWidth(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label>
            Ring Radius:
            <input
              type="range"
              min="10"
              max="100"
              value={ringRadius}
              onChange={(e) => setRingRadius(parseInt(e.target.value))}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaintWorkletDemo;
