import fs from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import path from "path";

import install from "./install";
import questions from "./../questions";
import { spinner } from "./../utils";

const getName = async (type, name) => {
  const { name: projectName } = name ? { name } : await inquirer.prompt(questions.name);
  spinner.start();
  const directory = path.resolve(process.cwd(), projectName);
  const source = path.resolve(__dirname, "../..", "packages", type);

  if (!fs.existsSync(directory)){
    spinner.text = chalk.white(`Creating project folder ${projectName}`);
    fs.mkdirSync(directory);
    spinner.succeed(chalk.green.bold(`Success! Created project folder ${projectName}`)).start();
    try {
      await fs.copy(source, directory);
      spinner.info(chalk.blue.bold('Installing dependencies.. This might take a while'));
  
      await install(directory);
      spinner.succeed(chalk.green.bold('Done! 🎉')).stop();
      console.log(chalk.white(`To run your dApp, execute:`));
      console.log(chalk.white.bold(`1. 'cd ${projectName}'`));
      console.log(chalk.white.bold(`2. 'npm start' or 'yarn start'`));
      console.log(chalk.white.bold('3. Open the nOS client at ') + chalk.green.bold('nos://localhost:1234'));
    } catch(e) {
      spinner.fail(chalk.red.bold(`Something went wrong while copying the template or installing the dependencies`)).stop();
      console.log(chalk.red.bold(`Please check the console output and report it at 'https://github.com/nos/create-nos-dapp/issues'`));
    }
  } else {
    spinner.fail(chalk.red.bold(`Project folder already exists: ${directory}`)).stop();
    return getName(type, name);
  }
};

export default getName;
