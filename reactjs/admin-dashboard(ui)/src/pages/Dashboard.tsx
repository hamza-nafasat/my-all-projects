import { BsSearch } from "react-icons/bs";
import FakeData from "../assets/data.json";
import { FaRegBell } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import AdminAside from "../components/AdminAside";
import DashboardTable from "../components/DashboardTable";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { getColor } from "../components/subComponents/getColorsForPercentage";
import { BarChartComponent, DoughnutChartComponent } from "../components/Charts";

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
						placeholder="Search users and docs"
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
						<h2>Revenue & Transaction</h2>
						<BarChartComponent
							title_1="Revenue"
							title_2="Transactions"
							data_1={[200, 444, 343, 556, 778, 455, 990]}
							data_2={[300, 144, 433, 655, 237, 755, 190]}
							bgColor_1="rgb(0,115,255)"
							bgColor_2="rgba(52,162,253,0.7)"
							barThickness={0.5}
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
						<DoughnutChartComponent
							data={[30, 70]}
							labels={["Male", "Female"]}
							cutout={"60%"}
							bgColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
						/>
						<p>
							<BiMaleFemale />
						</p>
					</section>
					<section className="transactionTable">
						<DashboardTable tableData={FakeData.transaction} />
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
	getColor: (percent: number) => string;
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
	getColor: (value: number) => string;
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
