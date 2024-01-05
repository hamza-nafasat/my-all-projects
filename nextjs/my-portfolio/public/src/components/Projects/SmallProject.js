import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "../Globel/Icons";

const MotionLink = motion(Link);
const FeaturedImage = motion(Image);

const SmallProject = ({ type, title, image, link = "", github = "" }) => {
	return (
		<article
			className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid bg-light
			border-dark dark:border-light dark:bg-dark p-6 relative dark:text-light xs:p-4"
		>
			{/* SHADOW LINE  */}
			<div
				className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
			rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
			/>
			{/* PROJECT IMAGE  */}
			<Link
				href={link}
				target="_blank"
				className="w-full cursor-pointer overflow-hidden rounded-lg"
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
			<div className="w-full flex flex-col items-start justify-between mt-4">
				{/* PROJECT TYPE  */}
				<span
					className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-sm
						sm:text-base xs:text-xs"
				>
					{type}
				</span>
				{/* TITLE  */}
				<Link
					href={link}
					target="_blank"
					className="hover:underline underline-offset-2 lg:text-2xl"
				>
					<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
						{title}
					</h2>
				</Link>
				{/* PROJECT LINKS  */}
				{/* ============== */}
				<div className="flex mt-2 w-full items-center justify-between ">
					<MotionLink
						href={link}
						target="_blank"
						className="p-2 font-semibold text-lg underline md:text-base sm:text-lg xs:text-base"
						whileTap={{ scale: 0.9 }}
						whileHover={{ translateY: -3 }}
						transition={{ duration: 0.3 }}
					>
						Visit
					</MotionLink>
					<MotionLink
						href={github}
						target="_blank"
						className="w-10 lg:w-8 sm:w-10 xs:w-8"
						whileTap={{ scale: 0.9 }}
						whileHover={{ translateY: -3 }}
						transition={{ duration: 0.3 }}
					>
						<GithubIcon />
					</MotionLink>
				</div>
			</div>
		</article>
	);
};

export default SmallProject;
