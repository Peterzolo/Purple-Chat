
import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const URL = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(URL)


        
        setName(name);
        setRoom(room);

        console.log(socket)
    }, [URL,location.search])
    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat
