# Personal ESLint config

https://www.npmjs.com/package/@alexmarqs/eslint-config

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

- [x] Standard config base;
- [x] TypeScript support;
- [x] Prettier support;
- [x] Node Eslint configuration;
- [x] React Eslint configuration;

## Setup

1. Install the dependencies

```
npm i -D eslint @alexmarqs/eslint-config
```

2. Create a `.eslintrc.json` (you can also use the config `.js`) file extending the config:

Node:

```
{
  "extends": "@alexmarqs/eslint-config/node"
}
```

React:

```
{
  "extends": "@alexmarqs/eslint-config/react"
}
```

## License

MIT License © [alexmarqs](https://github.com/alexmarqs)
