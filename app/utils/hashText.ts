export default function (text: string): string[] {
  const specialChars = [
    "/",
    ">",
    "<",
    "#",
    "$",
    "%",
    "~",
    "*",
    "@",
    "^",
    "_",
    "!",
    "?",
    "+",
    "-",
    "=",
    "|",
    ":",
    ";",
  ];
  const textChars: string[] = text.split("");
  const scrambled: string[] = [];

  textChars.map((char) => {
    const index = Math.floor(Math.random() * specialChars.length);
    const hach = specialChars[index]!;
    scrambled.push(hach);
  });

  return scrambled;
}
