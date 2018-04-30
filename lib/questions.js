"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questions = void 0;
var questions = [{
  type: 'list',
  name: 'type',
  message: 'Which starter kit would you like to generate?',
  choices: ['ReactJS', 'Others (Coming soon..)'],
  filter: function filter(val) {
    return val.toLowerCase();
  }
}, {
  type: 'input',
  name: 'name',
  message: "How would you like to call your dApp?",
  default: "My-nOS-dApp",
  validate: function validate(value) {
    var pass = value.match(/^[a-zA-Z_\-]+$/);

    if (pass) {
      return true;
    }

    return 'Please enter a valid project name';
  }
}];
exports.questions = questions;