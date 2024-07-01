import React from "react";
import "./introstyle.css";
import "./../Navbar/navbarstyle.css";
import ex from './ex.pdf'
import { Link } from "react-scroll";
const Intro=() =>{

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ex; // Use the imported PDF file as the href
    link.setAttribute('download', 'ex.pdf'); // Set the desired file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
    return (
        <section id="intro">
      <div className="content">
        <div>
        <span className="hello" > Hello,  </span>
        <span className="intex">I'm</span>
        </div>
       <span> <span className="name1">Dhyanesh     </span>    <span className="name1">Dharmik</span></span>
        <p className="desc">a passinate <span className="name2">Software</span><span className="name2"> Developer </span> who loves problem solving and programming to contribute my skills and talent for developing interactive applications.</p>
    <div className="btns">
<button className="btn btn1" onClick={()=>{
  document.getElementById("contactpage").scrollIntoView();
}}>Hire me</button>
      <button className="btn btn2" onClick={handleDownload}>Download Resume</button>
      </div>
      <div className="profile-links">
        <a><img src="github.png"/></a>
        <a><img src="cc.jpeg"/></a>
        <a><img src="lc.png"/></a>
      </div>
     </div>
      <div className="img-content">
        <img src="w.jpg"/>
      </div>
  </section>
    );
}

export default Intro;