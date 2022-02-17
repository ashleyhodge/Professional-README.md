// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![](https://img.shields.io/badge/license-${data.licensing}-blue)


## Description
${data.description}

## Table of Contents
* [Installation](#dependancies)
* [Usage](#usage)
* [Contributions](#contribution)
* [Testing](#test)
* [Contact Info](#github)

## Instalation
${data.dependancies}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing
${data.test}

## Licensing
License: ${data.licensing}

## If you have any questions, contact me at:
* GitHub: (https://github.com/${data.github})

* Email: ${data.email}
`;
}

module.exports = generateMarkdown;
