import { Container } from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <Container>
            <h1> Error : 404 </h1>
            <p> Requested page not found </p>
            <Link to='/user'> Go back </Link>
        </Container>
    )
}

export default Error404
