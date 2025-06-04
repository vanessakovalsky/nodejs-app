import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint-define-config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
]);
