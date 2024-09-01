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
exports.id = "pages/api/registered-events";
exports.ids = ["pages/api/registered-events"];
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

/***/ "(api)/./pages/api/registered-events.js":
/*!****************************************!*\
  !*** ./pages/api/registered-events.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { username  } = req.query;\n    if (!username) {\n        return res.status(400).json({\n            error: 'Username is required'\n        });\n    }\n    try {\n        const registrationsFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/eventregistrations.txt');\n        const eventsFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), '../backend/events.txt');\n        const registrationsData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(registrationsFilePath, 'utf8');\n        const eventsData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(eventsFilePath, 'utf8');\n        const registrations = registrationsData.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        const events = eventsData.split('\\n').filter((line)=>line.trim() !== ''\n        );\n        console.log('Registrations:', registrations);\n        console.log('Events:', events);\n        // Extract registered event IDs for the given username\n        const registeredEventIds = registrations.filter((line)=>{\n            const [, , registeredUsername] = line.split(',').map((item)=>item.trim()\n            );\n            return registeredUsername === username;\n        }).map((line)=>line.split(',')[1].trim()\n        );\n        console.log('Registered Event IDs for', username, ':', registeredEventIds);\n        // Extract event details\n        const eventDetails = events.filter((line)=>{\n            const [eventId] = line.split(',');\n            return registeredEventIds.includes(eventId.trim());\n        }).map((line)=>{\n            const [, eventName, venue, time, date] = line.split(',').map((item)=>item.trim()\n            );\n            return {\n                eventName,\n                venue,\n                time,\n                date\n            };\n        });\n        console.log('Event Details:', eventDetails);\n        res.status(200).json(eventDetails);\n    } catch (error) {\n        console.error('Error:', error);\n        res.status(500).json({\n            error: 'Failed to retrieve registered events'\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXJlZC1ldmVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDTDtBQUVSLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFOUIsRUFBRSxHQUFHRCxRQUFRLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBc0I7UUFBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MscUJBQXFCLEdBQUdULGdEQUFTLENBQUNXLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLENBQW1DO1FBQzFGLEtBQUssQ0FBQ0MsY0FBYyxHQUFHYixnREFBUyxDQUFDVyxPQUFPLENBQUNDLEdBQUcsSUFBSSxDQUF1QjtRQUV2RSxLQUFLLENBQUNFLGlCQUFpQixHQUFHLEtBQUssQ0FBQ2YsMkRBQVcsQ0FBQ1UscUJBQXFCLEVBQUUsQ0FBTTtRQUN6RSxLQUFLLENBQUNPLFVBQVUsR0FBRyxLQUFLLENBQUNqQiwyREFBVyxDQUFDYyxjQUFjLEVBQUUsQ0FBTTtRQUUzRCxLQUFLLENBQUNJLGFBQWEsR0FBR0gsaUJBQWlCLENBQUNJLEtBQUssQ0FBQyxDQUFJLEtBQUVDLE1BQU0sRUFBQ0MsSUFBSSxHQUFJQSxJQUFJLENBQUNDLElBQUksT0FBTyxDQUFFOztRQUNyRixLQUFLLENBQUNDLE1BQU0sR0FBR04sVUFBVSxDQUFDRSxLQUFLLENBQUMsQ0FBSSxLQUFFQyxNQUFNLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDQyxJQUFJLE9BQU8sQ0FBRTs7UUFFdkVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWdCLGlCQUFFUCxhQUFhO1FBQzNDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUVGLE1BQU07UUFFN0IsRUFBc0Q7UUFDdEQsS0FBSyxDQUFDRyxrQkFBa0IsR0FBR1IsYUFBYSxDQUNyQ0UsTUFBTSxFQUFDQyxJQUFJLEdBQUksQ0FBQztZQUNmLEtBQUssTUFBTU0sa0JBQWtCLElBQUlOLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUcsSUFBRVMsR0FBRyxFQUFDQyxJQUFJLEdBQUlBLElBQUksQ0FBQ1AsSUFBSTs7WUFDdEUsTUFBTSxDQUFDSyxrQkFBa0IsS0FBS3RCLFFBQVE7UUFDeEMsQ0FBQyxFQUNBdUIsR0FBRyxFQUFDUCxJQUFJLEdBQUlBLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUcsSUFBRSxDQUFDLEVBQUVHLElBQUk7O1FBRXRDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEwQiwyQkFBRXBCLFFBQVEsRUFBRSxDQUFHLElBQUVxQixrQkFBa0I7UUFFekUsRUFBd0I7UUFDeEIsS0FBSyxDQUFDSSxZQUFZLEdBQUdQLE1BQU0sQ0FDeEJILE1BQU0sRUFBQ0MsSUFBSSxHQUFJLENBQUM7WUFDZixLQUFLLEVBQUVVLE9BQU8sSUFBSVYsSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBRztZQUNoQyxNQUFNLENBQUNPLGtCQUFrQixDQUFDTSxRQUFRLENBQUNELE9BQU8sQ0FBQ1QsSUFBSTtRQUNqRCxDQUFDLEVBQ0FNLEdBQUcsRUFBQ1AsSUFBSSxHQUFJLENBQUM7WUFDWixLQUFLLElBQUlZLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLElBQUksSUFBSWYsSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBRyxJQUFFUyxHQUFHLEVBQUNDLElBQUksR0FBSUEsSUFBSSxDQUFDUCxJQUFJOztZQUM5RSxNQUFNLENBQUMsQ0FBQztnQkFBQ1csU0FBUztnQkFBRUMsS0FBSztnQkFBRUMsSUFBSTtnQkFBRUMsSUFBSTtZQUFDLENBQUM7UUFDekMsQ0FBQztRQUVIWixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQixpQkFBRUssWUFBWTtRQUUxQzFCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDc0IsWUFBWTtJQUNuQyxDQUFDLENBQUMsS0FBSyxFQUFFckIsS0FBSyxFQUFFLENBQUM7UUFDZmUsT0FBTyxDQUFDZixLQUFLLENBQUMsQ0FBUSxTQUFFQSxLQUFLO1FBQzdCTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUFzQztRQUFDLENBQUM7SUFDeEUsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbi1tYW5hZ2VtZW50LWZyb250ZW5kLy4vcGFnZXMvYXBpL3JlZ2lzdGVyZWQtZXZlbnRzLmpzP2RmNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyB1c2VybmFtZSB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBpZiAoIXVzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25zRmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4uL2JhY2tlbmQvZXZlbnRyZWdpc3RyYXRpb25zLnR4dCcpO1xyXG4gICAgY29uc3QgZXZlbnRzRmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy4uL2JhY2tlbmQvZXZlbnRzLnR4dCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25zRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKHJlZ2lzdHJhdGlvbnNGaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIGNvbnN0IGV2ZW50c0RhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShldmVudHNGaWxlUGF0aCwgJ3V0ZjgnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVnaXN0cmF0aW9ucyA9IHJlZ2lzdHJhdGlvbnNEYXRhLnNwbGl0KCdcXG4nKS5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKSAhPT0gJycpO1xyXG4gICAgY29uc3QgZXZlbnRzID0gZXZlbnRzRGF0YS5zcGxpdCgnXFxuJykuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkgIT09ICcnKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ1JlZ2lzdHJhdGlvbnM6JywgcmVnaXN0cmF0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnRXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICBcclxuICAgIC8vIEV4dHJhY3QgcmVnaXN0ZXJlZCBldmVudCBJRHMgZm9yIHRoZSBnaXZlbiB1c2VybmFtZVxyXG4gICAgY29uc3QgcmVnaXN0ZXJlZEV2ZW50SWRzID0gcmVnaXN0cmF0aW9uc1xyXG4gICAgICAuZmlsdGVyKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IFssICwgcmVnaXN0ZXJlZFVzZXJuYW1lXSA9IGxpbmUuc3BsaXQoJywnKS5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRVc2VybmFtZSA9PT0gdXNlcm5hbWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnNwbGl0KCcsJylbMV0udHJpbSgpKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgRXZlbnQgSURzIGZvcicsIHVzZXJuYW1lLCAnOicsIHJlZ2lzdGVyZWRFdmVudElkcyk7XHJcbiAgICBcclxuICAgIC8vIEV4dHJhY3QgZXZlbnQgZGV0YWlsc1xyXG4gICAgY29uc3QgZXZlbnREZXRhaWxzID0gZXZlbnRzXHJcbiAgICAgIC5maWx0ZXIobGluZSA9PiB7XHJcbiAgICAgICAgY29uc3QgW2V2ZW50SWRdID0gbGluZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3RlcmVkRXZlbnRJZHMuaW5jbHVkZXMoZXZlbnRJZC50cmltKCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAubWFwKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IFssIGV2ZW50TmFtZSwgdmVudWUsIHRpbWUsIGRhdGVdID0gbGluZS5zcGxpdCgnLCcpLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKTtcclxuICAgICAgICByZXR1cm4geyBldmVudE5hbWUsIHZlbnVlLCB0aW1lLCBkYXRlIH07XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnRXZlbnQgRGV0YWlsczonLCBldmVudERldGFpbHMpO1xyXG4gICAgXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudERldGFpbHMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHJldHJpZXZlIHJlZ2lzdGVyZWQgZXZlbnRzJyB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJyZWdpc3RyYXRpb25zRmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV2ZW50c0ZpbGVQYXRoIiwicmVnaXN0cmF0aW9uc0RhdGEiLCJyZWFkRmlsZSIsImV2ZW50c0RhdGEiLCJyZWdpc3RyYXRpb25zIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwidHJpbSIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlcmVkRXZlbnRJZHMiLCJyZWdpc3RlcmVkVXNlcm5hbWUiLCJtYXAiLCJpdGVtIiwiZXZlbnREZXRhaWxzIiwiZXZlbnRJZCIsImluY2x1ZGVzIiwiZXZlbnROYW1lIiwidmVudWUiLCJ0aW1lIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/registered-events.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/registered-events.js"));
module.exports = __webpack_exports__;

})();