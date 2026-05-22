export default function (width: number | null, height: number | null): string {
  if (!width || !height) return "rect(0px, 0px, 0px, 0px)";

  const sliceHeight = randomImageDiams(40) + 5;
  const top = randomImageDiams(height);
  const bottom = top + sliceHeight;

  const left = randomImageDiams(width);
  const right = randomImageDiams(width - left) + left;

  return `rect(${top}px, ${right}px, ${bottom}px, ${left}px)`;
}
