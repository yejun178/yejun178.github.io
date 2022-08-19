(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5901:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(7644);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./services/SanityService.js
var SanityService = __webpack_require__(8812);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(3061);
;// CONCATENATED MODULE: ./components/BlogHeadline.jsx



function BlogHeadline() {
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
    align: "middle",
    style: {
      height: 400,
      textAlign: "center"
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Col, {
      span: 24,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        style: {
          fontSize: 70,
          fontWeight: "bold"
        },
        children: "Yejun's Devlog"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        style: {
          fontSize: 24
        },
        children: "\uAC01\uC885 \uD574\uD0B9 \uB300\uD68C\uC5D0\uC11C \uB2E4\uB918\uB358 \uBB38\uC81C WriteUp \uD480\uC774 \uBC0F \uAC01\uC885 \uAC1C\uBC1C \uD504\uB85C\uC81D\uD2B8\uB97C \uAE30\uB85D\uD560 Devlog \uC785\uB2C8\uB2E4 \uD83D\uDE42"
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/BlogMainPost.jsx
var BlogMainPost = __webpack_require__(2803);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./components/BlogList.jsx






function BlogList({
  posts
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      align: "middle",
      style: {
        height: 100
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
        span: 24,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          style: {
            fontSize: 30,
            fontWeight: "bold"
          },
          children: "Latest Posts"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
      gutter: 16,
      align: "top",
      style: {
        height: "auto"
      },
      children: posts.map(post => {
        return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
          span: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/post/${post.slug}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Card, {
                style: {
                  width: "100%",
                  border: "none",
                  marginBottom: 30
                },
                cover: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  alt: post.thumbnail.alt,
                  src: post.thumbnail.imageUrl
                }),
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: post.title
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                  children: [post.author.name, " \u2219", " ", external_dayjs_default()(post.createdAt).format("MMMM D")]
                })]
              })
            })
          })
        });
      })
    })]
  });
}
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(9648);
;// CONCATENATED MODULE: ./pages/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Home({
  home,
  posts
}) {
  const mainPost = posts.find(p => p.slug === home.mainPostUrl);
  const otherPosts = posts.filter(p => p.slug !== home.mainPostUrl);
  console.log(mainPost);
  console.log(otherPosts);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(BlogHeadline, {}), /*#__PURE__*/jsx_runtime_.jsx(BlogMainPost/* default */.Z, _objectSpread({}, mainPost)), /*#__PURE__*/jsx_runtime_.jsx(BlogList, {
      posts: otherPosts
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}
async function getStaticProps() {
  const sanityService = new SanityService/* default */.Z();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();
  return {
    props: {
      home,
      posts
    }
  };
}

/***/ }),

/***/ 2372:
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ 8809:
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/client");;

/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 8349:
/***/ (function(module) {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,33], function() { return __webpack_exec__(5901); });
module.exports = __webpack_exports__;

})();