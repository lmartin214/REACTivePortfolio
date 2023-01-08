import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

//Icons added using React-Icon package
function Footer() {
  return (
    <footer id="footer">
      <ul className="contact-icons">
        <li className="icons">
          <a href="mailto:l.martin214@yahoo.com" target="_blank">
          <FaEnvelope/>
          </a>
        </li>
        <li className="icons">
          <a href="https://github.com/lmartin214" target="_blank">
            <FaGithub/>
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.linkedin.com/in/lamar-martin-2aa32a203/"
            target="_blank">
              <FaLinkedin/>
          </a>
        </li>
      </ul>
      <h5> Lamar Martin 2023 © </h5>
    </footer>
  );
}

export default Footer;