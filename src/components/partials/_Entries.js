import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import UpdateEntry from './_UpdateEntry'

const Entries = () => {

    const [toggleForm, setToggleForm] = useState(false);

    const toggleUpdateEntryForm = (e) => {
        e.preventDefault()
        setToggleForm(!toggleForm)
    }

    return (
        <Card className='entry-card'>
            <Card.Body>
                <Card.Title className="entry-title">
                    Entry Title
                </Card.Title>
                <Card.Subtitle className="entry-creator"> Entry creator </Card.Subtitle>
                <Card.Text className="entry-info">
                    Some entry Info
                </Card.Text>
                <Card.Link href="#" className='btn btn-primary' onClick={ toggleUpdateEntryForm }> Update </Card.Link>{/* Make update entries visible only if entries are of type dept */}
                <Card.Link href="#"> Delete </Card.Link> 

                { toggleForm && <UpdateEntry /> }
            </Card.Body>        
        </Card>
    )
}

export default Entries
