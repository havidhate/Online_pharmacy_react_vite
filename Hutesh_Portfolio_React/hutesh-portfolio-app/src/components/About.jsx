import React from "react";

function About() {
  return (
    <section id="about" className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m <strong>Hutesh</strong>, a passionate MERN Stack Developer and a
          dedicated real world problem solver. With a strong foundation in web
          development and a purpose-driven mindset, I strive to create
          efficient, scalable, and impactful software solutions. I believe in
          disciplined execution — both in code and in life.
        </p>

        <h3 className="skills-title">Skills</h3>
        <div className="skills-grid">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript (ES6+)</span>
          <span>React.js</span>
          <span>Redux</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>C++</span>
          <span>AWS cloud</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST APIs</span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
}

export default About;
