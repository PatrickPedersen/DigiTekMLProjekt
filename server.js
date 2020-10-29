const http = require("http");
const express = require("express");
const osc = require("node-osc");
const socketio = require("socket.io");

const app = express();
app.use(express.static(`${__dirname}/../client`));

const server = http.createServer(app);
const io = socketio(server);

let oscServer = new osc.Server(12000, '127.0.0.1', () => {
    console.log('OSC Server is listening');
});

io.on('connection', (socket) => {
    console.log('Socket connection');
    oscServer.on('/rod', () => {
        socket.send(1)
    });
    oscServer.on('/orange', () => {
        socket.send(2)
    });
    oscServer.on('/gul', () => {
        socket.send(3)
    });
    oscServer.on('/gron', () => {
        socket.send(4)
    });
    oscServer.on('/bla', () => {
        socket.send(5)
    });
    oscServer.on('/lilla', () => {
        socket.send(6)
    });
    oscServer.on('/sort', () => {
        socket.send(7)
    });
    oscServer.on('/hvid', () => {
        socket.send(8)
    });
});

server.on('error', (err) => {
    console.error(err);
});

server.listen(8080, () => {
    console.log('Server is ready');
});