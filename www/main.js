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

/***/ "./www/js/main.js":
/*!************************!*\
  !*** ./www/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nwindow.onload = () => {\n    var button = document.getElementById(\"button\");\n    button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", doclick);\n};\nfunction doclick() {\n    var date = new Date();\n    const obj = document.getElementById(\"msg\");\n    obj === null || obj === void 0 ? void 0 : obj.textContent = date.toLocaleString();\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./www/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./www/js/main.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;