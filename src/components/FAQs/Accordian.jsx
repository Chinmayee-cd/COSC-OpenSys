import React, { useState, memo } from "react";

const Accordian = memo(({ question, answer }) => {
	const [accordianOpen, setAccordianOpen] = useState(false);

	return (
		<div className="py-2">
			<button
				className="flex justify-between w-full font-sans text-white"
				onClick={() => setAccordianOpen(!accordianOpen)}
			>
				<span>{question}</span>
				<svg
					className={`fill-[white] shrink-0 ml-8 transition origin-center duration-300 ${
						accordianOpen ? "rotate-45" : ""
					}`}
					width="16"
					height="16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className="rotate-90 origin-center"
					/>
					<rect y="7" width="16" height="2" rx="1" />
				</svg>
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-100 ease-in-out text-slate-200 text-sm ${
					accordianOpen
						? "grid-rows-[1fr] opacity-100"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">{answer}</div>
			</div>
		</div>
	);
});

export default Accordian;
