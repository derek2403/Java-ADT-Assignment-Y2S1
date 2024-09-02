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
exports.id = "pages/api/donee_details";
exports.ids = ["pages/api/donee_details"];
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

/***/ "(api)/./pages/api/donee_details.js":
/*!************************************!*\
  !*** ./pages/api/donee_details.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/donee_details.js\n\n\nasync function handler(req, res) {\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/donee_details.txt');\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const lines = data.split('\\n').filter((line)=>line.trim()\n        );\n        const doneeDetails = lines.map((line)=>{\n            const [username, name, email, age, type, category] = line.split(',').map((part)=>part.trim()\n            );\n            return {\n                username,\n                name,\n                email,\n                age,\n                type,\n                category\n            };\n        });\n        res.status(200).json(doneeDetails);\n    } catch (error) {\n        res.status(500).json({\n            message: 'Error reading donee details file'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG9uZWVfZGV0YWlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQTZCO0FBQ1Y7QUFDSTtBQUVSLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsUUFBUSxHQUFHSixnREFBUyxDQUFDTSxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUE4QjtRQUN4RSxLQUFLLENBQUNDLElBQUksR0FBR1Qsc0RBQWUsQ0FBQ0ssUUFBUSxFQUFFLENBQU07UUFDN0MsS0FBSyxDQUFDTSxLQUFLLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUksS0FBRUMsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSTs7UUFDdkQsS0FBSyxDQUFDQyxZQUFZLEdBQUdMLEtBQUssQ0FBQ00sR0FBRyxFQUFDSCxJQUFJLEdBQUksQ0FBQztZQUN0QyxLQUFLLEVBQUVJLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLElBQUlULElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUcsSUFBRUssR0FBRyxFQUFDTyxJQUFJLEdBQUlBLElBQUksQ0FBQ1QsSUFBSTs7WUFDMUYsTUFBTSxDQUFDLENBQUM7Z0JBQUNHLFFBQVE7Z0JBQUVDLElBQUk7Z0JBQUVDLEtBQUs7Z0JBQUVDLEdBQUc7Z0JBQUVDLElBQUk7Z0JBQUVDLFFBQVE7WUFBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRG5CLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1YsWUFBWTtJQUNuQyxDQUFDLENBQUMsS0FBSyxFQUFFVyxLQUFLLEVBQUUsQ0FBQztRQUNmdkIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0UsT0FBTyxFQUFFLENBQWtDO1FBQUMsQ0FBQztJQUN0RSxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvbmF0aW9uLW1hbmFnZW1lbnQtZnJvbnRlbmQvLi9wYWdlcy9hcGkvZG9uZWVfZGV0YWlscy5qcz80ZGY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9kb25lZV9kZXRhaWxzLmpzXHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi4vYmFja2VuZC9kb25lZV9kZXRhaWxzLnR4dCcpO1xyXG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIGNvbnN0IGxpbmVzID0gZGF0YS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkpO1xyXG4gICAgY29uc3QgZG9uZWVEZXRhaWxzID0gbGluZXMubWFwKGxpbmUgPT4ge1xyXG4gICAgICBjb25zdCBbdXNlcm5hbWUsIG5hbWUsIGVtYWlsLCBhZ2UsIHR5cGUsIGNhdGVnb3J5XSA9IGxpbmUuc3BsaXQoJywnKS5tYXAocGFydCA9PiBwYXJ0LnRyaW0oKSk7XHJcbiAgICAgIHJldHVybiB7IHVzZXJuYW1lLCBuYW1lLCBlbWFpbCwgYWdlLCB0eXBlLCBjYXRlZ29yeSB9O1xyXG4gICAgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkb25lZURldGFpbHMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGRvbmVlIGRldGFpbHMgZmlsZScgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJsaW5lcyIsInNwbGl0IiwiZmlsdGVyIiwibGluZSIsInRyaW0iLCJkb25lZURldGFpbHMiLCJtYXAiLCJ1c2VybmFtZSIsIm5hbWUiLCJlbWFpbCIsImFnZSIsInR5cGUiLCJjYXRlZ29yeSIsInBhcnQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/donee_details.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/donee_details.js"));
module.exports = __webpack_exports__;

})();