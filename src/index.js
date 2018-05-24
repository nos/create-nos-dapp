#!/usr/bin/env node

import "@babel/polyfill";

import chalk from "chalk";
import updateNotifier from "update-notifier"

import main from "./main";
import ascii from "./ascii";
import pkg from "../package";

const createNosDapp = async () => {
  const asciiText = await ascii("create nOS dApp");
  console.log(asciiText);

  const notifier = updateNotifier({ pkg, updateCheckInterval: 0 });

  if (notifier.update) {
    console.log(chalk.green.bold(`Update available!`));
    console.log(chalk.green.bold(`Please update to the latest version (${notifier.update.latest}) to continue`));
    console.log(chalk.green.bold('You can do this using \'npm i -g @nosplatform/create-nos-dapp\' or \'yarn global add @nosplatform/create-nos-dapp\' '));
    notifier.notify();
    process.exit(0);
  }

  await main();
};

createNosDapp()
  .then(() => console.log(chalk.green.bold('---')))
  .catch(err=> console.log(chalk.red.bold(err)));

