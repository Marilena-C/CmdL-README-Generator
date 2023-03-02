import inquirer from "inquirer";
//import fs from 'fs/promises'
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'description',
        input: 'input',
        message: "What is your file description?"
    },
    {
        name: 'installation',
        input: 'input',
        message: "What are your installation instructions?"
    },
    {
        name: 'usage',
        input: 'input',
        message: "Tell us about the usage of your app:"
    },
    {
        name: 'github',
        input: 'input',
        message: "What is your github profile?"
    },
    {
        name: 'contributing',
        input: 'input',
        message: "Would you like to contribute to this app?"
    }
];

const {description, installation, usage, github, contributing} = await inquirer
    .prompt([
        {
            name: 'description',
            input: 'input',
            message: "What is your file description?"
        },
        {
            name: 'installation',
            input: 'input',
            message: "What are your installation instructions?"
        },
        {
            name: 'usage',
            input: 'input',
            message: "Tell us about the usage of your app:"
        },
        {
            name: 'github',
            input: 'input',
            message: "What is your github profile?"
        },
        {
            name: 'contributing',
            input: 'input',
            message: "Would you like to contribute to this app?"
        }
])

console.log(description, installation, usage, github, contributing);
// function to write README file
function writeToFile(description, installation, usage, github, contributing) {
}const md = `
<!DOCTYPE md>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini_Project</title>
</head>
<body>
    <h1>${description}</h1>
    <h2>To install this app you need to follow these instructions</h2>
    <p>${installation}</p>
    <h2>usage</h2>
    <p>${usage}</p>
    <h3>Check out my github: https://github.com/${github}</h3>
    <h3>Please do not hesitate to add your suggestions here if you want to contribute: https://github.com/Marilena-C/CmdL-README-Generator/${contributing}</h3>
    
</body>
</md>
`


// function to initialize program
function init() {
  
}

// function call to initialize program
init(await fs.writeFile('README.md', md));


//await fs.writeFile('README.md', md)
//await fs.writeFile('index.html', html)