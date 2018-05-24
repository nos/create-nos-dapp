"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _inquirer = _interopRequireDefault(require("inquirer"));

var _path = _interopRequireDefault(require("path"));

var _install = _interopRequireDefault(require("./install"));

var _questions = _interopRequireDefault(require("./../questions"));

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var getName =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, name) {
    var _ref2, projectName, directory, source;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!name) {
              _context.next = 4;
              break;
            }

            _context.t0 = {
              name: name
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
            projectName = _ref2.name;

            _utils.spinner.start();

            directory = _path.default.resolve(process.cwd(), projectName);
            source = _path.default.resolve(__dirname, "../..", "packages", type);

            if (_fsExtra.default.existsSync(directory)) {
              _context.next = 35;
              break;
            }

            _utils.spinner.text = _chalk.default.white("Creating project folder ".concat(projectName));

            _fsExtra.default.mkdirSync(directory);

            _utils.spinner.succeed(_chalk.default.green.bold("Success! Created project folder ".concat(projectName))).start();

            _context.prev = 16;
            _context.next = 19;
            return _fsExtra.default.copy(source, directory);

          case 19:
            _utils.spinner.info(_chalk.default.blue.bold('Installing dependencies.. This might take a while'));

            _context.next = 22;
            return (0, _install.default)(directory);

          case 22:
            _utils.spinner.succeed(_chalk.default.green.bold('Done! 🎉')).stop();

            console.log(_chalk.default.white("To run your dApp, execute:"));
            console.log(_chalk.default.white.bold("1. 'cd ".concat(projectName, "'")));
            console.log(_chalk.default.white.bold("2. 'npm start' or 'yarn start'"));
            console.log(_chalk.default.white.bold('3. Open the nOS client at ') + _chalk.default.green.bold('nos://localhost:1234'));
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](16);

            _utils.spinner.fail(_chalk.default.red.bold("Something went wrong while copying the template or installing the dependencies")).stop();

            console.log(_chalk.default.red.bold("Please check the console output and report it at 'https://github.com/nos/create-nos-dapp/issues'"));

          case 33:
            _context.next = 37;
            break;

          case 35:
            _utils.spinner.fail(_chalk.default.red.bold("Project folder already exists: ".concat(directory))).stop();

            return _context.abrupt("return", getName(type, name));

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[16, 29]]);
  }));

  return function getName(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getName;
exports.default = _default;