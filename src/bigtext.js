import figlet from "figlet";
import chalk from "chalk";

export const showText = (message, font = "Standard") => new Promise((resolve, reject) => {
  chalk.red(figlet.text(message, {
    font: font,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      reject(err);
    }
    resolve(data);
  }));
});
