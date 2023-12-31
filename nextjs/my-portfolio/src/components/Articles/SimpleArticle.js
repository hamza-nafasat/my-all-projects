import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ image, title, link }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const imageRef = useRef(null);
	const handleMouse = (event) => {
		imageRef.current.style.display = "inline-block";
		x.set(event.pageX);
		y.set(-10);
	};
	const handleMouseLeave = (event) => {
		imageRef.current.style.display = "none";
		x.set(0);
		y.set(0);
	};
	return (
		<Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
			<h2 className="capitalize text-xl font-semibold hover:underline md:text-lg sm:text-base xs:text-sm">
				{title}
			</h2>
			<FramerImage
				ref={imageRef}
				src={image}
				alt={title}
				style={{ x: x, y: y }}
				initial={{ opacity: 0 }}
				className="z-10 w-96 h-auto hidden absolute rounded-xl lg:w-60 md:w-0 md:-z-10"
				whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
				sizes="(max-width:768px) 100vw,
				(max-width:1200px) 50vw
				50vw"
			/>
		</Link>
	);
};

const SimpleArticle = ({ image, title, date, link = "" }) => {
	return (
		<motion.li
			className="relative w-full p-4 py-6  my-6 rounded-xl flex items-center justify-between bg-light dark:bg-dark
                    text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4
					border-b-4 xs:flex-col"
			initial={{ y: 200 }}
			viewport={{ once: true }}
			whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
		>
			<MovingImage image={image} title={title} link={link} />
			<span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 md:text-sm xs:text-xs">
				{date}
			</span>
		</motion.li>
	);
};

export default SimpleArticle;
