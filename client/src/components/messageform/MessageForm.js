

import React from 'react'

const MessageForm = ({message, setMessage, sendMessage}) => {
    return (
        <div>
            <form className='message-form'>
                <input type="text"
                    placeholder='Type message here .....'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />

                <button type="submit" onClick ={(e) => sendMessage(e)}>Enter</button>
                
            </form>
            
        </div>
    )
}

export default MessageForm
