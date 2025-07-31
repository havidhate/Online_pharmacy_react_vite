import React from "react";

const projects = [
  {
    title: "Online pharamcy project",
    description:
      "stack: javascript, html, CSS, firebase,react-vite. use most of the concept of js(like denouncing for search optimization, throttling for smooth experience,also used dynamic features and UI/UX and pagination)prescription handling using AI,drag and drop feature for subscription,also AI recommendations on cart dynamically",
    github:
      "https://github.com/havidhate/Online_pharmacy_react_vite/tree/main/pharma-react-app",
    live: "https://splendorous-horse-d197b5.netlify.app/", // Replace with actual link if hosted
  },
  {
    title: "Library management react-app",
    description:
      "React application that displays a paginated list of books fetched from a public API. The app allow users to search for books by title using Binary Search logic and support both local (useState) and global (Redux Toolkit) state management. Implemented client-side pagination, routing, and use useRef, useEffect, and Context API where appropriate. Build within a da",
    github: "https://github.com/havidhate",
    live: "https://680f25f750e6136f912458b9--unique-empanada-3b4b88.netlify.app/", // Replace with actual link if hosted
  },
  {
    title: "Loan Application system",
    description:
      "Loan Application Full stack App Loan Application Full stack App 🔗 Loan Application Management System – MERN StackA full-stack web application designed to streamline the loan application process for users and admins. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it features:🔐 Secure User Authentication (JWT-based Sign Up/Login)📝 Multi-step Loan Application Form with file upload (PDF/Images)📊 User Dashboard to track loan status and view submitted applications📅 Dynamic Repayment Calendar based on loan data, with real-time payment status updates🗃️ Admin-side control for viewing and managing loan applications (extendable)",
    github: "https://github.com/havidhate",
    live: "https://snazzy-semifreddo-415586.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section fade-in">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {proj.live !== "#" && (
                  <a href={proj.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
