import React from "react";

import "../../styles/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-title">Hi, my name is</span>
        <p className="hero-name">Salomón Romero.</p>
        <p className="hero-subtitle">I build things for the web.</p>
        <p className="hero-presentation">
          I'm a Guanajuato-based software engineering student with an interest
          in creating cool stuff for the web and a taste for computer security.
          I am currently studying my last semesters of university career.
        </p>
        <a href="mailto:sro150499@gmail.com" className="hero-button">
          <span>Get In Touch</span>
        </a>
      </div>
    </div>
  );
}
