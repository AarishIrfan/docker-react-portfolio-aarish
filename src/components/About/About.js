import React from "react";
import { Container, Row} from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="teal">Me</strong>
            </h2>
            <Aboutcard />
        </Row>
        <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Technical <strong className="teal">Skills </strong>
        </h2>

        <Techstack />

        <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          <strong className="teal">Tools</strong> I use
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
