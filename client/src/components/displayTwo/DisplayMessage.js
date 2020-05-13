
import React from 'react'

const DisplayMessage = ({ message: { user, text }, name }) => {
    let isMessageByCurrentUser = false;

    const trimedName = name.trim().toLowerCase();

    if (user === trimedName) {
        isMessageByCurrentUser = true;
    }

    return (
        isMessageByCurrentUser
            ? (
                <div className='messageContainer justifyEnd'>
                    <p className='sentText'>{trimedName}</p>
                    <div className='messageBox'>
                        <p className='messageText'>{text}</p>
                    </div>

                </div>
            )
            :
            (
                <div className='messageContainer justifyStart'>
                    <div className='messageBox'>
                        <p className='sentText'>{text}</p>
                    </div>
                    <p className='messageText'>{user}</p>
                </div>
            )

    )
}

export default DisplayMessage
