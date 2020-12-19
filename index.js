// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: 'What is the username for project repository on GitHub? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter project repository GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a current email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide a current email address!');
                return false;
            }
        }
    },
    {
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
        name: 'confirmSubtitle',
        message: 'Would you like to include a subtitle?',
        default: true
    },
    {
        type: 'input',
        name: 'subtitle',
        message: 'Provide subtitle',
        when: ({
            confirmSubtitle
        }) => {
            if (confirmSubtitle) {
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
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Would you like to include a "Features" section?',
        default: true
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please enter project features!',
        when: ({
            confirmFeatures
        }) => {
            if (confirmFeatures) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmDeployed',
        message: 'Would you like to include a "Deployed Production" section?',
        default: true
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Please provide exact name of project repository from GitHub',
        when: ({
            confirmDeployed
        }) => {
            if (confirmDeployed) {
                return true;
            } else {
                return false;
            }
        },
        validate: deployedInput => {
            if (deployedInput) {
                return true;
            } else {
                console.log('Please enter exact name/title of project repository from GitHub!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmImg',
        message: 'Would you like to include a screenshot of the deployed production?',
        default: true
    },
    {
        type: 'input',
        name: 'img',
        message: 'Please provide the relative path of the project screenshot',
        when: ({
            confirmImg
        }) => {
            if (confirmImg) {
                return true;
            } else {
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
function writeToFile(fileName, responseData) {
    fs.writeFile(fileName, responseData, err => {
        if (err) throw err;
        console.log('Done!');
    })
}

// TODO: Create a function to initialize app
//use inquirer to prompt user w/ question array. Returns user response data.
function init() {
    return inquirer.prompt(questions)
        .then(responseData => {
            console.log('README Complete!')
            writeToFile('README.md', generateMarkdown(responseData))
        })
};

// Function call to initialize app
init();