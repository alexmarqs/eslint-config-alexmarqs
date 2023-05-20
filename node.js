module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'], 
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'], 
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: "none",
        semi: true,
        singleQuote: true,
        arrowParens: "avoid",
        printWidth: 100
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
