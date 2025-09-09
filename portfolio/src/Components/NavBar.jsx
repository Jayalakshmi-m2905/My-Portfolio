import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ state, setState }) => {
  const [activeButton, setActiveButton] = useState('About'); // Track the active button
  
  const handleResume = () => {
    setState('Resume'); 
    setActiveButton('Resume'); // Set active button
  };
  
  const handleAbout = () => {
    setState('About'); 
    setActiveButton('About'); // Set active button
  };
  
  const handleContact = () => {
    setState('Contact'); 
    setActiveButton('Contact'); // Set active button
  };

  return (
    <div className='NavBar'>
      <div className='bar1'>
        <h2>Portfolio</h2>
      </div>
      <div className='bar2'>
        <button 
          onClick={handleAbout} 
          className={activeButton === 'About' ? 'active' : ''}
        >
          About
        </button>
        <button 
          onClick={handleResume} 
          className={activeButton === 'Resume' ? 'active' : ''}
        >
          Resume
        </button>
        <button 
          onClick={handleContact} 
          className={activeButton === 'Contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
