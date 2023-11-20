import { gridJSOptions } from "../config";
export const TableContainerName = 'fake-chart-container-table';
export const TableEventName = 'chart-init-table';

function drawTable(result) {
	const container = document.querySelector('[chartType="table"]');
	container.innerHTML = '';
	console.log('DRAW TABLE!', result);
	if (container) {
		const config = Merger(gridJSOptions, {
			columns: result.data.columns,
			data: result.data.values
		});
		const t = new gridjs.Grid(config)
		t.render(container);
	}
}


MyEvent.bind(TableContainerName, TableEventName, drawTable);