import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import todo from "../../Assets/todo.png";
import suicide from "../../Assets/Projects/suicide.png";
import zettabyte from "../../Assets/zettabyte.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">recentes </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do App"
              description="Uma aplicação simples feita em Node.js que registra e gestiona atividades do dia a dia, trabalho ou serviço. O sistema conta com login e senha, opções para ver as atividades desativadas e cadastro de atividades feitas."
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zettabyte}
              isBlog={false}
              title="Zettabyte store"
              description="O projeto zettabyte store no momento está em desenvolvimento. Trata-se de uma loja virtual com foco em venda e compra de hardware usado. O site possui sistema de administração e chat online!"
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
