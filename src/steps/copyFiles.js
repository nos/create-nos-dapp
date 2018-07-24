import fs from "fs-extra";
import chalk from "chalk";
import path from "path";

import { spinner, install } from "./../utils";

const copyFiles = async (type, name) => {
  const directory = path.resolve(process.cwd(), name);
  spinner.text = chalk.white(`Creating project folder ${name}`);

  fs.mkdirSync(directory);
  spinner
    .succeed(chalk.green.bold(`Success! Created project folder ${name}`))
    .start();
  try {
    const source = path.resolve(__dirname, "../..", "packages", type);
    await fs.copy(source, directory);
    spinner.info(
      chalk.blue.bold("Installing dependencies.. This might take a while")
    );

    await install(directory);
    spinner.succeed(chalk.green.bold("Done! 🎉")).stop();
    console.log(chalk.white(`To run your dApp, execute:`));
    console.log(chalk.white.bold(`1. 'cd ${name}'`));
    console.log(chalk.white.bold(`2. 'npm start' or 'yarn start'`));
    console.log(
      chalk.white.bold("3. Open the nOS client at ") +
        chalk.green.bold("nos://localhost:1234")
    );
  } catch (e) {
    spinner
      .fail(
        chalk.red.bold(
          `Something went wrong while copying the template or installing the dependencies`
        )
      )
      .stop();
    console.log(
      chalk.red.bold(
        `Please check the console output and report it at 'https://github.com/nos/create-nos-dapp/issues'`
      )
    );
  }
};

export default copyFiles;
