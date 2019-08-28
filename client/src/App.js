import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//compontents
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import SkillsSection from './components/skills/SkillsSection';
import PortfolioSection from './components/portfolioPieces/PortfolioSection';
import AboutSection from './components/aboutSection/AboutSection';
import ContactDetails from './components/contactDetails/ContactDetails';
import Footer from './components/layout/Footer';

// css
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div
          >
            <Navbar />
            <Route exact path="/" component={Landing} />
            <SkillsSection />
            <PortfolioSection />
            <AboutSection />
            <ContactDetails />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
