import React from "react";

import Photo from "../../images/photo.jpg";

import "../../styles/about.css";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-title">
          <span>01.</span>
          <p>About Me</p>
          <div className="about-line" />
        </div>

        <div className="about-container">
          <div className="about-info">
            <p>
              Hi! My name is Salomón and I like to create interesting things for
              the internet. My interest in technology arose after watching the
              television series “Mr. Robot". I think it's the best series out
              there so far and everyone should watch it, even if they have no
              interest in technology.
            </p>
            <p>
              A few months ago I had the opportunity to work remotely in a web
              development company located in Mazatlán where I was able to learn
              many things and gain some experience. My main focus currently is
              creating digital experiences and learning computer security in my
              spare time.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="about-skills">
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>Python</li>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>React</li>
                <li>CSS</li>
                <li>Express.js</li>
              </ul>
            </div>
          </div>
          <div className="about-photo">
            <div className="photo-cover" />
            <img src={Photo} />
            <div className="photo-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
