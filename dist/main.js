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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\r\n\r\nwindow.addEventListener(\"load\", _routes__WEBPACK_IMPORTED_MODULE_0__.default)\r\nwindow.addEventListener(\"hashchange\", _routes__WEBPACK_IMPORTED_MODULE_0__.default)\n\n//# sourceURL=webpack://equation-solver/./src/index.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst About = () => {\r\n    const view = `\r\n        <h2>What is a linear equation?</h2>\r\n        <p>An equation having the maximum order of 1 is known as a Linear equation.\r\n\r\n        Below are some examples of linear equations in 1 variable, 2 variables and 3 variables:</p>\r\n        <article>\r\n            <h3>Linear equations in one variable</h3>\r\n            <p>3x+5=0\r\n\r\n            32x+7=0\r\n            \r\n            98x = 49</p>\r\n            <h3>Linear equations in two variables</h3>\r\n            <p>y+7x=3\r\n\r\n            3a+2b = 5\r\n            \r\n            6x+9y-12=0</p>\r\n            <h3>Linear equations in three variables</h3>\r\n            <p>x + y + z = 0\r\n\r\n            a – 3b = c\r\n            \r\n            3x + 12 y = ½ z</p>\r\n        </article>\r\n        <h2>How to solve linear equations?</h2>\r\n        <p>There are many different linear equations, as well as many forms of these equations.\r\n\r\n        What it is important for us is learning how to solve linear equations. In this article it will be told how to solve linear equations in one variable.</p>\r\n        <article>\r\n            <h3>Solution of linear equation in one variable</h3>\r\n            <p>Both sides of the equation are supposed to be balanced for solving a linear equation. \r\n            Equality sign denotes that the expressions on either side of the ‘equal to’ sign are equal. Since the equation is balanced, for solving it certain mathematical operations are performed on both sides of the equation in a manner that it does not affect the balance of the equation. Here is the example related to the linear equation in one variable.</p>\r\n            <h3>Example: Solve (2x – 10)/2 = 3(x – 1)</h3>\r\n            <h3>Step 1: Clear the fraction</h3>\r\n            <p>x – 5 = 3(x – 1)</p>\r\n            <h3>Step 2: Simplify Both sides of the equation</h3>\r\n            <p>2x – 5 = 3x – 3\r\n\r\n            x = 3x + 2\r\n            \r\n            x – 3x = 2\r\n            </p>\r\n            <h3>Step 3: Isolate X</h3>\r\n            <p>-2x = 2\r\n\r\n            x = -1</p>\r\n        </article>\r\n        <h2>Why it is important to know how to solve linear equations?</h2>\r\n        <p>Even when Equation Solver gives you the result of linear equations (so far), it is important to make sure you know what would be the result before to press the “Do the math” button</p>\r\n    `;\r\n\r\n    return view\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://equation-solver/./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Equations.js":
/*!********************************!*\
  !*** ./src/pages/Equations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Equations = () => {\r\n    const view = `\r\n        <h2>Write a linear equation</h2>\r\n        <input type=\"text\" placeholder=\"Eg. 2x + 10 = 23x + 120\"></input>\r\n        <p>.</p>\r\n        <button type=\"button\">Do the math</button>\r\n        <span id=\"result\"></span>\r\n        <section class=\"process aftermath\">\r\n            <h3 id=\"process\">See process</h3>\r\n            <article class=\"processContent\"></article>\r\n        </section>\r\n        <section class=\"comprobation aftermath\">\r\n            <h3 id=\"comprobation\">See comprobation</h3>\r\n            <article class=\"comprobationContent\"></article>\r\n        </section>\r\n    `\r\n\r\n    return view\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Equations);\n\n//# sourceURL=webpack://equation-solver/./src/pages/Equations.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404 = () => {\r\n    const view = `\r\n        <h2>Error 404</h2>\r\n        <p>Page not found</p>\r\n        <img src=\"./assets/images/dinosaur.png\">\r\n    `;\r\n\r\n    return view;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n//# sourceURL=webpack://equation-solver/./src/pages/Error404.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Equations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Equations */ \"./src/pages/Equations.js\");\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst routes = {\r\n    \"/\": _pages_Equations__WEBPACK_IMPORTED_MODULE_1__.default,\r\n    \"/about\": _pages_About__WEBPACK_IMPORTED_MODULE_2__.default\r\n}\r\n\r\nconst onNavigate = (hash, render) => {\r\n    window.history.pushState(\r\n        {},\r\n        hash,\r\n        window.location.origin + hash\r\n    )\r\n\r\n    render.innerHTML = routes[hash] ? routes[hash] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__.default\r\n}\r\n\r\nconst router = async () => {\r\n    const header =  false || document.getElementById(\"mainHeader\")\r\n    const content =  false || document.getElementById(\"content\")\r\n\r\n    header.innerHTML = await (0,_templates_Header__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n    let render\r\n    if(routes[window.location.pathname]){\r\n        render = routes[window.location.pathname]\r\n    }else{\r\n        render = _pages_Error404__WEBPACK_IMPORTED_MODULE_3__.default\r\n    }\r\n    content.innerHTML = render()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://equation-solver/./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\r\n    const view = `\r\n        <img class=\"logo\" src=\"./assets/images/logo.svg\" alt=\"Pi logo\">\r\n        <nav>\r\n            <ul>\r\n                <li><a href=\"/\">Equations</a></li>\r\n                <li><a href=\"about\">About</a></li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"header-arrow\"></div>\r\n    `\r\n\r\n    return view;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://equation-solver/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getHash = () => {\r\n    let hash = location.pathname;\r\n\r\n    if(hash == \"/\"){\r\n        return \"/\"\r\n    }else{\r\n        return hash\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://equation-solver/./src/utils/getHash.js?");

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