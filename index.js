// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs") 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        message: "What is the Title of Your README?", 
        name: "title"
    },

    {
        type: "input", 
        message: "Describe your README!", 
        name: "description"
    },
    
    {
        type: "input", 
        message: "Provide Installation Instructions!", 
        name: "install"
    }, 

    {
        type: "input", 
        message: "What is the Project's Usage For?", 
        name: "usage"
    },

    {
        type: "list", 
        message: "What License Will you be Using for your Project?", 
        choices: ['MIT License', 'GNU GPL v2', 'GNU GPL v3', 'Apache License 2.0', 'BSD 3-Clause'],
        name: "license"
    },  

    {
        type: "input", 
        message: "What are the Contribution Guidelines for This Project?", 
        name: "contribution"
    }, 

    {
        type: "input", 
        message: "What are the Instructions for this Test?", 
        name: "test"
    },

    {
        type: "input", 
        message: "What do I do if I Have an Issue?", 
        name: "questions"
    }, 

    {
        type: "input", 
        message: "Enter a Username!", 
        name: "username"
    }, 

    {
        type: "input", 
        message: "What is Your Email?", 
        name: "email"
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
