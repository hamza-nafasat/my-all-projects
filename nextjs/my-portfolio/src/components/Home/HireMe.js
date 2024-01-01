import React from "react";
import { CircularText } from "../Globel/Icons";
import Link from "next/link";

const HireMe = () => {
	return (
		<div
			className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
			lg:left-1/2 lg:-translate-x-1/2 lg:bottom-auto lg:top-0 lg:absolute"
		>
			<div className="w-48 h-auto flex items-center justify-center relative lg:w-24">
				<CircularText className={"fill-dark dark:fill-light animate-spin-slow"} />
				<Link
					href={"mailto:gyromaster55@gmail.com"}
					className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
					-translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid border-dark 
					w-20 h-20 rounded-full font-semibold hover:bg-light hover:font-extrabold hover:text-dark 
					transition-all duration-300 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light
					dark:border-light lg:h-11 lg:w-11 lg:text-[10px]"
				>
					Hire Me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
