import { IconType } from "react-icons";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { Link, Location, useLocation } from "react-router-dom";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

const AdminAside = () => {
	const location = useLocation();
	return (
		<aside>
			<h2>Logo</h2>
			{/* SECTION ONE  */}
			{/* ===========  */}
			<section>
				<h5>Dashboard</h5>
				<ul>
					<LiComponent
						url={"/admin/dashboard"}
						text={"Dashboard"}
						Icon={RiDashboardFill}
						location={location}
					/>
					<LiComponent
						url={"/admin/products"}
						text={"Products"}
						Icon={RiShoppingBag3Fill}
						location={location}
					/>
					<LiComponent
						url={"/admin/customers"}
						text={"Customers"}
						Icon={IoIosPeople}
						location={location}
					/>
					<LiComponent
						url={"/admin/transactions"}
						text={"Transactions"}
						Icon={AiFillFileText}
						location={location}
					/>
				</ul>
			</section>
			{/* SECTION TWO  */}
			{/* ===========  */}
			<section>
				<h5>Charts</h5>
				<ul>
					<LiComponent
						url={"/admin/chart/bar"}
						text={"Bar"}
						Icon={FaChartBar}
						location={location}
					/>
					<LiComponent
						url={"/admin/chart/pie"}
						text={"Pie"}
						Icon={FaChartPie}
						location={location}
					/>
					<LiComponent
						url={"/admin/chart/line"}
						text={"Line"}
						Icon={FaChartLine}
						location={location}
					/>
				</ul>
			</section>
			{/* SECTION THREE */}
			{/* ===========  */}
			<section>
				<h5>Apps</h5>
				<ul>
					<LiComponent
						url={"/admin/app/toss"}
						text={"Toss"}
						Icon={FaGamepad}
						location={location}
					/>
					<LiComponent
						url={"/admin/app/coupon"}
						text={"Coupon"}
						Icon={RiCoupon3Fill}
						location={location}
					/>
					<LiComponent
						url={"/admin/app/stopwatch"}
						text={"Stopwatch"}
						Icon={FaStopwatch}
						location={location}
					/>
				</ul>
			</section>
		</aside>
	);
};

export default AdminAside;

// THIS IS LI COMPONENT FOR EVERY SECTION LINKS IN ASIDE
// =====================================================
interface LiComponentProps {
	url: string;
	text: string;
	Icon: IconType;
	location: Location;
}
const LiComponent = ({ url, text, Icon, location }: LiComponentProps) => {
	return (
		<li
			style={{
				backgroundColor: location.pathname.includes(url) ? "rgba(0,115,225,0.1)" : "white",
			}}
		>
			<Link
				to={url}
				style={{
					color: location.pathname.includes(url) ? "rgba(0,115,225)" : "black",
				}}
			>
				<Icon />
				{text}
			</Link>
		</li>
	);
};
