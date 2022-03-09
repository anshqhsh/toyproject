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

/***/ "./graphql/message.js":
/*!****************************!*\
  !*** ./graphql/message.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_MESSAGES\": function() { return /* binding */ GET_MESSAGES; },\n/* harmony export */   \"GET_MESSAGE\": function() { return /* binding */ GET_MESSAGE; },\n/* harmony export */   \"CREATE_MESSAGE\": function() { return /* binding */ CREATE_MESSAGE; },\n/* harmony export */   \"UPDATE_MESSAGE\": function() { return /* binding */ UPDATE_MESSAGE; },\n/* harmony export */   \"DELETE_MESSAGE\": function() { return /* binding */ DELETE_MESSAGE; }\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"../node_modules/graphql-tag/lib/index.js\");\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query GET_MESSAGES($cursor: ID) {\\n    messages(cursor: $cursor) {\\n      id\\n      text\\n      userId\\n      timestamp\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query GET_MESSAGE($id: ID!) {\\n    message(id: $id) {\\n      id\\n      text\\n      userId\\n      timestamp\\n      user {\\n        id\\n        nickname\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation CREATE_MESSAGE($text: String!, $userId: ID!) {\\n    createMessage(text: $text, userId: $userId) {\\n      id\\n      text\\n      userId\\n      timestamp\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation UPDATE_MESSAGE($id: ID!, $text: String!, $userId: ID!) {\\n    updateMessage(id: $id, text: $text, userId: $userId) {\\n      id\\n      text\\n      userId\\n      timestamp\\n    }\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation DELETE_MESSAGE($id: ID!, $userId: ID!) {\\n    deleteMessage(id: $id, userId: $userId)\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar GET_MESSAGES = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_templateObject());\nvar GET_MESSAGE = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_templateObject1());\nvar CREATE_MESSAGE = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_templateObject2());\nvar UPDATE_MESSAGE = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_templateObject3());\nvar DELETE_MESSAGE = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL21lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCOzs7Ozs7Ozs7Ozs7O1FBRUcsQ0FTaEM7Ozs7Ozs7OztRQUUrQixDQWEvQjs7Ozs7Ozs7O1FBRWtDLENBU2xDOzs7Ozs7Ozs7UUFFa0MsQ0FTbEM7Ozs7Ozs7OztRQUVrQyxDQUlsQzs7Ozs7OztBQXBETyxHQUFLLENBQUNDLFlBQVksR0FBR0QsdURBQUc7QUFXeEIsR0FBSyxDQUFDRSxXQUFXLEdBQUdGLHVEQUFHO0FBZXZCLEdBQUssQ0FBQ0csY0FBYyxHQUFHSCx1REFBRztBQVcxQixHQUFLLENBQUNJLGNBQWMsR0FBR0osdURBQUc7QUFXMUIsR0FBSyxDQUFDSyxjQUFjLEdBQUdMLHVEQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2dyYXBocWwvbWVzc2FnZS5qcz80YjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgR0VUX01FU1NBR0VTID0gZ3FsYFxuICBxdWVyeSBHRVRfTUVTU0FHRVMoJGN1cnNvcjogSUQpIHtcbiAgICBtZXNzYWdlcyhjdXJzb3I6ICRjdXJzb3IpIHtcbiAgICAgIGlkXG4gICAgICB0ZXh0XG4gICAgICB1c2VySWRcbiAgICAgIHRpbWVzdGFtcFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVNTQUdFID0gZ3FsYFxuICBxdWVyeSBHRVRfTUVTU0FHRSgkaWQ6IElEISkge1xuICAgIG1lc3NhZ2UoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIHRleHRcbiAgICAgIHVzZXJJZFxuICAgICAgdGltZXN0YW1wXG4gICAgICB1c2VyIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmlja25hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfTUVTU0FHRSA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX01FU1NBR0UoJHRleHQ6IFN0cmluZyEsICR1c2VySWQ6IElEISkge1xuICAgIGNyZWF0ZU1lc3NhZ2UodGV4dDogJHRleHQsIHVzZXJJZDogJHVzZXJJZCkge1xuICAgICAgaWRcbiAgICAgIHRleHRcbiAgICAgIHVzZXJJZFxuICAgICAgdGltZXN0YW1wXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX01FU1NBR0UgPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9NRVNTQUdFKCRpZDogSUQhLCAkdGV4dDogU3RyaW5nISwgJHVzZXJJZDogSUQhKSB7XG4gICAgdXBkYXRlTWVzc2FnZShpZDogJGlkLCB0ZXh0OiAkdGV4dCwgdXNlcklkOiAkdXNlcklkKSB7XG4gICAgICBpZFxuICAgICAgdGV4dFxuICAgICAgdXNlcklkXG4gICAgICB0aW1lc3RhbXBcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfTUVTU0FHRSA9IGdxbGBcbiAgbXV0YXRpb24gREVMRVRFX01FU1NBR0UoJGlkOiBJRCEsICR1c2VySWQ6IElEISkge1xuICAgIGRlbGV0ZU1lc3NhZ2UoaWQ6ICRpZCwgdXNlcklkOiAkdXNlcklkKVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsIkdFVF9NRVNTQUdFUyIsIkdFVF9NRVNTQUdFIiwiQ1JFQVRFX01FU1NBR0UiLCJVUERBVEVfTUVTU0FHRSIsIkRFTEVURV9NRVNTQUdFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/message.js\n");

/***/ })

});