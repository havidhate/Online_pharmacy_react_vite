import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section fade-in">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          Want to collaborate or just say hi? I'm always open to discussing
          projects, ideas.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> huteshvidhate23@gmail.com
          </p>
          <p>
            <strong>Mobile No.:</strong> 9370163450
          </p>

          <a
            href="https://www.linkedin.com/in/hutesh-profile"
            target="_blank"
            rel="noreferrer"
            className="linkedin-card"
          >
            <div className="linkedin-icon">in</div>
            <div className="linkedin-text">
              <p className="profile-name">Hutesh – Full Stack Dev</p>
              <p className="profile-desc">LinkedIn Profile →</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
