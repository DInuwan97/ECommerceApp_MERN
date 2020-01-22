import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import { decode } from 'punycode';


class Profile extends Component {

   constructor(){
       super()
       this.state ={
            full_name: '',
            email: '',
            userType:'',
            mobile:''
       }
   }

   componentDidMount(){
       const token= localStorage.usertoken
       const decoded = jwt_decode(token)
       this.setState({
           full_name:decoded.full_name,
           email:decoded.email,
           userType:decoded.userType,
           mobile:decoded.mobile
       })
   }


  render() {

    return (
      <div className="container">
          <div className="jumborton mt-5">
              <div className="col-sm8 mx-auto">
                  <h1 className="text-center">Profile</h1>
              </div>

              <table className="table col-md6 mx-auto">
                  <h2>
                      <tbody>

                          <tr>
                              <td>Full Name</td>
                              <td>{this.state.full_name}</td>
                          </tr>

            
                          <tr>
                              <td>Email</td>
                              <td>{this.state.email}</td>
                          </tr>

                          <tr>
                              <td>Mobile</td>
                              <td>{this.state.mobile}</td>
                          </tr>

                          <tr>
                              <td>User Type</td>
                              <td>{this.state.userType}</td>
                          </tr>

                      </tbody>
                  </h2>
              </table>
          </div>
        
      </div>
    );
    
  }
}

export default Profile;
