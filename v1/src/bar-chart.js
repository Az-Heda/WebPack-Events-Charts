import ApexCharts from "apexcharts";


export function checkData(data) {
	const { labels, values } = data;
	// console.log('CHECKDATA', { labels, values })
	if (labels.length == 2) {
		let corr = false;
		let funcs = ['avg', 'count', 'sum', 'min', 'max'];
		labels.forEach((l) => {
			// console.log(`${l.toLowerCase().split('(')[0]} - [${funcs.join(', ')}]`)
			if (funcs.includes(l.toLowerCase().split('(')[0])) {
				corr = true;
			}
		});
		return corr
	}
	return false;
}

function barChart(labels, data) {
	// const container = document.getElementById('test-chart');
	// const bchart = new ApexCharts(container, {
	// 	chart: { type: 'bar', height: 700, },
	// 	series: [{ data: data.map((item) => { return { x: item[0], y: item[1] } }), }],
	// 	plotOptions: {
	// 		bar: {
	// 			horizontal: true,
	// 			dataLabels: { position: 'top', }
	// 		}
	// 	},
	// 	dataLabels: {
	// 		offsetX: 30,
	// 		style: { colors: ['#000000'], },
	// 		formatter: (n) => { return (n > 1e6) ? `${Math.floor(n / 1e6)}M` : (n > 1e3) ? `${Math.floor(n / 1e3)}K` : `${n}`; }
	// 	}
	// });
	// bchart.render();
	// MyEvent.bind('test-chart', 'GET_chart', () => { return bchart });
	// MyEvent.bind('test-chart', 'ONCE_clear-chart', () => { bchart.destroy() });
}


//-----------------------------------------------------\\

MyEvent.bind('barchart', 'draw-bar-chart', checkData);
MyEvent.bind('barchart', 'chart-from-fetch', barChart);