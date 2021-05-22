//require every class
//require inquirer
//path
//fs

//const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");
const tArray = [];

// Adding Manager and their credentials

const aManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the manager?",
        name: "name",
        validate: (nInput) => {
          if (nInput) {
            return true;
          } else {
            console.log("If you please enter a name of a manager!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the id of the manager?",
        name: "id",
        validate: (nInput) => {
          if (isNaN(nInput)) {
            return true;
          } else {
            console.log("If you please enter an id of a manager!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the email of the manager?",
        name: "email",
        validate: (email) => {
          val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (val) {
            return true;
          } else {
            console.log("If you please enter an email of a manager!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the id of the manager?",
        name: "officeNumber",
        validate: (nInput) => {
          if (nInput) {
            return true;
          } else {
            console.log("If you please enter a manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((manInput) => {
      const { name, id, email, officeNumber } = manInput;
      const man = new Manager(name, id, email, officeNumber);

      teamArray.push(man);
      console.log(man);
    });
};

// Adding Employee

const aEmployee = () => {
  console.log(`
    =================
    Adding the employees to the team
    =================
    `);

  return inquirer.prompt([
    {
      type: "list",
      message: "Choose the type of employee you would like to add",
      name: "role",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      message: "What is the name of the employee?",
      name: "name",
      validate: (nInput) => {
        if (nInput) {
          return true;
        } else {
          console.log("Enter employee's name!");
          return false;
        }
      },
    },
    {
        type: "input",
        message: "What is the id of the employee?",
        name: "id",
        validate: (nInput) => {
          if (isNaN(nInput)) {
            return true;
          } else {
            console.log("If you please enter an id of an employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the email of the employee?",
        name: "email",
        validate: (email) => {
          val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (val) {
            return true;
          } else {
            console.log("If you please enter an email of an employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Enter employee's github username?",
        name: "gitHub",
        when: (input) => input.role === "Engineer",
        validate: (nInput) => {
          if (isNaN(nInput)) {
            return true;
          } else {
            console.log("If you please enter the gitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
        when: (input)=> input.role === "Intern",
        validate: (nInput) => {
          if (nInput) {
            return true;
          } else {
            console.log("Enter intern's school!");
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'CaddEmployee',
        message: 'Are there more members in your team?',
        default: false
    }
  ])
  .then (empData => {
      let {name,id,email,role,gitHub,school,CaddEmployee} = empData;
      let emp;
      if (role === "Engineer") {
          emp = new Engineer (name, id, email, gitHub);
          console.log(employee);
      } else if (role === "Intern") {
          emp = new Intern (name, id, email, school);
          console.log(emp);
      }
      tArray.push(employee);
      if (CaddEmployee){
          return aEmployee(tArray);
      } else {
          return tArray;
      }
  })
};

  const wFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error
        if (err) {
            console.log(err);
            return;
        // when the profile has been created
        } else {
            console.log("Your team has been created! Go to your new team index.html")
        }
    })
};

aManager()
.then (aEmployee)
.then(tArray =>{
    return genHTML(tArray);
})
.then(pHTML => {
    return wFile(pHTML);
})
.catch(err=>{
    console.log(err);
})