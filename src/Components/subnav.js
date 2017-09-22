import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div>
            <nav id="mainNav" className="subNav navbar navbar-default navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <div className="navbar-header visible-xs">
                        <a href="/">
                          <img src={require('./../Images/smallLogo.png')} className="img-responsive logo-img img-rounded" alt="Radha Soami logo" />
                        </a>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li >
                                <Link to='/'>Home</Link>
                            </li>
                            <li >
                                <Link to='/Beas'>Beas</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/Ruhani'>Delhi</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/Dayalbagh'>Dayalbagh</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/Contact'>Contact Us</Link>
                            </li>
                            <li className="page-scroll">
                                <Link to='/SignIn'><span id='sign-in-status' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default SubNav;
