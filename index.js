const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions.",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license.",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
    {
        type: "input",
        name: "questions",
        message:
            "Please provide instructions for how to reach you with questions.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
}

// Function call to initialize app
init();
