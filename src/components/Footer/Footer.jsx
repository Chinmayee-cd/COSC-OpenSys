import React,{useEffect} from "react";
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const Footer = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  const year = new Date().getFullYear()
  return <footer className="footer">
    
  
    <Container>
      <Row>
        
        <Col className="text-center social" lg='12'>
        <p className="socialp">
          <a href="https://www.instagram.com/cbitosc/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.facebook.com/cbitosc/" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-fill"></i>
          </a>
          <a href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09" target="_blank" rel="noopener noreferrer">
          <i class="ri-twitter-fill"></i>
          </a>
          <a href="https://www.linkedin.com/company/cbitosc/" target="_blank" rel="noopener noreferrer">
          <i class="ri-linkedin-line"></i>
          </a>
        </p>
        </Col>





        <Col lg='12'>
          <p className="footer__copyright">OpenSys <i class="ri-copyright-line"></i>  {year}. All rights reserved. </p>
          
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;