"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _updateNotifier = require("update-notifier");

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require("./../../package.json");

var notifyUpdate = function notifyUpdate() {
  var notifier = (0, _updateNotifier2.default)({ pkg: pkg, updateCheckInterval: 0 });

  if (notifier.update) {
    console.log(_chalk2.default.green.bold("Update available!"));
    console.log(_chalk2.default.green.bold("Please update to the latest version (" + notifier.update.latest + ") to continue"));
    console.log(_chalk2.default.green.bold("You can do this using 'npm i -g @nosplatform/create-nos-dapp' or 'yarn global add @nosplatform/create-nos-dapp' "));
    notifier.notify();
    process.exit(0);
  }
};

exports.default = notifyUpdate;