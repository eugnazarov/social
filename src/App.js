import React, {useEffect, useState} from 'react';
import MessageForm from "./components/message-form/message-form";
import MessageList from "./components/message-list/message-list";
import './App.css'

const App = () => {

    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        if (messageList.length > 0) {
            let defaultMessage = {
                author: "robot",
                message: "Welcome to our app!"
            }
            if (messageList[messageList.length - 1].author !== "robot") {
                setTimeout(()=>{
                    setMessageList(prevState => [...prevState, defaultMessage])
                }, 1500)

            }
        }

    }, [messageList])

    return (
        <div className="app">
            <MessageList messages={messageList}/>
            <MessageForm setMessageList={setMessageList}/>
        </div>
    );
};

export default App;