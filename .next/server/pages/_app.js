(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 62:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Layout_main__NgJgX"
};


/***/ }),

/***/ 92:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MainNavigation_header__WuiTa",
	"logo": "MainNavigation_logo__oTonQ",
	"active": "MainNavigation_active__eKPZi"
};


/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./components/layout/MainNavigation.module.css
var MainNavigation_module = __webpack_require__(92);
var MainNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MainNavigation_module);
;// CONCATENATED MODULE: external "next/Link"
const Link_namespaceObject = require("next/Link");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
;// CONCATENATED MODULE: ./components/layout/MainNavigation.js



function MainNavigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (MainNavigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (MainNavigation_module_default()).logo,
                children: "React Meetups"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: "/",
                                children: "All Meetups"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: "/new-meetup",
                                children: "Add New Meetup"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const layout_MainNavigation = (MainNavigation);

// EXTERNAL MODULE: ./components/layout/Layout.module.css
var Layout_module = __webpack_require__(62);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/layout/Layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MainNavigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Layout_module_default()).main,
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(674));
module.exports = __webpack_exports__;

})();