import React from 'react';

import './App.css'
import Routes from "./components/routes";
import {Link} from "react-router-dom";

const App = () => {


    return (
        <div className="app">
            <header>
                <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </header>
            <Routes/>
        </div>
    );
};

export default App;
