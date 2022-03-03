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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MsgInput = ({ mutate , id =undefined , text: text1 = ''  })=>{\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        e.stopPropagation(); // 이벤트 버블링 제어\n        const text = textRef.current.value;\n        textRef.current.value = '';\n        mutate(text, id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"messages__input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                defaultValue: text1,\n                placeholder: \"내용을 입력하세요\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgInput.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUM5QixLQUFLLENBQUNDLFFBQVEsSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBRUMsRUFBRSxFQUFHQyxTQUFTLEdBQUVDLElBQUksRUFBSkEsS0FBSSxHQUFHLENBQUUsR0FBQyxDQUFDLEdBQUssQ0FBQztJQUMzRCxLQUFLLENBQUNDLE9BQU8sR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBRTNCLEtBQUssQ0FBQ08sUUFBUSxJQUFHQyxDQUFDLEdBQUksQ0FBQztRQUNyQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCRCxDQUFDLENBQUNFLGVBQWUsR0FBSSxDQUFhLEVBQWdCO1FBQ2xDLEtBQVgsQ0FBQ0wsSUFBSSxHQUFHQyxPQUFPLENBQUNLLE9BQU8sQ0FBQ0MsS0FBSztRQUNsQ04sT0FBTyxDQUFDSyxPQUFPLENBQUNDLEtBQUssR0FBRyxDQUFFO1FBQzFCVixNQUFNLENBQUNHLElBQUksRUFBRUYsRUFBRTtJQUNqQixDQUFDO0lBQ0QsTUFBTSw2RUFDSFUsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBaUI7UUFBQ1AsUUFBUSxFQUFFQSxRQUFROzt3RkFDakRRLENBQVE7Z0JBQ1BDLEdBQUcsRUFBRVYsT0FBTztnQkFDWlcsWUFBWSxFQUFFWixLQUFJO2dCQUNsQmEsV0FBVyxFQUFDLENBQVc7Ozs7Ozt3RkFFUkMsQ0FBVjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZW5CLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanM/Y2MyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgaWQgPSB1bmRlZmluZWQsIHRleHQgPSAnJyB9KSA9PiB7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8g7J2067Kk7Yq4IOuyhOu4lOungSDsoJzslrRcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHRleHRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgIG11dGF0ZSh0ZXh0LCBpZCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICByZWY9e3RleHRSZWZ9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqUXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsImlkIiwidW5kZWZpbmVkIiwidGV4dCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsImZvcm0iLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInJlZiIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgInput.js\n");

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nconst MsgItem = ({ id , userId , timestamp , text , onUpdate , isEditing , startEdit , onDelete ,  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    userId,\n                    '',\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString('ko-Kr', {\n                            year: 'numeric',\n                            month: 'numeric',\n                            day: 'numeric',\n                            hour: '2-digit',\n                            minute: '2-digit',\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false) : text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgItem.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDakMsS0FBSyxDQUFDQyxPQUFPLElBQUksQ0FBQyxDQUNoQkMsRUFBRSxHQUNGQyxNQUFNLEdBQ05DLFNBQVMsR0FDVEMsSUFBSSxHQUNKQyxRQUFRLEdBQ1JDLFNBQVMsR0FDVEMsU0FBUyxHQUNUQyxRQUFRLElBQ1YsQ0FBQywrRUFDRUMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O3dGQUMzQkMsQ0FBRTs7b0JBQ0FULE1BQU07b0JBQ04sQ0FBRTtnR0FDRlUsQ0FBRztrQ0FDRCxHQUFHLENBQUNDLElBQUksQ0FBQ1YsU0FBUyxFQUFFVyxjQUFjLENBQUMsQ0FBTyxRQUFFLENBQUM7NEJBQzVDQyxJQUFJLEVBQUUsQ0FBUzs0QkFDZkMsS0FBSyxFQUFFLENBQVM7NEJBQ2hCQyxHQUFHLEVBQUUsQ0FBUzs0QkFDZEMsSUFBSSxFQUFFLENBQVM7NEJBQ2ZDLE1BQU0sRUFBRSxDQUFTOzRCQUNqQkMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7O1lBR0pkLFNBQVM7c0dBRUxQLGlEQUFRO29CQUFDc0IsTUFBTSxFQUFFaEIsUUFBUTtvQkFBRUQsSUFBSSxFQUFFQSxJQUFJO29CQUFFSCxFQUFFLEVBQUVBLEVBQUU7Ozs7OztnQ0FHaERHLElBQUk7d0ZBRUxrQixDQUFHO2dCQUFDWixTQUFTLEVBQUMsQ0FBbUI7O2dHQUMvQmEsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFakIsU0FBUztrQ0FBRSxDQUFFOzs7Ozs7Z0dBQ3pCZ0IsQ0FBRTt3QkFBQ0MsT0FBTyxFQUFFaEIsUUFBUTtrQ0FBRSxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DLGlFQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanM/YzMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5jb25zdCBNc2dJdGVtID0gKHtcbiAgaWQsXG4gIHVzZXJJZCxcbiAgdGltZXN0YW1wLFxuICB0ZXh0LFxuICBvblVwZGF0ZSxcbiAgaXNFZGl0aW5nLFxuICBzdGFydEVkaXQsXG4gIG9uRGVsZXRlLFxufSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2l0ZW1cIj5cbiAgICA8aDM+XG4gICAgICB7dXNlcklkfVxuICAgICAgeycnfVxuICAgICAgPHN1Yj5cbiAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtyJywge1xuICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogJ251bWVyaWMnLFxuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICBob3VyMTI6IHRydWUsXG4gICAgICAgIH0pfVxuICAgICAgPC9zdWI+XG4gICAgPC9oMz5cbiAgICB7aXNFZGl0aW5nID8gKFxuICAgICAgPD5cbiAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICB0ZXh0XG4gICAgKX1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0RWRpdH0+7IiY7KCVPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlfT7sgq3soJw8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XG4iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJpc0VkaXRpbmciLCJzdGFydEVkaXQiLCJvbkRlbGV0ZSIsImxpIiwiY2xhc3NOYW1lIiwiaDMiLCJzdWIiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwibXV0YXRlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n");

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\n\n\nconst UserIds = [\n    'kim',\n    'lee'\n];\nconst getRandomUserId = ()=>UserIds[Math.round(Math.random())]\n;\n// 50개의 arr생성\nconst originalMsgs = Array(50).fill(0).map((_, i)=>({\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: `${50 - i} mock text`\n    })\n);\nconst MsgList = ()=>{\n    const { 0: msgs1 , 1: setMsgs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(originalMsgs);\n    const { 0: editingId , 1: setEditingId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: `${msgs1.length + 1}${text}`\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]\n        );\n    };\n    const doneEdit = ()=>setEditingId(null)\n    ;\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id\n            );\n            if (targetIndex < 0) return msgs;\n            const newMsg = [\n                ...msgs\n            ];\n            newMsg.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsg;\n        });\n        doneEdit();\n    };\n    const onDelete = (id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id\n            );\n            if (targetIndex < 0) return msgs;\n            const newMsg = [\n                ...msgs\n            ];\n            newMsg.splice(targetIndex, 1);\n            return newMsg;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        onDelete: ()=>onDelete(x.id)\n                        ,\n                        startEdit: ()=>setEditingId(x.id)\n                        ,\n                        isEditing: editingId === x.id\n                    }, x.id, false, {\n                        fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/gitHub/toyproject/client/components/MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTs7d0ZBRUR0QixpREFBUTtnQkFBQ2lDLE1BQU0sRUFBRVosUUFBUTs7Ozs7O3dGQUN6QmEsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVU7MEJBQ3JCbEIsS0FBSSxDQUFDUixHQUFHLEVBQUMyQixDQUFDLCtFQUNSckMsZ0RBQU87MkJBRUZxQyxDQUFDO3dCQUNMVCxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCSyxRQUFRLE1BQVFBLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDeEIsRUFBRTs7d0JBQzdCeUIsU0FBUyxNQUFRakIsWUFBWSxDQUFDZ0IsQ0FBQyxDQUFDeEIsRUFBRTs7d0JBQ2xDMEIsU0FBUyxFQUFFbkIsU0FBUyxLQUFLaUIsQ0FBQyxDQUFDeEIsRUFBRTt1QkFMeEJ3QixDQUFDLENBQUN4QixFQUFFOzs7Ozs7Ozs7Ozs7O0FBV3JCLENBQUM7QUFDRCxpRUFBZUksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuXG5jb25zdCBVc2VySWRzID0gWydraW0nLCAnbGVlJ107XG5cbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbi8vIDUw6rCc7J2YIGFycuyDneyEsVxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShvcmlnaW5hbE1zZ3MpO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0ke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICBzZXRNc2dzKG1zZ3MgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgIHRleHQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdNc2c7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcbiAgY29uc3Qgb25EZWxldGUgPSBpZCA9PiB7XG4gICAgc2V0TXNncyhtc2dzID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2cgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2cuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2c7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKHggPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e3guaWR9XG4gICAgICAgICAgICB7Li4ueH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gLy8gaWTrpbwg64SY6riw6riwIOychO2VtFxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IC8vIGVkaXQg7ZWY64qUIOyVhOydtOuUlOqwkuydhCBzZXRcbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSAvLyB0cnVlIC8gZmFsc2VcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJvcmlnaW5hbE1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsImRvbmVFZGl0Iiwib25VcGRhdGUiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsInNwbGljZSIsIm9uRGVsZXRlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

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