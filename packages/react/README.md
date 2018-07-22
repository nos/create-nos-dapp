<p align="center">
  <img src="./src/assets/logo.png" width="150px" /> 
</p>

<h1 align="center">React dApp Starter Kit</h1>

<p align="center">
  This is a starter-kit for creating a <strong>dApp</strong> on the <strong>nOS</strong> platform
</p>

<p align="center">
  <a href="https://github.com/nos/create-nos-dapp/releases">
    <img src="https://img.shields.io/github/tag/nos/create-nos-dapp.svg?style=flat">
  </a>
  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat'>
  </a>
</p>

## Getting started
To get started, you can check out the nOS [API documentation](https://github.com/nos/client/blob/develop/docs/api.md)

## Purpose
The goal of this project is to provide a quickstart for creating nOS dApps with React and various dependencies already installed and configured.

In this repo you can find NEO specific tooling:
* nOS functions exposed in a store
* neon-js, providing extra NEO functionality

Also general frameworks and tooling:
* React, our framework of choice
* JSS, CSS in JSS
* Jest, a testing framework
* Babel and Parcel, transpiling and compiling
* Prettier and ESLint, kickass linting support

Some plugins:
* vendor prefixing, camelCase and global styling JSS plugins
* env and React Babel presets
* babel-polyfill
* React and Prettier ESLint plugins

And finally some testing and security:
* Circle CI, automated builds/testing (coming soon)
* Coveralls, code coverage (coming soon)
* Deepscan and Better Code Hub, code analysis (coming soon)
* Renovate and Gemnasium, dependency monitoring (coming soon)

## Setup
```bash
$ cd my-dapp-name
$ yarn start
```

Change `README.md` and `package.json` to fit your project needs. Delete `LICENSE` if not applicable.

## Testing
Use `yarn test:local` or `npm run test:local` to run all tests locally. The `test` command is reserved for CI builds.

## Document structure
```
react-stack-boilerplate
├── src
│   ├── __helpers__
│   ├── __mocks__
│   ├── assets
│   ├── components
│   │   ├── __tests__
│   │   ├── Header
│   │   ├── NOSActions
│   │   └── SpinningLogo
│   └── views
│       ├── __tests__
│       │   └── __snapshots__
│       └── App
├── .babelrc
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── jest.config.js
├── jest.setup.js
├── LICENSE
├── logo.png
├── package.json
├── README.md
└── yarn.lock
```

## Known issues
 * Build assets to dedicated subdirectory https://github.com/parcel-bundler/parcel/issues/233
