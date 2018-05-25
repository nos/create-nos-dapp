"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = name;
exports.default = _default;