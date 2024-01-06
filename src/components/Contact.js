import React, { useState } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  
  const[fname,setFirstName]=useState('');
  const[lname,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');


const handleSubmit=(e)=>{
  e.preventDefault();

  const serviceId='service_c59x845';
  const templateId='template_m7p6iit';
  const publicKey='_AoMVIV_Ub7i2IkOT';


  const templateparams={
    from_name:fname +lname,
    from_email:email,
    to_name: 'Ishita Bhatt',
    message: message,
  };


  emailjs.send(serviceId,templateId,templateparams,publicKey)
  .then ((response)=>{
    alert('Email sent successfully',response);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  })
  .catch((err)=>{
    console.log('Email sent error',err);
  }
  )
}








  return (
    <div>
      <div className='Header1'>
        <h2>Contact Me</h2>
      </div>
      <section id="contact" className='contact'>
        <form action="#" onSubmit={handleSubmit}>
          <div className='input-box'>
            <div className='input-field field' >
              <input type='text' placeholder='First Name' id='fname' value={fname} className='item' autoComplete='off' required
              onChange={(e)=> setFirstName(e.target.value)}
              />
            </div>
            <div className='input-field field' >
              <input type='text' placeholder='Last Name' id='lname' className='item'  value={lname}autoComplete='off' required
               onChange={(e)=> setLastName(e.target.value)}
              />
            </div>

            <div className='input-field field' >
              <input type='text' placeholder='Email' id='email' className='item' value={email} autoComplete='off' required 
              onChange={(e)=> setEmail(e.target.value)}
              />
            </div>

          </div>
          <div className='txtarea-field feild'>
            <textarea name='' id='message' cols={30} rows={10} placeholder='Message' className='item' value={message} autoComplete='off' required
            onChange={(e)=> setMessage(e.target.value)}
            >
            </textarea>
          </div>
          <button type='submit' className='button-21'>Send Message</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ishita-bhatt-913a9a252/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Ishitabhatt23" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/ishitabhatt23?" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </form>


      </section>

    </div>
  )
}
export default Contact;
