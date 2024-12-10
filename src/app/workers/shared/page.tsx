"use client";

import Link from "next/link";

import { useState, useRef } from "react";

const SharedWorkerDemo = () => {
  const [response, setResponse] = useState("");
  const [shared, setShared] = useState(false);
  const sharedRef = useRef<SharedWorker | null>(null);

  const handleStartShared = () => {
    if (!sharedRef.current) {
      sharedRef.current = new SharedWorker("/workers/shared-worker.js");
      sharedRef.current.port.start(); // Activate the port
    }
    setShared(true);
  };

  const handleSendMessage = () => {
    if (sharedRef.current) {
      sharedRef.current.port.onmessage = (event) => {
        console.log("Worker connected", event);
        setResponse(event.data);
      };

      sharedRef.current.port.postMessage("Hello from Shared Worker!");
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
      <Link href="/">
        <h1 style={{ cursor: "pointer", border: "2px orange solid" }}>
          Shared Worker Demo
        </h1>
      </Link>
      <button
        style={{ border: "2px green solid", cursor: "pointer" }}
        onClick={handleStartShared}
      >
        start shared
      </button>
      {shared && (
        <button
          style={{ border: "2px red solid", cursor: "pointer" }}
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      )}
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
