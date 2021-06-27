import React, { Component } from 'react'
import Datepicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import Navbar from './Navbar.component';

export class create_mail extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeCc = this.onChangeCc.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeSchedule = this.onChangeSchedule.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeRecur = this.onChangeRecur.bind(this);
        this.onChangeWeeklyDay = this.onChangeWeeklyDay.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            to: "",
            cc: "",
            subject: "",
            schedule: "",
            date: "",
            time: "",
            recur: 0,
            weekly_day: 0,
            mail_body: "",
        }
    }

    onChangeTo(e) {
        this.setState({
            to: e.target.value
        });
    }

    onChangeCc(e) {
        this.setState({
            cc: e.target.value
        });
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }
    onChangeSchedule(e) {
        this.setState({
            schedule: e.target.value
        });
    }
    onChangeRecur(e) {
        this.setState({
           recur : e.target.value
        });
    }
    onChangeTime(e) {
        this.setState({
           time : e.target.value
        });
    }
    onChangeWeeklyDay(e) {
        this.setState({
           weekly_day : e.target.value
        });
    }
    onChangeBody(e) {
        this.setState({
          mail_body : e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const mail = {
            to:this.state.to,
            cc:this.state.cc,
            subject:this.state.subject,
            schedule:this.state.schedule,
            recur:this.state.recur,
            date:this.state.date,
            time:this.state.time,
            weekly_day:this.state.weekly_day,
            mail_body:this.state.mail_body
        }
        console.log(mail);
        
        axios
          .post(`http://localhost:4000/MAIL/${this.props.match.params.userid}/mail`,mail)
          .then(res => console.log(res.data))
          .catch(err => console.error(err));

          window.location = '/';
        // console.log(exc);
    }
    
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <br></br>
                <h1>Create New Mail</h1>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>to : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.to}
                        onChange={this.onChangeTo}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>cc : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.cc}
                        onChange={this.onChangeCc}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>subject : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.subject}
                        onChange={this.onChangeSubject}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>schedule : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.schedule}
                        onChange={this.onChangeSchedule}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>recur time : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.recur}
                        onChange={this.onChangeRecur}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Date : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.date}
                        onChange={this.onChangeDate}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Time : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.time}
                        onChange={this.onChangeTime}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Weekly Day : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.weekly_day}
                        onChange={this.onChangeWeeklyDay}></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Body : </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.mail_body}
                        onChange={this.onChangeBody}></input>
                    </div>
                    <br></br>
                    <br></br>
                    {/* <div className="form-group">
                        <label>Date : </label>
                       <Datepicker
                       selected={this.state.date}
                       onChange={this.onChangeDate}>
                       </Datepicker>
                    </div> */}
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-warning btn-lg"></input>
                    </div>
                </form>
                </div>
                 </div>
        )
    }
}

export default create_mail
