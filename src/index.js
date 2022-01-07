const inquirer = require('inquirer');
const fs = require('fs');
const { generateREADME } = require('./generate');
const { isRequired, isUrl, isEmail } = require('./validate');
const { writeToFile } = require('./file');

const start = async () => {
  const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'Please give a short description of what your project is?',
      name: 'description',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
      default: 'npm init -y and npm install inquirer',
    },
    {
      type: 'input',
      message: 'What does a user need to know to be able to use your project?',
      name: 'usage',
      validate: isRequired,
    },
    {
      type: 'checkbox',
      message: 'What license does your project fall under?',
      name: 'license',
      choices: ['Apache 2.0', 'Boost Software 1.0', 'ISC', 'MIT'],
    },
    {
      type: 'input',
      message: 'How can other developers contribute towards your project?',
      name: 'contributing',
      validate: isRequired,
    },
    {
      type: 'input',
      message: 'How can a test be run on your project?',
      name: 'test',
      default: 'npm run start',
    },
    {
      type: 'input',
      message: 'Questions?',
      name: 'questions',
    },
    {
      type: 'input',
      message: 'What is your GitHub profile URL?',
      name: 'githubUrl',
      validate: isUrl,
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
      validate: isEmail,
    },
  ];
  const answers = await inquirer.prompt(questions);

  const README = generateREADME(answers);

  writeToFile(README);

  console.log('Successfully created a quality README!');
};

start();
