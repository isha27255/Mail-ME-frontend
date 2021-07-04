import React, { Component } from 'react'
// import Datepicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import SunEditor from 'suneditor-react';
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import axios from "axios";
import Navbar from './Navbar.component';
import './main.css'
import classes from './Form.module.css'
import Grid from '@material-ui/core/Grid';
// import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

  
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
            schedule: 'recurring',
            date: new Date(),
            time: "",
            recur: 0,
            weekly_day: 0,
            mail_body: "",
            schedule_list: ['recurring','weekly','monthly','yearly','others']
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
          mail_body : e
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
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
          .post(`https://mail-me-backend.herokuapp.com/MAIL/${this.props.match.params.userid}/mail`,mail)
          .then(res => {
            console.log(res.data)
            // window.location = '/landing';
          } )
          .catch(err => alert(`error is ${err}`));
        // console.log(exc);
    }
    
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className={classes.loginboxis}>
                    <br></br>
                <h1 style={{textAlign: 'center'}}>Create New Mail</h1>
                <br></br>
                <form onSubmit={this.onSubmit} style={{marginLeft: '5%', marginRight: '5%'}}>
                    <div className="form-group">
                        <label className="s">to : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.to}
                        onChange={this.onChangeTo}></input>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">cc : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.cc}
                        onChange={this.onChangeCc}></input>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">subject : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.subject}
                        onChange={this.onChangeSubject}></input>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">schedule : </label>
                        <select 
                        required
                        className="form-control x"
                        value={this.state.schedule}
                        onChange={this.onChangeSchedule}>
                            {
                                this.state.schedule_list.map(function(schedule){
                                    return <option key={schedule} value={schedule}>{schedule}</option>;
                                })
                            }
                        </select>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">recur time : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.recur}
                        onChange={this.onChangeRecur}></input>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">Time : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.time}
                        onChange={this.onChangeTime}></input>
                    </div>
                    {/* <br></br> */}
                    <div className="form-group">
                        <label className="s">Weekly Day : </label>
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.weekly_day}
                        onChange={this.onChangeWeeklyDay}></input>
                    </div>
                    {/* <br></br> */}
                    {/* <div className="form-group">
                        <label className="s">Body : </label>
                        
                        <input 
                        type="text"
                        required
                        className="form-control str"
                        value={this.state.mail_body}
                        onChange={this.onChangeBody}></input>
                       
                    </div> */}
                   
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <Grid>
                    <br></br>
                     <label className="s">Date : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                     <KeyboardDatePicker
                         disableToolbar
                         variant="inline"
                         format="MM/dd/yyyy"
                         margin="normal"
                         id="date-picker-inline"
                         value={this.state.date}
                         onChange={this.onChangeDate}
                         KeyboardButtonProps={{
                           'aria-label': 'change date',
                         }}
                     />
                     <br></br>
                     {/* <label className="s">Time : &nbsp;&nbsp;&nbsp;</label>
                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        value={this.state.time}
                        onChange={this.onChangeTime}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                     /> */}
                       </Grid>
                    </MuiPickersUtilsProvider>
                  
                     <br></br><br></br>
                     <label className="s">Body : </label>
                 <SunEditor onInput={this.state.mail_body} onChange={this.onChangeBody}
                    setOptions={{
                        minHeight: "400px",
                        maxHeight: "400px",
                        maxWidth: "100%",
                        buttonList: [
                            // Default
                            ["undo", "redo"],
                            ["font", "fontSize", "formatBlock"],
                            ["paragraphStyle", "blockquote"],
                            [
                              "bold",
                              "underline",
                              "italic",
                              "strike",
                              "subscript",
                              "superscript",
                            ],
                            ["fontColor", "hiliteColor", "textStyle"],
                            ["removeFormat"],
                            ["outdent", "indent"],
                            ["align", "horizontalRule", "list", "lineHeight"],
                            ["table", "link", "image", "video", "audio"],
                            ["fullScreen", "showBlocks", "codeView"],
                            ["preview", "print"],
                            ["save"],
                            // (min-width:992px)
                            [
                              "%992",
                              [
                                ["undo", "redo"],
                                [
                                  ":p-More Paragraph-default.more_paragraph",
                                  "font",
                                  "fontSize",
                                  "formatBlock",
                                  "paragraphStyle",
                                  "blockquote",
                                ],
                                ["bold", "underline", "italic", "strike"],
                                [
                                  ":t-More Text-default.more_text",
                                  "subscript",
                                  "superscript",
                                  "fontColor",
                                  "hiliteColor",
                                  "textStyle",
                                ],
                                ["removeFormat"],
                                ["outdent", "indent"],
                                ["align", "horizontalRule", "list", "lineHeight"],
                                [
                                  "-right",
                                  ":i-More Misc-default.more_vertical",
                                  "fullScreen",
                                  "showBlocks",
                                  "codeView",
                                  "preview",
                                  "print",
                                  "save",
                                  "template",
                                ],
                                [
                                  "-right",
                                  ":r-More Rich-default.more_plus",
                                  "table",
                                  "link",
                                  "image",
                                  "video",
                                  "audio",
                                  "math",
                                  "imageGallery",
                                ],
                              ],
                            ],
                            // (min-width:768px)
                            [
                              "%768",
                              [
                                ["undo", "redo"],
                                [
                                  ":p-More Paragraph-default.more_paragraph",
                                  "font",
                                  "fontSize",
                                  "formatBlock",
                                  "paragraphStyle",
                                  "blockquote",
                                ],
                                [
                                  ":t-More Text-default.more_text",
                                  "bold",
                                  "underline",
                                  "italic",
                                  "strike",
                                  "subscript",
                                  "superscript",
                                  "fontColor",
                                  "hiliteColor",
                                  "textStyle",
                                  "removeFormat",
                                ],
                                [
                                  ":e-More Line-default.more_horizontal",
                                  "outdent",
                                  "indent",
                                  "align",
                                  "horizontalRule",
                                  "list",
                                  "lineHeight",
                                ],
                                [
                                  ":r-More Rich-default.more_plus",
                                  "table",
                                  "link",
                                  "image",
                                  "video",
                                  "audio",
                                  "math",
                                  "imageGallery",
                                ],
                                [
                                  "-right",
                                  ":i-More Misc-default.more_vertical",
                                  "fullScreen",
                                  "showBlocks",
                                  "codeView",
                                  "preview",
                                  "print",
                                  "save",
                                  "template",
                                ],
                              ],
                            ],
                          ]
                    }} ></SunEditor>
                
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Send" className={classes.formsubmits}></input>
                    </div>
                    <br></br>
                </form>
                <br></br><br></br><br></br><br></br>
                </div>
                <br></br><br></br>           <br></br><br></br>
                 </div>
        )
    }
}

export default create_mail
