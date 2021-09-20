import React from "react";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as Link } from "../icons/link.svg";

import "../../styles/featured.css";

export default function featured() {
  return (
    <div className="featured" id="work">
      <div className="featured-content">
        <div className="featured-title">
          <span>03.</span>
          <p>Some Things I’ve Built</p>
          <div className="featured-line" />
        </div>

        <div className="featured-container">
          <div className="featured-project">
            <div className="featured-photo">
              <div className="featured-cover" />
              <div className="project-photo photo-1" />
            </div>
            <div className="featured-info">
              <span>Featured Project</span>
              <p className="featured-info-title">SGI VISE App</p>
              <div className="featured-description">
                <p>
                  This is the largest project I am working on and it is still
                  under development, its objective is to eliminate a leak of
                  more than 5 million pesos per year. I started the development
                  of this project in the VISE company, the most important
                  construction company in León, Guanajuato.
                </p>
              </div>
              <p className="featured-tools">
                SQL Server Express.js React.js Node.js
              </p>
              <div className="featured-links">
                {/* <a href="#">
                  <GitHub className="featured-svg-icon only" />
                </a>
                <a href="#">
                  <Link className="featured-svg-icon only" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="featured-project-2">
            <div className="featured-photo-2">
              <div className="featured-cover-2" />
              <div className="project-photo-2 photo-2" />
            </div>
            <div className="featured-info-2">
              <span>Featured Project</span>
              <p className="featured-info-title-2">To Do App</p>
              <div className="featured-description-2">
                <p>
                  This is a simple and minimalist task control application which
                  has a calendar to select the date from which you want to view
                  the pending tasks, a section to see the completed tasks and a
                  statistics section. This is a project that I develop in my
                  spare time.
                </p>
              </div>
              <p className="featured-tools-2">
                PostgreSQL Express.js React.js Node.js
              </p>
              <div className="featured-links-2">
                <a
                  href="https://github.com/fenix0499/Full-Stack-App-PERN"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub className="featured-svg-icon-2 only" />
                </a>
                {/* <a href="#">
                  <Link className="featured-svg-icon-2 only" />
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="featured-project">
            <div className="featured-photo">
              <div className="featured-cover" />
              <div className="project-photo photo-3" />
            </div>
            <div className="featured-info">
              <span>Featured Project</span>
              <p className="featured-info-title">OctoProfile</p>
              <div className="featured-description">
                <p>
                  c imperdiet augue egestas. Duis placerat quam fe ugiat odio
                  lacinia, et sodales est luctus. Donec orci nisl , mollis ut
                  sodales ultrices, interdum quis tortor. Curabit ur luctus
                  augue vel augue cong
                </p>
              </div>
              <p className="featured-tools">MongoDB Express React Node.js</p>
              <div className="featured-links">
                <a href="#">
                  <GitHub className="featured-svg-icon only" />
                </a>
                <a href="#">
                  <Link className="featured-svg-icon only" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
