"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _execa = require("execa");

var _execa2 = _interopRequireDefault(_execa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var shouldUseYarn = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _execa2.default)("yarn", ["--version"], { stdio: "ignore" });

          case 3:
            return _context.abrupt("return", true);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 6]]);
  }));

  return function shouldUseYarn() {
    return _ref.apply(this, arguments);
  };
}();

var checkThatNpmCanReadCwd = function checkThatNpmCanReadCwd() {
  var cwd = process.cwd();
  var childOutput = null;
  try {
    // Note: intentionally using spawn over exec since
    // the problem doesn't reproduce otherwise.
    // `npm config list` is the only reliable way I could find
    // to reproduce the wrong path. Just printing process.cwd()
    // in a Node process was not enough.
    childOutput = _execa2.default.sync("npm", ["config", "list"]).output.join("");
  } catch (err) {
    // Something went wrong spawning node.
    // Not great, but it means we can't do this check.
    // We might fail later on, but let's continue.
    return true;
  }
  if (typeof childOutput !== "string") {
    return true;
  }
  var lines = childOutput.split("\n");
  // `npm config list` output includes the following line:
  // "; cwd = C:\path\to\current\dir" (unquoted)
  // I couldn't find an easier way to get it.
  var prefix = "; cwd = ";
  var line = lines.find(function (l) {
    return l.indexOf(prefix) === 0;
  });
  if (typeof line !== "string") {
    // Fail gracefully. They could remove it.
    return true;
  }
  var npmCWD = line.substring(prefix.length);
  if (npmCWD === cwd) {
    return true;
  }
  return false;
};

var install = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(directory) {
    var useYarn, command, args;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return shouldUseYarn();

          case 2:
            useYarn = _context2.sent;
            command = "npm";
            args = ["install"];

            if (!useYarn) {
              _context2.next = 9;
              break;
            }

            command = "yarn";
            _context2.next = 11;
            break;

          case 9:
            if (checkThatNpmCanReadCwd()) {
              _context2.next = 11;
              break;
            }

            throw new Error("npm could not read cwd. This is probably caused by a misconfigured " + "system terminal shell.");

          case 11:
            _context2.next = 13;
            return (0, _execa2.default)(command, args, { cwd: directory, stdio: "inherit" }).catch(function (error) {
              throw new Error(command + " " + args.join(" ") + " exited with code " + error.code);
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function install(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = install;