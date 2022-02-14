// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return "";
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://img.shields.io/badge/license-MIT-blue";
    case 'Apache 2.0':
      return "https://img.shields.io/badge/license-Apache%202.0-orange";
    case 'Mozilla Public License 2.0':
      return "https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green";
    case 'Boost Software License':
      return "https://img.shields.io/badge/license-Boost%20Software%20License-red";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {;
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseSection(data.license)}

## Description

## Table of Contents

## Instalation

## Usage

## Contribution Guidlines

## Testing

## Contact Information
* GitHub:

* Email:
`;
}

module.exports = generateMarkdown;
