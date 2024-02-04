import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";

import opensyslogo from '../assets/images/opensys-logo.png'

const Home = () => {
 
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                
                <div className="h21">
                  <h2>OpenSys</h2>
                </div>
                <div className="h22 mt-0">
                  <h2 className="gradvpy">The Open-Source symposium</h2>
                </div>

                <p>
                  
A grand symphony of expansive technical spectacles!
                </p>

                <motion.button
                  className="buy__button"
                  
                >
                  Register
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img className="opensys-logo" src={opensyslogo} alt="" />
              </div>
              
            </Col>

           
          </Row>
        </Container>
      </section>

      <section id="about" className="about">
      </section>

      
    </Helmet>
  );
};

export default Home;
