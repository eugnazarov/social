import React, {useState} from 'react';
import MessageForm from "./components/message-form/message-form";
import MessageList from "./components/message-list/message-list";
import './App.css'

const App = () => {

    const [messageList, setMessageList] = useState([])


    return (
        <div className="app">
            <MessageList messages={messageList}/>
            <MessageForm setMessageList={setMessageList}/>
        </div>
    );
};

export default App;