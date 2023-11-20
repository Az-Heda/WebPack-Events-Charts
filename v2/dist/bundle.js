/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduli_charts_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduli/charts/area */ \"./src/moduli/charts/area.js\");\n/* harmony import */ var _moduli_charts_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduli/charts/bar */ \"./src/moduli/charts/bar.js\");\n/* harmony import */ var _moduli_charts_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduli/charts/line */ \"./src/moduli/charts/line.js\");\n/* harmony import */ var _moduli_charts_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduli/charts/pie */ \"./src/moduli/charts/pie.js\");\n/* harmony import */ var _moduli_charts_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduli/charts/table */ \"./src/moduli/charts/table.js\");\n/* harmony import */ var _moduli_charts_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduli/charts/tree */ \"./src/moduli/charts/tree.js\");\n/* harmony import */ var _moduli_charts_init__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduli/charts/_init */ \"./src/moduli/charts/_init.js\");\n/* harmony import */ var _moduli_logic_post_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moduli/logic/post-data */ \"./src/moduli/logic/post-data.js\");\n/* harmony import */ var _moduli_logic_setup_endpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduli/logic/setup-endpoint */ \"./src/moduli/logic/setup-endpoint.js\");\n/* harmony import */ var _moduli_ui_cardClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moduli/ui/cardClass */ \"./src/moduli/ui/cardClass.js\");\n/* harmony import */ var _moduli_ui_create_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moduli/ui/create-card */ \"./src/moduli/ui/create-card.js\");\n/* harmony import */ var _moduli_ui_valid_questions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moduli/ui/valid-questions */ \"./src/moduli/ui/valid-questions.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moduli/charts/_init.js":
/*!************************************!*\
  !*** ./src/moduli/charts/_init.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./src/moduli/charts/table.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ \"./src/moduli/charts/line.js\");\n/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area */ \"./src/moduli/charts/area.js\");\n/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar */ \"./src/moduli/charts/bar.js\");\n/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie */ \"./src/moduli/charts/pie.js\");\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree */ \"./src/moduli/charts/tree.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nMyEvent.bind('fake-chart-container', 'init-charts', (data, type='table') => {\r\n\tconst drawObject = {\r\n\t\ttable: ()   => { MyEvent.emit(_table__WEBPACK_IMPORTED_MODULE_0__.TableEventName, data)         },\r\n\t\tline: ()    => { MyEvent.emit(_line__WEBPACK_IMPORTED_MODULE_1__.LineChartEventName, data)     },\r\n\t\tbar: ()     => { MyEvent.emit(_bar__WEBPACK_IMPORTED_MODULE_3__.BarChartEventName, data)      },\r\n\t\tpie: ()     => { MyEvent.emit(_pie__WEBPACK_IMPORTED_MODULE_4__.PieChartEventName, data)      },\r\n\t\ttreemap: () => { MyEvent.emit(_tree__WEBPACK_IMPORTED_MODULE_5__.TreemapChartEventName, data)  },\r\n\t\t// area: () => { MyEvent.emit(AreaChartEventName, data )},\r\n\t};\r\n\r\n\tfor (let k in drawObject) {\r\n\t\tdrawObject[k]();\r\n\t}\r\n\t// if (Object.keys(drawObject).includes(type)) {\r\n\t// \tdrawObject[type]();\r\n\t// }\r\n});\n\n//# sourceURL=webpack:///./src/moduli/charts/_init.js?");

/***/ }),

/***/ "./src/moduli/charts/area.js":
/*!***********************************!*\
  !*** ./src/moduli/charts/area.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AreaChartContainerName: () => (/* binding */ AreaChartContainerName),\n/* harmony export */   AreaChartEventName: () => (/* binding */ AreaChartEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst AreaChartContainerName = 'fake-chart-container-area';\r\nconst AreaChartEventName = 'chart-init-area';\r\n\r\n\r\nfunction drawChart(result) {\r\n\tconst container = document.querySelector('[chartType=\"areachart\"]');\r\n\tcontainer.innerHTML = '';\r\n\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigAreaChart, {\r\n\t\tseries: [{ name: '#', data: result.data.values.map((item) => { return item[1] }) }],\r\n\t\txaxis: { categories: result.data.values.map((item) => { return item[0] }) }\r\n\t});\r\n\tnew ApexCharts(container, config).render()\r\n}\r\n\r\n\r\nMyEvent.bind(AreaChartContainerName, AreaChartEventName, drawChart);\n\n//# sourceURL=webpack:///./src/moduli/charts/area.js?");

