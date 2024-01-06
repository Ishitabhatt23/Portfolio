import './about.scss'
import pic from '../assets/def898e2-41d0-4734-9a91-65ebf0a4db4c-removebg-preview.png'
const About = () => {

    return (
    <div>
     <div className='Header1'>
      <h2>About Me</h2>
      </div>
      <div className="AboutMepara">
        <p>Hey there! 👋 I'm a computer science student at NJIT with big dreams in the software world. Scheduled to graduate in May 2024, I'm all about mixing a love for tech with a commitment to pushing the boundaries.

Rocking a GPA of 3.4, I've got my name on the Dean's List, proving that I'm not just about the code but also about getting stuff done. Always hungry to stay on top of the latest tech trends, I'm the kind of person who's excited about the future of technology and how I can play a part in it.

<br/><br/>I've been getting my hands dirty as an Automation Intern at HealthEquity, where I've been cooking up some serious RPA magic using Power Automate. Salesforce, cloud, desktop flows – you name it, I've probably optimized it by 80%. And guess what? I've even tangoed with AI Builder to make data entry less of a snooze fest.

In the project zone, I've built a lexical analyzer and parser in C++, just to flex those problem-solving muscles.<br/><br/> On the web dev side, I've whipped up cool stuff like a portfolio, a quiz platform, and even a band page – all coded with HTML, CSS, and JavaScript.

Working on a MySQL-based flight reservation system was a real team effort, and it's been one of my proudest achievements. I'm all about getting into the nitty-gritty of string format error-checking, and I've cooked up some slick Pushdown Automaton and Deterministic Finite Automaton systems in C++.

Certified in HackerRank for SQL, Problem Solving, and JavaScript, I'm keeping the learning train rolling. And if you throw in some Azure DevOps action and sprinkle it with certifications in Azure Fundamentals, you've got a tech enthusiast ready to dive into the real-world challenges of Software Development Life Cycle (SDLC).
        </p>
      </div>
      <div className='img'>
      <img src={pic} alt="" />

      </div>
    </div>
     
  )
}

export default About;