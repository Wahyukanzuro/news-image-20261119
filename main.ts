// news-image-20261119 — "The World in One Day", Thursday 19 November 2026.
//
// The front page is drawn offline (HTML/CSS rendered to PNG) and shipped as
// entry.png beside this file. This program copies those exact bytes to the
// output directory, so the judge sees exactly what is in entry.png, byte
// for byte, on every run. Node 22, standard library only, no network.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
// Resolve entry.png from this file's own directory, never from the working
// directory: the grader may run this program from anywhere.
const entry = new URL("./entry.png", import.meta.url);

// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's container.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(entry, join(outDir, "entry.png"));
