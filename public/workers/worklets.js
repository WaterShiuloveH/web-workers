class RingPainter {
  static get inputProperties() {
    return ["--ring-color", "--ring-width", "--ring-radius"];
  }

  paint(ctx, size, properties) {
    const color = properties.get("--ring-color").toString().trim() || "black";
    const width = parseFloat(properties.get("--ring-width")) || 10;
    const radius =
      parseFloat(properties.get("--ring-radius")) ||
      Math.min(size.width, size.height) / 4;

    const centerX = size.width / 2;
    const centerY = size.height / 2;

    // Draw the ring
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

registerPaint("ring", RingPainter);
