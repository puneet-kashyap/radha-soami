import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                          <h3>Radha Soami</h3>
                          <p>
                            <Link to='/beas'>Beas</Link><br/>
                            <Link to='/dayalbagh'>Dayalbagh</Link><br/>
                            <Link to='/ruhani'>Ruhani Mission</Link><br/>
                          </p>
                        </div>
                        <div className="footer-col col-md-4 hidden-xs">
                            <h3>Around the Web</h3>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline"><span className="sr-only">Facebook</span><i className="fa fa-fw fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="https://goo.gl/photos/" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline"><span className="sr-only">Google Plus</span><i className="fa fa-fw fa-google-plus"></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline"><span className="sr-only">Twitter</span><i className="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Contact Us</h3>
                            <p>
                                <Link to='/contact'>Lets Chat</Link><br/>
                                <a href="/">RadhaSoami.ca</a><br/>
                                <a href={`mailto:info@radhasoami.ca?Subject=Radha%20Soami`}>info@radhasoami.ca</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Radha Soami Canada 2017
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
