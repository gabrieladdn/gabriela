import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      ".astro/**",
      ".netlify/**",
      "dist/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "coverage/**",
    ],
  },
  {
    files: ["**/*.astro"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  prettierConfig,
];
