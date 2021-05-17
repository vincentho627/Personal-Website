import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container">
        <div className="contacts">
          <h2 className="header contact-header">Contact Me</h2>
          <div className="contacts-list">
            <a className="contact-icon" href="https://www.facebook.com/vincent.ho.79462815"><i className='bx icons bxl-facebook-circle'></i></a>
            <a className="contact-icon" href="https://github.com/vincentho627"><i className='bx icons bxl-github' ></i></a>
            <a className="contact-icon" href="https://www.linkedin.com/in/vincent-ho-1099a3195/"><i className='bx icons'><img className="linkedin" src="/img/linkedin.png"/></i></a>
            <a className="contact-icon" href="mailto:vincentkcho627@gmail.com"><i className='bx icons' ><img className="mail" src="/img/mail.webp"/></i></a>
          </div>
          <div className="bye-gif">
            <img className="gif" src="/img/bye.gif" />
          </div>
        </div>

    </section>
  )
}

export default Contact;
