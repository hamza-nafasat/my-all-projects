import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedImage = motion(Image);

const FeaturedArticle = ({ image, title, time, summery, link = "" }) => {
	return (
		<li
			className="relative col-span-1 w-full p-6 bg-light dark:bg-dark border border-solid border-dark
			dark:border-light border-r-8 rounded-2xl dark:text-light xs:p-4 lg:p-4 md:p-6 "
		>
			<div
				className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
				rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
			/>
			<Link href={link} target="_blank" className="w-full inline-block overflow-hidden rounded-lg cursor-pointer">
				<FeaturedImage
					src={image}
					alt={title}
					className="w-full h-auto "
					whileTap={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
					sizes="(max-width:768px) 100vw,
					(max-width:1200px) 50vw
					50vw"
				/>
			</Link>
			<Link href={link} target="_blank">
				<h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline lg:text-lg xs:text-lg">
					{title}
				</h2>
			</Link>
			<p className="text-sm mb-2 xs:text-xs ">{summery}</p>
			<Link href={link} target="_blank">
				<span className="text-primary dark:text-primaryDark font-semibold xs:text-sm">{time}</span>
			</Link>
		</li>
	);
};

export default FeaturedArticle;
