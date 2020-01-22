import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {register} from '../UserFunctions';

import './css/styles.css';
import './css/Elegant-Registration-Form.css';
import './css/registerImage.css'

//import Login from './components/LoginComponent/Login';

export class Register extends Component {

  constructor(){
    super();
    this.state = {
        full_name: '',
        email: '',
        password: '',
        userType:'',
        mobile:''
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
        full_name:this.state.full_name,
        email:this.state.email,
        password:this.state.password,
        mobile:this.state.mobile,
        userType:this.state.userType
    }

    register(user)
    .then(res =>{
        if(res){
            this.props.history.push(`/login`)
        }
    })
}


  render() {
    return (
        <body>
        <div className="banner6 py-5">
        <div className="row">
          <div className="container">
            <div className="col-lg-6 align-justify-center pr-4 pl-0 contact-form">
              <div className="">
                <h2 className="mb-3 font-weight-light">Get Register For Free</h2>
                <h6 className="subtitle font-weight-normal">Lorem ipsum dolor sit amet, adipiscing.</h6>

                <form noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">

                        <input 
                         className="form-control" 
                         type="text" 
                         placeholder="Full Name" 
                         value={this.state.full_name}
                         onChange={this.onChange}/>

                      </div>
                    </div>


                    <div className="col-lg-6">

                        <div className="form-group">

                         <input 
                          className="form-control" 
                          type="text" 
                          placeholder="Mobile" 
                          value={this.state.mobile}
                          onChange={this.onChange}/>
                        </div>

                    </div>

                    <div className="col-lg-6">

                      
                        <div className="form-group">

                         <input 
                          className="form-control" 
                          type="email" 
                          placeholder="Email Address"
                          value={this.state.email}
                          onChange={this.onChange} />
                        </div>

                    </div>



                    <div className="col-lg-12">
                      <div className="form-group">
                          <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.onChange}>
                              <option value={this.state.userType}>Select User Type...</option>
                              <option value="Seller">Seller</option>
                              <option value="Customer">Customer</option>
                          </select>
                      </div>
                    </div>






                    <div className="col-lg-6">

                      <div className="form-group">
                        <input 
                         className="form-control" 
                         type="password"
                         placeholder="Password"
                         value={this.state.password}
                         onChange={this.onChange} />
                      </div>

                    </div>

                    <div className="col-lg-6">

                      <div className="form-group">
                        <input className="form-control" type="password" placeholder="Confirm Password" />
                      </div>
                      
                    </div>


                    <div className="col-lg-12">
                      <input type="submit" value="Sign Up" className="btn btn-md btn-block btn-danger-gradiant text-white border-0"/>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-lg-12 text-center mt-4">
                    <h6 className="font-weight-normal">Signup with Social Accounts</h6>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <a href="#" className="btn btn-block bg-facebook text-white mt-3">Facebook</a>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <a href="#" className="btn btn-block bg-twitter text-white mt-3">Twitter</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center mt-4">
                    Already have an account? 
                    <Link to="/login" className="nav-link">
                            Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right-image pl-3">
          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form/3.jpg" />
          </div>
        </div>
      </div>
      </body>
    );
  }
}

export default Register;
