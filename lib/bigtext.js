"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showText = void 0;

var _figlet = _interopRequireDefault(require("figlet"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showText = function showText(message) {
  var font = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Standard";
  return new Promise(function (resolve, reject) {
    _chalk.default.red(_figlet.default.text(message, {
      font: font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        reject(err);
      }

      resolve(data);
    }));
  });
};

exports.showText = showText;