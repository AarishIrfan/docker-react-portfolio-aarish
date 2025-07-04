import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import me from "../../Assets/me.png";
import Type from "./Type";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn , FaMedium  } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx"; // Import the arrow icon from react-icons

function Home() {
  return (
    <div fluid className="home-section" id="home" style={{ zIndex: '100' }}>
      <div className="home-content">
        <div className="row">
          <div className="col-lg-6">
            <Col md={12} className="home-header">
              <div className="content-container">
                <h1 className="heading">
                 Hi, I'm <strong className="main-name">Aarish Irfan</strong>.
                </h1>
                <div className="type-container">
                  <Type />
                  <br/>
                  <br/>
                </div>
                <div className="paragraph-container">
                  
                  <p>
                    A self-driven and determined individual with a passion for <span className="teal">Software Testing</span>.
                    <br /> Committed to enhancing product quality and user experience through QA processes.
                  </p>
                </div>
          
              <Col md={12}>
                <div>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/AarishIrfan"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://medium.com/@arishirfan98"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaMedium  />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/aarishirfan/"
                        rel="noreferrer"
                        target="_blank"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
            
                  </ul>
                </div>
              </Col>
              <br />
              <div >
                <Link to="/about" className="read-more">
                  Hire Me <RxOpenInNewWindow className="icon" />
                </Link>
              </div>
              </div>
              <div>
                <div style={{ width: "10px", height: "132px" }}></div>
                <div style={{ width: "50px", height: "132px" }}></div>
              </div>
            </Col>
          </div>
          <div className="col-lg-6" style={{ paddingLeft: 130,  position:  "relative" }}>
              <img
                className="myimage"
                src={me}
                alt="home pic"
                style={{ width: "60%", height: "auto" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;