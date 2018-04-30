#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _createApp = _interopRequireDefault(require("./createApp"));

var _questions = require("./questions");

var _bigtext = require("./bigtext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inquirer = require('inquirer');

var chalk = require('chalk');

var main = function main() {
  inquirer.prompt(_questions.questions).then(function (answers) {
    // Any other answer than the current existing starter kits
    if (answers.type === 'others (coming soon..)') {
      console.log(chalk.blue('Other starter kits are coming soon.. Hang tight!'));
      return main();
    } // Answer: ReactJS


    if (answers.type === 'reactjs') {
      (0, _createApp.default)(answers);
    }
  });
};

(0, _bigtext.showText)("nOS dApp Starter Kit!").then(function (result) {
  console.log(result);
  main();
}).catch(function (err) {
  return console.log(err);
});