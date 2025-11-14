import js from "@eslint/js";
import globals from "globals";

export default [
    {
        ignores: ["coverage/**", "dist/**"],
    },
    js.configs.recommended,
    {
        files: ["src/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node,
        },
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-console": "off",
            "prefer-const": "error",
            "complexity": ["warn", 10],
        },
    },
    {
        files: ["test/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: { ...globals.node, ...globals.jest },
        },
        rules: {
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "no-console": "off",
            "prefer-const": "error",
            "complexity": ["warn", 10],
        },
    },
];
