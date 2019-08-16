const status = (process.env.NODE_ENV === 'production') ? 'error' : 'warn';

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
  rules: {
    'nuxt/no-cjs-in-config': 'off',
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
    'linebreak-style': ["error", "unix"],
    'import/prefer-default-export': 'off',
    'vue/html-closing-bracket-newline': [status, {
      'singleline': 'never',
      'multiline': 'never'
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
