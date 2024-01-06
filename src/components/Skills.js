import React from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SQL from '../assets/icons/sql-server.png'
import c from '../assets/icons/c-.png';
import powerBi from '../assets/icons/1200px-New_Power_BI_Logo.svg.png'
import devops from '../assets/icons/azure-devops-color-icon-2048x2048-140zbjrd.png'
import powerAutomate from '../assets/icons/powerAutomate.png'
import { faHtml5,faGithub, faJs, faCss3,faSalesforce,faSass,faPython } from '@fortawesome/free-brands-svg-icons';
 const Skills = () => {
  return (
    <div className='box'>
       <div className='Header1'>
      <h2>Skills</h2>
      </div>
      <div className='skill-columns'>
        <div className='Skills'>
               <FontAwesomeIcon icon={faHtml5} className='html-icon' />
          <span className='SkillName'>HTML</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faGithub} className='github-icon' />
          <span className='SkillName'>Github</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faCss3} className='css-icon' />
          <span className='SkillName'>Css3</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faJs} className='js-icon' />
          <span className='SkillName'>JavaScript</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faSalesforce} className='salesforce-icon' />
          <span className='SkillName'>Salesforce</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faSass} className='Sass-icon' />
          <span className='SkillName'>Sass</span>
        </div>
        <div className='Skills'>
               <FontAwesomeIcon icon={faPython} className='Python-icon' />
          <span className='SkillName'>Python</span>
        </div>
        <div className='Skills'>
             <img src={SQL} className='sql-icon'alt =""/>
          <span className='SkillName'>SQL</span>
        </div>
        <div className='Skills'>
             <img src={c} className='c-icon'alt =""/>
          <span className='SkillName'>C++</span>
        </div>
        <div className='Skills'>
             <img src={powerAutomate} className='powerAutomate-icon'alt =""/>
          <span className='SkillName'>Power Automate</span>
        </div>
        <div className='Skills'>
             <img src={devops} className='devops-icon'alt =""/>
          <span className='SkillName'>Azure DevOps</span>
        </div>
        <div className='Skills'>
             <img src={powerBi} className='powerBi-icon'alt =""/>
          <span className='SkillName'>Power Bi</span>
        </div>
      </div>
    </div>
  )
}

export default Skills;