/***/ }),

/***/ "./src/moduli/charts/bar.js":
/*!**********************************!*\
  !*** ./src/moduli/charts/bar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BarChartContainerName: () => (/* binding */ BarChartContainerName),\n/* harmony export */   BarChartEventName: () => (/* binding */ BarChartEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst BarChartContainerName = 'fake-chart-container-bar';\r\nconst BarChartEventName = 'chart-init-bar';\r\n\r\n\r\nfunction drawChart(result) {\r\n\tconst container = document.querySelector('[chartType=\"barchart\"]');\r\n\tcontainer.innerHTML = '';\r\n\tconsole.log(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigBarChart);\r\n\tconsole.log(result.data.values.map((item) => { return { x: item[0], y: item[1] } }))\r\n\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigBarChart, {\r\n\t\tseries: [{ data: result.data.values.map((item) => { return { x: item[0], y: item[1] } }) }], \r\n\t\txaxis: { categories: result.data.values.map((item) => { return item[0] }) }\r\n\t});\r\n\tconsole.log(config);\r\n\tnew ApexCharts(container, config).render()\r\n}\r\n\r\n\r\nMyEvent.bind(BarChartContainerName, BarChartEventName, drawChart);\n\n//# sourceURL=webpack:///./src/moduli/charts/bar.js?");

/***/ }),

/***/ "./src/moduli/charts/line.js":
/*!***********************************!*\
  !*** ./src/moduli/charts/line.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LineChartContainerName: () => (/* binding */ LineChartContainerName),\n/* harmony export */   LineChartEventName: () => (/* binding */ LineChartEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst LineChartContainerName = 'fake-chart-container-line';\r\nconst LineChartEventName = 'chart-init-line';\r\n\r\n\r\nfunction drawChart(result) {\r\n\tconst container = document.querySelector('[chartType=\"linechart\"]');\r\n\tcontainer.innerHTML = '';\r\n\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigLineChart, {\r\n\t\tseries: [{ name: '#', data: result.data.values.map((item) => { return item[1] }) }],\r\n\t\txaxis: { categories: result.data.values.map((item) => { return item[0] }) }\r\n\t});\r\n\tnew ApexCharts(container, config).render()\r\n}\r\n\r\n\r\nMyEvent.bind(LineChartContainerName, LineChartEventName, drawChart);\n\n//# sourceURL=webpack:///./src/moduli/charts/line.js?");

/***/ }),

/***/ "./src/moduli/charts/pie.js":
/*!**********************************!*\
  !*** ./src/moduli/charts/pie.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PieChartContainerName: () => (/* binding */ PieChartContainerName),\n/* harmony export */   PieChartEventName: () => (/* binding */ PieChartEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst PieChartContainerName = 'fake-chart-container-pie';\r\nconst PieChartEventName = 'chart-init-pie';\r\n\r\n\r\nfunction drawChart(result) {\r\n\tconst container = document.querySelector('[chartType=\"piechart\"]');\r\n\tcontainer.innerHTML = '';\r\n\tconsole.log(result.data.values.map((item) => { return { x: item[0], y: item[1] } }))\r\n\tconst rd = structuredClone(result.data.values).sort((a, b) => { return (a[1] > b[1]) ? -1 : (a[1] < b[1]) ? 1 : 0});\r\n\tlet series = rd.map((item) => { return item[1] });\r\n\tlet labels = rd.map((item) => { return item[0] });\r\n\r\n\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigPieChart, { labels, series });\r\n\tnew ApexCharts(container, config).render()\r\n}\r\n\r\n\r\nMyEvent.bind(PieChartContainerName, PieChartEventName, drawChart);\n\n//# sourceURL=webpack:///./src/moduli/charts/pie.js?");

