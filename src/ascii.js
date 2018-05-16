import figlet from "figlet";
import chalk from "chalk";

const ascii = (message, font = "Standard") => new Promise((resolve, reject) => {
  chalk.red(figlet.text(message, {
    font: font,
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      reject(err);
    }
    resolve(data);
  }));
});

export default ascii;
