webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewItem.js":
false,

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsItem */ "./components/NewsItem.js");
var _jsxFileName = "/Users/harrycampaz/Documents/ReactJs/bitcoin-nextjs/components/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var News = function News(props) {
  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.news.map(function (newsItem) {
    return __jsx(_NewsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      newsItem: newsItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./components/NewsItem.js":
/*!********************************!*\
  !*** ./components/NewsItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/harrycampaz/Documents/ReactJs/bitcoin-nextjs/components/NewsItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var NewItem = function NewItem(props) {
  console.log(props);
  return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.newsItem.autor);
};

/* harmony default export */ __webpack_exports__["default"] = (NewItem);

/***/ })

})
//# sourceMappingURL=index.js.4f5df1ec7ea7f730a1bb.hot-update.js.map