/***/ }),

/***/ "./src/moduli/charts/table.js":
/*!************************************!*\
  !*** ./src/moduli/charts/table.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TableContainerName: () => (/* binding */ TableContainerName),\n/* harmony export */   TableEventName: () => (/* binding */ TableEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst TableContainerName = 'fake-chart-container-table';\r\nconst TableEventName = 'chart-init-table';\r\n\r\nfunction drawTable(result) {\r\n\tconst container = document.querySelector('[chartType=\"table\"]');\r\n\tcontainer.innerHTML = '';\r\n\tconsole.log('DRAW TABLE!', result);\r\n\tif (container) {\r\n\t\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.gridJSOptions, {\r\n\t\t\tcolumns: result.data.columns,\r\n\t\t\tdata: result.data.values\r\n\t\t});\r\n\t\tconst t = new gridjs.Grid(config)\r\n\t\tt.render(container);\r\n\t}\r\n}\r\n\r\n\r\nMyEvent.bind(TableContainerName, TableEventName, drawTable);\n\n//# sourceURL=webpack:///./src/moduli/charts/table.js?");

/***/ }),

/***/ "./src/moduli/charts/tree.js":
/*!***********************************!*\
  !*** ./src/moduli/charts/tree.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TreemapChartContainerName: () => (/* binding */ TreemapChartContainerName),\n/* harmony export */   TreemapChartEventName: () => (/* binding */ TreemapChartEventName)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst TreemapChartContainerName = 'fake-chart-container-treemap';\r\nconst TreemapChartEventName = 'chart-init-treemap';\r\n\r\n\r\nfunction drawChart(result) {\r\n\tconst container = document.querySelector('[chartType=\"treemap\"]');\r\n\tcontainer.innerHTML = '';\r\n\tlet data = structuredClone(result.data.values).map((item) => { return { x: item[0], y: item[1] } })\r\n\t\t.sort((a, b) => { return (a.y > b.y) ? -1 : (a.y < b.y) ? 1 : 0})\r\n\tconst config = Merger(_config__WEBPACK_IMPORTED_MODULE_0__.ConfigTreemapChart, { series: [{ data }] });\r\n\tnew ApexCharts(container, config).render()\r\n}\r\n\r\n\r\nMyEvent.bind(TreemapChartContainerName, TreemapChartEventName, drawChart);\n\n//# sourceURL=webpack:///./src/moduli/charts/tree.js?");

/***/ }),

