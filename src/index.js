#!/usr/bin/env node

import "@babel/polyfill";

const inquirer = require('inquirer');
const chalk = require('chalk');

import createApp from "./createApp";
import { questions } from "./questions";
import { showText } from "./bigtext";

const main = () => {
  inquirer.prompt(questions).then(answers => {

    // Any other answer than the current existing starter kits
    if(answers.type === 'others (coming soon..)') {
      console.log(chalk.blue('Other starter kits are coming soon.. Hang tight!'));
      return main();
    }

    // Answer: ReactJS
    if(answers.type === 'reactjs') {
      createApp(answers);
    }
  });
};

showText("nOS dApp Starter Kit!")
  .then(result => {
    console.log(result);
    main();
  })
  .catch(err => console.log(err));

