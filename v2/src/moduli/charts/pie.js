import { ConfigPieChart } from "../config";
export const PieChartContainerName = 'fake-chart-container-pie';
export const PieChartEventName = 'chart-init-pie';


function drawChart(result) {
	const container = document.querySelector('[chartType="piechart"]');
	container.innerHTML = '';
	const rd = structuredClone(result.data.values).sort((a, b) => { return (a[1] > b[1]) ? -1 : (a[1] < b[1]) ? 1 : 0});
	let series = rd.map((item) => { return item[1] });
	let labels = rd.map((item) => { return item[0] });

	const config = Merger(ConfigPieChart, { labels, series });
	new ApexCharts(container, config).render()
}


MyEvent.bind(PieChartContainerName, PieChartEventName, drawChart);