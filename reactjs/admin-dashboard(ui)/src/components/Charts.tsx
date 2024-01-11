import { Bar, Doughnut } from "react-chartjs-2";
import { getLastYearMonths } from "./subComponents/getLastTwelveMonths";
import { BarElement, ChartOptions, ChartData, ArcElement } from "chart.js";
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// BAR CHART FOR SHOWING 2 OR 1 DATA
// =================================
interface BarChartProps {
	heading: string;
	data_1: number[];
	title_1: string;
	data_2?: number[];
	title_2?: string;
	bgColor_1?: string;
	bgColor_2?: string;
	labels?: string[];
	isBgLines?: boolean;
	horizontal?: boolean;
	horizontalWidth?: number;
	isTittleAppear?: boolean;
}
export const BarChart = ({
	heading = "",
	data_1 = [],
	title_1 = "Data_1",
	bgColor_1 = "#35A2EB",
	title_2 = "",
	data_2 = [],
	bgColor_2 = "#FF6384",
	isTittleAppear = false,
	horizontal = false,
	horizontalWidth = 30,
	isBgLines = false,
	labels = getLastYearMonths().slice(-6),
}: BarChartProps) => {
	const options: ChartOptions<"bar"> = {
		responsive: true,
		indexAxis: horizontal ? "y" : "x",
		plugins: {
			legend: {
				display: isTittleAppear,
				position: horizontal ? "left" : "bottom",
				maxHeight: 20,
				maxWidth: horizontalWidth,
			},
			title: {
				display: true,
				text: heading[1] === undefined ? "BAR CHART" : heading,
				font: { size: 20, weight: 300 },
				fullSize: true,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: isBgLines,
				},
			},
			x: {
				grid: {
					display: isBgLines,
				},
			},
		},
	};
	const data: ChartData<"bar", number[], string> = {
		labels,
		datasets: [
			{
				label: title_1,
				data: data_1,
				backgroundColor: bgColor_1,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage: 0.4,
			},
			{
				label: title_2[1] === undefined ? "Data_2" : title_2,
				data: data_2,
				hidden: data_2.length > 0 ? false : true,
				backgroundColor: bgColor_2,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage: 0.4,
			},
		],
	};
	return <Bar options={options} data={data} />;
};

// BAR CHART FOR SHOWING 2 OR 1 DATA
// =================================
interface DoughnutChartProps {
	labels: string[];
	data: number[];
	bgColor?: string[];
	cutout?: number | string;
	legends?: boolean;
	offset?: number[];
}
export const DoughnutChart = ({
	data = [20, 80],
	labels = [],
	bgColor = ["#35A2EB", "#FF6384"],
	legends = true,
	offset = [],
	cutout,
}: DoughnutChartProps) => {
	const options: ChartOptions<"doughnut"> = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 40,
				},
			},
		},
		cutout,
	};
	const doughnutData: ChartData<"doughnut", number[], string> = {
		labels,
		datasets: [
			{
				data,
				backgroundColor: bgColor,
				borderWidth: 0,
				offset,
			},
		],
	};
	return <Doughnut options={options} data={doughnutData} />;
};
