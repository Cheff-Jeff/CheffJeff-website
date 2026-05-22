export default function (cards: string[]): string[] {
  let images = [...cards];

  if (images.length === 0) return [];

  let currentIndex = cards.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [images[currentIndex]!, images[randomIndex]!] = [
      images[randomIndex]!,
      images[currentIndex]!,
    ];
  }

  return images;
}
