"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _inquirer = require("inquirer");

var _inquirer2 = _interopRequireDefault(_inquirer);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _questions = require("./../questions");

var _questions2 = _interopRequireDefault(_questions);

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getName = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(argParserName) {
    var _ref2, name, directory;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!argParserName) {
              _context.next = 4;
              break;
            }

            _context.t0 = { name: argParserName };
            _context.next = 7;
            break;

          case 4:
            _context.next = 6;
            return _inquirer2.default.prompt(_questions2.default.name);

          case 6:
            _context.t0 = _context.sent;

          case 7:
            _ref2 = _context.t0;
            name = _ref2.name;
            directory = _path2.default.resolve(process.cwd(), name);

            if (_fsExtra2.default.existsSync(directory)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", name);

          case 14:
            _utils.spinner.fail(_chalk2.default.red.bold("Project folder already exists: " + directory)).stop();
            return _context.abrupt("return", getName());

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getName(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = getName;