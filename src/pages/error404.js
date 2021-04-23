import React from "react";
import { Link } from "react-router-dom";

import "../styles/error.css";

export default function error404() {
  return (
    <div>
      <div className="error">
        <div className="error-content">
          <p className="error-title">404</p>
          <p className="error-description">Page Not Found</p>
          <Link to={"/"} className="hero-button">
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
