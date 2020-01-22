import React, { Component } from 'react';

import './css/Features-Blue.css';

export class FeaturesBlue extends Component {
  render() {
    return (
      
    <div className="features-blue">
    <div className="container">
        <div className="intro">
            <h2 className="text-center">Features</h2>
            <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
        </div>
        <div className="row features">
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-map-marker icon"></i>
                <h3 className="name">Works everywhere</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-clock-o icon"></i>
                <h3 className="name">Always available</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-list-alt icon"></i>
                <h3 className="name">Customizable</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-leaf icon"></i>
                <h3 className="name">Organic</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-plane icon"></i>
                <h3 className="name">Fast</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-phone icon"></i>
                <h3 className="name">Mobile-first</h3>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
        </div>
    </div>
</div>
    );
  }
}

export default FeaturesBlue;
