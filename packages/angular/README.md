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
The goal of this project is to provide a quickstart for creating nOS dApps with Angular and various dependencies already installed and configured.

In this repo you can find NEO specific tooling:
* nOS functions exposed in a store
* neon-js, providing extra NEO functionality

Also general frameworks and tooling:
* Angular 6
* SCSS
* Karma and Jasmine
* Webpack
* TSLint

And finally some testing and security:
* Circle CI, automated builds/testing (coming soon)
* Coveralls, code coverage (coming soon)
* Deepscan and Better Code Hub, code analysis (coming soon)
* Renovate and Gemnasium, dependency monitoring (coming soon)

## Setup
```bash
$ cd my-dapp-name
$ npm install
$ npm start
```

Change `README.md` and `package.json` to fit your project needs. Delete `LICENSE` if not applicable.

## Testing
Use `npm test` or `npm run test` to run the Karma tests. The `test` command is reserved for CI builds. Use `npm run e2e` to run the e2e tests.

## Build
Use `npm run build` to build the project.  Use `npm run prod-build` for a production build. The build artifacts will be stored in the `dist` directory.

## Document structure
```
angular-stack-boilerplate
├── src
│   ├── app
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   ├── header.component.scss
│   │   │   ├── header.component.spec.ts
│   │   │   └── header.component.ts
│   │   ├── nos-actions
│   │   │   ├── nos-actions.component.html
│   │   │   ├── nos-actions.component.scss
│   │   │   ├── nos-actions.component.spec.ts
│   │   │   └── nos-actions.component.ts
│   │   ├── spinning-logo
│   │   │   ├── spinning-logo.component.html
│   │   │   ├── spinning-logo.component.scss
│   │   │   ├── spinning-logo.component.spec.ts
│   │   │   └── spinning-logo.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── header.component.ts
│   ├── assets
│   │   └── logo.png
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── browserlist
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── .editorconfig
├── .gitignore
├── angular.json
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── tslint.json
```
