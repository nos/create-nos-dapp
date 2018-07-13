const type = {
  type: "list",
  name: "type",
  message: "Which starter kit would you like to generate?",
  choices: ["React", "Vuejs", "Others (Coming soon..)"],
  filter: val => val.toLowerCase()
};

export default type;
