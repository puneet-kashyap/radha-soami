import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Dayalbagh = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 style={{'marginTop':'30px'}}>Radha Soami Dayalbagh</h1>
                        <hr className="star-primary"></hr>
                        <img style={{'margin':'auto'}} src={require('../Images/dayalbagh/Radha_Soami_Canada_TajMahal.jpg')} className="img-responsive" alt="Radha Soami Dayalbagh" />
                    </div>
                </div>

                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-12">
                      <p>Dayalbagh means 'Garden' (bagh) of 'Mercy' (daya), inferring "Garden of the Merciful", is a locality in metropolitan Agra in western Uttar Pradesh, India.</p>
                      <p>Dayalbagh is the headquarters of the RadhaSoami faith, where the 8th revered leader (Sant Satguru) lives and presides over the satsang (holy service).</p>
                      <p><q><b><u>Seva</u></b> i.e. selfless service is given highest importance in Radhasoami Faith.</q></p>
                      <p>More  information: <a href="https://en.wikipedia.org/wiki/Dayalbagh" rel="noopener noreferrer" target="_blank">Dayalbagh (Agra)</a><br/>
                      Official Website: <a href="http://www.dayalbagh.org.in" rel="noopener noreferrer" target="_blank"> Dayalbagh</a>
                     </p>
                      </div>
                </div>
              <div style={{'margin':'75px 0px'}}>
                <h3>Humble Request:</h3>
                <p>If you would like to invite new people to your local Satsang ghar or centers, please share the full address and the phone number <span className="glyphicon glyphicon-phone-alt"></span> at <a href="mailto:dayalbagh@radhasoami.ca">dayalbagh@radhasoami.ca</a> so that we can publish it here and more sangat can join and benefit from Radha Soami Satsang.</p>
                <p>Be the part of this noble Seva. Help to spread the word and connect with the fellow Radha Soami sangat.</p>
              </div>
            </div>
        </section>
        <Footer />
        </div>
    );
}
export default Dayalbagh;
