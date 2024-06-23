import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "tests/setup.ts",
      css: true,
      include: ["tests/'**/*.{test,spec}.?(c|m)[jt]s?(x)'"],
      exclude: [...configDefaults.exclude, "src/**"],
      coverage: {
        provider: "v8", // or 'v8' 'istanbul'
        reporter: ["lcov", "html"],
        include: ["src/components/**"],
        exclude: ["src/**/*.stories.ts"],
      },
    },
  }),
);
