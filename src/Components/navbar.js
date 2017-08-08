import React from 'react';
import SubNav  from './subnav';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <nav className="hidden-xs navbar navbar-default navbar-custom subNav">
              <div className="container navAlign">
                  <div className="navbar-header col-lg-2 text-center">
                      <a href="/">
                      <img src={require('./../Images/RSlogo.png')} className="img-responsive logo-img img-rounded" alt="Radha Soami logo" />
                      </a>
                  </div>

                  <div className="col-lg-8 text-center">
                    <ul className="nav navbar-nav">
                        <li >
                            <Link to='/'>Home</Link>
                        </li>
                        <li >
                            <Link to='/beas'>Beas</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to='/ruhani'>Delhi</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to='/dayalbagh'>Dayalbagh</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                  </div>

                  <div className="navbar-header navbar-right">
                      <a href="/">
                      <img src={require('./../Images/allRel.jpeg')} className="img-responsive logo-img img-rounded" alt="All Religion logo" />                        </a>
                  </div>
              </div>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    name: "ADD GLAMOUR"
}

export default Navbar;
