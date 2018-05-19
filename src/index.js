#!/usr/bin/env node

import "@babel/polyfill";

import chalk from "chalk";

import main from './main';
import ascii from "./ascii";

const createNosDapp = async () => {
  const asciiText = await ascii("nOS dApp Starter Kit");
  console.log(asciiText);
  await main();
};

createNosDapp()
  .then(() => console.log(chalk.green.bold('---')))
  .catch(err=> console.log(chalk.red.bold(err)));

