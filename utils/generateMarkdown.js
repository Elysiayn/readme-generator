// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(apache) {
  return (apache ? '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' : '');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const generateLicense = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ## License
  ${licenseText}
  `;
};

// create the "Subtitle" section
const generateSubtitle = subtitleText => {
  if (!subtitleText) {
    return '';
  }

  return `
  ### ${subtitleText}
  `;
};

// create the "Features" section
const generateFeatures = featuresText => {
  if (!featuresText) {
    return '';
  }

  return `
  ## Features
  * ${featuresText}
  `;
};

// create the "Deployed Production" section
const generateDeployed = (deployedText, githubText) => {
  if (!deployedText && !githubText) {
    return '';
  }

  return `
  ## Deployed Production
  [${deployedText}](https://${githubText}.github.io/${deployedText}/)
  `;
};

// adds production screenshot
const generateImg = (imgText, githubText, deployedText) => {
  if (!imgText || !githubText || !deployedText) {
    return '';
  }

  return `
  [![${deployedText}](${imgText})](https://${githubText}.github.io/${deployedText}/)
  `;
};

// create the "Test" section
const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
  ## Tests
  ${testsText}
  `;
};

// create the "Contributions" section
const generateContributions = contributionsText => {
  if (!contributionsText) {
    return '';
  }

  return `
  ### Contributions
  * ${contributionsText}
  `;
};

// TODO: Create a function to generate markdown for README
module.exports = responseData => {
  const {
    title,
    subtitle,
    description,
    installation,
    usage,
    features,
    deployed,
    github,
    email,
    img,
    license,
    tests,
    contributions
  } = responseData;

  return `
  # ${title}
  ${generateSubtitle(subtitle)}

  ## Description
  ${description}

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
  1. ${installation}

  ## Usage
  1. ${usage}

  ${generateFeatures(features)}

  ${generateDeployed(deployed, github)}
  ${generateImg(img, github, deployed)}

  ${generateLicense(license)}

  ${generateTests(tests)}

  ## Questions
  Please feel free to reach me through email for additional questions at:
  <br>
  Email: ${email}

  Visit my GitHub!
  <br>
  GitHub: [${github}](https://github.com/${github})

  ${generateContributions(contributions)}
`;
}