"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = {
  type: "input",
  name: "name",
  message: "How would you like to call your dApp?",
  default: "my-nos-dapp",
  validate: function validate(value) {
    if (value.match(/^[a-zA-Z_\-]+$/)) return true;
    return "Please enter a valid project name";
  }
};

exports.default = name;