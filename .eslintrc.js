module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    // 예: "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  },
};
