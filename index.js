const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
const makeHTML = require('./lib/createHTML')


const employees = []


const createEmployee = () => {
    return inquirer.prompt([
        {
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
    .then(employeeDetails => {
        const {name, id, email, role, github, school, officeNumber, addMore} = employeeDetails
        if (role === "Engineer"){
            const engineer = new Engineer (name, id, email, github)
            console.log(engineer.getGithub())
            employees.push(engineer)
        } else if (role === "Intern"){
            const intern = new Intern (name, id, email, school)
            employees.push(intern)
        }
        else {
            const manager = new Manager (name, id, email, officeNumber)
            employees.push(manager)
        }
        if (addMore === "Yes"){
            return createEmployee()
        }else{
            return employees
        }
    })
}



const writefile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err){
            console.err("Error. Please try again")
            console.err(err)
            return
        }else{
            console.log("Success! Please find your team info under 'index.html'")
        }
    })
}

createEmployee()
    .then(employees => {
        return makeHTML(employees)
    })
    .then( employeehtml => {
        return writefile(employees)
    })
    .catch(err => {
        console.log(err)
    })