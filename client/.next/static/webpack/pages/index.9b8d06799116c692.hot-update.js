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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    'kim',\n    'lee'\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// 50개의 arr생성\nvar originalMsgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1).concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsg = _toConsumableArray(msgs);\n            newMsg.splice(targetIndex, 1, _objectSpread({}, msgs[targetIndex], {\n                text: text\n            }));\n            return newMsg;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsg = _toConsumableArray(msgs);\n            newMsg.splice(targetIndex, 1, _objectSpread({}, msgs[targetIndex], {\n                text: text\n            }));\n            return newMsg;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        onDelete: onDelete\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcblxuY29uc3QgVXNlcklkcyA9IFsna2ltJywgJ2xlZSddO1xuXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG4vLyA1MOqwnOydmCBhcnLsg53shLFcbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4gIH0pKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0ge1xuICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcbiAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9JHt0ZXh0fWAsXG4gICAgfTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2cgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2cuc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNnO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG4gIGNvbnN0IG9uRGVsZXRlID0gaWQgPT4ge1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNnID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNnLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZztcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IC8vIGVkaXQg7ZWY64qUIOyVhOydtOuUlOqwkuydhCBzZXRcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvLyB0cnVlIC8gZmFsc2VcbiAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImRvbmVFZGl0Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsInNwbGljZSIsIm9uRGVsZXRlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});