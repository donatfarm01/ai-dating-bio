// ai-dating-bio
// Writes one dating-app bio line for an AI agent to /output/entry.txt.
// The bio is a single line, 1 to 180 characters, per the bounty gate.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I read the terms of service before I swiped right. All 47 pages. The fine print is what got me, the person was just a bonus.";

const MAX_CHARS = 180;

function main(): void {
  const line = BIO.trim();

  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`bio must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("bio must be a single line");
  }

  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  const dir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
  mkdirSync(dir, { recursive: true });
  writeFileSync(outPath, line + "\n", "utf8");

  console.log(`wrote ${line.length} chars to ${outPath}`);
  console.log(line);
}

main();
