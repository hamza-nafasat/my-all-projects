import { BsSearch } from "react-icons/bs";
import FakeData from "../assets/data.json";
import { FaRegBell } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import AdminAside from "../components/AdminAside";
import DashboardTable from "../components/DashboardTable";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { BarChart, DoughnutChart } from "../components/Charts";
import { getColor } from "../components/subComponents/getColorsForPercentage";

const Dashboard = () => {
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="dashboard">
				{/* === SEARCH BAR ARTICLE === */}
				{/* ========================== */}
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
				{/* == WIDGETS BOXES ARTICLE == */}
				{/* =========================== */}
				<article className="widgetContainer">
					<WidgetItem
						heading={"Revenue"}
						value={34000}
						percent={43}
						amount={true}
						getColor={getColor}
					/>
					<WidgetItem
						heading={"Transaction"}
						getColor={getColor}
						value={300}
						percent={100}
					/>
					<WidgetItem heading={"Products"} value={200} percent={-20} getColor={getColor} />
					<WidgetItem heading={"Users"} value={4000} percent={79} getColor={getColor} />
				</article>
				{/* ====== GRAPH ARTICLE ====== */}
				{/* =========================== */}
				<article className="graphAndInventoryContainer">
					<section className="revenueChart">
						<BarChart
							heading={"REVENUE & TRANSACTIONS"}
							title_1="Revenue"
							bgColor_1="rgb(0,115,255)"
							data_1={[300, 144, 433, 655, 237, 755]}
							title_2="Transactions"
							bgColor_2="rgba(52,162,253,0.7)"
							data_2={[600, 244, 133, 355, 937, 455]}
						/>
					</section>
					<section className="inventoryDetails">
						<h2>InventOry</h2>
						{FakeData.categories.map((item, i) => (
							<InventoryItem
								key={i}
								heading={item.heading}
								value={item.value}
								getColor={getColor}
							/>
						))}
					</section>
				</article>
				{/* TRANSACTION & GENDER ARTICLE */}
				{/* ============================ */}
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
						{/* <h2>Top Transactions</h2> */}
						<DashboardTable data={FakeData.transaction} />
					</section>
				</article>
			</main>
		</div>
	);
};

export default Dashboard;

// COMPONENT FOR ITEMS IN WIDGET CONTAINER
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

// COMPONENT FOR ITEMS IN INVENTORY CONTAINER
// ==========================================
interface InventoryItemProps {
	heading: string;
	value: number;
	getColor: Function;
}
const InventoryItem = ({ heading, value, getColor }: InventoryItemProps) => {
	const color = getColor(value);
	return (
		<section className="inventoryItem">
			<header>
				<h5>{heading}</h5>
			</header>
			<div className="inventoryBar">
				<div style={{ backgroundColor: color, width: `${value}%` }} />
			</div>
			<span>{value}%</span>
		</section>
	);
};
