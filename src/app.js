const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 4000

app.use( bodyParser.json() );
app.use(cors());

app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    next();
});

app.get('/', (req, res) => {
    const urlFile = require('./url.json')
    res.send(urlFile)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
