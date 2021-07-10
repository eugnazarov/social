import React from 'react';
import './message-list.css'
import Message from "../message/message";


const MessageList = ({messages}) => {
    return (
        <div className="messages-container">
            <ul className="messages-list">
                {messages.map(
                    msg => <li><Message msg={msg}/></li>
                )}
            </ul>

        </div>
    );
};

export default MessageList;