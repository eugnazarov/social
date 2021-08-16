import React, {useEffect, useState} from 'react';
import MessageList from "../message-list/message-list";
import MessageForm from "../message-form/message-form";
import ChatList from "../ChatList/ChatList";
import './chat.scss'
import {Route, Switch, useRouteMatch, useParams, Redirect} from "react-router-dom";

const ChatBox = ({chats, setChats}) => {


    const {chatId} = useParams()


    useEffect(() => {
        setMessageList(chats[chatId].messages)
    }, [chatId])
    const [messageList, setMessageList] = useState(chats[chatId].messages)

    useEffect(() => {
        if (messageList.length > 0) {
            let defaultMessage = {
                author: "robot",
                content: "Welcome to our app!",
                id: Math.random() * Date.now()
            }
            if (messageList[messageList.length - 1].author !== "robot") {
                setTimeout(() => {
                    setMessageList(prevState => [...prevState, defaultMessage])
                }, 1500)

            }
        }

    }, [messageList])

    if (!chats[chatId]) {
        return <Redirect to="/nochat"/>;
    }

    return (
        <div className="chat">
            <ChatList chats={chats} chatId={chatId}/>
            <div className="chat-box">
                <MessageList messages={messageList}/>
                <MessageForm setMessageList={setMessageList}/>
            </div>


        </div>
    );
};

export default ChatBox;
