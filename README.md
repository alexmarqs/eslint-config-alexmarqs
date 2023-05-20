# Personal ESLint config

- [x] Standard config base;
- [x] TypeScript support;
- [x] Prettier support;
- [x] Node Eslint configuration;
- [ ] React Eslint configuration;

## Setup

1. Install the dependencies

```
npm i -D eslint @alexmarqs/eslint-config
```

2. Create a `.eslintrc.json` (you can also use the config `.js`) file extending the config:

```
{
  "extends": "@alexmarqs/eslint-config/node"
}
```
