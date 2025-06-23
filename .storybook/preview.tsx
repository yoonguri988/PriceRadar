import React from "react"; // JSX 쓰는 경우 필요
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "@/styles/global.scss"; // 전역 SCSS 적용

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: "responsive",
    },
    a11y: {
      disable: false, // 접근성 검사 수행
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1e1e1e" },
      ],
    },
  },
  loaders: [mswLoader],
  decorators: [(Story) => <Story />],
};
export default preview;
