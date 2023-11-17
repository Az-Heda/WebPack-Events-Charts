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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduli_ui_create_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduli/ui/create-card */ \"./src/moduli/ui/create-card.js\");\n/* harmony import */ var _moduli_logic_post_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduli/logic/post-data */ \"./src/moduli/logic/post-data.js\");\n/* harmony import */ var _moduli_logic_setup_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduli/logic/setup-endpoint */ \"./src/moduli/logic/setup-endpoint.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moduli/config.js":
/*!******************************!*\
  !*** ./src/moduli/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AI_ENDPOINT: () => (/* binding */ AI_ENDPOINT),\n/* harmony export */   DEFAULT_IP: () => (/* binding */ DEFAULT_IP),\n/* harmony export */   DEFAULT_PORT: () => (/* binding */ DEFAULT_PORT),\n/* harmony export */   SHOW_LOGIN_FORM: () => (/* binding */ SHOW_LOGIN_FORM)\n/* harmony export */ });\nconst DEFAULT_IP = '10.160.4.113';\r\nconst DEFAULT_PORT = 7788;\r\nconst SHOW_LOGIN_FORM = true;\r\nconst AI_ENDPOINT = `http://${DEFAULT_IP}:${DEFAULT_PORT}/api/ask`;\r\n\r\ndocument.getElementById('user-question').value = 'count the causa';\n\n//# sourceURL=webpack:///./src/moduli/config.js?");

/***/ }),

/***/ "./src/moduli/logic/post-data.js":
/*!***************************************!*\
  !*** ./src/moduli/logic/post-data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\nconst userInput = document.getElementById('user-question');\r\n\r\nasync function fetchData() {\r\n\tconst question = userInput.value;\r\n\tconst data = {\r\n\t\tquestion,\r\n\t\t...(BetterDom.archive?.connection || {})\r\n\t};\r\n\tconst checkValues = ['question', 'server', 'database']\r\n\t\t.map((i) => { return +Object.keys(data).includes(i)})\r\n\t\t.reduce((a, v) => { return v += a }, 0);\r\n\tif (checkValues == 3) {\r\n\t\treturn new Promise(async (resolve, reject) => {\r\n\t\t\t\tconst options = {\r\n\t\t\t\t\tmethod: 'POST',\r\n\t\t\t\t\theaders: {\r\n\t\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t\t},\r\n\t\t\t\tbody: JSON.stringify(data)\r\n\t\t\t}\r\n\t\t\tlet responseRAW = await fetch(_config__WEBPACK_IMPORTED_MODULE_0__.AI_ENDPOINT, options).catch(reject);\r\n\t\t\tlet response = await responseRAW.json().catch(reject);\r\n\t\t\tresolve(response);\r\n\t\t});\r\n\t}\r\n\telse {\r\n\t\treturn Promise.reject('Missing data')\r\n\t}\r\n}\r\n\r\n\r\nuserInput.addEventListener('keyup', (event) => {\r\n\tevent.preventDefault();\r\n\tif (event.keyCode === 13) { // Enter\r\n\t\tfetchData().then(console.warn).catch(console.error)\r\n\t}\r\n})\n\n//# sourceURL=webpack:///./src/moduli/logic/post-data.js?");

/***/ }),

