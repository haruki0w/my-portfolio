import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mogura Portfolio</h3>
          <p>Web開発者として活動中</p>
        </div>
        <div className="footer-section">
          <h4>リンク</h4>
          <ul>
            <li>
              <a href="#home">ホーム</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">プロジェクト</a>
            </li>
            <li>
              <a href="#contact">お問い合わせ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SNS</h4>
          <ul>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mogura Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
