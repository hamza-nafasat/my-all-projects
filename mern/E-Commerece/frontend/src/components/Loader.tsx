const Loader = () => {
	return (
		<article className="loader-container">
			<div className="loader"></div>
		</article>
	);
};

export default Loader;

interface SkeletonProps {
	width?: string;
	length?: number;
	height?: string;
	bgColor?: string;
}

export const Skeleton = ({
	width = "unset",
	height = "unset",
	length = 3,
	bgColor,
}: SkeletonProps) => {
	const skeletions = Array.from({ length }, (_, idx) => (
		<div key={idx} style={{ height, backgroundColor: bgColor }} className="skeleton-shape"></div>
	));

	return (
		<div className="skeleton-loader" style={{ width }}>
			{skeletions}
		</div>
	);
};
