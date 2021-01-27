import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Header from './partials/_Header'
import AddBook from './partials/_AddBook'
import BooksList from './partials/_BooksList';

const Dashboard = () => {

    const [formToggle, setFormToggle] = useState(false)
  

    return (
        <>
        <Header />
        <Container>
           <h1 className="page-title font-weight-normal mb-3"> Books </h1>
           <Button className="btn btn-primary" onClick = { () => setFormToggle(!formToggle) }>
               Add new Book
           </Button>

           { formToggle && <AddBook /> } 

        

           <BooksList />
        </Container>
        </>
    )
}

export default Dashboard
