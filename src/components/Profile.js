import { useState } from 'react'
import Header from './partials/_Header'
import UpdateUser from './partials/_UpdateUser'
import MessagesList from './partials/_MessagesList'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Profile = () => {

    const [toggleForm, setToggleForm] = useState(false);
    const [messagesToggle, setMessagesToggle] = useState(false);
    const [messageFormToggle, setMessageFormToggle] = useState(false);

    return (
        <>
            <Header />
            <Container>
                <h1> User's Full Name </h1>
                <h3> User's email id </h3>
                <h3> User's Mobile Number </h3>

                <button varient='primary' onClick={ () => setMessagesToggle(!messagesToggle) }> View Messages </button>
                <button varient='primary' onClick={ () => setMessageFormToggle(!messageFormToggle) }> Send Message </button>

                { messagesToggle && <MessagesList /> }
                { messageFormToggle && <SendMessageForm /> }

                <Button varient='primary' onClick = { () => setToggleForm(!toggleForm) }>
                    Update Password
                </Button>

                { toggleForm && <UpdateUser /> }

            </Container>
        </>  
    )
}

export default Profile
