import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import {login} from './../UserFunctions';

import './css/Login-Form-Clean-1.css';
import './css/Login-Form-Clean.css';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
    }
    onChange(e){
      this.setState({[e.target.name] : e.target.value})
  }
  
    onSubmit(e){
        e.preventDefault()
  
        const user={
            email:this.state.email,
            password:this.state.password
        }
  
        login(user)
        .then(res =>{
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }
  

  render() {
    return (
    <div className="login-clean">
        <form noValidate onSubmit={this.onSubmit}>
            <h2 className="sr-only">Login Form</h2>

            <div className="illustration">
                <i className="icon ion-ios-navigate"></i>
            </div>

            <div className="form-group">
                <input 
                    className="form-control" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.onChange} />
            </div>

            <div className="form-group">
                <input 
                    className="form-control" 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}/>
            </div>

            <div className="form-group">
                <input 
                    type="submit" 
                    className="btn btn-primary btn-block" 
                    value="LOGIN"/>
            </div>

            <center>
                <Link to="/register" className="nav-link">
                    Sign Up
                </Link>
            </center>
         

            <a className="forgot" href="#">Forgot your email or password?</a>

        </form>
    </div>
    );
  }
}

export default Login;
