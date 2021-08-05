import React from 'react';
import './message.css'

const Message = ({msg}) => {
    return (
        <div  className={`message ${msg.author === "robot" ? "message--robot" : ""}`}>
            <h2 className="message__author">{msg.author}</h2>
            <p className="message__text">{msg.content}</p>
        </div>
    );
};

export default Message;
