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
exports.id = "pages/api/check-username";
exports.ids = ["pages/api/check-username"];
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

/***/ "(api)/./pages/api/check-username.js":
/*!*************************************!*\
  !*** ./pages/api/check-username.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { username  } = req.query;\n    if (!username) {\n        return res.status(400).json({\n            message: 'Username is required'\n        });\n    }\n    try {\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/credentials.txt');\n        console.log('Attempting to read file at:', filePath);\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n            console.error('File does not exist');\n            throw new Error('File does not exist');\n        }\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        if (!data) {\n            throw new Error('File is empty');\n        }\n        const lines = data.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        console.log('Lines read from file:', lines);\n        const users = lines.map((line)=>{\n            const [user, pass] = line.split(',');\n            if (!user || !pass) {\n                throw new Error(`Line format is incorrect: ${line}`);\n            }\n            return {\n                username: user.trim(),\n                password: pass.trim()\n            };\n        });\n        console.log('Users read from file:', users);\n        const userExists = users.some((user)=>user.username === username\n        );\n        res.status(200).json({\n            exists: userExists\n        });\n    } catch (error) {\n        console.error('Error reading file:', error);\n        res.status(500).json({\n            message: 'Error reading file',\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2stdXNlcm5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUI7QUFDSTtBQUVSLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFOUIsRUFBRSxHQUFHRCxRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBc0I7UUFBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsUUFBUSxHQUFHVCxnREFBUyxDQUFDVyxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUE0QjtRQUN0RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkIsOEJBQUVMLFFBQVE7UUFFbkQsRUFBRSxHQUFHVixvREFBYSxDQUFDVSxRQUFRLEdBQUcsQ0FBQztZQUM3QkksT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBcUI7WUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQXFCO1FBQ3ZDLENBQUM7UUFFRCxLQUFLLENBQUNDLElBQUksR0FBR25CLHNEQUFlLENBQUNVLFFBQVEsRUFBRSxDQUFNO1FBQzdDLEVBQUUsR0FBR1MsSUFBSSxFQUFFLENBQUM7WUFDVixLQUFLLENBQUMsR0FBRyxDQUFDRCxLQUFLLENBQUMsQ0FBZTtRQUNqQyxDQUFDO1FBRUQsS0FBSyxDQUFDRyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUksS0FBRUMsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxPQUFPLENBQUU7O1FBQ2hFWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1Qix3QkFBRU0sS0FBSztRQUUxQyxLQUFLLENBQUNLLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxHQUFHLEVBQUNILElBQUksR0FBSSxDQUFDO1lBQy9CLEtBQUssRUFBRUksSUFBSSxFQUFFQyxJQUFJLElBQUlMLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUc7WUFDbkMsRUFBRSxHQUFHTSxJQUFJLEtBQUtDLElBQUksRUFBRSxDQUFDO2dCQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDWCxLQUFLLEVBQUUsMEJBQTBCLEVBQUVNLElBQUk7WUFDbkQsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDO2dCQUFDbkIsUUFBUSxFQUFFdUIsSUFBSSxDQUFDSCxJQUFJO2dCQUFJSyxRQUFRLEVBQUVELElBQUksQ0FBQ0osSUFBSTtZQUFHLENBQUM7UUFDekQsQ0FBQztRQUVEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1Qix3QkFBRVcsS0FBSztRQUUxQyxLQUFLLENBQUNLLFVBQVUsR0FBR0wsS0FBSyxDQUFDTSxJQUFJLEVBQUNKLElBQUksR0FBSUEsSUFBSSxDQUFDdkIsUUFBUSxLQUFLQSxRQUFROztRQUNoRUQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDeUIsTUFBTSxFQUFFRixVQUFVO1FBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsS0FBSyxFQUFFZCxLQUFLLEVBQUUsQ0FBQztRQUNmSCxPQUFPLENBQUNHLEtBQUssQ0FBQyxDQUFxQixzQkFBRUEsS0FBSztRQUMxQ2IsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBb0I7WUFBRVEsS0FBSyxFQUFFQSxLQUFLLENBQUNSLE9BQU87UUFBQyxDQUFDO0lBQzlFLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL2FwaS9jaGVjay11c2VybmFtZS5qcz8zOTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLi4vYmFja2VuZC9jcmVkZW50aWFscy50eHQnKTtcclxuICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZSBhdDonLCBmaWxlUGF0aCk7XHJcblxyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdGaWxlIGRvZXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4Jyk7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGlzIGVtcHR5Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluZXMgPSBkYXRhLnNwbGl0KCdcXG4nKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gJycpO1xyXG4gICAgY29uc29sZS5sb2coJ0xpbmVzIHJlYWQgZnJvbSBmaWxlOicsIGxpbmVzKTtcclxuXHJcbiAgICBjb25zdCB1c2VycyA9IGxpbmVzLm1hcChsaW5lID0+IHtcclxuICAgICAgY29uc3QgW3VzZXIsIHBhc3NdID0gbGluZS5zcGxpdCgnLCcpO1xyXG4gICAgICBpZiAoIXVzZXIgfHwgIXBhc3MpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYExpbmUgZm9ybWF0IGlzIGluY29ycmVjdDogJHtsaW5lfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IHVzZXJuYW1lOiB1c2VyLnRyaW0oKSwgcGFzc3dvcmQ6IHBhc3MudHJpbSgpIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnVXNlcnMgcmVhZCBmcm9tIGZpbGU6JywgdXNlcnMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJFeGlzdHMgPSB1c2Vycy5zb21lKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBleGlzdHM6IHVzZXJFeGlzdHMgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlYWRpbmcgZmlsZTonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdFcnJvciByZWFkaW5nIGZpbGUnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VybmFtZSIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiY29uc29sZSIsImxvZyIsImV4aXN0c1N5bmMiLCJlcnJvciIsIkVycm9yIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsImxpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwidHJpbSIsInVzZXJzIiwibWFwIiwidXNlciIsInBhc3MiLCJwYXNzd29yZCIsInVzZXJFeGlzdHMiLCJzb21lIiwiZXhpc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/check-username.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/check-username.js"));
module.exports = __webpack_exports__;

})();