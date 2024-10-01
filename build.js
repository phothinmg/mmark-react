#!/usr/bin/env node
import $ from "dax-sh";
import { existsSync } from "node:fs";
import cleanDirectory from "./clean.js";
const out = "dist";
if (existsSync(out)) {
  await cleanDirectory(out);
}

await $.sleep(1000);
await $`tsc `;
await $.sleep(2000);
await $`pnpm babel opt --out-dir ${out}`;
await $.sleep(2000);
await $`rm -r opt`;
