// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ##Table of contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#gitHub)
  8. [E-mail](#e-mail)

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${data.license}

## GitHub
${data.github}

## E-mail
${data.email}`
}

module.exports = generateMarkdown;