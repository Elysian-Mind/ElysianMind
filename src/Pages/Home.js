import React, { useEffect } from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Sdgs from '../Components/Sdgs/Sdgs';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import { scroller } from 'react-scroll';

const Home = () => {

  useEffect(() => {
    scroller.scrollTo('target-element-id', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  return (
    <div className="home">
      <div id="target-element-id">
        <Hero />
        <About />
        <Sdgs />
        <HowItWorks />
      </div>

    </div>
      
  );
};

export default Home;
