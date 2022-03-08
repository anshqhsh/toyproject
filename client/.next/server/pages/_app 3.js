/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// 쿼리를 위한 초기화 작업\nconst App = ({ Component , pageProps  })=>{\n    // 처음 실행시 한번 실행\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) {\n            clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\n            return clientRef.current;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/_app.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n};\nApp.getInitialProps = async ({ ctx , Component  })=>{\n    var ref;\n    const pageProps = await ((ref = Component.getInitialProps) === null || ref === void 0 ? void 0 : ref.call(Component, ctx));\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0M7QUFDekM7QUFDckIsRUFBZ0I7QUFDSSxLQUFmLENBQUNHLEdBQUcsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3pDLEVBQWU7SUFDZixLQUFLLENBQUNDLFNBQVMsR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBQzdCLEtBQUssQ0FBQ08sU0FBUyxPQUFTLENBQUM7UUFDdkIsRUFBRSxHQUFHRCxTQUFTLENBQUNFLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCRixTQUFTLENBQUNFLE9BQU8sR0FBRyxHQUFHLENBQUNQLG9EQUFXO1lBQ25DLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxPQUFPO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSw2RUFDSE4sNERBQW1CO1FBQUNPLE1BQU0sRUFBRUYsU0FBUzs4RkFDbkNILFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVERixHQUFHLENBQUNPLGVBQWUsVUFBVSxDQUFDLENBQUNDLEdBQUcsR0FBRVAsU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO1FBQzNCQSxHQUF5QjtJQUFqRCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLEdBQUNELEdBQXlCLEdBQXpCQSxTQUFTLENBQUNNLGVBQWUsY0FBekJOLEdBQXlCLEtBQXpCQSxJQUFJLENBQUpBLENBQWdDLEdBQWhDQSxJQUFJLENBQUpBLENBQWdDLEdBQWhDQSxHQUF5QixDQUF6QkEsSUFBZ0MsQ0FBaENBLFNBQVMsRUFBbUJPLEdBQUc7SUFDdkQsTUFBTSxDQUFDLENBQUM7UUFBQ04sU0FBUztJQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG4vLyDsv7zrpqzrpbwg7JyE7ZWcIOy0iOq4sO2ZlCDsnpHsl4VcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgLy8g7LKY7J2MIOyLpO2WieyLnCDtlZzrsogg7Iuk7ZaJXG4gIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gICAgICByZXR1cm4gY2xpZW50UmVmLmN1cnJlbnQ7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Z2V0Q2xpZW50KCl9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn07XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIENvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpO1xuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiY2xpZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();