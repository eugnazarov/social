import React from 'react';
import './message.css'

const Message = ({msg}) => {
    return (
        <div className="message">
            <h2 className="message__author">{msg.author}</h2>
            <p className="message__text">{msg.message}</p>
            <p>{msg.timestamp}</p>
        </div>
    );
};

export default Message;