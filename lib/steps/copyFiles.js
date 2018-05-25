"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _path = _interopRequireDefault(require("path"));

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var copyFiles =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, name) {
    var directory, source;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            directory = _path.default.resolve(process.cwd(), name);
            _utils.spinner.text = _chalk.default.white("Creating project folder ".concat(name));

            _fsExtra.default.mkdirSync(directory);

            _utils.spinner.succeed(_chalk.default.green.bold("Success! Created project folder ".concat(name))).start();

            _context.prev = 4;
            source = _path.default.resolve(__dirname, "../..", "packages", type);
            _context.next = 8;
            return _fsExtra.default.copy(source, directory);

          case 8:
            _utils.spinner.info(_chalk.default.blue.bold("Installing dependencies.. This might take a while"));

            _context.next = 11;
            return (0, _utils.install)(directory);

          case 11:
            _utils.spinner.succeed(_chalk.default.green.bold("Done! 🎉")).stop();

            console.log(_chalk.default.white("To run your dApp, execute:"));
            console.log(_chalk.default.white.bold("1. 'cd ".concat(name, "'")));
            console.log(_chalk.default.white.bold("2. 'npm start' or 'yarn start'"));
            console.log(_chalk.default.white.bold("3. Open the nOS client at ") + _chalk.default.green.bold("nos://localhost:1234"));
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](4);

            _utils.spinner.fail(_chalk.default.red.bold("Something went wrong while copying the template or installing the dependencies")).stop();

            console.log(_chalk.default.red.bold("Please check the console output and report it at 'https://github.com/nos/create-nos-dapp/issues'"));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 18]]);
  }));

  return function copyFiles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = copyFiles;
exports.default = _default;