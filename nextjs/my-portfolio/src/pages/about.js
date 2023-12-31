import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Skills from "@/components/About/Skills";
import Layout from "@/components/Globel/Layout";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import { SIMPLEOVERVIEW } from "@/components/Globel/Text";
import AnimatedText from "@/components/Globel/AnimatedText";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
// import profilePic from "../../public/images/profile/myProfile.jpg";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumber = ({ value }) => {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });
	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);
	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);
	return <span ref={ref} />;
};

const about = () => {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="the page about hamzanafasat" />
			</Head>
			<TransitionEffect />
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout classname="pt-16 lg:px-8">
					<AnimatedText
						text={"Discover the Story"}
						className="!mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
						{/* PROFILE TEXT  */}
						{/* ============ */}
						<div
							className="col-span-3 xl:col-span-5 flex flex-col items-start text-left lg:text-justify 
							justify-start md:order-2 md:col-span-8 lg:text-sm"
						>
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								Biography
							</h2>
							<p className="font-semibold">
								Asslam o Alikum! I'm Hamza Nafasat, a Full Stack Developer. I love
								making websites look cool and work well. I know things like HTML,
								CSS, Tailwind, JavaScript, React, ChakraUI and Next.js to create
								awesome sites.
							</p>
							<p className="font-semibold my-4">
								I also learned backend stuff using Node.js, Express, MongoDB, JWT,
								Authentication and Mongoose. It sounds fancy, but it helps me make
								websites do even cooler things and manage data better.
							</p>
							<p className="font-semibold">
								I enjoy solving problems and want to help you bring your ideas to
								life. Whether it's making the website look good or making sure
								everything works smoothly behind the scenes, I'm here for it. Let's
								chat about your project and make something great!
							</p>
						</div>
						{/* PROFILE IMAGE  */}
						{/* ============== */}
						<div
							className="col-span-3 xl:col-span-3 relative h-max rounded-2xl border border-solid
							border-dark p-8 dark:border-light bg-light dark:bg-dark 
							md:order-1 md:col-span-8 xl:mt-10 md:mx-[30%] sm:mx-[20%] xs:mx-4"
						>
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="Hamza Nafasat"
								className="w-full h-auto rounded-2xl lg:mx-auto"
								priority
								sizes="(max-width:768px) 100vw,
								(max-width:1200px) 50vw
								33vw"
							/>
						</div>
						{/* PROFILE DETAILS  */}
						{/* ================ */}
						<div
							className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3
						xl:items-center"
						>
							{SIMPLEOVERVIEW.map((item, i) => (
								<div
									key={i + "fsakdf" + 12 + i}
									className="flex flex-col items-end justify-center xl:items-center"
								>
									<span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
										<AnimatedNumber value={item.num} />+
									</span>
									<h2
										className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center 
										md:text-lg sm:text-base xs:text-xs mb-4"
									>
										{item.text}
									</h2>
								</div>
							))}
						</div>
					</div>
					{/* OTHER DETAILS  */}
					{/* ============== */}
					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
