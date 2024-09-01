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
exports.id = "pages/api/transaction";
exports.ids = ["pages/api/transaction"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/transaction.js":
/*!**********************************!*\
  !*** ./pages/api/transaction.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    try {\n        const { month  } = req.query;\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/transaction.txt');\n        const data = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, 'utf8');\n        const transactions = data.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        let filteredTransactions = transactions;\n        if (month) {\n            filteredTransactions = transactions.filter((transaction)=>{\n                const [, , , date] = transaction.split(',');\n                return new Date(date).getMonth() + 1 === parseInt(month);\n            });\n        }\n        const formattedTransactions = filteredTransactions.map((transaction)=>{\n            const [transid, requestid, donationid, date] = transaction.split(',');\n            return {\n                transid,\n                requestid,\n                donationid,\n                date\n            };\n        });\n        res.status(200).json(formattedTransactions);\n    } catch (error) {\n        res.status(500).json({\n            error: 'Failed to generate transaction report'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDTDtBQUVSLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztRQUMzQixLQUFLLENBQUNDLFFBQVEsR0FBR04sZ0RBQVMsQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBNEI7UUFDdEUsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWCwyREFBVyxDQUFDTyxRQUFRLEVBQUUsQ0FBTTtRQUMvQyxLQUFLLENBQUNNLFlBQVksR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBSSxLQUFFQyxNQUFNLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDQyxJQUFJLE9BQU8sQ0FBRTs7UUFFdkUsR0FBRyxDQUFDQyxvQkFBb0IsR0FBR0wsWUFBWTtRQUN2QyxFQUFFLEVBQUVSLEtBQUssRUFBRSxDQUFDO1lBQ1ZhLG9CQUFvQixHQUFHTCxZQUFZLENBQUNFLE1BQU0sRUFBQ0ksV0FBVyxHQUFJLENBQUM7Z0JBQ3pELEtBQUssUUFBUUMsSUFBSSxJQUFJRCxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFHO2dCQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDTyxJQUFJLENBQUNELElBQUksRUFBRUUsUUFBUSxLQUFLLENBQUMsS0FBS0MsUUFBUSxDQUFDbEIsS0FBSztZQUN6RCxDQUFDO1FBQ0gsQ0FBQztRQUVELEtBQUssQ0FBQ21CLHFCQUFxQixHQUFHTixvQkFBb0IsQ0FBQ08sR0FBRyxFQUFDTixXQUFXLEdBQUksQ0FBQztZQUNyRSxLQUFLLEVBQUVPLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVSLElBQUksSUFBSUQsV0FBVyxDQUFDTCxLQUFLLENBQUMsQ0FBRztZQUNwRSxNQUFNLENBQUMsQ0FBQztnQkFBQ1ksT0FBTztnQkFBRUMsU0FBUztnQkFBRUMsVUFBVTtnQkFBRVIsSUFBSTtZQUFDLENBQUM7UUFDakQsQ0FBQztRQUVEaEIsR0FBRyxDQUFDeUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTixxQkFBcUI7SUFDNUMsQ0FBQyxDQUFDLEtBQUssRUFBRU8sS0FBSyxFQUFFLENBQUM7UUFDZjNCLEdBQUcsQ0FBQ3lCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUF1QztRQUFDLENBQUM7SUFDekUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbi1tYW5hZ2VtZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL3RyYW5zYWN0aW9uLmpzPzkwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbW9udGggfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuLi9iYWNrZW5kL3RyYW5zYWN0aW9uLnR4dCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmOCcpO1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25zID0gZGF0YS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09ICcnKTtcclxuXHJcbiAgICBsZXQgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnM7XHJcbiAgICBpZiAobW9udGgpIHtcclxuICAgICAgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMuZmlsdGVyKHRyYW5zYWN0aW9uID0+IHtcclxuICAgICAgICBjb25zdCBbLCAsICwgZGF0ZV0gPSB0cmFuc2FjdGlvbi5zcGxpdCgnLCcpO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMSA9PT0gcGFyc2VJbnQobW9udGgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRUcmFuc2FjdGlvbnMgPSBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5tYXAodHJhbnNhY3Rpb24gPT4ge1xyXG4gICAgICBjb25zdCBbdHJhbnNpZCwgcmVxdWVzdGlkLCBkb25hdGlvbmlkLCBkYXRlXSA9IHRyYW5zYWN0aW9uLnNwbGl0KCcsJyk7XHJcbiAgICAgIHJldHVybiB7IHRyYW5zaWQsIHJlcXVlc3RpZCwgZG9uYXRpb25pZCwgZGF0ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZm9ybWF0dGVkVHJhbnNhY3Rpb25zKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSB0cmFuc2FjdGlvbiByZXBvcnQnIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibW9udGgiLCJxdWVyeSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwicmVhZEZpbGUiLCJ0cmFuc2FjdGlvbnMiLCJzcGxpdCIsImZpbHRlciIsImxpbmUiLCJ0cmltIiwiZmlsdGVyZWRUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbiIsImRhdGUiLCJEYXRlIiwiZ2V0TW9udGgiLCJwYXJzZUludCIsImZvcm1hdHRlZFRyYW5zYWN0aW9ucyIsIm1hcCIsInRyYW5zaWQiLCJyZXF1ZXN0aWQiLCJkb25hdGlvbmlkIiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction.js"));
module.exports = __webpack_exports__;

})();