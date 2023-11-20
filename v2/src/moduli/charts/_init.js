import { TableEventName } from "./table";
import { LineChartEventName } from "./line";
import { AreaChartEventName } from "./area";
import { BarChartEventName } from "./bar";
import { PieChartEventName } from "./pie";
import { TreemapChartEventName } from "./tree";

MyEvent.bind('fake-chart-container', 'init-charts', (data, type='table') => {
	const drawObject = {
		table: ()   => { MyEvent.emit(TableEventName, data)         },
		line: ()    => { MyEvent.emit(LineChartEventName, data)     },
		bar: ()     => { MyEvent.emit(BarChartEventName, data)      },
		pie: ()     => { MyEvent.emit(PieChartEventName, data)      },
		treemap: () => { MyEvent.emit(TreemapChartEventName, data)  },
		// area: () => { MyEvent.emit(AreaChartEventName, data )},
	};

	for (let k in drawObject) {
		drawObject[k]();
	}
	// if (Object.keys(drawObject).includes(type)) {
	// 	drawObject[type]();
	// }
});