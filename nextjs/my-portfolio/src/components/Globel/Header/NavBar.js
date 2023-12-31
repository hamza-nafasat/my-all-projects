import Logo from "./Logo";
import { useState } from "react";
import { MoonIcon, SunIcon } from "../Icons";
import { Drawer, DrawerButton } from "./Drawer";
import { CustomLink, MotionA } from "./CustomLink";
import useThemeSwitcher from "@/components/Hook/useThemeSwitcher";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "../Icons";

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);
	const drawerHandle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header
			className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light 
						lg:px-16 md:px-12 sm:px-8"
		>
			{/* DRAWER */}
			{/* ============ */}
			<DrawerButton drawerHandle={drawerHandle} isOpen={isOpen} />
			{isOpen ? <Drawer mode={mode} setMode={setMode} drawerHandle={drawerHandle} /> : null}
			{/*  NORMAL NAVBAR */}
			{/* ============== */}
			<div className="w-full flex lg:hidden items-center justify-between">
				{/* MAIN LINKS OF NAVBAR */}
				{/* ==================== */}
				<nav>
					<CustomLink href="/" title={"Home"} className="mr-4" />
					<CustomLink href="/about" title={"About"} className="mx-4" />
					<CustomLink href="/projects" title={"Projects"} className="mx-4" />
					<CustomLink href="/articles" title={"Articles"} className="ml-4" />
				</nav>
				{/* ICONS OF NAVBAR */}
				{/* =============== */}
				<nav className="flex items-center justify-center flex-wrap">
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
							mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
						}`}
					>
						{mode === "dark" ? <SunIcon /> : <MoonIcon />}
					</button>
				</nav>
			</div>
			{/* LOGO */}
			{/* ==== */}
			<div className="absolute z-10 left-[50%] top-2 translate-x-[-50%] lg:-right-1 lg:top-4 lg:left-auto">
				<Logo text={"HN"} />
			</div>
		</header>
	);
};

export default NavBar;
