import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Navbar from "../Navbar.component";
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
      <div className="container">
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                 <NavLink to="/" exact className="navbar-brand">MailME</NavLink>
                </nav>
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
             <h1>Register</h1>
              <p className="grey-text text-darken-1">
                Already have an account? <NavLink to="/login">Log in</NavLink>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
              <label>FirstName : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.firstname}
                  error={errors.firstname}
                  id="firstname"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.firstname
                  })}
                />
                <span className="red-text">{errors.firstname}</span>
              </div>
              <div className="form-group">
              <label>LastName : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.lastname}
                  error={errors.lastname}
                  id="lastname"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.lastname
                  })}
                />
                <span className="red-text">{errors.lastname}</span>
              </div>
              <div className="form-group">
              <label>Username : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.username
                  })}
                />
                <span className="red-text">{errors.username}</span>
              </div>
              <div className="form-group">
              <label>Email : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.email
                  })}
                />
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="form-group">
              <label>Password : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="form-group">
              <label>Confirm Password : </label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="text"
                  className={classnames("form-control", {
                    invalid: errors.password2
                  })}
                />
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-warning btn-lg"></input>
                    </div>
            
            </form>
          </div>
        </div>
      </div>
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
