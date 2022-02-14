// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Choices = require('inquirer/lib/objects/choices');

// Array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
        validate: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log('Please provide a name for your project!');
                return false;
            }
        }
    },
     // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project. (Please use full sentences.)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please provide a short description of your project!')
                return false;
            }
        }
    },
    // Installation instructions
    {
        type: 'input',
        name: 'dependancies',
        message: 'What command should be run to install dependancies? (Please reply in full sentences.)'
    },
    // Usage information
    {
        type: 'input',
        name: 'Using',
        message: 'What does the user need to know about using the repo? (Please reply in full sentences.)'
    },
    // Contribution guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo? (Please reply in full sentences.)'
    },
    // Testing guide
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests? (Please reply in full sentences.)'
    },
    // Licensing information
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['None', 'MIT', 'Apache 2.0', 'Mozilla Public License 2.0','Boost Software License']
    },
    // Github username/ questions
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter GitHub username!')
                return false;
            }
        }
    },
    // Email/ questions -> how to reach me
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please provide an email address so users can reach you!');
                return false;
            }
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=>{
        if(err)
            throw err;
        console.log('Generating README.md ...')
    })
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.me", generateMarkdown(userInput));
    })
}

// Function call to initialize app
init();
