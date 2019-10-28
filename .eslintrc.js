module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: "module",
  },
  plugins: ['@typescript-eslint'],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".json",
          ".ts"
        ]
      }
    }
  },
  rules: {
    // typescript関係
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'arrow-parens': 'off',
    'import/extensions': ['off'],

    // typescript無関係
    'no-magic-numbers': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/export': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-cycle': 'error',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
}
