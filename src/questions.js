export const questions = [
  {
    type: 'list',
    name: 'type',
    message: 'Which starter kit would you like to generate?',
    choices: ['ReactJS', 'Others (Coming soon..)'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'input',
    name: 'name',
    message: "How would you like to call your dApp?",
    default: "My-nOS-dApp",
    validate: function(value) {
      const pass = value.match(
        /^[a-zA-Z_\-]+$/
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid project name';
    }
  },
];
