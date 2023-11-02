import ApexCharts from "apexcharts";
import { clearOnceEvents, getColor, filterPIE, DEFAULT_COLORS, mapNumber, prodMode} from "./_";

const height = 500;
const toolbar = {
	show: true,
	tools: {
		download: false,
	}
};
let activeChart = '';
const logStyle = 'success';

export function generateCharts(data) {
	// lineChart(data);
	// areaChart(data);
	// barChart(data);
	// pieChart(data);
	// treemapChart(data);
	// MyEvent.emit('bar-chart', MyEvent.emit('get-data')[0]);
	MyEvent.emit(MyEvent.emit('get-current-active-chart')[0] || 'bar-chart', MyEvent.emit('get-data')[0]);
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
		colors: getColor(),
	};
	if (!prodMode) { logMessage('Line chart', options, logStyle); }
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-line-chart', () => { chart.destroy() });
	return chart;
}

function areaChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
	const container = document.getElementById('chartarea');
	const options = {
		chart: { type: 'area', height, toolbar },
		dataLabels: { enabled: false },
		series: [
			{ name: 'test', data: renamed.map((item) => { return item.y }) },
		],
		labels: renamed.map((item) => { return item.x }),
		stroke: { width: [5], curve: 'smooth' },
		colors: getColor()
	};
	if (!prodMode) { logMessage('Area chart', options, logStyle); }
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-area-chart', () => { chart.destroy() });
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
		colors: getColor(),
	};
	if (!prodMode) { logMessage('Bar chart', options, logStyle); }
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-bar-chart', () => { chart.destroy() });
	return chart;
}

function pieChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('chartpie-chart');
	const options = {
		chart: { type: 'pie', height, toolbar },
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		colors: DEFAULT_COLORS,
	};
	if (!prodMode) { logMessage('Pie chart', options, logStyle); }
	let chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-pie-chart', () => { chart.destroy() });
	if (!MyEvent.events.includes('update-pie-chart')) {
		MyEvent.bind(container.getAttribute('id'), 'update-pie-chart', (p) => {
			document.getElementById('altri-value-pie').textContent = ((p*1).toFixed(1))+'%';
			chart.destroy();
			const optionCopy = {
				...options,
				chart: {
					...options.chart,
					animations: { enabled: false },
				},
				dataLabels: options.dataLabels,
				labels: filterPIE(renamed, `${p}%`).map((item) => { return item.x }),
				series: filterPIE(renamed, `${p}%`).map((item) => { return item.y }),
			}
			if (!prodMode) { logMessage('Pie chart - updater', optionCopy, logStyle); }
			chart = new ApexCharts(container, optionCopy);
			chart.render();
		});
	}
	return chart;
}

function polarareaChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const container = document.getElementById('chartpolararea-chart');
	const options = {
		chart: { type: 'polarArea', height, toolbar },
		dataLabels: { enabled: false },
		// labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		// series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		dataLabels: { enabled: false },
		labels: filterPIE(renamed, '4%').map((item) => { return item.x }),
		series: filterPIE(renamed, '4%').map((item) => { return item.y }),
		colors: DEFAULT_COLORS,
	};
	if (!prodMode) { logMessage('PolarArea chart', options, logStyle); }
	let chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-polararea-chart', () => { chart.destroy() });
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-polararea-chart', () => { chart.destroy() });
	if (!MyEvent.events.includes('update-polararea-chart')) {
		MyEvent.bind(container.getAttribute('id'), 'update-polararea-chart', (p) => {
			document.getElementById('altri-value-polararea').textContent = ((p*1).toFixed(1))+'%';
			chart.destroy();
			const optionCopy = {
				...options,
				chart: {
					...options.chart,
					animations: { enabled: false },
				},
				dataLabels: options.dataLabels,
				labels: filterPIE(renamed, `${p}%`).map((item) => { return item.x }),
				series: filterPIE(renamed, `${p}%`).map((item) => { return item.y }),
			}
			if (!prodMode) { logMessage('PolarArea chart - updater', optionCopy, logStyle); }
			chart = new ApexCharts(container, optionCopy);
			chart.render();
		});
	}
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
		colors: DEFAULT_COLORS,
	};
	if (!prodMode) { logMessage('Treemap chart', options, logStyle); }
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind('charttreemap', 'ONCE_clear-treemap-chart', () => { chart.destroy() });
	return chart;
}

