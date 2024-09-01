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
exports.id = "pages/api/credentials";
exports.ids = ["pages/api/credentials"];
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

/***/ "(api)/./pages/api/credentials.js":
/*!**********************************!*\
  !*** ./pages/api/credentials.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// pages/api/credentials.js\n\n\nasync function handler(req, res) {\n    try {\n        // Use the relative path to the text file\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/credentials.txt');\n        console.log(`Attempting to read file at: ${filePath}`); // Log the path for debugging\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n            throw new Error('File does not exist');\n        }\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const lines = data.split('\\n').filter((line)=>line.trim()\n        );\n        const credentials = lines.map((line)=>{\n            const [username, password] = line.split(',').map((part)=>part.trim()\n            );\n            return {\n                username,\n                password\n            };\n        });\n        res.status(200).json(credentials);\n    } catch (error) {\n        console.error('Error reading credentials file:', error); // Log the error\n        res.status(500).json({\n            message: 'Error reading credentials file',\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlZGVudGlhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUEyQjtBQUNSO0FBQ0k7QUFFUixlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsR0FBRyxDQUFDLENBQUM7UUFDSCxFQUF5QztRQUN6QyxLQUFLLENBQUNDLFFBQVEsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBNEI7UUFDdEVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLDRCQUE0QixFQUFFTCxRQUFRLElBQUssQ0FBNkI7UUFFckYsRUFBRSxHQUFHTCxvREFBYSxDQUFDSyxRQUFRLEdBQUcsQ0FBQztZQUM3QixLQUFLLENBQUMsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBcUI7UUFDdkMsQ0FBQztRQUVELEtBQUssQ0FBQ0MsSUFBSSxHQUFHYixzREFBZSxDQUFDSyxRQUFRLEVBQUUsQ0FBTTtRQUM3QyxLQUFLLENBQUNVLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBSSxLQUFFQyxNQUFNLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDQyxJQUFJOztRQUN2RCxLQUFLLENBQUNDLFdBQVcsR0FBR0wsS0FBSyxDQUFDTSxHQUFHLEVBQUNILElBQUksR0FBSSxDQUFDO1lBQ3JDLEtBQUssRUFBRUksUUFBUSxFQUFFQyxRQUFRLElBQUlMLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUcsSUFBRUssR0FBRyxFQUFDRyxJQUFJLEdBQUlBLElBQUksQ0FBQ0wsSUFBSTs7WUFDbEUsTUFBTSxDQUFDLENBQUM7Z0JBQUNHLFFBQVE7Z0JBQUVDLFFBQVE7WUFBQyxDQUFDO1FBQy9CLENBQUM7UUFFRG5CLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ04sV0FBVztJQUNsQyxDQUFDLENBQUMsS0FBSyxFQUFFTyxLQUFLLEVBQUUsQ0FBQztRQUNmbEIsT0FBTyxDQUFDa0IsS0FBSyxDQUFDLENBQWlDLGtDQUFFQSxLQUFLLEVBQUcsQ0FBZ0I7UUFDekV2QixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDRSxPQUFPLEVBQUUsQ0FBZ0M7WUFBRUQsS0FBSyxFQUFFQSxLQUFLLENBQUNDLE9BQU87UUFBQyxDQUFDO0lBQzFGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL2FwaS9jcmVkZW50aWFscy5qcz9jMmYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9jcmVkZW50aWFscy5qc1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgLy8gVXNlIHRoZSByZWxhdGl2ZSBwYXRoIHRvIHRoZSB0ZXh0IGZpbGVcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuLi9iYWNrZW5kL2NyZWRlbnRpYWxzLnR4dCcpO1xyXG4gICAgY29uc29sZS5sb2coYEF0dGVtcHRpbmcgdG8gcmVhZCBmaWxlIGF0OiAke2ZpbGVQYXRofWApOyAvLyBMb2cgdGhlIHBhdGggZm9yIGRlYnVnZ2luZ1xyXG5cclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIGNvbnN0IGxpbmVzID0gZGF0YS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkpO1xyXG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBsaW5lcy5tYXAobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IFt1c2VybmFtZSwgcGFzc3dvcmRdID0gbGluZS5zcGxpdCgnLCcpLm1hcChwYXJ0ID0+IHBhcnQudHJpbSgpKTtcclxuICAgICAgcmV0dXJuIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY3JlZGVudGlhbHMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGNyZWRlbnRpYWxzIGZpbGU6JywgZXJyb3IpOyAvLyBMb2cgdGhlIGVycm9yXHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGNyZWRlbnRpYWxzIGZpbGUnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY29uc29sZSIsImxvZyIsImV4aXN0c1N5bmMiLCJFcnJvciIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJsaW5lcyIsInNwbGl0IiwiZmlsdGVyIiwibGluZSIsInRyaW0iLCJjcmVkZW50aWFscyIsIm1hcCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwYXJ0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/credentials.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/credentials.js"));
module.exports = __webpack_exports__;

})();