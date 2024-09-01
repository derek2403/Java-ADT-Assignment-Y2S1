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
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
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

/***/ "(api)/./pages/api/events.js":
/*!*****************************!*\
  !*** ./pages/api/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    // Construct the path to the events file\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/events.txt');\n    // Check if the file exists\n    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n        return res.status(404).json({\n            error: 'File not found'\n        });\n    }\n    // Read the file contents\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, 'utf8', (err, data)=>{\n        if (err) {\n            return res.status(500).json({\n                error: 'Failed to read file'\n            });\n        }\n        // Split the file contents into lines\n        const lines = data.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        // Parse the lines into an array of events\n        const events = lines.map((line)=>{\n            const [eventId, eventName, date, time] = line.split(',');\n            return {\n                eventId,\n                eventName,\n                date,\n                time\n            };\n        });\n        // Send the events data as a JSON response\n        res.status(200).json(events);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1CO0FBQ0k7QUFFUixRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN6QyxFQUF3QztJQUN4QyxLQUFLLENBQUNDLFFBQVEsR0FBR0osZ0RBQVMsQ0FBQ00sT0FBTyxDQUFDQyxHQUFHLElBQUksQ0FBdUI7SUFFakUsRUFBMkI7SUFDM0IsRUFBRSxHQUFHUixvREFBYSxDQUFDSyxRQUFRLEdBQUcsQ0FBQztRQUM3QixNQUFNLENBQUNELEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsS0FBSyxFQUFFLENBQWdCO1FBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsRUFBeUI7SUFDekJaLGtEQUFXLENBQUNLLFFBQVEsRUFBRSxDQUFNLFFBQUdTLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7UUFDNUMsRUFBRSxFQUFFRCxHQUFHLEVBQUUsQ0FBQztZQUNSLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLENBQXFCO1lBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsRUFBcUM7UUFDckMsS0FBSyxDQUFDSSxLQUFLLEdBQUdELElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUksS0FBRUMsTUFBTSxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ0MsSUFBSSxPQUFPLENBQUU7O1FBRWhFLEVBQTBDO1FBQzFDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTCxLQUFLLENBQUNNLEdBQUcsRUFBQ0gsSUFBSSxHQUFJLENBQUM7WUFDaEMsS0FBSyxFQUFFSSxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLElBQUlQLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUc7WUFDdkQsTUFBTSxDQUFDLENBQUM7Z0JBQUNNLE9BQU87Z0JBQUVDLFNBQVM7Z0JBQUVDLElBQUk7Z0JBQUVDLElBQUk7WUFBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUEwQztRQUMxQ3RCLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDVSxNQUFNO0lBQzdCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9uYXRpb24tbWFuYWdlbWVudC1mcm9udGVuZC8uL3BhZ2VzL2FwaS9ldmVudHMuanM/MjcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBDb25zdHJ1Y3QgdGhlIHBhdGggdG8gdGhlIGV2ZW50cyBmaWxlXHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4uL2JhY2tlbmQvZXZlbnRzLnR4dCcpO1xyXG4gIFxyXG4gIC8vIENoZWNrIGlmIHRoZSBmaWxlIGV4aXN0c1xyXG4gIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnRmlsZSBub3QgZm91bmQnIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVhZCB0aGUgZmlsZSBjb250ZW50c1xyXG4gIGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmOCcsIChlcnIsIGRhdGEpID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcmVhZCBmaWxlJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTcGxpdCB0aGUgZmlsZSBjb250ZW50cyBpbnRvIGxpbmVzXHJcbiAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoJ1xcbicpLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpICE9PSAnJyk7XHJcblxyXG4gICAgLy8gUGFyc2UgdGhlIGxpbmVzIGludG8gYW4gYXJyYXkgb2YgZXZlbnRzXHJcbiAgICBjb25zdCBldmVudHMgPSBsaW5lcy5tYXAobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IFtldmVudElkLCBldmVudE5hbWUsIGRhdGUsIHRpbWVdID0gbGluZS5zcGxpdCgnLCcpO1xyXG4gICAgICByZXR1cm4geyBldmVudElkLCBldmVudE5hbWUsIGRhdGUsIHRpbWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNlbmQgdGhlIGV2ZW50cyBkYXRhIGFzIGEgSlNPTiByZXNwb25zZVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZXZlbnRzKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleGlzdHNTeW5jIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIiwibGluZXMiLCJzcGxpdCIsImZpbHRlciIsImxpbmUiLCJ0cmltIiwiZXZlbnRzIiwibWFwIiwiZXZlbnRJZCIsImV2ZW50TmFtZSIsImRhdGUiLCJ0aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/events.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events.js"));
module.exports = __webpack_exports__;

})();