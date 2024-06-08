import React from 'react';
import Navbar from '../../Components/Navbar';
import Hero from '../../Components/Hero';
import FeaturesSection from '../../Components/FeaturesSection';
import AdvantagesSection from '../../Components/AdvantagesSection';
import FAQSection from '../../Components/FAQsection';
import AdSection from '../../Components/AdSection';
import Footer from '../../Components/Footer';
import "../../App.css"


const Home = () => {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <FeaturesSection />
    <AdvantagesSection />
    <FAQSection />
    <AdSection />
    <Footer />
    </div>
  );
};

export default Home;
