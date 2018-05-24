import chalk from "chalk";
import inquirer from "inquirer";

import createApp from "./createApp";
import { questions } from "./questions";

const main = async () => {
  const answers = await inquirer.prompt(questions[0]);

  // Any other answer than the current existing starter kits
  if(answers.type === 'others (coming soon..)') {
    console.log(chalk.blue('Other starter kits are coming soon.. Hang tight!'));
    return main();
  }

  // Answer: ReactJS
  if(answers.type === 'react') {
    return createApp(answers.type);
  }

  throw new Error('An incorrect answer was given, please try again');
};

export default main;
