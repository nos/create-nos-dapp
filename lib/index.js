"use strict";

require("@babel/polyfill");

var _chalk = _interopRequireDefault(require("chalk"));

var _utils = require("./utils");

var _steps = require("./steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var _argParser$parseArgs, type, name, asciiText, dappType, dappName;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Initialize argParser, this is here because -v and -h shouldn't spam the ascii text
          _argParser$parseArgs = _utils.argParser.parseArgs(), type = _argParser$parseArgs.type, name = _argParser$parseArgs.name; // Fancy ascii text

          _context.next = 4;
          return (0, _utils.ascii)("create nOS dApp");

        case 4:
          asciiText = _context.sent;
          console.log(_chalk.default.green(asciiText)); // Check if updates are available

          if (process.env.NODE_ENV !== "development") {
            (0, _utils.updateNotifier)();
          } // Get arguments


          _context.next = 9;
          return (0, _steps.getType)(type);

        case 9:
          dappType = _context.sent;
          _context.next = 12;
          return (0, _steps.getName)(name);

        case 12:
          dappName = _context.sent;

          // The work
          _utils.spinner.start();

          _context.next = 16;
          return (0, _steps.copyFiles)(dappType, dappName);

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.log(_chalk.default.red.bold(_context.t0));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 18]]);
}))();