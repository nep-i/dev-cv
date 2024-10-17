import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],

  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Disable rule for Next.js or similar setups
    'react/prop-types': 'off', // Disable if using TypeScript
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    // Add any global variables here
  },
};
