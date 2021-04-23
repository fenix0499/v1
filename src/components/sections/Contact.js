import React from "react";

import "../../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <span className="contact-span">04. What’s Next?</span>
        <p className="contact-title">Get In Touch</p>
        <p className="contact-atraction">
          I am currently looking for new opportunities and my inbox is waiting
          for them. Whether you have a question or just want to say hello, I'll
          be so happy to get back to you!
        </p>
        <a href="mailto:sro150499@gmail.com" className="hero-button">
          <span>Say Hello</span>
        </a>
      </div>
    </div>
  );
}
