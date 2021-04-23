import React from "react";

import { ReactComponent as GitHub } from "../components/icons/github.svg";
import { ReactComponent as Instagram } from "../components/icons/instagram.svg";
import { ReactComponent as Twitter } from "../components/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../components/icons/linkedin.svg";
import { ReactComponent as CodePen } from "../components/icons/codepen.svg";

import "../styles/footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/fenix0499">
            <GitHub className="svg-icon only" />
          </a>
          <a href="https://www.instagram.com/salomonromero__/">
            <Instagram className="svg-icon group" />
          </a>
          <a href="https://twitter.com/fenix0499">
            <Twitter className="svg-icon group" />
          </a>
          <a href="https://www.linkedin.com/in/sro0499/">
            <LinkedIn className="svg-icon only" />
          </a>
          <a href="#">
            <CodePen className="svg-icon group" />
          </a>
        </div>
        <div className="footer-credits">
          <p>Build by Salomón Romero</p>
        </div>
      </div>
    </div>
  );
}
