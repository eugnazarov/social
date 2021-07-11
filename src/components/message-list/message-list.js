import React, {useEffect} from 'react';
import './message-list.css'
import Message from "../message/message";
import {useRef} from "react";


const MessageList = ({messages}) => {

    const messagesEnd = useRef()
    const scrollToBottom = () => {
        const div = messagesEnd.current
        div.scrollIntoView({behavior: "smooth"});
    }

    useEffect(()=>{
        scrollToBottom()
    }, [messages])

    return (
        <div className="messages-container">
            <ul className="messages-list">
                {messages.map(
                    msg => <li><Message msg={msg}/></li>
                )}
            </ul>
            <div style={{float: "left", clear: "both"}}
                 ref={messagesEnd}>
            </div>
        </div>
    );
};

export default MessageList;