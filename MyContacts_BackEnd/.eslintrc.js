module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'prefer-const': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
  },
};
