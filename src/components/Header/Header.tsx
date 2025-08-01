import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Mogura Portfolio</h1>
        <button className="burger-menu" onClick={toggleMenu}>
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
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
      </nav>
    </header>
  );
};

export default Header;
