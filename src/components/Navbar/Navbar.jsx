"use client";
import { useState, useEffect } from "react";
import { navLinks } from "../constants/data";
const Navbar = () => {
	const [active, setActive] = useState("home");
	const [toggle, setToggle] = useState(false);
	const [navbarColor, setNavbarColor] = useState("bg-transparent");
	const [initialRender, setInitialRender] = useState(true);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setNavbarColor("backdrop-blur-lg");
		} else {
			setNavbarColor("bg-transparent");
		}
	};

	// Change navbar states on scroll
	useEffect(() => {
		setInitialRender(false);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ threshold: 0.3 }
		);

		window.addEventListener("load", () => {
			const sections = document.querySelectorAll("section[id]");
			const footer = document.querySelector("footer");
			sections.forEach((section) => {
				observer.observe(section);
			});

			observer.observe(footer);
		});

		window.addEventListener("scroll", changeNavbarColor);
		return () => {
			window.removeEventListener("scroll", changeNavbarColor);
		};
	}, []);

	return (
		<nav
			style={{
				zIndex: "9999",
				backdropFilter: "blur(14px)",
				WebkitBackdropFilter: "blur(4px)",
			}}
			className={`w-full flex flex-wrap left-0 right-0 p-6 justify-between items-center navbar opacity-90 transition-colors duration-300 z-50 fixed ${navbarColor}`}
		>
			<div className="m-[-10px] flex items-center">
				<a href="http://cbitosc.github.io" className="px-2">
					<img
						src="/LogoCOSC.svg"
						alt="OpenSys"
						width={60}
						height={60}
						className="sm: w-[50px] h-[50px]"
					/>
				</a>
				<p>|</p>
				<a href="http://cbitosc.github.io" className="px-2">
					<img
						src="/logo4x.png"
						alt="OpenSys"
						height={60}
						className="sm: w-[auto] h-[50px]"
					/>
				</a>
			</div>
			<ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-20">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						}`}
					>
						<a
							href={`#${nav.id}`}
							className={`text-sm ${
								nav.id === active
									? "text-cyan-600 font-bold"
									: "text-white"
							} transition duration-300 hover:!text-amber-400`}
						>
							{nav.title}
						</a>
					</li>
				))}
			</ul>
			<div className="sm:hidden flex justify-end items-center">
				<img
					style={{ width: "30px", height: "30px" }}
					src={`${toggle ? "/close.svg" : "/menu.svg"}`}
					alt="OpenSys"
					width={30}
					height={30}
					className="mr-[-5px]"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex animate-from-right" : "hidden"
					} ${
						initialRender ? "transform translate-x-full" : ""
					} flex-col absolute top-20 right-0 backdrop-blur-md bg-[#1b041e] p-4 rounded-xl mr-4`}
				>
					<ul className="flex justify-end items-center flex-1 flex-col font-sans ">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`${
									index === navLinks.length - 1
										? "mr-0"
										: "mb-4"
								}`}
							>
								<a
									href={`#${nav.id}`}
									className="text-white text-xl"
								>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
