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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? '' : _userId; // userId 식별 - http://localhost:3000/?userId=joon\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        setEditingId(null);\n    };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            userId: userId,\n                            text: text\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsg;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsg = _toConsumableArray(msgs);\n            newMsg.splice(targetIndex, 1);\n            return newMsg;\n        });\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages');\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"lTDkKXPEKu3XW9sdtPITexBYSLU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSjtBQUNSO0FBQ0U7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUNNLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOzs7SUFDckIsR0FBSyxDQUVESixHQUFXLEdBQVhBLHNEQUFTLGFBQVRBLEdBQVcsQ0FEYkssS0FBSyxtQkFBSUMsTUFBTSxFQUFOQSxNQUFNLHdCQUFHLENBQUUsWUFDTCxDQUFpRCxFQUFJO0lBQ2xFLEdBQUMsQ0FBbUJSLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBNUJTLEtBQUksR0FBYVQsSUFBWSxLQUF2QlUsT0FBTyxHQUFJVixJQUFZO0lBQ3BDLEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDVyxTQUFTLEdBQWtCWCxJQUFjLEtBQTlCWSxZQUFZLEdBQUlaLElBQWM7SUFFaEQsR0FBSyxDQUFDYSxRQUFROzRMQUFHLFFBQVEsU0FBRkMsSUFBSSxFQUFJLENBQUM7Z0JBQ3hCQyxNQUFNOzs7OzsrQkFBU1Ysb0RBQU8sQ0FBQyxDQUFNLE9BQUUsQ0FBVyxZQUFFLENBQUM7NEJBQUNTLElBQUksRUFBSkEsSUFBSTs0QkFBRU4sTUFBTSxFQUFOQSxNQUFNO3dCQUFDLENBQUM7O3dCQUE1RE8sTUFBTTs0QkFDUEEsTUFBTTs7Ozt3QkFBRSxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFpQjs7d0JBQzFDTixPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSTs0QkFBSSxNQUFNLENBQU4sQ0FBQ007Z0NBQUFBLE1BQU07NEJBQVMsQ0FBQyxDQUFqQixNQUFpQixvQkFBTE4sSUFBSTs7Ozs7OztRQUNsQyxDQUFDO3dCQUpLSSxRQUFRLENBQVNDLElBQUk7Ozs7SUFNM0IsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQztRQUN0QkwsWUFBWSxDQUFDLElBQUk7SUFDbkIsQ0FBQztJQUVELEdBQUssQ0FBQ00sUUFBUTs0TEFBRyxRQUFRLFNBQURKLElBQUksRUFBRUssRUFBRSxFQUFLLENBQUM7Z0JBQzlCSixNQUFNOzs7OzsrQkFBU1Ysb0RBQU8sQ0FBQyxDQUFLLE1BQUcsQ0FBVSxZQUFLLE9BQUhjLEVBQUUsR0FBSSxDQUFDOzRCQUFDWCxNQUFNLEVBQU5BLE1BQU07NEJBQUVNLElBQUksRUFBSkEsSUFBSTt3QkFBQyxDQUFDOzt3QkFBakVDLE1BQU07NEJBQ1BBLE1BQU07Ozs7d0JBQUUsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBaUI7O3dCQUMxQ04sT0FBTyxDQUFDRCxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDOzRCQUNmLEdBQUssQ0FBQ1csV0FBVyxHQUFHWCxJQUFJLENBQUNZLFNBQVMsQ0FBQ0MsUUFBUSxDQUFSQSxHQUFHO2dDQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ0gsRUFBRSxLQUFLQSxFQUFFOzs0QkFDdkQsRUFBRSxFQUFFQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ1gsSUFBSTs0QkFDaEMsR0FBSyxDQUFDYyxPQUFPLHNCQUFPZCxJQUFJOzRCQUN4QmMsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLEVBQUVMLE1BQU07NEJBQ3JDLE1BQU0sQ0FBQ0EsTUFBTTt3QkFDZixDQUFDO3dCQUNERSxRQUFROzs7Ozs7UUFDVixDQUFDO3dCQVhLQyxRQUFRLENBQVVKLElBQUksRUFBRUssRUFBRTs7OztJQVloQyxHQUFLLENBQUNNLFFBQVEsR0FBR04sUUFDbkIsQ0FEbUJBLEVBQUUsRUFBSSxDQUFDO1FBQ3RCVCxPQUFPLENBQUNELFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7WUFDZixHQUFLLENBQUNXLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFTLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztnQkFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNILEVBQUUsS0FBS0EsRUFBRTs7WUFDdkQsRUFBRSxFQUFFQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQ1gsSUFBSTtZQUNoQyxHQUFLLENBQUNNLE1BQU0sc0JBQU9OLElBQUk7WUFDdkJNLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDSixXQUFXLEVBQUUsQ0FBQztZQUM1QixNQUFNLENBQUNMLE1BQU07UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ1csV0FBVzs0TEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDekJqQixJQUFJOzs7OzsrQkFBU0osb0RBQU8sQ0FBQyxDQUFLLE1BQUUsQ0FBVzs7d0JBQXZDSSxJQUFJO3dCQUNWQyxPQUFPLENBQUNELElBQUk7Ozs7OztRQUNkLENBQUM7d0JBSEtpQixXQUFXOzs7O0lBSWpCLEVBQXFEO0lBQ1h6QixnREFBakMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZnlCLFdBQVc7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs7d0ZBRUR0QixpREFBUTtnQkFBQ3VCLE1BQU0sRUFBRWQsUUFBUTs7Ozs7O3dGQUN6QmUsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVU7MEJBQ3JCcEIsS0FBSSxDQUFDcUIsR0FBRyxDQUFDQyxRQUNqQixDQURpQkEsQ0FBQztrQ0FDVCxNQUFNLCtEQUFMNUIsZ0RBQU8sb0JBRUY0QixDQUFDO3dCQUNMYixRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCTyxRQUFRLEVBQUUsUUFBUTs0QkFBRkEsTUFBTSxDQUFOQSxRQUFRLENBQUNNLENBQUMsQ0FBQ1osRUFBRTs7d0JBQzdCYSxTQUFTLEVBQUUsUUFBUTs0QkFBRnBCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDbUIsQ0FBQyxDQUFDWixFQUFFOzt3QkFDbENjLFNBQVMsRUFBRXRCLFNBQVMsS0FBS29CLENBQUMsQ0FBQ1osRUFBRTt3QkFDN0JlLElBQUksRUFBRTFCLE1BQU07d0JBTlB1QixDQUFDLENBQUNaLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFZckIsQ0FBQztHQWxFS2IsT0FBTzs7UUFHUEosa0RBQVM7OztLQUhUSSxPQUFPO0FBbUViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKTsgLy8gdXNlcklkIOyLneuzhCAtIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/dXNlcklkPWpvb25cbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHtcbiAgICBzZXRFZGl0aW5nSWQobnVsbCk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB1c2VySWQsIHRleHQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcbiAgICAgIHJldHVybiBuZXdNc2c7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcbiAgY29uc3Qgb25EZWxldGUgPSBpZCA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2cgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2cuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2c7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKTtcbiAgICBzZXRNc2dzKG1zZ3MpO1xuICB9O1xuICAvLyDstZzstIgg7KCR7IaN7IucIOuPmeyekSB1c2VFZmZlY3Qg64K067aA7JeQ7ISc64qUIGFzeW5jIGF3YWl066W8IOyngeygkSDtmLjstpwg7ZWY7KeAIOyViuydjFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvLyBpZOulvCDrhJjquLDquLAg7JyE7ZW0XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gLy8gZWRpdCDtlZjripQg7JWE7J2065SU6rCS7J2EIHNldFxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9IC8vIHRydWUgLyBmYWxzZVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJvbkRlbGV0ZSIsImdldE1lc3NhZ2VzIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});