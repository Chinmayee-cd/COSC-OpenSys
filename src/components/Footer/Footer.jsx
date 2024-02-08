import React, { useEffect } from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import logo2 from "../../assets/images/opensys-logo.png";
import logo from "../../assets/images/LogoCOSC.svg";
const Footer = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const year = new Date().getFullYear();
	return (
		<footer className="footer" id="contact">
			<Container>
				<Row>
					<Col className="text-center social footero" lg="12">
						<div className="footerbox">
							<div className="alic">
								<div className="boxo">
									<div className="cosclogofooter">
										<img src={logo} alt="logo" />

										<p>|</p>

										<img src={logo2} alt="logo" />
									</div>
								</div>
								<div className="boxo">
									<h2 className="font-bold mb-3">
										Related links:
									</h2>
									<div className="events">
										<a
											className="m-1 text-white linko"
											href="https://cbitosc.github.io"
										>
											{" "}
											Our Website
										</a>
										<a
											className="m-1 text-white linko"
											href="https://cbitosc.github.io/hacktoberfest22/"
										>
											HactoberFest'23
										</a>
										<a
											className="m-1 text-white linko"
											href="https://cbit.ac.in"
										>
											CBIT
										</a>
									</div>
								</div>
								<div className="boxo">
									<h2 className="font-bold">
										Our social media handles:
									</h2>
									<div className="socialhandles">
										<a
											href="https://www.instagram.com/cbitosc/"
											aria-label="COSC Instagram"
										>
											<div className="socialround ig">
												<i class="ri-instagram-fill"></i>
											</div>
										</a>
										<a
											href="https://www.facebook.com/cbitosc/"
											aria-label="COSC Facebook"
										>
											<div className="socialround fb">
												<i class="ri-facebook-circle-fill"></i>
											</div>
										</a>
										<a
											href="https://twitter.com/cbitosc"
											aria-label="COSC Twitter"
										>
											<div className="socialround x">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
												>
													<path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
												</svg>
											</div>
										</a>
										<a
											href="https://www.linkedin.com/company/cbitosc/"
											aria-label="COSC LinkedIn"
										>
											<div className="socialround li">
												<i class="ri-linkedin-fill"></i>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</Col>

					<Col lg="12">
						<p className="footer__copyright mb-4 mt-0">
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
