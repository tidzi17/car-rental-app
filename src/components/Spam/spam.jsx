import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './styles.css'

const Spam = () => {
  const [couterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
    <div className='spam-container'>
      <div className='spam-container-content'>
        <div>
      <h2>
        {couterOn && <CountUp start={0} end={200} duration={2} delay={0}/>}
        +
      </h2>
      <p>Luxurious Sports Vehicles</p>
      </div>
      <div>
      <h2>
        {couterOn && <CountUp start={0} end={2000} duration={2} delay={0}/>}
        +
      </h2>
      <p>Satisfied Customers</p>
      </div>
      <div>
        <h2>24/7</h2>
        <p>Customers Service</p>
      </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default Spam;


