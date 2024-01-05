import React from "react";
import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import AnimatedText from "@/components/Globel/AnimatedText";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { SMAILLPROJECTDATA } from "@/components/Globel/Text";
import SmallProject from "@/components/Projects/SmallProject";

const articles = () => {
	return (
		<>
			<Head>
				<title>Portfoli | Projects</title>
				<meta name="description" content="the page about hamzanafasat" />
			</Head>
			<TransitionEffect />
			<main className="w-full flex flex-col items-center justify-center overflow-hidden">
				<Layout classname="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0">
					<AnimatedText
						text={"Small Projects"}
						className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-3xl"
					/>
					{/* ARTICLE WITH IMAGE LIKE CARD  */}
					{/* ============================  */}
					<ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
						{SMAILLPROJECTDATA.map((item, i) => (
							<SmallProject
								key={i}
								type={item.type}
								title={item.title}
								image={item.image}
								link={item.link}
								github={item.github}
							/>
						))}
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
