import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contactstyle.css'
const Con=()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jv5zerb', 'template_xouumdd', form.current, {
            publicKey: 'OdXaNZ2UBLx69G0cL',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("email send successfully!!");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
return (
    <section id="contactpage">
        <div id="content">
            <h1 className="contitle">Contact Me</h1>
           <span className="con-desc">Please fill out the form below to discuss any work opportunities. </span>
           <form className="contactform" ref={form} onSubmit={sendEmail}> 
           <input type="text" name='your_name' className="sename" placeholder="You Name" required/>
           <input type="email" name='your_email' className="seemail" placeholder="Your Email" required/>
           <textarea className="meeg" rows="5" name="message" placeholder="Your Message" required></textarea>
           <button type="submit" value="send" className="submitbtn">Submit</button>
           </form>
        </div>
        <div className="contact-profiles">
               <div className="link"><a><img src="whatsapp.png"/> </a>8767191040</div>
               <div className="link"><a><img src="gmail-logo.png"/> </a>dharmikdj@rknec.edu</div>
               <div className="link"><a><img src="linkedin.png"/> </a>LinkedIn</div>
        </div>
    </section>
);
}

export default Con;