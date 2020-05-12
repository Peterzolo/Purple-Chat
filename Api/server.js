const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const router = require('./route/chatRoute')


const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new User connection');

    socket.on('disconnect', () => {
        console.log('User had left')
    })
});

app.use('/', router)  

server.listen(PORT, () => console.log(`Server successfully started on port ${PORT}`))