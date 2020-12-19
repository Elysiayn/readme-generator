// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
  ${featuresText}
  `;
};

// create the "Deployed Production" section
const generateDeployed = (deployedText, githubText) => {
  if (!deployedText, githubText) {
    return '';
  }

  return `
  ## Deployed Production
  [${deployedText}](https://${githubText}.github.io/${deployedText}/)
  `;
};

// adds production screenshot
const generateImg = (imgText, githubText, deployedText) => {
  if (!imgText, githubText, deployedText) {
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
  ## License
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
  ${contributionsText}
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
    ...contributions
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
  ${installation}

  ## Usage
  ${usage}

  ${generateFeatures(features)}

  ${generateDeployed(deployed)}
  ${generateImg(img)}

  ## License
  ${license}

  ${generateTests(tests)}

  ## Questions
  Please feel free to reach me through email at:
  Email: ${email}

  Visit my GitHub!
  GitHub: https://github.com/${github}

  ${generateContributions(contributions)}
`;
}