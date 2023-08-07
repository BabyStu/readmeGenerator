
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const prompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of the project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Please provide instructions on how to install the application.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use the application.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'IBM', 'PERL'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide who contributed to the project.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Provide directions to test application',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
    },
  ]);
};

const generateREADME = ({ name, description, install, usage, license, contribution, test, email, github  }) => {
return `# ${name}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description
${description}

## Installation
${install}

## Usage
${usage}

## License
Distributed under the ${license} License.

## Contributing
${contribution}

## Tests
${test}

## Questions
Please send questions to:
${email} or to ${github} at Github`
};


const init = () => {
  prompt()
      
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();