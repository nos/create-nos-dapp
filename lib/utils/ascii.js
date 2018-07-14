"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _figlet = require("figlet");

var _figlet2 = _interopRequireDefault(_figlet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ascii = function ascii(message) {
  var font = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Standard";
  return new Promise(function (resolve, reject) {
    _figlet2.default.text(message, {
      font: font,
      horizontalLayout: "default",
      verticalLayout: "default"
    }, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
};

exports.default = ascii;