import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import HireMe from "@/components/Home/HireMe";
import Layout from "@/components/Globel/Layout";
import { LinkArrow } from "@/components/Globel/Icons";
import AnimatedText from "@/components/Globel/AnimatedText";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TransitionEffect />
			<main className="flex items-center text-dark dark:text-light w-full min-h-screen">
				<Layout classname="pt-0 xl:pt-6 md:pt-16 sm:pt-8">
					<div className="flex items-center justify-between w-full md:flex-col">
						{/* PROFILE IMAGE  */}
						{/* ============== */}
						<div className="w-1/2 lg:hidden md:inline-block md:w-full">
							<Image
								priority
								src={profilePic}
								alt="Hamza Nafasat"
								className="w-full h-auto"
								sizes="(max-width:768px) 100vw,
								(max-width:1200px) 50vw
								50vw"
							/>
						</div>
						<div className="w-1/2 flex flex-col items-center self-center lg:w-full">
							{/* PROFILE TEXT  */}
							{/* ============== */}
							<AnimatedText
								text={"Turning Vision Into Reality With Code Implementation"}
								className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl
								sm:!text-3xl"
							/>
							<p className="my-4 text-base font-medium lg:text-center md:text-sm sm:text-xs">
								As a full-stack developer, I turn ideas into great websites. Like
								painting with code, I'm patient and creative. I handle everything to
								make websites work well and help people. My goal is to make things
								easy and awesome for everyone!
							</p>
							{/* LINKS  */}
							{/* ====== */}
							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href="/HamzaNafasatResume.pdf"
									target="_blank"
									download={true}
									className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
									font-semibold hover:bg-light hover:text-dark border-solid border-transparent
									hover:border-dark border-2 transition-all duration-300 hover:dark:bg-dark
									dark:bg-light hover:dark:text-light dark:text-dark hover:dark:border-light
									md:p-2 md:px-4 md:text-base"
								>
									Resume
									<LinkArrow className={"w-6 ml-1"} />
								</Link>
								<Link
									href="mailto:gyromaster55@gmail.com"
									target="-blank"
									className="ml-4 text-lg font-medium capitalize dark:text-light underline
									hover:scale-110 transition-all duration-300 text-dark md:text-base"
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>
				<HireMe />
				{/* BULB IMAGE  */}
				{/* =========== */}
				<div className="absolute right-8 xl:right-2 bottom-8 inline-block w-24 lg:hidden">
					<Image
						priority
						src={lightBulb}
						alt="light bulb"
						className="h-auto w-full"
						sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
					/>
				</div>
			</main>
		</>
	);
}