// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");

//TODO: Create connection between MySQL and database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "Happyme1!!",
    database: "department_db",
  },
  console.log(`Connected to the department_db database.`)
);

// TODO: Create an array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role", //update mysql query w-3 schools
        ],
        name: "answers",
      },
    ])
    .then((res) => {
      if (res.answers === "View all departments") {
        allDepartments();
      } else if (res.answers === "View all roles") {
        allRoles();
      } else if (res.answers === "View all employees") {
        allEmployees();
      } else if (res.answers === "Add a department") {
        addDepartment();
      } else if (res.answers === "Add a role") {
        addRole();
      } else if (res.answers === "Add an employee") {
        addEmployee();
      } else if (res.answers === "Update employee role") {
        updateRole();
      }
    });
}

//Function to view all departments
function allDepartments() {
  db.promise()
    .query("Select * from department")
    .then(([rows]) => {
      console.table(rows);
    });
  init();
}

// Function to view all roles
function allRoles() {
  db.promise()
    .query("Select * from role")
    .then(([rows]) => {
      console.table(rows);
    });
  init();
}

//Function to view all emplyoyees
function allEmployees() {
  db.promise()
    .query("Select * from employee")
    .then(([rows]) => {
      console.table(rows);
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your department?",
        name: "department_Name",
      },
    ])
    .then((res) => {
      db.promise().query(
        `INSERT INTO department (name) VALUES ("${res.department_Name}")`
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the role you want to add?",
        name: "role_Name",
      },
    ])
    .then((res) => {
      db.promise().query(
        `INSERT INTO role (title) VALUES ("${res.role_Name}")`
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the first name of the employee?",
        name: "employee_First",
      },
      {
        type: "input",
        message: "What is the last name of the employee?",
        name: "employee_Last",
      },
    ])
    .then((res) => {
      db.promise().query(
        `INSERT INTO employee (first_name, last_name) VALUES (?,?)`,
        [res.employee_First, res.employee_Last]
      );
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which employee did you want to update?",
        choices: [
          "John Doe",
          "Mike Chan",
          "Ashley Rodriguez",
          "Kevin Tupik",
          "Kunal Singh",
          "Malia Brown",
          "Sarah Lourd",
          "Tom Allen",
        ],
        name: "answers",
      },
    ])
    .then((res) => {
      if (res.answers === "answers") {
        //switch case on the names
        inquirer
          .prompt([
            {
              type: "list",
              message:
                "What department did you want to switch this employee to?",
              choices: ["Engineering", "Finance", "Legal", "Sales"],
              name: "departmentChange", // for loop using department ID
            },
          ])
          .then((res) => {
            if (res.answers === "Engineering") {
              db.promise().query(
                `UPDATE department SET (name) ("${res.answers}")`
              );
            }
          });
      }
    });
}

init();
