"use client";
import { useState, useRef } from "react";

const DedicatedWorkerPage = () => {
  const [result, setResult] = useState<number | null>(null);

  // Initialize worker when the page loads
  const workerRef = useRef<Worker | null>(null);

  const startWorker = () => {
    // Load the worker script from the public directory
    workerRef.current = new Worker("/workers/dedicated.js");

    // Listen for messages from the worker
    workerRef.current.onmessage = (e) => {
      setResult((prev) => prev + e.data);
    };

    workerRef.current.onerror = (err) => {
      console.error("Error in worker:", err);
    };

    // Send data to the worker
    workerRef.current.postMessage(10);
  };

  const stopWorker = () => {
    if (workerRef.current) {
      setResult(null);
      workerRef.current = null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "1rem",
      }}
    >
      <h1>Dedicated Web Worker Example</h1>
      <button
        style={{ border: "2px green solid", cursor: "pointer" }}
        onClick={startWorker}
      >
        Start Worker
      </button>
      <button
        style={{ border: "2px red solid", cursor: "pointer" }}
        onClick={stopWorker}
      >
        Stop Worker
      </button>
      {result !== null && <p>Result from worker: {result}</p>}
    </div>
  );
};

export default DedicatedWorkerPage;