/***/ "./src/moduli/config.js":
/*!******************************!*\
  !*** ./src/moduli/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AI_ENDPOINT: () => (/* binding */ AI_ENDPOINT),\n/* harmony export */   ASK_EVEN_IF_SAVED_TO_CONFIG: () => (/* binding */ ASK_EVEN_IF_SAVED_TO_CONFIG),\n/* harmony export */   CONVERT_TO_DANFO: () => (/* binding */ CONVERT_TO_DANFO),\n/* harmony export */   ConfigAreaChart: () => (/* binding */ ConfigAreaChart),\n/* harmony export */   ConfigBarChart: () => (/* binding */ ConfigBarChart),\n/* harmony export */   ConfigLineChart: () => (/* binding */ ConfigLineChart),\n/* harmony export */   ConfigPieChart: () => (/* binding */ ConfigPieChart),\n/* harmony export */   ConfigTreemapChart: () => (/* binding */ ConfigTreemapChart),\n/* harmony export */   DEFAULT_CHART_HEIGHT: () => (/* binding */ DEFAULT_CHART_HEIGHT),\n/* harmony export */   DEFAULT_COLORS: () => (/* binding */ DEFAULT_COLORS),\n/* harmony export */   DEFAULT_IP: () => (/* binding */ DEFAULT_IP),\n/* harmony export */   DEFAULT_PORT: () => (/* binding */ DEFAULT_PORT),\n/* harmony export */   GLOBAL_CHART_CONFIG: () => (/* binding */ GLOBAL_CHART_CONFIG),\n/* harmony export */   SHOW_LOGIN_FORM: () => (/* binding */ SHOW_LOGIN_FORM),\n/* harmony export */   SHOW_VALID_QUESTIONS: () => (/* binding */ SHOW_VALID_QUESTIONS),\n/* harmony export */   VALID_QUESTIONS: () => (/* binding */ VALID_QUESTIONS),\n/* harmony export */   gridJSOptions: () => (/* binding */ gridJSOptions)\n/* harmony export */ });\nconst DEFAULT_IP = '10.160.4.113';\r\nconst DEFAULT_PORT = 7788;\r\nconst DEFAULT_CHART_HEIGHT = 600;\r\nconst SHOW_LOGIN_FORM = true;\r\nconst AI_ENDPOINT = `http://${DEFAULT_IP}:${DEFAULT_PORT}/api/ask`;\r\nconst ASK_EVEN_IF_SAVED_TO_CONFIG = false;\r\nconst CONVERT_TO_DANFO = true;\r\nconst DEFAULT_COLORS = [\r\n\t...['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],\r\n\t...['#662E9B', '#EA3546', '#F86624', '#F9C80E', '#43BCCD'].reverse(),\r\n];\r\n\r\n\r\nconst SHOW_VALID_QUESTIONS = true;\r\nconst VALID_QUESTIONS = [\r\n\t'Count the causa',\r\n\t'list the gruppo and their count'\r\n];\r\n\r\nconst gridJSOptions = {\r\n\tsearch: true,\r\n\tsort: { sortAsc: 'Ordine crescente', sortDesc: 'Ordine decrescente' },\r\n\tresizable: true,\r\n\tpagination: true,\r\n\tfixedHeader: true,\r\n\tautoWidth: false,\r\n\tlanguage: {\r\n\t\tsearch: { placeholder: 'Cerca...' },\r\n\t\tpagination: {\r\n\t\t\tprevious: 'Precedente',\r\n\t\t\tnext: 'Successivo',\r\n\t\t\tshowing: 'Mostrati risultati da',\r\n\t\t\tto: 'a',\r\n\t\t\tof: 'di',\r\n\t\t\tresults: 'totali',\r\n\t\t}\r\n\t},\r\n\tclassName: {\r\n\t\ttr: 'gridjs-custom-row',\r\n\t}\r\n}\r\n\r\n\r\nconst GLOBAL_CHART_CONFIG = {\r\n\tchart: {\r\n\t\theight: DEFAULT_CHART_HEIGHT,\r\n\t\ttoolbar: {\r\n\t\t\tshow: true,\r\n\t\t\ttools: {\r\n\t\t\t\tdownload: false\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\txaxis: {\r\n\t\tlabels: {\r\n\t\t\trotate: -35,\r\n\t\t\trotateAlways: true,\r\n\t\t\tmaxHeight: 200,\r\n\t\t\tminHeight: 200,\r\n\t\t\ttrim: false,\r\n\t\t}\r\n\t}\r\n}\r\n\r\nconst ConfigLineChart = Merger(GLOBAL_CHART_CONFIG, {\r\n\tchart: { type: 'line' },\r\n\tstroke: { curve: 'smooth' },\r\n\tmarkers: { size: 5 },\r\n});\r\n\r\nconst ConfigAreaChart = Merger(GLOBAL_CHART_CONFIG, {\r\n\tchart: { type: 'area' },\r\n\tstroke: { curve: 'smooth' },\r\n\tmarkers: { size: 5 },\r\n});\r\n\r\nconst ConfigBarChart = Merger(GLOBAL_CHART_CONFIG, {\r\n\tchart: { type: 'bar' },\r\n});\r\n\r\nconst ConfigPieChart = Merger(GLOBAL_CHART_CONFIG, {\r\n\tchart: { type: 'donut' },\r\n\tdataLabels: { enabled: false },\r\n\tcolors: DEFAULT_COLORS,\r\n});\r\n\r\nconst ConfigTreemapChart = Merger(GLOBAL_CHART_CONFIG, {\r\n\tchart: { type: 'treemap' },\r\n\tplotOptions: {\r\n\t\ttreemap: { distributed: true, shadeIntensity: 0.4 }\r\n\t},\r\n\tdataLabels: { enabled: true },\r\n\txaxis: {},\r\n\tcolors: DEFAULT_COLORS\r\n})\r\n\n\n//# sourceURL=webpack:///./src/moduli/config.js?");

/***/ }),