/***/ "./src/moduli/logic/setup-endpoint.js":
/*!********************************************!*\
  !*** ./src/moduli/logic/setup-endpoint.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/moduli/config.js\");\n\r\n\r\nfunction loginForm(params={}) {\r\n\tconst container = `\r\n\t<form id=\"setup-form\">\r\n\t\t<div class=\"mygrid-row form-group\">\r\n\t\t\t<div class=\"inputForm mygrid-120\" >\r\n\t\t\t\t<input class=\"mainInput input-alt\" type=\"text\" id=\"get-host\" name=\"get-host\" placeholder=\"Host\" value=\"${params?.host || ''}\" autocomplete=\"off\">\r\n\t\t\t\t<span class=\"input-border input-border-alt\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"mygrid-row form-group\">\r\n\t\t\t<div class=\"inputForm mygrid-120\" >\r\n\t\t\t\t<input class=\"mainInput input-alt\" type=\"text\" id=\"get-db\" name=\"get-db\" placeholder=\"Database\" values=\"${params?.db || ''}\" autocomplete=\"off\">\r\n\t\t\t\t<span class=\"input-border input-border-alt\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"mygrid-row form-group\" style=\"margin-top: 10px\">\r\n\t\t\t<button class=\"btn btn-info mygrid-120\" name=\"validate-form\" id=\"form-validator\">Conferma</button>\r\n\t\t</div>\r\n\t</form>\r\n\t`\r\n\r\n\tconst config = {\r\n\t\ttitle: 'Collegamento con il database',\r\n\t\tcontent: new Tag('div').html(container).node,\r\n\t\tbutton: false\r\n\t}\r\n\tsetTimeout(() => {\r\n\t\tlet host = document.getElementById('get-host');\r\n\t\tlet db = document.getElementById('get-db');\r\n\t\tlet btn = document.getElementById('form-validator');\r\n\t\tlet form = document.getElementById('setup-form');\r\n\t\t\r\n\t\tform.addEventListener('submit', (event) => {\r\n\t\t\tevent.preventDefault();\r\n\t\t\tif (db.value.length == 0) return db.focus();\r\n\t\t\tif (host.value.length == 0) return host.focus();\r\n\r\n\t\t\tconst values = { server: host.value, database: db.value }\r\n\t\t\tif (swal.getState().isOpen) swal.close();\r\n\t\t\tBetterDom.archive.connection = values;\r\n\t\t})\r\n\t}, 100)\r\n\treturn config;\r\n}\r\n\r\n\r\nfunction parseLoginForm() {\r\n\t\r\n\r\n\tif (host.values && db.values) {\r\n\t\tconsole.log('Both')\r\n\t} else {\r\n\t\tconsole.log('One or none')\r\n\t\tif (host.value || db.value) {\r\n\t\t\tconsole.log('One')\r\n\t\t\tlet item = [host, db][+!!host];\r\n\t\t\tswal.close()\r\n\t\t}\r\n\t\telse {\r\n\t\t\tconsole.warn('idk')\r\n\t\t}\r\n\t}\r\n\tBetterDom.archive.database = { host, db };\r\n}\r\n\r\nif (_config__WEBPACK_IMPORTED_MODULE_0__.SHOW_LOGIN_FORM) {\r\n\tswal({ ...loginForm() })\r\n}\n\n//# sourceURL=webpack:///./src/moduli/logic/setup-endpoint.js?");

/***/ }),

/***/ "./src/moduli/ui/create-card.js":
/*!**************************************!*\
  !*** ./src/moduli/ui/create-card.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawCard: () => (/* binding */ drawCard)\n/* harmony export */ });\n\r\n\r\nfunction drawCard() {\r\n\tlet cardTemplate = `\r\n\t<div class=\"my-card\">\r\n\t\t<div class=\"card-header\"> $% header %$ </div>\r\n\t\t<div class=\"card-body\"> $% body %$ </div>\r\n\t\t<div class=\"card-footer\"> $% footer %$ </div>\r\n\t</div>\r\n\t`;\r\n\t\r\n\tlet data = [\r\n\t\t{ header: 'Header card #1', body: 'Body card #1', footer: 'Footer card #1' },\r\n\t\t{ header: 'Header card #2', body: 'Body card #2', footer: 'Footer card #2' },\r\n\t\t{ header: 'Header card #3', body: 'Body card #3', footer: 'Footer card #3' },\r\n\t];\r\n\r\n\tlet container = new Tag('div')\r\n\t.addClass('row')\r\n\t.appendTo(document.body);\t\r\n\t\r\n\tdata.forEach((d) => {\r\n\t\tlet template = new Templating(cardTemplate, d);\r\n\t\tconst t = new Tag('div')\r\n\t\t.addClass('col-lg-4', 'col-md-4', 'col-sm-4')\r\n\t\t.html(template.template)\r\n\t\t.appendTo(container.node);\r\n\t});\r\n}\r\n\r\n// drawCard();\n\n//# sourceURL=webpack:///./src/moduli/ui/create-card.js?");

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