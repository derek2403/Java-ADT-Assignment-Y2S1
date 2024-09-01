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
exports.id = "pages/api/donation-requests";
exports.ids = ["pages/api/donation-requests"];
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

/***/ "(api)/./pages/api/donation-requests.js":
/*!****************************************!*\
  !*** ./pages/api/donation-requests.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/donation-requests.js\n\n\nasync function handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/donation_requests.txt');\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const lines = data.split('\\n').filter((line)=>line.trim()\n        );\n        const donationRequests = lines.map((line)=>{\n            const [requestId, username, category, items] = line.split(',');\n            return {\n                requestId,\n                username,\n                category,\n                items\n            };\n        });\n        res.status(200).json(donationRequests);\n    } catch (error) {\n        console.error('Error reading donation request file:', error);\n        res.status(500).json({\n            message: 'Error reading donation request file'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9uYXRpb24tcmVxdWVzdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUFpQztBQUNkO0FBQ0k7QUFFUixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBa0M7UUFDNUUsS0FBSyxDQUFDQyxJQUFJLEdBQUdULHNEQUFlLENBQUNLLFFBQVEsRUFBRSxDQUFNO1FBQzdDLEtBQUssQ0FBQ00sS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFJLEtBQUVDLE1BQU0sRUFBQ0MsSUFBSSxHQUFJQSxJQUFJLENBQUNDLElBQUk7O1FBRXZELEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdMLEtBQUssQ0FBQ00sR0FBRyxFQUFDSCxJQUFJLEdBQUksQ0FBQztZQUMxQyxLQUFLLEVBQUVJLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssSUFBSVAsSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBRztZQUM3RCxNQUFNLENBQUMsQ0FBQztnQkFBQ00sU0FBUztnQkFBRUMsUUFBUTtnQkFBRUMsUUFBUTtnQkFBRUMsS0FBSztZQUFDLENBQUM7UUFDakQsQ0FBQztRQUVEakIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDUCxnQkFBZ0I7SUFDdkMsQ0FBQyxDQUFDLEtBQUssRUFBRVEsS0FBSyxFQUFFLENBQUM7UUFDZkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsQ0FBc0MsdUNBQUVBLEtBQUs7UUFDM0RwQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDRyxPQUFPLEVBQUUsQ0FBcUM7UUFBQyxDQUFDO0lBQ3pFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL2FwaS9kb25hdGlvbi1yZXF1ZXN0cy5qcz9jODA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9kb25hdGlvbi1yZXF1ZXN0cy5qc1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4uL2JhY2tlbmQvZG9uYXRpb25fcmVxdWVzdHMudHh0Jyk7XHJcbiAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xyXG4gICAgY29uc3QgbGluZXMgPSBkYXRhLnNwbGl0KCdcXG4nKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRvbmF0aW9uUmVxdWVzdHMgPSBsaW5lcy5tYXAobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IFtyZXF1ZXN0SWQsIHVzZXJuYW1lLCBjYXRlZ29yeSwgaXRlbXNdID0gbGluZS5zcGxpdCgnLCcpO1xyXG4gICAgICByZXR1cm4geyByZXF1ZXN0SWQsIHVzZXJuYW1lLCBjYXRlZ29yeSwgaXRlbXMgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRvbmF0aW9uUmVxdWVzdHMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGRvbmF0aW9uIHJlcXVlc3QgZmlsZTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGRvbmF0aW9uIHJlcXVlc3QgZmlsZScgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsImxpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwidHJpbSIsImRvbmF0aW9uUmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0SWQiLCJ1c2VybmFtZSIsImNhdGVnb3J5IiwiaXRlbXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/donation-requests.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/donation-requests.js"));
module.exports = __webpack_exports__;

})();