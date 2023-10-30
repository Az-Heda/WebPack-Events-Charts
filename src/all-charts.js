import ApexCharts from "apexcharts";

const height = 500;
const toolbar = { show: false };
const colors = [ '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#662E9B', '#F86624', '#F9C80E', '#EA3546', '#43BCCD']

export function generateCharts(data) {
	// lineChart(data);
	// areaChart(data);
	// barChart(data);
	// pieChart(data);
	// treemapChart(data);
	MyEvent.emit('bar-chart', MyEvent.emit('get-data')[0]);
}

function lineChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const container = document.getElementById('chartline');
	const options = {
		chart: { type: 'line', height, toolbar },
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y })},
		],
		labels: renamed.map((item) => { return item.x }),
		stroke: { width: [5], curve: 'smooth' },
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('chartline', 'ONCE_clear-line-chart', () => { chart.destroy() });
	return chart;
}

function areaChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const container = document.getElementById('chartarea');
	const options = {
		chart: { type: 'area', height, toolbar},
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y }) },
		],
		labels: renamed.map((item) => { return item.x }),
		stroke: { width: [5], curve: 'smooth' },
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('chartarea', 'ONCE_clear-area-chart', () => { chart.destroy() });
	return chart;
}

function barChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('chartbar');
	const options = {
		chart: { type: 'bar', height, toolbar },
		plotOptions: { bar: { horizontal: false } },
		dataLabels: { enabled: false },
		series: [{
			data: renamed
		}],
		responsive: [
			{ breakpoint: 960, options: { plotOptions: { bar: { horizontal: true }}}}
		],
		colors: colors[colors.length -1],
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('chartbar', 'ONCE_clear-bar-chart', () => { chart.destroy() });
	return chart;
}

function pieChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('chartpie');
	const options = {
		chart: { type: 'pie', height, toolbar },
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		colors
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('chartpie', 'ONCE_clear-pie-chart', () => { chart.destroy() });
	return chart;
}

function treemapChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('charttreemap');
	const options = {
		chart: { type: 'treemap', height, toolbar },
		plotOptions: { treemap: { distributed: true, shadeIntensity: 0.4 } },
		dataLabels: { enabled: true },
		series: [{
			data: renamed
		}],
		colors,
	};
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('charttreemap', 'ONCE_clear-treemap-chart', () => { chart.destroy() });
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
	console.log('FILTER_PIE', validValues);
	return validValues;
}

function clearOnceEvents(...params) {
	const events = MyEvent.events;
	const onceEvents = events.filter((e) => { return e.startsWith('ONCE_')});
	for (let x = 0; x < onceEvents.length; x ++) {
		MyEvent.emit(onceEvents[x], ...params);
		let keys = MyEvent.getIDSFromEvent(onceEvents[x]);
		keys.forEach((k) => { MyEvent.unbind(k, onceEvents[x]); })
	}
}

//-----------------------------------------------------\\



MyEvent.bind('tabs', 'get-charts', generateCharts);

MyEvent.bind('chartline', 'line-chart', lineChart);
MyEvent.bind('chartarea', 'area-chart', areaChart);
MyEvent.bind('chartbar', 'bar-chart', barChart);
MyEvent.bind('chartpie', 'pie-chart', pieChart);
MyEvent.bind('charttreemap', 'treemap-chart', treemapChart);

// y = chart.getChartArea();
// s = new XMLSerializer().serializeToString(y);

// https://stackoverflow.com/questions/28450471/convert-inline-svg-to-base64-string