// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### ${data.subtitle}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Production](#production)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contributions](#contributions)
  
  ## Installation
  ${data.installation}

  ## Features
  ${data.features}

  ## Usage
  ${data.usage}

  ## Deployed Production
[${data.deployed}](https://${data.github}.github.io/${data.deployed}/)
[![${data.deployed}](${data.img})](https://${data.github}.github.io/${data.deployed}/)

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  Please feel free to reach me through email at:
  Email: ${data.email}

  Visit my GitHub!
  GitHub: https://github.com/${data.github}

  ### Contributions
  ${data.contributions}
`;
}

module.exports = generateMarkdown;