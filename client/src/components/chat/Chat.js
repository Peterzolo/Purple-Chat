
import React, { useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'
import Navbar from '../navbar/Navbar';
import MessageForm from '../messageform/MessageForm';
import  DisplayMessages  from '../display/DisplayMessages';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    const URL = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(URL)


        
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });
           
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [URL, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    }, [messages]);


    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className='outerContainer'>
            <div className='container'>
                <Navbar room={room} />
                <MessageForm message={message} setMessage={setMessage} sendMessage={sendMessage} />
                <DisplayMessages messages ={messages} />
                
              
           </div>
        </div>
    )
}

export default Chat
