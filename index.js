//import inquirer from "inquirer";
//add the modules that are needed for this project
//import fs from 'fs/promises'
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        name: 'title',
        type: 'input',
        message: "What is your project title?"
    },
    {
        name: 'description',
        type: 'input',
        message: "What is your project description?"
    },
    {
        name: 'installation',
        type: 'input',
        message: "What are the installation instructions for your application?"
    },
    {
        name: 'usage',
        type: 'input',
        message: "How do you use your application?"
    },
    {
        name: 'contributing',
        type: 'input',
        message: "How can users contribute to this project?"
    },
    {
        name: 'tests',
        type: 'input',
        message: "How can users update the tests for your project?"
    },
    {
        name: 'license',
        type: 'list',
        message: 'What licence do you use for this repository?',
        choices: ["Apache License 2.0", "GNU General Public License 3.0", "MIT", "None"]
    },
    {
        name: 'github',
        type: 'input',
        message: "What is your github username?"
    },
    {
        name: 'email',
        type: 'input',
        message: "What is your email address where users can get in touch with questions and suggestions?"
    },

];

// console.log(title, description, installation, usage, test, github, email, contributing);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile("README-file.md", generateMarkdown(answers));
        });
}

// function call to to callback - wait for user to answer in Terminal and then run next Action 
init();