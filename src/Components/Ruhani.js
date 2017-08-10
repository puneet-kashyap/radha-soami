import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Ruhani = () => {
    return (
        <div>
        <Navbar />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 style={{'marginTop':'30px'}}>Radha Soami Ruhani Mission</h1>
                        <hr className="star-primary"></hr>
                        <img style={{'margin':'auto'}} src={require('../Images/ruhani/Radha_Soami_Canada_Ruhani_Mission.jpg')} className="img-responsive" alt="Radha Soami Dayalbagh" />
                    </div>
                </div>

                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-lg-12">
                      <p>Deeper and richer inner lives. A stronger sense of meaning and purpose. A more loving and peaceful world. From its centers around the world. Sawan Kirpal Ruhani Mission/Science of Spirituality strives to help individuals and communities achieve these cherished goals.</p>
                      <p>A global non-profit spiritual organization, Sawan Kirpal Ruhani Mission/Science of Spirituality is made up of hundreds of thousands of individuals of all nationalities, races and faiths who are deeply committed to bettering themselves and the world through a spiritual way of living based on meditation and ethical values.</p>
                      <p>Ruhani Satsang, as the name implies, is a centre for imparting purely spiritual teachings and training to mankind, irrespective of class barriers such as caste, colour, creed, sex, age, education or avocation. As nature offers her bounties of light, water and air, etc., freely to one and all, so is spirituality offered freely to all who are anxious for Self-knowledge and God-knowledge.</p>
                      <p>Official website: <a href="http://www.sos.org/">Radha Soami Ruhani Mission</a></p>
                      </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 style={{'marginTop':'30px'}}>Radha Soami Ruhani Mission Satsang Locations</h3>
                        <hr className="star-primary"></hr>
                    </div>
                </div>

                <div className="row" style={{'margin':'20px 0px'}}>
                    <div className="col-md-4">
                        <h3>MISSISSAUGA</h3>
                        <p>Science of Spirituality</p>
                        <p>4141 Living Arts Dr,<br/>
                        Mississauga, Ontario,<br/>
                        Canada L5B 4B8</p>
                        <p>Ph: 647.430.3335<br/>
                        Email: elontario@sos.org</p>
                    </div>
                    <div className="col-md-4">
                        <h3>MARKHAM</h3>
                        <p>Science of Spirituality</p>
                        <p>26 Edgewood Cres,<br/>
                        Markham, Ontario,<br/>
                        Canada L6C 2K6<br/></p>
                        <p>Ph: 905.284.8040<br/>
                        Email: elontario@sos.org</p>
                    </div>
                    <div className="col-md-4">
                        <h3>WINNIPEG</h3>
                        <p>Science of Spirituality</p>
                        <p>Unity Church of Winnipeg<br/>
                        300 Arlingon St.,<br/>
                        Winnipeg, Manitoba, <br/>
                        Canada R3G 0P3<br/></p>
                        <p>Ph: 204.770.7955<br/>
                        Email: astephens@sos.org</p>
                    </div>
                </div>
                <div className="row" style={{'margin':'20px 0px'}}>
                  <div className="col-md-4">
                      <h3>CALGARY</h3>
                      <p>Science of Spirituality</p>
                      <p>3770 Westwinds Dr NE,<br/>
                      INCA Senior Citizens Society, Suite 215<br/>
                      Calgary, Alberta<br/>
                      Canada T3J 5H2<br/></p>
                      <p>Ph: 587.435.2924<br/>
                      Email: arrans@sos.org</p>
                  </div>
                  <div className="col-md-4">
                      <h3>EDMONTON</h3>
                      <p>Science of Spirituality</p>
                      <p>10433 83 Ave NW, Acacia Hall,<br/>
                      Edmonton, Alberta<br/>
                      Canada T6E 2C7<br/></p>
                      <p>Ph: 780.988.8011<br/>
                      Email: arrans@sos.org</p>
                  </div>
                  <div className="col-md-4">
                      <h3>VANCOUVER</h3>
                      <p>Science of Spirituality</p>
                      <p>1416 W 8th Ave #201,<br/>
                      Vancouver, British Columbia,<br/>
                      Canada V6H 1C9</p>
                      <p>Ph: 604-985-5840<br/>
                      Email: lindab@sos.org</p>
                  </div>
                </div>

              <h3 style={{'margin-top':'50px'}}>Humble Request:</h3>
              <p>If you would like to invite new people to your local Satsang ghar or centers, please share the full address and the phone number <span className="glyphicon glyphicon-phone-alt"></span> at <a href="mailto:ruhani@radhasoami.ca">ruhani@radhasoami.ca</a> so that we can publish it here and more sangat can join and benefit from Radha Soami Satsang.</p>
              <p>Be the part of this noble Seva. Help to spread the word and connect with the fellow Radha Soami sangat.</p>
            </div>
        </section>
        <Footer />
        </div>
    );
}
export default Ruhani;
