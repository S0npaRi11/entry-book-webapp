import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()


        if(!email && !password){
            alert(' Invalid Request ')
            return
        }

        // here goes the function which will be used to log in

        // for now, just console.log the email and password
        console.log('email : ', email)
        console.log('password : ', password)

        setEmail('')
        setPassword('')
    }

    return (
        <div className="signin-form-wrapper">
            <form onSubmit={ onSubmit } className='form-signin pt-3 pb-3'>
                <h1 className="page-title mb-3 font-weight-normal"> Sign In </h1>
                {/* <InputFields type={'email'}  label={'email'}/> */}
                <div>
                    <label htmlFor='email'> Email </label>
                    <input type='email' id='email' required autoFocus className="form-control" placeholder='Enter Email' value={ email } onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <br />
                <div>
                    <label htmlFor='password'> Password </label>
                    <input type='password' id='password' required autoFocus className="form-control" placeholder='enter password'  value={ password } onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <input type="submit" className='btn btn-primary btn-block' value='Log In' />
            </form>
        </div>
    )
}

export default Login
