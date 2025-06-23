// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // 필요에 따라 커스텀 규칙 추가
  },
};
