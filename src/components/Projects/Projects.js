import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sunshine from "../../Assets/Projects/sunshine.png";
import quiz from "../../Assets/Projects/quiz.png";
import textutils from "../../Assets/Projects/textutils.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import tkh from "../../Assets/Projects/tkh.png";
import noon from "../../Assets/Projects/noon.png";
import dietes from "../../Assets/Projects/dietes.png";
import fumicon from "../../Assets/Projects/fumicon.png";
import lms from "../../Assets/Projects/LMS-portal.png";
import snp from "../../Assets/Projects/snp.jfif";
import po from "../../Assets/Projects/po.png";
import bs from "../../Assets/Projects/bs.webp";
import bw from "../../Assets/Projects/bw.avif";
import q from "../../Assets/Projects/q.avif";
import h1 from "../../Assets/Projects/h1.jpg";





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
          <Col md={4} className="project-card ">
            <ProjectCard
              imgPath={snp}
              isBlog={false}
              title="Salt n Paper clone "
              description="I designed a Salt & Pepper homepage using HTML, CSS, and Bootstrap, making it responsive."
              ghLink="https://github.com/MuhammadBilal2020/salt-n-pepper"
              demoLink="https://muhammadbilal2020.github.io/salt-n-pepper/"
              className="h-[100px]"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={po}
              isBlog={false}
              title="Priceoye clone"
              description="Design a responsive front page for Priceoye using HTML, CSS, and Bootstrap, with a focus on clean design and optimized user experience."
              ghLink="https://github.com/MuhammadBilal2020/price"
              demoLink="https://muhammadbilal2020.github.io/price/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={h1}
              isBlog={false}
              title="Html and Css Hackathon"
              description="
This is my first hackathon, where I successfully design the Burger King homepage in just one hour. I used HTML, CSS, and Bootstrap to create a responsive design. It was a challenging but rewarding experience!"
              ghLink="https://github.com/MuhammadBilal2020/burgerking-home-page"
              demoLink="https://muhammadbilal2020.github.io/burgerking-home-page/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bs}
              isBlog={false}
              title="Buy and Sell Corner"
              description="I built a full-stack website using JavaScript for the frontend, with Firebase integrated as the backend to handle data storage, authentication, and other server-side functions"
              ghLink="https://github.com/MuhammadBilal2020/Buy-and-sell-web"
              demoLink="https://muhammadbilal2020.github.io/Buy-and-sell-web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bw}
              isBlog={false}
              title="Personal Blogging Site"
              description="Designed and implemented a blogging platform using React for the frontend and Firebase for backend services. The platform supports secure user authentication, allowing users to create, edit, and manage posts."
              demoLink="https://react-blogging-website-puce.vercel.app/dashboard"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={q}
              isBlog={false}
              title="Quiz Web"
              description="
I built a quiz website using React.js that integrates with an API to retrieve questions and answers. This allows users to easily participate in quizzes across various topics. The design focuses on simplicity and user engagement."
              ghLink="https://github.com/MuhammadBilal2020/React-Quiz-Web"
              demoLink="https://react-quiz-web.vercel.app/"
            />
          </Col>
         
         
       



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
