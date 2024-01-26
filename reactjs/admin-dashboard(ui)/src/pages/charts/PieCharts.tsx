import AdminAside from "../../components/AdminAside";
import { categories } from "../../assets/data.json";
import { PieChartComponent, DoughnutChartComponent } from "../../components/Charts";

const PieCharts = () => {
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="PieChartsContainer">
				<h2>Pie & Doughnut Charts</h2>
				{/*  PIE CHART  */}
				{/* =========== */}
				<section>
					{/* 1 */}
					<article>
						<PieChartComponent
							data={[12, 9, 13]}
							offset={[0, 0, 50]}
							labels={["Processing", "Shipped", "Delivered"]}
							bgColor={[`hsl(110,80%,80%)`, `hsl(110,80%,50%)`, `hsl(110,40%,50%)`]}
						/>
						<h3>Order fulfillment ratio</h3>
					</article>
					{/* 2 */}
					<article>
						<PieChartComponent
							offset={[0, 0, 50]}
							data={[30, 250, 70]}
							bgColor={[`hsl(10,80%,80%)`, `hsl(10,80%,50%)`, `hsl(10,40%,50%)`]}
							labels={["Teenager (below - 20)", "Adult (20 - 40)", "Older (above - 40)"]}
						/>
						<h3>User age group</h3>
					</article>
				</section>
				{/*  DOUGHNUT CHART  */}
				{/* ================ */}
				<section>
					{/* 1 */}
					<article>
						<DoughnutChartComponent
							legends={false}
							labels={[
								"Marketing Cost",
								"Discount",
								"Burnt",
								"Production Cost",
								"Net Margin",
							]}
							data={[32, 18, 5, 20, 25]}
							bgColor={[
								"hsl(110,80%,40%)",
								"hsl(19,80%,40%)",
								"hsl(69,80%,40%)",
								"hsl(300,80%,40%)",
								"rgb(53,162,255)",
							]}
							offset={[23, 30, 20, 30, 80]}
						/>
						<h3>Revenue distribution</h3>
					</article>
					{/* 2 */}
					<article>
						<DoughnutChartComponent
							legends={false}
							offset={[0, 0, 0, 80]}
							labels={categories.map((item) => item.heading)}
							data={categories.map((item) => item.value)}
							bgColor={categories.map(
								(item) => `hsl(${item.value * 4},${item.value}%,50%)`
							)}
						/>
						<h3>Product categories ratio</h3>
					</article>
					{/* 3 */}
					<article>
						<DoughnutChartComponent
							cutout={"70%"}
							legends={false}
							data={[40, 20]}
							offset={[0, 80]}
							labels={["In Stock", "Out Stock"]}
							bgColor={["hsl(269,80%,40%)", "rgb(53,162,255)"]}
						/>
						<h3>Stock availability</h3>
					</article>
					{/* 4 */}
					<article>
						<DoughnutChartComponent
							legends={false}
							cutout={"60%"}
							data={[40, 250]}
							offset={[0, 80]}
							labels={["Admin", "Customers"]}
							bgColor={["hsl(335,100%,38%)", "hsl(44,98%,50%)"]}
						/>
						<h3>Admins & Customers</h3>
					</article>
				</section>
			</main>
		</div>
	);
};

export default PieCharts;
