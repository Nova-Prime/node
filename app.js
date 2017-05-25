const _ = require('lodash');
const express = require('express');
const bodyparser = require('body-parser');


var app = express();
var PortNum = process.env.port || 3000;

app.use(bodyparser.json());

app.get('/test', (req, res) => {
    console.log(req.query);
    res.send('Welcome');
});








app.listen(PortNum, () => {
    console.log(`Server Started On Port ${PortNum}`)
});

