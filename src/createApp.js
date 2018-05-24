import fs from "fs-extra";
import chalk from "chalk";
import inquirer from "inquirer";
import path from "path";

import install from "./install";
import { questions } from "./questions";

const createApp = async type => {
  const answers = await inquirer.prompt(questions[1]);
  const projectName = answers.name;
  const directory = path.resolve(process.cwd(), projectName);
  const source = path.resolve(__dirname, "..", "packages", type);

  if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
    console.log(chalk.green.bold(`Success: Created new project folder ${projectName}`));
    try {
      await fs.copy(source, directory);
      console.log(chalk.green.bold('Installing dependencies.. This might take a while'));
  
      await install(directory);
      console.log(chalk.green.bold('Success!'));
      console.log(chalk.green.bold(`To run your dApp, execute:`));
      console.log(chalk.green.bold(`1. 'cd ${projectName}'`));
      console.log(chalk.green.bold(`2. 'npm start' or 'yarn start'`));
      console.log(chalk.green.bold(`And finally, browse to your dApp within the nOS client at - localhost:1234'`));
    } catch(e) {
      console.log(chalk.red.bold(`Something went wrong during copying over the project or installing the dependencies`));
      console.log(chalk.red.bold(`Please check the console output and report it at 'https://github.com/nos/create-nos-dapp'`));
      throw new Error(e);
    }
  } else {
    console.log(chalk.red(`Project folder already exists: ${directory}`));
    return createApp(type);
  }
};

export default createApp;
