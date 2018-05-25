"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

var _updateNotifier = _interopRequireDefault(require("update-notifier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require("./../../package.json");

var notifyUpdate = function notifyUpdate() {
  var notifier = (0, _updateNotifier.default)({
    pkg: pkg,
    updateCheckInterval: 0
  });

  if (notifier.update) {
    console.log(_chalk.default.green.bold("Update available!"));
    console.log(_chalk.default.green.bold("Please update to the latest version (".concat(notifier.update.latest, ") to continue")));
    console.log(_chalk.default.green.bold("You can do this using 'npm i -g @nosplatform/create-nos-dapp' or 'yarn global add @nosplatform/create-nos-dapp' "));
    notifier.notify();
    process.exit(0);
  }
};

var _default = notifyUpdate;
exports.default = _default;