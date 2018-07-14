"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require("fs-extra");

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _utils = require("./../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var copyFiles = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, name) {
    var directory, source;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            directory = _path2.default.resolve(process.cwd(), name);

            _utils.spinner.text = _chalk2.default.white("Creating project folder " + name);

            _fsExtra2.default.mkdirSync(directory);
            _utils.spinner.succeed(_chalk2.default.green.bold("Success! Created project folder " + name)).start();
            _context.prev = 4;
            source = _path2.default.resolve(__dirname, "../..", "packages", type);
            _context.next = 8;
            return _fsExtra2.default.copy(source, directory);

          case 8:
            _utils.spinner.info(_chalk2.default.blue.bold("Installing dependencies.. This might take a while"));

            _context.next = 11;
            return (0, _utils.install)(directory);

          case 11:
            _utils.spinner.succeed(_chalk2.default.green.bold("Done! 🎉")).stop();
            console.log(_chalk2.default.white("To run your dApp, execute:"));
            console.log(_chalk2.default.white.bold("1. 'cd " + name + "'"));
            console.log(_chalk2.default.white.bold("2. 'npm start' or 'yarn start'"));
            console.log(_chalk2.default.white.bold("3. Open the nOS client at ") + _chalk2.default.green.bold("nos://localhost:1234"));
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](4);

            _utils.spinner.fail(_chalk2.default.red.bold("Something went wrong while copying the template or installing the dependencies")).stop();
            console.log(_chalk2.default.red.bold("Please check the console output and report it at 'https://github.com/nos/create-nos-dapp/issues'"));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 18]]);
  }));

  return function copyFiles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = copyFiles;