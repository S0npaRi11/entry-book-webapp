import Card from 'react-bootstrap/Card'

const Message = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className='message-text'>
                    Message Text
                </Card.Title>
                <Card.Subtitle className='message-sender'>
                    Message Sender / Author
                </Card.Subtitle>
                <Card.Link href='#'> Delete </Card.Link>
            </Card.Body>    
        </Card>
    )
}

export default Message
