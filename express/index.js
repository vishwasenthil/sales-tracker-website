import express from "express";
let app = express();

const port = 4000;
import cors from "cors";

import {pool, addEmployee, deleteEmployee} from "./db.js";

app.use(cors());
app.use(express.json()); //parses json into js object

app.get(`/`, async (req, res)=>{
    let result = await pool.query(`SELECT * FROM employees`)
    res.send(result);
});

app.post("/add-new-user", (req, res)=>{
    console.log(req.body);
    addEmployee(req.body.name, req.body.time, req.body.sales, req.body.profits);
    res.sendStatus(200)
});

app.delete(`/delete-employee/:id`, (req, res)=>{
    deleteEmployee(req.params.id);
    res.sendStatus(200);
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});