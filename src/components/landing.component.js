import React, { Component } from 'react'
import Navbar from './Navbar.component'

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Form.module.css';
import {Container, Row, Col} from 'react-bootstrap'
import './main.css'
export class landing extends Component {

    render() {
        
        return (
                <div className={classes.full}>
                <Navbar/>
                <div className={classes.formouter}>
                    <Container fluid>
                    <Row>
                        <Col xs={6}><img className={classes.hospital} src="https://image.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg" alt="Hospital Vector"/></Col>
                        <Col><p className={classes.heading} style={{marginLeft: '100px'}}><span style={{color: '#fc0356', fontSize: '28px'}}>Welcome to the Advanced Mailing Service</span><br></br><br></br>Now you dont have to worry about sending important mails on the destined date and time.<br></br><br></br>With MailME you can easily schedule your <span style={{color: '#fc0356', textDecoration: 'underline'}}>RECURRING, WEEKLY, MONTHLY, YEARLY</span> mails and send them on designated time <br></br><br></br><br></br></p></Col>
                  
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default landing
