import { ConfigLineChart } from "../config";
export const LineChartContainerName = 'fake-chart-container-line';
export const LineChartEventName = 'chart-init-line';


function drawChart(result) {
	const container = document.querySelector('[chartType="linechart"]');
	container.innerHTML = '';
	const config = Merger(ConfigLineChart, {
		series: [{ name: '#', data: result.data.values.map((item) => { return item[1] }) }],
		xaxis: { categories: result.data.values.map((item) => { return item[0] }) }
	});
	new ApexCharts(container, config).render()
}


MyEvent.bind(LineChartContainerName, LineChartEventName, drawChart);