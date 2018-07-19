"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var type = {
  type: "list",
  name: "type",
  message: "Which starter kit would you like to generate?",
  choices: ["React", "Others (Coming soon..)"],
  filter: function filter(val) {
    return val.toLowerCase();
  }
};
var _default = type;
exports.default = _default;