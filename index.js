var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: 'username',
    }
  ])
  .then((answers) => {
      console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });