import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiDart,
//   DiMysql, 
// } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons skillset">
        <p>Functional  <strong className="teal">Testing </strong></p>
      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
        
        <p>Regression  <strong className="teal">Testing </strong></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
       
      <p>Exploratory  <strong className="teal">Testing </strong></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
        
      <p>SQL  <strong className="teal">Queries </strong></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
      <p>Defect  <strong className="teal">Tracking </strong></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
      <p>Test  <strong className="teal">Cases </strong></p>

      </Col>
      <Col  xs={4} md={2} className="tech-icons skillset">
        
      <p>UI  <strong className="teal">Automation </strong></p>

      </Col>
      <Col xs={4} md={2} className="tech-icons skillset">
        
      <p>API  <strong className="teal">Testing </strong></p>

      </Col>
      <Col  xs={4} md={2} className="tech-icons skillset">
      <p>Agile  <strong className="teal">Methodologies</strong></p>

      </Col>
    </Row>
  );
}

export default Techstack;
