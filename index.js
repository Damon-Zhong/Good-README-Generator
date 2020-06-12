const inquirer = require("inquirer");
const dotenv = require("dotenv")
const fs = require('fs')

//Prompt user for input
async function mainApp(){
    const response = await inquirer.prompt([{
        type: "checkbox",
        name: "Badge",
        choices: ['badge1', 'badge2', 'badge3']
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "Description",
        message: "Description of your application",
    },
    {
        type: "editor",
        message: "Table of Contents",
        name: "TableOfContent",
    },
    {
        type: "input",
        name: "Installation",
        message: "Installation",
    },
    {
        type: "input",
        name: "Usage",
        message: "Usage",
    },
    {
        type: "input",
        name: "License",
        message: "License",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Contributing",
    },
    {
        type: "input",
        name: "Tests",
        message: "Tests",
    },
])
    writeToFile( response );
}

mainApp();

function writeComplete(err){
    if (err) {
        return console.log(err);
        }
        console.log("Success! Check your README.");
    };

function writeToFile( data ){
    fs.writeFile( 'README.md', 'This is a auto-generated README' ,writeComplete)
    Object.keys( data ).forEach( function( key ){
        fs.appendFile( 'README.md', `\n#${key}\n${data[key]}`, writeComplete)
    })
}

// * Questions
//   * User GitHub profile picture
//   * User GitHub email

































// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
