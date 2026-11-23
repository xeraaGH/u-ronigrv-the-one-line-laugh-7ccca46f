// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one original funny line (a single sentence, at most 200
// characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought a plant to prove I could keep something alive, and it died while I was reading an article called 'Plants That Are Impossible to Kill.'";

// Gate check: the entry must be valid UTF-8 text of 1 to 200 characters,
// not only white space, and a single sentence — fail loudly otherwise.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Line is ${chars.length} characters; must be 1-200.`);
}
if (!/\S/.test(LINE)) {
  throw new Error("Line must not be only white space.");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !/\.\s*['"]?$/.test(LINE)) {
  throw new Error("Line must stand alone as a single sentence.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
