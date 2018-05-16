"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _path = _interopRequireDefault(require("path"));

var _install = _interopRequireDefault(require("./install"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var createApp =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(answers) {
    var projectName, directory, source;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projectName = answers.name;
            directory = _path.default.resolve(process.cwd(), projectName);
            source = _path.default.resolve(__dirname, "..", "packages", answers.type);

            if (!_fsExtra.default.existsSync(directory)) {
              _fsExtra.default.mkdirSync(directory);

              console.log(_chalk.default.green.bold("Success: Created new project folder ".concat(projectName)));
            } else {
              console.log(_chalk.default.red.bold("Project folder already exists: ".concat(directory)));
              process.exit(1);
            }

            _context.prev = 4;
            _context.next = 7;
            return _fsExtra.default.copy(source, directory);

          case 7:
            console.log(_chalk.default.green.bold('Installing dependencies.. This might take a while'));
            _context.next = 10;
            return (0, _install.default)(directory);

          case 10:
            console.log(_chalk.default.green.bold('Success!'));
            console.log(_chalk.default.green.bold("To run your dApp, execute:"));
            console.log(_chalk.default.green.bold("1. 'cd ".concat(projectName, "'")));
            console.log(_chalk.default.green.bold("2. 'npm install' or 'yarn install'"));
            console.log(_chalk.default.green.bold("3. 'npm start' or 'yarn start'"));
            console.log(_chalk.default.green.bold("You can now browse to your dApp within the nOS client on - localhost:1234'"));
            _context.next = 24;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](4);
            console.log(_chalk.default.red.bold("Something went wrong during copying over the project or installing the dependencies"));
            console.log(_chalk.default.red.bold("Please check the console output and report it at 'https://github.com/nos/create-nos-dapp'"));
            console.log(_context.t0);
            process.exit(1);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 18]]);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = createApp;
exports.default = _default;