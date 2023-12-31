import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// CUSTOM LINK FOR NORMAL NAVBAR
// =============================
export const CustomLink = ({ href = "", title = "", className = "" }) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full
				transition-[width] ease-in duration-300 dark:bg-light ${router.asPath === href ? "w-full" : "w-0"}`}
			>
				&nbsp;
			</span>
		</Link>
	);
};
// CUSTOM LINK FOR NORMAL DRAWER
// =============================
export const CustomMobileLink = ({ href = "", title = "", className = "", toggel }) => {
	const router = useRouter();
	const handelClick = () => {
		toggel();
		router.push(href);
	};
	return (
		<button className={`${className} relative group my-2`} onClick={handelClick}>
			{title}
			<span
				className={`h-[1px] inline-block bg-light/100 absolute left-0 -bottom-0.5 group-hover:w-full
				transition-[width] ease-in duration-300 dark:bg-dark ${router.asPath === href ? "w-full" : "w-0"}`}
			>
				&nbsp;
			</span>
		</button>
	);
};
// CUSTOM a TAG WITH MOTION
// ========================
export const MotionA = ({ href = "", className = "", text = "" }) => {
	return (
		<motion.a
			href={href}
			target="_blank"
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.9 }}
			className={`w-6 mx-3 rounded-full sm:mx-1 ${className}`}
		>
			{text}
		</motion.a>
	);
};
