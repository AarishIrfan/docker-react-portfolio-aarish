import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationsCards from "./CertificationsCards";
import SwagsLabs from "../../Assets/Projects/SwagsLabs.png";
import OrangeHRMPlaywright from "../../Assets/Projects/OrangeHRMPlaywright.png";
import SQLGuideForQA from "../../Assets/Projects/SQLGuideForQA.png";
import DEMOQA from "../../Assets/Projects/DEMOQA.png";
import HotelAdactin from "../../Assets/Projects/HotelAdactin.png";

function Certifications() {
  return (
    <Container fluid className="certifications-section">
      <Container>
        <h1 className="certifications-heading">
          Latest <strong className="teal">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
        Explore my newest skills and professional accomplishments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
         

          <Col md={4} className="certifications-card">
            <CertificationsCards
              imgPath={OrangeHRMPlaywright}
              isBlog={false}
              title="Orange HRM Live Automation using Playwright"
              description="Automated tests for OrangeHRM using Playwright and NUnit, covering login, user management, and leave modules with detailed reporting and video recordings."
              ghLink="https://github.com/AarishIrfan/OrangeHRMliveAutomationUsingPlaywright"
            />
          </Col>
          <Col md={4} className="certifications-card">
            <CertificationsCards
              imgPath={SwagsLabs}
              isBlog={false}
              title="SwagLabs E2E Automation"
              description="Automated test scripts for Swag Labs e-commerce using MSTest and Selenium WebDriver to validate user login, product sorting, and checkout processes."
              ghLink="https://github.com/AarishIrfan/MSTestSeleniumSwagLabs"
            />
          </Col>

          <Col md={4} className="certifications-card">
            <CertificationsCards
              imgPath={SQLGuideForQA}
              isBlog={false}
              title="Comprehensive SQL Guide for Testers"
              description="A guide for QA professionals on essential SQL operations, including table creation, data manipulation, aggregation, null handling, joins, and deletion"
              ghLink="https://github.com/AarishIrfan/SQLGuideForQA"
            />
          </Col>

          <Col md={4} className="certifications-card">
            <CertificationsCards
              imgPath={DEMOQA}
              isBlog={false}
              title="Demo QA with Selenium "
              description="(Upcoming) "
              ghLink="https://github.com/AarishIrfan"
            />
          </Col>
          <Col md={4} className="certifications-card">
            <CertificationsCards
              imgPath={HotelAdactin}
              isBlog={false}
              title="Hotel Adactin Website Automation"
              description="(Upcoming) "
              ghLink="https://github.com/AarishIrfan"            
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
