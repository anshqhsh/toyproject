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

/***/ "./queryClient.js":
/*!************************!*\
  !*** ./queryClient.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": function() { return /* binding */ fetcher; },\n/* harmony export */   \"QueryKeys\": function() { return /* binding */ QueryKeys; },\n/* harmony export */   \"findTargetMsgIndex\": function() { return /* binding */ findTargetMsgIndex; },\n/* harmony export */   \"getNewMessages\": function() { return /* binding */ getNewMessages; }\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"../node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar URL = 'http://localhost:8080/graphql';\nvar fetcher = function(query) {\n    var variables = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    (0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(URL, query, variables);\n    console.log({\n        query: query\n    });\n    console.log({\n        variables: variables\n    });\n};\nvar QueryKeys = {\n    MESSAGES: 'MESSAGES',\n    MESSAGE: 'MESSAGE',\n    USERS: 'USERS',\n    USER: 'USER'\n};\n// index\nvar findTargetMsgIndex = function(pages, id) {\n    var msgIndex = -1;\n    var pageIndex = pages.findIndex(function(param) {\n        var messages = param.messages;\n        msgIndex = messages.findIndex(function(msg) {\n            return msg.id === id;\n        });\n        if (msgIndex > -1) {\n            return true;\n        }\n        return false;\n    });\n    return {\n        pageIndex: pageIndex,\n        msgIndex: msgIndex\n    };\n};\nvar getNewMessages = function(old) {\n    return {\n        pageParams: old.pageParams,\n        pages: old.pages.map(function(param) {\n            var messages = param.messages;\n            return {\n                messages: _toConsumableArray(messages)\n            };\n        })\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVyeUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pDLEdBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQStCO0FBRXBDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVFDLENBQVBDLEtBQUssRUFBcUIsQ0FBQztRQUFwQkQsU0FBUyxvRUFBRyxDQUFDLENBQUM7SUFDM0NILHdEQUFPLENBQUNDLEdBQUcsRUFBRUcsS0FBSyxFQUFFRCxTQUFTO0lBQzdCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1FBQUNGLEtBQUssRUFBTEEsS0FBSztJQUFDLENBQUM7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7UUFBQ0gsU0FBUyxFQUFUQSxTQUFTO0lBQUMsQ0FBQztBQUMzQixDQUFDO0FBRU0sR0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBQztJQUN4QkMsUUFBUSxFQUFFLENBQVU7SUFDcEJDLE9BQU8sRUFBRSxDQUFTO0lBQ2xCQyxLQUFLLEVBQUUsQ0FBTztJQUNkQyxJQUFJLEVBQUUsQ0FBTTtBQUNkLENBQUM7QUFFRCxFQUFRO0FBQ0QsR0FBSyxDQUFDQyxrQkFBa0IsR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELEVBQUUsRUFBSyxDQUFDO0lBQ2hELEdBQUcsQ0FBQ0UsUUFBUSxJQUFJLENBQUM7SUFDakIsR0FBSyxDQUFDQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csU0FBUyxDQUFDLFFBQVEsUUFBVSxDQUFDO1lBQWhCQyxRQUFRLFNBQVJBLFFBQVE7UUFDM0NILFFBQVEsR0FBR0csUUFBUSxDQUFDRCxTQUFTLENBQUNFLFFBQVEsQ0FBUkEsR0FBRztZQUFJQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ04sRUFBRSxLQUFLQSxFQUFFOztRQUNsRCxFQUFFLEVBQUVFLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSTtRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSztJQUNkLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUFDQyxTQUFTLEVBQVRBLFNBQVM7UUFBRUQsUUFBUSxFQUFSQSxRQUFRO0lBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRU0sR0FBSyxDQUFDSyxjQUFjLEdBQUdDLFFBQVEsQ0FBUkEsR0FBRztJQUFJLE1BQ2xDLENBRG1DLENBQUM7UUFDckNDLFVBQVUsRUFBRUQsR0FBRyxDQUFDQyxVQUFVO1FBQzFCUixLQUFLLEVBQUVPLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDUyxHQUFHLENBQUMsUUFBUTtnQkFBTEwsUUFBUSxTQUFSQSxRQUFRO1lBQU8sTUFBTSxDQUFMLENBQUM7Z0JBQUNBLFFBQVEscUJBQU1BLFFBQVE7WUFBRSxDQUFDOztJQUNyRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3F1ZXJ5Q2xpZW50LmpzP2RhMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5jb25zdCBVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2dyYXBocWwnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hlciA9IChxdWVyeSwgdmFyaWFibGVzID0ge30pID0+IHtcbiAgcmVxdWVzdChVUkwsIHF1ZXJ5LCB2YXJpYWJsZXMpO1xuICBjb25zb2xlLmxvZyh7IHF1ZXJ5IH0pO1xuICBjb25zb2xlLmxvZyh7IHZhcmlhYmxlcyB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUtleXMgPSB7XG4gIE1FU1NBR0VTOiAnTUVTU0FHRVMnLFxuICBNRVNTQUdFOiAnTUVTU0FHRScsXG4gIFVTRVJTOiAnVVNFUlMnLFxuICBVU0VSOiAnVVNFUicsXG59O1xuXG4vLyBpbmRleFxuZXhwb3J0IGNvbnN0IGZpbmRUYXJnZXRNc2dJbmRleCA9IChwYWdlcywgaWQpID0+IHtcbiAgbGV0IG1zZ0luZGV4ID0gLTE7XG4gIGNvbnN0IHBhZ2VJbmRleCA9IHBhZ2VzLmZpbmRJbmRleCgoeyBtZXNzYWdlcyB9KSA9PiB7XG4gICAgbXNnSW5kZXggPSBtZXNzYWdlcy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgIGlmIChtc2dJbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgcmV0dXJuIHsgcGFnZUluZGV4LCBtc2dJbmRleCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5ld01lc3NhZ2VzID0gb2xkID0+ICh7XG4gIHBhZ2VQYXJhbXM6IG9sZC5wYWdlUGFyYW1zLFxuICBwYWdlczogb2xkLnBhZ2VzLm1hcCgoeyBtZXNzYWdlcyB9KSA9PiAoeyBtZXNzYWdlczogWy4uLm1lc3NhZ2VzXSB9KSksXG59KTtcbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwiVVJMIiwiZmV0Y2hlciIsInZhcmlhYmxlcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIlF1ZXJ5S2V5cyIsIk1FU1NBR0VTIiwiTUVTU0FHRSIsIlVTRVJTIiwiVVNFUiIsImZpbmRUYXJnZXRNc2dJbmRleCIsImlkIiwicGFnZXMiLCJtc2dJbmRleCIsInBhZ2VJbmRleCIsImZpbmRJbmRleCIsIm1lc3NhZ2VzIiwibXNnIiwiZ2V0TmV3TWVzc2FnZXMiLCJvbGQiLCJwYWdlUGFyYW1zIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./queryClient.js\n");

/***/ })

});