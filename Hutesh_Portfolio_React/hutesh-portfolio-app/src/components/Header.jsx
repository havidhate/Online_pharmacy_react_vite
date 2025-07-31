import React from "react";

function Header() {
  return (
    <header className="header fade-in">
      <div className="container nav-container">
        <h1 className="logo">Hutesh</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#achievements">Acheivements</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1CTXwvx22KdbPEabq4qu8Gm6t8jqiWdUI/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
