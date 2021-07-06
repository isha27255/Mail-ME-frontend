import React, { Component } from 'react'
import Navbar from './Navbar.component'
import axios from "axios";
import classes from './Form.module.css'
import Table from 'react-bootstrap/Table'
import './main.css'
import jwt_decode from "jwt-decode";
 const Mails = props => (
        <tr>
            <td>{props.mail.to}</td>
            <td>{props.mail.cc}</td>
            <td>{props.mail.schedule}</td>
            <td>{props.mail.date.substring(0,10)}</td>
            <td>{props.mail.time}</td>
        </tr>
    );

export class past extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 mails: []
            }
        }
        
        componentDidMount() {
            const token = localStorage.jwtToken;
            const user = jwt_decode(token);
            axios
              .get(`https://mail-me-backend.herokuapp.com/MAIL/${user.id}/past-mails`)
              .then(res => {
                  console.log(res)
                this.setState({
                    mails : res.data
                })
              })
              .catch(err => console.error(err));
        }
    
        
        pastMailList(){
            return this.state.mails.map(exc=> {
                return <Mails mail={exc}/>;
            });
        }
    

    render() {
        return (
            <div className={classes.full}>
                <Navbar/>
                <div className="container">
                    <br></br>
                <h1 style={{marginTop: '30px', textAlign: 'center'}}>Past Schedules</h1>
                <br></br>
                <br></br>
                <Table responsive="md" striped hover>
                    <thead className="thead-light">
                        <tr>
                            <th>TO</th>
                            <th>CC</th>
                            <th>Schedule</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.pastMailList()}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default past
