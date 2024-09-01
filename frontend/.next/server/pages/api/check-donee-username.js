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
exports.id = "pages/api/check-donee-username";
exports.ids = ["pages/api/check-donee-username"];
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

/***/ "(api)/./pages/api/check-donee-username.js":
/*!*******************************************!*\
  !*** ./pages/api/check-donee-username.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { username  } = req.query;\n    if (!username) {\n        return res.status(400).json({\n            message: 'Username is required'\n        });\n    }\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/donee_credentials.txt');\n        console.log('Attempting to read file at:', filePath);\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n            console.error('File does not exist');\n            throw new Error('File does not exist');\n        }\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        if (!data) {\n            throw new Error('File is empty');\n        }\n        const lines = data.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        console.log('Lines read from file:', lines);\n        const donees = lines.map((line)=>{\n            const [user, name, email, age, type, needs] = line.split(',');\n            if (!user) {\n                throw new Error(`Line format is incorrect: ${line}`);\n            }\n            return {\n                username: user.trim()\n            };\n        });\n        console.log('Donees read from file:', donees);\n        const userExists = donees.some((donee)=>donee.username === username\n        );\n        res.status(200).json({\n            exists: userExists\n        });\n    } catch (error) {\n        console.error('Error reading file:', error);\n        res.status(500).json({\n            message: 'Error reading file',\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2stZG9uZWUtdXNlcm5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUVSLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFOUIsRUFBRSxHQUFHRCxRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBc0I7UUFBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsUUFBUSxHQUFHVCxnREFBUyxDQUFDVyxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUFrQztRQUM1RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkIsOEJBQUVMLFFBQVE7UUFFbkQsRUFBRSxHQUFHVixvREFBYSxDQUFDVSxRQUFRLEdBQUcsQ0FBQztZQUM3QkksT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBcUI7WUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQXFCO1FBQ3ZDLENBQUM7UUFFRCxLQUFLLENBQUNDLElBQUksR0FBR25CLHNEQUFlLENBQUNVLFFBQVEsRUFBRSxDQUFNO1FBQzdDLEVBQUUsR0FBR1MsSUFBSSxFQUFFLENBQUM7WUFDVixLQUFLLENBQUMsR0FBRyxDQUFDRCxLQUFLLENBQUMsQ0FBZTtRQUNqQyxDQUFDO1FBRUQsS0FBSyxDQUFDRyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUksS0FBRUMsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxPQUFPLENBQUU7O1FBQ2hFWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1Qix3QkFBRU0sS0FBSztRQUUxQyxLQUFLLENBQUNLLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxHQUFHLEVBQUNILElBQUksR0FBSSxDQUFDO1lBQ2hDLEtBQUssRUFBRUksSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssSUFBSVQsSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBRztZQUM1RCxFQUFFLEdBQUdNLElBQUksRUFBRSxDQUFDO2dCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUNWLEtBQUssRUFBRSwwQkFBMEIsRUFBRU0sSUFBSTtZQUNuRCxDQUFDO1lBQ0QsTUFBTSxDQUFDLENBQUM7Z0JBQUNuQixRQUFRLEVBQUV1QixJQUFJLENBQUNILElBQUk7WUFBRyxDQUFDO1FBQ2xDLENBQUM7UUFFRFgsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBd0IseUJBQUVXLE1BQU07UUFFNUMsS0FBSyxDQUFDUSxVQUFVLEdBQUdSLE1BQU0sQ0FBQ1MsSUFBSSxFQUFDQyxLQUFLLEdBQUlBLEtBQUssQ0FBQy9CLFFBQVEsS0FBS0EsUUFBUTs7UUFDbkVELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQzZCLE1BQU0sRUFBRUgsVUFBVTtRQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLEtBQUssRUFBRWpCLEtBQUssRUFBRSxDQUFDO1FBQ2ZILE9BQU8sQ0FBQ0csS0FBSyxDQUFDLENBQXFCLHNCQUFFQSxLQUFLO1FBQzFDYixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFvQjtZQUFFUSxLQUFLLEVBQUVBLEtBQUssQ0FBQ1IsT0FBTztRQUFDLENBQUM7SUFDOUUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbi1tYW5hZ2VtZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL2NoZWNrLWRvbmVlLXVzZXJuYW1lLmpzPzZmZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICcuLi9iYWNrZW5kL2RvbmVlX2NyZWRlbnRpYWxzLnR4dCcpO1xyXG4gICAgY29uc29sZS5sb2coJ0F0dGVtcHRpbmcgdG8gcmVhZCBmaWxlIGF0OicsIGZpbGVQYXRoKTtcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QnKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbGUgaXMgZW1wdHknKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoJ1xcbicpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSAnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnTGluZXMgcmVhZCBmcm9tIGZpbGU6JywgbGluZXMpO1xyXG5cclxuICAgIGNvbnN0IGRvbmVlcyA9IGxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgY29uc3QgW3VzZXIsIG5hbWUsIGVtYWlsLCBhZ2UsIHR5cGUsIG5lZWRzXSA9IGxpbmUuc3BsaXQoJywnKTtcclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaW5lIGZvcm1hdCBpcyBpbmNvcnJlY3Q6ICR7bGluZX1gKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyB1c2VybmFtZTogdXNlci50cmltKCkgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdEb25lZXMgcmVhZCBmcm9tIGZpbGU6JywgZG9uZWVzKTtcclxuXHJcbiAgICBjb25zdCB1c2VyRXhpc3RzID0gZG9uZWVzLnNvbWUoZG9uZWUgPT4gZG9uZWUudXNlcm5hbWUgPT09IHVzZXJuYW1lKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZXhpc3RzOiB1c2VyRXhpc3RzIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGZpbGU6JywgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgcmVhZGluZyBmaWxlJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImNvbnNvbGUiLCJsb2ciLCJleGlzdHNTeW5jIiwiZXJyb3IiLCJFcnJvciIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJsaW5lcyIsInNwbGl0IiwiZmlsdGVyIiwibGluZSIsInRyaW0iLCJkb25lZXMiLCJtYXAiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiYWdlIiwidHlwZSIsIm5lZWRzIiwidXNlckV4aXN0cyIsInNvbWUiLCJkb25lZSIsImV4aXN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/check-donee-username.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/check-donee-username.js"));
module.exports = __webpack_exports__;

})();