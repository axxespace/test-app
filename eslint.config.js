import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx,js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2022
            }
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin
        },
        settings: {
            react: { version: "detect" }
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
        }
    },

    prettierConfig
];
