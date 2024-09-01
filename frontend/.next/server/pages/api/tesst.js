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
exports.id = "pages/api/tesst";
exports.ids = ["pages/api/tesst"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/tesst.js":
/*!****************************!*\
  !*** ./pages/api/tesst.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/test-file.js\n\n\nasync function handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'backend/test.txt');\n        console.log(`Attempting to read file at: ${filePath}`); // Log the path for debugging\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n            throw new Error('File does not exist');\n        }\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        res.status(200).json({\n            content: data\n        });\n    } catch (error) {\n        console.error('Error reading test file:', error); // Log the error\n        res.status(500).json({\n            message: 'Error reading test file',\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUF5QjtBQUNOO0FBQ0k7QUFFUixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBa0I7UUFDNURDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLDRCQUE0QixFQUFFTCxRQUFRLElBQUssQ0FBNkI7UUFFckYsRUFBRSxHQUFHTCxvREFBYSxDQUFDSyxRQUFRLEdBQUcsQ0FBQztZQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBcUI7UUFDdkMsQ0FBQztRQUVELEtBQUssQ0FBQ0MsSUFBSSxHQUFHYixzREFBZSxDQUFDSyxRQUFRLEVBQUUsQ0FBTTtRQUM3Q0QsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUVKLElBQUk7UUFBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO1FBQ2ZULE9BQU8sQ0FBQ1MsS0FBSyxDQUFDLENBQTBCLDJCQUFFQSxLQUFLLEVBQUcsQ0FBZ0I7UUFDbEVkLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0csT0FBTyxFQUFFLENBQXlCO1lBQUVELEtBQUssRUFBRUEsS0FBSyxDQUFDQyxPQUFPO1FBQUMsQ0FBQztJQUNuRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmF0aW9uLW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9wYWdlcy9hcGkvdGVzc3QuanM/NTZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvdGVzdC1maWxlLmpzXHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnYmFja2VuZC90ZXN0LnR4dCcpO1xyXG4gICAgY29uc29sZS5sb2coYEF0dGVtcHRpbmcgdG8gcmVhZCBmaWxlIGF0OiAke2ZpbGVQYXRofWApOyAvLyBMb2cgdGhlIHBhdGggZm9yIGRlYnVnZ2luZ1xyXG5cclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY29udGVudDogZGF0YSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyB0ZXN0IGZpbGU6JywgZXJyb3IpOyAvLyBMb2cgdGhlIGVycm9yXHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIHRlc3QgZmlsZScsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJjb25zb2xlIiwibG9nIiwiZXhpc3RzU3luYyIsIkVycm9yIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsInN0YXR1cyIsImpzb24iLCJjb250ZW50IiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tesst.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tesst.js"));
module.exports = __webpack_exports__;

})();