// Import required packages
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions:",
    default: "npm test",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailInput) => {
      // Basic email validation
      const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        emailInput
      );
      if (valid) {
        return true;
      } else {
        console.log("Please enter a valid email address!");
        return false;
      }
    },
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("✅ README.md has been successfully generated!");
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userAnswers) => {
      // Generate markdown based on user answers
      const markdownContent = generateMarkdown(userAnswers);

      // Write markdown to README.md file
      writeToFile("README.md", markdownContent);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();
