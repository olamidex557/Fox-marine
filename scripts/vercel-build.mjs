#!/usr/bin/env node
// Assemble Vercel Build Output API v3 layout from `dist/`.
// Layout produced:
//   .vercel/output/
//     config.json                      -> filesystem first, else SSR function
//     static/                          <- copy of dist/client (SPA assets)
//     functions/ssr.func/
//       .vc-config.json                -> Node.js function metadata
//       index.js                       -> wraps dist/server SSR fetch handler
//       (all other dist/server files copied alongside)
import { cp, mkdir, rm, writeFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distClient = path.join(root, "dist", "client");
const distServer = path.join(root, "dist", "server");
const out = path.join(root, ".vercel", "output");
const outStatic = path.join(out, "static");
const outFn = path.join(out, "functions", "ssr.func");

if (!existsSync(distClient) || !existsSync(distServer)) {
  console.error("[vercel-build] missing dist/client or dist/server. Run `vite build` first.");
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(outStatic, { recursive: true });
await mkdir(outFn, { recursive: true });

// 1. Static assets
await cp(distClient, outStatic, { recursive: true });

// 2. Copy SSR bundle into the function directory
const serverEntries = await readdir(distServer);
for (const name of serverEntries) {
  const src = path.join(distServer, name);
  const dest = path.join(outFn, name);
  const s = await stat(src);
  await cp(src, dest, { recursive: s.isDirectory() });
}

// Sanity-check the SSR entry exists
if (!existsSync(path.join(outFn, "index.js"))) {
  console.error("[vercel-build] dist/server/index.js not found — SSR entry missing.");
  process.exit(1);
}

// 3. Node.js function metadata. The TanStack/React SSR bundle uses Node
//    stream and crypto modules, so it cannot run as a Vercel Edge Function.
await writeFile(
  path.join(outFn, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "entry.js",
      launcherType: "Nodejs",
      shouldAddHelpers: true,
      shouldAddSourcemapSupport: true,
    },
    null,
    2,
  ),
);

// Keep the wrapper ESM so it can import the Vite SSR output.
await writeFile(path.join(outFn, "package.json"), JSON.stringify({ type: "module" }, null, 2));

// 4. Web-standard Vercel Function wrapper that adapts the TanStack Start
//    `{ fetch }` default export.
await writeFile(
  path.join(outFn, "entry.js"),
  `import server from "./index.js";

export default {
  fetch(request, ctx) {
    return server.fetch(request, {}, ctx);
  },
};
`,
);

// 5. Routing config: filesystem first (serves /assets, etc.), else SSR fn
await writeFile(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [{ handle: "filesystem" }, { src: "/.*", dest: "/ssr" }],
    },
    null,
    2,
  ),
);

console.log("[vercel-build] .vercel/output ready");
