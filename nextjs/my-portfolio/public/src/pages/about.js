import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Skills from "@/components/About/Skills";
import Layout from "@/components/Globel/Layout";
import Education from "@/components/About/Education";
import AnimatedText from "@/components/Globel/AnimatedText";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { SIMPLEOVERVIEW, AboutPageDp } from "@/components/Globel/Text";
import { ProfileText_2, ProfileText_1, ProfileText_3 } from "@/components/Globel/Text";

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
				<title>Portfoli | About</title>
				<meta name="description" content="the page about hamzanafasat" />
			</Head>
			<TransitionEffect />
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout classname="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0">
					<AnimatedText
						text={"Coding Journey"}
						className="!mb-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:!mb-4"
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
						{/* PROFILE TEXT  */}
						{/* ============ */}
						<div
							className="col-span-3 xl:col-span-5 flex flex-col items-start text-left
							lg:text-justify justify-start md:order-2 md:col-span-8 lg:text-sm"
						>
							<h2
								className="mb-4 text-lg font-bold uppercase text-dark/75
							dark:text-light/75"
							>
								Biography
							</h2>
							<p>{ProfileText_1}</p>
							<p className="my-4">{ProfileText_2}</p>
							<p>{ProfileText_3}</p>
						</div>
						{/* PROFILE IMAGE  */}
						{/* ============== */}
						<div
							className="col-span-3 xl:col-span-3 relative h-max   rounded-2xl border border-solid
							border-dark p-8 dark:border-light bg-light dark:bg-dark 
							md:order-1 md:col-span-8 xl:mt-10 md:mx-[30%] sm:mx-[20%] xs:mx-4"
						>
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={AboutPageDp}
								alt="Hamza Nafasat"
								width={500}
								height={500}
								priority
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
					{/* <Experience /> */}
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
