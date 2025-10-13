import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mogura Portfolio</h3>
          <p>がんばります</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">お問い合わせ</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mogura Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
