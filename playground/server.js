const express = require('express');
const routerLocal = require('./routes');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use((req, res, next) => {
    console.log(` req ${req.method} URL ${req.url}`);
    next();
});

app.use(express.static(__dirname+'/public'));

app.get('/test', (req, res) => {
    res.send(`<h1>Hello world</h1>`);
});

app.get("*", (req, res) => {
    res.send(`Not found here`);
});

app.listen(3000, () => {
    console.log(`Running on Port 3000`);
});
module.exports = { app };
