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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import useInfiniteScroll from '../hooks/useInfiniteScroll';\nvar MsgList = function(param) {\n    var smsgs = param.smsgs, users = param.users;\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query; // userId 식별 - http://localhost:3000/?userId=joon\n    var userId = query.userId || query.userid || ''; // 대소문자\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(smsgs), msgs1 = ref3[0], setMsgs = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    // const [hasNext, setHasNext] = useState(true); // 마지막\n    // const fetchMoreEl = useRef(null); //무한 스크롤 구현 이 div가 화면에 나오면 다음 부분을 불러 와라\n    // const intersecting = useInfiniteScroll(fetchMoreEl); // 화면상에 div태그가 들어오면 true / false\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_7__.fetcher)('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        setEditingId(null);\n    };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_7__.fetcher)('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_7__.fetcher)('delete', \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + '';\n                            }); // json db에서 숫자형과 문자열의 문제\n                            if (targetIndex < 0) return msgs;\n                            var newMsg = _toConsumableArray(msgs);\n                            newMsg.splice(targetIndex, 1);\n                            return newMsg;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref2 = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_7__.QueryKeys.MESSAGES, function() {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_7__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES);\n    }), data = ref2.data, error = ref2.error, isError1 = ref2.isError;\n    console.log(data);\n    if (isError1) {\n        console.log(error);\n        return null;\n    }\n    // restAPI 에서는 상황에 따라 호출 하나 graphql의 라이브러리(apollo, react-query, sw 같은 것들은 훅을 이용) 변수 변경시 자동으로 호출 하도록 되어 있음 UseEffect처럼\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_7__.fetcher)('get', '/messages', {\n                            params: {\n                                cursor: ((ref = msgs1[msgs1.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || ''\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        if (!(newMsgs.length === 0)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setHasNext(false);\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        setMsgs(function(msgs) {\n                            return _toConsumableArray(msgs).concat(_toConsumableArray(newMsgs));\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음\n    // // intersacting이 true일때 재호출 && 마지막\n    // useEffect(() => {\n    //   if (intersecting && hasNext) getMessages();\n    // }, [intersecting]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 84,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId,\n                        user: users[x.userId]\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"VkGAXqwbEwr/1fjHDqoZBp0D0a0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDdEIsRUFBRTs7d0JBQzdCdUIsU0FBUyxFQUFFLFFBQVE7NEJBQUY5QixNQUFNLENBQU5BLFlBQVksQ0FBQzZCLENBQUMsQ0FBQ3RCLEVBQUU7O3dCQUNsQ3dCLFNBQVMsRUFBRWhDLFNBQVMsS0FBSzhCLENBQUMsQ0FBQ3RCLEVBQUU7d0JBQzdCeUIsSUFBSSxFQUFFckMsTUFBTTt3QkFDWnNDLElBQUksRUFBRXhDLEtBQUssQ0FBQ29DLENBQUMsQ0FBQ2xDLE1BQU07d0JBUGZrQyxDQUFDLENBQUN0QixFQUFFOzs7Ozs7Ozs7Ozs7O0FBY3JCLENBQUM7R0E1RktoQixPQUFPOztRQUNPUixrREFBUztRQTJDTUUsaURBQVE7OztLQTVDckNNLE9BQU87QUE2RmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBpc0Vycm9yLCB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQgeyBmZXRjaGVyLCBRdWVyeUtleXMgfSBmcm9tICcuLi9xdWVyeUNsaWVudCc7XG5pbXBvcnQgeyBHRVRfTUVTU0FHRVMgfSBmcm9tICcuLi9ncmFwaHFsL21lc3NhZ2UnO1xuLy8gaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcblxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpOyAvLyB1c2VySWQg7Iud67OEIC0gaHR0cDovL2xvY2FsaG9zdDozMDAwLz91c2VySWQ9am9vblxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnOyAvLyDrjIDshozrrLjsnpBcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoc21zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IFtoYXNOZXh0LCBzZXRIYXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpOyAvLyDrp4jsp4Drp4lcbiAgLy8gY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7IC8v66y07ZWcIOyKpO2BrOuhpCDqtaztmIQg7J20IGRpduqwgCDtmZTrqbTsl5Ag64KY7Jik66m0IOuLpOydjCDrtoDrtoTsnYQg67aI65+sIOyZgOudvFxuICAvLyBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7IC8vIO2ZlOuptOyDgeyXkCBkaXbtg5zqt7jqsIAg65Ok7Ja07Jik66m0IHRydWUgLyBmYWxzZVxuXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZ0lkKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJyk7IC8vIGpzb24gZGLsl5DshJwg7Iir7J6Q7ZiV6rO8IOusuOyekOyXtOydmCDrrLjsoJxcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNnID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNnLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNnO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yIH0gPSB1c2VRdWVyeShRdWVyeUtleXMuTUVTU0FHRVMsICgpID0+XG4gICAgZmV0Y2hlcihHRVRfTUVTU0FHRVMpXG4gICk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGlmIChpc0Vycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIHJlc3RBUEkg7JeQ7ISc64qUIOyDge2ZqeyXkCDrlLDrnbwg7Zi47LacIO2VmOuCmCBncmFwaHFs7J2YIOudvOydtOu4jOufrOumrChhcG9sbG8sIHJlYWN0LXF1ZXJ5LCBzdyDqsJnsnYAg6rKD65Ok7J2AIO2bheydhCDsnbTsmqkpIOuzgOyImCDrs4Dqsr3si5wg7J6Q64+Z7Jy866GcIO2YuOy2nCDtlZjrj4TroZ0g65CY7Ja0IOyeiOydjCBVc2VFZmZlY3Tsspjrn7xcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnLCB7XG4gICAgICBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0sIC8vIO2YhOygnCDrjbDsnbTthLDsnZgg66eI7KeA66eJIGlk6rCSXG4gICAgfSk7XG4gICAgLy8g66eI7KeA66eJ6rCSXG4gICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSk7XG4gIH07XG4gIC8vIOy1nOy0iCDsoJHsho3si5wg64+Z7J6RIHVzZUVmZmVjdCDrgrTrtoDsl5DshJzripQgYXN5bmMgYXdhaXTrpbwg7KeB7KCRIO2YuOy2nCDtlZjsp4Ag7JWK7J2MXG5cbiAgLy8gLy8gaW50ZXJzYWN0aW5n7J20IHRydWXsnbzrlYwg7J6s7Zi47LacICYmIOuniOyngOuniVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dCkgZ2V0TWVzc2FnZXMoKTtcbiAgLy8gfSwgW2ludGVyc2VjdGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCh4ID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9IC8vIGlk66W8IOuEmOq4sOq4sCDsnITtlbRcbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSAvLyBlZGl0IO2VmOuKlCDslYTsnbTrlJTqsJLsnYQgc2V0XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH0gLy8gdHJ1ZSAvIGZhbHNlXG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgICB1c2VyPXt1c2Vyc1t4LnVzZXJJZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgey8qIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz57JyAnfSAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiaXNFcnJvciIsInVzZVF1ZXJ5IiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIlF1ZXJ5S2V5cyIsIkdFVF9NRVNTQUdFUyIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwiZG9uZUVkaXQiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwib25EZWxldGUiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiTUVTU0FHRVMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJzZXRIYXNOZXh0IiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});