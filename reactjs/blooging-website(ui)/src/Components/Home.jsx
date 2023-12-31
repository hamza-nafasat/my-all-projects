import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../Blogs/Blogs";

const Home = () => {
	return (
		<div className=" mx-auto py-8 flex flex-wrap">
			<h1 className="w-full text-4xl font-extrabold text-gray-900 mb-6 text-center">
				Welcome to My Awesome Blog
			</h1>
			{blogPosts.map((post, index) => (
				<div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
					<div className="bg-[#f5f5f5] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
						<Link to={`#`}>
							<img
								src={`${post.img}`}
								alt={post.title}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
						</Link>
						<div className="p-4">
							<h2 className="text-2xl font-semibold text-gray-800 mb-2">
								<Link to={`#`}>{post.title}</Link>
							</h2>
							<p className="text-gray-600 text-sm">{post.date}</p>
							<p className="text-gray-700 mt-2">{post.content}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
