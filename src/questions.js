export const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Which starter kit would you like to generate?',
    choices: ['React', 'Others (Coming soon..)'],
    filter: val => val.toLowerCase()
  },
  {
    type: 'input',
    name: 'name',
    message: "How would you like to call your dApp?",
    default: "my-nos-dapp",
    validate: value => {
      if (value.match(
        /^[a-z_\-]+$/
      )) return true;
      return 'Please enter a valid project name';
    }
  },
];
