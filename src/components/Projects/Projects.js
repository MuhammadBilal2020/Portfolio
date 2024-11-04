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
              title="Sunshine Exhause"
              description="Designed and implemented a blogging platform using React for the frontend and Firebase for backend services. The platform supports secure user authentication, allowing users to create, edit, and manage posts."
              demoLink="https://react-blogging-website-puce.vercel.app/dashboard"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="Textutils"
              description="TextUtils is a powerful module that offers a range of functionalities for extracting and manipulating text from paragraphs. such as whitespace removal, word capitalization, and word lowercasing."
              ghLink="https://github.com/mabdullahjs/TextUtils"
              demoLink="https://textutils-322.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="Quiz app is very helpful for schools and students. It helps them to develop their skills and knowledge through quizzes. This app provides a way for students to take exams, improve their abilities and skills."
              ghLink="https://github.com/mabdullahjs/Presentation-Quiz-App"
              demoLink="https://quiz-322.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Old Portfolio"
              description="This is my previous portfolio website, created using HTML, CSS, JavaScript, Tailwind CSS, and Firebase. It has been recognized with the  Best Design of Portfolio award in my class."
              ghLink="https://github.com/mabdullahjs/Complete-Portfolio"
              demoLink="https://portfolio-322.web.app/"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noon}
              isBlog={false}
              title="noon.com clone"
              description="This is a design of noon.com made using reactjs and antdesign library. It has a responsive layout which looks beautifully on all devices, from mobiles to desktops."
              ghLink="https://github.com/mabdullahjs/Noon.com-Clone"
              demoLink="https://noon-322.web.app/"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tkh}
              isBlog={false}
              title="Theek Kar Dengey "
              description="This is a mobile repairing website which contain all e-commerce features and it is made using react js and antd. You can fix and buy repaired products on the website."
              ghLink="https://github.com/mabdullahjs/Mobile-Repair-ReactJs"
              demoLink="https://tkh-123.web.app/"
            />
          </Col> */}



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
