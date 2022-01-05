const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
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
