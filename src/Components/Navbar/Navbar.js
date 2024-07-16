import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import { Link } from 'react-scroll'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/icons-material/Menu';


function Navbar() {
  const [showMenu, setShowMenu] = useState (false);
  return (
    <nav className="navbar">
    <img src={logo} alt="logo" className='logo' />
    <div className="desktopMenu">
      <Link activeClass='active' to='home' spy = {true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
      <Link  activeClass='active' to='about' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Us</Link>
      <Link  activeClass='active' to='howitworks' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">How We Work</Link>
      <Link activeClass='active' to='projects' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resources</Link>
      <Link activeClass='active' to='/therapist' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Our Therapist</Link>
      <Link activeClass='active' to='contact' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Us</Link>
      <Link activeClass='active' to='intro' spy = {true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem"></Link>
</div>

<button className="desktopMenuBtn" onClick={ () =>{ 
    var imageElement = document.getElementsByClassName('contactForm1');
    imageElement[0].scrollIntoView({behavior: 'smooth'});}}> <AccountCircleIcon /> Log In</button>

    <div className="mobMenu"><Menu onClick={()=> setShowMenu(!showMenu)}/> </div>
    <div className="navMenu" style={{display: showMenu? 'flex' : 'none' }}>
        <Link activeClass='active' to='home' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About Us</Link>
        <Link activeClass='active' to='skills' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Resources</Link>
        <Link activeClass='active' to='projects' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Our Therapists</Link>
        <Link activeClass='active' to='contact' spy = {true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Contact Us</Link>
    </div>

</nav>
  )
}

export default Navbar