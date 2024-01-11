import React from "react";
import Layout from "../Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className=" w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium
				text-lg sm:text-base"
		>
			<Layout classname="py-8 flex items-center justify-between lg:flex-col lg:py-6">
				<span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
				<div className="flex items-center lg:py-2">
					Made By{" "}
					<span className="text-primary dark:text-primaryDark text-2xl px-1 ">&#9825;</span>{" "}
					<p className="underline underline-offset-2">Hamza Nafasat</p>
				</div>
				<Link
					target="_blank"
					href={"mailto:gyromaster55@gmail.com"}
					className="underline underline-offset-2"
				>
					Say Hello
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
