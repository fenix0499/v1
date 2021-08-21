import React, { useState, useEffect } from "react";

import "../../styles/jobs.css";

export default function Jobs() {
  const [value, setValue] = useState(1);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);

  const [worked, setWorked] = useState({
    title: "Web Developer",
    company: "SOLEMTI",
    date: "Aug 2020 - Oct 2020",
    act1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Uteuismod dolor nec odio convallis, ut commodo dolor eleifend.Nunc efficitur blandit mattis.",
    act2: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    act3: "ccccccccccccccccccccccccccccc",
  });

  function onClickButton(button) {
    setValue(button);
  }

  useEffect(() => {
    if (value === 1) {
      setButton1(true);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(false);
      setWorked({
        title: "Software Developer Engineer",
        company: "VISE México",
        date: "May 2021 - Present",
        act4: "Developing software to help solve company problems and optimize processes to reduce costs and increase worker productivity.",
        act1: "Development of business web applications, survey of requirements directly with the client, preparation of project report, entity relationship and flow diagrams, database design and integration with the company system, design and layout of the application interface with Figma.",
        act2: "Development of modern, robust and professional web applications both front and back end, REST API development, presentation of project progress with the client, application deployment on the eflow company's platform.",
        act3: "Application development is done with technologies such as React, Node.js, Express, SQL Server.",
      });
    }
    if (value === 2) {
      setButton1(false);
      setButton2(true);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(false);
      setWorked({
        title: "Web Developer",
        company: "SOLEMTI",
        date: "Aug 2020 - Oct 2020",
        act1: "When I first started in the company, I worked with the development team in the realization of the 'Ikapital Real Estate' project in the Front and Back End part.",
        act2: "Worked with technologies such as HTML, JavaScript, CSS3, Bootstrap and CakePHP.",
        act3: "",
      });
    }
    if (value === 3) {
      setButton1(false);
      setButton2(false);
      setButton3(true);
      setButton4(false);
      setButton5(false);
      setButton6(false);
      setWorked({
        title: "",
        company: "SOLEMTI",
        date: "Aug 2020 - Oct 2020",
        act1: "landit mattis.gggggggggggggggggggggggg",
        act2: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        act3: "ccccccccccccccccccccccccccccc",
      });
    }
    if (value === 4) {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(true);
      setButton5(false);
      setButton6(false);
      setWorked({
        title: "",
        company: "SOLEMTI",
        date: "Aug 2020 - Oct 2020",
        act1: "landit mattis.uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
        act2: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        act3: "ccccccccccccccccccccccccccccc",
      });
    }
    if (value === 5) {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(true);
      setButton6(false);
      setWorked({
        title: "",
        company: "SOLEMTI",
        date: "Aug 2020 - Oct 2020",
        act1: "landit mattis.tttttttttttttttttttttt",
        act2: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        act3: "ccccccccccccccccccccccccccccc",
      });
    }
    if (value === 6) {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(true);
      setWorked({
        title: "",
        company: "SOLEMTI",
        date: "Aug 2020 - Oct 2020",
        act1: "landit mattis.rrrrrrrrrrrrrrrrrr",
        act2: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        act3: "ccccccccccccccccccccccccccccc",
      });
    }
  }, [value]);

  return (
    <div className="jobs" id="experience">
      <div className="jobs-content">
        <div className="jobs-title">
          <span>02.</span>
          <p>Where I’ve Worked</p>
          <div className="jobs-line" />
        </div>
        <div className="jobs-container">
          <div className="jobs-buttons">
            <div className="button-container">
              <div className={button1 ? "clicked-bar" : ""} />
              <button
                onClick={() => onClickButton(1)}
                className={button1 ? "clicked" : ""}
              >
                VISE México
              </button>
            </div>
            <div className="button-container">
              <div className={button2 ? "clicked-bar" : ""} />
              <button
                className={button2 ? "clicked" : ""}
                onClick={() => onClickButton(2)}
              >
                SOLEMTI
              </button>
            </div>
            <div className="button-container">
              <div className={button3 ? "clicked-bar" : ""} />
              <button
                className={button3 ? "clicked" : ""}
                onClick={() => onClickButton(3)}
              ></button>
            </div>
            <div className="button-container">
              <div className={button4 ? "clicked-bar" : ""} />
              <button
                className={button4 ? "clicked" : ""}
                onClick={() => onClickButton(4)}
              ></button>
            </div>
            <div className="button-container">
              <div className={button5 ? "clicked-bar" : ""} />
              <button
                className={button5 ? "clicked" : ""}
                onClick={() => onClickButton(5)}
              ></button>
            </div>
            <div className="button-container">
              <div className={button6 ? "clicked-bar" : ""} />
              <button
                className={button6 ? "clicked" : ""}
                onClick={() => onClickButton(6)}
              ></button>
            </div>
          </div>
          <div className={worked.title ? "jobs-info" : "display-list-job"}>
            <div className="jobs-asigment">
              <p>{worked.title}</p>
              <span>@ {worked.company}</span>
            </div>

            <p className="jobs-date">{worked.date}</p>
            <div className="jobs-activites">
              <ul>
                <div>
                  <li></li>
                  <p>{worked.act1}</p>
                </div>
                <div>
                  <li></li>
                  <p>{worked.act2}</p>
                </div>
                <div className={worked.act3 ? "" : "display-list-job"}>
                  <li></li>
                  <p>{worked.act3}</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
