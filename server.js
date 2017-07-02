const express = require('express');
const bodyParser = require('body-parser');
const _colors = require('colors');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const route = require('./routes');

const _portNum = 1337 || process.env.PORT;

app.use(express.static('_init'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', route);



/*io.on('connection', function (socket) {
    console.log('connected', socket.id);
    socket.emit('news', {
        hello: 'world'
    });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('disconnect', function () {
        console.log('disconnected ', socket.id);
    });
});*/


http.listen(_portNum, () => {
    console.log(`server started on Port ${_portNum}`.cyan);
});