import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import jwt_decode from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import  './main.css'
export class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
      constructor(props) {
          super(props)
      
          this.state = {
               username: ""
          }
      }
      componentDidMount(){

        const token = localStorage.jwtToken;
        const decoded = jwt_decode(token);
        fetch(`https://mail-me-backend.herokuapp.com/USERS/${decoded.id}`)
        .then((response) => response.json())
        .then((data2) => { 
            this.setState({username: data2.username});
        });
    }
    render() {
        const { user } = this.props.auth;
       
        return (
            <nav class="navbar navbar-expand-lg navbar-custom">
                {/* <div class="container-fluid"> */}
                    <NavLink to="/landing" className="navbar-brand">MailMe</NavLink>
                    <button class="navbar-toggler custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <NavLink to={"/"+user.id+"/home"} className="nav-link">Home</NavLink>
                </li>
                <li class="nav-item">
                        <NavLink to={"/"+user.id+"/history"} className="nav-link">History</NavLink>
                </li> 
                <li class="nav-item">
                        <NavLink to={"/createMail/"+user.id} className="nav-link">Create-Mail</NavLink>
                </li>
                </ul>
                <ul class="navbar-nav my-2 my-lg-0">
                <li class="nav-item">
                        <NavLink to="/landing" className="nav-link">{this.state.username}</NavLink>
                </li>
                <li class="nav-item">
                        {/* <NavLink to="http://localhost:3000" className="nav-link">Logout</NavLink> */}
                        <NavLink to="http://localhost:3000"><button onClick={this.onLogoutClick} exact className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{color: "white"}}>Logout</button></NavLink>

                </li>
                </ul>
                </div>
                {/* </div> */}
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);

// export default Navbar