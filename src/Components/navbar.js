import React from 'react';
import SubNav from './subnav'

const Navbar = () => {
    return (
        <div>
          <nav className="hidden-xs navbar navbar-default navbar-custom">
            <div className="container">
              <div className="navbar-header">
                  <a href="/">
                    <img src={require('./../Images/RSlogo.png')}
                    id="radhasoami-logo"
                    className="img-responsive logo-img img-rounded"
                    alt="Radha Soami logo" />
                  </a>
              </div>
              <div className="navbar-header navbar-right">
                  <a href="/">
                    <img src={require('./../Images/allRel.jpeg')}
                    id="all-religion-logo" 
                    className="img-responsive logo-img img-rounded"
                    alt="All Religion logo" />
                  </a>
              </div>
            </div>
          </nav>
          <SubNav />
        </div>
    );
}
export default Navbar;
