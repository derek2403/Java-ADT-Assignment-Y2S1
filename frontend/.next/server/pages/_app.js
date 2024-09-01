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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children  }) {\n    const { 0: isVolunteerLoggedIn , 1: setIsVolunteerLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: isDonorLoggedIn , 1: setIsDonorLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const loginVolunteer = (volunteer)=>{\n        setIsVolunteerLoggedIn(true);\n        setCurrentUser(volunteer);\n    };\n    const loginDonor = (donor)=>{\n        setIsDonorLoggedIn(true);\n        setCurrentUser(donor);\n    };\n    const logout = ()=>{\n        setIsVolunteerLoggedIn(false);\n        setIsDonorLoggedIn(false);\n        setCurrentUser(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            isVolunteerLoggedIn,\n            isDonorLoggedIn,\n            currentUser,\n            loginVolunteer,\n            loginDonor,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\charity\\\\frontend\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtFO0FBRWxFLEtBQUssQ0FBQ0ksV0FBVyxpQkFBR0gsb0RBQWE7QUFFMUIsU0FBU0ksWUFBWSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFDLEtBQUssTUFBRUMsbUJBQW1CLE1BQUVDLHNCQUFzQixNQUFJTiwrQ0FBUSxDQUFDLEtBQUs7SUFDcEUsS0FBSyxNQUFFTyxlQUFlLE1BQUVDLGtCQUFrQixNQUFJUiwrQ0FBUSxDQUFDLEtBQUs7SUFDNUQsS0FBSyxNQUFFUyxXQUFXLE1BQUVDLGNBQWMsTUFBSVYsK0NBQVEsQ0FBQyxJQUFJO0lBRW5ELEtBQUssQ0FBQ1csY0FBYyxJQUFJQyxTQUFTLEdBQUssQ0FBQztRQUNyQ04sc0JBQXNCLENBQUMsSUFBSTtRQUMzQkksY0FBYyxDQUFDRSxTQUFTO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUNDLFVBQVUsSUFBSUMsS0FBSyxHQUFLLENBQUM7UUFDN0JOLGtCQUFrQixDQUFDLElBQUk7UUFDdkJFLGNBQWMsQ0FBQ0ksS0FBSztJQUN0QixDQUFDO0lBRUQsS0FBSyxDQUFDQyxNQUFNLE9BQVMsQ0FBQztRQUNwQlQsc0JBQXNCLENBQUMsS0FBSztRQUM1QkUsa0JBQWtCLENBQUMsS0FBSztRQUN4QkUsY0FBYyxDQUFDLElBQUk7SUFDckIsQ0FBQztJQUVELE1BQU0sNkVBQ0hSLFdBQVcsQ0FBQ2MsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUM1QlosbUJBQW1CO1lBQ25CRSxlQUFlO1lBQ2ZFLFdBQVc7WUFDWEUsY0FBYztZQUNkRSxVQUFVO1lBQ1ZFLE1BQU07UUFDUixDQUFDO2tCQUNFWCxRQUFROzs7Ozs7QUFHZixDQUFDO0FBRU0sU0FBU2MsT0FBTyxHQUFHLENBQUM7SUFDekIsTUFBTSxDQUFDakIsaURBQVUsQ0FBQ0MsV0FBVztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzPzU5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc1ZvbHVudGVlckxvZ2dlZEluLCBzZXRJc1ZvbHVudGVlckxvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEb25vckxvZ2dlZEluLCBzZXRJc0Rvbm9yTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luVm9sdW50ZWVyID0gKHZvbHVudGVlcikgPT4ge1xyXG4gICAgc2V0SXNWb2x1bnRlZXJMb2dnZWRJbih0cnVlKTtcclxuICAgIHNldEN1cnJlbnRVc2VyKHZvbHVudGVlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW5Eb25vciA9IChkb25vcikgPT4ge1xyXG4gICAgc2V0SXNEb25vckxvZ2dlZEluKHRydWUpO1xyXG4gICAgc2V0Q3VycmVudFVzZXIoZG9ub3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldElzVm9sdW50ZWVyTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgc2V0SXNEb25vckxvZ2dlZEluKGZhbHNlKTtcclxuICAgIHNldEN1cnJlbnRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgaXNWb2x1bnRlZXJMb2dnZWRJbixcclxuICAgICAgaXNEb25vckxvZ2dlZEluLFxyXG4gICAgICBjdXJyZW50VXNlcixcclxuICAgICAgbG9naW5Wb2x1bnRlZXIsXHJcbiAgICAgIGxvZ2luRG9ub3IsXHJcbiAgICAgIGxvZ291dFxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiaXNWb2x1bnRlZXJMb2dnZWRJbiIsInNldElzVm9sdW50ZWVyTG9nZ2VkSW4iLCJpc0Rvbm9yTG9nZ2VkSW4iLCJzZXRJc0Rvbm9yTG9nZ2VkSW4iLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwibG9naW5Wb2x1bnRlZXIiLCJ2b2x1bnRlZXIiLCJsb2dpbkRvbm9yIiwiZG9ub3IiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\charity\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Desktop\\\\charity\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDekI7U0FHcEJDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILCtEQUFZOzhGQUNWRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();