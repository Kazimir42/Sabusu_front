module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/prop-types': 'off',
    }
};
