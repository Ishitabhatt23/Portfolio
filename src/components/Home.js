import React from 'react';
import Typewriter from 'typewriter-effect';
import myPDF from '../assets/Ishitabhatt-resume.pdf';
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className='home-main-contents'>
        <h1>
          Hi,{'\u00a0'}
          
          <span className='static-text'>I'm</span>{' '}
          <span className='home_name'>Ishita</span>
        </h1>

        <div className='animation'>
          <span className='static-text'>I'm{'\u00a0'}</span>
          <div className="typewriter-container">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [" a student", "an aspiring developer", "a coder"],
              }}
              className="typewriter-text"
            />
          </div>
        </div>

        <div className='home_resume'>
          <a href={myPDF} download="Ishita Bhatt-Resume (1).pdf">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
