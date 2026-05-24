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
exports.id = "app/api/auth/me/route";
exports.ids = ["app/api/auth/me/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=E%3A%5Cyantrar%5Cdrone_site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cyantrar%5Cdrone_site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=E%3A%5Cyantrar%5Cdrone_site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cyantrar%5Cdrone_site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_yantrar_drone_site_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/me/route.js */ \"(rsc)/./app/api/auth/me/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/me/route\",\n        pathname: \"/api/auth/me\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/me/route\"\n    },\n    resolvedPagePath: \"E:\\\\yantrar\\\\drone_site\\\\app\\\\api\\\\auth\\\\me\\\\route.js\",\n    nextConfigOutput,\n    userland: E_yantrar_drone_site_app_api_auth_me_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/me/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbWUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZtZSUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDeWFudHJhciU1Q2Ryb25lX3NpdGUlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUN5YW50cmFyJTVDZHJvbmVfc2l0ZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDSztBQUNsRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbnRyYXIvPzQ4MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRTpcXFxceWFudHJhclxcXFxkcm9uZV9zaXRlXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxtZVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9tZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbWVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbWUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFx5YW50cmFyXFxcXGRyb25lX3NpdGVcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXG1lXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL21lL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=E%3A%5Cyantrar%5Cdrone_site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cyantrar%5Cdrone_site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/me/route.js":
/*!**********************************!*\
  !*** ./app/api/auth/me/route.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./models/User.js\");\n\nconst dynamic = \"force-dynamic\";\n\n\n\nasync function GET() {\n    try {\n        const payload = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getAuthUser)();\n        if (!payload) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            }, {\n                status: 200\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(payload.id).select(\"-password\");\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                user: null\n            }, {\n                status: 200\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: {\n                id: user._id,\n                name: user.name,\n                email: user.email,\n                role: user.role\n            }\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Me error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user: null\n        }, {\n            status: 200\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbWUvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ3BDLE1BQU1DLFVBQVUsZ0JBQWdCO0FBQ0U7QUFDSDtBQUNMO0FBRTFCLGVBQWVJO0lBQ3JCLElBQUk7UUFDSCxNQUFNQyxVQUFVLE1BQU1KLHNEQUFXQTtRQUNqQyxJQUFJLENBQUNJLFNBQVM7WUFDYixPQUFPTixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUssR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hEO1FBRUEsTUFBTU4sd0RBQVNBO1FBQ2YsTUFBTUssT0FBTyxNQUFNSixvREFBSUEsQ0FBQ00sUUFBUSxDQUFDSixRQUFRSyxFQUFFLEVBQUVDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLENBQUNKLE1BQU07WUFDVixPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFQyxNQUFNO1lBQUssR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hEO1FBRUEsT0FBT1QscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFQyxNQUFNO2dCQUFFRyxJQUFJSCxLQUFLSyxHQUFHO2dCQUFFQyxNQUFNTixLQUFLTSxJQUFJO2dCQUFFQyxPQUFPUCxLQUFLTyxLQUFLO2dCQUFFQyxNQUFNUixLQUFLUSxJQUFJO1lBQUM7UUFBRSxHQUFHO1lBQUVQLFFBQVE7UUFBSTtJQUN6SCxFQUFFLE9BQU9RLE9BQU87UUFDZkMsUUFBUUQsS0FBSyxDQUFDLGFBQWFBO1FBQzNCLE9BQU9qQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBSyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN4RDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFudHJhci8uL2FwcC9hcGkvYXV0aC9tZS9yb3V0ZS5qcz83ZTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5leHBvcnQgY29uc3QgZHluYW1pYyA9IFwiZm9yY2UtZHluYW1pY1wiO1xyXG5pbXBvcnQgeyBnZXRBdXRoVXNlciB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRBdXRoVXNlcigpO1xyXG5cdFx0aWYgKCFwYXlsb2FkKSB7XHJcblx0XHRcdHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVzZXI6IG51bGwgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRhd2FpdCBjb25uZWN0REIoKTtcclxuXHRcdGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHBheWxvYWQuaWQpLnNlbGVjdChcIi1wYXNzd29yZFwiKTtcclxuXHRcdGlmICghdXNlcikge1xyXG5cdFx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1c2VyOiBudWxsIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogeyBpZDogdXNlci5faWQsIG5hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWwsIHJvbGU6IHVzZXIucm9sZSB9IH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXCJNZSBlcnJvcjpcIiwgZXJyb3IpO1xyXG5cdFx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdXNlcjogbnVsbCB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZHluYW1pYyIsImdldEF1dGhVc2VyIiwiY29ubmVjdERCIiwiVXNlciIsIkdFVCIsInBheWxvYWQiLCJqc29uIiwidXNlciIsInN0YXR1cyIsImZpbmRCeUlkIiwiaWQiLCJzZWxlY3QiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJyb2xlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/me/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAuthCookie: () => (/* binding */ clearAuthCookie),\n/* harmony export */   getAuthUser: () => (/* binding */ getAuthUser),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nconst COOKIE_NAME = \"auth_token\";\nfunction signToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign(payload, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, JWT_SECRET);\n    } catch  {\n        return null;\n    }\n}\nasync function getAuthUser() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const token = cookieStore.get(COOKIE_NAME)?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\nfunction setAuthCookie(res, token) {\n    res.cookies.set(COOKIE_NAME, token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        maxAge: 60 * 60 * 24 * 7,\n        path: \"/\"\n    });\n}\nfunction clearAuthCookie(res) {\n    res.cookies.set(COOKIE_NAME, \"\", {\n        httpOnly: true,\n        maxAge: 0,\n        path: \"/\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ1E7QUFFdkMsTUFBTUUsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVO0FBQ3pDLE1BQU1HLGNBQWM7QUFFYixTQUFTQyxVQUFVQyxPQUFPO0lBQ2hDLE9BQU9QLDhDQUFRLENBQUNPLFNBQVNMLFlBQVk7UUFBRU8sV0FBVztJQUFLO0FBQ3hEO0FBRU8sU0FBU0MsWUFBWUMsS0FBSztJQUNoQyxJQUFJO1FBQ0gsT0FBT1gsZ0RBQVUsQ0FBQ1csT0FBT1Q7SUFDMUIsRUFBRSxPQUFNO1FBQ1AsT0FBTztJQUNSO0FBQ0Q7QUFFTyxlQUFlVztJQUNyQixNQUFNQyxjQUFjLE1BQU1iLHFEQUFPQTtJQUNqQyxNQUFNVSxRQUFRRyxZQUFZQyxHQUFHLENBQUNWLGNBQWNXO0lBQzVDLElBQUksQ0FBQ0wsT0FBTyxPQUFPO0lBQ25CLE9BQU9ELFlBQVlDO0FBQ3BCO0FBRU8sU0FBU00sY0FBY0MsR0FBRyxFQUFFUCxLQUFLO0lBQ3ZDTyxJQUFJakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDZCxhQUFhTSxPQUFPO1FBQ25DUyxVQUFVO1FBQ1ZDLFFBQVFsQixrQkFBeUI7UUFDakNtQixVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDdkJDLE1BQU07SUFDUDtBQUNEO0FBRU8sU0FBU0MsZ0JBQWdCUCxHQUFHO0lBQ2xDQSxJQUFJakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDZCxhQUFhLElBQUk7UUFDaENlLFVBQVU7UUFDVkcsUUFBUTtRQUNSQyxNQUFNO0lBQ1A7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbnRyYXIvLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5cclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJhdXRoX3Rva2VuXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblRva2VuKHBheWxvYWQpIHtcclxuXHRyZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46IFwiN2RcIiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKTtcclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhVc2VyKCkge1xyXG5cdGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xyXG5cdGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KENPT0tJRV9OQU1FKT8udmFsdWU7XHJcblx0aWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XHJcblx0cmV0dXJuIHZlcmlmeVRva2VuKHRva2VuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEF1dGhDb29raWUocmVzLCB0b2tlbikge1xyXG5cdHJlcy5jb29raWVzLnNldChDT09LSUVfTkFNRSwgdG9rZW4sIHtcclxuXHRcdGh0dHBPbmx5OiB0cnVlLFxyXG5cdFx0c2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRzYW1lU2l0ZTogXCJsYXhcIixcclxuXHRcdG1heEFnZTogNjAgKiA2MCAqIDI0ICogNyxcclxuXHRcdHBhdGg6IFwiL1wiLFxyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBdXRoQ29va2llKHJlcykge1xyXG5cdHJlcy5jb29raWVzLnNldChDT09LSUVfTkFNRSwgXCJcIiwge1xyXG5cdFx0aHR0cE9ubHk6IHRydWUsXHJcblx0XHRtYXhBZ2U6IDAsXHJcblx0XHRwYXRoOiBcIi9cIixcclxuXHR9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiand0IiwiY29va2llcyIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiQ09PS0lFX05BTUUiLCJzaWduVG9rZW4iLCJwYXlsb2FkIiwic2lnbiIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJ2ZXJpZnkiLCJnZXRBdXRoVXNlciIsImNvb2tpZVN0b3JlIiwiZ2V0IiwidmFsdWUiLCJzZXRBdXRoQ29va2llIiwicmVzIiwic2V0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJjbGVhckF1dGhDb29raWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    const MONGODB_URI = process.env.MONGODB_URI;\n    if (!MONGODB_URI) {\n        throw new Error(\"Please define MONGODB_URI in .env.local\");\n    }\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(MONGODB_URI, {\n            bufferCommands: false\n        }).then((m)=>m).catch((err)=>{\n            cached.promise = null;\n            throw err;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVoQyxJQUFJQyxTQUFTQyxPQUFPRixRQUFRO0FBRTVCLElBQUksQ0FBQ0MsUUFBUTtJQUNaQSxTQUFTQyxPQUFPRixRQUFRLEdBQUc7UUFDMUJHLE1BQU07UUFDTkMsU0FBUztJQUNWO0FBQ0Q7QUFFQSxlQUFlQztJQUNkLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztJQUUzQyxJQUFJLENBQUNBLGFBQWE7UUFDakIsTUFBTSxJQUFJRyxNQUFNO0lBQ2pCO0lBRUEsSUFBSVIsT0FBT0UsSUFBSSxFQUFFO1FBQ2hCLE9BQU9GLE9BQU9FLElBQUk7SUFDbkI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNwQkgsT0FBT0csT0FBTyxHQUFHSiw2Q0FDUixDQUFDTSxhQUFhO1lBQ3JCSyxnQkFBZ0I7UUFDakIsR0FDQ0MsSUFBSSxDQUFDLENBQUNDLElBQU1BLEdBQ1pDLEtBQUssQ0FBQyxDQUFDQztZQUNQZCxPQUFPRyxPQUFPLEdBQUc7WUFDakIsTUFBTVc7UUFDUDtJQUNGO0lBRUFkLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDbkI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbnRyYXIvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG5cdGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHtcclxuXHRcdGNvbm46IG51bGwsXHJcblx0XHRwcm9taXNlOiBudWxsLFxyXG5cdH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcclxuXHRjb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5cclxuXHRpZiAoIU1PTkdPREJfVVJJKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgZGVmaW5lIE1PTkdPREJfVVJJIGluIC5lbnYubG9jYWxcIik7XHJcblx0fVxyXG5cclxuXHRpZiAoY2FjaGVkLmNvbm4pIHtcclxuXHRcdHJldHVybiBjYWNoZWQuY29ubjtcclxuXHR9XHJcblxyXG5cdGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuXHRcdGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2VcclxuXHRcdFx0LmNvbm5lY3QoTU9OR09EQl9VUkksIHtcclxuXHRcdFx0XHRidWZmZXJDb21tYW5kczogZmFsc2UsXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKChtKSA9PiBtKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdGNhY2hlZC5wcm9taXNlID0gbnVsbDtcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuXHRyZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY29ubmVjdCIsImJ1ZmZlckNvbW1hbmRzIiwidGhlbiIsIm0iLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: 6\n    },\n    role: {\n        type: String,\n        enum: [\n            \"user\",\n            \"admin\"\n        ],\n        default: \"user\"\n    }\n}, {\n    timestamps: true\n});\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next();\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hash(this.password, 12);\n    next();\n});\nUserSchema.methods.comparePassword = async function(candidate) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__.compare(candidate, this.password);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDRjtBQUU5QixNQUFNRSxhQUFhLElBQUlGLDRDQUFlLENBQ3JDO0lBQ0NJLE1BQU07UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxNQUFNO0lBQUs7SUFDakRDLE9BQU87UUFDTkosTUFBTUM7UUFDTkMsVUFBVTtRQUNWRyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEgsTUFBTTtJQUNQO0lBQ0FJLFVBQVU7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtRQUFNTSxXQUFXO0lBQUU7SUFDdkRDLE1BQU07UUFBRVQsTUFBTUM7UUFBUVMsTUFBTTtZQUFDO1lBQVE7U0FBUTtRQUFFQyxTQUFTO0lBQU87QUFDaEUsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHcEJmLFdBQVdnQixHQUFHLENBQUMsUUFBUSxlQUFnQkMsSUFBSTtJQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUMsYUFBYSxPQUFPRDtJQUN6QyxJQUFJLENBQUNQLFFBQVEsR0FBRyxNQUFNWCwwQ0FBVyxDQUFDLElBQUksQ0FBQ1csUUFBUSxFQUFFO0lBQ2pETztBQUNEO0FBRUFqQixXQUFXb0IsT0FBTyxDQUFDQyxlQUFlLEdBQUcsZUFBZ0JDLFNBQVM7SUFDN0QsT0FBT3ZCLDZDQUFjLENBQUN1QixXQUFXLElBQUksQ0FBQ1osUUFBUTtBQUMvQztBQUVBLGlFQUFlWiw0Q0FBZSxDQUFDMkIsSUFBSSxJQUFJM0IsMkNBQWMsQ0FBQyxRQUFRRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWFudHJhci8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcblx0e1xyXG5cdFx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXHJcblx0XHRlbWFpbDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHR1bmlxdWU6IHRydWUsXHJcblx0XHRcdGxvd2VyY2FzZTogdHJ1ZSxcclxuXHRcdFx0dHJpbTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtaW5sZW5ndGg6IDYgfSxcclxuXHRcdHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbXCJ1c2VyXCIsIFwiYWRtaW5cIl0sIGRlZmF1bHQ6IFwidXNlclwiIH0sXHJcblx0fSxcclxuXHR7IHRpbWVzdGFtcHM6IHRydWUgfSxcclxuKTtcclxuXHJcblVzZXJTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xyXG5cdGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHJldHVybiBuZXh0KCk7XHJcblx0dGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEyKTtcclxuXHRuZXh0KCk7XHJcbn0pO1xyXG5cclxuVXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcclxuXHRyZXR1cm4gYmNyeXB0LmNvbXBhcmUoY2FuZGlkYXRlLCB0aGlzLnBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYmNyeXB0IiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlIiwiY29tcGFyZSIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fme%2Froute&page=%2Fapi%2Fauth%2Fme%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fme%2Froute.js&appDir=E%3A%5Cyantrar%5Cdrone_site%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cyantrar%5Cdrone_site&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();