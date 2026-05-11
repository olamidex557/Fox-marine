// Vercel SSR build:
// - Pins the SSR entry filename so the post-build script can wire it into
//   .vercel/output/functions/ssr.func/ deterministically.
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isVercelBuild =
  process.env.npm_lifecycle_event === "build:vercel" || process.env.VERCEL === "1";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    react(),
  ],
  environments: {
    ssr: {
      ...(isVercelBuild
        ? {
            resolve: {
              // Bundle ALL npm deps into the SSR output so Vercel's Edge runtime
              // (which has no node_modules resolution) can execute it standalone.
              noExternal: true,
            },
          }
        : {}),
      build: {
        rollupOptions: {
          output: {
            entryFileNames: "index.js",
            chunkFileNames: "chunks/[name]-[hash].js",
            assetFileNames: "assets/[name]-[hash][extname]",
          },
        },
      },
    },
  },
});
