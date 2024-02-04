import React, {useRef,useEffect} from "react";

import { NavLink, useNavigate } from "react-router-dom";
import './header.css';
import logo2 from '../../assets/images/opensys-logo.png'
import logo from '../../assets/images/LogoCOSC.svg'
import { Container, Row } from "reactstrap";

import { Link } from "react-router-dom";

const Header = () => {

  const headerRef = useRef(null);
  
  
  
 

  const menuRef = useRef(null);
  const navigate = useNavigate();
 

  


 
 

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
        <div className="cosclogo">
            <Link to='/home'><img src={logo} alt="logo" /></Link>
            <p>|</p>
            <Link to='/home'><img src={logo2} alt="logo" /></Link>
          </div>


           

            <div className="nav__icons">
                 
            </div>

            

        </div>
      </Row>
    </Container>
  </header>
};

export default Header;