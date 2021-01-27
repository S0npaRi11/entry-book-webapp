import { useState } from 'react';
 import Row  from 'react-bootstrap/Row';

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstName&& !lasttName && !mobileNumber && !email && !password){
            alert(' Please fill in the required fields. ')
            return
        }

        // here we will register the user

        // for now, console.log the information
        console.log('frist name : ', firstName)
        console.log('last name : ', lasttName)
        console.log('mobile number : ', mobileNumber)
        console.log('email : ', email)
        console.log('password : ', password)

        // set the fields to blank

        setFirstName('')
        setLastName('')
        setMobileNumber('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="register-form-wrapper">
            <form onSubmit={ onSubmit } className='form-register'>
                <h1 className="page-title mb-3 font-weight-normal"> Register </h1>
                <Row>
                    <div className="col-sm-6">
                        <br />
                        <label htmlFor='firstName'> First Name </label>
                        <input type='text' id='firstName' className='form-control' required autoFocus value={ firstName } onChange={ (e) => setFirstName(e.target.value) } placeholder='Enter your first Name'/>
                    </div>
                    <div className="col-sm-6">
                        <br />
                        <label htmlFor='lastName'> Last Name </label>
                        <input type='text' id='lasttName' className='form-control' required autoFocus value={ lasttName } onChange={ (e) => setLastName(e.target.value) } placeholder='Enter your last name'/>
                    </div>
                   
                    <div className="col-sm-12">
                        <br />
                        <label htmlFor='mobileNumber'> Mobile Number </label>
                        <input type='text' id='mobileNumber' className='form-control' required autoFocus value={ mobileNumber } onChange={ (e) => setMobileNumber(e.target.value) } placeholder='Enter your mobile number'/>
                    </div>
                  
                    <div className="col-sm-12">
                        <br />
                        <label htmlFor='email'> Email </label>
                        <input type='email' id='email' className='form-control' required autoFocus value={ email } onChange={ (e) => setEmail(e.target.value) }  placeholder='Enter your email address'/>
                    </div>
                  
                    <div className="col-sm-12">
                        < br />
                        <label htmlFor='password'> Password </label>
                        <input type='password' id='password' className='form-control' required autoFocus value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder='Enter your password'/>
                    </div>
                </Row>
                <br />

                <input type='submit' className='btn btn-primary btn-block' value='register' />
            </form>
        </div>
    )
}

export default Register
