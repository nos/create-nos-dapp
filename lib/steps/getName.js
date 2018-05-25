"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _path = _interopRequireDefault(require("path"));

var _questions = _interopRequireDefault(require("./../questions"));

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var getName =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(argParserName) {
    var _ref2, name, directory;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!argParserName) {
              _context.next = 4;
              break;
            }

            _context.t0 = {
              name: argParserName
            };
            _context.next = 7;
            break;

          case 4:
            _context.next = 6;
            return _inquirer.default.prompt(_questions.default.name);

          case 6:
            _context.t0 = _context.sent;

          case 7:
            _ref2 = _context.t0;
            name = _ref2.name;
            directory = _path.default.resolve(process.cwd(), name);

            if (_fsExtra.default.existsSync(directory)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", name);

          case 14:
            _utils.spinner.fail(_chalk.default.red.bold("Project folder already exists: ".concat(directory))).stop();

            return _context.abrupt("return", getName());

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getName(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getName;
exports.default = _default;