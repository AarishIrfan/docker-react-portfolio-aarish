import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn , FaMedium  } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        <h3>
  {/* <a href="mailto:arishirfan98@gmail.com" style={{ color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
  Need QA? Contact me!
  </a> */}
</h3>


        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Aarish Irfan</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AarishIrfan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@arishirfan98"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMedium   />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aarishirfan/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              
            </li>
            <li className="social-icons">
              <a
                href="https://linktr.ee/AarishIrfan"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinktree />
              </a>
              
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;