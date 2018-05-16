import fs from "fs-extra";
import chalk from "chalk";
import path from "path";

import install from "./install";

export default function createApp(answers) {
  const projectName = answers.name;
  const directory = path.resolve(process.cwd() + "/" + projectName);
  const source = path.resolve(__dirname, ("../packages/" + answers.type));

  if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
    console.log(chalk.green.bold(`Success: Created new project folder ${projectName}`));
  } else {
    console.log(chalk.red.bold(`Project folder already exists: ${directory}`));
    process.exit(1);
  }

  fs.copy(source, directory)
    .then(async () => {
      console.log(chalk.green.bold('Installing dependencies.. This might take a while!'));
      await install(directory).catch(e => console.log(e));
      console.log(chalk.green.bold('Success!'));
      console.log(chalk.green.bold(`To run your dApp, execute: 'cd ${projectName}' followed by 'npm start' or 'yarn start'`))
    })
    .catch(err => console.error(err))
}
