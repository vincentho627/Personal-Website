import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container">
        <div className="contacts">
          <h2 className="header contact-header">Contact Me</h2>
          <div className="contacts-list row">
            <a className="contact-icon col-sm-3" align="center" href="https://www.facebook.com/vincent.ho.79462815"><img className="icons" src={process.env.PUBLIC_URL + "/img/facebook.png"}/></a>
            <a className="contact-icon col-sm-3" align="center" href="https://github.com/vincentho627"><img className="icons" src={process.env.PUBLIC_URL + "/img/github.png"}/></a>
            <a className="contact-icon col-sm-3" align="center" href="https://www.linkedin.com/in/vincent-ho-1099a3195/"><img className="icons" src={process.env.PUBLIC_URL + "/img/linkedin.png"}/></a>
            <a className="contact-icon col-sm-3" align="center" href="mailto:vincentkcho627@gmail.com"><img className="icons" src={process.env.PUBLIC_URL + "/img/email.png"}/></a>
          </div>
          <div className="bye-gif">
            <img className="gif" src={process.env.PUBLIC_URL + "/img/bye.gif"} />
          </div>
        </div>

    </section>
  )
}

export default Contact;
