import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/webpage.png";//done
import suicide from "../../Assets/Projects/suicide.png";
import textUtiles from "../../Assets/Projects/text.png";//done

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="web page"
              description="My portfolio showcases my journey as a Full Stack Developer, highlighting projects 
              in front-end and back-end development. It includes live demos, code repositories, and case studies 
              of web applications, API integrations, and responsive design. Each project demonstrates 
              my problem-solving abilities, efficient solutions, and user-focused experiences. It also 
              provides insights into my development process, emphasizing planning, collaboration, and continuous learning."
              ghLink="https://github.com/Sitaljagri/SPortfolio"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtiles}
              isBlog={false}
              title="TextUtils"
              description="TextUtils is a web application that provides various utilities for manipulating and analyzing text. It's a handy tool for anyone working with text data, offering functionalities such as text transformation, counting characters and words, and text analysis."
              ghLink="https://github.com/Sitaljagri/TextUtils"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="This project allows users to generate QR codes by uploading a URL or entering text, which is then encoded into a unique QR code. Once generated, the QR code can be easily downloaded in various formats for use. The efficient and user-friendly tool offers quick and seamless QR code creation."
              ghLink="https://github.com/Sitaljagri/QR-code-generator"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="This QR-code-generating single-page app allows users to input a URL or text, generate a QR code, and download it as an image. It uses HTML for structure, CSS for styling, and JavaScript to handle QR code generation and downloading. The app provides a simple interface with input fields, a generate button, and a download option."
              ghLink="https://github.com/Sitaljagri/QR-code-generator"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="A resume builder single-page web application in React.js allows users to input personal details, education, and work experience, generating a professional resume dynamically. It utilizes React's state management for form handling and real-time preview updates."
              ghLink="https://github.com/Sitaljagri/Resume_-Builder"
             
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
