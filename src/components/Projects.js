import React from "react";
import "../style/style.css";
import "../style/Projects.css";

function Projects() { //Project cards
  return (
    <section className="container" id="projects">
      <div className="row" id="projectsDiv">
        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/NASA_explore.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://lmartin214.github.io/NASA_exploration/"
                target="_blank"
              >
                NASA Imagery Research
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/NASA_exploration"
                target="_blank"
              >
                Github Repo
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">NASA Imagery Search</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/SsCodingQuiz.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://lmartin214.github.io/Web-APIs-Code-Quiz/"
                target="_blank"
              >
                Coding Quiz
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/Web-APIs-Code-Quiz"
                target="_blank"
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Coding Quiz</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/SspasswordGen.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://lmartin214.github.io/Java-Script-Password-Genera/"
                target="_blank"
              >
                Password Generator
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/Java-Script-Password-Genera"
                target="_blank"
              >
                Github Repo
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Password Generator</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/SsJATE.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://pwa-code-editor.herokuapp.com/"
                target="_blank"
              >
                Just Another Text Editor
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/PWA_Code_Editor"
                target="_blank"
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">JATE</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/SsWorkDayScheduler.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://lmartin214.github.io/Third-Party-APIs-Work-Day-Scheduler/"
                target="_blank"
              >
                Work Day Scheduler
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/Third-Party-APIs-Work-Day-Scheduler"
                target="_blank"
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Work Day Scheduler</p>
            </div>
          </div>
        </div>

        <div className="col" id="projectCard">
          <div className="card" style={{ width: "30rem" }}>
            <img
              src={require("../assets/cardImages/WeatherDashboard.png")}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="overlay-card">
              <a
                id="overlay-text1"
                href="https://lmartin214.github.io/ServerSIdeAPIs-WeatherDashboard/"
                target="_blank"
              >
                Weather Dashboard
              </a>
              <a
                id="overlay-text2"
                href="https://github.com/lmartin214/ServerSIdeAPIs-WeatherDashboard"
                target="_blank"
              >
                {" "}
                Github Repo{" "}
              </a>
            </div>
            <div className="card-body">
              <p className="card-text">Weather Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
