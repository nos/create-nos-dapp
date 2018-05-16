"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createApp;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _chalk = _interopRequireDefault(require("chalk"));

var _path = _interopRequireDefault(require("path"));

var _install = _interopRequireDefault(require("./install"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function createApp(answers) {
  var projectName = answers.name;

  var directory = _path.default.resolve(process.cwd() + "/" + projectName);

  var source = _path.default.resolve(__dirname, "../packages/" + answers.type);

  if (!_fsExtra.default.existsSync(directory)) {
    _fsExtra.default.mkdirSync(directory);

    console.log(_chalk.default.green.bold("Success: Created new project folder ".concat(projectName)));
  } else {
    console.log(_chalk.default.red.bold("Project folder already exists: ".concat(directory)));
    process.exit(1);
  }

  _fsExtra.default.copy(source, directory).then(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(_chalk.default.green.bold('Installing dependencies.. This might take a while!'));
            _context.next = 3;
            return (0, _install.default)(directory).catch(function (e) {
              return console.log(e);
            });

          case 3:
            console.log(_chalk.default.green.bold('Success!'));
            console.log(_chalk.default.green.bold("To run your dApp, execute: 'cd ".concat(projectName, "' followed by 'npm start' or 'yarn start'")));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }))).catch(function (err) {
    return console.error(err);
  });
}