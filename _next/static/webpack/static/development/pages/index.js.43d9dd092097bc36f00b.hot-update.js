webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: Social, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return Social; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ "./components/Wrapper.js");
/* harmony import */ var styled_icons_material_Check_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/material/Check.cjs */ "./node_modules/styled-icons/material/Check.cjs.js");
/* harmony import */ var styled_icons_material_Check_cjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Check_cjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var GithubIcon = function GithubIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "512",
    height: "512",
    rx: "15%",
    fill: "#1B1817"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
  }));
};

GithubIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var TelegramIcon = function TelegramIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "512",
    height: "512",
    rx: "15%",
    fill: "#37aee2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#c8daea",
    d: "M199 404c-11 0-10-4-13-14l-32-105 245-144"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#a9c9dd",
    d: "M199 404c7 0 11-4 16-8l45-43-56-34"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#f6fbfe",
    d: "M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
  }));
};

TelegramIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};

var TwitterIcon = function TwitterIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "512",
    height: "512",
    rx: "15%",
    fill: "#1da1f3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37"
  }));
};

TwitterIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};



var List = function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    as: "ul",
    m: 0,
    p: 0,
    css: {
      listStyleType: 'none'
    }
  }, props));
};

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    as: "li",
    mr: 3,
    mb: 2
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "i",
    color: _theme__WEBPACK_IMPORTED_MODULE_4__["colors"].primary,
    mr: 3,
    css: {
      verticalAlign: 'middle'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_Check_cjs__WEBPACK_IMPORTED_MODULE_3__["Check"], {
    size: 20
  })), children);
};

var Social = function Social(_ref2) {
  var Icon = _ref2.Icon,
      _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? '/' : _ref2$href,
      children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mr: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: href,
    target: "_blank",
    rel: "noopener"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    height: 32
  }), children));
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mt: 90
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: ['wrap', 'nowrap'],
    px: 3,
    py: [3, 6]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.4],
    mb: [5, 0]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    color: "black",
    fontSize: 5,
    mb: 4
  }, "The most trusted password manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mb: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, "Decentralized by default"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, "Zero-knowledge privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, "Fail-operational by design"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    Icon: TelegramIcon,
    href: "https://t.me/etherpass"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    Icon: GithubIcon,
    href: "https://github.com/etherpass"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Social, {
    Icon: TwitterIcon,
    href: "https://twitter.com/etherpass_app"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 0.6]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/mbp-alt-opti.png",
    alt: "etherpass",
    width: [1, 800]
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.43d9dd092097bc36f00b.hot-update.js.map