import chalk from "chalk";
import updateNotifier from "update-notifier";

const pkg = require("./../../package.json");

const notifyUpdate = () => {
  const notifier = updateNotifier({ pkg, updateCheckInterval: 0 });

  if (notifier.update) {
    console.log(chalk.green.bold(`Update available!`));
    console.log(
      chalk.green.bold(
        `Please update to the latest version (${
          notifier.update.latest
        }) to continue`
      )
    );
    console.log(
      chalk.green.bold(
        "You can do this using 'npm i -g @nosplatform/create-nos-dapp' or 'yarn global add @nosplatform/create-nos-dapp' "
      )
    );
    notifier.notify();
    process.exit(0);
  }
};

export default notifyUpdate;
