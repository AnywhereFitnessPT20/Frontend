import React from 'react';
import axios from 'axios';

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "",
      password: "",
      message: "",
      errorMessage: ""
    }
  }

  textHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  formSubmit = () => {
    const fd = new FormData();
    fd.append("name", this.state.name);
    fd.append("password", this.state.password);
    this.setState({
      ...this.state,
      message: "logging in...",
      errorMessage: ""
    });
    axios.post('http://localhost:5000/login', fd)
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
  }

  render(){
    return (
      <div id="login-form">
        <div id="addClass-top-banner">
            <a className="addClass-nav-a" href="#">Home</a>
                <a className="addClass-nav-a" href="#">Register</a>
                <a className="addClass-nav-a" id="here" href="#">Login</a>
                <a className="addClass-nav-a" href="#">Help</a>
                <a className="addClass-nav-a" href="about.html">About</a></div>
        <div id="login-split">
        <div id="login-left"><img id="login-image" alt="Anywhere Fitness background image" src="background.jpg"/></div>
        <div id="login-right">
        <h1 id="login-h1">Log In</h1>
        <div className="login-field" id="login-field-username"><label className="login-form-labels">Username: </label> <input onChange={this.textHandler} name="name" type="text" className="login-form-inputs"/></div><br/>
        <div className="login-field"><label className="login-form-labels">Password: </label> <input onChange={this.textHandler} name="password" type="password" className="login-form-inputs"/></div>
          <button onClick={this.formSubmit} id="login-button">Log in</button> 
        {this.state.errorMessage === "" ? <p></p> : <p id="login-comment-error-message">{this.state.errorMessage}</p>}
        {this.state.message === "" ? <p></p> : <p id="login-comment-upload-message">{this.state.message}</p>}
        </div>
        </div>
      </div>
    )
  }
}

export default Login;