function radarChart(data) {
	clearOnceEvents();
	const renamed = structuredClone(data)
		.map((item) => { return { x: item[Object.keys(item)[0]], y: item[Object.keys(item)[1]] } })
		// .sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0});
	const allNumbers = renamed.map((item) => { return item.y });
	const container = document.getElementById('chartradar');
	const options = {
		chart: { type: 'radar', height, toolbar },
		dataLabels: { enabled: false },
		labels: renamed.map((item) => { return item.x }),
		series: [
			{ name: 'Query', data: allNumbers.map((item) => { return mapNumber(item, Math.min(...allNumbers), Math.max(...allNumbers), 0, 100) }) }
		],
		colors: getColor(),
		plotOptions: { radar: { polygons: { strokeColor: '#e8e8e8', fill: { colors: ['#f8f8f8', '#fff'] }}}}
	};
	if (!prodMode) { logMessage('Radar chart', options, logStyle); }
	const chart = new ApexCharts(container, options);
	chart.render();
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-radar-chart', () => { chart.destroy() });
}

function tableChart(data) {

	const labels = Object.entries(data[0]).map((i) => { return i[0] });
	const values = data.map((i) => {
		return Object.entries(i).map((e) => {
			return e[1];
		});
	});

	const container = document.getElementById('charttable');
	const sortAsc = 'Ordine crescente';
	const sortDesc = 'Ordine decrescente';
	const language = {
		search: { placeholder: 'Cerca...' },
		pagination: {
			previous: 'Precedente', next: 'Successivo',
			showing: 'Mostrati risultati da',
			results: 'totali', to: 'a', of: 'di',
		},
	};
	const options = {
		columns: [...labels ],
		data: [ ...values ],
		search: true,
		sort: { sortAsc, sortDesc },
		resizable: true,
		pagination: true,
		fixedHeader: true,
		autoWidth: false,
		language,
		className: {
			tr: 'gridjs-custom-row',
		}
	};
	if (!prodMode) { logMessage('Table', options, logStyle); }
	let table = new gridjs.Grid(options);
	table.render(container);

	// MyEvent.bind(container.getAttribute('id'), 'get-table', () => { return table });
	MyEvent.bind(container.getAttribute('id'), 'ONCE_clear-table-chart', () => { table.destroy() });
}

//-----------------------------------------------------\\

MyEvent.bind('tabs', 'get-charts', generateCharts);

const eventData = [
	{ id: 'charttable',       name: 'table-chart',       fun: tableChart       },
	{ id: 'chartline',        name: 'line-chart',        fun: lineChart        },
	{ id: 'chartarea',        name: 'area-chart',        fun: areaChart        },
	{ id: 'chartbar',         name: 'bar-chart',         fun: barChart         },
	{ id: 'chartpie',         name: 'pie-chart',         fun: pieChart         },
	{ id: 'charttreemap',     name: 'treemap-chart',     fun: treemapChart     },
	{ id: 'chartradar',       name: 'radar-chart',       fun: radarChart       },
	{ id: 'chartpolararea',   name: 'polararea-chart',   fun: polarareaChart   },
];

eventData.forEach((p) => {
	MyEvent.bind(p.id, p.name, (...data) => {
		MyEvent.emit('set-current-active-chart', p.name);
		return p.fun(...data);
	})
});

MyEvent.bind('ai-search', 'set-current-active-chart', (v) => { activeChart = v });
MyEvent.bind('ai-search', 'get-current-active-chart', () => { return activeChart });

document.getElementById('altri-input-pie').addEventListener("input", (event) => { MyEvent.emit('update-pie-chart', event.target.value); });
document.getElementById('altri-input-polararea').addEventListener("input", (event) => { MyEvent.emit('update-polararea-chart', event.target.value); });