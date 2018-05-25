import { ArgumentParser } from "argparse";
const { version } = require("./../../package.json");

const argParser = new ArgumentParser({
  addHelp: true,
  description: "create-nos-dapp",
  usage: "create-nos-dapp [-h] [-v] [-t TYPE] [-n NAME]",
  version
});

argParser.addArgument(["-t", "--type"], {
  help: "Template type (react/vanilla/vue)"
});
argParser.addArgument(["-n", "--name"], {
  help: "Project name, f.e. my-nos-dapp"
});

export default argParser;
