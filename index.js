// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generatePage = require('./src/readme-template');  -might not need for this project

//Question array for user input
const promptUser = () => {
    return inquirer.prompt([{
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
            type: 'checkbox',
            name: 'tableContents',
            message: 'What sections would you like to include in the Table of Contents? (Check all that apply)',
            choices: [
                'Subtitle', 'Description', 'Table of Contents', 'Installation', 'Features', 'Usage', 'Deployed Production',
                'License', 'Badges', 'Tests', 'Questions', 'Contribution'
            ]
        }
    ]);
};

//function for project question prompts
// const promptReadme = readmeData => {

//function calls 
promptUser();