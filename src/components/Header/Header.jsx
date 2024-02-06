import React, { useRef, useEffect } from "react";
import "./header.css";
import logo2 from "../../assets/images/opensys-logo.png";
import logo from "../../assets/images/LogoCOSC.svg";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
const Header = () => {
	const headerRef = useRef(null);
	const menuRef = useRef(null);

	// please note that this header is no longer in use and is
	// replaced by Navbar.jsx because it was easier to implement using
	//javascript and tailwindcss

	const menuToggle = () => menuRef.current.classList.toggle("active__menu");

	useEffect(() => {
		const stickyHeaderFunc = () => {
			window.addEventListener("scroll", () => {
				if (
					document.body.scrollTop > 80 ||
					document.documentElement.scrollTop > 80
				) {
					headerRef.current.classList.add("sticky__header");
				} else {
					headerRef.current.classList.remove("sticky__header");
				}
			});
		};

		stickyHeaderFunc();
		return () => window.removeEventListener("scroll", stickyHeaderFunc);
	}, []);
	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<nav role="navigation">
						<div id="menuToggle">
							<input type="checkbox" />
							<span></span>
							<span></span>
							<span></span>
							<ul id="menu">
								<a href="#hero_content">
									<li>Home</li>
								</a>
								<a href="#about">
									<li>About</li>
								</a>
								<a href="#events">
									<li>Events</li>
								</a>
								<a href="#faq">
									<li>FAQs</li>
								</a>
								<a href="#contact">
									<li>Contact</li>
								</a>
							</ul>
						</div>
					</nav>
					<div className="nav__wrapper">
						<div className="cosclogo">
							<Link to="/home">
								<img src={logo} alt="logo" />
							</Link>
							<p>|</p>
							<Link to="/home">
								<img src={logo2} alt="logo" />
							</Link>
						</div>

						<div
							className="navigation"
							ref={menuRef}
							onClick={menuToggle}
						>
							<ul className="menu">
								<li className="nav__item">
									<a href="#hero_content">Home</a>
								</li>
								<li className="nav__item">
									<a href="#about">About</a>
								</li>
								<li className="nav__item">
									<a href="#events">Events</a>
								</li>
								<li className="nav__item">
									<a href="#faq">FAQs</a>
								</li>
								<li className="nav__item">
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="mobile__menu">
							<span onClick={menuToggle}>
								<i className="ri-menu-line"></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
