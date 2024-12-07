self.onmessage = (e) => {
  console.log("Received data in worker:", e.data);
  const result = e.data * 2;
  postMessage(result);
};

self.onerror = (e) => {
  console.error("Error in worker:", e.message);
};
