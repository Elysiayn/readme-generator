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
            'Description', 'Installation', 'Features', 'Usage', 'Deployed Production',
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
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'Provide project features (Required)',
        validate: featuresInput => {
            if (featuresInput) {
                return true;
            } else {
                console.log('Please enter your project features!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for project usage (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions for your project usage!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Provide link to deployed production (Required)',
        validate: deployedInput => {
            if (deployedInput) {
                return true;
            } else {
                console.log('Please enter link to your deployed project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a "License" section?',
        default: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide license information',
        when: ({
            confirmLicense
        }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmBadges',
        message: 'Would you like to include a "Badges" section?',
        default: true
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Provide badge information',
        when: ({
            confirmBadges
        }) => {
            if (confirmBadges) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include a "Tests" section?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test information',
        when: ({
            confirmTests
        }) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to include a "Questions" section?',
        default: true
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide question information',
        when: ({
            confirmQuestions
        }) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributions',
        message: 'Would you like to include a "Contributions" section?',
        default: true
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Provide contribution information',
        when: ({
            confirmContributions
        }) => {
            if (confirmContributions) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile("README.md", data) {

};

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
// console.log(responseData['description']) or responseData.description:  both are same

// Function call to initialize app
init();