/***/ "./src/moduli/logic/post-data.js":
/*!***************************************!*\
  !*** ./src/moduli/logic/post-data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst userInput = document.getElementById('user-question');\r\n\r\nasync function fetchData() {\r\n\tconst question = userInput.value;\r\n\tconst data = {\r\n\t\tquestion,\r\n\t\t...(BetterDom.archive?.connection || {})\r\n\t};\r\n\tconst checkValues = ['question', 'server', 'database']\r\n\t\t.map((i) => { return +Object.keys(data).includes(i)})\r\n\t\t.reduce((a, v) => { return v += a }, 0);\r\n\tif (checkValues == 3) {\r\n\t\treturn new Promise(async (resolve, reject) => {\r\n\t\t\t\tconst options = {\r\n\t\t\t\t\tmethod: 'POST',\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(data)\r\n\t\t\t}\r\n\t\t\tlet responseRAW = await fetch(_config__WEBPACK_IMPORTED_MODULE_0__.AI_ENDPOINT, options).catch(reject);\r\n\t\t\tlet response = await responseRAW.json().catch(reject);\r\n\t\t\tresolve(response);\r\n\t\t});\r\n\t}\r\n\telse {\r\n\t\treturn Promise.reject('Missing data')\r\n\t}\r\n}\r\n\r\nfunction parsedData(inputData) {\r\n\tconst { perf, data, metadata, query, question, error } = inputData;\r\n\t// if (error) throw new Error(error);\r\n\tBetterDom.archive.result = {\r\n\t\tperf,\r\n\t\tquery,\r\n\t\tquestion,\r\n\t\tmetadata,\r\n\t\tdata: (_config__WEBPACK_IMPORTED_MODULE_0__.CONVERT_TO_DANFO) ? new dfd.DataFrame(data) : data,\r\n\t}\r\n\tconst ct = document.querySelector('div.tab-content div.active').getAttribute('chartType');\r\n\tMyEvent.emit('init-charts', BetterDom.archive.result, ct);\r\n}\r\n\r\n\r\nuserInput.addEventListener('keyup', (event) => {\r\n\tevent.preventDefault();\r\n\tif (event.keyCode === 13) { // Enter\r\n\t\tfetchData().then(parsedData);\r\n\t}\r\n})\n\n//# sourceURL=webpack:///./src/moduli/logic/post-data.js?");

/***/ }),

