import { useState, useEffect } from 'react'
import MessagesList from './partials/_MessagesList'
import SendMessageForm from './partials/_SendMessageForm'
import Header from './partials/_Header'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import { readAllMessages,sendOneMessage, deleteOneMessage } from '../controllers/user'
import getCookie from '../controllers/additionals'

const Messages = () => {

    const [messageFormToggle, setMessageFormToggle] = useState(false);
    const [messages, setMessages] = useState(false);

    const token = getCookie('token')
    // const userID = getCookie('entry-app-user-id');
    const userName = getCookie('entry-app-user-name');

    useEffect(() => {
        const getMessages = async() => {
            const data = await readAllMessages(token)
            setMessages(data.result)
        }

        getMessages()
    },[token])

    // send message function
    const sendMessage = async(token, receiverID, formData) => {
        await sendOneMessage(token,receiverID,formData)
    }

    // delete message function
    const deleteMessages = async(token, messageID) => {
        await deleteOneMessage(token,messageID)
    }

    return (
        <>
            <Header  user = { userName }/>
            <Container>
            <h1> Messages </h1>

                <MessagesList messages = { messages } onDelete = { deleteMessages } token = { token }/>
                <Button varient='primary' onClick={ () => setMessageFormToggle(!messageFormToggle) }> Send Message </Button>

                { messageFormToggle && <SendMessageForm  onAdd = { sendMessage } token = { token }/> }
            </Container>
        </>
    )
}

export default Messages