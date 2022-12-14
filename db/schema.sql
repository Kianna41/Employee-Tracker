DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
    id INT  PRIMARY KEY, 
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    department INT,
    title VARCHAR(30),
    salary DECIMAL, 
    FOREIGN KEY (department)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT 
    REFERENCES employee(id)
    ON DELETE SET NULL
);