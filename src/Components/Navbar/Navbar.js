import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../Assets/logo1.png";
import "./Navbar.css";
import { useSelector } from 'react-redux';



function Navbar() {
   const user = useSelector(state => state.user.user);
   const [showMenu, setShowMenu] = useState(false);

   return (

      <nav className="navbar">
         {user ? ( <> 
            <Link to="/home">
        <img src={logo} alt="logo" className="logo" />
      </Link>
         <div className="desktopMenu">
            
         <ScrollLink
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Home
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="howitworks"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               How We Work
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Resources
            </ScrollLink>
            <Link activeClass="active" to="/patient" className="desktopMenuListItem customLink">Patient</Link>

            <Link activeClass="active" to="/therapist" className="desktopMenuListItem customLink">Therapists</Link>           
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Contact Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="intro"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            ></ScrollLink>
         </div>
         
         <Link to="/login" className="listItem customLink">
            <button className="desktopMenuBtn"> <AccountCircleIcon /> Log In</button>
         </Link>

         <div className="mobMenu">
            <Menu onClick={() => setShowMenu(!showMenu)} />{" "}
         </div>
         <div
            className="navMenu"
            style={{ display: showMenu ? "flex" : "none" }}
         >
         <Link activeClass="active" to="/home" className="listItem customLink">Home</Link>
         {/* <Link activeClass="active" to="/authentication" className="listItem customLink"> authenticate</Link> */}


            
            <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="skills"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Resources
            </ScrollLink>
          
            <Link activeClass="active" to="/patient" className="listItem customLink">Patient</Link>

            <Link activeClass="active" to="/therapist" className="listItem customLink">Therapists</Link>           
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Contact Us
            </ScrollLink>
            <Link activeClass="active" to="/login" className="listItem customLink"> Log In </Link>
         </div>
         </>
      
      ): 
      (
        <> <Link to="/home">
        <img src={logo} alt="logo" className="logo" />
      </Link>
         <div className="desktopMenu">
            
         <ScrollLink
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Home
            </ScrollLink>
          
            <Link activeClass="active" to="/authentication" className="listItem customLink"> authenticate</Link>

          
            <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="howitworks"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               How We Work
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="projects"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Resources
            </ScrollLink>
            <Link activeClass="active" to="/patient" className="desktopMenuListItem customLink">Patient</Link>

            <Link activeClass="active" to="/therapist" className="desktopMenuListItem customLink">Therapists</Link>           
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            >
               Contact Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="intro"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
               className="desktopMenuListItem"
            ></ScrollLink>
         </div>
         
         <Link to="/login" className="listItem customLink">
            <button className="desktopMenuBtn"> <AccountCircleIcon /> Log In</button>
         </Link>

         <div className="mobMenu">
            <Menu onClick={() => setShowMenu(!showMenu)} />{" "}
         </div>
         <div
            className="navMenu"
            style={{ display: showMenu ? "flex" : "none" }}
         >
         <Link activeClass="active" to="/home" className="listItem customLink">Home</Link>
         <Link activeClass="active" to="/authentication" className="listItem customLink"> authenticate</Link>

         <ScrollLink
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               About Us
            </ScrollLink>
            <ScrollLink
               activeClass="active"
               to="skills"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Resources
            </ScrollLink>
          
            <Link activeClass="active" to="/patient" className="listItem customLink">Patient</Link>

            <Link activeClass="active" to="/therapist" className="listItem customLink">Therapists</Link>           
            <ScrollLink
               activeClass="active"
               to="contact"
               spy={true}
               smooth={true}
               offset={-50}
               duration={500}
               className="listItem"
               onClick={() => setShowMenu(false)}
            >
               Contact Us
            </ScrollLink>
            <Link activeClass="active" to="/login" className="listItem customLink"> Log In </Link>
         </div>
         </>
      ) }
      
       
      </nav>
   );
}

export default Navbar;