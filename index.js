const inquirer = require('inquirer');
const fs = require('fs');



  function starter() {
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
      fs.writeFile("${answer.name}.html" , err => err ? console.log(err) : console.log("Success"));
  }
)}
   