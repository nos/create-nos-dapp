#!/usr/bin/env node

import "@babel/polyfill";

import chalk from "chalk";

import { ascii, updateNotifier } from "./utils";
import { getType, getName } from "./steps";

try {
  (async () => {
    const asciiText = await ascii("create nOS dApp");
    console.log(chalk.green(asciiText));

    updateNotifier();

    const type = await getType();
    await getName(type);
  })();
} catch (err) {
  console.log(chalk.red.bold(err));
}

