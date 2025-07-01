import React from "react";
import Card from "react-bootstrap/Card";
import {FaCaretRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I am based in <a href="https://www.google.com/maps?q=karachi,Pakistan" target="_blank" rel="noopener noreferrer" className="teal-link">Karachi, Pakistan</a>.
<br /> I hold a Bachelor of Engineering in Computer Systems Engineering from <a href="https://duet.edu.pk/" target="_blank" rel="noopener noreferrer" className="teal-link">Dawood University Of Engineering And Technology,Karachi</a>.
<br /> I provide software testing services and work as a Software Quality Assurance Engineer, focusing on improving product quality and user satisfaction.
<br/> Connect with me on <a href="https://www.linkedin.com/in/aarishirfan/" target="_blank" rel="noopener noreferrer" className="teal-link">LinkedIn</a> to know more about my work and interests.
<br/>
<br/>

          </p>
          <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What am I <strong className="teal">working</strong> on ?
            </h2>
          <ul style={{ listStyleType: "disc", paddingLeft: 30 }}>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /> <strong className="teal"> Manual & Automation Testing: </strong> Working with functional and Non-functional testing methods, including White-Box and Black-Box. Designing test cases and handling non-HTML elements with Sikuli, AutoITX and JavaScriptExecutor. Learning data-driven testing with CSV, XML and JSON.
            </li>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /><strong className="teal"> Test Execution & Reporting: </strong> Executing tests with CMD, PowerShell, and Jenkins. Generating reports with MSTest, LOG4Net, Extent, and Allure. Managing defects using Azure DevOps and Jira.
            </li>
            <li className="about-activity">
            <FaCaretRight className="bullet-icon" /><strong className="teal"> Future Goals: </strong> Learning Selenium, Playwright and GitHub Actions. Working on Jenkins CI/CD pipelines and impactful projects across web, mobile and desktop applications.
            </li>
            
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
