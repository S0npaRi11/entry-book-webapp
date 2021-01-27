import { useState } from 'react'
import Row from 'react-bootstrap/Row'

const AddEntry = () => {

    const [entryTitle, setEntryTitle] = useState('');
    const [entryType, setEntryType] = useState('paid');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!entryTitle && !entryType && !recipient && amount === 0 ){
            alert('Fill all the necessary fields.')
            return
        }

        // if(entryType !== 'paid' || entryType !== 'received'|| entryType !== 'dept'){
        //     alert('Entry types can only be: PAID or RECEIVED or DEPT')
        //     return
        // }

        // This is where we add new entry

        //For now, console.log the data
        console.log('entryTitle',entryTitle)
        console.log('entryType',entryType)
        console.log('recipient',recipient)
        console.log('amount',amount)

        // reset the values
        setEntryTitle('');
        setEntryType('paid');
        setRecipient('');
        setAmount(0)
    }

    return (
        <form className='form-register' onSubmit={ onSubmit }>
            <Row>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='entryTitle' className='form-control' value={ entryTitle } onChange={ (e) => setEntryTitle(e.target.value) } placeholder='Enter Title' required/>
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='entryType' className='form-control' value={ entryType } onChange={ (e) => setEntryType(e.target.value) } placeholder='Enter type' required/>  
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='text' id='recipient' className='form-control' value={ recipient } onChange={ (e) => setRecipient(e.target.value) } placeholder='Enter Title' required/>
                </div>
                <div className='col-sm-6'>
                    <br />
                    <input type='number' id='amount' className='form-control' value={ amount } onChange={ (e) => setAmount(e.target.value) } placeholder='Enter Title' required/>
                </div>
            </Row>

            <br />
            <input type='submit' className='btn btn-primary btn-block' value='Add Entry' />
        </form>
    )
}

export default AddEntry
