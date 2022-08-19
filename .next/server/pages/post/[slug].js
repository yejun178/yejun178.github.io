(function() {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 1329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PostAll; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./services/SanityService.js
var SanityService = __webpack_require__(8812);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(7644);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(3061);
// EXTERNAL MODULE: ./components/BlogMainPost.jsx
var BlogMainPost = __webpack_require__(2803);
// EXTERNAL MODULE: ./components/Footer.jsx
var Footer = __webpack_require__(9648);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");;
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");;
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_namespaceObject);
;// CONCATENATED MODULE: ./components/BlogPostDetail.jsx




const serializers = {
  types: {
    code: ({
      node
    }) => {
      const {
        code
      } = node;
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_syntax_highlighter_default()), {
        language: "javascript",
        style: {
          hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            color: "#adadad",
            background: "#101010"
          },
          "hljs-comment": {
            color: "#636363",
            fontStyle: "italic"
          },
          "hljs-quote": {
            color: "#636363",
            fontStyle: "italic"
          },
          "hljs-doctag": {
            color: "#b29dfc"
          },
          "hljs-keyword": {
            color: "#b29dfc"
          },
          "hljs-formula": {
            color: "#b29dfc"
          },
          "hljs-section": {
            color: "#f17a8d"
          },
          "hljs-name": {
            color: "#f17a8d"
          },
          "hljs-selector-tag": {
            color: "#f17a8d"
          },
          "hljs-deletion": {
            color: "#f17a8d"
          },
          "hljs-subst": {
            color: "#f17a8d"
          },
          "hljs-literal": {
            color: "#5abdc8"
          },
          "hljs-string": {
            color: "#fdc97d"
          },
          "hljs-regexp": {
            color: "#fdc97d"
          },
          "hljs-addition": {
            color: "#fdc97d"
          },
          "hljs-attribute": {
            color: "#fdc97d"
          },
          "hljs-meta-string": {
            color: "#fdc97d"
          },
          "hljs-built_in": {
            color: "#d9a200"
          },
          "hljs-class .hljs-title": {
            color: "#d9a200"
          },
          "hljs-attr": {
            color: "#f58957"
          },
          "hljs-variable": {
            color: "#f58957"
          },
          "hljs-template-variable": {
            color: "#f58957"
          },
          "hljs-type": {
            color: "#f58957"
          },
          "hljs-selector-class": {
            color: "#f58957"
          },
          "hljs-selector-attr": {
            color: "#f58957"
          },
          "hljs-selector-pseudo": {
            color: "#f58957"
          },
          "hljs-number": {
            color: "#f58957"
          },
          "hljs-symbol": {
            color: "#9cbafe"
          },
          "hljs-bullet": {
            color: "#9cbafe"
          },
          "hljs-link": {
            color: "#9cbafe",
            textDecoration: "underline"
          },
          "hljs-meta": {
            color: "#9cbafe"
          },
          "hljs-selector-id": {
            color: "#9cbafe"
          },
          "hljs-title": {
            color: "#9cbafe"
          },
          "hljs-emphasis": {
            fontStyle: "italic"
          },
          "hljs-strong": {
            fontWeight: "bold"
          }
        },
        children: code
      });
    },
    video: ({
      node
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "video"
      });
    },
    link: ({
      node
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "link"
      });
    },
    imageGallery: ({
      node
    }) => {
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "imageGallery"
      });
    }
  }
};
function BlogPostDetail({
  blocks
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Row, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Col, {
      span: 24,
      children: /*#__PURE__*/jsx_runtime_.jsx((block_content_to_react_default()), {
        blocks: blocks,
        projectId: "20rw1uj7",
        dataset: "production",
        serializers: serializers
      })
    })
  });
}
;// CONCATENATED MODULE: ./pages/post/[slug].js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function PostAll({
  slug,
  post
}) {
  console.log(post);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Home_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(BlogMainPost/* default */.Z, _objectSpread({}, post)), /*#__PURE__*/jsx_runtime_.jsx(BlogPostDetail, {
      blocks: post.content
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}
async function getStaticPaths() {
  const posts = await new SanityService/* default */.Z().getPosts();
  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const {
    slug
  } = params;
  const posts = await new SanityService/* default */.Z().getPosts();
  const post = posts.find(p => p.slug === slug);
  return {
    props: {
      slug,
      post
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,33], function() { return __webpack_exec__(1329); });
module.exports = __webpack_exports__;

})();