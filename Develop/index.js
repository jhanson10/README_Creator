// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the necessary steps for installation foryour project/application.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain the usage of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None' ],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Name any contributors to this project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of tests you ran on your project',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please add a link to your Github profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter an email for contact',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
