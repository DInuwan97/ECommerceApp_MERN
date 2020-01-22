import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';

 import './css/Advanced-NavBar---Multi-dropdown.css';
 import './css/styles.css';
 import './css/Navigation-Clean.css';

export class NavBar extends Component {

  logOut(e){
    e.preventDefault()
    localStorage.removeItem('usertoken');
    this.props.history.push('/')
  }


    render() {

      const loginRegLink = (

        <ul className="navbar-nav ml-auto">
          
              <li className="nav-item active">
                  <Link to="/login" className="nav-link">
                      Login
                  </Link>
              </li>

              <li className="nav-item">
                  <Link to="/register" className="nav-link">
                      Sign up
                  </Link>
              </li>

              <li className="nav-item active"><a className="nav-link" href="#"><i className="icon-bubble"></i> Need help?</a></li>

        </ul>

      );

      const userLink = (
       
        <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown position-relative">
            <a className="nav-link dropdown-toggle" href="#" id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i> Hello User <i className="icon-arrow-down ml-1 font-12"></i>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><i class="fas fa-id-card"></i> My Profile</a></li>
              <li><a className="dropdown-item" href="#"><i class="fas fa-cogs"></i> Settings</a></li>
              <li>
                <a className="dropdown-item" href="" onClick={this.logOut.bind(this)}>
                  <i class="fas fa-sign-out-alt"></i> 
                  Logout
                </a>
              </li>
        
 
            </ul>
        </li>

        <li className="nav-item active"><a className="nav-link" href="#"><i className="icon-bubble"></i> Need help?</a></li>

        </ul>
      )


        return (
            <div className="header2 bg-success-gradiant">
            <div className="">
        
              <nav className="navbar navbar-expand-lg h2-nav">

                <Link to="/" className="nav-link">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/logos/white-logo.png" alt="wrapkit" />
                </Link>
                
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header2" aria-controls="header2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-menu"></span>
                </button>

                <div className="collapse navbar-collapse hover-dropdown" id="header2">
                  <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item dropdown position-relative">
                      <a className="nav-link dropdown-toggle" href="#" id="h2-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Product <i className="icon-arrow-down ml-1 font-12"></i>
                                  </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li className="divider" role="separator"></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                        <li className="divider" role="separator"></li>
                        <li><a className="dropdown-item" href="#">One more separated link</a></li>
                        <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" data-toggle="dropdown" href="#">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" href="#" data-toggle="dropdown">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                              <ul className="nav navbar-nav dropdown-menu">
                                <li className="dropdown-submenu position-relative"> <a className="dropdown-toggle dropdown-item" href="#" data-toggle="dropdown">Dropdown <i className="icon-arrow-right float-right mt-1"></i></a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <li className="divider" role="separator"></li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    <li className="divider" role="separator"></li>
                                    <li><a className="dropdown-item" href="#">One more separated link</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                  </ul>


                  {localStorage.usertoken ? userLink: loginRegLink}

                </div>
              </nav>
            
            </div>
          </div>
        )
    }
}

export default withRouter(NavBar);
