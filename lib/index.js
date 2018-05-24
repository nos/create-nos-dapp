#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _chalk = _interopRequireDefault(require("chalk"));

var _updateNotifier = _interopRequireDefault(require("update-notifier"));

var _main = _interopRequireDefault(require("./main"));

var _ascii = _interopRequireDefault(require("./utils/ascii"));

var _updateNotifier2 = _interopRequireDefault(require("./utils/updateNotifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

try {
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var asciiText;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _ascii.default)("create nOS dApp");

          case 2:
            asciiText = _context.sent;
            console.log(_chalk.default.green(asciiText));
            (0, _updateNotifier2.default)();
            _context.next = 7;
            return (0, _main.default)();

          case 7:
            console.log(_chalk.default.green.bold('---'));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }))();
} catch (err) {
  console.log(_chalk.default.red.bold(err));
}