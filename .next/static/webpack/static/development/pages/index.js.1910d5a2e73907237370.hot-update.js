webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NewItem.js":
/*!*******************************!*\
  !*** ./components/NewItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/harrycampaz/Documents/ReactJs/bitcoin-nextjs/components/NewItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var NewItem = function NewItem(props) {
  return __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.newItem.autor);
};

/* harmony default export */ __webpack_exports__["default"] = (NewItem);

/***/ }),

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
/* harmony import */ var _NewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewItem */ "./components/NewItem.js");
var _jsxFileName = "/Users/harrycampaz/Documents/ReactJs/bitcoin-nextjs/components/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var News = function News(props) {
  return __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.news.map(function (newItem) {
    return __jsx(_NewItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      newItem: newItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/Master */ "./components/ui/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Price */ "./components/Price.js");
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/News */ "./components/News.js");

var _jsxFileName = "/Users/harrycampaz/Documents/ReactJs/bitcoin-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 //import React from 'react';

var Index = function Index(props) {
  return __jsx(_components_ui_Master__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
    price: props.priceBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "NOticias del bitcoin"), __jsx(_components_News__WEBPACK_IMPORTED_MODULE_5__["default"], {
    news: props.news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Proximos eventos del bitcoin"))));
};

Index.getInitialProps = function _callee() {
  var price, news, resultPrice, resultNews;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://api.coinmarketcap.com/v2/ticker/1/'));

        case 2:
          price = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-28&sortBy=publishedAt&apiKey=e2e31acf44744967adbfc05c32672e50&language=es'));

        case 5:
          news = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(price.json());

        case 8:
          resultPrice = _context.sent;
          _context.next = 11;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(news.json());

        case 11:
          resultNews = _context.sent;
          return _context.abrupt("return", {
            priceBitcoin: resultPrice.data.quotes.USD,
            news: resultNews.articles
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1910d5a2e73907237370.hot-update.js.map