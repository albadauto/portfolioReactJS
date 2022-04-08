import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos! Meu nome é <span className="purple">José Adauto</span>
            . Sou de  <span className="purple"> Santana De Parnaíba, São Paulo - Brasil.</span>
            <br />No momento, sou um desenvolvedor junior, apaixonado por programação e empreender.
            <br />
            <br />
            Além de estudar programação, tenho outros métodos de me divertir!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Videogame
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar instrumentos musicais
            </li>
            <li className="about-activity">
              <ImPointRight /> Conhecer novos lugares
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
