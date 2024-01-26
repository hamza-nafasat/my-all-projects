import AdminAside from "../../components/AdminAside";
import { LineChartComponent } from "../../components/Charts";

const LineChart = () => {
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="LineChartsContainer">
				<h2>Line Charts</h2>
				{/* ACTIVE USERS CHART  */}
				{/* =================== */}
				<section>
					<LineChartComponent
						data={[200, 444, 444, 556, 778, 445, 990, 1444, 256, 447, 1000, 1200]}
						title="Users"
						borderColor="rgb(53,162,255)"
						bgColor="rgba(53,162,255,0.5)"
					/>
					<h3>Active users</h3>
				</section>
				{/* TOTAL PRODUCTS CHART  */}
				{/* ===================== */}
				<section>
					<LineChartComponent
						data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
						bgColor={"hsla(269,80%,40%,0.4)"}
						borderColor={"hsl(269,80%,40%)"}
						title="Products"
					/>
					<h3>Total products (sku)</h3>
				</section>
				{/* TOTAL REVENUE CHART  */}
				{/* ==================== */}
				<section>
					<LineChartComponent
						data={[
							24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000, 144400,
							100000, 120000,
						]}
						bgColor={"hsla(129,80%,40%,0.4)"}
						borderColor={"hsl(129,80%,40%)"}
						title="Revenue"
					/>
					<h3>Total revenue</h3>
				</section>
				{/* DISCOUNT ALLOTED CHART  */}
				{/* ======================= */}
				<section>
					<LineChartComponent
						data={[
							9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500, 2000, 5000,
						]}
						bgColor={"hsla(29,80%,40%,0.4)"}
						borderColor={"hsl(29,80%,40%)"}
						title="Discount"
					/>
					<h3>Discount alloted</h3>
				</section>
			</main>
		</div>
	);
};

export default LineChart;
