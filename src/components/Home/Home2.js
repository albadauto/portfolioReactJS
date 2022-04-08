import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
             Deixe me <span className="purple"> APRESENTAR </span> 
            </h1>
            <p className="home-about-body">
             Meu nome é José Adauto e posso te proporcionar soluções em TI para as mais complexas situações do mercado!
              <br />
              <br />Gosto de usar uma das principais tecnologias do mercado
              <i>
                <b className="purple"> Javascript, React.js e Node.JS. </b>
              </i>
              <br />
              <br />
              Sou técnico em Desenvolvimento de Sistemas &nbsp;
              <i>
                <b className="purple">Formado na Etec Ermelinda Giannini Teixeira </b> e hoje busco um novo espaço em{" "}
                <b className="purple">
                  Desenvolvimento Fullstack e Empreendedorismo.
                </b>
              </i>
              <br />
              <br />
              No momento, estou me graduando em  <b className="purple">Análise e desenvolvimento de sistemas</b> Na
              <i>
                <b className="purple">
                  {" "}
                  Fatec Ermelinda Giannini Teixeira.
                </b>
              </i>
              &nbsp; 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ACHE NO</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/albadauto"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-adauto/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dev.adauto/"
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
