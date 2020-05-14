import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className='form-wrapper'>
            <form className ='join-form'>
                <div className='click-join'><h4 className='join-text'>Welcome to Purple Chat</h4></div>
                <input type="text" className='jointInputOne' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <br/>
                <input type="text" className='joinInputTwo' placeholder='Course' onChange={(e) => setRoom(e.target.value)} />
               <br/>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='sign-in' type='submit'>Sign In</button>
                </Link>
           </form>
        </div>


    )
}

export default Join

