"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ora = require("ora");

var _ora2 = _interopRequireDefault(_ora);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spinner = (0, _ora2.default)({
  color: "green",
  text: "Initializing...",
  spinner: "arc"
});

exports.default = spinner;