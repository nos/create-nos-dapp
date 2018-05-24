#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("./utils");

var _steps = require("./steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

try {
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var asciiText, type;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.ascii)("create nOS dApp");

          case 2:
            asciiText = _context.sent;
            console.log(_chalk.default.green(asciiText));
            (0, _utils.updateNotifier)();
            _context.next = 7;
            return (0, _steps.getType)();

          case 7:
            type = _context.sent;
            _context.next = 10;
            return (0, _steps.getName)(type);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }))();
} catch (err) {
  console.log(_chalk.default.red.bold(err));
}