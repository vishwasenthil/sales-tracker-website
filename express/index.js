const express = require(`express`)
let app = express();

const port = 4000;

app.get(`/`, (req, res)=>{
    res.send(`hi`);
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});