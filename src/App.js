// import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import BookDashboard from "./components/BookDashboard";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Error404 from "./components/404";
import Error500 from "./components/500";

import { logIn } from './controllers/user'

import './App.css';

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [redirectTo500, setRedirectTo500] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    if(!email && !password){
      alert(' Invalid Request ')
      return
    }
  
    // here goes the function which will be used to log in
    const formData = {
      email: email,
      password: password
    }
  
    const data = await logIn(formData)

    if(data){
      document.cookie = `token=${data.result[0]};max-age=86400,domain=localhost:3000`
      document.cookie = `entry-app-user-id=${data.result[1]._id};max-age=86400,domain=localhost:3000`
      document.cookie = `entry-app-user-name=${data.result[1].firstName + ' '+data.result[1].lastName};max-age=86400,domain=localhost:3000`
      document.cookie = `entry-app-user-email=${data.result[1].email};max-age=86400,domain=localhost:3000`

      setRedirect(true)
    }else{
      setRedirectTo500(true)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <Router>
        <Route exact path='/' render = {(props) => (
          <>
          { redirectTo500 &&  <Redirect push to='/error500' component = {Error500}/>}
          {redirect ? <Redirect push to='/user' component = {UserDashboard}/> :
              <div className="signin-form-wrapper">
                <form onSubmit={ onSubmit } className='form-signin pt-3 pb-3'>
                  <h1 className="page-title mb-3 font-weight-normal"> Sign In </h1>
                  <div>
                    <label htmlFor='email'> Email </label>
                    <input type='email' id='email' required className="form-control" placeholder='Enter Email' value={ email } onChange={ (e) => setEmail(e.target.value) }/>
                  </div>
                  <br />
                  <div>
                    <label htmlFor='password'> Password </label>
                    <input type='password' id='password' required className="form-control" placeholder='enter password'  value={ password } onChange={ (e) => setPassword(e.target.value)}/>
                  </div>
                  <br />
                  <input type="submit" className='btn btn-primary btn-block' value='Log In' />
                  <br />
                  <p className='align-right'> Not registered? <Link to='/register'> Register here </Link> </p>
                </form>
              </div>
            }
          </>
        )}>
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>

        <Route exact path='/user'>
          <UserDashboard />
        </Route>

        <Route exact path='/book/:bookID'>
          <BookDashboard  />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>

        <Route exact path='/messages'>
          <Messages />
        </Route>

        <Route exact path='/404'>
          <Error404 />
        </Route>

        <Route exact path='/500'>
          <Error500 />
        </Route>
    </Router>
  );
}

export default App;
