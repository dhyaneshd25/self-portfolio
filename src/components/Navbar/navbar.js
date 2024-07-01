import React, { useState } from "react";
import "./navbarstyle.css"
import { BiMenuAltRight } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { Link } from 'react-scroll';
const NavBar=()=>{
    const [show,setshow]=useState(false)
    return (
 <nav className="navbar">
<div className="lg">
    <h1>D.</h1><h1>J.</h1><h1>D.</h1>
    </div>
    <div className="DektopMenu"> 
<Link activeClass="active" to="intro" spy={true} smooth={true} offset={-150} duration={500} className="Desktopmenulist"> Home</Link>
<Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="Desktopmenulist">About</Link>
<Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500}  className="Desktopmenulist">Projects</Link>
<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="Desktopmenulist">Contact </Link>

    </div>

    {!show ? <BiMenuAltRight className="moblg" size={40} onClick={()=>{setshow(!show)}}/> : <FiX className="moblg" size={40} onClick={()=>{setshow(!show)}}/>}
   { show ? <div className="MobileMenu"> 
<Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="Mobilemenulist" onClick={()=>{setshow(false)}}> Home</Link>
<Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="Mobilemenulist" onClick={()=>{setshow(false)}}>About</Link>
<Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500}  className="Mobilemenulist" onClick={()=>{setshow(false)}}>Projects</Link>
<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="Mobilemenulist" onClick={()=>{setshow(false)}}>Contact </Link>

    </div> : <></>
}
 </nav>
    );
}
export default NavBar;