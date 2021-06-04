import React from "react";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as Link } from "../icons/link.svg";
import { ReactComponent as Folder } from "../icons/carpeta.svg";

import "../../styles/projects.css";

export default function Project() {
  const projects = [
    {
      link: "",
      github: "https://github.com/fenix0499/mern-app-front",
      title: "Frontend Web App",
      description:
        "Frontend of a personal web application to show courses, blog and administrator view to add, edit and delete users.",
      tools: "React SCSS Ant-Design",
    },
    {
      link: "",
      github: "https://github.com/fenix0499/mern-app-back",
      title: "Backend Web App",
      description:
        "sodales est luctus. Donec orci nisl , mollis ut sodales ultrices interdum quis t",
      tools: "Node.js Express MongoDB",
    },
    {
      link: "",
      github: "https://github.com/fenix0499/drawing-app",
      title: "Drawing App",
      description:
        "sodales est luctus. Donec orci nisl , mollis ut sodales ultrices interdum quis t   luctus. Donec orci nisl , mollis ut sodales ultrices interdum  luctus. Donec orci nisl , mollis ut sodales ultrices interdum ",
      tools: "React-Native Firebase Expo",
    },
    {
      link: "",
      github: "",
      title: "222Google Keep Clone",
      description:
        "sodales est luctus. Donec orci nisl , mollis ut sodales ultrices interdum quis t",
      tools: "React MongoDB",
    },
    {
      link: "",
      github: "",
      title: "222Google Keep Clone",
      description:
        "sodales est luctus. Donec orci nisl , mollis ut sodales ultrices interdum quis t",
      tools: "React MongoDB",
    },
  ];

  var arrayLegth = 0;
  projects.forEach((element) => {
    arrayLegth++;
  });
  var rule = "";
  if (arrayLegth % 3 === 0) {
    rule = "";
  } else if (arrayLegth % 3 === 1) {
    rule = "card-last-child-2";
  } else if (arrayLegth % 3 === 2) {
    rule = "card-last-child";
  }

  return (
    <div className="projects">
      <div className="projects-content">
        <div className="projects-title">
          <p>Other Noteworthy Projects</p>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard
              link={project.link}
              github={project.github}
              title={project.title}
              description={project.description}
              tools={project.tools}
              rule={rule}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard(props) {
  const { link, github, title, description, tools, rule } = props;

  return (
    <div className={`card-content ${rule}`}>
      <div className="card-icons">
        <div className="folder-icon">
          <a href="#">
            <Folder className="folder-svg-icon" />
          </a>
        </div>
        <div className="social-icons">
          <a href={github}>
            <GitHub className="featured-svg-icon only" />
          </a>
          <a href={link}>
            <Link className={ link ? 'featured-svg-icon only' : 'display-list-job'} />
          </a>
        </div>
      </div>
      <div className="card-container">
        <div className="card-info">
          <p className="card-title"><a className='projects-title-ref card-title' href={ link ? link : github }>{title}</a></p>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-tools">
          <p>{tools}</p>
        </div>
      </div>
    </div>
  );
}
