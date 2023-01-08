import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FaRegEye } from "react-icons/fa";

function Resume() { //Resume  & Skills Page 
  return (
    <div className="aboutMe">
      <Card bg="light">
        <Card.Header as="h5">Resume</Card.Header>
        <Card.Body>
          <Card.Title>Lamar Martin</Card.Title>
          <Card.Text>Please checkout my resume on Indeed</Card.Text>
          <a
            href="https://my.indeed.com/p/lamarm-seq7k01"
            target="_blank"
          >
            <FaRegEye/>
          </a>
        </Card.Body>
      </Card>

      <CardGroup>
        <Card bg="light">
          <Card.Body className="skillsCard">
            <Card.Title className="skillsTitle">Front-end Skills</Card.Title>
              <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>           
          </Card.Body>
        </Card>
        <Card bg="light">
          <Card.Body className="skillsCard">
            <Card.Title className="skillsTitle">Back-end Skills</Card.Title>            
              <ul className="skills">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>            
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Resume;