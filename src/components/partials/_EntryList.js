import Row from 'react-bootstrap/Row'
import Entries from './_Entries'

const EntryList = () => {
    return (
        <Row className='entry-list'>
            <div className='col-sm-6'>
                <Entries />
            </div>
            <div className='col-sm-6'>
                <Entries />
            </div>
        </Row>
    )
}

export default EntryList
