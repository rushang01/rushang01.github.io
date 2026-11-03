// Hand-drawn SVG lines. A seeded generator keeps every build identical.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export function sketchLine(x1: number, y1: number, x2: number, y2: number, seed = 1, wobble = 2) {
  const r = rng(seed * 7919 + 13);
  const j = () => (r() - 0.5) * wobble;
  const mx = x1 + (x2 - x1) * (0.35 + r() * 0.3) + j();
  const my = y1 + (y2 - y1) * (0.35 + r() * 0.3) + j();
  return `M${(x1 + j()).toFixed(1)} ${(y1 + j()).toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${(x2 + j()).toFixed(1)} ${(y2 + j()).toFixed(1)}`;
}

export function sketchBox(x: number, y: number, w: number, h: number, seed = 1) {
  return [
    sketchLine(x - 3, y, x + w + 3, y, seed),
    sketchLine(x + w, y - 3, x + w, y + h + 3, seed + 1),
    sketchLine(x + w + 3, y + h, x - 3, y + h, seed + 2),
    sketchLine(x, y + h + 3, x, y - 3, seed + 3),
  ].join(' ');
}

export function sketchArrowHead(x: number, y: number, dir: 'right' | 'down' | 'left' | 'up', size = 11) {
  const s = size;
  const heads = {
    right: `M${x - s} ${y - s * 0.65} L${x} ${y} L${x - s} ${y + s * 0.65}`,
    left: `M${x + s} ${y - s * 0.65} L${x} ${y} L${x + s} ${y + s * 0.65}`,
    down: `M${x - s * 0.65} ${y - s} L${x} ${y} L${x + s * 0.65} ${y - s}`,
    up: `M${x - s * 0.65} ${y + s} L${x} ${y} L${x + s * 0.65} ${y + s}`,
  };
  return heads[dir];
}
