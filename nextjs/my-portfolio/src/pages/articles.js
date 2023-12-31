import React from "react";
import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import AnimatedText from "@/components/Globel/AnimatedText";
import { articlesImages } from "@/components/Globel/Images";
import SimpleArticle from "@/components/Articles/SimpleArticle";
import FeaturedArticle from "@/components/Articles/FeaturedArticle";
import TransitionEffect from "@/components/Globel/TransitionEffect";

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
						<FeaturedArticle
							image={articlesImages.a}
							title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
							time="9 min read"
							summery="Build A Custom Pagination Component In Reactjs From Scratch Learn how to build 
                            a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to
                            integrate Pagination component in your ReactJS project"
							link=""
						/>
						<FeaturedArticle
							image={articlesImages.b}
							title="Build A Custom Pagination Component In Reactjs From Scratch"
							time="9 min read"
							summery="Build A Custom Pagination Component In Reactjs From Scratch Learn how to build 
                            a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to
                            integrate Pagination component in your ReactJS project"
							link=""
						/>
					</ul>
					<h2 className="font-bold text-4xl w-full text-center dark:text-light my-16 mt-32">
						All Articles
					</h2>
					{/* SIMPLE ARTICLE  */}
					{/* ==============  */}
					<ul>
						<SimpleArticle
							image={articlesImages.c}
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error
                            Handling"
							date="March 23,2023"
							link=""
						/>
						<SimpleArticle
							image={articlesImages.d}
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error
                            Handling"
							date="March 23,2023"
							link=""
						/>
						<SimpleArticle
							image={articlesImages.e}
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error
                            Handling"
							date="March 23,2023"
							link=""
						/>
						<SimpleArticle
							image={articlesImages.f}
							title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error
                            Handling"
							date="March 23,2023"
							link=""
						/>
					</ul>
				</Layout>
			</main>
		</>
	);
};

export default articles;
