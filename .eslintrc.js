const status = (process.env.NODE_ENV === 'production') ? 'error' : 'warn';
const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier',
    '@vue/airbnb',
  ],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', path.resolve(__dirname)],
        ],
        extensions: ['.js', '.vue', '.json']
      }
    }
  },
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'linebreak-style': ["error", "unix"],
    'indent': [
      status,
      2
    ],
    'quotes': [
      status,
      'single'
    ],
    'semi': [
      status,
      'always'
    ],
    'import/extensions': [status, 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "camelcase": [
      0, {
        "properties": "never"
      }
    ],
    "no-underscore-dangle": [
      0, {
        "properties": "never"
      }
    ],
    'no-console': status,
    'no-debugger': status,
    'max-len': 'off',
    'vue/html-closing-bracket-newline': [status, {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
