import React from 'react';

function Profile() {
  return (
      <div className="welcome-container" style={{"background": "linear-gradient(to bottom, rgba(22, 22, 22, 0.7) 50%, rgba(22, 22, 22, 0.5) 75%, #161616 100%), url(" + process.env.PUBLIC_URL + "/images/bg.png"+ ")",
      "backgroundPosition": "center center", "backgroundSize": "cover" }}>
        <div className="welcome">
          <h2>Ho Kwan Chak Vincent</h2>
          <p className="welcome_desc">Computing Student At Imperial College London</p>
          <a href="https://www.facebook.com/vincent.ho.79462815/" target="_blank"><i className="bx app_icon bxl-facebook-circle"></i></a>
          <a href="https://github.com/vincentho627" target="_blank"><i className="bx app_icon bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/vincent-ho-1099a3195/" target="_blank"><i className="bx app_icon bxl-linkedin-square"></i></a>
        </div>
        <img className="img-responsive rounded-circle profile_pic" src={process.env.PUBLIC_URL + "/images/profile-pic.png"} alt=""/>
      </div>
  )
}

export default Profile;
