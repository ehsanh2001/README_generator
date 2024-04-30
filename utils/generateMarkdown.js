// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)";
    } else if (license === "GNU GPLv3") {
        return "![GitHub license](https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg)";
    } else if (license === "Apache 2.0") {
        return "![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)";
    } else if (license === "ISC") {
        return "![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "GNU GPLv3") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "ISC") {
        return "https://opensource.org/licenses/ISC";
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    let licenseLink = renderLicenseLink(license);
    return `
## License

This project is licensed under the [${license}](${licenseLink}) license.

`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink =
        data.license === "None" ? "" : `\n  * [License](#license)\n`;

    return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [Contributing](#contributing)
  ${licenseLink}
  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`
  
## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
