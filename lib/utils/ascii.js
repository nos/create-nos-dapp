"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _figlet = _interopRequireDefault(require("figlet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ascii = function ascii(message) {
  var font = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Standard";
  return new Promise(function (resolve, reject) {
    _figlet.default.text(message, {
      font: font,
      horizontalLayout: "default",
      verticalLayout: "default"
    }, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
};

var _default = ascii;
exports.default = _default;