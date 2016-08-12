module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],

    'react/jsx-filename-extension': ['off'],
    'react/prefer-es6-class': ['error', 'never']
  }
};
