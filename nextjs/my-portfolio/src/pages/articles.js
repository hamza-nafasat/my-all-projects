import React from "react";
import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import AnimatedText from "@/components/Globel/AnimatedText";
import SimpleArticle from "@/components/Articles/SimpleArticle";
import FeaturedArticle from "@/components/Articles/FeaturedArticle";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { FEATUREDARTICLEDATA, SMAILLARTICLEDATA } from "@/components/Globel/Text";

const articles = () => {
	return (
		<>
			<Head>
				<title>Articels</title>
				<meta name="description" content="the page about hamzanafasat" />
			</Head>
			<TransitionEffect />
			<main className="w-full flex flex-col items-center justify-center overflow-hidden">
				<Layout classname="pt-16 lg:p-6 xs:p-4">
					<AnimatedText
						text={"Words Can Change The World"}
						className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
					/>
					{/* ARTICLE WITH IMAGE LIKE CARD  */}
					{/* ============================  */}
					<ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
						{FEATUREDARTICLEDATA.map((item, i) => (
							<FeaturedArticle
								key={i}
								image={item.image}
								title={item.title}
								time={item.time}
								summery={item.summery}
								link={item.link}
							/>
						))}
					</ul>
					<h2 className="font-bold text-4xl w-full text-center dark:text-light my-16 mt-32">
						All Articles
					</h2>
					{/* SIMPLE ARTICLE  */}
					{/* ==============  */}
					<ul>
						{SMAILLARTICLEDATA.map((item, i) => (
							<SimpleArticle
								key={i}
								image={item.image}
								title={item.title}
								date={item.date}
								link={item.link}
							/>
						))}
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
