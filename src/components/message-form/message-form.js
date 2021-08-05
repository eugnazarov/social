import React, {useState} from 'react';
import './message-form.css'

const MessageForm = ({setMessageList}) => {

    const [data, setData] = useState({
        author: "",
        message: ""
    })

    const handleChange = event => {
        const name = event.target.name
        setData({
            ...data,
            [name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        let message = {
            author: data.author,
            message: data.message
        }
        if(data.message.length && data.author.length){
            setMessageList(prevState => [...prevState, message])
            setData({author:"", message:""})
        }


    }

    return (
        <div className="message-container">
            <form  onSubmit={handleSubmit} className="message-form">
                <label htmlFor="author">Your name</label>
                <input value={data.author} onChange={handleChange} id="author" className="message-form__input"
                       type="text" name="author"/>
                <label htmlFor="message">Message</label>
                <input value={data.message} onChange={handleChange} id="message" className="message-form__input"
                       type="text" name="message"/>
                <button className="message-form__submit" type="submit" >Send</button>
            </form>
        </div>
    );
};

export default MessageForm;