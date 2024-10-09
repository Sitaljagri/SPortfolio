import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am Sital Kumar Jagri, a Full Stack Developer with expertise in  🤷‍♂️
              <br />
              <br /> 
              <i>
                <b className="purple"> JavaScript, Python, HTML, CSS, and React. I hold a B.Tech in Computer 
                Science and Engineering from VTU University . </b>
              </i>
              <br />
              <br />
              and have gained valuable experience as a front-end developer working with 
              React.js. I am passionate about building dynamic and user-friendly web applications and am currently 
              looking for software engineering opportunities. &nbsp;
              <i>
                <b className="purple">Web developer </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software developer.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Data visualization using Power BI
              with <b className="purple">Power BI</b> and
              <i>
                <b className="purple">
                  {" "}
                  Matplotlib, Seaborn
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Python</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="myimg" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sitaljagri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sital-kumar-jagri-a99754283/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sitaljagri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
