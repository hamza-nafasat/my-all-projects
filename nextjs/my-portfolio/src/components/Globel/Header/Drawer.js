import { motion } from "framer-motion";
import { CustomMobileLink, MotionA } from "./CustomLink";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "../Icons";

export const Drawer = ({ mode, setMode, drawerHandle }) => {
	return (
		<motion.div
			initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
			animate={{ scale: 1, opacity: 1, transition: { duration: 0.3 } }}
			className="min-w-[70vw] sm:min-w-[90vw] flex flex-col items-center justify-between fixed top-1/2 
			left-1/2 z-30 bg-dark/90 dark:bg-light/75 text-light dark:text-dark rounded-lg 
			backdrop-blur-md py-32"
		>
			{/* MAIN LINKS OF NAVBAR */}
			{/* ==================== */}
			<nav className="flex flex-col items-center justify-center">
				<CustomMobileLink href="/" title={"Home"} toggel={drawerHandle} />
				<CustomMobileLink href="/about" title={"About"} toggel={drawerHandle} />
				<CustomMobileLink href="/projects" title={"Projects"} toggel={drawerHandle} />
				<CustomMobileLink href="/articles" title={"Articles"} toggel={drawerHandle} />
			</nav>
			{/* ICONS OF NAVBAR */}
			{/* =============== */}
			<nav className="flex items-center justify-center flex-wrap mt-4">
				<MotionA href="https://twitter.com" text={<TwitterIcon />} className="ml-0" />
				<MotionA href="https://github.com" text={<GithubIcon />} />
				<MotionA href="https://linkedin.com" text={<LinkedInIcon />} />
				<MotionA href="https://dribbble.com" text={<DribbbleIcon />} />
				<MotionA href="https://pinterest.com" text={<PinterestIcon />} className="bg-light" />
				{/* LIGHT AND DARK MOOD BUTTON */}
				{/* ========================== */}
				<button
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`w-6 ml-3 flex items-center justify-center rounded-full p-1  ${
						mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
					}`}
				>
					{mode === "dark" ? <SunIcon /> : <MoonIcon />}
				</button>
			</nav>
		</motion.div>
	);
};

export const DrawerButton = ({ drawerHandle, isOpen }) => {
	return (
		<button onClick={drawerHandle} className="flex-col justify-center items-center hidden lg:flex mt-2">
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
                rounded-none ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1 "} `}
			/>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
                rounded-none my-0.5 ${isOpen ? "opacity-0" : "opacity-100"} `}
			/>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 
                rounded-none ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1 "}`}
			/>
		</button>
	);
};
