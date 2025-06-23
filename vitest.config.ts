import { defineConfig } from "vitest/config";
import storybookTest from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    storybookTest({ configDir: ".storybook" }), // ✅ 이 형태
  ],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  test: {
    name: "unit-tests",
    environment: "jsdom",
    globals: true,
    setupFiles: [".storybook/vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", ".storybook"],
  },
});
