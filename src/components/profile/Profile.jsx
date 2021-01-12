import React from 'react';

function Profile() {
  return (
      <div className="welcome-container">
        <div className="welcome">
          <h2>Ho Kwan Chak Vincent</h2>
          <p className="welcome_desc">Computing Student At Imperial College London</p>
          <a href="https://www.facebook.com/vincent.ho.79462815/"><i className="bx nav__icon bxl-facebook-circle"></i></a>
          <a href="https://github.com/vincentho627"><i className="bx nav__icon bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/vincent-ho-1099a3195/"><i className="bx nav__icon bxl-linkedin-square"></i></a>
        </div>
        <img className="img-responsive rounded-circle profile_pic" src={process.env.PUBLIC_URL + "/images/profile-pic.png"} alt=""/>
      </div>
  )
}

export default Profile;
