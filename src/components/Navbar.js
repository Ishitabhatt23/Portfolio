import React from 'react'
import logo from '../assets/Screenshot_2023-11-25_143828-removebg-preview (1).png'
import {Link} from 'react-scroll';
import './Navbar.css'
 const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt='logo' className="logo"/>
      <div className="menu">
      <Link to="home" className="list" smooth={true} duration={500}>
          Home
        </Link>
      <Link className="list">About</Link>
      <Link className="list">Projects</Link>
      <Link className="list">Contact</Link>
      
      </div>
    </nav>
   
  )
}
export default Navbar;