import React, { useState } from "react";
import "../style/Contact.css";
import "../style/style.css";
import { validateEmail } from "../utils/helpers"; //Helper for user's input
import ListGroup from "react-bootstrap/ListGroup"; //import React-bootstrap

function Contact() { //Contact form
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = form;
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Handle Form", form);
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "email") {
      if (!validateEmail(inputValue)) { //Helper being used to validate email
        setErrorMessage("Invalid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!inputValue.length) {
        setErrorMessage("Name is required");
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setForm({ ...form, [inputName]: inputValue });
    }
  };

  return (
    <section className="contact">
      <div id="contactLine"></div>
      <h3>Contact me :</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={name}
            name="name"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="name"
            placeholder="name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            defaultValue={email}
            name="email"
            type="email"
            className="form-control"
            onBlur={handleInputChange}
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            defaultValue={message}
            name="message"
            type="text"
            className="form-control"
            onChange={handleInputChange}
            id="message"
            rows="3"
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn btn-secondary mb-2">
          Submit
        </button>
      </form> 
      <div id="contactList">
        <ListGroup>
          <a href="tel:9257556746" id="contactItem">
            <ListGroup.Item variant="light">
              Phone: (925)-755-6746
            </ListGroup.Item>
          </a>
          <a href="mailto: l.martin214@yahoo.com" id="contactItem">
            <ListGroup.Item variant="light">
              Email: l.martin214@yahoo.com
            </ListGroup.Item>
          </a>
        </ListGroup>
      </div>
    </section>
  );
}
export default Contact;
