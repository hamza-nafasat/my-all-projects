import { FaRegBell } from "react-icons/fa";
import AdminAside from "../components/AdminAside";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import FakeData from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";

const Dashboard = () => {
	// FUNCTION FOR GETTING COLORS ACORDING TO PERCENTAGE
	const getColor = (percent: number): string => {
		if (percent < 0) {
			return "#FF0000";
		} else if (percent <= 10) {
			return "#87D068";
		} else if (percent <= 20) {
			return "#55C57A";
		} else if (percent <= 30) {
			return "#29B6F6";
		} else if (percent <= 40) {
			return "#42A5F5";
		} else if (percent <= 50) {
			return "#667EEA";
		} else if (percent <= 60) {
			return "#9C27B0";
		} else if (percent <= 70) {
			return "#F59E0B";
		} else if (percent <= 80) {
			return "#F9A825";
		} else if (percent <= 90) {
			return "#FABB50";
		} else {
			return "lime";
		}
	};

	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="dashboard">
				{/** SEARCH BAR ARTICLE **/}
				{/************************/}
				<article className="searchContainer">
					<BsSearch />
					<input
						type="text"
						id="adminSearch"
						name="adminSearch"
						placeholder="Search about users and docs"
					/>
					<FaRegBell />
					<img src="https://avatars.githubusercontent.com/u/149063128?v=4" alt="user dp" />
				</article>
				{/* WIGITS BOXES ARTICLE */}
				{/************************/}
				<article className="widgetContainer">
					<WidgetItem
						heading={"Revenue"}
						value={34000}
						percent={43}
						amount={true}
						getColor={getColor}
					/>
					<WidgetItem
						heading={"Transictios"}
						getColor={getColor}
						value={300}
						percent={100}
					/>
					<WidgetItem heading={"Products"} value={200} percent={-20} getColor={getColor} />
					<WidgetItem heading={"Users"} value={4000} percent={79} getColor={getColor} />
				</article>
				{/**** GRAPH ARTICLE *****/}
				{/************************/}
				<article className="graphAndInvantryContainer">
					<section className="revenueChart">
						<BarChart
							heading={"REVENUE & TRANSECIONS"}
							title_1="Revenue"
							bgColor_1="rgb(0,115,255)"
							data_1={[300, 144, 433, 655, 237, 755]}
							title_2="Transections"
							bgColor_2="rgba(52,162,253,0.7)"
							data_2={[600, 244, 133, 355, 937, 455]}
						/>
					</section>
					<section className="inventryDetails">
						<h2>Inventry</h2>
						{FakeData.categories.map((item, i) => (
							<InventryItem
								key={i}
								heading={item.heading}
								value={item.value}
								getColor={getColor}
							/>
						))}
					</section>
				</article>
				{/**** GRAPH ARTICLE *****/}
				{/************************/}
				<article className="transactionAndGenderChartContainer">
					<section className="genderChart">
						<h2>Gender Ratio</h2>
						<DoughnutChart
							data={[30, 70]}
							labels={["Male", "Female"]}
							cutout={90}
							bgColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
						/>
						<p>
							<BiMaleFemale />
						</p>
					</section>
					<section className="transactionTable">
						<h2>Top Transactions</h2>
					</section>
				</article>
			</main>
		</div>
	);
};

export default Dashboard;

// COMMPONENT FOR ITEMS IN WIDGET CONTAINER
// ========================================
interface WidgetItemProps {
	heading: string;
	value: number;
	percent: number;
	getColor: Function;
	amount?: boolean;
}
const WidgetItem = ({ heading, value, percent, getColor, amount = false }: WidgetItemProps) => {
	const color = getColor(percent);
	return (
		<section className="widgetItem">
			<section className="widgetInfo">
				<p>{heading}</p>
				<h4>{amount ? `$${value}` : value}</h4>
				{percent > 0 ? (
					<span style={{ color: color }}>
						<HiTrendingUp /> +{percent}%
					</span>
				) : (
					<span style={{ color: color }}>
						<HiTrendingDown /> {percent}%
					</span>
				)}
			</section>
			<section
				className="widgetCircleBar"
				style={{
					background: `conic-gradient(${color} ${
						(Math.abs(percent) / 100) * 360
					}deg,rgba(255,255,255) 0)`,
				}}
			>
				<span style={{ color: color }}>{Math.abs(percent)}%</span>
			</section>
		</section>
	);
};

// COMPONENT FOR ITEMS IN INVENTY CONTAINER
// ========================================
interface InventryItemProps {
	heading: string;
	value: number;
	getColor: Function;
}
const InventryItem = ({ heading, value, getColor }: InventryItemProps) => {
	const color = getColor(value);
	return (
		<section className="inventryItem">
			<header>
				<h5>{heading}</h5>
			</header>
			<div className="inventryBar">
				<div style={{ backgroundColor: color, width: `${value}%` }} />
			</div>
			<span>{value}%</span>
		</section>
	);
};
