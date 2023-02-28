// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Table of contents:
    1. [Description] (#Description)
    2. [Installation] (#Installation)
    3. [Usage](#Usage)  
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Licence](#Licence)
    7. [GitHub](#GitHub)
    8. [E-mail](#E-mail)
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
## Licence
${data.licence}
## GitHub
${data.github}
## E-mail
${data.email}`
}

module.exports = generateMarkdown;