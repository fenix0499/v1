import React from "react";
import { ReactComponent as GitHub } from "../components/icons/github.svg";
import { ReactComponent as Instagram } from "../components/icons/instagram.svg";
import { ReactComponent as Twitter } from "../components/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../components/icons/linkedin.svg";
import { ReactComponent as CodePen } from "../components/icons/codepen.svg";

import "../styles/sider.css";

export default function leftSide() {
  return (
    <>
      <div className="side-1">
        <div className="social-icons">
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
        <div className="side-barra"></div>
      </div>
      <div className="side-2">
        <div className="side-correo">
          <a href="mailto:sro150499@gmail.com">sro150499@gmail.com</a>
        </div>
        <div className="side-barra side-barra2"></div>
      </div>
    </>
  );
}
