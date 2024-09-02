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
exports.id = "pages/api/donated";
exports.ids = ["pages/api/donated"];
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

/***/ "(api)/./pages/api/donated.js":
/*!******************************!*\
  !*** ./pages/api/donated.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/donatehistory.txt');\n        const data = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, 'utf8');\n        const donations = data.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        const donationCounts = donations.reduce((acc, donation)=>{\n            const [, username] = donation.split(',');\n            acc[username] = (acc[username] || 0) + 1;\n            return acc;\n        }, {});\n        res.status(200).json(donationCounts);\n    } catch (error) {\n        res.status(500).json({\n            error: 'Failed to generate donated report'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9uYXRlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNMO0FBRVIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUdKLGdEQUFTLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQThCO1FBQ3hFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ1QsMkRBQVcsQ0FBQ0ssUUFBUSxFQUFFLENBQU07UUFDL0MsS0FBSyxDQUFDTSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUksS0FBRUMsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxPQUFPLENBQUU7O1FBRXBFLEtBQUssQ0FBQ0MsY0FBYyxHQUFHTCxTQUFTLENBQUNNLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEdBQUssQ0FBQztZQUMxRCxLQUFLLElBQUlDLFFBQVEsSUFBSUQsUUFBUSxDQUFDUCxLQUFLLENBQUMsQ0FBRztZQUN2Q00sR0FBRyxDQUFDRSxRQUFRLEtBQUtGLEdBQUcsQ0FBQ0UsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQ0YsR0FBRztRQUNaLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFTGQsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTixjQUFjO0lBQ3JDLENBQUMsQ0FBQyxLQUFLLEVBQUVPLEtBQUssRUFBRSxDQUFDO1FBQ2ZuQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBbUM7UUFBQyxDQUFDO0lBQ3JFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL2FwaS9kb25hdGVkLmpzPzlmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuLi9iYWNrZW5kL2RvbmF0ZWhpc3RvcnkudHh0Jyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4Jyk7XHJcbiAgICBjb25zdCBkb25hdGlvbnMgPSBkYXRhLnNwbGl0KCdcXG4nKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gJycpO1xyXG5cclxuICAgIGNvbnN0IGRvbmF0aW9uQ291bnRzID0gZG9uYXRpb25zLnJlZHVjZSgoYWNjLCBkb25hdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBbLCB1c2VybmFtZV0gPSBkb25hdGlvbi5zcGxpdCgnLCcpO1xyXG4gICAgICBhY2NbdXNlcm5hbWVdID0gKGFjY1t1c2VybmFtZV0gfHwgMCkgKyAxO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRvbmF0aW9uQ291bnRzKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSBkb25hdGVkIHJlcG9ydCcgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZGF0YSIsInJlYWRGaWxlIiwiZG9uYXRpb25zIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwidHJpbSIsImRvbmF0aW9uQ291bnRzIiwicmVkdWNlIiwiYWNjIiwiZG9uYXRpb24iLCJ1c2VybmFtZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/donated.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/donated.js"));
module.exports = __webpack_exports__;

})();