// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
    'prettier',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'require-jsdoc': 'off', // No documentation required
    'new-cap': 'off', // No cap required
    'no-console': ['error', { allow: ['warn'] }], // No console.log() allowed
    'semi': ['error', 'always'], // Semicolon required
    'no-empty': 'warn', // No empty vars allowed
    'no-cond-assign': ['error', 'always'],
    'prefer-const': 'error', // Use "const" instead of "let" or "var"
    'curly': 'error', // Need to use curly brackets; else error
    '@typescript-eslint/no-explicit-any': 'off', // "any" allowed
  },
};
