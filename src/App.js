import React, {useState} from 'react';
import Message from "./components/message/message";
import MessageForm from "./components/message-form/message-form";

const App = () => {

    const [messageList, setMessageList] = useState([])


    return (
        <div>

            {messageList.map(msg => <Message msg={msg}/>)}
            <MessageForm setMessageList={setMessageList}/>
        </div>
    );
};

export default App;