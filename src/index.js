#!/usr/bin/env node

import "@babel/polyfill";

import inquirer from 'inquirer';
import chalk from 'chalk';

import createApp from "./createApp";
import ascii from "./ascii";

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
    createApp(answers);
  } else { // If answer doesn't correspond to any command
    process.exit(1);
  }
};

ascii("nOS dApp Starter Kit")
  .then(result => {
    console.log(result);
    main();
  })
  .catch(err => console.log(err));

