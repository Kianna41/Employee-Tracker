// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");

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
          "Update employee role",
        ],
        name: "answers",
      },
    ])
    .then((res) => {
      if (res.answers === "View all departments") {
        allDepartments();
      }
    });
}

function allDepartments() {
  db.promise()
    .query("Select * from department")
    .then(([rows]) => {
      console.table(rows);
    });
  init();
}

init();
