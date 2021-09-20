import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import "../App.css";

export default function Nav() {
  const [burgerClick, setBurgerClick] = useState(false);
  // const bodyStyle = {
  //   body: {
  //     position: "fixed",
  //   },
  // };
  var burgerClass = "";
  var transformNav = "";
  var blurNav = "";
  var style;
  var scrollNav = false;
  if (burgerClick) {
    burgerClass = "toggle";
    transformNav = "nav-active";
    blurNav = "nav-blur-active";
    //scrollNav = !scrollNav;
  }
  if (scrollNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const [navbarScroll, setNavbarScroll] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollTop, setScrollTop] = useState();
  //var lastScrollTop = 0;
  const [scrollValidation, setScrollValidation] = useState(false);

  const HiddeNavbar = () => {
    //var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
    if (scrollTop > lastScrollTop) {
      setNavbarScroll(false);
    } else {
      setNavbarScroll(true);
    }

    if (scrollTop > 50) {
      setScrollValidation(true);
    } else {
      setScrollValidation(false);
    }

    setLastScrollTop(scrollTop);
  };

  /*window.addEventListener("scroll", HiddeNavbar);*/

  window.onscroll = (e) => HiddeNavbar();

  return (
    <>
      <div
        className={`nav ${navbarScroll ? "" : "nav-hidden"} ${
          scrollValidation ? "nav-scroll" : ""
        }`}
      >
        <nav
          className={`nav-content ${
            scrollValidation ? "nav-scroll-content" : ""
          }`}
        >
          <Link to={"/"}>
            <div className="nav-logo"></div>
          </Link>

          <div className="nav-content-2">
            <ul className="nav-links">
              <li>
                <a href="#about">
                  <span>01. </span>About
                </a>
              </li>
              <li>
                <a href="#experience">
                  <span>02. </span>Experience
                </a>
              </li>
              <li>
                <a href="#work">
                  <span>03. </span>Work
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span>04. </span>Contact
                </a>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/13UhR-sn8UkDE3ePxltGfTIOboq8jWvvN/view?usp=sharing"
              className="nav-button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
            </a>
          </div>
        </nav>
      </div>
      <Burger
        setBurgerClick={setBurgerClick}
        burgerClick={burgerClick}
        burgerClass={burgerClass}
        navbarScroll={navbarScroll}
        scrollValidation={scrollValidation}
        style={style}
      />
      <ResponsiveNavbar
        transformNav={transformNav}
        burgerClick={burgerClick}
        setBurgerClick={setBurgerClick}
      />
      <div className={`navbar-blur ${blurNav}`} />
    </>
  );
}

function Burger(props) {
  const {
    burgerClick,
    setBurgerClick,
    burgerClass,
    navbarScroll,
    scrollValidation,
    style,
  } = props;
  return (
    <div
      style={style}
      className={`burger border-burger ${burgerClass} ${
        navbarScroll ? "" : "burger-hidden"
      } ${scrollValidation ? "burger-scroll" : ""} `}
      onClick={() => setBurgerClick(!burgerClick)}
    >
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
}

function ResponsiveNavbar(props) {
  const { transformNav, burgerClick, setBurgerClick } = props;
  return (
    <div className={`nav-responsive ${transformNav}`}>
      <div className="responsive-content">
        <ul className="nav-links-responsive">
          <li>
            <span>01. </span>
            <a href="#about" onClick={() => setBurgerClick(!burgerClick)}>
              About
            </a>
          </li>
          <li>
            <span>02. </span>
            <a href="#experience" onClick={() => setBurgerClick(!burgerClick)}>
              Experience
            </a>
          </li>
          <li>
            <span>03. </span>
            <a href="#work" onClick={() => setBurgerClick(!burgerClick)}>
              Work
            </a>
          </li>
          <li>
            <span>04. </span>
            <a href="#contact" onClick={() => setBurgerClick(!burgerClick)}>
              Contact
            </a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1mltoHECyvaO9Bm1m1Nru5H59dbFC64du/view?usp=sharing"
          className="nav-button-responsive"
        >
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}
