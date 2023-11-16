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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduli_ui_create_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduli/ui/create-card */ \"./src/moduli/ui/create-card.js\");\n/* harmony import */ var _moduli_logic_post_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduli/logic/post-data */ \"./src/moduli/logic/post-data.js\");\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moduli/logic/post-data.js":
/*!***************************************!*\
  !*** ./src/moduli/logic/post-data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LOGIN_DATABASE: () => (/* binding */ LOGIN_DATABASE),\n/* harmony export */   LOGIN_SERVER: () => (/* binding */ LOGIN_SERVER),\n/* harmony export */   fetchData: () => (/* binding */ fetchData)\n/* harmony export */ });\nconst LOGIN_SERVER = null;\r\nconst LOGIN_DATABASE = null;\r\n\r\nasync function fetchData() {\r\n\tconst url = 'http://10.160.4.113:7788/api/ask'\r\n\tconst question = document.getElementById('user-question').value;\r\n\treturn new Promise(async (resolve, reject) => {\r\n\t\tconst options = {\r\n\t\t\tmethod: 'POST',\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t},\r\n\t\t\tbody: JSON.stringify({\r\n\t\t\t\tquestion,\r\n\t\t\t\tserver: LOGIN_SERVER,\r\n\t\t\t\tdatabase: LOGIN_DATABASE,\r\n\t\t\t})\r\n\t\t}\r\n\t\tlet responseRAW = await fetch(url, options).catch(reject);\r\n\t\tlet response = await responseRAW.json().catch(reject);\r\n\t\tresolve(response);\r\n\t});\r\n}\n\n//# sourceURL=webpack:///./src/moduli/logic/post-data.js?");

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