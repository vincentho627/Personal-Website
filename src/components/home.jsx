import React from 'react';
import Navbar from './navbar/navbar';

function Home() {
  return (
    <div>
      <main>
        <section className="landing">
          <Navbar />
          <h2 className="title-text">Vincent Ho</h2>
        </section>

      </main>
      {/* <div className="intro">
      <div className="intro-text">
        <h1 className="hide">
          <span className="text">Welcome</span>
        </h1>
        <h1 className="hide">
          <span className="text">To My Page.</span>
        </h1>
      </div>
    </div> */}
    <div className="slider"></div>
    </div>
  )
}

export default Home;
