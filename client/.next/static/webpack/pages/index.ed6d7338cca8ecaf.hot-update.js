"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nvar _this = undefined;\nvar MsgItem = function(param) {\n    var id = param.id, userId = param.userId, timestamp = param.timestamp, text = param.text, onUpdate = param.onUpdate, isEditing = param.isEditing, startEdit = param.startEdit, onDelete = param.onDelete, myId = param.myId, user = param.user;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    myId,\n                    \" \",\n                    '',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString('ko-Kr', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, _this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false) : text,\n            myId === user.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7O0FBQ2pDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ1g7UUFBSEMsRUFBRSxTQUFGQSxFQUFFLEVBQ0ZDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsSUFBSSxTQUFKQSxJQUFJO2tCQUVKLE1BQU0sK0RBQUxDLENBQUU7UUFBQ0MsU0FBUyxFQUFDLENBQWdCOzt3RkFDM0JDLENBQUU7O29CQUNBSixJQUFJO29CQUFDLENBQUM7b0JBQUMsQ0FBRTtnR0FDVEssQ0FBRztrQ0FDRCxHQUFHLENBQUNDLElBQUksQ0FBQ1osU0FBUyxFQUFFYSxjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7NEJBQzVDQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O1lBR0poQixTQUFTO3NHQUVMUCxpREFBUTtvQkFBQ3dCLE1BQU0sRUFBRWxCLFFBQVE7b0JBQUVELElBQUksRUFBRUEsSUFBSTtvQkFBRUgsRUFBRSxFQUFFQSxFQUFFOzs7Ozs7Z0NBR2hERyxJQUFJO1lBRUxLLElBQUksS0FBS0MsSUFBSSxDQUFDVCxFQUFFLGdGQUNkdUIsQ0FBRztnQkFBQ1osU0FBUyxFQUFDLENBQW1COztnR0FDL0JhLENBQU07d0JBQUNDLE9BQU8sRUFBRW5CLFNBQVM7a0NBQUUsQ0FBRTs7Ozs7O2dHQUN6QmtCLENBQUU7d0JBQUNDLE9BQU8sRUFBRWxCLFFBQVE7a0NBQUUsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXBDL0JSLE9BQU87QUEwQ2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0l0ZW0uanM/YzMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5jb25zdCBNc2dJdGVtID0gKHtcbiAgaWQsXG4gIHVzZXJJZCxcbiAgdGltZXN0YW1wLFxuICB0ZXh0LFxuICBvblVwZGF0ZSxcbiAgaXNFZGl0aW5nLFxuICBzdGFydEVkaXQsXG4gIG9uRGVsZXRlLFxuICBteUlkLFxuICB1c2VyLFxufSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cbiAgICA8aDM+XG4gICAgICB7bXlJZH0geycnfVxuICAgICAgPHN1Yj5cbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtyJywge1xuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgPC9zdWI+XG4gICAgPC9oMz5cbiAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgPD5cbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICB0ZXh0XG4gICAgKX1cbiAgICB7bXlJZCA9PT0gdXNlci5pZCAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlbGV0ZX0+7IKt7KCcPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcbiJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm9uRGVsZXRlIiwibXlJZCIsInVzZXIiLCJsaSIsImNsYXNzTmFtZSIsImgzIiwic3ViIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiIsIm11dGF0ZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ })

});