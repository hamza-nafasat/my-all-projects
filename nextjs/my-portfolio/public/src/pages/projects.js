import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import AnimatedText from "@/components/Globel/AnimatedText";
import FeaturedProject from "@/components/Projects/FeaturedProject";
import TransitionEffect from "@/components/Globel/TransitionEffect";
import { FEATUREDPROJECTDATA } from "@/components/Globel/Text";

const projects = () => {
	return (
		<>
			<Head>
				<title>Portfoli | Projects</title>
				<meta name="description" content="the page about hamzanafasat's projects" />
			</Head>
			<TransitionEffect />
			<main className="w-full mb-16 flex flex-col items-center justify-center">
				<Layout classname="pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0">
					<AnimatedText
						text={"My Projects"}
						className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
					/>
					<div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
						{/* FEATURED PROJECT*/}
						{/*  =============  */}
						{FEATUREDPROJECTDATA.map((item, i) => (
							<div key={i} className="col-span-12">
								<FeaturedProject
									type={item.type}
									title={item.title}
									summery={item.summery}
									link={item.link}
									github={item.github}
									image={item.image}
								/>
							</div>
						))}
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
