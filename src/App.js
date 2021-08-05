import React, {useEffect, useState} from 'react';
import MessageForm from "./components/message-form/message-form";
import MessageList from "./components/message-list/message-list";
import './App.css'
import ChatList from "./components/ChatList/ChatList";

const App = () => {

    const [messageList, setMessageList] = useState([])

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

    return (
        <div className="app">
            <ChatList/>
            <div className="chat-box">
                <MessageList messages={messageList}/>
                <MessageForm setMessageList={setMessageList}/>
            </div>

        </div>
    );
};

export default App;
