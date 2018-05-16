#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _createApp = _interopRequireDefault(require("./createApp"));

var _ascii = _interopRequireDefault(require("./ascii"));

var _questions = require("./questions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var main =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var answers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _inquirer.default.prompt(_questions.questions);

          case 2:
            answers = _context.sent;

            if (!(answers.type === 'others (coming soon..)')) {
              _context.next = 6;
              break;
            }

            console.log(_chalk.default.blue('Other starter kits are coming soon.. Hang tight!'));
            return _context.abrupt("return", main());

          case 6:
            // Answer: ReactJS
            if (answers.type === 'reactjs') {
              (0, _createApp.default)(answers);
            } else {
              // If answer doesn't correspond to any command
              process.exit(1);
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

(0, _ascii.default)("nOS dApp Starter Kit").then(function (result) {
  console.log(result);
  main();
}).catch(function (err) {
  return console.log(err);
});