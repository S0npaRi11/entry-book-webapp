import { useState } from 'react'
import Header from './partials/_Header'
import Container from 'react-bootstrap/Container'
import EntryList from './partials/_EntryList'
import AddEntry from './partials/_AddEntry'

const BookDashboard = () => {

    const [toggleForm, setToggleForm] = useState(false)

    return (
        <>
            <Header />
            <Container>
                <h1 className='page-title font-weight-normal pb-3'> Book Heading </h1>

                <h3 className='page-title font-weight-normal pb-3'> Entries </h3>

                <button className='btn btn-primary' onClick={ () => setToggleForm(!toggleForm) }>
                    Add New Entry
                </button>

                { toggleForm && <AddEntry /> }

                <EntryList />


            </Container>

        </>
    )
}

export default BookDashboard
