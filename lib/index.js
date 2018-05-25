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
    var _argParser$parseArgs, type, name, asciiText, dappType, dappName;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Initialize argParser, this is here because -v and -h shouldn't spam the ascii text
            _argParser$parseArgs = _utils.argParser.parseArgs(), type = _argParser$parseArgs.type, name = _argParser$parseArgs.name; // Fancy ascii text

            _context.next = 3;
            return (0, _utils.ascii)("create nOS dApp");

          case 3:
            asciiText = _context.sent;
            console.log(_chalk.default.green(asciiText)); // Check if updates are available

            (0, _utils.updateNotifier)(); // Get arguments

            _context.next = 8;
            return (0, _steps.getType)(type);

          case 8:
            dappType = _context.sent;
            _context.next = 11;
            return (0, _steps.getName)(name);

          case 11:
            dappName = _context.sent;

            // The work
            _utils.spinner.start();

            _context.next = 15;
            return (0, _steps.copyFiles)(dappType, dappName);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }))();
} catch (err) {
  console.log(_chalk.default.red.bold(err));
}