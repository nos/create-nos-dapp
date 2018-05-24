"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questions = void 0;
var questions = [{
  type: 'list',
  name: 'type',
  message: 'Which starter kit would you like to generate?',
  choices: ['React', 'Others (Coming soon..)'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'input',
  name: 'name',
  message: "How would you like to call your dApp?",
  default: "my-nos-dapp",
  validate: function validate(value) {
    if (value.match(/^[a-z_\-]+$/)) return true;
    return 'Please enter a valid project name';
  }
}];
exports.questions = questions;