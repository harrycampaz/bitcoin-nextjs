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
      description = _props$newsItem.description,
      source = _props$newsItem.source;
  var image;

  if (urlToImage !== '') {
    image = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  } else {
    image = __jsx("img", {
      src: "https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg",
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, image), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, description), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, source.name), __jsx("a", {
    href: url,
    target: "_blank",
    className: "btn btn-primary d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewItem);

/***/ })

})
//# sourceMappingURL=index.js.557448d5bdd4bbc29fa9.hot-update.js.map