import React from "react";
import "../style/style.css";
import "../style/About.css";

function About() {
  return (
    <div className="aboutMe">
      <h1 id="aboutTitle">About Me</h1>
      <p id="aboutText">
      Hi! I'm Lamar Martin, a results-driven full stack developer with a diverse
      background in the cannabis industry. I bring a strong foundation in front-end 
      and back-end development, as well as experience in dispensary operations, 
      distribution, and customer accounts. With a successful track record in the 
      cannabis industry, I have developed a keen understanding of operational 
      workflows and customer-centric processes.

      As a full stack developer, my goal is to bridge my industry expertise with my 
      technical skills to create efficient and innovative solutions. Through my previous 
      roles in dispensaries, distribution, and customer accounts, I have honed my 
      attention to detail, problem-solving abilities, and effective communication skills.

      I earned a certificate in Full Stack Web Development from UC Berkeley, providing me 
      with a comprehensive understanding of modern web development practices, including 
      both front-end and back-end technologies. This program equipped me with 
      industry-relevant skills and allowed me to work on real-world projects, solidifying 
      my ability to deliver high-quality code.

      I have a passion for problem-solving and enjoy tackling puzzles. My favorite thing 
      is to create products that bring people together, leveraging technology to enhance 
      connectivity and user experiences.

      I am actively seeking a challenging full stack developer position where I can 
      leverage my unique background in the cannabis industry alongside my technical 
      expertise. I am excited to collaborate with a forward-thinking team to build 
      exceptional web applications that make a positive impact on users' lives.
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
