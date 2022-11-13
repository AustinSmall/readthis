// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let userLicense = license.license
let userBadge = "";
if (license =="No License " || null) {
    return "";
} else if (userLicense === "MIT") { 
    userBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)`;
    return userBadge;
} else if (userLicense === "GNU GPLv3") {
    userBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)`;
    return userBadge;
} else if (userLicense === "Apache") {
    userBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-red.svg)`;
    return userBadge;
};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license ==="MIT") {
        return `
      [${license}](https://choosealicense.com/licenses/mit/)
        `;
        } else if (license ==="GPLv3") {
          return `
      [${license}](https://choosealicense.com/licenses/gpl-3.0/)
          `;
        } else if (license ==="Apache_2.0") {
          return `
      [${license}](https://choosealicense.com/licenses/apache-2.0/)
          `;
        } else if (license ==="ISC") {
          return `
      [${license}](https://choosealicense.com/licenses/isc/)
          `;
        } else if (license ==="GPL_v2") {
          return `
      [${license}](https://choosealicense.com/licenses/gpl-2.0/)
          `;
         } else {
          return "";
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "No license" || null) {
    return "This Project is not licensed";
    }
    else if (userlicense= true) {
        return "The project is licensed by" + renderLicenseLink(license);
    
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}


## Description 
${datadescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseLink(data.license)}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
 If there are any questions or concerns please contact me at (https://www.github.com/${data.username}) or you can contact user emial at${useremail}.
`;
}
    
