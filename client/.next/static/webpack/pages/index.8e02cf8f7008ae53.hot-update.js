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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function(param1) {\n    var smsgs = param1.smsgs, users = param1.users;\n    var _this1 = _this;\n    _s();\n    var client = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)(); // 클라이언트 캐쉬정보를 업데이트\n    var ref7 = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(), _query = ref7.query, _userId = _query.userId, userId = _userId === void 0 ? '' : _userId; // userId 식별 - http://localhost:3000/?userId=joon\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs), msgs = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(fetchMoreEl);\n    //  CREATE\n    var ref3 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.CREATE_MESSAGE, {\n            text: text,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var createMessage = param.createMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessage\n                            ].concat(_toConsumableArray(old.pages[0].messages))\n                        }, \n                    ].concat(_toConsumableArray(old.pages.slice(1)))\n                };\n            });\n        }\n    }), onCreate = ref3.mutate;\n    //  UPDATE\n    var ref4 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(param) {\n        var text = param.text, id = param.id;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.UPDATE_MESSAGE, {\n            text: text,\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var updateMessage = param.updateMessage;\n            doneEdit();\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var ref = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.findTargetMsgIndex)(old.pages, updateMessage.id), pageIndex = ref.pageIndex, msgIndex = ref.msgIndex;\n                if (pageIndex < 0 || msgIndex < 0) return old;\n                var newMsgs = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.getNewMessages)(old);\n                newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage);\n                return newMsgs;\n            });\n        }\n    }), onUpdate = ref4.mutate;\n    //  DELETE\n    var ref5 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(function(id) {\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.DELETE_MESSAGE, {\n            id: id,\n            userId: userId\n        });\n    }, {\n        onSuccess: function(param) {\n            var deletedId = param.deleteMessage;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(old) {\n                var ref = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.findTargetMsgIndex)(old.pages, deletedId), pageIndex = ref.pageIndex, msgIndex = ref.msgIndex;\n                if (pageIndex < 0 || msgIndex < 0) return old;\n                var newMsgs = (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.getNewMessages)(old);\n                newMsgs.pages[pageIndex].messages.splice(msgIndex, 1);\n                return newMsgs;\n            });\n        }\n    }), onDelete = ref5.mutate;\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    //  GET\n    var ref6 = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_6__.QueryKeys.MESSAGES, function(param) {\n        var _pageParam = param.pageParam, pageParam = _pageParam === void 0 ? '' : _pageParam;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_6__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_7__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: function(param) {\n            var messages = param.messages;\n            var ref;\n            return messages === null || messages === void 0 ? void 0 : (ref = messages[messages.length - 1]) === null || ref === void 0 ? void 0 : ref.id;\n        }\n    }), data = ref6.data, error = ref6.error, isError = ref6.isError, fetchNextPage = ref6.fetchNextPage, hasNextPage = ref6.hasNextPage;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    if (isError) {\n        console.error(error);\n        return null;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 117,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map(function(param, pageIndex) {\n                    var messages = param.messages;\n                    return messages.map(function(x) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                            onUpdate: onUpdate,\n                            onDelete: function() {\n                                return onDelete(x.id);\n                            },\n                            startEdit: function() {\n                                return setEditingId(x.id);\n                            },\n                            isEditing: editingId === x.id,\n                            myId: userId\n                        }), pageIndex + x.id, false, {\n                            fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, _this1);\n                    });\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"WA47kLefTwXIBPQGubCnS/LEsAA=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURzQkEsQ0FBQztzQ0FDWixNQUFNLCtEQUFMMUQsZ0RBQU8sb0JBRUYwRCxDQUFDOzRCQUNMaEIsUUFBUSxFQUFFQSxRQUFROzRCQUNsQkcsUUFBUSxFQUFFLFFBQVE7Z0NBQUZBLE1BQU0sQ0FBTkEsUUFBUSxDQUFDYSxDQUFDLENBQUN2QixFQUFFOzs0QkFDN0J3QixTQUFTLEVBQUUsUUFBUTtnQ0FBRnZDLE1BQU0sQ0FBTkEsWUFBWSxDQUFDc0MsQ0FBQyxDQUFDdkIsRUFBRTs7NEJBQ2xDeUIsU0FBUyxFQUFFekMsU0FBUyxLQUFLdUMsQ0FBQyxDQUFDdkIsRUFBRTs0QkFDN0IwQixJQUFJLEVBQUU3QyxNQUFNOzRCQU5Qc0IsU0FBUyxHQUFHb0IsQ0FBQyxDQUFDdkIsRUFBRTs7Ozs7Ozs7Ozs7O3dGQVc1QjJCLENBQUc7Z0JBQUNDLEdBQUcsRUFBRTFDLFdBQVc7Ozs7Ozs7O0FBRzNCLENBQUM7R0FwSEtWLE9BQU87O1FBQ0laLHVEQUFjO1FBR3pCSCxrREFBUztRQUtRYyxnRUFBaUI7UUFHVGIsb0RBQVc7UUFrQlhBLG9EQUFXO1FBbUJYQSxvREFBVztRQXNCcUJDLHlEQUFnQjs7O0tBdkV6RWEsT0FBTztBQXNIYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VJbmZpbml0ZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5pbXBvcnQge1xuICBRdWVyeUtleXMsXG4gIGZldGNoZXIsXG4gIGZpbmRUYXJnZXRNc2dJbmRleCxcbiAgZ2V0TmV3TWVzc2FnZXMsXG59IGZyb20gJy4uL3F1ZXJ5Q2xpZW50JztcbmltcG9ydCB7XG4gIEdFVF9NRVNTQUdFUyxcbiAgQ1JFQVRFX01FU1NBR0UsXG4gIFVQREFURV9NRVNTQUdFLFxuICBERUxFVEVfTUVTU0FHRSxcbn0gZnJvbSAnLi4vZ3JhcGhxbC9tZXNzYWdlJztcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCc7XG5cbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpOyAvLyDtgbTrnbzsnbTslrjtirgg7LqQ7Ims7KCV67O066W8IOyXheuNsOydtO2KuFxuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgdXNlcklkID0gJycgfSxcbiAgfSA9IHVzZVJvdXRlcigpOyAvLyB1c2VySWQg7Iud67OEIC0gaHR0cDovL2xvY2FsaG9zdDozMDAwLz91c2VySWQ9am9vblxuXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xuXG4gIC8vICBDUkVBVEVcbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcbiAgICAoeyB0ZXh0IH0pID0+IGZldGNoZXIoQ1JFQVRFX01FU1NBR0UsIHsgdGV4dCwgdXNlcklkIH0pLFxuICAgIHtcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCBvbGQgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYWdlUGFyYW06IG9sZC5wYWdlUGFyYW0sXG4gICAgICAgICAgICBwYWdlczogW1xuICAgICAgICAgICAgICB7IG1lc3NhZ2VzOiBbY3JlYXRlTWVzc2FnZSwgLi4ub2xkLnBhZ2VzWzBdLm1lc3NhZ2VzXSB9LFxuICAgICAgICAgICAgICAuLi5vbGQucGFnZXMuc2xpY2UoMSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgLy8gIFVQREFURVxuICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKFxuICAgICh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSxcbiAgICB7XG4gICAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBkb25lRWRpdCgpO1xuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgb2xkID0+IHtcbiAgICAgICAgICBjb25zdCB7IHBhZ2VJbmRleCwgbXNnSW5kZXggfSA9IGZpbmRUYXJnZXRNc2dJbmRleChcbiAgICAgICAgICAgIG9sZC5wYWdlcyxcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwIHx8IG1zZ0luZGV4IDwgMCkgcmV0dXJuIG9sZDtcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gZ2V0TmV3TWVzc2FnZXMob2xkKTtcbiAgICAgICAgICBuZXdNc2dzLnBhZ2VzW3BhZ2VJbmRleF0ubWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxLCB1cGRhdGVNZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gbmV3TXNncztcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgLy8gIERFTEVURVxuICBjb25zdCB7IG11dGF0ZTogb25EZWxldGUgfSA9IHVzZU11dGF0aW9uKFxuICAgIGlkID0+IGZldGNoZXIoREVMRVRFX01FU1NBR0UsIHsgaWQsIHVzZXJJZCB9KSxcbiAgICB7XG4gICAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCBvbGQgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcGFnZUluZGV4LCBtc2dJbmRleCB9ID0gZmluZFRhcmdldE1zZ0luZGV4KFxuICAgICAgICAgICAgb2xkLnBhZ2VzLFxuICAgICAgICAgICAgZGVsZXRlZElkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAocGFnZUluZGV4IDwgMCB8fCBtc2dJbmRleCA8IDApIHJldHVybiBvbGQ7XG5cbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gZ2V0TmV3TWVzc2FnZXMob2xkKTtcbiAgICAgICAgICBuZXdNc2dzLnBhZ2VzW3BhZ2VJbmRleF0ubWVzc2FnZXMuc3BsaWNlKG1zZ0luZGV4LCAxKTtcbiAgICAgICAgICByZXR1cm4gbmV3TXNncztcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICAvLyAgR0VUXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzRXJyb3IsIGZldGNoTmV4dFBhZ2UsIGhhc05leHRQYWdlIH0gPSB1c2VJbmZpbml0ZVF1ZXJ5KFxuICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcbiAgICAoeyBwYWdlUGFyYW0gPSAnJyB9KSA9PiBmZXRjaGVyKEdFVF9NRVNTQUdFUywgeyBjdXJzb3I6IHBhZ2VQYXJhbSB9KSxcbiAgICB7XG4gICAgICBnZXROZXh0UGFnZVBhcmFtOiAoeyBtZXNzYWdlcyB9KSA9PiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlcz8uW21lc3NhZ2VzLmxlbmd0aCAtIDFdPy5pZDtcbiAgICAgIH0sXG4gICAgfVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhPy5wYWdlcykgcmV0dXJuO1xuICAgIHNldE1zZ3MoZGF0YS5wYWdlcyk7XG4gIH0sIFtkYXRhPy5wYWdlc10pO1xuXG4gIGlmIChpc0Vycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbnRlcnNlY3RpbmcgJiYgaGFzTmV4dFBhZ2UpIGZldGNoTmV4dFBhZ2UoKTtcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHsgbWVzc2FnZXMgfSwgcGFnZUluZGV4KSA9PlxuICAgICAgICAgIG1lc3NhZ2VzLm1hcCh4ID0+IChcbiAgICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICAgIGtleT17cGFnZUluZGV4ICsgeC5pZH1cbiAgICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XG4gICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwidXNlTXV0YXRpb24iLCJ1c2VJbmZpbml0ZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJRdWVyeUtleXMiLCJmZXRjaGVyIiwiZmluZFRhcmdldE1zZ0luZGV4IiwiZ2V0TmV3TWVzc2FnZXMiLCJHRVRfTUVTU0FHRVMiLCJDUkVBVEVfTUVTU0FHRSIsIlVQREFURV9NRVNTQUdFIiwiREVMRVRFX01FU1NBR0UiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwiY2xpZW50IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidGV4dCIsIm9uU3VjY2VzcyIsImNyZWF0ZU1lc3NhZ2UiLCJzZXRRdWVyeURhdGEiLCJNRVNTQUdFUyIsIm9sZCIsInBhZ2VQYXJhbSIsInBhZ2VzIiwibWVzc2FnZXMiLCJzbGljZSIsIm9uQ3JlYXRlIiwibXV0YXRlIiwiaWQiLCJ1cGRhdGVNZXNzYWdlIiwiZG9uZUVkaXQiLCJwYWdlSW5kZXgiLCJtc2dJbmRleCIsIm5ld01zZ3MiLCJzcGxpY2UiLCJvblVwZGF0ZSIsImRlbGV0ZWRJZCIsImRlbGV0ZU1lc3NhZ2UiLCJvbkRlbGV0ZSIsImN1cnNvciIsImdldE5leHRQYWdlUGFyYW0iLCJsZW5ndGgiLCJkYXRhIiwiZXJyb3IiLCJpc0Vycm9yIiwiZmV0Y2hOZXh0UGFnZSIsImhhc05leHRQYWdlIiwiY29uc29sZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});