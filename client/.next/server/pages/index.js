"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation(); // 이벤트 버블링 제어\n        const text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"내용을 입력하세요\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUM5QixLQUFLLENBQUNDLFFBQVEsSUFBSSxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNoQyxLQUFLLENBQUNDLE9BQU8sR0FBR0gsNkNBQU0sQ0FBQyxJQUFJO0lBRTNCLEtBQUssQ0FBQ0ksUUFBUSxJQUFHQyxDQUFDLEdBQUksQ0FBQztRQUNyQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCRCxDQUFDLENBQUNFLGVBQWUsR0FBSSxDQUFhLEVBQWdCO1FBQ2xDLEtBQVgsQ0FBQ0MsSUFBSSxHQUFHTCxPQUFPLENBQUNNLE9BQU8sQ0FBQ0MsS0FBSztRQUNsQ1AsT0FBTyxDQUFDTSxPQUFPLENBQUNDLEtBQUssR0FBRyxDQUFFO1FBQzFCUixNQUFNLENBQUNNLElBQUk7SUFDYixDQUFDO0lBQ0QsTUFBTSw2RUFDSEcsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBaUI7UUFBQ1IsUUFBUSxFQUFFQSxRQUFROzt3RkFDakRTLENBQVE7Z0JBQUNDLEdBQUcsRUFBRVgsT0FBTztnQkFBRVksV0FBVyxFQUFDLENBQVc7Ozs7Ozt3RkFDOUJDLENBQVY7Z0JBQUNDLElBQUksRUFBQyxDQUFROzBCQUFDLENBQUU7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVoQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzP2NjMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUgfSkgPT4ge1xuICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOydtOuypO2KuCDrsoTruJTrp4Eg7KCc7Ja0XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICBtdXRhdGUodGV4dCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDx0ZXh0YXJlYSByZWY9e3RleHRSZWZ9IHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalFwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MsgItem = ({ userId , timestamp , text  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    '',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString('ko-Kr', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 6,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 3,\n                columnNumber: 5\n            }, undefined),\n            text\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n        lineNumber: 2,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEtBQUssQ0FBQ0EsT0FBTyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxTQUFTLEdBQUVDLElBQUksRUFBQyxDQUFDLCtFQUN6Q0MsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O3dGQUMzQkMsQ0FBRTs7b0JBQ0FMLE1BQU07b0JBQ04sQ0FBRTtnR0FDRk0sQ0FBRztrQ0FDRCxHQUFHLENBQUNDLElBQUksQ0FBQ04sU0FBUyxFQUFFTyxjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7NEJBQzVDQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O1lBR0paLElBQUk7Ozs7Ozs7O0FBSVQsaUVBQWVILE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcz9jMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1zZ0l0ZW0gPSAoeyB1c2VySWQsIHRpbWVzdGFtcCwgdGV4dCB9KSA9PiAoXG4gIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgIDxoMz5cbiAgICAgIHt1c2VySWR9XG4gICAgICB7Jyd9XG4gICAgICA8c3ViPlxuICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS3InLCB7XG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnbnVtZXJpYycsXG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgICAgfSl9XG4gICAgICA8L3N1Yj5cbiAgICA8L2gzPlxuICAgIHt0ZXh0fVxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsImxpIiwiY2xhc3NOYW1lIiwiaDMiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\n\nconst UserIds = [\n    'kim',\n    'lee'\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())]\n;\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: `${50 - i} mock text`\n    })\n);\nconst MsgList = ()=>{\n    const { 0: msgs1 , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: `${msgs1.length + 1}${text}`\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...x\n                    }, x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDRDtBQUNFO0FBRWpDLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUM7SUFBQSxDQUFLO0lBQUUsQ0FBSztBQUFBLENBQUM7QUFFOUIsS0FBSyxDQUFDQyxlQUFlLE9BQVNELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTTs7QUFFNUQsS0FBSyxDQUFDQyxZQUFZLEdBQUdDLEtBQUssQ0FBQyxFQUFFLEVBQzFCQyxJQUFJLENBQUMsQ0FBQyxFQUNOQyxHQUFHLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxJQUFNLENBQUM7UUFDZkMsRUFBRSxFQUFFLEVBQUUsR0FBR0QsQ0FBQztRQUNWRSxNQUFNLEVBQUVYLGVBQWU7UUFDdkJZLFNBQVMsRUFBRSxhQUFhLElBQUksRUFBRSxHQUFHSCxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDL0NJLElBQUksS0FBSyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxVQUFVO0lBQzVCLENBQUM7O0FBRUgsS0FBSyxDQUFDSyxPQUFPLE9BQVMsQ0FBQztJQUNyQixLQUFLLE1BQUVDLEtBQUksTUFBRUMsT0FBTyxNQUFJcEIsK0NBQVEsQ0FBQ1EsWUFBWTtJQUM3QyxLQUFLLENBQUNhLFFBQVEsSUFBR0osSUFBSSxHQUFJLENBQUM7UUFDeEIsS0FBSyxDQUFDSyxNQUFNLEdBQUcsQ0FBQztZQUNkUixFQUFFLEVBQUVLLEtBQUksQ0FBQ0ksTUFBTSxHQUFHLENBQUM7WUFDbkJSLE1BQU0sRUFBRVgsZUFBZTtZQUN2QlksU0FBUyxFQUFFUSxJQUFJLENBQUNDLEdBQUc7WUFDbkJSLElBQUksS0FBS0UsS0FBSSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxHQUFHTixJQUFJO1FBQ2pDLENBQUM7UUFDREcsT0FBTyxFQUFDRCxJQUFJLEdBQUksQ0FBQ0c7Z0JBQUFBLE1BQU07bUJBQUtILElBQUk7WUFBQSxDQUFDOztJQUNuQyxDQUFDO0lBRUQsTUFBTTs7d0ZBRURqQixpREFBUTtnQkFBQ3dCLE1BQU0sRUFBRUwsUUFBUTs7Ozs7O3dGQUN6Qk0sQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVU7MEJBQ3JCVCxLQUFJLENBQUNSLEdBQUcsRUFBQ2tCLENBQUMsK0VBQ1I1QixnREFBTzsyQkFBZ0I0QixDQUFDO3VCQUFYQSxDQUFDLENBQUNmLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFLNUIsQ0FBQztBQUNELGlFQUFlSSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ2tpbScsICdsZWUnXTtcblxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBvbkNyZWF0ZSA9IHRleHQgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSR7dGV4dH1gLFxuICAgIH07XG4gICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoeCA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW0ga2V5PXt4LmlkfSB7Li4ueH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJvbkNyZWF0ZSIsIm5ld01zZyIsImxlbmd0aCIsIkRhdGUiLCJub3ciLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ \"./components/MsgList.js\");\n\n\nconst Home = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"SIMPLE SNS\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUUzQyxLQUFLLENBQUNDLElBQUk7O3dGQUVMQyxDQUFFOzBCQUFDLENBQVU7Ozs7Ozt3RkFDYkYsMkRBQU87Ozs7Ozs7O0FBSVosaUVBQWVDLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0JztcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPD5cbiAgICA8aDE+U0lNUExFIFNOUzwvaDE+XG4gICAgPE1zZ0xpc3QgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIk1zZ0xpc3QiLCJIb21lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();