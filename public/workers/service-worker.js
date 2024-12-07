self.addEventListener("message", (event) => {
  const number = event.data;
  const result = number * 2;
  event.source.postMessage(result);
});
s