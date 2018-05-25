"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _questions = _interopRequireDefault(require("./../questions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var getType =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(argParserType) {
    var _ref2, type;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!argParserType) {
              _context.next = 4;
              break;
            }

            _context.t0 = {
              type: argParserType
            };
            _context.next = 7;
            break;

          case 4:
            _context.next = 6;
            return _inquirer.default.prompt(_questions.default.type);

          case 6:
            _context.t0 = _context.sent;

          case 7:
            _ref2 = _context.t0;
            type = _ref2.type;

            if (!(type === "others (coming soon..)")) {
              _context.next = 12;
              break;
            }

            console.log(_chalk.default.blue.bold("Other starter kits are coming soon.. Hang tight!"));
            return _context.abrupt("return", getType());

          case 12:
            if (!(type === "react")) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", type);

          case 14:
            throw new Error("An incorrect answer was given, please try again");

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getType(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getType;
exports.default = _default;