import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Contact = (props) => {
    return (
    <div>
    <Navbar/>
    <section id="contact" className="success">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 style={{'marginTop':'30px'}}>Let's Chat</h1>
            <hr className="star-primary"></hr>
            <iframe width="100%" height="500" title="ChatBot"
                src="https://console.api.ai/api-client/demo/embedded/575e405c-207a-4ca7-a119-8d19e53aa359">
            </iframe>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
);
}


export default Contact;
