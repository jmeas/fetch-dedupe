webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/nav.module.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./components/nav.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".nav_nav__2DIZA {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: var(--navWidth);\n  max-height: 100vh;\n  overflow-y: scroll;\n  /* min-height: calc(100%); */\n  background: #f7f7f7;\n  padding: var(--appTopPadding) 0 50px;\n}\n\n.nav_navSubList__1sPlE,\n.nav_navList__1XQQy {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav_navList__1XQQy {\n  width: var(--navWidth);\n}\n\n.nav_navListItem__2RyNo {\n  margin-bottom: 5px;\n}\n\n.nav_navListItem__2RyNo:last-child {\n  margin-bottom: 50px;\n}\n\n.nav_navSubLink__2VtrR,\n.nav_navLink__1mlDR,\n.nav_navSectionLink__1KpdU {\n  outline: none;\n  color: #111;\n  text-decoration: none;\n}\n\n.nav_navSectionLink__1KpdU {\n  font-size: 1.15rem;\n  font-weight: bold;\n  padding: 13px var(--standardContentPadding);\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 0;\n  position: relative;\n}\n\n.nav_navSubLink__2VtrR,\n.nav_navLink__1mlDR {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  height: 2.5rem;\n  padding: 6px var(--standardContentPadding) 6px\n    calc(var(--standardContentPadding) + 1rem);\n  -webkit-font-smoothing: antialiased;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: #555;\n  position: relative;\n}\n\n.nav_navApiSubList__15FUT {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.nav_navApiSubList__15FUT .nav_navLink__1mlDR {\n  font-size: 0.95rem;\n}\n\n.nav_navSubLink__2VtrR:after,\n.nav_navLink__1mlDR:after,\n.nav_navSectionLink__1KpdU:after {\n  content: '';\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: -1;\n  background: #e9e9e9;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 100ms ease-in-out;\n}\n\n.nav_navSubLink__2VtrR.nav_active__dfayY:after,\n.nav_navSubLink__2VtrR:hover:after,\n.nav_navSectionLink__1KpdU.nav_active__dfayY:after,\n.nav_navSectionLink__1KpdU:hover:after,\n.nav_navLink__1mlDR.nav_active__dfayY:after,\n.nav_navLink__1mlDR:hover:after,\n.nav_navLink__1mlDR:focus:after,\n.nav_navSectionLink__1KpdU:focus:after,\n.nav_navSubLink__2VtrR:focus:after {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["nav.module.css"],"names":[],"mappings":"AAAA;EACE,wBAAgB;EAAhB,gBAAgB;EAChB,MAAM;EACN,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;;EAEE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;EAGE,aAAa;EACb,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,2CAA2C;EAC3C,mCAAmC;EACnC,cAAc;EACd,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd;8CAC4C;EAC5C,mCAAmC;EACnC,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE;aACW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;EAGE,WAAW;EACX,cAAc;EACd,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,UAAU;EACV,oBAAoB;EACpB,qCAAqC;AACvC;;AAEA;;;;;;;;;EASE,UAAU;AACZ","file":"nav.module.css","sourcesContent":[".nav {\n  position: sticky;\n  top: 0;\n  width: var(--navWidth);\n  max-height: 100vh;\n  overflow-y: scroll;\n  /* min-height: calc(100%); */\n  background: #f7f7f7;\n  padding: var(--appTopPadding) 0 50px;\n}\n\n.navSubList,\n.navList {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.navList {\n  width: var(--navWidth);\n}\n\n.navListItem {\n  margin-bottom: 5px;\n}\n\n.navListItem:last-child {\n  margin-bottom: 50px;\n}\n\n.navSubLink,\n.navLink,\n.navSectionLink {\n  outline: none;\n  color: #111;\n  text-decoration: none;\n}\n\n.navSectionLink {\n  font-size: 1.15rem;\n  font-weight: bold;\n  padding: 13px var(--standardContentPadding);\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  user-select: none;\n  z-index: 0;\n  position: relative;\n}\n\n.navSubLink,\n.navLink {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  height: 2.5rem;\n  padding: 6px var(--standardContentPadding) 6px\n    calc(var(--standardContentPadding) + 1rem);\n  -webkit-font-smoothing: antialiased;\n  user-select: none;\n  color: #555;\n  position: relative;\n}\n\n.navApiSubList {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.navApiSubList .navLink {\n  font-size: 0.95rem;\n}\n\n.navSubLink:after,\n.navLink:after,\n.navSectionLink:after {\n  content: '';\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: -1;\n  background: #e9e9e9;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 100ms ease-in-out;\n}\n\n.navSubLink.active:after,\n.navSubLink:hover:after,\n.navSectionLink.active:after,\n.navSectionLink:hover:after,\n.navLink.active:after,\n.navLink:hover:after,\n.navLink:focus:after,\n.navSectionLink:focus:after,\n.navSubLink:focus:after {\n  opacity: 1;\n}\n"]}]);
// Exports
exports.locals = {
	"nav": "nav_nav__2DIZA",
	"navSubList": "nav_navSubList__1sPlE",
	"navList": "nav_navList__1XQQy",
	"navListItem": "nav_navListItem__2RyNo",
	"navSubLink": "nav_navSubLink__2VtrR",
	"navLink": "nav_navLink__1mlDR",
	"navSectionLink": "nav_navSectionLink__1KpdU",
	"navApiSubList": "nav_navApiSubList__15FUT",
	"active": "nav_active__dfayY"
};

/***/ })

})
//# sourceMappingURL=_app.js.ad2923e4e5bbc39a4631.hot-update.js.map