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

## Technical notes about this package

The package `standard-with-typescript` can be used and then the usage of `@typescript-eslint/parser` is not needed.

To test the package locally I suggest the usage of `yalc`. If you have it installed, run `yalc publish` and then `yalc add @alexmarqs/eslint-config` in the project you want to test it.
