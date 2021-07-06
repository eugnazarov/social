import React from 'react';
import Message from "./components/message/message";

const App = () => {
    const text = "Hello!!!"
    return (
        <div>
            <Message text={text}/>
        </div>
    );
};

export default App;