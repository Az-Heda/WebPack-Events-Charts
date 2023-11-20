import { ConfigAreaChart } from "../config";
export const AreaChartContainerName = 'fake-chart-container-area';
export const AreaChartEventName = 'chart-init-area';


function drawChart(result) {
	const container = document.querySelector('[chartType="areachart"]');
	container.innerHTML = '';
	const config = Merger(ConfigAreaChart, {
		series: [{ name: '#', data: result.data.values.map((item) => { return item[1] }) }],
		xaxis: { categories: result.data.values.map((item) => { return item[0] }) }
	});
	new ApexCharts(container, config).render()
}


MyEvent.bind(AreaChartContainerName, AreaChartEventName, drawChart);