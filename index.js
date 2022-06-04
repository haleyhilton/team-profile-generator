const newHTML = require('./src/createHTML.js')
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")


const employees = []


const createEmployee = () => {
    return inquirer.prompt([{
                type: "list",
                name: "role",
                message: "Enter team member's role",
                choices: ['Engineer', 'Intern', 'Manager']
            },
            {
                type: "input",
                name: "name",
                message: "Enter team member's name"
            },
            {
                type: "input",
                name: "id",
                message: "Enter team member's id"
            },
            {
                type: "input",
                name: "email",
                message: "Enter team member's email address"
            },
            {
                type: "input",
                name: "school",
                message: "Enter interns's school",
                when: (input) => input.role === "Intern"
            },
            {
                type: "input",
                name: "github",
                message: "Enter engineer's Github username",
                when: (input) => input.role === "Engineer"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter manager's office number",
                when: (input) => input.role === "Manager"
            },
            {
                type: "list",
                name: "addMore",
                message: "Would you like to add more team members?",
                choices: ["Yes", "No"]
            }

        ])
        .then(data => {
            const {
                role,
                name,
                id,
                email,
                github,
                school,
                officeNumber,
                addMore
            } = data
            if (role === "Engineer") {
                const engineer = new Engineer(name, role, id, email, github)
                console.log(engineer.getGithub())
                employees.push(engineer)
            } else if (role === "Intern") {
                const intern = new Intern(name, role, id, email, school)
                employees.push(intern)
            } else if (role === "Manager") {
                const manager = new Manager(name, role, id, email, officeNumber)
                employees.push(manager)
            }
            if (addMore === "Yes") {
                return createEmployee()
            } else {
                return employees
            }
        })
}



createEmployee()
    .then((data) => {
        console.log(data);
        const html = newHTML(data)
        fs.writeFile("./index.html", html, (err) => { 
            err ? console.error(err) : console.log('Team Members generated!')
        }
           )})