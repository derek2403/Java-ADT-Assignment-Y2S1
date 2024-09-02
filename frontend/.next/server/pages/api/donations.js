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
exports.id = "pages/api/donations";
exports.ids = ["pages/api/donations"];
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

/***/ "(api)/./pages/api/donations.js":
/*!********************************!*\
  !*** ./pages/api/donations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/donations.js\n\n\nasync function handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/donations.txt');\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const lines = data.split('\\n').filter((line)=>line.trim()\n        );\n        const donations = lines.map((line)=>{\n            const [donationId, username, category, items] = line.split(',').map((part)=>part.trim()\n            );\n            return {\n                donationId,\n                username,\n                category,\n                items\n            };\n        });\n        res.status(200).json(donations);\n    } catch (error) {\n        res.status(500).json({\n            message: 'Error reading donation file'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9uYXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsRUFBeUI7QUFDTjtBQUNJO0FBRVIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUdKLGdEQUFTLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQTBCO1FBQ3BFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHVCxzREFBZSxDQUFDSyxRQUFRLEVBQUUsQ0FBTTtRQUM3QyxLQUFLLENBQUNNLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBSSxLQUFFQyxNQUFNLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDQyxJQUFJOztRQUN2RCxLQUFLLENBQUNDLFNBQVMsR0FBR0wsS0FBSyxDQUFDTSxHQUFHLEVBQUNILElBQUksR0FBSSxDQUFDO1lBQ25DLEtBQUssRUFBRUksVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxJQUFJUCxJQUFJLENBQUNGLEtBQUssQ0FBQyxDQUFHLElBQUVLLEdBQUcsRUFBQ0ssSUFBSSxHQUFJQSxJQUFJLENBQUNQLElBQUk7O1lBQ3JGLE1BQU0sQ0FBQyxDQUFDO2dCQUFDRyxVQUFVO2dCQUFFQyxRQUFRO2dCQUFFQyxRQUFRO2dCQUFFQyxLQUFLO1lBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0RqQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNSLFNBQVM7SUFDaEMsQ0FBQyxDQUFDLEtBQUssRUFBRVMsS0FBSyxFQUFFLENBQUM7UUFDZnJCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNFLE9BQU8sRUFBRSxDQUE2QjtRQUFDLENBQUM7SUFDakUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbi1tYW5hZ2VtZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL2RvbmF0aW9ucy5qcz9hNTc4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9kb25hdGlvbnMuanNcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuLi9iYWNrZW5kL2RvbmF0aW9ucy50eHQnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4Jyk7XHJcbiAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoJ1xcbicpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpKTtcclxuICAgIGNvbnN0IGRvbmF0aW9ucyA9IGxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgY29uc3QgW2RvbmF0aW9uSWQsIHVzZXJuYW1lLCBjYXRlZ29yeSwgaXRlbXNdID0gbGluZS5zcGxpdCgnLCcpLm1hcChwYXJ0ID0+IHBhcnQudHJpbSgpKTtcclxuICAgICAgcmV0dXJuIHsgZG9uYXRpb25JZCwgdXNlcm5hbWUsIGNhdGVnb3J5LCBpdGVtcyB9O1xyXG4gICAgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkb25hdGlvbnMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGRvbmF0aW9uIGZpbGUnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJkYXRhIiwicmVhZEZpbGVTeW5jIiwibGluZXMiLCJzcGxpdCIsImZpbHRlciIsImxpbmUiLCJ0cmltIiwiZG9uYXRpb25zIiwibWFwIiwiZG9uYXRpb25JZCIsInVzZXJuYW1lIiwiY2F0ZWdvcnkiLCJpdGVtcyIsInBhcnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/donations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/donations.js"));
module.exports = __webpack_exports__;

})();