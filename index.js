// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: 'What is the username of the owner of the project repository on GitHub? (Required):',
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
        message: 'Provide a current email address (Required):',
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
        message: 'What is the title of the project? (Required):',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
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
        message: 'Provide a description of the project (Required):',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project (Required):',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for project usage (Required):',
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
        name: 'confirmProduction',
        message: 'Would you like to include a "Production" section for the deployed project?',
        default: true
    },
    {
        type: 'input',
        name: 'production',
        message: 'Please provide the project repository name from GitHub:',
        when: ({
            confirmProduction
        }) => {
            if (confirmProduction) {
                return true;
            } else {
                return false;
            }
        },
        validate: productionInput => {
            if (productionInput) {
                return true;
            } else {
                console.log('Please enter exact name of project repository from GitHub!');
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
        message: 'Please provide the relative path of the project screenshot (ex. assests/images/screenshot.png):',
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
        type: 'list',
        name: 'license',
        message: 'Which of the badges would you like to include?',
        choices: [
            'Apache', 'Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Perl'
        ],
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
        message: 'Please provide test information:',
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
        message: 'Provide the GitHub Username of contributor:',
        when: ({
            confirmContributions
        }) => {
            if (confirmContributions) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter the GitHub Username of contributor!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Would you like to include a "Table of Contents" section?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'table',
        message: 'Please select links to be displayed under the Table of Contents:',
        choices: [
            'Description', 'Installation', 'Usage', 'Features', 'Production',
            'License', 'Tests', 'Questions', 'Contribution'
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
            console.log("README Complete!")
            writeToFile('./dist/README.md', generateMarkdown(responseData))
        })
};

// Function call to initialize app
init();