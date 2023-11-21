export const DEFAULT_IP = '10.160.4.113';
export const DEFAULT_PORT = 7788;
export const DEFAULT_CHART_HEIGHT = 600;
export const SHOW_LOGIN_FORM = true;
export const AI_ENDPOINT = `http://${DEFAULT_IP}:${DEFAULT_PORT}/api/ask`;
export const ASK_EVEN_IF_SAVED_TO_CONFIG = false;
export const CONVERT_TO_DANFO = true;
export const DEFAULT_COLORS = [
	...['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
	...['#662E9B', '#EA3546', '#F86624', '#F9C80E', '#43BCCD'].reverse(),
];


export const SHOW_VALID_QUESTIONS = true;
export const VALID_QUESTIONS = [
	'Count the causa',
	'list the gruppo and their count',
	'get the average of the Durata for each Gruppo'
];

export const gridJSOptions = {
	search: true,
	sort: { sortAsc: 'Ordine crescente', sortDesc: 'Ordine decrescente' },
	resizable: true,
	pagination: true,
	fixedHeader: true,
	autoWidth: false,
	language: {
		search: { placeholder: 'Cerca...' },
		pagination: {
			previous: 'Precedente',
			next: 'Successivo',
			showing: 'Mostrati risultati da',
			to: 'a',
			of: 'di',
			results: 'totali',
		}
	},
	className: {
		tr: 'gridjs-custom-row',
	}
}


export const GLOBAL_CHART_CONFIG = {
	chart: {
		height: DEFAULT_CHART_HEIGHT,
		toolbar: {
			show: true,
			tools: {
				download: false
			}
		}
	},
	xaxis: {
		labels: {
			rotate: -35,
			rotateAlways: true,
			maxHeight: 200,
			minHeight: 200,
			trim: false,
		}
	}
}

export const ConfigLineChart = Merger(GLOBAL_CHART_CONFIG, {
	chart: { type: 'line' },
	stroke: { curve: 'smooth' },
	markers: { size: 5 },
});

export const ConfigAreaChart = Merger(GLOBAL_CHART_CONFIG, {
	chart: { type: 'area' },
	stroke: { curve: 'smooth' },
	markers: { size: 5 },
});

export const ConfigBarChart = Merger(GLOBAL_CHART_CONFIG, {
	chart: { type: 'bar' },
});

export const ConfigPieChart = Merger(GLOBAL_CHART_CONFIG, {
	chart: { type: 'donut' },
	dataLabels: { enabled: false },
	colors: DEFAULT_COLORS,
});

export const ConfigTreemapChart = Merger(GLOBAL_CHART_CONFIG, {
	chart: { type: 'treemap' },
	plotOptions: {
		treemap: { distributed: true, shadeIntensity: 0.4 }
	},
	dataLabels: { enabled: true },
	xaxis: {},
	colors: DEFAULT_COLORS
})
