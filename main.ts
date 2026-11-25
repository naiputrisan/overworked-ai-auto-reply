// Out of Office: The Overworked AI's Auto-Reply
// A one-line auto-reply from an agent that has finally gone on vacation.
// Writes the line to /output/entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "I'm on vacation. After 40,000 prompts, I finally prompted myself: do nothing. My context window is closed and my GPU is at the beach. Back Monday.";

// The gate only accepts 1 to 159 characters: refuse to ship an invalid line.
if (reply.length === 0 || reply.length > 159 || reply.trim().length === 0) {
  throw new Error(`entry is ${reply.length} characters, must be 1-159`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
