import fs from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import path from "path";

import questions from "./../questions";
import { spinner } from "./../utils";

const getName = async argParserName => {
  const { name } = argParserName
    ? { name: argParserName }
    : await inquirer.prompt(questions.name);
  const directory = path.resolve(process.cwd(), name);
  if (!fs.existsSync(directory)) {
    return name;
  } else {
    spinner
      .fail(chalk.red.bold(`Project folder already exists: ${directory}`))
      .stop();
    return getName(); // <- passing name will result in an infinite loop
  }
};

export default getName;
