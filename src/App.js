import React from 'react';
import About from './components/about';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import {Routes,Route,useLocation} from 'react-router-dom'
import ParticleBackground from './components/particleBackground';
import './App.scss'
function App() {

  const location=useLocation();
  console.log(location);

  const renderParticleBackgroundhome=location.pathname==='/';
  return (
   
    <div className="App">
     {
      renderParticleBackgroundhome&&(
<ParticleBackground/>
      )
     }
  
     
     <Navbar/>
     <div className='App_main-content'>
     <Routes>
  <Route index path='/' element={<Home/>}/>
  <Route  path='/about' element={<About/>}/>
  <Route  path='/skills' element={<Skills/>}/>
  <Route  path='/project' element={<Project/>}/>
  <Route  path='/contact' element={<Contact/>}/>
</Routes>
     </div>



       </div>
  );
}

export default App;
