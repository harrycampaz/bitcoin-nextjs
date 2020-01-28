webpackHotUpdate("static/development/pages/index.js",{

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
  var _props$newsItem = props.newsItem,
      urlToImage = _props$newsItem.urlToImage,
      url = _props$newsItem.url,
      title = _props$newsItem.title,
      descripction = _props$newsItem.descripction,
      source = _props$newsItem.source;
  var image;

  if (urlToImage !== '') {
    image = __jsx("image", {
      src: urlToImage,
      alt: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, image)));
};

/* harmony default export */ __webpack_exports__["default"] = (NewItem);

/***/ })

})
//# sourceMappingURL=index.js.cb7ffe3eaa06b5a5d94d.hot-update.js.map