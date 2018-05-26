<p align="center">
  <img src="https://raw.githubusercontent.com/nos/create-nos-dapp/development/logo.png" width="150px" />
</p>

<h1 align="center">create-nos-dapp</h1>

<p align="center">
  This is a <strong>CLI tool</strong> to generate a dApp project for the <strong>nOS</strong> platform,
  in your favorite frontend technology.
</p>

<p align="center">
  <a href='https://www.npmjs.com/package/@nosplatform/create-nos-dapp'>
    <img src='https://badge.fury.io/js/%40nosplatform%2Fcreate-nos-dapp.svg'>
  </a>
  <a href='http://makeapullrequest.com'>
    <img src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg'>
  </a>
  <a href='https://discordapp.com/invite/eGFAskm'>
    <img src='https://img.shields.io/badge/chat-discord-green.svg'>
  </a>
  <a href='https://github.com/prettier/prettier'>
    <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat'>
  </a>
</p>

## Purpose
The goal of this project is to provide a quickstart for creating nOS dApps with various frontend technologies already installed and configured to work with the nOS platform.


## Installation

First, we need to install the [npm package](https://www.npmjs.com/package/@nosplatform/create-nos-dapp). This will make the `create-nos-dapp` command available in your command prompt. You can install the npm package by executing one of the following commands

```
# Using yarn
yarn global add @nosplatform/create-nos-dapp

# Using npm
npm i -g @nosplatform/create-nos-dapp
```

---

## Usage

#### Direct usage
At this point the `create-nos-dapp` command should be available. To create a dApp for nOS, simply open up your command prompt and execute:
```
create-nos-dapp
```

It will now ask you to choose a project template and what name you'd like to give it. The CLI-tool will create the project in the current working directory. 

#### Usage with flags

If you'd like to get started even faster - you could also pass some arguments to the `create-nos-dapp`.
```
usage: create-nos-dapp [-h] [-v] [-t TYPE] [-n NAME]

create-nos-dapp

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -t TYPE, --type TYPE  Template type (react/vanilla/vue)
  -n NAME, --name NAME  Project name, f.e. my-nos-dapp
``` 

---

## Resources to get started with the generated project

#### API Documentation
- [API documentation of nOS](https://github.com/nos/client/blob/develop/docs/api.md)
- [Coming soon: Documentation of Api-Functions (SDK wrapper of the nOS API, used in the starter kits)](https://github.com/nos/api-functions)

#### Getting started with the project templates
- [React Starter Kit](https://github.com/nos/create-nos-dapp/blob/template/react/packages/react)
- [VueJS Starter Kit (Coming soon)](https://github.com/nos/create-nos-dapp)
- [AngularJS Starter Kit (Coming soon)](https://github.com/nos/create-nos-dapp)
- [Vanilla Javascript Starter Kit (Coming soon)](https://github.com/nos/create-nos-dapp)
