module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jest', 'prettier'],
  rules: {
    radix: 'off',
    'one-var': 'off',
    'no-bitwise': 'off',
    'prettier/prettier': 'error',
    'no-console': 'error',
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'no-underscore-dangle': 'off',
    'react/no-danger': 'off',
    'no-undef': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-useless-constructor': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-multi-assign': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/ban-types': ['error', { types: { Function: false } }],
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'guard-for-in': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly',
    BodyInit: 'readonly',
    KeyframeAnimationOptions: 'readonly',
    IntersectionObserverInit: 'readonly',
    NodeJS: 'readonly',
  },
};
