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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query; // userId 식별 - http://localhost:3000/?userId=joon\n    var userId = query.userId || query.userid || ''; // 대소문자\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null); //무한 스크롤 구현 이 div가 화면에 나오면 다음 부분을 불러 와라\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fetchMoreEl); // 화면상에 div태그가 들어오면 true / false\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        setEditingId(null);\n    };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('delete', \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + '';\n                            }); // json db에서 숫자형과 문자열의 문제\n                            if (targetIndex < 0) return msgs;\n                            var newMsg = _toConsumableArray(msgs);\n                            newMsg.splice(targetIndex, 1);\n                            return newMsg;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var newMsgs;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages', {\n                            params: {\n                                cursor: msgs1[msgs1.length - 1] || ''\n                            }\n                        });\n                    case 2:\n                        newMsgs = _ctx.sent;\n                        setMsgs(newMsgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getMessages();\n    }, []);\n    // intersacting이 true일때 재호출\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (intersecting) getMessages();\n    }, [\n        intersecting\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 70,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            ' '\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"HqR5ZDjAnARse6QopgGcaLXo5aE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpOyAvLyB1c2VySWQg7Iud67OEIC0gaHR0cDovL2xvY2FsaG9zdDozMDAwLz91c2VySWQ9am9vblxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnOyAvLyDrjIDshozrrLjsnpBcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpOyAvL+ustO2VnCDsiqTtgazroaQg6rWs7ZiEIOydtCBkaXbqsIAg7ZmU66m07JeQIOuCmOyYpOuptCDri6TsnYwg67aA67aE7J2EIOu2iOufrCDsmYDrnbxcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpOyAvLyDtmZTrqbTsg4Hsl5AgZGl27YOc6re46rCAIOuTpOyWtOyYpOuptCB0cnVlIC8gZmFsc2VcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4ge1xuICAgIHNldEVkaXRpbmdJZChudWxsKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcbiAgICB9KTtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpOyAvLyBqc29uIGRi7JeQ7IScIOyIq+yekO2YleqzvCDrrLjsnpDsl7TsnZgg66y47KCcXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXSB8fCAnJyB9LCAvLyDtmITsoJwg642w7J207YSw7J2YIOuniOyngOuniSBpZOqwklxuICAgIH0pO1xuICAgIHNldE1zZ3MobmV3TXNncyk7XG4gIH07XG4gIC8vIOy1nOy0iCDsoJHsho3si5wg64+Z7J6RIHVzZUVmZmVjdCDrgrTrtoDsl5DshJzripQgYXN5bmMgYXdhaXTrpbwg7KeB7KCRIO2YuOy2nCDtlZjsp4Ag7JWK7J2MXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWVzc2FnZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIGludGVyc2FjdGluZ+ydtCB0cnVl7J2865WMIOyerO2YuOy2nFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnRlcnNlY3RpbmcpIGdldE1lc3NhZ2VzKCk7XG4gIH0sIFtpbnRlcnNlY3RpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSAvLyBpZOulvCDrhJjquLDquLAg7JyE7ZW0XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gLy8gZWRpdCDtlZjripQg7JWE7J2065SU6rCS7J2EIHNldFxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9IC8vIHRydWUgLyBmYWxzZVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz57JyAnfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});