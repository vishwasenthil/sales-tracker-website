import express from "express";
let app = express();

const port = 4000;
import cors from "cors";

import {pool} from "./db.js";

app.use(cors());
app.use(express.json()); //parses json into js object

app.get(`/`, async (req, res)=>{
    let result = await pool.query(`SELECT * FROM employees`)
    res.send(result);
});

app.post("/add-new-user", (req, res)=>{
    console.log(req.body);
    pool.query(`INSERT INTO employees (name, time, sales, profits)
    VALUES('${req.body.name}', ${req.body.time}, ${req.body.sales}, ${req.body.profits});`).then(pool.query(`SELECT * FROM employees`)).then(res=>console.log(res));
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});