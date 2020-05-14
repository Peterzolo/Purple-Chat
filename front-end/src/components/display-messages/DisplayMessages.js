import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import DisplayMessage from './displayMessage/DisplayMessage';

import './DisplayMessages.css';

const DisplayMessages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><DisplayMessage message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default DisplayMessages;  