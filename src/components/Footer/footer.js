import React from "react";
import './footerstyle.css'
const Footer=()=>{
    return(
        <footer className="f">
     <div className="title">
         <span>Copyright &#169;2024 Dhyanesh Dharmik.</span><span> All right received.</span>
     </div>
     <div className="footer-links">
       <a href="https://web.whatsapp.com/"> <img src="whatsapp.png"/></a>
       <a href="https://mail.google.com">   <img src="gmail-logo.png"/></a>
       <a href="https://www.linkedin.com/in/dhyanesh-dharmik-500b44243/"><img src="linkedin.png"/></a>
       <a href="https://github.com/dhyaneshd25"><img src="github.png"/></a>
       </div>
       </footer>
    )
}

export default Footer;