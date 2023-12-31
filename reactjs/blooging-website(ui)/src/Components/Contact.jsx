import React, { useState } from "react";

const Contact = () => {
	const [isFormSubmitted, setFormSubmitted] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<div className="mx-6 space-y-10 py-8">
			<h1 className="text-4xl ml-4 font-extrabold text-black mb-6">Contact Us</h1>

			<div className="bg-[#f5f5f5] p-4 shadow-lg rounded-lg mt-4 ">
				<h2 className="text-2xl ml-4 font-semibold text-blue-600 mb-2">
					Contact Form
				</h2>
				{isFormSubmitted ? (
					<p className="text-green-500 font-bold">Thank you for your message!</p>
				) : (
					<form onSubmit={onSubmit} className="bg-[#f5f5f5] p-4  rounded-lg">
						<div className="mb-4">
							<label
								className="block text-gray-700 font-semibold mb-2"
								htmlFor="name"
							>
								Name
							</label>
							<input
								className="w-full p-2 border border-blue-500 outline-blue-600 rounded-md "
								type="text"
								id="name"
								name="name"
								required
								autoFocus
								placeholder="Your Name"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-semibold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="w-full p-2 border border-blue-500 outline-blue-600 rounded-md "
								type="email"
								id="email"
								name="email"
								required
								placeholder="Your Email"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 font-semibold mb-2"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								className="w-full p-2 border border-blue-500 outline-blue-600 rounded-md "
								id="message"
								name="message"
								rows="4"
								required
								placeholder="Your Message"
							/>
						</div>
						<button
							className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
							type="submit"
						>
							Submit
						</button>
					</form>
				)}
			</div>
			<div className="bg-[#f5f5f5] p-4 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-blue-600 mb-2">Get in Touch</h2>
				<p className="text-gray-700">
					Your feedback is important to us, and we're eager to connect with our
					valued readers. If you have any questions, suggestions, or simply want to
					reach out and say hello, we invite you to contact us. You can use the
					contact details provided below, or if you prefer, fill out the contact
					form, and we'll get back to you promptly. We appreciate your engagement and
					look forward to hearing from you!
				</p>
			</div>
			<div className="bg-[#f5f5f5] p-4 shadow-lg rounded-lg mt-4">
				<h2 className="text-2xl font-semibold text-blue-600 mb-2">
					Contact Information
				</h2>
				<p className="text-gray-700">Email: contact@yourblog.com</p>
				<p className="text-gray-700">Phone: +1 (123) 456-7890</p>
				<p className="text-gray-700">Address: 123 Main St, City, Country</p>
			</div>
		</div>
	);
};

export default Contact;
