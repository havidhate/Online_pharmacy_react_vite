import React from "react";

function Footer() {
  return (
    <footer className="footer fade-in">
      <div className="container">
        <p>© {new Date().getFullYear()} Hutesh. Built with ❤️ using React.</p>
      </div>
    </footer>
  );
}

export default Footer;
