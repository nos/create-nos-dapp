"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ora = _interopRequireDefault(require("ora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spinner = (0, _ora.default)({
  color: "green",
  text: "Initializing...",
  spinner: "arc"
});
var _default = spinner;
exports.default = _default;