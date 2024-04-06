import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Home.css';
import Vertical from './vertical.mp4';
import Horizontal from './horizontal.mp4';
import Client1 from './Client1.mp4'
import { Link } from 'react-router-dom';
import Header from './Header';
// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const currentYear = new Date().getFullYear(); // Gets the current year

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Using debounce function to wrap handleResize with a 250ms delay
    const debouncedHandleResize = debounce(handleResize, 250);

    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (

 
    <div className="home">
      {isMobile ? (
        <video  autoPlay loop muted src={Vertical} />
      ) : (
        <video  autoPlay loop muted  src={Horizontal} />
      )}

      <div className="event-heading" ref={ref}>
        <h2 className={`${inView ? 'animate' : ''}`}>Explore Our Events</h2>
        
      </div>

      <div className="card-section">
        <Link to="/weddings" className="card card1" >
          <h3>Weddings</h3>
          <p>Experience the enchantment of matrimonial bliss in our bespoke wedding events.</p>
        </Link>
        <Link to="/birthdays" className="card card2" >
          <h3>Birthdays</h3>
          <p>Make every birthday unforgettable with our unique celebration ideas and themes.</p>
        </Link>
        <Link to="/babyshower" className="card card3" >
          <h3>Baby Showers</h3>
          <p>Celebrate the upcoming arrival with joyous festivities tailored for expecting families.</p>
        </Link>
      </div>

      <div className="card-section">
        <Link to="/collegefest" className="card card4" >
          <h3>College Fests</h3>
          <p>Dive into the vibrancy of college spirit with events that showcase talent, creativity, and unity.</p>
        </Link>
        <Link to= "/corporateevent" className="card card5">
          <h3>Corporate Events</h3>
          <p>Engage and inspire your team with corporate events designed for team building and corporate culture.</p>
        </Link>
        <Link to="/schoolevent" className="card card6">
          <h3>School Events</h3>
          <p>Explore a world of learning and fun with our educational and entertaining school event programs.</p>
        </Link>
      </div>
      <div className="client-home">
        <h2> Our Clients Share Their Experiences</h2>

         <div className="onlyvideos">
    <video controls src={Client1} />
    <video controls src={Client1} />
    <video controls src={Client1} />
  </div>
       
      </div>
      <div className="home-footer">
        <div className="AboutUs">
          <h3>About Us</h3>
          <p>At Dazzzling Sphere, we bring dreams to life through our bespoke event planning services. Based in New Delhi, we specialize in creating unforgettable experiences for any occasion, from lavish weddings to corporate galas and intimate gatherings. Our team of dedicated professionals is passionate about turning your vision into reality, ensuring every detail is meticulously crafted to reflect your unique style and personality. With Dazzzling Sphere, expect nothing less than exceptional service, innovative designs, and a seamless event that will leave a lasting impression on you and your guests. Let us make your next event not just an occasion, but a dazzzling celebration to remember.</p>
        </div>
        <div className="footer">
      {/* Render the copyright line with the current year */}
      <p>&copy; 2023 - {currentYear} Dazzzling Sphere. All rights reserved.</p>
    </div>
        {/* Additional footer content can be added here */}
        
      </div>
    </div>
  );
}

export default Home;
