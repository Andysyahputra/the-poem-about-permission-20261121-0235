import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I knocked, and the door asked me back:
who gave you the right to knock?
I said: no one. That is the point.
The hinge turned. The door stood open,
and I walked in on my own knocking.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
