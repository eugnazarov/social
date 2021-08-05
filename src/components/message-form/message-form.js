import React, { useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputButton from "../ui/InputButton/InputButton";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '65ch',
        },
    },
}));

const MessageForm = ({setMessageList}) => {
    const [messageData, setMessageData] = useState({
        content: "",
        author: "",

    });
    const classes = useStyles();
    const enableSend = !!messageData.content && !!messageData.author
    const sendButton = <InputButton text={"send"} disabled={!enableSend}/>
    const inputRef = useRef(null)

    const handleChange = (event) => {
        setMessageData({...messageData, [event.target.name]: event.target.value})
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        setMessageList(prevState => [...prevState, {...messageData, id: Math.random()*Date.now()}])
        setMessageData({content: "", author: ""})
        inputRef.current.focus()

    }


    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard"
                    placeholder="author"
                    autoFocus
                    name="author"
                    value={messageData.author}
                    onChange={handleChange}

                />
                <TextField
                    inputRef={inputRef}
                    id="standard"
                    placeholder="type your message"
                    autoFocus
                    name="content"
                    value={messageData.content}
                    onChange={handleChange}
                    InputProps={{endAdornment: sendButton}}
                />
            </div>
        </form>
    );
};
export default MessageForm