/***/ "./src/moduli/logic/setup-endpoint.js":
/*!********************************************!*\
  !*** ./src/moduli/logic/setup-endpoint.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\n\r\nfunction loginForm(params={}) {\r\n\tconst container = `\r\n\t<form id=\"setup-form\">\r\n\t\t<div class=\"mygrid-row form-group\">\r\n\t\t\t<div class=\"inputForm mygrid-120\" >\r\n\t\t\t\t<input class=\"mainInput input-alt\" type=\"text\" id=\"get-host\" name=\"get-host\" placeholder=\"Host\" value=\"${params?.host || ''}\" autocomplete=\"off\">\r\n\t\t\t\t<span class=\"input-border input-border-alt\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"mygrid-row form-group\">\r\n\t\t\t<div class=\"inputForm mygrid-120\" >\r\n\t\t\t\t<input class=\"mainInput input-alt\" type=\"text\" id=\"get-db\" name=\"get-db\" placeholder=\"Database\" values=\"${params?.db || ''}\" autocomplete=\"off\">\r\n\t\t\t\t<span class=\"input-border input-border-alt\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"mygrid-row form-group\" style=\"margin-top: 10px\">\r\n\t\t\t<button class=\"btn btn-info mygrid-120\" name=\"validate-form\" id=\"form-validator\">Conferma</button>\r\n\t\t</div>\r\n\t</form>\r\n\t`\r\n\r\n\tconst config = {\r\n\t\ttitle: 'Collegamento con il database',\r\n\t\tcontent: new Tag('div').html(container).node,\r\n\t\tbutton: false,\r\n\t\tcloseOnEsc: true,\r\n\t\tcloseOnClickOutside: true\r\n\t}\r\n\tsetTimeout(() => {\r\n\t\tlet host = document.getElementById('get-host');\r\n\t\tlet db = document.getElementById('get-db');\r\n\t\tlet btn = document.getElementById('form-validator');\r\n\t\tlet form = document.getElementById('setup-form');\r\n\r\n\t\tconst locstorKey = 'query-headers';\r\n\t\tconst locstorDur = 1000 * 60 * 60 * 24 * 7 * 4; // 4 Settimane\r\n\t\tlet currentValue = MyStorage.getCookie(locstorKey);\r\n\t\tif (currentValue) {\r\n\t\t\thost.value = currentValue.server;\r\n\t\t\tdb.value = currentValue.database;\r\n\t\t}\r\n\t\thost.focus();\r\n\t\tform.addEventListener('submit', (event) => {\r\n\t\t\tevent.preventDefault();\r\n\t\t\tif (db.value.length == 0) return db.focus();\r\n\t\t\tif (host.value.length == 0) return host.focus();\r\n\r\n\t\t\tconst values = { server: host.value, database: db.value }\r\n\t\t\tif (swal.getState().isOpen) swal.close();\r\n\t\t\tMyStorage.setCookie(locstorKey, values, locstorDur)\r\n\t\t\tBetterDom.archive.connection = values;\r\n\t\t})\r\n\t}, 100)\r\n\treturn config;\r\n}\r\n\r\n\r\nif (_config__WEBPACK_IMPORTED_MODULE_0__.SHOW_LOGIN_FORM) {\r\n\tif (MyStorage.getCookie('query-headers') && !_config__WEBPACK_IMPORTED_MODULE_0__.ASK_EVEN_IF_SAVED_TO_CONFIG) { BetterDom.archive.connection = MyStorage.getCookie('query-headers');}\r\n\telse { swal({ ...loginForm() }) }\r\n\t// if (!(ASK_EVEN_IF_SAVED_TO_CONFIG && MyStorage.getCookie('query-headers'))) {\r\n\t\t\r\n\t// }\r\n}\n\n//# sourceURL=webpack:///./src/moduli/logic/setup-endpoint.js?");

/***/ }),

/***/ "./src/moduli/ui/cardClass.js":
/*!************************************!*\
  !*** ./src/moduli/ui/cardClass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MyCard: () => (/* binding */ MyCard)\n/* harmony export */ });\nclass MyCard {\r\n\ttabs = [\r\n\t\t'Table',\r\n\t\t'Line chart',\r\n\t\t// 'Area chart',\r\n\t\t'Bar chart',\r\n\t\t'Pie chart',\r\n\t\t'Treemap'\r\n\t];\r\n\ttemplate1 = `\r\n\t<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\t\t${this.tabs.map((t, i) => {\r\n\t\t\treturn `<li class=\"nav-item\"><a class=\"${(i == 0) ? 'nav-link active' : 'nav-link'}\" data-toggle=\"tab\" href=\"#tab_index_${i}\">${t}</a></li>`\r\n\t\t}).join('\\n\\t\\t')}\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t${this.tabs.map((t, i) => {\r\n\t\t\treturn `<div id=\"tab_index_${i}\" chartType=\"${t.toLowerCase().replaceAll(' ', '')}\" class=\"${(i == 0) ? 'container-fluid tab-pane active' : 'container-fluid tab-pane '}\">${t}</div>`;\r\n\t\t}).join('\\n\\t\\t')}\r\n\t</div>\r\n\t`;\r\n\ttemplate2 = ``;\r\n\t\r\n\tparent1 = document.querySelector('#main-content');\r\n\t// parent2 = document.getElementById('');\r\n\tconstructor(options={}) {\r\n\t\tthis._config = {\r\n\t\t\t...options,\r\n\t\t};\r\n\t\tthis.tag1 = new Tag('div')\r\n\t\t\t.html(this.template1).appendTo(this.parent1);\r\n\t\t// this.tag2 = new Tag('div').html(this.template2);\r\n\t}\r\n\r\n\texport() {\r\n\t\treturn this._config;\r\n\t}\r\n\r\n\tstatic import(data) {\r\n\t\treturn new MyCard(data)\r\n\t}\r\n}\r\n\r\nBetterDom.archive.x = new MyCard({});\n\n//# sourceURL=webpack:///./src/moduli/ui/cardClass.js?");

/***/ }),

