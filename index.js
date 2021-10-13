var inquirer = require('inquirer');
var fs = require('fs');

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: 'username',
    }, 
    {
      type: "input",
      message: "Where are you located?",
      name: 'location',
    },
    {
      type: "input",
      message: "What would you like to put for your bio?",
      name: 'bio',

    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: 'linkedIn',

    },
    {
      type: "input",
      message: "What is your Github URL?",
      name: 'github',
    }
  ])
  .then((answers) => {
      console.log(answers);
      fs.writeFile("userInfo.json" , JSON.stringify(answers,null,'\t') , err => err ? console.log(err) : console.log("Success"));
      // const username = answers
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });