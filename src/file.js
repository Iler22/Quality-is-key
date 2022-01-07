const fs = require('fs');

const writeToFile = (data) => {
  try {
    fs.writeFileSync('./output/README.md', data);
  } catch (error) {
    console.log(`[ERROR]: Failed to write to file | ${error.message}`);
  }
};

module.exports = { writeToFile };
