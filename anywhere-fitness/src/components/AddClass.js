import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      className: "",
      classDescription: "",
      classCost: 0,
      classReqs: "",
      classAddress: "",
      classType: "Boxing",
      classSize: 0,
      classLength: 0,
      classLevel: "Intermediate"
    }
    this.classTypes = [
        { value: "Boxing", label: 'Boxing' },
        { value: "Yoga", label: 'Yoga' },
        { value: 'Gymnastics', label: 'Gymnastics' },
        { value: 'Biking', label: 'Biking' },
        { value: 'Swimming', label: 'Swimming' },
        { value: 'Crossfit', label: 'Crossfit' }
    ]
    this.classLevels = [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Intermediate', label: 'Intermediate' },
        { value: 'Advanced', label: 'Advanced' }
    ]
  }

  componentDidUpdate(){
      console.log(this.state);
  }

  textHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  typeSelect = e => {
      this.setState({
          ...this.state,
          classType: e.value
      })
  }

  levelSelect = e => {
    this.setState({
        ...this.state,
        classLevel: e.value
    })
}

  formSubmit = () => {
    if (this.state.className.length > 0){
        if (this.state.classDescription.length > 0){
            if (this.state.classReqs.length > 0){
                if (this.state.classAddress.length > 0){
                    const fd = new FormData();
                    fd.append("className", this.state.className);
                    fd.append("classDescription", this.state.classDescription);
                    fd.append("classCost", this.state.classCost);
                    fd.append("classReqs", this.state.classReqs);
                    fd.append("classAddress", this.state.classAddress);
                    fd.append("classType", this.state.classType);
                    fd.append("classSize", this.state.classSize);
                    fd.append("classLength", this.state.classLength);
                    fd.append("classLevel", this.state.classLevel);
                    this.setState({
                    ...this.state,
                    message: "Adding class...",
                    errorMessage: ""
                    });
                    axios.post('http://localhost:5000/lessons', fd)
                    .then(res => {
                        if (res.data.success){
                        this.setState({
                            ...this.state,
                            message: "Success! Redirecting..."
                        })
                        window.location.href = 'http://localhost:5000/dashboard';
                        } else if (res.data.fail){
                        this.setState({
                            ...this.state,
                            message: "",
                            errorMessage: res.data.fail
                        })
                        }
                    })
                    .catch(err => {
                        this.setState({
                        ...this.state,
                        errorMessage: "An error occurred. Please try again.",
                        message: ""
                        })
                    })
                } else {
                    this.setState({
                        ...this.state,
                        message: "",
                        errorMessage: "Please enter the class address"
                    })
                }
            } else {
                this.setState({
                    ...this.state,
                    message: "",
                    errorMessage: "Please enter the class requirements"
                })
            }
        } else {
            this.setState({
                ...this.state,
                message: "",
                errorMessage: "Please enter a class description"
            })
        }
    } else {
        this.setState({
            ...this.state,
            message: "",
            errorMessage: "Please enter a class name"
        })
    }
    
  }

  render(){
    return (
      <div id="addClass-form">
        <div id="addClass-top-banner">
            <Link to={{pathname: `/Home`}} className="addClass-nav-a" href="#">Home</Link>
            <Link to={{pathname: `/Register`}} className="addClass-nav-a" href="#">Register</Link>
            <Link to={{pathname: `/Login`}} className="addClass-nav-a" href="#">Login</Link>
        </div>
        <h1 id="addClass-h1">Create Class</h1>
        <div id="addClass-split">
        <div id="addClass-left"><div className="addClass-field" id="addClass-field-username"><label className="addClass-form-labels">Class Name </label> <input onChange={this.textHandler} name="className" type="text" className="addClass-form-inputs"/></div><br/>
        <div className="addClass-field"><label className="addClass-form-labels">Class Description </label> <textarea className="addClass-textareas" onChange={this.textHandler} name="classDescription" type="textbox" /></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Cost (USD) </label> <input onChange={this.textHandler} name="classCost" type="number" min="0" className="login-form-inputs"/></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Requirements </label> <textarea className="addClass-textareas" onChange={this.textHandler} name="classReqs" type="textbox" /></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Address </label> <input onChange={this.textHandler} name="classAddress" type="text" className="addClass-form-inputs"/></div></div>
        <div id="addClass-right">        
        <div className="addClass-field"><label className="addClass-form-labels">Class Type </label> <Select className="addClass-form-inputs" name="classType" onChange={this.typeSelect} options={this.classTypes}/></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Size </label> <input onChange={this.textHandler} name="classSize" type="number" min="1" className="login-form-inputs"/></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Length (minutes) </label> <input onChange={this.textHandler} name="classLength" type="number" min="1" className="login-form-inputs"/></div>
        <div className="addClass-field"><label className="addClass-form-labels">Class Level </label> <Select className="addClass-form-inputs" name="classLevel" onChange={this.levelSelect} options={this.classLevels}/></div>
          <button onClick={this.formSubmit} id="addClass-button">Submit</button> 
        {this.state.errorMessage === "" ? <p></p> : <p id="addClass-comment-error-message">{this.state.errorMessage}</p>}
        {this.state.message === "" ? <p></p> : <p id="addClass-comment-upload-message">{this.state.message}</p>}
        </div>
        </div>
      </div>
    )
  }
}

export default Login;
