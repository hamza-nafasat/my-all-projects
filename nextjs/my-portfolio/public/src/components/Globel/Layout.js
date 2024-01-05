import React from "react";

const Layout = ({ children, classname = "" }) => {
	return (
		<>
			<div
				className={`${classname} w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 
				xl:p-24 lg:p-16 md:p-12 sm:p-6`}
			>
				{children}
			</div>
		</>
	);
};

export default Layout;
