export const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Which starter kit would you like to generate?',
    choices: ['ReactJS', 'Others (Coming soon..)'],
    filter: val => val.toLowerCase()
  },
  {
    type: 'input',
    name: 'name',
    message: "How would you like to call your dApp?",
    default: "My-nOS-dApp",
    validate: value => {
      if (value.match(
        /^[a-zA-Z_\-]+$/
      )) return true;
      return 'Please enter a valid project name';
    }
  },
];
