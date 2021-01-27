import Row from 'react-bootstrap/Row'
import Books from './_Books';
// use .map method to render each book card.

// For now, we will hard code 3 cards to see if layout works properly or not
const BooksList = () => {
    return (
       <>
            <Row className="book-list">
                <div className="col-sm-4 book-wrapper">
                    <Books /> 
                </div>
                <div className="col-sm-4 book-wrapper">
                    <Books /> 
                </div>
                <div className="col-sm-4 book-wrapper">
                    <Books /> 
                </div>
            </Row>
       </>
    )
}

export default BooksList
