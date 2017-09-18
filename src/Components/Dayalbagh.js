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
                        <h1 style={{'marginTop':'30px'}}>RadhaSoami Dayalbagh</h1>
                        <hr className="star-primary"></hr>
                        <img style={{'margin':'auto'}} src={require('../Images/dayalbagh/Radha_Soami_Canada_TajMahal.jpg')} className="img-responsive" alt="Radha Soami Dayalbagh" />
                    </div>
                </div>

                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-12">
                      <p><b>Dayalbagh</b> means 'Garden' (bagh) of 'Mercy' (daya), inferring "<b>Garden of the Merciful</b>", is a locality in metropolitan Agra in western Uttar Pradesh, India.</p>
                      <p><b>Radhasoami</b> Faith are similar to those of the Religion of Saints or Sant Mat, as taught by Guru Nanak, Kabir Sahab and Saints like Jagjivan Sahab, Paltu Sahab, Tulsi Sahab of Hathras and the Sufi Saints.</p>
                      <p>The tenets of the Faith are based on a living belief in:</p>
                      <p>
                        <ul>
                          <li>the existence of God,</li>
                          <li>Oneness of the essence of God and the spirit entity in human being, and</li>
                          <li>Continuity of life after death.</li>
                        </ul>
                      </p>
                      <p>Dayalbagh is the headquarters of the RadhaSoami faith, where the 8th revered leader (Sant Satguru) lives and presides over the satsang (holy service).</p>
                      <p><q><b><u>Seva</u></b> i.e. selfless service is given highest importance in Radhasoami Faith.</q></p>
                      <p>More  information: <a href="https://en.wikipedia.org/wiki/Dayalbagh" rel="noopener noreferrer" target="_blank">Dayalbagh (Agra)</a><br/>
                      Official Website: <a href="http://www.dayalbagh.org.in" rel="noopener noreferrer" target="_blank"> Dayalbagh</a>
                     </p>
                      </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 style={{'marginTop':'30px'}}>RadhaSoami Dayalbagh Satsang Locations</h3>
                        <hr className="star-primary"></hr>
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-md-8">
                        <u><h3>Cambridge</h3></u>
                        <p>Opening soon in November</p>
                        <p>96 Queen St E.<br/>
                        Cambridge, Ontario N3C 2B1<br/>
                        Canada</p>
                    </div>
                </div>
              <div style={{'margin':'75px 0px'}}>
                <h3>Humble Request:</h3>
                <p>If you would like to invite new people to your local Satsang ghar or centers, please share the full address and the phone number <span className="glyphicon glyphicon-phone-alt"></span> at <a href="mailto:dayalbagh@radhasoami.ca">dayalbagh@radhasoami.ca</a> so that we can publish it here and more sangat can join and benefit from Radha Soami Satsang.</p>
                <p>Be the part of this noble Seva. Help to spread the word and connect with the fellow Radha Soami sangat.</p>
                <div className="row text-center" style={{'margin':'50px 10px 10px 10px'}}>
                      <div className="fb-page visible-xs"
                        data-href="https://www.facebook.com/DayalbaghCanada"
                        data-tabs="timeline,messages"
                        data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/DayalbaghCanada" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/DayalbaghCanada">Radha Soami Dayalbagh, Canada</a>
                        </blockquote>
                      </div>
                      <div className="fb-like hidden-xs"
                        data-href="https://facebook.com/dayalbaghcanada"
                        data-layout="button_count" data-action="like" data-size="large"
                        data-show-faces="false" data-share="true">
                      </div>
                </div>
              </div>
            </div>
        </section>
        <Footer />
        </div>
    );
}
export default Dayalbagh;
