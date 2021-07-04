import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import classes from '../Form.module.css'
import '../main.css'
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    
    const { errors } = this.state;

    return (
      <div className={classes.full}>
      <nav class="navbar navbar-expand-lg navbar-custom">
       <NavLink to="/" exact className="navbar-brand">MailME</NavLink>
      </nav>
      <div className={classes.loginboxs}>
     <div className={classes.formouter}>
     <div>
       <h1 className={classes.formh1} style={{textAlign: 'center'}}>Mailer Login</h1>
       <br></br><br></br>
       <div>
           <form onSubmit = {this.onSubmit} >
             <label htmlFor="email" className={classes.formlabel}>
               <input
                 onChange={this.onChange}
                 value={this.state.email}
                 error={errors.email}
                 id="email"
                 type="email"
                 placeholder="Email"
                 className={classnames(classes.forminput, {
                   invalid: errors.email || errors.emailnotfound
                 })}
               />
               <span className={classes.formspan}>Email</span>
             </label>
             <br></br>
             <label htmlFor="password" className={classes.formlabel}>
               <input
                   onChange={this.onChange}
                   value={this.state.password}
                   error={errors.password}
                   id="password"
                   type="password"
                   placeholder="Password"
                   className={classnames(classes.forminput, {
                     invalid: errors.password || errors.passwordincorrect
                   })}
                 />
                 <span className={classes.formspan}>Password</span>
             </label>
             <br></br>
             <span className="red-text">
               {errors.patientID}
               {errors.patientnotfound}
             </span>
             <span className="red-text">
               {errors.password}
               {errors.passwordincorrect}
             </span>
             <div>
               <button type="submit" className={classes.formsubmit}>Login</button>
             </div>
           </form>
       </div>
     </div>
   </div>
   </div>
   </div>
    );
  }
}

Login.propTypes = {
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
  { loginUser }
)(Login);
