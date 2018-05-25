import ora from "ora";

const spinner = ora({
  color: "green",
  text: "Initializing...",
  spinner: "arc"
});

export default spinner;
