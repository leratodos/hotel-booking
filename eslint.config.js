import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
