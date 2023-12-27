const express = require(`express`);
let app = express();

const port = 4000;
const cors = require(`cors`);

const db = require("./db");

app.use(cors());
app.use(express.json());

app.get(`/`, (req, res)=>{
    res.send(`hi`);
});

app.post("/add-new-user", (req, res)=>{
    console.log(req.body);
    /*
    db.query(`INSERT INTO employees (name, time, sales, profits)
    VALUES(${req}, 50, 9);`);
    */
    res.send("added new user");
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});