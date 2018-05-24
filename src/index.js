#!/usr/bin/env node

import "@babel/polyfill";

import chalk from "chalk";
import updateNotifier from "update-notifier"

import main from "./main";
import ascii from "./utils/ascii";
import notifyUpdate from "./utils/updateNotifier";

try {
  (async () => {
    const asciiText = await ascii("create nOS dApp");
    console.log(chalk.green(asciiText));
    notifyUpdate();
    await main();
    console.log(chalk.green.bold('---'));
  })();
} catch (err) {
  console.log(chalk.red.bold(err));
}

