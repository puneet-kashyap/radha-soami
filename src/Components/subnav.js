import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div>
            <nav id="mainNav" className="subNav navbar navbar-default navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                id="menu-button" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-header visible-xs">
                        <a href="/">
                          <img src={require('./../Images/smallLogo.png')}
                          className="img-responsive logo-img img-rounded"
                          id="radhasoami-logo" alt="Radha Soami logo"
                          />
                        </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li >
                                <Link id="home-link" to='/'>Home</Link>
                            </li>
                            <li >
                                <Link id="beas-link" to='/Beas'>Beas</Link>
                            </li>
                            <li className="page-scroll">
                                <Link id="ruhani-link" to='/Ruhani'>Delhi</Link>
                            </li>
                            <li className="page-scroll">
                                <Link id="dayalbagh-link" to='/Dayalbagh'>Dayalbagh</Link>
                            </li>
                            <li className="page-scroll">
                                <Link id="contact-link" to='/Contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default SubNav;
