import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import { googles } from "../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'
import './main.css'


const googleFailure = (err) => {
    console.log("google sign in unsuccessful");
};

export class home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/landing");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/landing");
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }
    
      googleSuccess = (res) => {
        console.log(res);
        this.props.googles(res);
    }

    render() {
      const {REACT_APP_clientId} = process.env;
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom">
                 <NavLink to="/" exact className="navbar-brand">MailME</NavLink>
                </nav>
                {/* <div className="container">
                <h1>Landing page</h1>
                <br></br>
                <GoogleLogin
                clientId="742022743458-pl8tra1kv68ov7htk8v29ft4skl29smu.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button className="btn btn-lg btn-warning" onClick={renderProps.onClick}>Google sign in</button>
                )}
                onSuccess={this.googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                />
                <br></br>
                <NavLink to="/register"><button className="btn btn-lg btn-warning" style={{marginTop : '100px'}}>Sign Up</button></NavLink>
                <br></br>
                <br></br>
                <NavLink to="/login"><button className="btn btn-lg btn-warning">Login</button></NavLink>

                </div> */}
                   <div className={classes.formouter}>
                
                <Container fluid>
                        <Row>
                            <Col xs={8}><img src="https://image.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg" alt="Hospital Vector" className={classes.xyz} /></Col>
                            <Col>
                            <div style={{marginLeft: "15%"}}>
                            <h1 className={classes.heads} style={{fontSize: '25px'}}>&nbsp;&nbsp;&nbsp;&nbsp;"Welcome to MailME<br></br>presented to you by Flipr"</h1>
                           </div>
                            <br></br><br></br>
                            {/* <Button className={classes.formsubmit}>Sign Up</Button> <br/> */}
                           <div style={{marginLeft: "9%"}}>
                            <NavLink to="/register"> <Button className={classes.formsubmit}>Sign Up</Button></NavLink>
                            <br></br><br></br>
                            <NavLink to="/login"> <Button className={classes.formsubmit}>Login</Button></NavLink>
                           <br></br><br></br>
                           <GoogleLogin
                clientId={REACT_APP_clientId}
                render={(renderProps) => (
                    <Button className={classes.formsubmit} onClick={renderProps.onClick}>G Sign In</Button>
                )}
                onSuccess={this.googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
                />
                </div>
                <br></br><br></br>
                {/* </div> */}
                            </Col>
                        </Row>
                </Container>
                </div>
            </div>
        )
    }
}

home.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { googles }
  )(home);


