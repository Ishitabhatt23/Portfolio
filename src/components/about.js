
import './about.css'
import Typewriter from 'typewriter-effect';
import myPDF from '../assets/Ishitabhatt-resume.pdf';
const About = () => {

    return (
    <section id='about'>
<div className='contents'>
    <span className='hi'>Hi,</span>

  <span className='im'>I'm <span className='name'>Ishita</span></span>

<div className='animation'>
  <span>I'm </span>
  <div style={{ display: 'inline-block' }}>
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
<div className='resume'>
<a href={myPDF} download="Ishita Bhatt_Resume.pdf">
        Download Resume
      </a>
      </div>

</div>


        </section>
     
  )
}

export default About;