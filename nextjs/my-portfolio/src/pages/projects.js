import Head from "next/head";
import Layout from "@/components/Globel/Layout";
import { projectImages } from "@/components/Globel/Images";
import AnimatedText from "@/components/Globel/AnimatedText";
import SmallProject from "@/components/Projects/SmallProject";
import FearuredProject from "@/components/Projects/FeaturedProject";
import TransitionEffect from "@/components/Globel/TransitionEffect";

const projects = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="description" content="the page about hamzanafasat's projects" />
			</Head>
			<TransitionEffect />
			<main className="w-full mb-16 flex flex-col items-center justify-center">
				<Layout classname="pt-16 xl:p-8 ">
					<AnimatedText
						text={"Code that Speaks"}
						className="mb-16 xl:!text-7xl lg:!text-6xl sm:mb-8 sm:!text-5xl xs:!text-4xl"
					/>
					<div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
						{/* FEATURED PROJECT*/}
						{/*  =============  */}
						<div className="col-span-12">
							<FearuredProject
								type="Featured Project"
								title="Crypto Screener Application"
								summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, 
                                React Router and Recharts.It shows detail regarding almost all the cryptocurrency. 
                                You can easily convert the price in your ocal currency."
								image={projectImages.a}
								link="/"
								github="/"
							/>
						</div>
						{/* SMALL PROJECT 1 */}
						{/*  =============  */}
						<div className="col-span-6 sm:col-span-12">
							<SmallProject
								type="Featured Project"
								title="Crypto Screener Application"
								image={projectImages.b}
								link="/"
								github="/"
							/>
						</div>
						{/* SMALL PROJECT 2 */}
						{/*  =============  */}
						<div className="col-span-6 sm:col-span-12 ">
							<SmallProject
								type="Featured Project"
								title="Crypto Screener Application"
								image={projectImages.c}
								link="/"
								github="/"
							/>
						</div>
						{/* FEATURED PROJECT*/}
						{/*  =============  */}
						<div className="col-span-12">
							<FearuredProject
								type="Featured Project"
								title="Crypto Screener Application"
								summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, 
                                React Router and Recharts.It shows detail regarding almost all the cryptocurrency. 
                                You can easily convert the price in your ocal currency."
								image={projectImages.d}
								link="/"
								github="/"
							/>
						</div>
						{/* SMALL PROJECT 1 */}
						{/*  =============  */}
						<div className="col-span-6 sm:col-span-12">
							<SmallProject
								type="Featured Project"
								title="Crypto Screener Application"
								image={projectImages.e}
								link="/"
								github="/"
							/>
						</div>
						{/* SMALL PROJECT 2 */}
						{/*  =============  */}
						<div className="col-span-6 sm:col-span-12">
							<SmallProject
								type="Featured Project"
								title="Crypto Screener Application"
								image={projectImages.f}
								link="/"
								github="/"
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
