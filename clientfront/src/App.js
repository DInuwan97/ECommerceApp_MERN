import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/NavigationBarComponent/NavBar';
import Register from './components/RegisterComponent/Register';
import Footer from './components/FooterComponents/Footer';
import Login from './components/LoginComponent/Login';
import HomeCards from './components/HomeCardComponents/HomeCards';
import ImageCarousel from './components/HomeImageCarousel/ImageCarousel'
import FeaturesBlue from './components/FeaturesBlueComponent/FeaturesBlue';
import Profile from './components/UserProfile/Profile';

import PaymentForm from './components/PaymentFormComponent/PaymentForm';


export class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
      
          <Route exact path="/" component={ImageCarousel}/>
          <Route exact path="/" component={HomeCards}/>
          <Route exact path="/" component={FeaturesBlue}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/profile" component={Profile}/>
          
        
        
        <Footer/>

         
      </div>
    </Router>
    );
  }
}

export default App;
