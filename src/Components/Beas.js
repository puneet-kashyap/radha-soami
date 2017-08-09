import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Beas = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
          <div className="row">
              <div className="col-lg-12 text-center" style={{'margin':'25px 0px'}}>
                  <h1>Radha Soami Beas</h1>
                  <hr className="star-primary"></hr>
                  <img style={{'margin':'auto'}} src={require('../Images/beas/Radha_Soami_Canada_header.jpg')} className="img-responsive hidden-xs" alt="Radha Soami Beas" />
              </div>
          </div>
          <div className="container">
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-12">
                      <p><b>Radha Soami Satsang Beas</b> (RSSB) is a philosophical organization based on the spiritual teachings of all religions and dedicated to a process of inner development under the guidance of a spiritual teacher.</p>
                      <p>It was established in India in 1891 and gradually began spreading to other countries like Canada. Today RSSB holds meetings in more than 90 countries worldwide. It is a non-profit organisation with no affiliation to any political or commercial organizations.</p>
                      <p>At the core of the RSSB philosophy is a belief that there is a spiritual purpose to human life – to experience the divinity of God who resides in all of us. It is through this experience that we will realize the truth of the concept that there is only one God and we are all expressions of his love.</p>
                      <p>Official website: <a href="http://www.rssb.org" rel="noopener noreferrer" target="_blank">Radha Soami Satsang Beas</a></p>
                      </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 style={{'marginTop':'30px'}}>Radha Soami Beas Satsang Locations</h3>
                        <hr className="star-primary"></hr>
                    </div>
                </div>

                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-md-4">
                        <h3>TORONTO</h3>
                        <p>Science of the Soul Study Centre </p>
                        <p>6566 Sixth Line<br/>
                        RR 1 Hornby, Ontario L0P 1E0<br/>
                        Canada</p>
                    </div>
                    <div className="col-md-4">
                        <h3>MONTREAL</h3>
                        <p>Garderie Minois Fripon<br/>
                        650 Rue Woodland<br/>
                        Verdun, Quebec H4H 1V8<br/>
                        Canada</p>
                    </div>
                    <div className="col-md-4">
                        <h3>BRAMPTON</h3>
                        <p>Central Peel Secondary School <br/>
                        Every Saturday at 06:00 PM<br/>
                        32 Kennedy Rd N,<br/>
                        Brampton,ON L6V 1X4<br/>
                        Canada</p>
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                  <div className="col-md-4">
                      <h3>MISSISSAUGA</h3>
                      <p>Weekly Satsang Centre by Public <br/>
                      Every Sunday from 10.00 AM to 11 AM<br/>
                      Morning Star Public School <br/>
                      3131 Morning Star Drive, Mississauga, ON L4T 1X3<br/>
                      Canada</p>
                  </div>
                  <div className="col-md-4">
                      <h3>KITCHENER</h3>
                      <p>Weekly Satsang Centre by Public <br/>
                      Every Sunday at 09:30 AM<br/>
                      Kitchener City Hall [Conestoga Room]<br/>
                      200 King St W, Kitchener, ON N2G 4G7<br/>
                      Canada</p>
                  </div>
                  <div className="col-md-4">
                      <h3>VANCOUVER</h3>
                      <p>Science of the Soul Study Centre <br/>
                      2932 – 176th Street<br/>
                      Surrey, British Columbia V3S 9V4<br/>
                      Canada</p>
                  </div>
                </div>

              <h3 style={{'marginTop':'50px'}}>Humble Request:</h3>
              <p>If you would like to invite new people to your local Satsang ghar or centers, please share the full address and the phone number at <a href="mailto:beas@radhasoami.ca">beas@radhasoami.ca</a> so that we can publish it here and more sangat can join and benefit from Radha Soami Satsang.</p>
              <p>Be the part of this noble Seva. Help to spread the word and connect with the fellow Radha Soami sangat.</p>
            </div>
        </section>
        <Footer />
        </div>
    );
}
export default Beas;
