import React, { Component } from 'react';
import Navbar from './Components/navbar';
import Header from './Components/header'
import Footer from './Components/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
