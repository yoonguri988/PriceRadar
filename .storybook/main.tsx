import path from "path";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "msw-storybook-addon",
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    config.resolve = {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    };
    return config;
  },
};

export default config;
