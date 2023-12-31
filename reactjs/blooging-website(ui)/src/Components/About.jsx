import React from "react";

const About = () => {
	return (
		<div className=" mx-auto py-8">
			<h1 className="text-4xl ml-4 block font-extrabold text-gray-900 mb-6">
				About Us
			</h1>
			<div className="bg-[#f5f5f5] p-4 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Story</h2>
				<p className="text-gray-700">
					Welcome to our blog! our story is a journey of passion and dedication to
					sharing valuable knowledge and experiences with our readers. It all began
					with a group of like-minded individuals who shared a common create a
					platform where people could find insightful content on a wide range of
					topics. We believe that every word written, every idea shared, and every
					question answered has the power to make a difference in someone's life. Our
					team is committed to providing well-researched and engaging articles that
					inspire, inform, and entertain. We're not just writers; we're storytellers,
					and our story continues to unfold with every article we publish. Join us on
					this remarkable voyage of discovery, learning, and growth, as we strive to
					make the online world a more informed and connected place.
				</p>
			</div>
			<div className="bg-[#f5f5f5] p-4 shadow-lg rounded-lg mt-4">
				<h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
				<p className="text-gray-700">
					our mission is clear and unwavering: to inspire, educate, and empower our
					readers. We believe in the transformative power of knowledge and the impact
					it can have on people's lives. Our dedicated team of writers, researchers,
					and experts is committed to bringing you high-quality, informative, and
					engaging content that enriches your understanding of our Blogs . We are
					driven by the belief that everyone deserves access to valuable information,
					and we strive to be your trusted source for Whether it's sharing in-depth
					guides, thought-provoking insights, or practical tips, our mission is to be
					your partner on your journey towards personal and professional growth. Join
					us in this pursuit, and together, we'll explore, learn, and grow.
				</p>
			</div>
			<div className="bg-[#f5f5f5] p-4 shadow-md rounded-lg mt-4">
				<h2 className="text-2xl font-semibold text-blue-600 mb-2">Meet the Team</h2>
				<ul className="text-gray-700">
					<li>Fazal Rathore - Founder</li>
					<li>Hamza Nafasat - Editor</li>
					<li>Shoib Ahmed - Writer</li>
					<li>M.Saim - Photographer</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
