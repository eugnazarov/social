import React, {useState} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ChatBox from "./ChatBox/ChatBox";
import ProfilePage from "./ProfilePage/ProfilePage";
import HomePage from "./HomePage/HomePage";
import ChatList from "./ChatList/ChatList";
import Profile from "./ProfilePage/profile";


const Routes = () => {

    const initialChats = {
        id1: {name: "chat1", messages: [{id: "1", author: "Alex", content: "hello"}]},
        id2: {name: "chat2", messages: [{id: "1", author: "Victor", content: "hello"}]},
        id3: {name: "chat3", messages: [{id: "1", author: "Jane", content: "hello"}]},
        id4: {name: "chat4", messages: [{id: "1", author: "Eugene", content: "hello"}]},
        id5: {name: "chat5", messages: [{id: "1", author: "Nick", content: "hello"}]},

    }

    const [chats, setChats] = useState(initialChats);


    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route
                    path="/chats/:chatId"
                >
                    <ChatBox chats={chats} setChats={setChats}/>
                </Route>

                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
                <Route path="/nochat">
                    <NoChat/>
                </Route>
            </Switch>
        </>
    );
};

export default Routes;

export const NoChat = () => (
    <>
        <ChatList/>
        <span>Please select a chat</span>
    </>
)
