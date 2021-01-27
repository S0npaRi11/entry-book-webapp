import Card from 'react-bootstrap/Card';

// This will render the book card

// This will take the book as the prop
const Books = () => {
    return (
        <Card className="book-card">
            <Card.Body>
                <Card.Title className="book-title">
                    Book Title
                </Card.Title>
                <Card.Subtitle className="book-creator"> Book.creator </Card.Subtitle>
                <Card.Text className="book-info">
                    Some Book Info
                </Card.Text>
                <Card.Link href="#"> Update </Card.Link>
                <Card.Link href="#"> Delete </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Books
