import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTrophy,
  AiOutlineRead
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
  <Nav.Link
    as={Link}
    to="/certifications"
    onClick={() => updateExpanded(false)}
  >
    <AiOutlineTrophy style={{ marginBottom: "2px" }} /> Certifications
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link
    as={Link}
    to="/articles"
    onClick={() => updateExpanded(false)}
  >
    <AiOutlineRead style={{ marginBottom: "2px" }} /> Blogs
  </Nav.Link>
</Nav.Item>
            {/* <Nav.Item>
           <Nav.Link
           as={Link}
           to="/Resources"
           onClick={() => updateExpanded(false)}
             >
           <AiOutlineFundProjectionScreen
           style={{ marginBottom: "2px" }}
              />{" "}
                Resources
              </Nav.Link>
              </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                href="https://medium.com/@arishirfan98"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                onClick={()=> window.open('https://cal.com/aarishirfan' , '__blank')}
                target="_blank"
                className="fork-btn-inner"
              >
               Schedule a Call
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;