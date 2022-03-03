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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'kim',\n    'lee'\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// 50개의 arr생성\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs), msgs1 = ref[0], setMsgs = ref[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1).concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        var targetIndex = msgs1;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"XvWLZlE3BmwO7Gi6JdpkUXSm5Sg=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDRDtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO0lBQUEsQ0FBSztJQUFFLENBQUs7QUFBQSxDQUFDO0FBRTlCLEdBQUssQ0FBQ0MsZUFBZSxHQUFHLFFBQVE7SUFBRkQsTUFBTSxDQUFOQSxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU07O0FBRTVELEVBQWE7QUFDYixHQUFLLENBQUNDLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUUsRUFDMUJDLElBQUksQ0FBQyxDQUFDLEVBQ05DLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQztJQUFLLE1BQ2QsQ0FEZSxDQUFDO1FBQ2ZDLEVBQUUsRUFBRSxFQUFFLEdBQUdELENBQUM7UUFDVkUsTUFBTSxFQUFFWCxlQUFlO1FBQ3ZCWSxTQUFTLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBR0gsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO1FBQy9DSSxJQUFJLEVBQUcsR0FBUyxNQUFVLENBQWpCLEVBQUUsR0FBR0osQ0FBQyxFQUFDLENBQVU7SUFDNUIsQ0FBQzs7QUFFSCxHQUFLLENBQUNLLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOzs7SUFDckIsR0FBSyxDQUFtQmxCLEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDUSxZQUFZLEdBQXRDVyxLQUFJLEdBQWFuQixHQUFzQixLQUFqQ29CLE9BQU8sR0FBSXBCLEdBQXNCO0lBRTlDLEdBQUssQ0FBQ3FCLFFBQVEsR0FBR0osUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztRQUN4QixHQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDO1lBQ2RSLEVBQUUsRUFBRUssS0FBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQztZQUNuQlIsTUFBTSxFQUFFWCxlQUFlO1lBQ3ZCWSxTQUFTLEVBQUVRLElBQUksQ0FBQ0MsR0FBRztZQUNuQlIsSUFBSSxFQUFHLEdBQW9CQSxNQUFJLENBQXRCRSxLQUFJLENBQUNJLE1BQU0sR0FBRyxDQUFDLEVBQVEsT0FBTE4sSUFBSTtRQUNqQyxDQUFDO1FBQ0RHLE9BQU8sQ0FBQ0QsUUFBUSxDQUFSQSxJQUFJO1lBQUksTUFBTSxDQUFOLENBQUNHO2dCQUFBQSxNQUFNO1lBQVMsQ0FBQyxDQUFqQixNQUFpQixvQkFBTEgsSUFBSTs7SUFDbEMsQ0FBQztJQUVELEdBQUssQ0FBQ08sUUFBUSxHQUFHLFFBQVEsQ0FBUFQsSUFBSSxFQUFFSCxFQUFFLEVBQUssQ0FBQztRQUM5QixHQUFLLENBQUNhLFdBQVcsR0FBR1IsS0FBSTtJQUMxQixDQUFDO0lBRUQsTUFBTTs7d0ZBRURqQixpREFBUTtnQkFBQzBCLE1BQU0sRUFBRVAsUUFBUTs7Ozs7O3dGQUN6QlEsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVU7MEJBQ3JCWCxLQUFJLENBQUNSLEdBQUcsQ0FBQ29CLFFBQ2pCLENBRGlCQSxDQUFDO2tDQUNULE1BQU0sK0RBQUw5QixnREFBTyxvQkFBZ0I4QixDQUFDO3dCQUFFTCxRQUFRLEVBQUVBLFFBQVE7d0JBQS9CSyxDQUFDLENBQUNqQixFQUFFOzs7Ozs7Ozs7Ozs7O0FBSzVCLENBQUM7R0EzQktJLE9BQU87S0FBUEEsT0FBTztBQTRCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcblxuY29uc3QgVXNlcklkcyA9IFsna2ltJywgJ2xlZSddO1xuXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG4vLyA1MOqwnOydmCBhcnLsg53shLFcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4gIH0pKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcblxuICBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSR7dGV4dH1gLFxuICAgIH07XG4gICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gb25VcGRhdGU9e29uVXBkYXRlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});