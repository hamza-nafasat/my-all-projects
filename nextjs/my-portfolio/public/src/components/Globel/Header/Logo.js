import Link from "next/link";
import { motion } from "framer-motion";
import { logo } from "../Text";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = ({ className = "" }) => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href={"/"}
				className={`w-32 h-auto flex items-center justify-center rounded-full xl:w-24 lg:w-20
				hover:animate-pulse hover:md:animate-none ${className}`}
				transition={{ duration: 300 }}
			>
				<Image width={500} height={500} priority src={logo} alt="HN" />
			</MotionLink>
		</div>
	);
};

export default Logo;
