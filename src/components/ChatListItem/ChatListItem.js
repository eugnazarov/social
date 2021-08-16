import React from 'react';

import './chat-list-item.scss'

const ChatListItem = ({item, active}) => {
    const style = {
        opacity: active ? "1" : ".4"
    }
    return (
        <div style={style} className="chat-list-item">
            <p>{item.name}</p>
        </div>
    );
};

export default ChatListItem;