/***/ "./src/moduli/ui/create-card.js":
/*!**************************************!*\
  !*** ./src/moduli/ui/create-card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawCard: () => (/* binding */ drawCard)\n/* harmony export */ });\n\r\n\r\nfunction drawCard() {\r\n\tlet cardTemplate = `\r\n\t<div class=\"my-card\">\r\n\t\t<div class=\"card-header\"> $% header %$ </div>\r\n\t\t<div class=\"card-body\"> $% body %$ </div>\r\n\t\t<div class=\"card-footer\"> $% footer %$ </div>\r\n\t</div>\r\n\t`;\r\n\t\r\n\tlet data = [\r\n\t\t{ header: 'Header card #1', body: 'Body card #1', footer: 'Footer card #1' },\r\n\t\t{ header: 'Header card #2', body: 'Body card #2', footer: 'Footer card #2' },\r\n\t\t{ header: 'Header card #3', body: 'Body card #3', footer: 'Footer card #3' },\r\n\t];\r\n\r\n\tlet container = new Tag('div')\r\n\t.addClass('row')\r\n\t.appendTo(document.body);\t\r\n\t\r\n\tdata.forEach((d) => {\r\n\t\tlet template = new Templating(cardTemplate, d);\r\n\t\tconst t = new Tag('div')\r\n\t\t.addClass('col-lg-4', 'col-md-4', 'col-sm-4')\r\n\t\t.html(template.template)\r\n\t\t.appendTo(container.node);\r\n\t});\r\n}\r\n\r\n// drawCard();\n\n//# sourceURL=webpack:///./src/moduli/ui/create-card.js?");

/***/ }),

/***/ "./src/moduli/ui/valid-questions.js":
/*!******************************************!*\
  !*** ./src/moduli/ui/valid-questions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\n\r\n\r\nconst htmlAlert = document.getElementById('warning-alert');\r\nconst validQuestionsLNK = document.getElementById('valid-questions-lnk');\r\n\r\nif (_config__WEBPACK_IMPORTED_MODULE_0__.SHOW_VALID_QUESTIONS) {\r\n\tif (htmlAlert.classList.contains('dhidden')) {\r\n\t\thtmlAlert.classList.remove('dhidden')\r\n\t}\r\n\r\n\tvalidQuestionsLNK.onclick = () => {\r\n\t\tlet html = new Tag('ul')\r\n\t\t\t.addAttr('class', 'question-zone')\r\n\t\t\t.addAttr('id', 'question-zone');\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tfor (let v of _config__WEBPACK_IMPORTED_MODULE_0__.VALID_QUESTIONS) {\r\n\t\t\t\tlet q = new Tag('li')\r\n\t\t\t\t\t.text(v)\r\n\t\t\t\t\t.addClass('valid-question')\r\n\t\t\t\t\t.event('click', () => {\r\n\t\t\t\t\t\tlet input = document.getElementById('user-question');\r\n\t\t\t\t\t\tconsole.log(q.node.textContent);\r\n\t\t\t\t\t\tinput.value = q.node.textContent;\r\n\t\t\t\t\t\tif (swal.getState().isOpen) swal.close();\r\n\t\t\t\t\t\tinput.focus();\r\n\t\t\t\t\t})\r\n\t\t\t\tq.appendTo(html.node)\r\n\t\t\t}\r\n\t\t}, 100)\r\n\r\n\t\tswal({ content: html.node, buttons: false })\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/moduli/ui/valid-questions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;