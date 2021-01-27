import { useState } from 'react'
import MessagesList from './partials/_MessagesList'
import SendMessageForm from './partials/_SendMessageForm'
import Header from './partials/_Header'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Messages = () => {

    const [messageFormToggle, setMessageFormToggle] = useState(false);

    return (
        <>
            <Header />
            <Container>
                <MessagesList />
                <Button varient='primary' onClick={ () => setMessageFormToggle(!messageFormToggle) }> Send Message </Button>

                { messageFormToggle && <SendMessageForm /> }
            </Container>
        </>
    )
}

export default Messages








