module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'n/handle-callback-err': 'warn',
    '@typescript-eslint/triple-slash-reference': 'warn',
    'react/display-name': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'warn',
    'multiline-ternary': 'off',
    'react/prop-types': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'no-constant-condition': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn'
  }
}
