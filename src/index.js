const inquirer = require('inquirer');
const fs = require('fs');

const isRequired = (answer) => {
  if (answer === '') {
    return 'This is a required field';
  }
  return true;
};

const isUrl = (input) => {
  try {
    const url = new URL(input);
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? true
      : 'Please provide a valid GitHub URL';
  } catch (error) {
    return 'Please provide a valid GitHub URL';
  }
};

const isEmail = (input) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    return true;
  }
  return 'Please enter valid email';
};

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
    choices: [
      'Apache 2.0',
      'Boost Software 1.0',
      'ISC',
      'MIT',
      'The Unlicense',
    ],
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

const inquirerAsync = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);

    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

// const writeToFile = (path, data, options) => {
//   try {
//     fs.writeFileSync(path, data, options);
//     console.log(`Successfully created quality README ${path}!`);
//   } catch (error) {
//     console.log(`Failed to create read me ${path}: ${error.message}!`);
//   }
// };

const start = async () => {
  const answers = await inquirerAsync(questions);

  console.log(answers);

  // writeToFile('output.json', JSON.stringify(answers));
};

start();
