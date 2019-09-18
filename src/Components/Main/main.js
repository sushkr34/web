import React from 'react';
//import './App.css';
import Header from './Header';
import Banner from './Banner';
import Technologies from './Techonologies';
import OurTeam from './OurTeam';
import Footer from './Footer';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function main() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Technologies />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default main;
