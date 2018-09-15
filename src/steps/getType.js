import chalk from "chalk";
import inquirer from "inquirer";

import questions from "./../questions";

const getType = async argParserType => {
  const { type } = argParserType
    ? { type: argParserType }
    : await inquirer.prompt(questions.type);

  if (type === "others (coming soon..)") {
    console.log(
      chalk.blue.bold("Other starter kits are coming soon.. Hang tight!")
    );
    return getType();
  }

  if (type === "react" || type === "angular") {
    return type;
  }

  console.log(chalk.red.bold(`An incorrect answer was given, please try again`));
  return getType();
};

export default getType;
