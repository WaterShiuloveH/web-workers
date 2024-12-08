self.addEventListener("message", (event) => {
  const number = event.data;
  const result = number * 2;
  event.source.postMessage(result);

    // Start the MessagePort to begin communication, depend on your use case
    port.start();
});
