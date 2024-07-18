import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Therapists = () => {
  useEffect(() => {
    scroller.scrollTo('therapist-section', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, []);

  return (
    <div className="therapist">
      <h1>Our Therapists</h1>
      <div id="therapist-section">
        <p>here is the content</p>
      </div>
    </div>
  );
};

export default Therapists;