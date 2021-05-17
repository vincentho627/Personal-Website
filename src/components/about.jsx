import React from 'react';

function About() {
  return (
    <div>
      <section id="about" className="about">
        <h2 className="about-title">Who am I ?</h2>      
        <img className="profile-pic" src="/img/profile-pic.png" />
        <div className="about-paragraph">
          <p>
            My name is Vincent Ho and I am currently a second year computing student at Imperial. I am passionate
            about Machine Learning, Data Science and Software Engineering. My main coding languages include Python,
            Java, C, Haskell and Javascript. I love playing the guitar, badminton, hiking and playing video games
            with my friends.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;