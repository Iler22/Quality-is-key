const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please give a short description of what your project is?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
    default: "npm init -y and npm install inquirer",
  },
  {
    type: "input",
    message: "What does a user need to know to be able to use your project?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What license does your project fall under?",
    name: "license",
    choices: [
      "Apache 2.0",
      "Boost Software 1.0",
      "ISC",
      "MIT",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "How can other developers contribute towards your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How can a test be run on your project?",
    name: "test",
    default: "npm run start",
  },
  {
    type: "input",
    message: "Questions?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

const inquirerAsync = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);

    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const start = async () => {
  const answers = await inquirerAsync(questions);

  console.log(answers);
};

start();
