"use client";

import Link from "next/link";

import { useState } from "react";

const SharedWorkerDemo = () => {
  const [response, setResponse] = useState("");

  const handleMessage = () => {
    const worker = new SharedWorker("/workers/shared-worker.js");
    worker.port.onmessage = (event) => {
      console.log("Worker connected", event);
      setResponse(event.data);
    };
    worker.port.postMessage("Hello from Shared Worker!");
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
      <Link href="/">
        <h1 style={{ cursor: "pointer", border: "2px orange solid" }}>
          Shared Worker Demo
        </h1>
      </Link>
      <button
        style={{ border: "2px red solid", cursor: "pointer" }}
        onClick={handleMessage}
      >
        Send Message
      </button>
      <p>Response:</p>
      <p
        style={{
          color: "green",
        }}
      >
        {response}
      </p>
    </div>
  );
};

export default SharedWorkerDemo;
