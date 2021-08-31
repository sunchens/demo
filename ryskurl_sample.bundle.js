/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./.yarn/cache/three-npm-0.129.0-9f30a38cf1-1fbe60ee56.zip/node_modules/three/build/three.module.js\");\n/* harmony import */ var _mantisvision_rysk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mantisvision/rysk */ \"./.yarn/cache/@mantisvision-rysk-npm-0.3.10-41d0b16b22-d2bf9e8913.zip/node_modules/@mantisvision/rysk/dist/MantisRYSK.js\");\n/* harmony import */ var _mantisvision_rysk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mantisvision_rysk__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * @Descripttion: \n * @Author: sunchen\n * @Date: 2021-08-31 13:50:57\n * @LastEditors: sunchen\n * @LastEditTime: 2021-08-31 14:16:38\n */\n\n\n\nconst video_url = \"https://www.mvkb.cc/lib/exe/fetch.php/pub/genady5.mp4\";\nconst data_url = \"https://www.mvkb.cc/lib/exe/fetch.php/pub/genady5.syk\";\n\ndocument.addEventListener('DOMContentLoaded',function()\n{\n\tconst viewport = document.getElementById(\"viewport\");\n\tconst scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n\tconst renderer = createRenderer(viewport.offsetWidth,viewport.offsetHeight);\n\t\n\t// three.js camera is created and inserted into the scene\n\tconst cameraRigY = new three__WEBPACK_IMPORTED_MODULE_1__.Group();\n\tconst cameraRigX = new three__WEBPACK_IMPORTED_MODULE_1__.Group();\n\tcameraRigY.add(cameraRigX);\n\tscene.add(cameraRigY);\n\t\n\tconst camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(70, viewport.offsetWidth / viewport.offsetHeight, 0.01, 20);\n\tcamera.position.set(0, 1.5, 2.2);\n\tcamera.lookAt(0, 1.0, 0);\n\tcameraRigY.add(camera);\n\t\n\tviewport.appendChild(renderer.domElement);\n\trun(renderer,scene,camera);\n});\n\n\n/**\n * Creates a renderer so the scene could be displayed\n * @param {Integer} width requested width of the rendering window\n * @param {Integer} height requested height of the rendering window\n * @returns {THREE.WebGLRenderer|createRenderer.renderer} created renderer\n */\nfunction createRenderer(width,height)\n{\n\tconst renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({ antialias: true, alpha: true });\n\trenderer.setPixelRatio(window.devicePixelRatio);\n\t\t\n\trenderer.setSize(width,height);\n\trenderer.setClearColor(0xFFFFFF, 1);\n\trenderer.autoClear = false;\n\treturn renderer;\n}\n\n/**\n * Runs the whole animation\n * @param {THREE.WebGLRenderer} renderer\n * @param {THREE.Scene} scene\n * @param {THREE.PerspectiveCamera} camera\n * @returns {undefined}\n */\nfunction run(renderer,scene,camera)\n{\n\tconst ryskObj = new _mantisvision_rysk__WEBPACK_IMPORTED_MODULE_0__.RYSKUrl(video_url,data_url);\n\t\n\tryskObj.run().then(mesh => \n\t{//add mesh to the scene\n\t\tscene.add(mesh);\n\t}); \n\t\n\tdocument.getElementById(\"playBtn\").addEventListener(\"click\",event =>\n\t{//event listener for the button which plays/pauses the animation\n\t\tif (ryskObj !== null)\n\t\t{\n\t\t\tif (ryskObj.isPaused())\n\t\t\t{\n\t\t\t\tryskObj.play();\n\t\t\t\tevent.target.innerHTML = \"点击关闭\";\n\t\t\t}else\n\t\t\t{\n\t\t\t\tryskObj.pause();\n\t\t\t\tevent.target.innerHTML = \"点击播放\";\n\t\t\t}\n\t\t}\n\t});\n\t\n\trenderer.setAnimationLoop((timestamp, frame) => \n\t{//animation loop to render each frame-\n\t\tif (ryskObj !== null)\n\t\t{\n\t\t\tryskObj.update();\n\t\t}\n\t\t\n\t\trenderer.clear(true, true, true);\n\t\trenderer.render(scene, camera);\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1JZU0tVcmwgc2FtcGxlLy4vc3JjL21haW4uanM/NTZkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQERlc2NyaXB0dGlvbjogXG4gKiBAQXV0aG9yOiBzdW5jaGVuXG4gKiBARGF0ZTogMjAyMS0wOC0zMSAxMzo1MDo1N1xuICogQExhc3RFZGl0b3JzOiBzdW5jaGVuXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA4LTMxIDE0OjE2OjM4XG4gKi9cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgUllTS1VybCB9IGZyb20gXCJAbWFudGlzdmlzaW9uL3J5c2tcIjtcblxuY29uc3QgdmlkZW9fdXJsID0gXCJodHRwczovL3d3dy5tdmtiLmNjL2xpYi9leGUvZmV0Y2gucGhwL3B1Yi9nZW5hZHk1Lm1wNFwiO1xuY29uc3QgZGF0YV91cmwgPSBcImh0dHBzOi8vd3d3Lm12a2IuY2MvbGliL2V4ZS9mZXRjaC5waHAvcHViL2dlbmFkeTUuc3lrXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLGZ1bmN0aW9uKClcbntcblx0Y29uc3Qgdmlld3BvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdwb3J0XCIpO1xuXHRjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXHRjb25zdCByZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyKHZpZXdwb3J0Lm9mZnNldFdpZHRoLHZpZXdwb3J0Lm9mZnNldEhlaWdodCk7XG5cdFxuXHQvLyB0aHJlZS5qcyBjYW1lcmEgaXMgY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgaW50byB0aGUgc2NlbmVcblx0Y29uc3QgY2FtZXJhUmlnWSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXHRjb25zdCBjYW1lcmFSaWdYID0gbmV3IFRIUkVFLkdyb3VwKCk7XG5cdGNhbWVyYVJpZ1kuYWRkKGNhbWVyYVJpZ1gpO1xuXHRzY2VuZS5hZGQoY2FtZXJhUmlnWSk7XG5cdFxuXHRjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzAsIHZpZXdwb3J0Lm9mZnNldFdpZHRoIC8gdmlld3BvcnQub2Zmc2V0SGVpZ2h0LCAwLjAxLCAyMCk7XG5cdGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMS41LCAyLjIpO1xuXHRjYW1lcmEubG9va0F0KDAsIDEuMCwgMCk7XG5cdGNhbWVyYVJpZ1kuYWRkKGNhbWVyYSk7XG5cdFxuXHR2aWV3cG9ydC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblx0cnVuKHJlbmRlcmVyLHNjZW5lLGNhbWVyYSk7XG59KTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSByZW5kZXJlciBzbyB0aGUgc2NlbmUgY291bGQgYmUgZGlzcGxheWVkXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdpZHRoIHJlcXVlc3RlZCB3aWR0aCBvZiB0aGUgcmVuZGVyaW5nIHdpbmRvd1xuICogQHBhcmFtIHtJbnRlZ2VyfSBoZWlnaHQgcmVxdWVzdGVkIGhlaWdodCBvZiB0aGUgcmVuZGVyaW5nIHdpbmRvd1xuICogQHJldHVybnMge1RIUkVFLldlYkdMUmVuZGVyZXJ8Y3JlYXRlUmVuZGVyZXIucmVuZGVyZXJ9IGNyZWF0ZWQgcmVuZGVyZXJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXIod2lkdGgsaGVpZ2h0KVxue1xuXHRjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZSB9KTtcblx0cmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cdFx0XG5cdHJlbmRlcmVyLnNldFNpemUod2lkdGgsaGVpZ2h0KTtcblx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweEZGRkZGRiwgMSk7XG5cdHJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuXHRyZXR1cm4gcmVuZGVyZXI7XG59XG5cbi8qKlxuICogUnVucyB0aGUgd2hvbGUgYW5pbWF0aW9uXG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyXG4gKiBAcGFyYW0ge1RIUkVFLlNjZW5lfSBzY2VuZVxuICogQHBhcmFtIHtUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYX0gY2FtZXJhXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBydW4ocmVuZGVyZXIsc2NlbmUsY2FtZXJhKVxue1xuXHRjb25zdCByeXNrT2JqID0gbmV3IFJZU0tVcmwodmlkZW9fdXJsLGRhdGFfdXJsKTtcblx0XG5cdHJ5c2tPYmoucnVuKCkudGhlbihtZXNoID0+IFxuXHR7Ly9hZGQgbWVzaCB0byB0aGUgc2NlbmVcblx0XHRzY2VuZS5hZGQobWVzaCk7XG5cdH0pOyBcblx0XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixldmVudCA9PlxuXHR7Ly9ldmVudCBsaXN0ZW5lciBmb3IgdGhlIGJ1dHRvbiB3aGljaCBwbGF5cy9wYXVzZXMgdGhlIGFuaW1hdGlvblxuXHRcdGlmIChyeXNrT2JqICE9PSBudWxsKVxuXHRcdHtcblx0XHRcdGlmIChyeXNrT2JqLmlzUGF1c2VkKCkpXG5cdFx0XHR7XG5cdFx0XHRcdHJ5c2tPYmoucGxheSgpO1xuXHRcdFx0XHRldmVudC50YXJnZXQuaW5uZXJIVE1MID0gXCLngrnlh7vlhbPpl61cIjtcblx0XHRcdH1lbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHJ5c2tPYmoucGF1c2UoKTtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9IFwi54K55Ye75pKt5pS+XCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0XG5cdHJlbmRlcmVyLnNldEFuaW1hdGlvbkxvb3AoKHRpbWVzdGFtcCwgZnJhbWUpID0+IFxuXHR7Ly9hbmltYXRpb24gbG9vcCB0byByZW5kZXIgZWFjaCBmcmFtZS1cblx0XHRpZiAocnlza09iaiAhPT0gbnVsbClcblx0XHR7XG5cdFx0XHRyeXNrT2JqLnVwZGF0ZSgpO1xuXHRcdH1cblx0XHRcblx0XHRyZW5kZXJlci5jbGVhcih0cnVlLCB0cnVlLCB0cnVlKTtcblx0XHRyZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkRYSKUrl_sample"] = self["webpackChunkRYSKUrl_sample"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;