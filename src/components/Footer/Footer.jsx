import React, { useEffect } from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="contact">
      <Container>
        <Row>
          <Col className="text-center social" lg="12">
            <p className="socialp">
              <div class='oo'>
            CONTACT  INFORMATION: <br /> <br /></div><br />
            <div class='hi'>
            <p>LOCATION<br />Chaitanya Bharathi Institute of Technology, <br />Gandipet, Hyderabad - 500075.</p>
            <div class='hii'>
            <p>VISIT US: <br /><a href="https://cbitosc.github.io/">CBIT Open Source Community</a><br /> <br />Email: <br /><a href="mailto:cosc@cbit.ac.in">cosc@cbit.ac.in</a></p>
            </div><br />
            <div class='hiii'>
            <p>CONTACT: <br />Contact1:xxxxxxxxxx <br /> Contact2:xxxxxxxxx</p>
            </div>
            <div class='yo'>
            <p> Miscellaneous  links:  <br /></p><a href="https://cbit-hacktoberfest23.vercel.app/"> 1.hactoberfest 2023</a><br /> <a href="https://www.cbit.ac.in/">2.CBIT</a>
            </div>
            </div><br />
            <br />
            <div class='sm'>
            <p>Our Social Media Handles: <br /> <br /></p> </div>

              <div class='one'>
              <a
                href="https://www.instagram.com/cbitosc/"
                target="_blank"
                rel="noopener noreferrer"
              >
          
                <i className="ri-instagram-line"></i>
              </a>
              </div>
              <div class='three'>
              <a 
                href="https://www.facebook.com/cbitosc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              </div>
              <div class='two'>
              <a
                href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              </div>
              <div class='four'>

              <a
                href="https://www.linkedin.com/company/cbitosc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-line"></i>
              </a>
              </div>
            </p>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              OpenSys <i className="ri-copyright-line"></i> {year}. All rights
              reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
