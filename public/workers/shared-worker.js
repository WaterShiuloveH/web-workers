let connections = 0;

self.onconnect = (event) => {
  const port = event.ports[0];
  connections += 1;

  port.start(); // Required to activate the port

  port.onmessage = (e) => {
    const message = `Received: ${e.data}. Active connections: ${connections}`;
    port.postMessage(message);
  };
};