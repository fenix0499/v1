import React from "react";

import { ReactComponent as GitHub } from "../components/icons/github.svg";
import { ReactComponent as Instagram } from "../components/icons/instagram.svg";
import { ReactComponent as Twitter } from "../components/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../components/icons/linkedin.svg";
import { ReactComponent as HackerRank } from "../components/icons/HackerRank.svg";

import "../styles/footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://github.com/fenix0499">
            <GitHub className="svg-icon only" />
          </a>
          <a href="https://www.instagram.com/salomonromero__/" target="_blank" rel="noreferrer">
            <Instagram className="svg-icon group" />
          </a>
          <a href="https://twitter.com/fenix0499" target="_blank" rel="noreferrer">
            <Twitter className="svg-icon group" />
          </a>
          <a href="https://www.linkedin.com/in/sro0499/" target="_blank" rel="noreferrer">
            <LinkedIn className="svg-icon only" />
          </a>
          <a href="https://www.hackerrank.com/fenix150499" target="_blank" rel="noreferrer">
            <HackerRank className="svg-icon group" />
          </a>
        </div>
        <div className="footer-credits">
          <p>Build by Salomón Romero</p>
        </div>
      </div>
    </div>
  );
}
