import { motion } from "framer-motion";
import { CustomMobileLink, MotionA } from "./CustomLink";
import { GithubIcon, Instagrame, LinkedInIcon, MoonIcon, SunIcon, Whatsapp } from "../Icons";

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
				{/* <CustomMobileLink href="/others" title={"Others"} toggel={drawerHandle} /> */}
			</nav>
			{/* ICONS OF NAVBAR */}
			{/* =============== */}
			<nav className="flex items-center justify-center flex-wrap mt-4">
				<MotionA className="ml-0" href="https://wa.me/+923064155025" text={<Whatsapp />} />
				<MotionA href="https://github.com/hamzanafasat" text={<GithubIcon />} />
				<MotionA href="https://www.instagram.com/crazy_hami_" text={<Instagrame />} />
				<MotionA href="https://www.linkedin.com/in/hamza-nafasat" text={<LinkedInIcon />} />
				{/* LIGHT AND DARK MOOD BUTTON */}
				{/* ========================== */}
				<button
					onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={`w-8 ml-3 flex items-center justify-center rounded-full p-1  ${
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
		<button
			onClick={drawerHandle}
			className="flex-col justify-center items-center hidden lg:flex mt-2"
		>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-6 
                rounded-none ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1 "} `}
			/>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-6 
                rounded-none my-['1px'] ${isOpen ? "opacity-0" : "opacity-100"} `}
			/>
			<span
				className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-6 
                rounded-none ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1 "}`}
			/>
		</button>
	);
};
