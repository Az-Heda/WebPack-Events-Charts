import { ConfigBarChart } from "../config";
export const BarChartContainerName = 'fake-chart-container-bar';
export const BarChartEventName = 'chart-init-bar';


function drawChart(result) {
	const container = document.querySelector('[chartType="barchart"]');
	container.innerHTML = '';
	console.log(ConfigBarChart);
	console.log(result.data.values.map((item) => { return { x: item[0], y: item[1] } }))
	const config = Merger(ConfigBarChart, {
		series: [{ data: result.data.values.map((item) => { return { x: item[0], y: item[1] } }) }], 
		xaxis: { categories: result.data.values.map((item) => { return item[0] }) }
	});
	console.log(config);
	new ApexCharts(container, config).render()
}


MyEvent.bind(BarChartContainerName, BarChartEventName, drawChart);