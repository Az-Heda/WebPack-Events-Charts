import { ConfigTreemapChart } from "../config";
export const TreemapChartContainerName = 'fake-chart-container-treemap';
export const TreemapChartEventName = 'chart-init-treemap';


function drawChart(result) {
	const container = document.querySelector('[chartType="treemap"]');
	container.innerHTML = '';
	let data = structuredClone(result.data.values).map((item) => { return { x: item[0], y: item[1] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0})
	const config = Merger(ConfigTreemapChart, { series: [{ data }] });
	new ApexCharts(container, config).render()
}


MyEvent.bind(TreemapChartContainerName, TreemapChartEventName, drawChart);