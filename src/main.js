import chalk from "chalk";
import inquirer from "inquirer";

import createApp from "./createApp";
import { questions } from "./questions";

const main = async () => {
  const answers = await inquirer.prompt(questions);

  // Any other answer than the current existing starter kits
  if(answers.type === 'others (coming soon..)') {
    console.log(chalk.blue('Other starter kits are coming soon.. Hang tight!'));
    return main();
  }

  // Answer: ReactJS
  if(answers.type === 'reactjs') {
    return createApp(answers);
  } else { // If answer doesn't correspond to any command
    process.exit(1);
  }
};

export default main;
