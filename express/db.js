//connecting to mysql

import mysql from "mysql2";

export const pool = mysql.createPool({ //allows for multiple connectionos to database
    connectionLimit: 10,
    host:`127.0.0.1`,
    user:`root`,
    password:`password`,
    database:`sales`,
}).promise();

pool.getConnection(err=>{
    if(err) {
        console.log(`mysql connection failed ${err}`);
    } else {
        console.log(`mysql connection succesful`);
    }
});

export function addEmployee(name, time, sales, profits) {
    pool.query(`INSERT INTO employees (name, time, sales, profits)
    VALUES('${name}', ${time}, ${sales}, ${profits});`).then(pool.query(`SELECT * FROM employees`)).then(res=>console.log(res));
}

export function deleteEmployee(id) {
    pool.query(`DELETE FROM employees WHERE id=${id}`);
}
/*
let result = pool.query(`SELECT * FROM employees`).then(res=>console.log(res));
console.log(result);
*/

/*
connection.connect(err=>{
    if(err) {
        console.log(`mysql connection failed ${err}`);
    } else {
        console.log(`mysql connection succesful`);
        connection.query(`CREATE TABLE employees(
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            time INT NOT NULL,
            sales INT NOT NULL,
            profits INT NOT NULL,
            PRIMARY KEY (id)
        );`);
    }
});
*/