// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }

  // Create a formatted license name for the badge URL
  const formattedLicense = license.replace(/ /g, "_");

  return `![License](https://img.shields.io/badge/License-${formattedLicense}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }

  // License URLs mapped to license names
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GPL 3.0": "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
  };

  return licenseLinks[license];
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }

  return `## License

This project is licensed under the [${license}](${renderLicenseLink(
    license
  )}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license && data.license !== "None" ? "- [License](#license)" : ""}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, you can reach me at [${
    data.email
  }](mailto:${data.email}).

You can also find more of my work on GitHub: [${
    data.github
  }](https://github.com/${data.github})
`;
}

export default generateMarkdown;
