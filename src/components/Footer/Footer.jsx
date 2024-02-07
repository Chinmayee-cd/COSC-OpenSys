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
						<div className="socialp flex flex-col items-center">
							<div className="oo">
								CONTACT INFORMATION: <br /> <br />
							</div>
							<br />
							<div className="loc flex">
								<div className="flex flex-col items-center text-[16px] py-6">
									<div>
										LOCATION:
										<br />
										Chaitanya Bharathi Institute of
										Technology, <br />
										Gandipet, Hyderabad - 500075.
									</div>
								</div>
								<div className="vis flex flex-col items-center">
									<p>
										VISIT US: <br />
										<a
											className="border-b-yellow-400 text-yellow-400 border-b-2 pb-2 border-dashed hover:text-cyan-500 hover:border-b-cyan-500 transition duration-500 ease-out"
											href="https://cbitosc.github.io/"
										>
											CBIT Open Source Community
										</a>
										<br /> <br />
										Email: <br />
										<a
											className="border-b-yellow-400 text-yellow-400 border-b-2 pb-1 border-dashed hover:text-cyan-500 hover:border-b-cyan-500 transition duration-500 ease-out"
											href="mailto:cosc@cbit.ac.in"
										>
											cosc@cbit.ac.in
										</a>
									</p>
								</div>
								<br />
								<div
									id="contactdiv"
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									className="con flex justify-center"
								>
									<p className="flex justify-center items-center">
										CONTACT: <br />
										Sai Kiran:+91 7995166572 <br /> Akil:
										+91 9442621187
									</p>
								</div>
							</div>
							<br />
							<br />
							<div className="sm">
								<p>
									Our Social Media Handles: <br /> <br />
								</p>{" "}
							</div>
							<div className="icon-container">
								<div className="one">
									<a
										href="https://www.instagram.com/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-instagram-line"></i>
									</a>
								</div>
								<div className="three">
									<a
										href="https://www.facebook.com/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-facebook-circle-fill"></i>
									</a>
								</div>
								<div className="two">
									<a
										href="https://twitter.com/cbitosc?t=rWGqPsaidSTGfA8FpwPPUw&s=09"
										target="_blank"
										rel="noopener noreferrer"
									>
										<RiTwitterXFill />
									</a>
								</div>
								<div className="four">
									<a
										href="https://www.linkedin.com/company/cbitosc/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="ri-linkedin-line"></i>
									</a>
								</div>
							</div>
						</div>
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
