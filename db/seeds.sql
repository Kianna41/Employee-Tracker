INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Finance"),
       (3, "Legal"),
       (4, "Sales");

INSERT INTO role (id, title, department, salary)
VALUES (1, "Sales Lead", 4, 1000000),
       (2, "Salesperson", 4, 80000),
       (3, "Lead Engineer", 1, 150000),
       (4, "Software Engineer", 1, 120000),
       (5, "Account Manager", 2, 160000),
       (6, "Accountant", 2, 125000),
       (7, "Legal Team Lead", 3, 250000),
       (8, "Lawyer", 3, 190000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, NULL),
       (2, "Mike", "Chan", 7, 1),
       (3, "Ashley", "Rodriguez", 2, 2),
       (4, "Kevin", "Tupik", 8, 1),
       (5, "Kunal", "Singh", 3, 2),
       (6, "Malia", "Brown", 4, 1),
       (7, "Sarah", "Lourd", 5, 1),
       (8, "Tom", "Allen", 6, 1);
        
    