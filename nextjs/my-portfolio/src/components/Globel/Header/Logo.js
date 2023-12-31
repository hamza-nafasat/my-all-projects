import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = ({ text, className = "" }) => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href={"/"}
				className={`w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl
				font-bold border-2 border-solid border-transparent dark:border-light xl:text-xl xl:w-14 xl:h-14
				lg:w-12 lg:h-12 lg:text-base ${className}`}
				whileHover={{
					backgroundColor: [
						"#121212",
						"rgba(131,58,180,1)",
						"#05fa1d",
						"rgba(252,176,69,1)",
						"rgba(253,29,29,1)",
						"#05fa1d",
						"rgba(131,58,180,1)",
						"#121212",
					],
					transition: { duration: 2, repeat: Infinity },
				}}
			>
				{text}
			</MotionLink>
		</div>
	);
};

export default Logo;
