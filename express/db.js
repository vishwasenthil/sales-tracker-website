//connecting to mysql

const mysql = require(`mysql2`);

const connection = mysql.createConnection({
    host:`127.0.0.1`,
    user:`root`,
    password:`password`,
    database:`sales_tracker`,
});

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
            PRIMARY KEY (id)
        );`);
    }
});