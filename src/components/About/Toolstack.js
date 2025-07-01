import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSelenium,
  SiPostman,
  SiPlaywright,
  SiMysql,
  SiJirasoftware,
  SiClickup,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>
    </Row>
  );
}

export default Toolstack;
