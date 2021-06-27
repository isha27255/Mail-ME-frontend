import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class home extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                 <NavLink to="/" exact className="navbar-brand">MailME</NavLink>
                </nav>
                <div className="container">
                <h1>Landing page</h1>
                <NavLink to="/register"><button className="btn btn-lg btn-warning" style={{marginTop : '100px'}}>Sign Up</button></NavLink>
                <br></br>
                <br></br>
                <NavLink to="/login"><button className="btn btn-lg btn-warning">Login</button></NavLink>

                </div>
            </div>
        )
    }
}

export default home
