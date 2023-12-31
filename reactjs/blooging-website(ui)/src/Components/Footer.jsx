import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto flex flex-wrap justify-between">
				<div className="w-full md:w-1/2 lg:w-1/4 mb-6">
					<h2 className="text-3xl font-bold text-blue-400 mb-3">Quick Links</h2>
					<ul className="list-none p-0">
						<li className="mb-2">
							<Link to="/" className="hover:text-blue-400 transition duration-300">
								Home
							</Link>
						</li>
						<li className="mb-2">
							<Link
								to="/about"
								className="hover:text-blue-400 transition duration-300"
							>
								About Us
							</Link>
						</li>
						<li className="mb-2">
							<Link
								to="/contact"
								className="hover:text-blue-400 transition duration-300"
							>
								Contact Us
							</Link>
						</li>
						<li className="mb-2">
							<Link
								to="/blog"
								className="hover:text-blue-400 transition duration-300"
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-full md:w-1/2 lg:w-1/4 mb-6">
					<h2 className="text-3xl font-bold text-blue-400 mb-3">Social Media</h2>
					<ul className="list-none p-0">
						<li className="mb-2">
							<Link to="#" className="hover:text-blue-400 transition duration-300">
								Facebook
							</Link>
						</li>
						<li className="mb-2">
							<Link to="#" className="hover:text-blue-400 transition duration-300">
								Twitter
							</Link>
						</li>
						<li className="mb-2">
							<Link to="#" className="hover:text-blue-400 transition duration-300">
								Instagram
							</Link>
						</li>
						<li className="mb-2">
							<Link to="#" className="hover:text-blue-400 transition duration-300">
								Github
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-full md:w-1/2 lg:w-1/4 mb-6">
					<h2 className="text-3xl font-bold text-blue-400 mb-3">About Us</h2>
					<p className="mb-3 text-gray-400">
						We provide information about our society to make you feel comfortable. We
						hope you'll enjoy it.
					</p>
					<p className="text-gray-400">
						&copy; {new Date().getFullYear()} Hamza Nafasat. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
