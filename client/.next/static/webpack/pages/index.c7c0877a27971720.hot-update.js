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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query; // userId 식별 - http://localhost:3000/?userId=joon\n    var userId = query.userId || query.userid || ''; // 대소문자\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('post', '/messages', {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        setEditingId(null);\n    };\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('put', \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        throw Error('something wrong');\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('delete', \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + '';\n                            }); // json db에서 숫자형과 문자열의 문제\n                            if (targetIndex < 0) return msgs;\n                            var newMsg = _toConsumableArray(msgs);\n                            newMsg.splice(targetIndex, 1);\n                            return newMsg;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_macbookpro_Desktop_gitHub_toyproject_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('get', '/messages');\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 최초 접속시 동작 useEffect 내부에서는 async await를 직접 호출 하지 않음\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }), x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            \" \"\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"7orURTsIq7Xgtqcoi4q6vXyhmmc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ1QsTUFBTSwrREFBTC9CLGdEQUFPLG9CQUVGK0IsQ0FBQzt3QkFDTGYsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQk8sUUFBUSxFQUFFLFFBQVE7NEJBQUZBLE1BQU0sQ0FBTkEsUUFBUSxDQUFDUSxDQUFDLENBQUNkLEVBQUU7O3dCQUM3QmUsU0FBUyxFQUFFLFFBQVE7NEJBQUZ0QixNQUFNLENBQU5BLFlBQVksQ0FBQ3FCLENBQUMsQ0FBQ2QsRUFBRTs7d0JBQ2xDZ0IsU0FBUyxFQUFFeEIsU0FBUyxLQUFLc0IsQ0FBQyxDQUFDZCxFQUFFO3dCQUM3QmlCLElBQUksRUFBRTdCLE1BQU07d0JBTlAwQixDQUFDLENBQUNkLEVBQUU7Ozs7Ozs7Ozs7O3dGQVVka0IsQ0FBRztnQkFBQ0MsR0FBRyxFQUFFQyxXQUFXOzs7Ozs7WUFBSSxDQUFDOzs7QUFHaEMsQ0FBQztHQXRFS2xDLE9BQU87O1FBQ09KLGtEQUFTOzs7S0FEdkJJLE9BQU87QUF1RWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTsgLy8gdXNlcklkIOyLneuzhCAtIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8/dXNlcklkPWpvb25cbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJzsgLy8g64yA7IaM66y47J6QXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpO1xuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZ0lkKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJyk7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xuICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHNldE1zZ3MobXNncyA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJyk7IC8vIGpzb24gZGLsl5DshJwg7Iir7J6Q7ZiV6rO8IOusuOyekOyXtOydmCDrrLjsoJxcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNnID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNnLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNnO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJyk7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfTtcbiAgLy8g7LWc7LSIIOygkeyGjeyLnCDrj5nsnpEgdXNlRWZmZWN0IOuCtOu2gOyXkOyEnOuKlCBhc3luYyBhd2FpdOulvCDsp4HsoJEg7Zi47LacIO2VmOyngCDslYrsnYxcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXNzYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKHggPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLy8gaWTrpbwg64SY6riw6riwIOychO2VtFxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IC8vIGVkaXQg7ZWY64qUIOyVhOydtOuUlOqwkuydhCBzZXRcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvLyB0cnVlIC8gZmFsc2VcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+IHsvKirrrLTtlZwg7Iqk7YGs66GkIOq1rO2YhCAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJkb25lRWRpdCIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiLCJmZXRjaE1vcmVFbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});