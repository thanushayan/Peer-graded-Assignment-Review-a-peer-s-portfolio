 // Home.js
import React from 'react';
import './Home.css';
import myImage4 from '../image/f.png';

const Home = () => {
  return (
    <body>
    <div className='thanu'>
    <div className="logo-container">
        <img src={myImage4} alt="lin" className='lin4'/>
      </div>
      <p> Hello, I am Thanu</p>
      <h1>A frontend developer <br/>specialised in React </h1>
      
    </div>
    </body>
  );
}

export default Home;
