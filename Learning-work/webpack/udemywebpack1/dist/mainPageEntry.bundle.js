/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _array = __webpack_require__(1);

var _array2 = _interopRequireDefault(_array);

var _module = __webpack_require__(2);

var _module2 = _interopRequireDefault(_module);

var _module3 = __webpack_require__(3);

var _module4 = _interopRequireDefault(_module3);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//import './css/main.css';

console.log(_module2.default);

console.log("sum.....", (0, _module2.default)(2, 345, 56, 7));
console.log("str......", _module4.default.apply(undefined, _toConsumableArray(_array2.default)));

for (var x in _array2.default) {
    console.log(_array2.default[x] + " : " + x);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var arr = ['amar', 'shableen', 'sandhu', 'avu', 'nihu'];

exports.default = arr;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var myfun = function myfun() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log("mymodule 1 it is..sourcemaps work");
  var sum = 0;
  for (var x in args) {
    sum = sum + args[x];
  }
  return sum;
};

//export {myfun, myfun2};
exports.default = myfun;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var myfun2 = function myfun2() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log("mymodule 2 it is..sourcemaps work");
    var str = "";
    for (var x in args) {
        str = str + args[x];
    }
    return str;
};

exports.default = myfun2;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmE2YmE0ODE2Y2U5NTQxZjg1MjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9tb2R1bGUxLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL21vZHVsZTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzP2NiYjciXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIngiLCJhcnIiLCJteWZ1biIsImFyZ3MiLCJzdW0iLCJteWZ1bjIiLCJzdHIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7O0FBRUFBLFFBQVFDLEdBQVI7O0FBRUFELFFBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCLHNCQUFLLENBQUwsRUFBTyxHQUFQLEVBQVcsRUFBWCxFQUFjLENBQWQsQ0FBdkI7QUFDQUQsUUFBUUMsR0FBUixDQUFZLFdBQVosRUFBd0Isc0VBQXhCOztBQUVBLEtBQUksSUFBSUMsQ0FBUixxQkFBaUI7QUFDYkYsWUFBUUMsR0FBUixDQUFZLGdCQUFJQyxDQUFKLElBQU8sS0FBUCxHQUFhQSxDQUF6QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7QUNaRCxJQUFNQyxNQUFNLENBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsUUFBckIsRUFBOEIsS0FBOUIsRUFBb0MsTUFBcEMsQ0FBWjs7a0JBRWVBLEc7Ozs7Ozs7Ozs7OztBQ0hkLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUFZO0FBQUEsb0NBQVJDLElBQVE7QUFBUkEsUUFBUTtBQUFBOztBQUN0QkwsVUFBUUMsR0FBUixDQUFZLG1DQUFaO0FBQ0QsTUFBSUssTUFBTSxDQUFWO0FBQ0EsT0FBSSxJQUFJSixDQUFSLElBQWFHLElBQWIsRUFBa0I7QUFDZEMsVUFBTUEsTUFBSUQsS0FBS0gsQ0FBTCxDQUFWO0FBQ0g7QUFDRCxTQUFPSSxHQUFQO0FBQ0gsQ0FQQTs7QUFXRDtrQkFDZ0JGLEs7Ozs7Ozs7Ozs7OztBQ1poQixJQUFNRyxTQUFTLFNBQVRBLE1BQVMsR0FBYTtBQUFBLHNDQUFURixJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDeEJMLFlBQVFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLFFBQUlPLE1BQU0sRUFBVjtBQUNBLFNBQUksSUFBSU4sQ0FBUixJQUFhRyxJQUFiLEVBQWtCO0FBQ2RHLGNBQU1BLE1BQUlILEtBQUtILENBQUwsQ0FBVjtBQUNIO0FBQ0QsV0FBT00sR0FBUDtBQUNILENBUEQ7O2tCQVNlRCxNOzs7Ozs7QUNUZix5QyIsImZpbGUiOiJtYWluUGFnZUVudHJ5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJhNmJhNDgxNmNlOTU0MWY4NTI5IiwiaW1wb3J0IGFyciBmcm9tICcuL2FycmF5JztcbmltcG9ydCBmdW4xIGZyb20gJy4vbW9kdWxlcy9tb2R1bGUxJztcbmltcG9ydCBmdW4yIGZyb20gJy4vbW9kdWxlcy9tb2R1bGUyJztcbmltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XG4vL2ltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuXG5jb25zb2xlLmxvZyhmdW4xKTtcblxuY29uc29sZS5sb2coXCJzdW0uLi4uLlwiLGZ1bjEoMiwzNDUsNTYsNykpO1xuY29uc29sZS5sb2coXCJzdHIuLi4uLi5cIixmdW4yKC4uLmFycikpO1xuXG5mb3IodmFyIHggaW4gYXJyKXtcbiAgICBjb25zb2xlLmxvZyhhcnJbeF0rXCIgOiBcIit4KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJcbmNvbnN0IGFyciA9IFsnYW1hcicsICdzaGFibGVlbicsICdzYW5kaHUnLCdhdnUnLCduaWh1J107XG5cbmV4cG9ydCBkZWZhdWx0IGFycjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXJyYXkuanMiLCIgY29uc3QgbXlmdW4gPSAoLi4uYXJncyk9PiB7XG4gICAgIGNvbnNvbGUubG9nKFwibXltb2R1bGUgMSBpdCBpcy4uc291cmNlbWFwcyB3b3JrXCIpO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvcihsZXQgeCBpbiBhcmdzKXtcbiAgICAgICAgc3VtID0gc3VtK2FyZ3NbeF07XG4gICAgfVxuICAgIHJldHVybiBzdW07XG59XG5cbiBcblxuLy9leHBvcnQge215ZnVuLCBteWZ1bjJ9O1xuIGV4cG9ydCBkZWZhdWx0IG15ZnVuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL21vZHVsZTEuanMiLCJjb25zdCBteWZ1bjIgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwibXltb2R1bGUgMiBpdCBpcy4uc291cmNlbWFwcyB3b3JrXCIpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgeCBpbiBhcmdzKXtcbiAgICAgICAgc3RyID0gc3RyK2FyZ3NbeF07XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG15ZnVuMjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9tb2R1bGUyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9