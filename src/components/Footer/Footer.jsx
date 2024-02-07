import React, { useEffect } from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { RiTwitterXFill } from "react-icons/ri";
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
						<p className="socialp flex flex-col items-center">
							
							<br />
							<br />
							<div class="sm">
								<p>
									Our Social Media Handles: <br /> <br />
								</p>{" "}
							</div>
							<div className="icon-container">
								<div class="one">
									<a
										href="https://www.instagram.com/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-instagram-line"></i>
									</a>
								</div>
								<div class="three">
									<a
										href="https://www.facebook.com/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-facebook-circle-fill"></i>
									</a>
								</div>
								<div class="two">
									<a
										href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09"
										target="_blank"
										rel="noopener noreferrer"
									>
										<RiTwitterXFill />
									</a>
								</div>
								<div class="four">
									<a
										href="https://www.linkedin.com/company/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-linkedin-line"></i>
									</a>
								</div>
							</div>
						</p>
					</Col>

					<Col lg="12">
						<p className="footer__copyright">
							OpenSys <i className="ri-copyright-line"></i> {year}
							. All rights reserved.{" "}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
