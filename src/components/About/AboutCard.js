import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SITAL KUMAR JAGRI </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I hold a B.Tech in Computer Science and Engineering from VTU University 
            <br />
            and currently work as a front-end developer specializing in React.js,
            where I focus on building responsive and user-friendly web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading the newspaper 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          <i>"Bringing ideas to life, one line of code at a time!"</i>{" "}
          </p>
          <footer className="blockquote-footer">Sital Kumar Jaggri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
