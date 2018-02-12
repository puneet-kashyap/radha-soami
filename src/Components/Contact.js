import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import ChatBot from '../Utils/ChatWidget/ChatBot'
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
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
);
}


export default Contact;
