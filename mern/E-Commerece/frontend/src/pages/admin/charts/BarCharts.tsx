import AdminAside from "../../../components/admin/AdminAside";
import { BarChartComponent } from "../../../components/admin/Charts";
import { getLastYearMonths } from "../../../utils/getLastYearMonths";

const BarCharts = () => {
	return (
		<div className="adminContainer">
			<AdminAside />
			<main className="barChartsContainer">
				<h2>Bar Charts</h2>
				<section>
					<BarChartComponent
						bgColor_1={`hsl(260,50%,30%)`}
						bgColor_2={`hsl(360,90%,90%)`}
						data_1={[200, 444, 343, 556, 778, 455, 990]}
						data_2={[300, 144, 433, 655, 237, 755, 190]}
						title_1="Products"
						title_2="Customers"
						barThickness={0.4}
					/>
					<h3>TOP SELLING PRODUCTS & CUSTOMERS</h3>
				</section>
				<section>
					<BarChartComponent
						bgColor_1={`hsl(180, 40%, 50%)`}
						data_1={[200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909]}
						title_1="Products"
						horizontal={true}
						labels={getLastYearMonths()}
						barThickness={0.2}
						barWidth={"200%"}
					/>
					<h3>ORDERS THROUGHOUT THE YEAR</h3>
				</section>
			</main>
		</div>
	);
};

export default BarCharts;
