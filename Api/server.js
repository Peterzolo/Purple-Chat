const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, deleteUser, getUser, getUsersInRoom } = require('./utilities/userHelper')


const router = require('./route/chatRoute')


const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);
      
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the ${user.room} room` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has just joined ${user.room} room` });
        

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });



        callback();

    });

    socket.on('message', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        callback();
    } )

    socket.on('disconnect', () => {
        const user = deleteUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
  
    })
});

app.use('/', router)  

server.listen(PORT, () => console.log(`Server successfully started on port ${PORT}`))