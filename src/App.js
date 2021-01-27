// import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import BookDashboard from "./components/BookDashboard";
import Profile from "./components/Profile";
import Messages from "./components/Messages";

// testing

import './App.css';

function App() {

  return (
    <>

    <Router>
      <Switch>
       
        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/user'>
          <UserDashboard />
        </Route>

        <Route path='/book'>
          <BookDashboard />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/messages'>
          <Messages />
        </Route>

        <Route strict exact path='/'>
          <Login /> 
        </Route>

      </Switch>
    </Router>
    
    </>
  );
}

export default App;
