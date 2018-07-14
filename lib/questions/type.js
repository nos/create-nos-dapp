"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var type = {
  type: "list",
  name: "type",
  message: "Which starter kit would you like to generate?",
  choices: ["React", "Others (Coming soon..)"],
  filter: function filter(val) {
    return val.toLowerCase();
  }
};

exports.default = type;