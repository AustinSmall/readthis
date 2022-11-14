// TODO: Include packages needed for this application
const { writeFile, fstat } = require("fs");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = () => {
    return prompt([
        {
            type: "input",
			name: "title",
			message: "What is the name of you project? (Required)",
			validate: (titleInput) => {
                if (titleInput) {
                    return true;
				} else {
                    console.log("Please enther the name of your project");
					return false;
				}
			},
		},
		{
            type: "input",
			name: "description",
			message: "Write a discription of your project. (Required)",
			validate: (titleInput) => {
                if (titleInput) {
                    return true;
				} else {
                    console.log("Please write the name of your project.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "installation",
			message:
				"What are the installation instructions for your project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log(
						"Please type a installation directions for your project."
					);
					return false;
				}
			},
		},
		{
			type: "input",
			name: "usage",
			message: "What is your project used for? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please explain what your project is used for");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "contributing",
			message:
				"What are the contribution guidelines for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log(
						"Please explain the contribution guidelines for your Project."
					);
					return false;
				}
			},
		},
		{
			type: "input",
			name: "tests",
			message: "What are the test instructions for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter the test instructions for your Project.");
					return false;
				}
			},
		},
		{
			type: "list",
			name: "license",
			message: "Which license applies to your application? (Select one)",
			choices: ["MIT", "GNU GPLv3", "Apache", "No License"],
		},

		{
			type: "input",
			name: "gitHub",
			message: "What is your GitHub username? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your GitHub username.");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is your email? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your email.");
					return false;
				}
			},
		},
	])
		.then((answers) => {
			return answers;
		})
		.catch((error) => {
			console.log(error);
		});
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        writeFile("./dist/"+fileName,data,err=>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: fileName + "was created",

            })
} )
    });
}
// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then((answers)=>{
        return(answers);
    })
    .then(data =>{
        return generateMarkdown(data);
    })
    .then(readmeData=>{
		return writeToFile(fileName,readmeData);
    })
    .catch(err => {
		console.log(err);
    });
    const fileName = "README.md";
}

// Function call to initialize app
init();