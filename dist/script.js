/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/style.scss */ \"./src/assets/scss/style.scss\");\n/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_figures_skull_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/figures/skull.svg */ \"./src/assets/figures/skull.svg\");\n/* harmony import */ var _assets_figures_skull_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_figures_skull_svg__WEBPACK_IMPORTED_MODULE_1__);\n/** Building Components\n *\n * @desc Adding some components, like, paragraphs \n *       or images to the document. The idea is to\n *       encapsulate interface components.\n * @package webapp\n * @module example\n * @version 1.0.0\n * @since 2020/02/25\n * @author Michael <michael.reichart@gfu.net>\n * @copyright Michael Reichart 2020\n * @license MIT\n */\n\n// import the components assets\n\n\n\n/** A Paragraph Component\n *\n * @version v1.0.0\n * @since 2020-02-25\n * @param {type} _e element name for a DOM element\n * @param {type} _t text for a textnode\n * @returns {HTMLObject}\n */\nfunction paragraph(_e, _t) {\n  const node = document.createElement(_e);\n  const text = document.createTextNode(_t);\n\n  node.appendChild(text);\n  node.classList.add(\"default\");\n\n  return node;\n}\n\n/** An Image As Component\n *\n * @version v1.0.0\n * @since 2020-02-25\n * @param none\n * @returns {void}\n */\nfunction component() {\n  const element = document.createElement('div');\n\n  element.innerHTML = 'Oh, an image component ... ';\n  element.classList.add('withBackground');\n\n  const myIcon = new Image();\n  myIcon.src = _assets_figures_skull_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\n  myIcon.classList.add('medium');\n\n  element.appendChild(myIcon);\n\n  return element;\n}\n\n// Extend the DOM by this component\ndocument.body.appendChild(component());\n// - - - - - - - - - -\n\n// Crazy and dirty way to just append stuff\n// bääh!\ndocument\n  .querySelector(\"main>article\")\n  .appendChild(\n    paragraph(\n      \"p\",\n      \"Crazy ans dirty Javascript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod.\"\n    )\n  );\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/assets/figures/skull.svg":
/*!**************************************!*\
  !*** ./src/assets/figures/skull.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"63c8b224de7461baae1f47576a460de3.svg\";\n\n//# sourceURL=webpack:///./src/assets/figures/skull.svg?");

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/style.scss?");

/***/ })

/******/ });