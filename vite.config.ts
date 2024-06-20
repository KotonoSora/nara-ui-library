import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      exclude: ["src/**/*.mdx", "src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync(["src/components/**/index.tsx", "src/main.ts"]).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = relative(
            "src",
            file.slice(0, file.length - extname(file).length),
          );
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        }),
      ),
      output: {
        entryFileNames: "[name].[format].js",
        assetFileNames: "[ext]/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    emptyOutDir: true,
  },
  publicDir: false,
});
