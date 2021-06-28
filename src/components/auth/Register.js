import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import classes from '../Form.module.css'
import '../main.css'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/landing");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className={classes.full}>
       <nav class="navbar navbar-expand-lg navbar-custom">
                 <NavLink to="/" exact className="navbar-brand">MailME</NavLink>
                </nav>
            <div className="container" style={{marginTop: '20px'}}>
            <div className={classes.formouter} style={{marginTop: '150px'}}>
              <br></br>
              <br></br>
             <h1 className={classes.formh1}>Register</h1>
              <p className="grey-text text-darken-1" style={{fontSize: '25px'}}>
                Already have an account? <NavLink to="/login" style={{color: '#fc0356'}}>Log in</NavLink>
              </p>
           
            <form noValidate onSubmit={this.onSubmit}>
              
              <label htmlFor="firstname" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.firstname}
                 error={errors.firstname}
                 id="firstname"
                 type="text"
                 placeholder="Firstname"
                 className={classnames(classes.forminput, {
                   invalid: errors.firstname || errors.firstnamenotfound
                 })}
               />
               <span className={classes.formspan}>Firstname</span>
             </label>
             <label htmlFor="lastname" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.lastname}
                 error={errors.lastname}
                 id="lastname"
                 type="text"
                 placeholder="Lastname"
                 className={classnames(classes.forminput, {
                   invalid: errors.lastname || errors.lastnamenotfound
                 })}
               />
               <span className={classes.formspan}>Lastname</span>
             </label>
             <label htmlFor="username" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.username}
                 error={errors.username}
                 id="username"
                 type="text"
                 placeholder="username"
                 className={classnames(classes.forminput, {
                   invalid: errors.username || errors.usernamenotfound
                 })}
               />
               <span className={classes.formspan}>username</span>
             </label>
             <label htmlFor="email" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.email}
                 error={errors.email}
                 id="email"
                 type="email"
                 placeholder="email"
                 className={classnames(classes.forminput, {
                   invalid: errors.email || errors.emailnotfound
                 })}
               />
               <span className={classes.formspan}>email</span>
             </label>
             <label htmlFor="password" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.password}
                 error={errors.password}
                 id="password"
                 type="password"
                 placeholder="password"
                 className={classnames(classes.forminput, {
                   invalid: errors.password || errors.passwordnotfound
                 })}
               />
               <span className={classes.formspan}>password</span>
             </label>
             <label htmlFor="Confirm Password" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.password2}
                 error={errors.password2}
                 id="password2"
                 type="password"
                 placeholder="Confirm Password"
                 className={classnames(classes.forminput, {
                   invalid: errors.password || errors.passwordnotfound
                 })}
               />
               <span className={classes.formspan}>Confirm Password</span>
             </label>
             <br></br>
              
                        <button type="submit" className={classes.formsubmit}>Sign Up</button>
                    
            <br></br><br></br><br></br><br></br>
            </form>
          </div>
        </div>
        </div>
      //   </div>
      //   </div>
      // </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
