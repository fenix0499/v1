import React from "react";
import { Hero, About, Jobs, Featured, Projects, Contact } from "../components/";

import "../styles/home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </div>
  );
}
