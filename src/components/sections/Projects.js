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
        "Backend of a personal web application to show courses, blog and administrator view to add, edit and delete users.",
      tools: "Node.js Express MongoDB",
    },
    {
      link: "",
      github: "https://github.com/fenix0499/drawing-app",
      title: "Drawing App",
      description:
        "This is a small mobile drawing application developed for a university project, the application has the feature of consuming cloud services.",
      tools: "React-Native Firebase Expo",
    },
    {
      link: "",
      github: "https://github.com/fenix0499/Job-interviews",
      title: "Job interviews",
      description:
        "These are programing challenges that I have successfully solved in different job interviews.",
      tools: "Javascript",
    },
    {
      link: "",
      github: "https://github.com/fenix0499/freeCodeCamp-Challenges",
      title: "freeCodeCamp Challenges",
      description:
        "These are programing challenges solved to complete the freeCodeCamp programming course.",
      tools: "Javascript",
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
          <a href={github} target="_blank" rel="noreferrer">
            <GitHub className="featured-svg-icon only" />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <Link
              className={link ? "featured-svg-icon only" : "display-list-job"}
            />
          </a>
        </div>
      </div>
      <div className="card-container">
        <div className="card-info">
          <p className="card-title">
            <a
              className="projects-title-ref card-title"
              href={link ? link : github}
            >
              {title}
            </a>
          </p>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-tools">
          <p>{tools}</p>
        </div>
      </div>
    </div>
  );
}
