import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import DisplayMessage from '../displayTwo/DisplayMessage';

const DisplayMessages = ({messages, name}) => (
  <ScrollToBottom>
    {messages.map((message, index) =><div key={index}><DisplayMessage message ={message} name={name}/></div>)}
   </ScrollToBottom>
)
   
 


export default DisplayMessages;
