const { renderLicenseBadge } = require('./licenseBadge');

const generateREADME = (answers) => {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    test,
    email,
    githubUrl,
  } = answers;
  return `# ${title}
  
${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

## Installation
To install dependencies, run the following:
\`
${installation}
\`

## Usage

${usage}

## License

This repository is licensed under the ${license} license.

## Contributing

${contributing}

## Test

To run tests, run the following:
\`
${test}
\`

## Questions

Questions about this repository? Please contact me at [${email}](mailto:${email}). View more of my work in GitHub at ${githubUrl}`;
};

module.exports = { generateREADME };
