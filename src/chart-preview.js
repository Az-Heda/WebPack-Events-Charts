import ApexCharts from "apexcharts";

const colors = [ '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#662E9B', '#F86624', '#F9C80E', '#EA3546', '#43BCCD']
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
	lineChart(data);
	areaChart(data);
	barChart(data);
	pieChart(data);
	treemapChart(data);
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
			}
		},
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y })},
		],
		stroke: { width: [5], },
		
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
		colors,
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),

		legend: { show: false },
		...disabledOptions,
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
		colors,
		...disabledOptions,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	return chart;
}

//-----------------------------------------------------\\

function filterPIE(data, val=5) {
	const sum = (...vals) => {
		let t = 0;
		vals.forEach((v) => { t += v});
		return t;
	}
	console.log('FILTER_PIE', data);
	const isPerc = (typeof val == 'string');
	let validValues = [];
	if (isPerc) {
		if (/[0-9.]{1,100}%/.exec(val) === null) {
			throw new Error(`Percentage "${val}" written in wrong format; Examples: ` + ['1%', '10%', '15.5%'].join(', '));
		}
		let perc = /[0-9.]{1,100}/.exec(val)[0] * 1;
		data.sort((a, b) => (a < b) ? 1 : (a > b) ? -1 : 0 );
		const tot = sum(...data.map((i) => { return i.y}));
		const getPerc = function(val, tot) { return val * 100 / tot; };
	
		validValues = data.map((item) => {
			item.perc = getPerc(item.y, tot);
			return item;
		})
		.filter((i) => { return i.perc >= perc});
	
		validValues.push({ x: 'Altri', y: sum(...data.filter((item) => { return item.perc < perc}).map((e) => { return e.y})) });
	
		validValues = validValues.map((item) => {
			if (item?.perc) delete item.perc;
			return item;
		});
	}
	else {
		let n = val;
		validValues = data.filter((_, i) => { return i < n});
		validValues.push({ x: 'Altri', y: sum(...data.filter((_, i) => { return i >= n}).map((e) => { return e.y}))})
	}
	return validValues;
}

//-----------------------------------------------------\\

MyEvent.bind('preview', 'get-chart-preview', chartPreview);