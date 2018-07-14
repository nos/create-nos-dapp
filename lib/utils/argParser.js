"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _argparse = require("argparse");

var _require = require("./../../package.json"),
    version = _require.version;

var argParser = new _argparse.ArgumentParser({
  addHelp: true,
  description: "create-nos-dapp",
  usage: "create-nos-dapp [-h] [-v] [-t TYPE] [-n NAME]",
  version: version
});

argParser.addArgument(["-t", "--type"], {
  help: "Template type (react/vanilla/vue)"
});
argParser.addArgument(["-n", "--name"], {
  help: "Project name, f.e. my-nos-dapp"
});

exports.default = argParser;