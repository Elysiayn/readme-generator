// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Would you like to include a table of contents?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'tableContents',
        message: 'What sections would you like to include in the Table of Contents? (Check all that apply)',
        choices: [
            'Subtitle', 'Description', 'Installation', 'Features', 'Usage', 'Deployed Production',
            'License', 'Badges', 'Tests', 'Questions', 'Contribution'
        ],
        when: ({
            confirmTable
        }) => {
            if (confirmTable) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//use inquirer to prompt user w/ question array. Returns user response data.
function init() {
    return inquirer.prompt(questions)
        .then(responseData => {
            console.log('Done!')
            writeToFile('README.md', generateMarkdown(responseData))
        })
};

// This is how to include a key when console log
// console.log(responseData['description']) or responseData.description  both are same

// Function call to initialize app
init();