import React from "react";
import "../style/style.css";
import "../style/About.css";

function About() {
  return (
    <div className="aboutMe">
      <h1 id="aboutTitle">About Me</h1>
      <p id="aboutText">
        Hi! I'm Lamar Martin. I am a student of UC Berkeley Full Stack bootcamp,
        and I want to get into the field of developing. I love problem solving ,
        puzzles, and my favorite thing is to create products that bring people
        together.
      </p>
      <img
        id="selfImage"
        src={require("../assets/images/self-img.jpg")}
        alt="Lamar Martin's Portfolio"
      ></img>
    </div>
  );
}
export default About;
