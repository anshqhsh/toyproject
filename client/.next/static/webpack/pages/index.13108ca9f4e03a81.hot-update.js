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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function(param) {\n    var smsgs = param.smsgs;\n    var _this1 = _this;\n    _s();\n    console.log(smsgs);\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query; // userId 식별 - http://localhost:3000/?userId=joon\n    var userId = query.userId || query.userid || ''; // 대소문자\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs), msgs1 = ref3[0], setMsgs = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), hasNext = ref2[0], setHasNext = ref2[1]; // 마지막\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); //무한 스크롤 구현 이 div가 화면에 나오면 다음 부분을 불러 와라\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fetchMoreEl); // 화면상에 div태그가 들어오면 true / false\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        setEditingId(null);\n    };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('delete', \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + '';\n                            }); // json db에서 숫자형과 문자열의 문제\n                            if (targetIndex < 0) return msgs;\n                            var newMsg = _toConsumableArray(msgs);\n                            newMsg.splice(targetIndex, 1);\n                            return newMsg;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages', {\n                            params: {\n                                cursor: ((ref = msgs1[msgs1.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || ''\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        if (!(newMsgs.length === 0)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setHasNext(false);\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        setMsgs(function(msgs) {\n                            return _toConsumableArray(msgs).concat(_toConsumableArray(newMsgs));\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음\n    // intersacting이 true일때 재호출 && 마지막\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (intersecting && hasNext) getMessages();\n    }, [\n        intersecting\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 74,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            ' '\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"ADSzJshHKdcqwKp/diJreANsV8Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksQ0FBQzJCLENBQUMsQ0FBQ2hCLEVBQUU7O3dCQUNsQ2tCLFNBQVMsRUFBRTlCLFNBQVMsS0FBSzRCLENBQUMsQ0FBQ2hCLEVBQUU7d0JBQzdCbUIsSUFBSSxFQUFFbkMsTUFBTTt3QkFOUGdDLENBQUMsQ0FBQ2hCLEVBQUU7Ozs7Ozs7Ozs7O3dGQVVkb0IsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFN0IsV0FBVzs7Ozs7O1lBQUssQ0FBRzs7O0FBR25DLENBQUM7R0FuRktiLE9BQU87O1FBRU9MLGtEQUFTO1FBTU5JLGdFQUFpQjs7O0tBUmxDQyxPQUFPO0FBb0ZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcblxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzIH0pID0+IHtcbiAgY29uc29sZS5sb2coc21zZ3MpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTsgLy8gdXNlcklkIOyLneuzhCAtIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/dXNlcklkPWpvb25cbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJzsgLy8g64yA7IaM66y47J6QXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8g66eI7KeA66eJXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpOyAvL+ustO2VnCDsiqTtgazroaQg6rWs7ZiEIOydtCBkaXbqsIAg7ZmU66m07JeQIOuCmOyYpOuptCDri6TsnYwg67aA67aE7J2EIOu2iOufrCDsmYDrnbxcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpOyAvLyDtmZTrqbTsg4Hsl5AgZGl27YOc6re46rCAIOuTpOyWtOyYpOuptCB0cnVlIC8gZmFsc2VcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4ge1xuICAgIHNldEVkaXRpbmdJZChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcbiAgICB9KTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpOyAvLyBqc29uIGRi7JeQ7IScIOyIq+yekO2YleqzvCDrrLjsnpDsl7TsnZgg66y47KCcXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSwgLy8g7ZiE7KCcIOuNsOydtO2EsOydmCDrp4jsp4Drp4kgaWTqsJJcbiAgICB9KTtcbiAgICAvLyDrp4jsp4Drp4nqsJJcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRNc2dzKG1zZ3MgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKTtcbiAgfTtcbiAgLy8g7LWc7LSIIOygkeyGjeyLnCDrj5nsnpEgdXNlRWZmZWN0IOuCtOu2gOyXkOyEnOuKlCBhc3luYyBhd2FpdOulvCDsp4HsoJEg7Zi47LacIO2VmOyngCDslYrsnYxcblxuICAvLyBpbnRlcnNhY3RpbmfsnbQgdHJ1ZeydvOuVjCDsnqztmLjstpwgJiYg66eI7KeA66eJXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpO1xuICB9LCBbaW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKHggPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLy8gaWTrpbwg64SY6riw6riwIOychO2VtFxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IC8vIGVkaXQg7ZWY64qUIOyVhOydtOuUlOqwkuydhCBzZXRcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvLyB0cnVlIC8gZmFsc2VcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+eycgJ31cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInNtc2dzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});