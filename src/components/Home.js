import React from "react";
import "../style/Home.css";
import "../style/style.css";

//First page of portfolio
function Home() {
  return (
    <div className="homeH1 jumbotron" id="home">
      <h1 className="display-4"> Hello World, I am Lamar Martin </h1>
      <p> Full-Stack Web Developer</p>
      <img
        id="selfImage"
        src={require("../assets/images/self-img.jpg")}
        alt="Lamar Martin's Portfolio"
      ></img>
    </div>
  );
}

export default Home;