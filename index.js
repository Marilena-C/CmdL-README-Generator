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
            input: 'input',
            message: "What is your project title?"
        },
        {
            name: 'description',
            input: 'input',
            message: "What is your project description?"
        },
        {
            name: 'installation',
            input: 'input',
            message: "What are the installation instructions for your application?"
        },
        {
            name: 'usage',
            input: 'input',
            message: "How do you use your application?"
        },
        {
            name: 'contributing',
            input: 'input',
            message: "How can users contribute to this project?"
        },
        {
            name: 'test',
            input: 'input',
            message: "How can users update the tests for your project?"
        },
        {
            name: 'licence',
            type: 'checkbox',
            message:'What licence do you use for this repository?',
            choices: ["Apache License 2.0", "GNU General Public License 3.0", "MIT", "None"]
        },
        {
            name: 'github',
            input: 'input',
            message: "What is your github username?"
        },
        {
            name: 'email',
            input: 'input',
            message: "What is your email address where users can get in touch with questions and suggestions?"
        },
        
    ];

    console.log(title, description, installation, usage, test, github, email, contributing);

    // function to write README file
    function writeToFile(fileName, data) {
         fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }

    //function to initialize program
    function init() {
        inquirer
            .prompt([questions])
            .then((answers) => {
                console.log(answers);
                writeToFile("README-file.md", generateMarkdown(answers));
            });
    }

// function call to to callback - wait for user to answer in Terminal and then run next Action 
init();
