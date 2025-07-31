import React from "react";
import myPhoto from "../assets/hutesh-photo.jpg"; // ✅ Importing correctly

function Hero() {
  return (
    <section id="hero" className="hero fade-in">
      <div className="container hero-content">
        <div className="hero-text">
          <img src={myPhoto} alt="Hutesh Vidhate" className="profile-pic" />
          <h2>
            Hello, I’m <span className="highlight">Hutesh</span>
          </h2>

          {/* ✅ Use the imported image here */}

          <h3>MERN Stack Developer</h3>
          <p>
            Smart, hardworking, and always curious to build modern solutions. I
            blend the art of full-stack development with the discipline of civil
            services preparation.
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
