import React from 'react';
import {List, ListItem} from "@material-ui/core";

import './ChatList.scss'
import ChatListItem from "../ChatListItem/ChatListItem";
import {Link, Redirect} from "react-router-dom";


const ChatList = ({chats, chatId}) => {

    return (
        <div className="left-menu">
            <List className="chat-list">
                {Object.keys(chats).map((id, i) => (
                    <Link to={`/chats/${id}`}>
                        <ListItem button component="a" key={id}>
                            <ChatListItem active={id===chatId} item={chats[id]}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
};

export default ChatList;
