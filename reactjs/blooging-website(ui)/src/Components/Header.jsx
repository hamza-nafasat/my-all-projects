import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-gradient-to-l from-blue-800 to-purple-800 p-4 text-white">
			<div className="md:space-x-6 space-y-5 mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center">
					<Link
						to="/"
						className="text-4xl md:text-4xl font-extrabold text-gray-100 hover:text-gray-300 transition duration-300 text-center transform hover:scale-110"
					>
						Awesome Blogs
					</Link>
				</div>

				<nav className="space-x-14 md:space-x-5 sm:space-x-32 lg:space-x-8 ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							` text-2xl hover:text-blue-300  transition-text duration-300 font-semibold ${
								isActive ? "underline " : "no-underline "
							}`
						}
					>
						Home
					</NavLink>

					<NavLink
						to="/about"
						className={({ isActive }) =>
							` text-2xl hover:text-blue-300  transition-text duration-300 font-semibold ${
								isActive ? "underline " : "no-underline "
							}`
						}
					>
						About
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							` text-2xl hover:text-blue-300  transition-text duration-300 font-semibold ${
								isActive ? "underline " : "no-underline "
							}`
						}
					>
						Contact
					</NavLink>
				</nav>
				<div className="flex w-full sm:w-4/5 md:w-auto items-center justify-between space-x-4 pb-2">
					<input
						type="text"
						placeholder="Search blogs..."
						className="bg-[#f5f5f5] rounded-md p-2 text-black focus:outline-none shadow-md transition duration-300 w-full  transform hover:scale-105"
					/>
					<button className="bg-blue-400 text-white rounded-md p-2 ml-2 hover:bg-blue-500 transition duration-300 transform hover:scale-110 ">
						Search
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
