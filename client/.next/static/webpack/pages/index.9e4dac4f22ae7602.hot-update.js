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

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgInput = function(param) {\n    var mutate = param.mutate, _id = param.id, id = _id === void 0 ? undefined : _id, _text = param.text, text1 = _text === void 0 ? '' : _text;\n    _s();\n    var textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onSubmit = function(e) {\n        e.preventDefault();\n        e.stopPropagation(); // 이벤트 버블링 제어\n        var text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text, id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text1,\n                placeholder: \"내용을 입력하세요\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\nvar _c;\n$RefreshReg$(_c, \"MsgInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4Qjs7O0FBQzlCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVEsUUFBbUMsQ0FBQztRQUF6Q0MsTUFBTSxTQUFOQSxNQUFNLGNBQUVDLEVBQUUsRUFBRkEsRUFBRSxvQkFBR0MsU0FBUyxzQkFBRUMsSUFBSSxFQUFKQSxLQUFJLHNCQUFHLENBQUU7O0lBQ25ELEdBQUssQ0FBQ0MsT0FBTyxHQUFHTiw2Q0FBTSxDQUFDLElBQUk7SUFFM0IsR0FBSyxDQUFDTyxRQUFRLEdBQUdDLFFBQ2xCLENBRGtCQSxDQUFDLEVBQUksQ0FBQztRQUNyQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCRCxDQUFDLENBQUNFLGVBQWUsR0FBSSxDQUFhLEVBQWdCO1FBQ2xDLEdBQVgsQ0FBQ0wsSUFBSSxHQUFHQyxPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSztRQUNsQ04sT0FBTyxDQUFDSyxPQUFPLENBQUNDLEtBQUssR0FBRyxDQUFFO1FBQzFCVixNQUFNLENBQUNHLElBQUksRUFBRUYsRUFBRTtJQUNqQixDQUFDO0lBQ0QsTUFBTSw2RUFDSFUsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBaUI7UUFBQ1AsUUFBUSxFQUFFQSxRQUFROzt3RkFDakRRLENBQVE7Z0JBQ1BDLEdBQUcsRUFBRVYsT0FBTztnQkFDWlcsWUFBWSxFQUFFWixLQUFJO2dCQUNsQmEsV0FBVyxFQUFDLENBQVc7Ozs7Ozt3RkFFUkMsQ0FBVjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7R0FwQktuQixRQUFRO0tBQVJBLFFBQVE7QUFzQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzP2NjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIGlkID0gdW5kZWZpbmVkLCB0ZXh0ID0gJycgfSkgPT4ge1xuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOydtOuypO2KuCDrsoTruJTrp4Eg7KCc7Ja0XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICBtdXRhdGUodGV4dCwgaWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pbnB1dFwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcmVmPXt0ZXh0UmVmfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalFwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnSW5wdXQ7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJpZCIsInVuZGVmaW5lZCIsInRleHQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJkZWZhdWx0VmFsdWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ })

});