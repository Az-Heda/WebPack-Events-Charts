import ApexCharts from "apexcharts";
import { filterPIE, getColor, DEFAULT_COLORS, mapNumber } from "./_";

const disabledOptions = {
	legend: { show: false },
	xaxis: {
		labels: { show: false },
		axisBorder: { show: false }
	},
	yaxis: {
		labels: { show: false },
		axisBorder: { show: false }
	},
	grid: { show: false }
};

export function chartPreview(data) {
	const f = [ lineChart, areaChart, barChart, pieChart, treemapChart, radarChart, polarareaChart, ]
	f.forEach((func) => {
		func(data);
	})
}

function lineChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const container = document.getElementById('preview-line-svg');
	const img = document.getElementById('preview-line-img');
	const options = {
		chart: {
			type: 'line',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			},
		},
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y })},
		],
		stroke: { width: [5], },
		colors: getColor(),
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

function areaChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const container = document.getElementById('preview-area-svg');
	const img = document.getElementById('preview-area-img');
	const options = {
		chart: {
			type: 'area',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			}
		},
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y }) },
		],
		stroke: { width: [5], },
		colors: getColor(),
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

function barChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('preview-bar-svg');
	const img = document.getElementById('preview-bar-img');
	const options = {
		chart: {
			type: 'bar',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			}
		},
		plotOptions: { bar: { horizontal: false } },
		dataLabels: { enabled: false },
		series: [{
			data: renamed
		}],
		colors: getColor(),
		...disabledOptions
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

function pieChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('preview-pie-svg');
	const img = document.getElementById('preview-pie-img');
	const options = {
		chart: {
			type: 'pie',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			}
		},
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		colors: DEFAULT_COLORS,
		legend: { show: false },
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

function polarareaChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('preview-polararea-svg');
	const img = document.getElementById('preview-polararea-img');
	const options = {
		chart: {
			type: 'polarArea',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			}
		},
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		colors: DEFAULT_COLORS,
		legend: { show: false },
		...disabledOptions,
		yaxis: {
			show: false
		},
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}


function treemapChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('preview-treemap-svg');
	const img = document.getElementById('preview-treemap-img');
	const options = {
		chart: {
			type: 'treemap',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			},
		},
		plotOptions: { treemap: { distributed: true, shadeIntensity: 0.4 } },
		dataLabels: { enabled: false },
		series: [{
			data: renamed
		}],
		colors: DEFAULT_COLORS,
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

function radarChart(data) {
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const allNumbers = renamed.map((item) => { return item.y });
	const container = document.getElementById('preview-radar-svg');
	const img = document.getElementById('preview-radar-img');

	const options = {
		chart: {
			type: 'radar',
			height: 200,
			animations: { enabled: false },
			events: {
				mounted: () => {
					chart.dataURI().then((url) => {
						img.src = url.imgURI;
						chart.destroy();
					})
				},
			},
		},
		dataLabels: { enabled: false },
		labels: renamed.map((item) => { return item.x }),
		series: [
			{ name: '', data: allNumbers.map((item) => { return mapNumber(item, Math.min(...allNumbers), Math.max(...allNumbers), 0, 100) }) }
		],
		plotOptions: { radar: { polygons: { strokeColor: '#e8e8e8', fill: { colors: ['#f8f8f8', '#fff'] }}}},
		colors: getColor(),
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
}

//-----------------------------------------------------\\


MyEvent.bind('preview', 'get-chart-preview', chartPreview);