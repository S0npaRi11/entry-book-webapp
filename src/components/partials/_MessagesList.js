import Row from 'react-bootstrap/Row'
import Message from './_Message'

const _MessagesList = () => {
    return (
        <Row>
            <div className='col-sm-6'>
                <Message />
            </div>
            <div className='col-sm-6'>
                <Message />
            </div>
        </Row>
    )
}

export default _MessagesList
