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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ \"./pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n // 서버사이드에서 받아온 Pops을 html에 부어준다\n\n// 쿼리를 위한 초기화 작업\nconst App = ({ Component , pageProps  })=>{\n    // 처음 실행시 한번 실행\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) {\n            clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n                defaultOptions: {\n                    queries: {\n                        refetchOnWindowFocus: false\n                    }\n                }\n            });\n            return clientRef.current;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n            state: pageProps.dehydrateState,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/_app.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/_app.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined));\n};\nApp.getInitialProps = async ({ ctx , Component  })=>{\n    var ref;\n    const pageProps = await ((ref = Component.getInitialProps) === null || ref === void 0 ? void 0 : ref.call(Component, ctx));\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNnQztBQUNiLENBQStCLEVBQWdDO0FBQzNGO0FBQ3JCLEVBQWdCO0FBQ0ksS0FBZixDQUFDSSxHQUFHLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN6QyxFQUFlO0lBQ0csS0FBYixDQUFDQyxTQUFTLEdBQUdQLDZDQUFNLENBQUMsSUFBSTtJQUM3QixLQUFLLENBQUNRLFNBQVMsT0FBUyxDQUFDO1FBQ3ZCLEVBQUUsR0FBR0QsU0FBUyxDQUFDRSxPQUFPLEVBQUUsQ0FBQztZQUN2QkYsU0FBUyxDQUFDRSxPQUFPLEdBQUcsR0FBRyxDQUFDUixvREFBVyxDQUFDLENBQUM7Z0JBQ25DUyxjQUFjLEVBQUUsQ0FBQztvQkFDZkMsT0FBTyxFQUFFLENBQUM7d0JBQ1JDLG9CQUFvQixFQUFFLEtBQUs7b0JBQzdCLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNLENBQUNMLFNBQVMsQ0FBQ0UsT0FBTztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sNkVBQ0hQLDREQUFtQjtRQUFDVyxNQUFNLEVBQUVMLFNBQVM7OEZBQ25DTCwwREFBTztZQUFDVyxLQUFLLEVBQUVSLFNBQVMsQ0FBQ1MsY0FBYztrR0FDckNWLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVERixHQUFHLENBQUNZLGVBQWUsVUFBVSxDQUFDLENBQUNDLEdBQUcsR0FBRVosU0FBUyxFQUFDLENBQUMsR0FBSyxDQUFDO1FBQzNCQSxHQUF5QjtJQUFqRCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLEdBQUNELEdBQXlCLEdBQXpCQSxTQUFTLENBQUNXLGVBQWUsY0FBekJYLEdBQXlCLEtBQXpCQSxJQUFJLENBQUpBLENBQWdDLEdBQWhDQSxJQUFJLENBQUpBLENBQWdDLEdBQWhDQSxHQUF5QixDQUF6QkEsSUFBZ0MsQ0FBaENBLFNBQVMsRUFBbUJZLEdBQUc7SUFDdkQsTUFBTSxDQUFDLENBQUM7UUFBQ1gsU0FBUztJQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBIeWRyYXRlIH0gZnJvbSAncmVhY3QtcXVlcnkvaHlkcmF0aW9uJzsgLy8g7ISc67KE7IKs7J2065Oc7JeQ7IScIOuwm+yVhOyYqCBQb3Bz7J2EIGh0bWzsl5Ag67aA7Ja07KSA64ukXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG4vLyDsv7zrpqzrpbwg7JyE7ZWcIOy0iOq4sO2ZlCDsnpHsl4VcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgLy8g7LKY7J2MIOyLpO2WieyLnCDtlZzrsogg7Iuk7ZaJXG4gIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsIC8vIOyEnOuyhOqwkuydhCDrtojrn6zsmKTripQg7Ji17IWYIFJlYWN0LXF1ZXJ5XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e2dldENsaWVudCgpfT5cbiAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlU3RhdGV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0h5ZHJhdGU+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApO1xufTtcblxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcz8uKGN0eCk7XG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIkh5ZHJhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjbGllbnQiLCJzdGF0ZSIsImRlaHlkcmF0ZVN0YXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

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