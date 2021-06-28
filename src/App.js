import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/js/dist/collapse'
// import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import create_mail from './components/create-mail.component'
import home from './components/home.component'
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import landing from './components/landing.component';
import PrivateRoute from './components/private-route/PrivateRoute';

import future from './components/future.component';
import past from './components/past.component';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
      
      {/* <Navbar/> */}
      
      <Route path="/" exact component={home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register}/>
      <PrivateRoute path="/createMail/:userid" component={create_mail} />
      <PrivateRoute path="/landing" component={landing}/>
      <PrivateRoute path="/:userid/home" component={future}/>
      <PrivateRoute path="/:userid/history" component={past}/>

     </Router>
      </Provider>
     
    )
  }
}



export default App;
