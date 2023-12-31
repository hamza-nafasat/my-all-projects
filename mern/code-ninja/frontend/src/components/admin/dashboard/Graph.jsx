import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	ArcElement,
	Legend,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend);

// FIRST CHART
// ============

export const LineChart = ({ views = [] }) => {
	const labels = getLastYearMonths();
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: true,
				text: "Yearly Views",
			},
		},
	};
	const data = {
		labels,
		datasets: [
			{
				label: "Views",
				data: views,
				borderColor: "rgba(107,70,193,0.5)",
				backgroundColor: "#6b46c1",
			},
		],
	};
	return <Line options={options} data={data} />;
};

// SECOND CHART
// ==============

export const DoughnutChart = ({ data = [] }) => {
	const options = {
		labels: ["Subscribed", "Not Subscribed"],
		datasets: [
			{
				label: "data",
				data: data,
				borderColor: ["rgb(62,12,171)", "rgb(214,43,129)"],
				backgroundColor: ["rgba(62,12,171,0.3)", "rgba(214,43,129,0.3)"],
				borderWidth: 1,
			},
		],
	};
	return <Doughnut data={options} />;
};

// FUNCTION FOR GETTING MONTHS FOR LABELS
// ======================================

function getLastYearMonths() {
	const labels = [];
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	const currentMonth = new Date().getMonth();
	const remains = 11 - currentMonth;

	for (let i = currentMonth; i >= 0; i--) {
		labels.unshift(months[i]);
	}
	for (let i = remains; i > 0; i--) {
		labels.unshift(months[currentMonth + i]);
	}
	return labels;
}
