module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "error", // Show error for unused variables
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused variables starting with underscore
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
