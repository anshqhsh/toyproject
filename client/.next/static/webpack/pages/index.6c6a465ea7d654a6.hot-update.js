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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nvar _this = undefined;\nvar MsgItem = function(param) {\n    var id = param.id, userId = param.userId, timestamp = param.timestamp, text = param.text, onUpdate = param.onUpdate, isEditing = param.isEditing, startEdit = param.startEdit, onDelete = param.onDelete, myId = param.myId, user = param.user;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    console.log(use),\n                    \" \",\n                    '',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString('ko-Kr', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, _this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false) : text,\n            myId === userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7O0FBQ2pDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQ1g7UUFBSEMsRUFBRSxTQUFGQSxFQUFFLEVBQ0ZDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsSUFBSSxTQUFKQSxJQUFJO2tCQUVKLE1BQU0sK0RBQUxDLENBQUU7UUFBQ0MsU0FBUyxFQUFDLENBQWdCOzt3RkFDM0JDLENBQUU7O29CQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRztvQkFBRSxDQUFDO29CQUFDLENBQUU7Z0dBQ3JCQyxDQUFHO2tDQUNELEdBQUcsQ0FBQ0MsSUFBSSxDQUFDZixTQUFTLEVBQUVnQixjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7NEJBQzVDQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O1lBR0puQixTQUFTO3NHQUVMUCxpREFBUTtvQkFBQzJCLE1BQU0sRUFBRXJCLFFBQVE7b0JBQUVELElBQUksRUFBRUEsSUFBSTtvQkFBRUgsRUFBRSxFQUFFQSxFQUFFOzs7Ozs7Z0NBR2hERyxJQUFJO1lBRUxLLElBQUksS0FBS1AsTUFBTSxnRkFDYnlCLENBQUc7Z0JBQUNmLFNBQVMsRUFBQyxDQUFtQjs7Z0dBQy9CZ0IsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFdEIsU0FBUztrQ0FBRSxDQUFFOzs7Ozs7Z0dBQ3pCcUIsQ0FBRTt3QkFBQ0MsT0FBTyxFQUFFckIsUUFBUTtrQ0FBRSxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcEMvQlIsT0FBTztBQTBDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcz9jMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmNvbnN0IE1zZ0l0ZW0gPSAoe1xuICBpZCxcbiAgdXNlcklkLFxuICB0aW1lc3RhbXAsXG4gIHRleHQsXG4gIG9uVXBkYXRlLFxuICBpc0VkaXRpbmcsXG4gIHN0YXJ0RWRpdCxcbiAgb25EZWxldGUsXG4gIG15SWQsXG4gIHVzZXIsXG59KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgIDxoMz5cbiAgICAgIHtjb25zb2xlLmxvZyh1c2UpfSB7Jyd9XG4gICAgICA8c3ViPlxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS3InLCB7XG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA8L3N1Yj5cbiAgICA8L2gzPlxuICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICA8PlxuICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvblVwZGF0ZX0gdGV4dD17dGV4dH0gaWQ9e2lkfSAvPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIHRleHRcbiAgICApfVxuICAgIHtteUlkID09PSB1c2VySWQgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlc19fYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XG4iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsIm15SWQiLCJ1c2VyIiwibGkiLCJjbGFzc05hbWUiLCJoMyIsImNvbnNvbGUiLCJsb2ciLCJ1c2UiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ })

});