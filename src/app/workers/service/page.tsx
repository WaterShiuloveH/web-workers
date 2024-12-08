"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ServiceWorkerCalculation = () => {
  const [result, setResult] = useState<number | string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/workers/service-worker.js")
        .then(() => {
          console.log("Service Worker Registered");

          // Check if the service worker is already controlling the page
          //option 1
          if (!navigator.serviceWorker.controller) {
            window.location.reload();
          }

          //option 2
          navigator.serviceWorker.ready
            .then((registration) => {
              console.log("Service Worker is ready:", registration);
              // Perform any actions when the service worker is ready
            })
            .catch(console.error);
        })
        .catch(console.error);

      navigator.serviceWorker.addEventListener("message", (event) => {
        console.info("Received data from service worker:", event.data);
        setResult(event.data);
      });
    }
  }, []);

  const handleCalculate = () => {
    const number = parseInt(inputRef.current?.value || "0", 10);
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage(number);
    } else {
      console.error("Service worker is not controlling the page.");
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
          Service Worker Calculation Demo
        </h1>
      </Link>
      <input
        style={{
          color: "green",
          backgroundColor: "white",
        }}
        ref={inputRef}
        placeholder="Enter a number"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default ServiceWorkerCalculation;
