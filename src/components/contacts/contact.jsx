import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container">
        <div className="contacts">
          <h2 className="header contact-header">Contact Me</h2>
          <div className="contacts-list">
            <a className="contact-icon" href="https://www.facebook.com/vincent.ho.79462815"><img className="icons" src={process.env.PUBLIC_URL + "/img/facebook.png"} alt="facebook pic"/></a>
            <a className="contact-icon" href="https://github.com/vincentho627"><img className="icons" src={process.env.PUBLIC_URL + "/img/github.png"} alt="github pic"/></a>
            <a className="contact-icon" href="https://www.linkedin.com/in/vincent-ho-1099a3195/"><img className="icons" src={process.env.PUBLIC_URL + "/img/linkedin.png"} alt="linkedin pic"/></a>
            <a className="contact-icon" href="mailto:vincentkcho627@gmail.com"><img className="icons" src={process.env.PUBLIC_URL + "/img/email.png"} alt="email pic"/></a>
          </div>
          <div className="bye-gif">
            <img className="gif" src={process.env.PUBLIC_URL + "/img/bye.gif"} alt="bye gif"/>
          </div>
        </div>

    </section>
  )
}

export default Contact;
