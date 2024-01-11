import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../Globel/Icons";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const FeaturedImage = motion(Image);

const FearuredProject = ({ type, title, summery, image, link = "", github = "" }) => {
	return (
		<article
			className="flex w-full items-center justify-between border border-solid border-dark bg-light p-12
			dark:border-light dark:bg-dark dark:text-light shadow-2xl relative rounded-3xl rounded-br-2xl 
			lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
		>
			{/* SHADOW LINE  */}
			<div
				className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
				dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
			/>
			{/* PROJECT IMAGE  */}
			<Link
				href={link}
				target="_blank"
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
			>
				<FeaturedImage
					src={image}
					alt={title}
					className="w-full h-auto "
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
					width={500}
					height={500}
					priority
				/>
			</Link>
			{/* PROJECT TEXT  */}
			{/* ============= */}
			<div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				{/* PROJECT TYPE  */}
				<span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base sm:text-sm">
					{type}
				</span>
				{/* TITLE  */}
				<Link href={link} target="_blank" className="hover:underline underline-offset-2">
					<h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
						{title}
					</h2>
				</Link>
				{/* SUMMERY  */}
				<p className="my-2 font-medium text-dark dark:text-light md:text-sm xl:text-sm lg:text-base ">
					{summery}
				</p>
				{/* PROJECT LINKS  */}
				{/* ============== */}
				<div className="flex mt-2 items-center">
					<MotionLink
						href={github}
						target="_blank"
						className="w-10"
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.3 }}
						whileHover={{ translateY: -6 }}
					>
						<GithubIcon />
					</MotionLink>
					<Link
						href={link}
						target="_blank"
						className="ml-4 rounded-lg bg-dark text-light hover:bg-light hover:text-dark
						border-2 border-solid border-dark dark:border-light transition-all duration-300 p-2 
						px-6 font-semibold dark:bg-light dark:text-dark hover:dark:bg-dark md:text-base
						sm:text-sm hover:dark:text-light sm:px-4  "
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

export default FearuredProject;
