#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _chalk = _interopRequireDefault(require("chalk"));

var _updateNotifier = _interopRequireDefault(require("update-notifier"));

var _main = _interopRequireDefault(require("./main"));

var _ascii = _interopRequireDefault(require("./ascii"));

var _package = _interopRequireDefault(require("../package"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var createNosDapp =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var asciiText, notifier;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ascii.default)("create nOS dApp");

          case 2:
            asciiText = _context.sent;
            console.log(_chalk.default.green(asciiText));
            notifier = (0, _updateNotifier.default)({
              pkg: _package.default,
              updateCheckInterval: 0
            });

            if (notifier.update) {
              console.log(_chalk.default.green.bold("Update available!"));
              console.log(_chalk.default.green.bold("Please update to the latest version (".concat(notifier.update.latest, ") to continue")));
              console.log(_chalk.default.green.bold('You can do this using \'npm i -g @nosplatform/create-nos-dapp\' or \'yarn global add @nosplatform/create-nos-dapp\' '));
              notifier.notify();
              process.exit(0);
            }

            _context.next = 8;
            return (0, _main.default)();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createNosDapp() {
    return _ref.apply(this, arguments);
  };
}();

createNosDapp().then(function () {
  return console.log(_chalk.default.green.bold('---'));
}).catch(function (err) {
  return console.log(_chalk.default.red.bold(err));
});