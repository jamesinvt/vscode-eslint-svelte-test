module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:svelte/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  overrides: [
    {
      files: ["**/*.svelte"],
      parser: "svelte-eslint-parser",
    },
  ],
};
