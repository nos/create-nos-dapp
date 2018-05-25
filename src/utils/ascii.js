import figlet from "figlet";

const ascii = (message, font = "Standard") =>
  new Promise((resolve, reject) => {
    figlet.text(
      message,
      {
        font: font,
        horizontalLayout: "default",
        verticalLayout: "default"
      },
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });

export default ascii;
