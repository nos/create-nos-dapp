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

  if (type === "react") {
    return type;
  }

  throw new Error("An incorrect answer was given, please try again");
};

export default getType;
