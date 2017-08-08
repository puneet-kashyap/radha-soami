import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Rashmi Kashyap</h3>
                        </div>
                        <div className="footer-col col-md-4">
                          <div className="hidden-xs">
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
                            <div className="fb-like" data-href="https://www.facebook.com/Add-Glamour-Home-Staging-662480170611616/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Name</h3>

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
