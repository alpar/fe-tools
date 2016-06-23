/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(8);

	var _home2 = _interopRequireDefault(_home);

	var _encode = __webpack_require__(190);

	var _encode2 = _interopRequireDefault(_encode);

	var _crypto = __webpack_require__(195);

	var _crypto2 = _interopRequireDefault(_crypto);

	var _json = __webpack_require__(22);

	var _json2 = _interopRequireDefault(_json);

	var _img = __webpack_require__(30);

	var _img2 = _interopRequireDefault(_img);

	var _qrcode = __webpack_require__(200);

	var _qrcode2 = _interopRequireDefault(_qrcode);

	var _js = __webpack_require__(44);

	var _js2 = _interopRequireDefault(_js);

	var _css = __webpack_require__(50);

	var _css2 = _interopRequireDefault(_css);

	var _html = __webpack_require__(70);

	var _html2 = _interopRequireDefault(_html);

	var _time = __webpack_require__(55);

	var _time2 = _interopRequireDefault(_time);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(65);

	var _require2 = _require('electron');

	var ipcRenderer = _require2.ipcRenderer;
	var remote = _require2.remote;
	var shell = _require2.shell;

	var $ = _require('jquery');
	var Vue = _require('vue');
	var Router = _require('vue-router');
	var Package = __webpack_require__(69);
	Vue.use(Router);

	__webpack_require__(68);

	/**
	 * components
	 */


	var router = new Router();
	router.map({
	    '/home': {
	        component: _home2.default
	    },
	    '/encode': {
	        component: _encode2.default
	    },
	    '/crypto': {
	        component: _crypto2.default
	    },
	    '/img': {
	        component: _img2.default
	    },
	    '/qrcode': {
	        component: _qrcode2.default
	    },
	    '/js': {
	        component: _js2.default
	    },
	    '/css': {
	        component: _css2.default
	    },
	    '/html': {
	        component: _html2.default
	    },
	    '/json': {
	        component: _json2.default
	    },
	    '/time': {
	        component: _time2.default
	    }
	});
	router.redirect({
	    '*': '/home'
	});
	router.start(_app2.default, '#app');

	function checkUpdate(action) {
	    $.ajax({
	        url: Package.repository.package,
	        dataType: 'json',
	        cache: false,
	        success: function success(data) {
	            if (data && data.release > Package.release) {
	                showUpdateDialog();
	            }
	        }
	    });
	}

	function showUpdateDialog() {
	    remote.dialog.showMessageBox({
	        type: 'info',
	        title: '检查更新',
	        message: "当前已有新版本",
	        defaultId: 0,
	        buttons: ['点击下载最新版本', '稍后提醒我']
	    }, function (index) {
	        if (index === 1) {} else {
	            shell.openExternal(Package.repository.releases);
	        }
	    });
	}
	showUpdateDialog();

	// 检查更新
	checkUpdate();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {};
	    },
	    methods: {}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <ul class=\"box nav\">\n        <li><a v-link=\"{path: '/encode'}\">字符串编解码</a></li>\n        <li><a v-link=\"{path: '/crypto'}\">字符串加密</a></li>\n        <li><a v-link=\"{path: '/img'}\">图片转Base64</a></li>\n        <li><a v-link=\"{path: '/qrcode'}\">文本/链接转二维码</a></li>\n        <li><a v-link=\"{path: '/js'}\">JS压缩/格式化</a></li>\n        <li><a v-link=\"{path: '/css'}\">CSS压缩/格式化</a></li>\n        <li><a v-link=\"{path: '/html'}\">HTML压缩/格式化</a></li>\n        <li><a v-link=\"{path: '/json'}\">JSON格式化</a></li>\n        <li><a v-link=\"{path: '/time'}\">时间戳转换</a></li>\n    </ul>\n    <div class=\"box content\">\n        <router-view transition=\"fade\" transition-mode=\"out-in\">\n        </router-view>\n    </div>\n    <div class=\"footer\">\n        © 2016 Alibaba神盾局UED\n    </div>\n</div>\n\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            version: __webpack_require__(69).version
	        };
	    },
	    methods: {}
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    FE Tools v{{ version }}\n</div>\n";

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	'use strict';

	// http://www.ruanyifeng.com/blog/2014/12/unicode.html
	//
	// UTF-8是一种变长的编码方法，字符长度从1个字节到4个字节不等
	// UTF-16编码介于UTF-32与UTF-8之间，同时结合了定长和变长两种编码方法的特点。
	// 它的编码规则很简单：基本平面的字符占用2个字节，辅助平面的字符占用4个字节。

	// https://en.wikipedia.org/wiki/UTF-8
	// 0000 0000-0000 007F | 0xxxxxxx 7 bits, stored in 1 byte
	// 0000 0080-0000 07FF | 110xxxxx 10xxxxxx 5+6 bits = 11 bits, stored in 2 bytes
	// 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx 4+6+6 bits = 16 bits, stored in 3 bytes
	// 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

	/**
	 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
	 * (BMP / basic multilingual plane only)
	 *
	 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
	 *
	 */
	function encode(str) {
	    if (!str) {
	        return '';
	    }

	    // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
	    // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
	    // 拆分后的单字节以1开头，utf8中没有在用
	    return String(str).replace(/[\u0080-\u07ff]/g, function (c) {
	        var cc = c.charCodeAt(0);
	        return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
	    }).replace(/[\u0800-\uffff]/g, function (c) {
	        var cc = c.charCodeAt(0);
	        return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3f, 0x80 | cc & 0x3f);
	    });
	}

	function decode(str) {
	    if (!str) {
	        return '';
	    }

	    // 跟上面转换过的范围一一对应
	    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
	    return str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
	    function (c) {
	        // (note parentheses for precence)
	        var cc = (c.charCodeAt(0) & 0x0f) << 12 | (c.charCodeAt(1) & 0x3f) << 6 | c.charCodeAt(2) & 0x3f;
	        return String.fromCharCode(cc);
	    }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
	    function (c) {
	        // (note parentheses for precence)
	        var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
	        return String.fromCharCode(cc);
	    });
	}

	module.exports = {
	    encode: encode,
	    decode: decode
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	// from uglify
	function to_ascii(str) {
	    return str.replace(/[\u0080-\uffff]/g, function (ch) {
	        var code = ch.charCodeAt(0).toString(16);
	        if (code.length <= 2) {
	            while (code.length < 2) {
	                code = "0" + code;
	            }return "\\x" + code;
	        } else {
	            while (code.length < 4) {
	                code = "0" + code;
	            }return "\\u" + code;
	        }
	    });
	}

	module.exports = {
	    encode: to_ascii,

	    decode: function decode(str) {
	        return str.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g, function (match, p1, p2) {
	            return String.fromCharCode(parseInt(p1 || p2, 16));
	        });
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/json.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./json.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./json.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./json.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(26);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _require = __webpack_require__(20);

	var clipboard = _require.clipboard;
	exports.default = {
	    data: function data() {
	        return {
	            input: '',
	            space: 4
	        };
	    },
	    methods: {
	        pretty: function pretty() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }
	            try {
	                this.input = (0, _stringify2.default)(JSON.parse(input), null, parseInt(this.space));
	                clipboard.writeText(this.input);
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },

	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(28)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        缩进：\n        <select v-model=\"space\">\n            <option value=\"2\">2个空格</option>\n            <option value=\"4\" selected>4个空格</option>\n            <option value=\"8\">8个空格</option>\n        </select>\n        <span class=\"btn\" v-on:click=\"pretty\">格式化</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/img.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(35)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./img.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./img.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./img.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".page-img .drag-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 6rem;\n  height: 3.5rem;\n  padding: 0.1rem;\n  margin: 0 auto 0.3rem;\n  cursor: pointer;\n  color: #40444f;\n  font-size: 0.3rem;\n  border: 5px dashed #616778;\n  border-radius: 10px;\n}\n.page-img .drag-img img {\n  max-height: 100%;\n  max-width: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _require2 = __webpack_require__(20);

	var remote = _require2.remote;
	var clipboard = _require2.clipboard;
	var nativeImage = _require2.nativeImage;

	var fs = __webpack_require__(34);
	var mime = _require('mime');
	var Promise = window.Promise;

	function toDataURL(files) {
	    return Promise.all(files.map(function (file) {
	        var path = typeof file === "string" ? file : file.path;

	        var defer = Promise.defer();

	        fs.readFile(path, function (err, data) {
	            if (err) {
	                defer.reject(err);
	            } else {
	                data = data.toString('base64');
	                defer.resolve('data:' + mime.lookup(path) + ';base64,' + data);
	            }
	        });

	        return defer.promise;
	    })).then(function (data) {
	        return data.join('\n\n\n');
	    }).catch(function (e) {
	        toastr.error(e.toString());
	    });
	}

	exports.default = {
	    data: function data() {
	        return {
	            output: ''
	        };
	    },

	    watch: {
	        output: function output(val) {
	            if (val) {
	                clipboard.writeText(val);
	                toastr.success(g_config.copySuccessMsg);
	            }
	        }
	    },

	    computed: {
	        images: function images() {
	            return this.output.split('\n\n\n');
	        }
	    },

	    methods: {
	        select: function select() {
	            var _this = this;

	            var files = remote.dialog.showOpenDialog({
	                filters: [{ name: 'ALL Files', extensions: ['*'] }],
	                properties: ['openFile', 'multiSelections']
	            });
	            if (files && files.length) {
	                toDataURL(files).then(function (data) {
	                    _this.output = data;
	                });
	            }
	        }
	    },

	    ready: function ready() {
	        var _this2 = this;

	        var input = this.$els.input;

	        input.ondragover = function () {
	            return false;
	        };
	        input.ondragleave = input.ondragend = function () {
	            return false;
	        };

	        input.ondrop = function (e) {
	            e.preventDefault();

	            var files = e.dataTransfer.files;
	            if (files && files.length) {
	                files = [].slice.call(files);
	                toDataURL(files).then(function (data) {
	                    _this2.output = data;
	                });
	            }

	            return false;
	        };
	    },

	    beforeDestroy: function beforeDestroy() {
	        var input = this.$els.input;
	        input.ondragover = input.ondragleave = input.ondragend = input.ondrop = null;
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-img\">\n    <div class=\"drag-img\" v-on:click=\"select\" v-el:input>\n        <div v-show=\"output\">\n            <img v-show=\"images.length === 1\" :src=\"images[0]\" alt=\"\">\n            <span v-else>已选择{{ images.length }}张图片</span>\n        </div>\n        <span v-else>拖入/选择 图片</span>\n    </div>\n\n    <textarea v-model=\"output\" v-show=\"output\"></textarea>\n</div>\n";

/***/ },
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var extend = __webpack_require__(41);
	var qrcodeAlgObjCache = [];
	var QRCodeAlg = __webpack_require__(42);

	/**
	* 计算矩阵点的前景色
	* @param {Obj} config
	* @param {Number} config.row 点x坐标
	* @param {Number} config.col 点y坐标
	* @param {Number} config.count 矩阵大小
	* @param {Number} config.options 组件的options
	* @return {String}
	*/
	var getForeGround = function getForeGround(config) {
	    var options = config.options;
	    if (options.pdground && (config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 || config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 || config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2)) {
	        return options.pdground;
	    }
	    return options.foreground;
	};
	/**
	* 点是否在Position Detection
	* @param  {row} 矩阵行
	* @param  {col} 矩阵列
	* @param  {count} 矩阵大小
	* @return {Boolean}
	*/
	var inPositionDetection = function inPositionDetection(row, col, count) {
	    if (row < 7 && col < 7 || row > count - 8 && col < 7 || row < 7 && col > count - 8) {
	        return true;
	    }
	    return false;
	};
	/**
	* 获取当前屏幕的设备像素比 devicePixelRatio/backingStore
	* @param {context} 当前 canvas 上下文，可以为 window
	*/
	var getPixelRatio = function getPixelRatio(context) {
	    var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;

	    return (window.devicePixelRatio || 1) / backingStore;
	};

	/**
	 * 二维码构造函数，主要用于绘制
	 * @param  {参数列表} opt 传递参数
	 * @return {}
	 */
	var qrcode = function qrcode(opt) {
	    if (typeof opt === 'string') {
	        // 只编码ASCII字符串
	        opt = {
	            text: opt
	        };
	    }
	    //设置默认参数
	    this.options = extend({}, {
	        text: '',
	        render: '',
	        size: 256,
	        correctLevel: 3,
	        background: '#ffffff',
	        foreground: '#000000',
	        image: '',
	        imageSize: 30
	    }, opt);

	    //使用QRCodeAlg创建二维码结构
	    var qrCodeAlg = null;
	    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
	        if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
	            qrCodeAlg = qrcodeAlgObjCache[i].obj;
	            break;
	        }
	    }

	    if (i == l) {
	        qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
	        qrcodeAlgObjCache.push({ text: this.options.text, correctLevel: this.options.correctLevel, obj: qrCodeAlg });
	    }

	    if (this.options.render) {
	        switch (this.options.render) {
	            case 'canvas':
	                return this.createCanvas(qrCodeAlg);
	            case 'table':
	                return this.createTable(qrCodeAlg);
	            case 'svg':
	                return this.createSVG(qrCodeAlg);
	            default:
	                return this.createDefault(qrCodeAlg);
	        }
	    }
	    return this.createDefault(qrCodeAlg);
	};

	extend(qrcode.prototype, {
	    // default create  canvas -> svg -> table

	    createDefault: function createDefault(qrCodeAlg) {
	        var canvas = document.createElement('canvas');
	        if (canvas.getContext) {
	            return this.createCanvas(qrCodeAlg);
	        }
	        var SVG_NS = 'http://www.w3.org/2000/svg';
	        if (!!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect) {
	            return this.createSVG(qrCodeAlg);
	        }
	        return this.createTable(qrCodeAlg);
	    },

	    // canvas create
	    createCanvas: function createCanvas(qrCodeAlg) {
	        var options = this.options;
	        var canvas = document.createElement('canvas');
	        var ctx = canvas.getContext('2d');
	        var count = qrCodeAlg.getModuleCount();
	        var ratio = getPixelRatio(ctx);
	        var size = options.size;
	        var ratioSize = size * ratio;
	        var ratioImgSize = options.imageSize * ratio;
	        // preload img
	        var loadImage = function loadImage(url, callback) {
	            var img = new Image();
	            img.src = url;
	            img.onload = function () {
	                callback(this);
	                img.onload = null;
	            };
	        };

	        //计算每个点的长宽
	        var tileW = (ratioSize / count).toPrecision(4);
	        var tileH = (ratioSize / count).toPrecision(4);

	        canvas.width = ratioSize;
	        canvas.height = ratioSize;

	        //绘制
	        for (var row = 0; row < count; row++) {
	            for (var col = 0; col < count; col++) {
	                var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
	                var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
	                var foreground = getForeGround({
	                    row: row,
	                    col: col,
	                    count: count,
	                    options: options
	                });
	                ctx.fillStyle = qrCodeAlg.modules[row][col] ? foreground : options.background;
	                ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
	            }
	        }
	        if (options.image) {
	            loadImage(options.image, function (img) {
	                var x = ((ratioSize - ratioImgSize) / 2).toFixed(2);
	                var y = ((ratioSize - ratioImgSize) / 2).toFixed(2);
	                ctx.drawImage(img, x, y, ratioImgSize, ratioImgSize);
	            });
	        }
	        canvas.style.width = size + 'px';
	        canvas.style.height = size + 'px';
	        return canvas;
	    },

	    // table create
	    createTable: function createTable(qrCodeAlg) {
	        var options = this.options;
	        var count = qrCodeAlg.getModuleCount();

	        // 计算每个节点的长宽；取整，防止点之间出现分离
	        var tileW = Math.floor(options.size / count);
	        var tileH = Math.floor(options.size / count);
	        if (tileW <= 0) {
	            tileW = count < 80 ? 2 : 1;
	        }
	        if (tileH <= 0) {
	            tileH = count < 80 ? 2 : 1;
	        }

	        //创建table节点
	        //重算码大小
	        var s = [];
	        s.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:' + options.background + ';">');

	        // 绘制二维码
	        for (var row = 0; row < count; row++) {
	            s.push('<tr style="border:0px; margin:0px; padding:0px; height:' + tileH + 'px">');
	            for (var col = 0; col < count; col++) {
	                var foreground = getForeGround({
	                    row: row,
	                    col: col,
	                    count: count,
	                    options: options
	                });
	                if (qrCodeAlg.modules[row][col]) {
	                    s.push('<td style="border:0px; margin:0px; padding:0px; width:' + tileW + 'px; background-color:' + foreground + '"></td>');
	                } else {
	                    s.push('<td style="border:0px; margin:0px; padding:0px; width:' + tileW + 'px; background-color:' + options.background + '"></td>');
	                }
	            }
	            s.push('</tr>');
	        }
	        s.push('</table>');

	        if (options.image) {
	            // 计算表格的总大小
	            var width = tileW * count;
	            var height = tileH * count;
	            var x = ((width - options.imageSize) / 2).toFixed(2);
	            var y = ((height - options.imageSize) / 2).toFixed(2);
	            s.unshift('<div style=\'position:relative;\n                        width:' + width + 'px;\n                        height:' + height + 'px;\'>');
	            s.push('<img src=\'' + options.image + '\'\n                        width=\'' + options.imageSize + '\'\n                        height=\'' + options.imageSize + '\'\n                        style=\'position:absolute;left:' + x + 'px; top:' + y + 'px;\'>');
	            s.push('</div>');
	        }

	        var span = document.createElement('span');
	        span.innerHTML = s.join('');

	        return span.firstChild;
	    },

	    // create svg
	    createSVG: function createSVG(qrCodeAlg) {
	        var options = this.options;
	        var count = qrCodeAlg.getModuleCount();
	        var scale = count / options.size;

	        // create svg
	        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	        svg.setAttribute('width', options.size);
	        svg.setAttribute('height', options.size);
	        svg.setAttribute('viewBox', '0 0 ' + count + ' ' + count);

	        for (var row = 0; row < count; row++) {
	            for (var col = 0; col < count; col++) {
	                var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	                var foreground = getForeGround({
	                    row: row,
	                    col: col,
	                    count: count,
	                    options: options
	                });
	                rect.setAttribute('x', col);
	                rect.setAttribute('y', row);
	                rect.setAttribute('width', 1);
	                rect.setAttribute('height', 1);
	                rect.setAttribute('stroke-width', 0);
	                if (qrCodeAlg.modules[row][col]) {
	                    rect.setAttribute('fill', foreground);
	                } else {
	                    rect.setAttribute('fill', options.background);
	                }
	                svg.appendChild(rect);
	            }
	        }

	        // create image
	        if (options.image) {
	            var img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
	            img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.image);
	            img.setAttribute('x', ((count - options.imageSize * scale) / 2).toFixed(2));
	            img.setAttribute('y', ((count - options.imageSize * scale) / 2).toFixed(2));
	            img.setAttribute('width', options.imageSize * scale);
	            img.setAttribute('height', options.imageSize * scale);
	            svg.appendChild(img);
	        }

	        return svg;
	    }
	});
	module.exports = qrcode;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * 获取单个字符的utf8编码
	 * unicode BMP平面约65535个字符
	 * @param {num} code
	 * return {array}
	 */
	function unicodeFormat8(code) {
	    // 1 byte
	    var c0, c1, c2;
	    if (code < 128) {
	        return [code];
	        // 2 bytes
	    } else if (code < 2048) {
	            c0 = 192 + (code >> 6);
	            c1 = 128 + (code & 63);
	            return [c0, c1];
	            // 3 bytes
	        } else {
	                c0 = 224 + (code >> 12);
	                c1 = 128 + (code >> 6 & 63);
	                c2 = 128 + (code & 63);
	                return [c0, c1, c2];
	            }
	}

	/**
	 * 获取字符串的utf8编码字节串
	 * @param {string} string
	 * @return {array}
	 */
	function getUTF8Bytes(string) {
	    var utf8codes = [];
	    for (var i = 0; i < string.length; i++) {
	        var code = string.charCodeAt(i);
	        var utf8 = unicodeFormat8(code);
	        for (var j = 0; j < utf8.length; j++) {
	            utf8codes.push(utf8[j]);
	        }
	    }
	    return utf8codes;
	}

	/**
	 * 二维码算法实现
	 * @param {string} data              要编码的信息字符串
	 * @param {num} errorCorrectLevel 纠错等级
	 */
	function QRCodeAlg(data, errorCorrectLevel) {
	    this.typeNumber = -1; //版本
	    this.errorCorrectLevel = errorCorrectLevel;
	    this.modules = null; //二维矩阵，存放最终结果
	    this.moduleCount = 0; //矩阵大小
	    this.dataCache = null; //数据缓存
	    this.rsBlocks = null; //版本数据信息
	    this.totalDataCount = -1; //可使用的数据量
	    this.data = data;
	    this.utf8bytes = getUTF8Bytes(data);
	    this.make();
	}

	QRCodeAlg.prototype = {
	    constructor: QRCodeAlg,
	    /**
	     * 获取二维码矩阵大小
	     * @return {num} 矩阵大小
	     */
	    getModuleCount: function getModuleCount() {
	        return this.moduleCount;
	    },
	    /**
	     * 编码
	     */
	    make: function make() {
	        this.getRightType();
	        this.dataCache = this.createData();
	        this.createQrcode();
	    },
	    /**
	     * 设置二位矩阵功能图形
	     * @param  {bool} test 表示是否在寻找最好掩膜阶段
	     * @param  {num} maskPattern 掩膜的版本
	     */
	    makeImpl: function makeImpl(maskPattern) {

	        this.moduleCount = this.typeNumber * 4 + 17;
	        this.modules = new Array(this.moduleCount);

	        for (var row = 0; row < this.moduleCount; row++) {

	            this.modules[row] = new Array(this.moduleCount);
	        }
	        this.setupPositionProbePattern(0, 0);
	        this.setupPositionProbePattern(this.moduleCount - 7, 0);
	        this.setupPositionProbePattern(0, this.moduleCount - 7);
	        this.setupPositionAdjustPattern();
	        this.setupTimingPattern();
	        this.setupTypeInfo(true, maskPattern);

	        if (this.typeNumber >= 7) {
	            this.setupTypeNumber(true);
	        }
	        this.mapData(this.dataCache, maskPattern);
	    },
	    /**
	     * 设置二维码的位置探测图形
	     * @param  {num} row 探测图形的中心横坐标
	     * @param  {num} col 探测图形的中心纵坐标
	     */
	    setupPositionProbePattern: function setupPositionProbePattern(row, col) {

	        for (var r = -1; r <= 7; r++) {

	            if (row + r <= -1 || this.moduleCount <= row + r) continue;

	            for (var c = -1; c <= 7; c++) {

	                if (col + c <= -1 || this.moduleCount <= col + c) continue;

	                if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
	                    this.modules[row + r][col + c] = true;
	                } else {
	                    this.modules[row + r][col + c] = false;
	                }
	            }
	        }
	    },
	    /**
	     * 创建二维码
	     * @return {[type]} [description]
	     */
	    createQrcode: function createQrcode() {

	        var minLostPoint = 0;
	        var pattern = 0;
	        var bestModules = null;

	        for (var i = 0; i < 8; i++) {

	            this.makeImpl(i);

	            var lostPoint = QRUtil.getLostPoint(this);
	            if (i == 0 || minLostPoint > lostPoint) {
	                minLostPoint = lostPoint;
	                pattern = i;
	                bestModules = this.modules;
	            }
	        }
	        this.modules = bestModules;
	        this.setupTypeInfo(false, pattern);

	        if (this.typeNumber >= 7) {
	            this.setupTypeNumber(false);
	        }
	    },
	    /**
	     * 设置定位图形
	     * @return {[type]} [description]
	     */
	    setupTimingPattern: function setupTimingPattern() {

	        for (var r = 8; r < this.moduleCount - 8; r++) {
	            if (this.modules[r][6] != null) {
	                continue;
	            }
	            this.modules[r][6] = r % 2 == 0;

	            if (this.modules[6][r] != null) {
	                continue;
	            }
	            this.modules[6][r] = r % 2 == 0;
	        }
	    },
	    /**
	     * 设置矫正图形
	     * @return {[type]} [description]
	     */
	    setupPositionAdjustPattern: function setupPositionAdjustPattern() {

	        var pos = QRUtil.getPatternPosition(this.typeNumber);

	        for (var i = 0; i < pos.length; i++) {

	            for (var j = 0; j < pos.length; j++) {

	                var row = pos[i];
	                var col = pos[j];

	                if (this.modules[row][col] != null) {
	                    continue;
	                }

	                for (var r = -2; r <= 2; r++) {

	                    for (var c = -2; c <= 2; c++) {

	                        if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
	                            this.modules[row + r][col + c] = true;
	                        } else {
	                            this.modules[row + r][col + c] = false;
	                        }
	                    }
	                }
	            }
	        }
	    },
	    /**
	     * 设置版本信息（7以上版本才有）
	     * @param  {bool} test 是否处于判断最佳掩膜阶段
	     * @return {[type]}      [description]
	     */
	    setupTypeNumber: function setupTypeNumber(test) {

	        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

	        for (var i = 0; i < 18; i++) {
	            var mod = !test && (bits >> i & 1) == 1;
	            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	        }
	    },
	    /**
	     * 设置格式信息（纠错等级和掩膜版本）
	     * @param  {bool} test
	     * @param  {num} maskPattern 掩膜版本
	     * @return {}
	     */
	    setupTypeInfo: function setupTypeInfo(test, maskPattern) {

	        var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
	        var bits = QRUtil.getBCHTypeInfo(data);

	        // vertical
	        for (var i = 0; i < 15; i++) {

	            var mod = !test && (bits >> i & 1) == 1;

	            if (i < 6) {
	                this.modules[i][8] = mod;
	            } else if (i < 8) {
	                this.modules[i + 1][8] = mod;
	            } else {
	                this.modules[this.moduleCount - 15 + i][8] = mod;
	            }

	            // horizontal
	            var mod = !test && (bits >> i & 1) == 1;

	            if (i < 8) {
	                this.modules[8][this.moduleCount - i - 1] = mod;
	            } else if (i < 9) {
	                this.modules[8][15 - i - 1 + 1] = mod;
	            } else {
	                this.modules[8][15 - i - 1] = mod;
	            }
	        }

	        // fixed module
	        this.modules[this.moduleCount - 8][8] = !test;
	    },
	    /**
	     * 数据编码
	     * @return {[type]} [description]
	     */
	    createData: function createData() {
	        var buffer = new QRBitBuffer();
	        var lengthBits = this.typeNumber > 9 ? 16 : 8;
	        buffer.put(4, 4); //添加模式
	        buffer.put(this.utf8bytes.length, lengthBits);
	        for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
	            buffer.put(this.utf8bytes[i], 8);
	        }
	        if (buffer.length + 4 <= this.totalDataCount * 8) {
	            buffer.put(0, 4);
	        }

	        // padding
	        while (buffer.length % 8 != 0) {
	            buffer.putBit(false);
	        }

	        // padding
	        while (true) {

	            if (buffer.length >= this.totalDataCount * 8) {
	                break;
	            }
	            buffer.put(QRCodeAlg.PAD0, 8);

	            if (buffer.length >= this.totalDataCount * 8) {
	                break;
	            }
	            buffer.put(QRCodeAlg.PAD1, 8);
	        }
	        return this.createBytes(buffer);
	    },
	    /**
	     * 纠错码编码
	     * @param  {buffer} buffer 数据编码
	     * @return {[type]}
	     */
	    createBytes: function createBytes(buffer) {

	        var offset = 0;

	        var maxDcCount = 0;
	        var maxEcCount = 0;

	        var length = this.rsBlock.length / 3;

	        var rsBlocks = new Array();

	        for (var i = 0; i < length; i++) {

	            var count = this.rsBlock[i * 3 + 0];
	            var totalCount = this.rsBlock[i * 3 + 1];
	            var dataCount = this.rsBlock[i * 3 + 2];

	            for (var j = 0; j < count; j++) {
	                rsBlocks.push([dataCount, totalCount]);
	            }
	        }

	        var dcdata = new Array(rsBlocks.length);
	        var ecdata = new Array(rsBlocks.length);

	        for (var r = 0; r < rsBlocks.length; r++) {

	            var dcCount = rsBlocks[r][0];
	            var ecCount = rsBlocks[r][1] - dcCount;

	            maxDcCount = Math.max(maxDcCount, dcCount);
	            maxEcCount = Math.max(maxEcCount, ecCount);

	            dcdata[r] = new Array(dcCount);

	            for (var i = 0; i < dcdata[r].length; i++) {
	                dcdata[r][i] = 0xff & buffer.buffer[i + offset];
	            }
	            offset += dcCount;

	            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
	            var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);

	            var modPoly = rawPoly.mod(rsPoly);
	            ecdata[r] = new Array(rsPoly.getLength() - 1);
	            for (var i = 0; i < ecdata[r].length; i++) {
	                var modIndex = i + modPoly.getLength() - ecdata[r].length;
	                ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
	            }
	        }

	        var data = new Array(this.totalDataCount);
	        var index = 0;

	        for (var i = 0; i < maxDcCount; i++) {
	            for (var r = 0; r < rsBlocks.length; r++) {
	                if (i < dcdata[r].length) {
	                    data[index++] = dcdata[r][i];
	                }
	            }
	        }

	        for (var i = 0; i < maxEcCount; i++) {
	            for (var r = 0; r < rsBlocks.length; r++) {
	                if (i < ecdata[r].length) {
	                    data[index++] = ecdata[r][i];
	                }
	            }
	        }

	        return data;
	    },
	    /**
	     * 布置模块，构建最终信息
	     * @param  {} data
	     * @param  {} maskPattern
	     * @return {}
	     */
	    mapData: function mapData(data, maskPattern) {

	        var inc = -1;
	        var row = this.moduleCount - 1;
	        var bitIndex = 7;
	        var byteIndex = 0;

	        for (var col = this.moduleCount - 1; col > 0; col -= 2) {

	            if (col == 6) col--;

	            while (true) {

	                for (var c = 0; c < 2; c++) {

	                    if (this.modules[row][col - c] == null) {

	                        var dark = false;

	                        if (byteIndex < data.length) {
	                            dark = (data[byteIndex] >>> bitIndex & 1) == 1;
	                        }

	                        var mask = QRUtil.getMask(maskPattern, row, col - c);

	                        if (mask) {
	                            dark = !dark;
	                        }

	                        this.modules[row][col - c] = dark;
	                        bitIndex--;

	                        if (bitIndex == -1) {
	                            byteIndex++;
	                            bitIndex = 7;
	                        }
	                    }
	                }

	                row += inc;

	                if (row < 0 || this.moduleCount <= row) {
	                    row -= inc;
	                    inc = -inc;
	                    break;
	                }
	            }
	        }
	    }

	};
	/**
	 * 填充字段
	 */
	QRCodeAlg.PAD0 = 0xEC;
	QRCodeAlg.PAD1 = 0x11;

	//---------------------------------------------------------------------
	// 纠错等级对应的编码
	//---------------------------------------------------------------------

	var QRErrorCorrectLevel = [1, 0, 3, 2];

	//---------------------------------------------------------------------
	// 掩膜版本
	//---------------------------------------------------------------------

	var QRMaskPattern = {
	    PATTERN000: 0,
	    PATTERN001: 1,
	    PATTERN010: 2,
	    PATTERN011: 3,
	    PATTERN100: 4,
	    PATTERN101: 5,
	    PATTERN110: 6,
	    PATTERN111: 7
	};

	//---------------------------------------------------------------------
	// 工具类
	//---------------------------------------------------------------------

	var QRUtil = {

	    /*
	    每个版本矫正图形的位置
	     */
	    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],

	    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
	    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
	    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,

	    /*
	    BCH编码格式信息
	     */
	    getBCHTypeInfo: function getBCHTypeInfo(data) {
	        var d = data << 10;
	        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
	            d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
	        }
	        return (data << 10 | d) ^ QRUtil.G15_MASK;
	    },
	    /*
	    BCH编码版本信息
	     */
	    getBCHTypeNumber: function getBCHTypeNumber(data) {
	        var d = data << 12;
	        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
	            d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
	        }
	        return data << 12 | d;
	    },
	    /*
	    获取BCH位信息
	     */
	    getBCHDigit: function getBCHDigit(data) {

	        var digit = 0;

	        while (data != 0) {
	            digit++;
	            data >>>= 1;
	        }

	        return digit;
	    },
	    /*
	    获取版本对应的矫正图形位置
	     */
	    getPatternPosition: function getPatternPosition(typeNumber) {
	        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
	    },
	    /*
	    掩膜算法
	     */
	    getMask: function getMask(maskPattern, i, j) {

	        switch (maskPattern) {

	            case QRMaskPattern.PATTERN000:
	                return (i + j) % 2 == 0;
	            case QRMaskPattern.PATTERN001:
	                return i % 2 == 0;
	            case QRMaskPattern.PATTERN010:
	                return j % 3 == 0;
	            case QRMaskPattern.PATTERN011:
	                return (i + j) % 3 == 0;
	            case QRMaskPattern.PATTERN100:
	                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
	            case QRMaskPattern.PATTERN101:
	                return i * j % 2 + i * j % 3 == 0;
	            case QRMaskPattern.PATTERN110:
	                return (i * j % 2 + i * j % 3) % 2 == 0;
	            case QRMaskPattern.PATTERN111:
	                return (i * j % 3 + (i + j) % 2) % 2 == 0;

	            default:
	                throw new Error("bad maskPattern:" + maskPattern);
	        }
	    },
	    /*
	    获取RS的纠错多项式
	     */
	    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {

	        var a = new QRPolynomial([1], 0);

	        for (var i = 0; i < errorCorrectLength; i++) {
	            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
	        }

	        return a;
	    },
	    /*
	    获取评价
	     */
	    getLostPoint: function getLostPoint(qrCode) {

	        var moduleCount = qrCode.getModuleCount(),
	            lostPoint = 0,
	            darkCount = 0;

	        for (var row = 0; row < moduleCount; row++) {

	            var sameCount = 0;
	            var head = qrCode.modules[row][0];

	            for (var col = 0; col < moduleCount; col++) {

	                var current = qrCode.modules[row][col];

	                //level 3 评价
	                if (col < moduleCount - 6) {
	                    if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
	                        if (col < moduleCount - 10) {
	                            if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
	                                lostPoint += 40;
	                            }
	                        } else if (col > 3) {
	                            if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
	                                lostPoint += 40;
	                            }
	                        }
	                    }
	                }

	                //level 2 评价
	                if (row < moduleCount - 1 && col < moduleCount - 1) {
	                    var count = 0;
	                    if (current) count++;
	                    if (qrCode.modules[row + 1][col]) count++;
	                    if (qrCode.modules[row][col + 1]) count++;
	                    if (qrCode.modules[row + 1][col + 1]) count++;
	                    if (count == 0 || count == 4) {
	                        lostPoint += 3;
	                    }
	                }

	                //level 1 评价
	                if (head ^ current) {
	                    sameCount++;
	                } else {
	                    head = current;
	                    if (sameCount >= 5) {
	                        lostPoint += 3 + sameCount - 5;
	                    }
	                    sameCount = 1;
	                }

	                //level 4 评价
	                if (current) {
	                    darkCount++;
	                }
	            }
	        }

	        for (var col = 0; col < moduleCount; col++) {

	            var sameCount = 0;
	            var head = qrCode.modules[0][col];

	            for (var row = 0; row < moduleCount; row++) {

	                var current = qrCode.modules[row][col];

	                //level 3 评价
	                if (row < moduleCount - 6) {
	                    if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
	                        if (row < moduleCount - 10) {
	                            if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
	                                lostPoint += 40;
	                            }
	                        } else if (row > 3) {
	                            if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
	                                lostPoint += 40;
	                            }
	                        }
	                    }
	                }

	                //level 1 评价
	                if (head ^ current) {
	                    sameCount++;
	                } else {
	                    head = current;
	                    if (sameCount >= 5) {
	                        lostPoint += 3 + sameCount - 5;
	                    }
	                    sameCount = 1;
	                }
	            }
	        }

	        // LEVEL4

	        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	        lostPoint += ratio * 10;

	        return lostPoint;
	    }

	};

	//---------------------------------------------------------------------
	// QRMath使用的数学工具
	//---------------------------------------------------------------------

	var QRMath = {
	    /*
	    将n转化为a^m
	     */
	    glog: function glog(n) {

	        if (n < 1) {
	            throw new Error("glog(" + n + ")");
	        }

	        return QRMath.LOG_TABLE[n];
	    },
	    /*
	    将a^m转化为n
	     */
	    gexp: function gexp(n) {

	        while (n < 0) {
	            n += 255;
	        }

	        while (n >= 256) {
	            n -= 255;
	        }

	        return QRMath.EXP_TABLE[n];
	    },

	    EXP_TABLE: new Array(256),

	    LOG_TABLE: new Array(256)

	};

	for (var i = 0; i < 8; i++) {
	    QRMath.EXP_TABLE[i] = 1 << i;
	}
	for (var i = 8; i < 256; i++) {
	    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
	}
	for (var i = 0; i < 255; i++) {
	    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
	}

	//---------------------------------------------------------------------
	// QRPolynomial 多项式
	//---------------------------------------------------------------------
	/**
	 * 多项式类
	 * @param {Array} num   系数
	 * @param {num} shift a^shift
	 */
	function QRPolynomial(num, shift) {

	    if (num.length == undefined) {
	        throw new Error(num.length + "/" + shift);
	    }

	    var offset = 0;

	    while (offset < num.length && num[offset] == 0) {
	        offset++;
	    }

	    this.num = new Array(num.length - offset + shift);
	    for (var i = 0; i < num.length - offset; i++) {
	        this.num[i] = num[i + offset];
	    }
	}

	QRPolynomial.prototype = {

	    get: function get(index) {
	        return this.num[index];
	    },

	    getLength: function getLength() {
	        return this.num.length;
	    },
	    /**
	     * 多项式乘法
	     * @param  {QRPolynomial} e 被乘多项式
	     * @return {[type]}   [description]
	     */
	    multiply: function multiply(e) {

	        var num = new Array(this.getLength() + e.getLength() - 1);

	        for (var i = 0; i < this.getLength(); i++) {
	            for (var j = 0; j < e.getLength(); j++) {
	                num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
	            }
	        }

	        return new QRPolynomial(num, 0);
	    },
	    /**
	     * 多项式模运算
	     * @param  {QRPolynomial} e 模多项式
	     * @return {}
	     */
	    mod: function mod(e) {
	        var tl = this.getLength(),
	            el = e.getLength();
	        if (tl - el < 0) {
	            return this;
	        }
	        var num = new Array(tl);
	        for (var i = 0; i < tl; i++) {
	            num[i] = this.get(i);
	        }
	        while (num.length >= el) {
	            var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

	            for (var i = 0; i < e.getLength(); i++) {
	                num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
	            }
	            while (num[0] == 0) {
	                num.shift();
	            }
	        }
	        return new QRPolynomial(num, 0);
	    }
	};

	//---------------------------------------------------------------------
	// RS_BLOCK_TABLE
	//---------------------------------------------------------------------
	/*
	二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
	 */
	var RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],

	// 2
	[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],

	// 3
	[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],

	// 4
	[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],

	// 5
	[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],

	// 6
	[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],

	// 7
	[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],

	// 8
	[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],

	// 9
	[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],

	// 10
	[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

	/**
	 * 根据数据获取对应版本
	 * @return {[type]} [description]
	 */
	QRCodeAlg.prototype.getRightType = function () {
	    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
	        var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
	        if (rsBlock == undefined) {
	            throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
	        }
	        var length = rsBlock.length / 3;
	        var totalDataCount = 0;
	        for (var i = 0; i < length; i++) {
	            var count = rsBlock[i * 3 + 0];
	            var dataCount = rsBlock[i * 3 + 2];
	            totalDataCount += dataCount * count;
	        }

	        var lengthBytes = typeNumber > 9 ? 2 : 1;
	        if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
	            this.typeNumber = typeNumber;
	            this.rsBlock = rsBlock;
	            this.totalDataCount = totalDataCount;
	            break;
	        }
	    }
	};

	//---------------------------------------------------------------------
	// QRBitBuffer
	//---------------------------------------------------------------------

	function QRBitBuffer() {
	    this.buffer = new Array();
	    this.length = 0;
	}

	QRBitBuffer.prototype = {

	    get: function get(index) {
	        var bufIndex = Math.floor(index / 8);
	        return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
	    },

	    put: function put(num, length) {
	        for (var i = 0; i < length; i++) {
	            this.putBit(num >>> length - i - 1 & 1);
	        }
	    },

	    putBit: function putBit(bit) {

	        var bufIndex = Math.floor(this.length / 8);
	        if (this.buffer.length <= bufIndex) {
	            this.buffer.push(0);
	        }

	        if (bit) {
	            this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
	        }

	        this.length++;
	    }
	};
	module.exports = QRCodeAlg;

/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(45)
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/js.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./js.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./js.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./js.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _require = __webpack_require__(20);

	var clipboard = _require.clipboard;

	var UglifyJS = __webpack_require__(48);

	exports.default = {
	    data: function data() {
	        return {
	            input: ''
	        };
	    },
	    methods: {
	        compress: function compress() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                var ast = UglifyJS.parse(input);
	                ast.figure_out_scope();
	                var compressor = UglifyJS.Compressor({});
	                ast = ast.transform(compressor);

	                ast.figure_out_scope();
	                ast.compute_char_frequency();
	                ast.mangle_names();

	                this.input = ast.print_to_string({
	                    ascii_only: true
	                });
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },
	        pretty: function pretty() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                var ast = UglifyJS.parse(input);
	                ast.figure_out_scope();

	                this.input = ast.print_to_string({
	                    beautify: true
	                });

	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },

	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};// uglifyjs  --self -b -o src/lib/uglify-js.js
	(function(exports,global){"use strict";function array_to_hash(a){var ret=Object.create(null);for(var i=0;i<a.length;++i){ret[a[i]]=true;}return ret;}function slice(a,start){return Array.prototype.slice.call(a,start||0);}function characters(str){return str.split("");}function member(name,array){for(var i=array.length;--i>=0;){if(array[i]==name)return true;}return false;}function find_if(func,array){for(var i=0,n=array.length;i<n;++i){if(func(array[i]))return array[i];}}function repeat_string(str,i){if(i<=0)return"";if(i==1)return str;var d=repeat_string(str,i>>1);d+=d;if(i&1)d+=str;return d;}function DefaultsError(msg,defs){Error.call(this,msg);this.msg=msg;this.defs=defs;}DefaultsError.prototype=Object.create(Error.prototype);DefaultsError.prototype.constructor=DefaultsError;DefaultsError.croak=function(msg,defs){throw new DefaultsError(msg,defs);};function defaults(args,defs,croak){if(args===true)args={};var ret=args||{};if(croak)for(var i in ret){if(ret.hasOwnProperty(i)&&!defs.hasOwnProperty(i))DefaultsError.croak("`"+i+"` is not a supported option",defs);}for(var i in defs){if(defs.hasOwnProperty(i)){ret[i]=args&&args.hasOwnProperty(i)?args[i]:defs[i];}}return ret;}function merge(obj,ext){var count=0;for(var i in ext){if(ext.hasOwnProperty(i)){obj[i]=ext[i];count++;}}return count;}function noop(){}var MAP=function(){function MAP(a,f,backwards){var ret=[],top=[],i;function doit(){var val=f(a[i],i);var is_last=val instanceof Last;if(is_last)val=val.v;if(val instanceof AtTop){val=val.v;if(val instanceof Splice){top.push.apply(top,backwards?val.v.slice().reverse():val.v);}else{top.push(val);}}else if(val!==skip){if(val instanceof Splice){ret.push.apply(ret,backwards?val.v.slice().reverse():val.v);}else{ret.push(val);}}return is_last;}if(a instanceof Array){if(backwards){for(i=a.length;--i>=0;){if(doit())break;}ret.reverse();top.reverse();}else{for(i=0;i<a.length;++i){if(doit())break;}}}else{for(i in a){if(a.hasOwnProperty(i))if(doit())break;}}return top.concat(ret);}MAP.at_top=function(val){return new AtTop(val);};MAP.splice=function(val){return new Splice(val);};MAP.last=function(val){return new Last(val);};var skip=MAP.skip={};function AtTop(val){this.v=val;}function Splice(val){this.v=val;}function Last(val){this.v=val;}return MAP;}();function push_uniq(array,el){if(array.indexOf(el)<0)array.push(el);}function string_template(text,props){return text.replace(/\{(.+?)\}/g,function(str,p){return props[p];});}function remove(array,el){for(var i=array.length;--i>=0;){if(array[i]===el)array.splice(i,1);}}function mergeSort(array,cmp){if(array.length<2)return array.slice();function merge(a,b){var r=[],ai=0,bi=0,i=0;while(ai<a.length&&bi<b.length){cmp(a[ai],b[bi])<=0?r[i++]=a[ai++]:r[i++]=b[bi++];}if(ai<a.length)r.push.apply(r,a.slice(ai));if(bi<b.length)r.push.apply(r,b.slice(bi));return r;}function _ms(a){if(a.length<=1)return a;var m=Math.floor(a.length/2),left=a.slice(0,m),right=a.slice(m);left=_ms(left);right=_ms(right);return merge(left,right);}return _ms(array);}function set_difference(a,b){return a.filter(function(el){return b.indexOf(el)<0;});}function set_intersection(a,b){return a.filter(function(el){return b.indexOf(el)>=0;});}function makePredicate(words){if(!(words instanceof Array))words=words.split(" ");var f="",cats=[];out:for(var i=0;i<words.length;++i){for(var j=0;j<cats.length;++j){if(cats[j][0].length==words[i].length){cats[j].push(words[i]);continue out;}}cats.push([words[i]]);}function compareTo(arr){if(arr.length==1)return f+="return str === "+JSON.stringify(arr[0])+";";f+="switch(str){";for(var i=0;i<arr.length;++i){f+="case "+JSON.stringify(arr[i])+":";}f+="return true}return false;";}if(cats.length>3){cats.sort(function(a,b){return b.length-a.length;});f+="switch(str.length){";for(var i=0;i<cats.length;++i){var cat=cats[i];f+="case "+cat[0].length+":";compareTo(cat);}f+="}";}else{compareTo(words);}return new Function("str",f);}function all(array,predicate){for(var i=array.length;--i>=0;){if(!predicate(array[i]))return false;}return true;}function Dictionary(){this._values=Object.create(null);this._size=0;}Dictionary.prototype={set:function set(key,val){if(!this.has(key))++this._size;this._values["$"+key]=val;return this;},add:function add(key,val){if(this.has(key)){this.get(key).push(val);}else{this.set(key,[val]);}return this;},get:function get(key){return this._values["$"+key];},del:function del(key){if(this.has(key)){--this._size;delete this._values["$"+key];}return this;},has:function has(key){return"$"+key in this._values;},each:function each(f){for(var i in this._values){f(this._values[i],i.substr(1));}},size:function size(){return this._size;},map:function map(f){var ret=[];for(var i in this._values){ret.push(f(this._values[i],i.substr(1)));}return ret;},toObject:function toObject(){return this._values;}};Dictionary.fromObject=function(obj){var dict=new Dictionary();dict._size=merge(dict._values,obj);return dict;};"use strict";function DEFNODE(type,props,methods,base){if(arguments.length<4)base=AST_Node;if(!props)props=[];else props=props.split(/\s+/);var self_props=props;if(base&&base.PROPS)props=props.concat(base.PROPS);var code="return function AST_"+type+"(props){ if (props) { ";for(var i=props.length;--i>=0;){code+="this."+props[i]+" = props."+props[i]+";";}var proto=base&&new base();if(proto&&proto.initialize||methods&&methods.initialize)code+="this.initialize();";code+="}}";var ctor=new Function(code)();if(proto){ctor.prototype=proto;ctor.BASE=base;}if(base)base.SUBCLASSES.push(ctor);ctor.prototype.CTOR=ctor;ctor.PROPS=props||null;ctor.SELF_PROPS=self_props;ctor.SUBCLASSES=[];if(type){ctor.prototype.TYPE=ctor.TYPE=type;}if(methods)for(i in methods){if(methods.hasOwnProperty(i)){if(/^\$/.test(i)){ctor[i.substr(1)]=methods[i];}else{ctor.prototype[i]=methods[i];}}}ctor.DEFMETHOD=function(name,method){this.prototype[name]=method;};exports["AST_"+type]=ctor;return ctor;}var AST_Token=DEFNODE("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null);var AST_Node=DEFNODE("Node","start end",{clone:function clone(){return new this.CTOR(this);},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function _walk(visitor){return visitor._visit(this);},walk:function walk(visitor){return this._walk(visitor);}},null);AST_Node.warn_function=null;AST_Node.warn=function(txt,props){if(AST_Node.warn_function)AST_Node.warn_function(string_template(txt,props));};var AST_Statement=DEFNODE("Statement",null,{$documentation:"Base class of all statements"});var AST_Debugger=DEFNODE("Debugger",null,{$documentation:"Represents a debugger statement"},AST_Statement);var AST_Directive=DEFNODE("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},AST_Statement);var AST_SimpleStatement=DEFNODE("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.body._walk(visitor);});}},AST_Statement);function walk_body(node,visitor){if(node.body instanceof AST_Statement){node.body._walk(visitor);}else node.body.forEach(function(stat){stat._walk(visitor);});}var AST_Block=DEFNODE("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function _walk(visitor){return visitor._visit(this,function(){walk_body(this,visitor);});}},AST_Statement);var AST_BlockStatement=DEFNODE("BlockStatement",null,{$documentation:"A block statement"},AST_Block);var AST_EmptyStatement=DEFNODE("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function _walk(visitor){return visitor._visit(this);}},AST_Statement);var AST_StatementWithBody=DEFNODE("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.body._walk(visitor);});}},AST_Statement);var AST_LabeledStatement=DEFNODE("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.label._walk(visitor);this.body._walk(visitor);});}},AST_StatementWithBody);var AST_IterationStatement=DEFNODE("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},AST_StatementWithBody);var AST_DWLoop=DEFNODE("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},AST_IterationStatement);var AST_Do=DEFNODE("Do",null,{$documentation:"A `do` statement",_walk:function _walk(visitor){return visitor._visit(this,function(){this.body._walk(visitor);this.condition._walk(visitor);});}},AST_DWLoop);var AST_While=DEFNODE("While",null,{$documentation:"A `while` statement",_walk:function _walk(visitor){return visitor._visit(this,function(){this.condition._walk(visitor);this.body._walk(visitor);});}},AST_DWLoop);var AST_For=DEFNODE("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function _walk(visitor){return visitor._visit(this,function(){if(this.init)this.init._walk(visitor);if(this.condition)this.condition._walk(visitor);if(this.step)this.step._walk(visitor);this.body._walk(visitor);});}},AST_IterationStatement);var AST_ForIn=DEFNODE("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.init._walk(visitor);this.object._walk(visitor);this.body._walk(visitor);});}},AST_IterationStatement);var AST_With=DEFNODE("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);this.body._walk(visitor);});}},AST_StatementWithBody);var AST_Scope=DEFNODE("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},AST_Block);var AST_Toplevel=DEFNODE("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function wrap_enclose(arg_parameter_pairs){var self=this;var args=[];var parameters=[];arg_parameter_pairs.forEach(function(pair){var splitAt=pair.lastIndexOf(":");args.push(pair.substr(0,splitAt));parameters.push(pair.substr(splitAt+1));});var wrapped_tl="(function("+parameters.join(",")+"){ '$ORIG'; })("+args.join(",")+")";wrapped_tl=parse(wrapped_tl);wrapped_tl=wrapped_tl.transform(new TreeTransformer(function before(node){if(node instanceof AST_Directive&&node.value=="$ORIG"){return MAP.splice(self.body);}}));return wrapped_tl;},wrap_commonjs:function wrap_commonjs(name,export_all){var self=this;var to_export=[];if(export_all){self.figure_out_scope();self.walk(new TreeWalker(function(node){if(node instanceof AST_SymbolDeclaration&&node.definition().global){if(!find_if(function(n){return n.name==node.name;},to_export))to_export.push(node);}}));}var wrapped_tl="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+name+"'] = exports; }({}, (function(){return this}())))";wrapped_tl=parse(wrapped_tl);wrapped_tl=wrapped_tl.transform(new TreeTransformer(function before(node){if(node instanceof AST_Directive){switch(node.value){case"$ORIG":return MAP.splice(self.body);case"$EXPORTS":var body=[];to_export.forEach(function(sym){body.push(new AST_SimpleStatement({body:new AST_Assign({left:new AST_Sub({expression:new AST_SymbolRef({name:"exports"}),property:new AST_String({value:sym.name})}),operator:"=",right:new AST_SymbolRef(sym)})}));});return MAP.splice(body);}}}));return wrapped_tl;}},AST_Scope);var AST_Lambda=DEFNODE("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function _walk(visitor){return visitor._visit(this,function(){if(this.name)this.name._walk(visitor);this.argnames.forEach(function(arg){arg._walk(visitor);});walk_body(this,visitor);});}},AST_Scope);var AST_Accessor=DEFNODE("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},AST_Lambda);var AST_Function=DEFNODE("Function",null,{$documentation:"A function expression"},AST_Lambda);var AST_Defun=DEFNODE("Defun",null,{$documentation:"A function definition"},AST_Lambda);var AST_Jump=DEFNODE("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},AST_Statement);var AST_Exit=DEFNODE("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function _walk(visitor){return visitor._visit(this,this.value&&function(){this.value._walk(visitor);});}},AST_Jump);var AST_Return=DEFNODE("Return",null,{$documentation:"A `return` statement"},AST_Exit);var AST_Throw=DEFNODE("Throw",null,{$documentation:"A `throw` statement"},AST_Exit);var AST_LoopControl=DEFNODE("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function _walk(visitor){return visitor._visit(this,this.label&&function(){this.label._walk(visitor);});}},AST_Jump);var AST_Break=DEFNODE("Break",null,{$documentation:"A `break` statement"},AST_LoopControl);var AST_Continue=DEFNODE("Continue",null,{$documentation:"A `continue` statement"},AST_LoopControl);var AST_If=DEFNODE("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.condition._walk(visitor);this.body._walk(visitor);if(this.alternative)this.alternative._walk(visitor);});}},AST_StatementWithBody);var AST_Switch=DEFNODE("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);walk_body(this,visitor);});}},AST_Block);var AST_SwitchBranch=DEFNODE("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},AST_Block);var AST_Default=DEFNODE("Default",null,{$documentation:"A `default` switch branch"},AST_SwitchBranch);var AST_Case=DEFNODE("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);walk_body(this,visitor);});}},AST_SwitchBranch);var AST_Try=DEFNODE("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function _walk(visitor){return visitor._visit(this,function(){walk_body(this,visitor);if(this.bcatch)this.bcatch._walk(visitor);if(this.bfinally)this.bfinally._walk(visitor);});}},AST_Block);var AST_Catch=DEFNODE("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.argname._walk(visitor);walk_body(this,visitor);});}},AST_Block);var AST_Finally=DEFNODE("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},AST_Block);var AST_Definitions=DEFNODE("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.definitions.forEach(function(def){def._walk(visitor);});});}},AST_Statement);var AST_Var=DEFNODE("Var",null,{$documentation:"A `var` statement"},AST_Definitions);var AST_Const=DEFNODE("Const",null,{$documentation:"A `const` statement"},AST_Definitions);var AST_VarDef=DEFNODE("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.name._walk(visitor);if(this.value)this.value._walk(visitor);});}});var AST_Call=DEFNODE("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);this.args.forEach(function(arg){arg._walk(visitor);});});}});var AST_New=DEFNODE("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},AST_Call);var AST_Seq=DEFNODE("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function $cons(x,y){var seq=new AST_Seq(x);seq.car=x;seq.cdr=y;return seq;},$from_array:function $from_array(array){if(array.length==0)return null;if(array.length==1)return array[0].clone();var list=null;for(var i=array.length;--i>=0;){list=AST_Seq.cons(array[i],list);}var p=list;while(p){if(p.cdr&&!p.cdr.cdr){p.cdr=p.cdr.car;break;}p=p.cdr;}return list;},to_array:function to_array(){var p=this,a=[];while(p){a.push(p.car);if(p.cdr&&!(p.cdr instanceof AST_Seq)){a.push(p.cdr);break;}p=p.cdr;}return a;},add:function add(node){var p=this;while(p){if(!(p.cdr instanceof AST_Seq)){var cell=AST_Seq.cons(p.cdr,node);return p.cdr=cell;}p=p.cdr;}},_walk:function _walk(visitor){return visitor._visit(this,function(){this.car._walk(visitor);if(this.cdr)this.cdr._walk(visitor);});}});var AST_PropAccess=DEFNODE("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}});var AST_Dot=DEFNODE("Dot",null,{$documentation:"A dotted property access expression",_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);});}},AST_PropAccess);var AST_Sub=DEFNODE("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);this.property._walk(visitor);});}},AST_PropAccess);var AST_Unary=DEFNODE("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.expression._walk(visitor);});}});var AST_UnaryPrefix=DEFNODE("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},AST_Unary);var AST_UnaryPostfix=DEFNODE("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},AST_Unary);var AST_Binary=DEFNODE("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.left._walk(visitor);this.right._walk(visitor);});}});var AST_Conditional=DEFNODE("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.condition._walk(visitor);this.consequent._walk(visitor);this.alternative._walk(visitor);});}});var AST_Assign=DEFNODE("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},AST_Binary);var AST_Array=DEFNODE("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.elements.forEach(function(el){el._walk(visitor);});});}});var AST_Object=DEFNODE("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function _walk(visitor){return visitor._visit(this,function(){this.properties.forEach(function(prop){prop._walk(visitor);});});}});var AST_ObjectProperty=DEFNODE("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",value:"[AST_Node] property value.  For setters and getters this is an AST_Function."},_walk:function _walk(visitor){return visitor._visit(this,function(){this.value._walk(visitor);});}});var AST_ObjectKeyVal=DEFNODE("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},AST_ObjectProperty);var AST_ObjectSetter=DEFNODE("ObjectSetter",null,{$documentation:"An object setter property"},AST_ObjectProperty);var AST_ObjectGetter=DEFNODE("ObjectGetter",null,{$documentation:"An object getter property"},AST_ObjectProperty);var AST_Symbol=DEFNODE("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"});var AST_SymbolAccessor=DEFNODE("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},AST_Symbol);var AST_SymbolDeclaration=DEFNODE("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",$propdoc:{init:"[AST_Node*/S] array of initializers for this declaration."}},AST_Symbol);var AST_SymbolVar=DEFNODE("SymbolVar",null,{$documentation:"Symbol defining a variable"},AST_SymbolDeclaration);var AST_SymbolConst=DEFNODE("SymbolConst",null,{$documentation:"A constant declaration"},AST_SymbolDeclaration);var AST_SymbolFunarg=DEFNODE("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},AST_SymbolVar);var AST_SymbolDefun=DEFNODE("SymbolDefun",null,{$documentation:"Symbol defining a function"},AST_SymbolDeclaration);var AST_SymbolLambda=DEFNODE("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},AST_SymbolDeclaration);var AST_SymbolCatch=DEFNODE("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},AST_SymbolDeclaration);var AST_Label=DEFNODE("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function initialize(){this.references=[];this.thedef=this;}},AST_Symbol);var AST_SymbolRef=DEFNODE("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},AST_Symbol);var AST_LabelRef=DEFNODE("LabelRef",null,{$documentation:"Reference to a label symbol"},AST_Symbol);var AST_This=DEFNODE("This",null,{$documentation:"The `this` symbol"},AST_Symbol);var AST_Constant=DEFNODE("Constant",null,{$documentation:"Base class for all constants",getValue:function getValue(){return this.value;}});var AST_String=DEFNODE("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},AST_Constant);var AST_Number=DEFNODE("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},AST_Constant);var AST_RegExp=DEFNODE("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},AST_Constant);var AST_Atom=DEFNODE("Atom",null,{$documentation:"Base class for atoms"},AST_Constant);var AST_Null=DEFNODE("Null",null,{$documentation:"The `null` atom",value:null},AST_Atom);var AST_NaN=DEFNODE("NaN",null,{$documentation:"The impossible value",value:0/0},AST_Atom);var AST_Undefined=DEFNODE("Undefined",null,{$documentation:"The `undefined` value",value:function(){}()},AST_Atom);var AST_Hole=DEFNODE("Hole",null,{$documentation:"A hole in an array",value:function(){}()},AST_Atom);var AST_Infinity=DEFNODE("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},AST_Atom);var AST_Boolean=DEFNODE("Boolean",null,{$documentation:"Base class for booleans"},AST_Atom);var AST_False=DEFNODE("False",null,{$documentation:"The `false` atom",value:false},AST_Boolean);var AST_True=DEFNODE("True",null,{$documentation:"The `true` atom",value:true},AST_Boolean);function TreeWalker(callback){this.visit=callback;this.stack=[];this.directives=Object.create(null);}TreeWalker.prototype={_visit:function _visit(node,descend){this.push(node);var ret=this.visit(node,descend?function(){descend.call(node);}:noop);if(!ret&&descend){descend.call(node);}this.pop(node);return ret;},parent:function parent(n){return this.stack[this.stack.length-2-(n||0)];},push:function push(node){if(node instanceof AST_Lambda){this.directives=Object.create(this.directives);}else if(node instanceof AST_Directive){this.directives[node.value]=this.directives[node.value]?"up":true;}this.stack.push(node);},pop:function pop(node){this.stack.pop();if(node instanceof AST_Lambda){this.directives=Object.getPrototypeOf(this.directives);}},self:function self(){return this.stack[this.stack.length-1];},find_parent:function find_parent(type){var stack=this.stack;for(var i=stack.length;--i>=0;){var x=stack[i];if(x instanceof type)return x;}},has_directive:function has_directive(type){var dir=this.directives[type];if(dir)return dir;var node=this.stack[this.stack.length-1];if(node instanceof AST_Scope){for(var i=0;i<node.body.length;++i){var st=node.body[i];if(!(st instanceof AST_Directive))break;if(st.value==type)return true;}}},in_boolean_context:function in_boolean_context(){var stack=this.stack;var i=stack.length,self=stack[--i];while(i>0){var p=stack[--i];if(p instanceof AST_If&&p.condition===self||p instanceof AST_Conditional&&p.condition===self||p instanceof AST_DWLoop&&p.condition===self||p instanceof AST_For&&p.condition===self||p instanceof AST_UnaryPrefix&&p.operator=="!"&&p.expression===self){return true;}if(!(p instanceof AST_Binary&&(p.operator=="&&"||p.operator=="||")))return false;self=p;}},loopcontrol_target:function loopcontrol_target(label){var stack=this.stack;if(label)for(var i=stack.length;--i>=0;){var x=stack[i];if(x instanceof AST_LabeledStatement&&x.label.name==label.name){return x.body;}}else for(var i=stack.length;--i>=0;){var x=stack[i];if(x instanceof AST_Switch||x instanceof AST_IterationStatement)return x;}}};"use strict";var KEYWORDS="break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with";var KEYWORDS_ATOM="false null true";var RESERVED_WORDS="abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized this throws transient volatile yield"+" "+KEYWORDS_ATOM+" "+KEYWORDS;var KEYWORDS_BEFORE_EXPRESSION="return new delete throw else case";KEYWORDS=makePredicate(KEYWORDS);RESERVED_WORDS=makePredicate(RESERVED_WORDS);KEYWORDS_BEFORE_EXPRESSION=makePredicate(KEYWORDS_BEFORE_EXPRESSION);KEYWORDS_ATOM=makePredicate(KEYWORDS_ATOM);var OPERATOR_CHARS=makePredicate(characters("+-*&%=<>!?|~^"));var RE_HEX_NUMBER=/^0x[0-9a-f]+$/i;var RE_OCT_NUMBER=/^0[0-7]+$/;var OPERATORS=makePredicate(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]);var WHITESPACE_CHARS=makePredicate(characters("  \n\r\t\f\u000b​᠎             　﻿"));var PUNC_BEFORE_EXPRESSION=makePredicate(characters("[{(,.;:"));var PUNC_CHARS=makePredicate(characters("[]{}(),;:"));var REGEXP_MODIFIERS=makePredicate(characters("gmsiy"));var UNICODE={letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),digit:new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")};function is_letter(code){return code>=97&&code<=122||code>=65&&code<=90||code>=170&&UNICODE.letter.test(String.fromCharCode(code));}function is_digit(code){return code>=48&&code<=57;}function is_alphanumeric_char(code){return is_digit(code)||is_letter(code);}function is_unicode_digit(code){return UNICODE.digit.test(String.fromCharCode(code));}function is_unicode_combining_mark(ch){return UNICODE.non_spacing_mark.test(ch)||UNICODE.space_combining_mark.test(ch);}function is_unicode_connector_punctuation(ch){return UNICODE.connector_punctuation.test(ch);}function is_identifier(name){return!RESERVED_WORDS(name)&&/^[a-z_$][a-z0-9_$]*$/i.test(name);}function is_identifier_start(code){return code==36||code==95||is_letter(code);}function is_identifier_char(ch){var code=ch.charCodeAt(0);return is_identifier_start(code)||is_digit(code)||code==8204||code==8205||is_unicode_combining_mark(ch)||is_unicode_connector_punctuation(ch)||is_unicode_digit(code);}function is_identifier_string(str){return (/^[a-z_$][a-z0-9_$]*$/i.test(str));}function parse_js_number(num){if(RE_HEX_NUMBER.test(num)){return parseInt(num.substr(2),16);}else if(RE_OCT_NUMBER.test(num)){return parseInt(num.substr(1),8);}else{var val=parseFloat(num);if(val==num)return val;}}function JS_Parse_Error(message,filename,line,col,pos){this.message=message;this.filename=filename;this.line=line;this.col=col;this.pos=pos;this.stack=new Error().stack;}JS_Parse_Error.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")"+"\n\n"+this.stack;};function js_error(message,filename,line,col,pos){throw new JS_Parse_Error(message,filename,line,col,pos);}function is_token(token,type,val){return token.type==type&&(val==null||token.value==val);}var EX_EOF={};function tokenizer($TEXT,filename,html5_comments,shebang){var S={text:$TEXT,filename:filename,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:false,regex_allowed:false,comments_before:[]};function peek(){return S.text.charAt(S.pos);}function next(signal_eof,in_string){var ch=S.text.charAt(S.pos++);if(signal_eof&&!ch)throw EX_EOF;if("\r\n\u2028\u2029".indexOf(ch)>=0){S.newline_before=S.newline_before||!in_string;++S.line;S.col=0;if(!in_string&&ch=="\r"&&peek()=="\n"){++S.pos;ch="\n";}}else{++S.col;}return ch;}function forward(i){while(i-->0){next();}}function looking_at(str){return S.text.substr(S.pos,str.length)==str;}function find(what,signal_eof){var pos=S.text.indexOf(what,S.pos);if(signal_eof&&pos==-1)throw EX_EOF;return pos;}function start_token(){S.tokline=S.line;S.tokcol=S.col;S.tokpos=S.pos;}var prev_was_dot=false;function token(type,value,is_comment){S.regex_allowed=type=="operator"&&!UNARY_POSTFIX(value)||type=="keyword"&&KEYWORDS_BEFORE_EXPRESSION(value)||type=="punc"&&PUNC_BEFORE_EXPRESSION(value);prev_was_dot=type=="punc"&&value==".";var ret={type:type,value:value,line:S.tokline,col:S.tokcol,pos:S.tokpos,endline:S.line,endcol:S.col,endpos:S.pos,nlb:S.newline_before,file:filename};if(/^(?:num|string|regexp)$/i.test(type)){ret.raw=$TEXT.substring(ret.pos,ret.endpos);}if(!is_comment){ret.comments_before=S.comments_before;S.comments_before=[];for(var i=0,len=ret.comments_before.length;i<len;i++){ret.nlb=ret.nlb||ret.comments_before[i].nlb;}}S.newline_before=false;return new AST_Token(ret);}function skip_whitespace(){var ch;while(WHITESPACE_CHARS(ch=peek())||ch=="\u2028"||ch=="\u2029"){next();}}function read_while(pred){var ret="",ch,i=0;while((ch=peek())&&pred(ch,i++)){ret+=next();}return ret;}function parse_error(err){js_error(err,filename,S.tokline,S.tokcol,S.tokpos);}function read_num(prefix){var has_e=false,after_e=false,has_x=false,has_dot=prefix==".";var num=read_while(function(ch,i){var code=ch.charCodeAt(0);switch(code){case 120:case 88:return has_x?false:has_x=true;case 101:case 69:return has_x?true:has_e?false:has_e=after_e=true;case 45:return after_e||i==0&&!prefix;case 43:return after_e;case(after_e=false,46):return!has_dot&&!has_x&&!has_e?has_dot=true:false;}return is_alphanumeric_char(code);});if(prefix)num=prefix+num;var valid=parse_js_number(num);if(!isNaN(valid)){return token("num",valid);}else{parse_error("Invalid syntax: "+num);}}function read_escaped_char(in_string){var ch=next(true,in_string);switch(ch.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"	";case 98:return"\b";case 118:return"\x0B";case 102:return"\f";case 48:return"\x00";case 120:return String.fromCharCode(hex_bytes(2));case 117:return String.fromCharCode(hex_bytes(4));case 10:return"";case 13:if(peek()=="\n"){next(true,in_string);return"";}}return ch;}function hex_bytes(n){var num=0;for(;n>0;--n){var digit=parseInt(next(true),16);if(isNaN(digit))parse_error("Invalid hex-character pattern in string");num=num<<4|digit;}return num;}var read_string=with_eof_error("Unterminated string constant",function(quote_char){var quote=next(),ret="";for(;;){var ch=next(true,true);if(ch=="\\"){var octal_len=0,first=null;ch=read_while(function(ch){if(ch>="0"&&ch<="7"){if(!first){first=ch;return++octal_len;}else if(first<="3"&&octal_len<=2)return++octal_len;else if(first>="4"&&octal_len<=1)return++octal_len;}return false;});if(octal_len>0)ch=String.fromCharCode(parseInt(ch,8));else ch=read_escaped_char(true);}else if(ch==quote)break;ret+=ch;}var tok=token("string",ret);tok.quote=quote_char;return tok;});function skip_line_comment(type){var regex_allowed=S.regex_allowed;var i=find("\n"),ret;if(i==-1){ret=S.text.substr(S.pos);S.pos=S.text.length;}else{ret=S.text.substring(S.pos,i);S.pos=i;}S.col=S.tokcol+(S.pos-S.tokpos);S.comments_before.push(token(type,ret,true));S.regex_allowed=regex_allowed;return next_token();}var skip_multiline_comment=with_eof_error("Unterminated multiline comment",function(){var regex_allowed=S.regex_allowed;var i=find("*/",true);var text=S.text.substring(S.pos,i);var a=text.split("\n"),n=a.length;S.pos=i+2;S.line+=n-1;if(n>1)S.col=a[n-1].length;else S.col+=a[n-1].length;S.col+=2;var nlb=S.newline_before=S.newline_before||text.indexOf("\n")>=0;S.comments_before.push(token("comment2",text,true));S.regex_allowed=regex_allowed;S.newline_before=nlb;return next_token();});function read_name(){var backslash=false,name="",ch,escaped=false,hex;while((ch=peek())!=null){if(!backslash){if(ch=="\\")escaped=backslash=true,next();else if(is_identifier_char(ch))name+=next();else break;}else{if(ch!="u")parse_error("Expecting UnicodeEscapeSequence -- uXXXX");ch=read_escaped_char();if(!is_identifier_char(ch))parse_error("Unicode char: "+ch.charCodeAt(0)+" is not valid in identifier");name+=ch;backslash=false;}}if(KEYWORDS(name)&&escaped){hex=name.charCodeAt(0).toString(16).toUpperCase();name="\\u"+"0000".substr(hex.length)+hex+name.slice(1);}return name;}var read_regexp=with_eof_error("Unterminated regular expression",function(regexp){var prev_backslash=false,ch,in_class=false;while(ch=next(true)){if(prev_backslash){regexp+="\\"+ch;prev_backslash=false;}else if(ch=="["){in_class=true;regexp+=ch;}else if(ch=="]"&&in_class){in_class=false;regexp+=ch;}else if(ch=="/"&&!in_class){break;}else if(ch=="\\"){prev_backslash=true;}else{regexp+=ch;}}var mods=read_name();try{return token("regexp",new RegExp(regexp,mods));}catch(e){parse_error(e.message);}});function read_operator(prefix){function grow(op){if(!peek())return op;var bigger=op+peek();if(OPERATORS(bigger)){next();return grow(bigger);}else{return op;}}return token("operator",grow(prefix||next()));}function handle_slash(){next();switch(peek()){case"/":next();return skip_line_comment("comment1");case"*":next();return skip_multiline_comment();}return S.regex_allowed?read_regexp(""):read_operator("/");}function handle_dot(){next();return is_digit(peek().charCodeAt(0))?read_num("."):token("punc",".");}function read_word(){var word=read_name();if(prev_was_dot)return token("name",word);return KEYWORDS_ATOM(word)?token("atom",word):!KEYWORDS(word)?token("name",word):OPERATORS(word)?token("operator",word):token("keyword",word);}function with_eof_error(eof_error,cont){return function(x){try{return cont(x);}catch(ex){if(ex===EX_EOF)parse_error(eof_error);else throw ex;}};}function next_token(force_regexp){if(force_regexp!=null)return read_regexp(force_regexp);skip_whitespace();start_token();if(html5_comments){if(looking_at("<!--")){forward(4);return skip_line_comment("comment3");}if(looking_at("-->")&&S.newline_before){forward(3);return skip_line_comment("comment4");}}var ch=peek();if(!ch)return token("eof");var code=ch.charCodeAt(0);switch(code){case 34:case 39:return read_string(ch);case 46:return handle_dot();case 47:return handle_slash();}if(is_digit(code))return read_num();if(PUNC_CHARS(ch))return token("punc",next());if(OPERATOR_CHARS(ch))return read_operator();if(code==92||is_identifier_start(code))return read_word();if(shebang){if(S.pos==0&&looking_at("#!")){forward(2);return skip_line_comment("comment5");}}parse_error("Unexpected character '"+ch+"'");}next_token.context=function(nc){if(nc)S=nc;return S;};return next_token;}var UNARY_PREFIX=makePredicate(["typeof","void","delete","--","++","!","~","-","+"]);var UNARY_POSTFIX=makePredicate(["--","++"]);var ASSIGNMENT=makePredicate(["=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="]);var PRECEDENCE=function(a,ret){for(var i=0;i<a.length;++i){var b=a[i];for(var j=0;j<b.length;++j){ret[b[j]]=i+1;}}return ret;}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{});var STATEMENTS_WITH_LABELS=array_to_hash(["for","do","while","switch"]);var ATOMIC_START_TOKEN=array_to_hash(["atom","num","string","regexp","name"]);function parse($TEXT,options){options=defaults(options,{strict:false,filename:null,toplevel:null,expression:false,html5_comments:true,bare_returns:false,shebang:true});var S={input:typeof $TEXT=="string"?tokenizer($TEXT,options.filename,options.html5_comments,options.shebang):$TEXT,token:null,prev:null,peeked:null,in_function:0,in_directives:true,in_loop:0,labels:[]};S.token=next();function is(type,value){return is_token(S.token,type,value);}function peek(){return S.peeked||(S.peeked=S.input());}function next(){S.prev=S.token;if(S.peeked){S.token=S.peeked;S.peeked=null;}else{S.token=S.input();}S.in_directives=S.in_directives&&(S.token.type=="string"||is("punc",";"));return S.token;}function prev(){return S.prev;}function croak(msg,line,col,pos){var ctx=S.input.context();js_error(msg,ctx.filename,line!=null?line:ctx.tokline,col!=null?col:ctx.tokcol,pos!=null?pos:ctx.tokpos);}function token_error(token,msg){croak(msg,token.line,token.col);}function unexpected(token){if(token==null)token=S.token;token_error(token,"Unexpected token: "+token.type+" ("+token.value+")");}function expect_token(type,val){if(is(type,val)){return next();}token_error(S.token,"Unexpected token "+S.token.type+" «"+S.token.value+"»"+", expected "+type+" «"+val+"»");}function expect(punc){return expect_token("punc",punc);}function can_insert_semicolon(){return!options.strict&&(S.token.nlb||is("eof")||is("punc","}"));}function semicolon(){if(is("punc",";"))next();else if(!can_insert_semicolon())unexpected();}function parenthesised(){expect("(");var exp=expression(true);expect(")");return exp;}function embed_tokens(parser){return function(){var start=S.token;var expr=parser();var end=prev();expr.start=start;expr.end=end;return expr;};}function handle_regexp(){if(is("operator","/")||is("operator","/=")){S.peeked=null;S.token=S.input(S.token.value.substr(1));}}var statement=embed_tokens(function(){var tmp;handle_regexp();switch(S.token.type){case"string":var dir=S.in_directives,stat=simple_statement();if(dir&&stat.body instanceof AST_String&&!is("punc",",")){return new AST_Directive({start:stat.body.start,end:stat.body.end,quote:stat.body.quote,value:stat.body.value});}return stat;case"num":case"regexp":case"operator":case"atom":return simple_statement();case"name":return is_token(peek(),"punc",":")?labeled_statement():simple_statement();case"punc":switch(S.token.value){case"{":return new AST_BlockStatement({start:S.token,body:block_(),end:prev()});case"[":case"(":return simple_statement();case";":next();return new AST_EmptyStatement();default:unexpected();}case"keyword":switch(tmp=S.token.value,next(),tmp){case"break":return break_cont(AST_Break);case"continue":return break_cont(AST_Continue);case"debugger":semicolon();return new AST_Debugger();case"do":return new AST_Do({body:in_loop(statement),condition:(expect_token("keyword","while"),tmp=parenthesised(),semicolon(),tmp)});case"while":return new AST_While({condition:parenthesised(),body:in_loop(statement)});case"for":return for_();case"function":return function_(AST_Defun);case"if":return if_();case"return":if(S.in_function==0&&!options.bare_returns)croak("'return' outside of function");return new AST_Return({value:is("punc",";")?(next(),null):can_insert_semicolon()?null:(tmp=expression(true),semicolon(),tmp)});case"switch":return new AST_Switch({expression:parenthesised(),body:in_loop(switch_body_)});case"throw":if(S.token.nlb)croak("Illegal newline after 'throw'");return new AST_Throw({value:(tmp=expression(true),semicolon(),tmp)});case"try":return try_();case"var":return tmp=var_(),semicolon(),tmp;case"const":return tmp=const_(),semicolon(),tmp;case"with":return new AST_With({expression:parenthesised(),body:statement()});default:unexpected();}}});function labeled_statement(){var label=as_symbol(AST_Label);if(find_if(function(l){return l.name==label.name;},S.labels)){croak("Label "+label.name+" defined twice");}expect(":");S.labels.push(label);var stat=statement();S.labels.pop();if(!(stat instanceof AST_IterationStatement)){label.references.forEach(function(ref){if(ref instanceof AST_Continue){ref=ref.label.start;croak("Continue label `"+label.name+"` refers to non-IterationStatement.",ref.line,ref.col,ref.pos);}});}return new AST_LabeledStatement({body:stat,label:label});}function simple_statement(tmp){return new AST_SimpleStatement({body:(tmp=expression(true),semicolon(),tmp)});}function break_cont(type){var label=null,ldef;if(!can_insert_semicolon()){label=as_symbol(AST_LabelRef,true);}if(label!=null){ldef=find_if(function(l){return l.name==label.name;},S.labels);if(!ldef)croak("Undefined label "+label.name);label.thedef=ldef;}else if(S.in_loop==0)croak(type.TYPE+" not inside a loop or switch");semicolon();var stat=new type({label:label});if(ldef)ldef.references.push(stat);return stat;}function for_(){expect("(");var init=null;if(!is("punc",";")){init=is("keyword","var")?(next(),var_(true)):expression(true,true);if(is("operator","in")){if(init instanceof AST_Var&&init.definitions.length>1)croak("Only one variable declaration allowed in for..in loop");next();return for_in(init);}}return regular_for(init);}function regular_for(init){expect(";");var test=is("punc",";")?null:expression(true);expect(";");var step=is("punc",")")?null:expression(true);expect(")");return new AST_For({init:init,condition:test,step:step,body:in_loop(statement)});}function for_in(init){var lhs=init instanceof AST_Var?init.definitions[0].name:null;var obj=expression(true);expect(")");return new AST_ForIn({init:init,name:lhs,object:obj,body:in_loop(statement)});}var function_=function function_(ctor){var in_statement=ctor===AST_Defun;var name=is("name")?as_symbol(in_statement?AST_SymbolDefun:AST_SymbolLambda):null;if(in_statement&&!name)unexpected();expect("(");return new ctor({name:name,argnames:function(first,a){while(!is("punc",")")){if(first)first=false;else expect(",");a.push(as_symbol(AST_SymbolFunarg));}next();return a;}(true,[]),body:function(loop,labels){++S.in_function;S.in_directives=true;S.in_loop=0;S.labels=[];var a=block_();--S.in_function;S.in_loop=loop;S.labels=labels;return a;}(S.in_loop,S.labels)});};function if_(){var cond=parenthesised(),body=statement(),belse=null;if(is("keyword","else")){next();belse=statement();}return new AST_If({condition:cond,body:body,alternative:belse});}function block_(){expect("{");var a=[];while(!is("punc","}")){if(is("eof"))unexpected();a.push(statement());}next();return a;}function switch_body_(){expect("{");var a=[],cur=null,branch=null,tmp;while(!is("punc","}")){if(is("eof"))unexpected();if(is("keyword","case")){if(branch)branch.end=prev();cur=[];branch=new AST_Case({start:(tmp=S.token,next(),tmp),expression:expression(true),body:cur});a.push(branch);expect(":");}else if(is("keyword","default")){if(branch)branch.end=prev();cur=[];branch=new AST_Default({start:(tmp=S.token,next(),expect(":"),tmp),body:cur});a.push(branch);}else{if(!cur)unexpected();cur.push(statement());}}if(branch)branch.end=prev();next();return a;}function try_(){var body=block_(),bcatch=null,bfinally=null;if(is("keyword","catch")){var start=S.token;next();expect("(");var name=as_symbol(AST_SymbolCatch);expect(")");bcatch=new AST_Catch({start:start,argname:name,body:block_(),end:prev()});}if(is("keyword","finally")){var start=S.token;next();bfinally=new AST_Finally({start:start,body:block_(),end:prev()});}if(!bcatch&&!bfinally)croak("Missing catch/finally blocks");return new AST_Try({body:body,bcatch:bcatch,bfinally:bfinally});}function vardefs(no_in,in_const){var a=[];for(;;){a.push(new AST_VarDef({start:S.token,name:as_symbol(in_const?AST_SymbolConst:AST_SymbolVar),value:is("operator","=")?(next(),expression(false,no_in)):null,end:prev()}));if(!is("punc",","))break;next();}return a;}var var_=function var_(no_in){return new AST_Var({start:prev(),definitions:vardefs(no_in,false),end:prev()});};var const_=function const_(){return new AST_Const({start:prev(),definitions:vardefs(false,true),end:prev()});};var new_=function new_(allow_calls){var start=S.token;expect_token("operator","new");var newexp=expr_atom(false),args;if(is("punc","(")){next();args=expr_list(")");}else{args=[];}return subscripts(new AST_New({start:start,expression:newexp,args:args,end:prev()}),allow_calls);};function as_atom_node(){var tok=S.token,ret;switch(tok.type){case"name":case"keyword":ret=_make_symbol(AST_SymbolRef);break;case"num":ret=new AST_Number({start:tok,end:tok,value:tok.value});break;case"string":ret=new AST_String({start:tok,end:tok,value:tok.value,quote:tok.quote});break;case"regexp":ret=new AST_RegExp({start:tok,end:tok,value:tok.value});break;case"atom":switch(tok.value){case"false":ret=new AST_False({start:tok,end:tok});break;case"true":ret=new AST_True({start:tok,end:tok});break;case"null":ret=new AST_Null({start:tok,end:tok});break;}break;}next();return ret;}var expr_atom=function expr_atom(allow_calls){if(is("operator","new")){return new_(allow_calls);}var start=S.token;if(is("punc")){switch(start.value){case"(":next();var ex=expression(true);ex.start=start;ex.end=S.token;expect(")");return subscripts(ex,allow_calls);case"[":return subscripts(array_(),allow_calls);case"{":return subscripts(object_(),allow_calls);}unexpected();}if(is("keyword","function")){next();var func=function_(AST_Function);func.start=start;func.end=prev();return subscripts(func,allow_calls);}if(ATOMIC_START_TOKEN[S.token.type]){return subscripts(as_atom_node(),allow_calls);}unexpected();};function expr_list(closing,allow_trailing_comma,allow_empty){var first=true,a=[];while(!is("punc",closing)){if(first)first=false;else expect(",");if(allow_trailing_comma&&is("punc",closing))break;if(is("punc",",")&&allow_empty){a.push(new AST_Hole({start:S.token,end:S.token}));}else{a.push(expression(false));}}next();return a;}var array_=embed_tokens(function(){expect("[");return new AST_Array({elements:expr_list("]",!options.strict,true)});});var object_=embed_tokens(function(){expect("{");var first=true,a=[];while(!is("punc","}")){if(first)first=false;else expect(",");if(!options.strict&&is("punc","}"))break;var start=S.token;var type=start.type;var name=as_property_name();if(type=="name"&&!is("punc",":")){if(name=="get"){a.push(new AST_ObjectGetter({start:start,key:as_atom_node(),value:function_(AST_Accessor),end:prev()}));continue;}if(name=="set"){a.push(new AST_ObjectSetter({start:start,key:as_atom_node(),value:function_(AST_Accessor),end:prev()}));continue;}}expect(":");a.push(new AST_ObjectKeyVal({start:start,quote:start.quote,key:name,value:expression(false),end:prev()}));}next();return new AST_Object({properties:a});});function as_property_name(){var tmp=S.token;next();switch(tmp.type){case"num":case"string":case"name":case"operator":case"keyword":case"atom":return tmp.value;default:unexpected();}}function as_name(){var tmp=S.token;next();switch(tmp.type){case"name":case"operator":case"keyword":case"atom":return tmp.value;default:unexpected();}}function _make_symbol(type){var name=S.token.value;return new(name=="this"?AST_This:type)({name:String(name),start:S.token,end:S.token});}function as_symbol(type,noerror){if(!is("name")){if(!noerror)croak("Name expected");return null;}var sym=_make_symbol(type);next();return sym;}var subscripts=function subscripts(expr,allow_calls){var start=expr.start;if(is("punc",".")){next();return subscripts(new AST_Dot({start:start,expression:expr,property:as_name(),end:prev()}),allow_calls);}if(is("punc","[")){next();var prop=expression(true);expect("]");return subscripts(new AST_Sub({start:start,expression:expr,property:prop,end:prev()}),allow_calls);}if(allow_calls&&is("punc","(")){next();return subscripts(new AST_Call({start:start,expression:expr,args:expr_list(")"),end:prev()}),true);}return expr;};var maybe_unary=function maybe_unary(allow_calls){var start=S.token;if(is("operator")&&UNARY_PREFIX(start.value)){next();handle_regexp();var ex=make_unary(AST_UnaryPrefix,start.value,maybe_unary(allow_calls));ex.start=start;ex.end=prev();return ex;}var val=expr_atom(allow_calls);while(is("operator")&&UNARY_POSTFIX(S.token.value)&&!S.token.nlb){val=make_unary(AST_UnaryPostfix,S.token.value,val);val.start=start;val.end=S.token;next();}return val;};function make_unary(ctor,op,expr){if((op=="++"||op=="--")&&!is_assignable(expr))croak("Invalid use of "+op+" operator");return new ctor({operator:op,expression:expr});}var expr_op=function expr_op(left,min_prec,no_in){var op=is("operator")?S.token.value:null;if(op=="in"&&no_in)op=null;var prec=op!=null?PRECEDENCE[op]:null;if(prec!=null&&prec>min_prec){next();var right=expr_op(maybe_unary(true),prec,no_in);return expr_op(new AST_Binary({start:left.start,left:left,operator:op,right:right,end:right.end}),min_prec,no_in);}return left;};function expr_ops(no_in){return expr_op(maybe_unary(true),0,no_in);}var maybe_conditional=function maybe_conditional(no_in){var start=S.token;var expr=expr_ops(no_in);if(is("operator","?")){next();var yes=expression(false);expect(":");return new AST_Conditional({start:start,condition:expr,consequent:yes,alternative:expression(false,no_in),end:prev()});}return expr;};function is_assignable(expr){if(!options.strict)return true;if(expr instanceof AST_This)return false;return expr instanceof AST_PropAccess||expr instanceof AST_Symbol;}var maybe_assign=function maybe_assign(no_in){var start=S.token;var left=maybe_conditional(no_in),val=S.token.value;if(is("operator")&&ASSIGNMENT(val)){if(is_assignable(left)){next();return new AST_Assign({start:start,left:left,operator:val,right:maybe_assign(no_in),end:prev()});}croak("Invalid assignment");}return left;};var expression=function expression(commas,no_in){var start=S.token;var expr=maybe_assign(no_in);if(commas&&is("punc",",")){next();return new AST_Seq({start:start,car:expr,cdr:expression(true,no_in),end:peek()});}return expr;};function in_loop(cont){++S.in_loop;var ret=cont();--S.in_loop;return ret;}if(options.expression){return expression(true);}return function(){var start=S.token;var body=[];while(!is("eof")){body.push(statement());}var end=prev();var toplevel=options.toplevel;if(toplevel){toplevel.body=toplevel.body.concat(body);toplevel.end=end;}else{toplevel=new AST_Toplevel({start:start,body:body,end:end});}return toplevel;}();}"use strict";function TreeTransformer(before,after){TreeWalker.call(this);this.before=before;this.after=after;}TreeTransformer.prototype=new TreeWalker();(function(undefined){function _(node,descend){node.DEFMETHOD("transform",function(tw,in_list){var x,y;tw.push(this);if(tw.before)x=tw.before(this,descend,in_list);if(x===undefined){if(!tw.after){x=this;descend(x,tw);}else{tw.stack[tw.stack.length-1]=x=this.clone();descend(x,tw);y=tw.after(x,in_list);if(y!==undefined)x=y;}}tw.pop(this);return x;});}function do_list(list,tw){return MAP(list,function(node){return node.transform(tw,true);});}_(AST_Node,noop);_(AST_LabeledStatement,function(self,tw){self.label=self.label.transform(tw);self.body=self.body.transform(tw);});_(AST_SimpleStatement,function(self,tw){self.body=self.body.transform(tw);});_(AST_Block,function(self,tw){self.body=do_list(self.body,tw);});_(AST_DWLoop,function(self,tw){self.condition=self.condition.transform(tw);self.body=self.body.transform(tw);});_(AST_For,function(self,tw){if(self.init)self.init=self.init.transform(tw);if(self.condition)self.condition=self.condition.transform(tw);if(self.step)self.step=self.step.transform(tw);self.body=self.body.transform(tw);});_(AST_ForIn,function(self,tw){self.init=self.init.transform(tw);self.object=self.object.transform(tw);self.body=self.body.transform(tw);});_(AST_With,function(self,tw){self.expression=self.expression.transform(tw);self.body=self.body.transform(tw);});_(AST_Exit,function(self,tw){if(self.value)self.value=self.value.transform(tw);});_(AST_LoopControl,function(self,tw){if(self.label)self.label=self.label.transform(tw);});_(AST_If,function(self,tw){self.condition=self.condition.transform(tw);self.body=self.body.transform(tw);if(self.alternative)self.alternative=self.alternative.transform(tw);});_(AST_Switch,function(self,tw){self.expression=self.expression.transform(tw);self.body=do_list(self.body,tw);});_(AST_Case,function(self,tw){self.expression=self.expression.transform(tw);self.body=do_list(self.body,tw);});_(AST_Try,function(self,tw){self.body=do_list(self.body,tw);if(self.bcatch)self.bcatch=self.bcatch.transform(tw);if(self.bfinally)self.bfinally=self.bfinally.transform(tw);});_(AST_Catch,function(self,tw){self.argname=self.argname.transform(tw);self.body=do_list(self.body,tw);});_(AST_Definitions,function(self,tw){self.definitions=do_list(self.definitions,tw);});_(AST_VarDef,function(self,tw){self.name=self.name.transform(tw);if(self.value)self.value=self.value.transform(tw);});_(AST_Lambda,function(self,tw){if(self.name)self.name=self.name.transform(tw);self.argnames=do_list(self.argnames,tw);self.body=do_list(self.body,tw);});_(AST_Call,function(self,tw){self.expression=self.expression.transform(tw);self.args=do_list(self.args,tw);});_(AST_Seq,function(self,tw){self.car=self.car.transform(tw);self.cdr=self.cdr.transform(tw);});_(AST_Dot,function(self,tw){self.expression=self.expression.transform(tw);});_(AST_Sub,function(self,tw){self.expression=self.expression.transform(tw);self.property=self.property.transform(tw);});_(AST_Unary,function(self,tw){self.expression=self.expression.transform(tw);});_(AST_Binary,function(self,tw){self.left=self.left.transform(tw);self.right=self.right.transform(tw);});_(AST_Conditional,function(self,tw){self.condition=self.condition.transform(tw);self.consequent=self.consequent.transform(tw);self.alternative=self.alternative.transform(tw);});_(AST_Array,function(self,tw){self.elements=do_list(self.elements,tw);});_(AST_Object,function(self,tw){self.properties=do_list(self.properties,tw);});_(AST_ObjectProperty,function(self,tw){self.value=self.value.transform(tw);});})();"use strict";function SymbolDef(scope,index,orig){this.name=orig.name;this.orig=[orig];this.scope=scope;this.references=[];this.global=false;this.mangled_name=null;this.undeclared=false;this.constant=false;this.index=index;}SymbolDef.prototype={unmangleable:function unmangleable(options){if(!options)options={};return this.global&&!options.toplevel||this.undeclared||!options.eval&&(this.scope.uses_eval||this.scope.uses_with)||options.keep_fnames&&(this.orig[0]instanceof AST_SymbolLambda||this.orig[0]instanceof AST_SymbolDefun);},mangle:function mangle(options){var cache=options.cache&&options.cache.props;if(this.global&&cache&&cache.has(this.name)){this.mangled_name=cache.get(this.name);}else if(!this.mangled_name&&!this.unmangleable(options)){var s=this.scope;if(!options.screw_ie8&&this.orig[0]instanceof AST_SymbolLambda)s=s.parent_scope;this.mangled_name=s.next_mangled(options,this);if(this.global&&cache){cache.set(this.name,this.mangled_name);}}}};AST_Toplevel.DEFMETHOD("figure_out_scope",function(options){options=defaults(options,{screw_ie8:false,cache:null});var self=this;var scope=self.parent_scope=null;var labels=new Dictionary();var defun=null;var nesting=0;var tw=new TreeWalker(function(node,descend){if(options.screw_ie8&&node instanceof AST_Catch){var save_scope=scope;scope=new AST_Scope(node);scope.init_scope_vars(nesting);scope.parent_scope=save_scope;descend();scope=save_scope;return true;}if(node instanceof AST_Scope){node.init_scope_vars(nesting);var save_scope=node.parent_scope=scope;var save_defun=defun;var save_labels=labels;defun=scope=node;labels=new Dictionary();++nesting;descend();--nesting;scope=save_scope;defun=save_defun;labels=save_labels;return true;}if(node instanceof AST_LabeledStatement){var l=node.label;if(labels.has(l.name)){throw new Error(string_template("Label {name} defined twice",l));}labels.set(l.name,l);descend();labels.del(l.name);return true;}if(node instanceof AST_With){for(var s=scope;s;s=s.parent_scope){s.uses_with=true;}return;}if(node instanceof AST_Symbol){node.scope=scope;}if(node instanceof AST_Label){node.thedef=node;node.references=[];}if(node instanceof AST_SymbolLambda){defun.def_function(node);}else if(node instanceof AST_SymbolDefun){(node.scope=defun.parent_scope).def_function(node);}else if(node instanceof AST_SymbolVar||node instanceof AST_SymbolConst){var def=defun.def_variable(node);def.constant=node instanceof AST_SymbolConst;def.init=tw.parent().value;}else if(node instanceof AST_SymbolCatch){(options.screw_ie8?scope:defun).def_variable(node);}else if(node instanceof AST_LabelRef){var sym=labels.get(node.name);if(!sym)throw new Error(string_template("Undefined label {name} [{line},{col}]",{name:node.name,line:node.start.line,col:node.start.col}));node.thedef=sym;}});self.walk(tw);var func=null;var globals=self.globals=new Dictionary();var tw=new TreeWalker(function(node,descend){if(node instanceof AST_Lambda){var prev_func=func;func=node;descend();func=prev_func;return true;}if(node instanceof AST_LoopControl&&node.label){node.label.thedef.references.push(node);return true;}if(node instanceof AST_SymbolRef){var name=node.name;var sym=node.scope.find_variable(name);if(!sym){var g;if(globals.has(name)){g=globals.get(name);}else{g=new SymbolDef(self,globals.size(),node);g.undeclared=true;g.global=true;globals.set(name,g);}node.thedef=g;if(name=="eval"&&tw.parent()instanceof AST_Call){for(var s=node.scope;s&&!s.uses_eval;s=s.parent_scope){s.uses_eval=true;}}if(func&&name=="arguments"){func.uses_arguments=true;}}else{node.thedef=sym;}node.reference();return true;}});self.walk(tw);if(options.cache){this.cname=options.cache.cname;}});AST_Scope.DEFMETHOD("init_scope_vars",function(nesting){this.variables=new Dictionary();this.functions=new Dictionary();this.uses_with=false;this.uses_eval=false;this.parent_scope=null;this.enclosed=[];this.cname=-1;this.nesting=nesting;});AST_Lambda.DEFMETHOD("init_scope_vars",function(){AST_Scope.prototype.init_scope_vars.apply(this,arguments);this.uses_arguments=false;});AST_SymbolRef.DEFMETHOD("reference",function(){var def=this.definition();def.references.push(this);var s=this.scope;while(s){push_uniq(s.enclosed,def);if(s===def.scope)break;s=s.parent_scope;}this.frame=this.scope.nesting-def.scope.nesting;});AST_Scope.DEFMETHOD("find_variable",function(name){if(name instanceof AST_Symbol)name=name.name;return this.variables.get(name)||this.parent_scope&&this.parent_scope.find_variable(name);});AST_Scope.DEFMETHOD("def_function",function(symbol){this.functions.set(symbol.name,this.def_variable(symbol));});AST_Scope.DEFMETHOD("def_variable",function(symbol){var def;if(!this.variables.has(symbol.name)){def=new SymbolDef(this,this.variables.size(),symbol);this.variables.set(symbol.name,def);def.global=!this.parent_scope;}else{def=this.variables.get(symbol.name);def.orig.push(symbol);}return symbol.thedef=def;});AST_Scope.DEFMETHOD("next_mangled",function(options){var ext=this.enclosed;out:while(true){var m=base54(++this.cname);if(!is_identifier(m))continue;if(options.except.indexOf(m)>=0)continue;for(var i=ext.length;--i>=0;){var sym=ext[i];var name=sym.mangled_name||sym.unmangleable(options)&&sym.name;if(m==name)continue out;}return m;}});AST_Function.DEFMETHOD("next_mangled",function(options,def){var tricky_def=def.orig[0]instanceof AST_SymbolFunarg&&this.name&&this.name.definition();while(true){var name=AST_Lambda.prototype.next_mangled.call(this,options,def);if(!(tricky_def&&tricky_def.mangled_name==name))return name;}});AST_Scope.DEFMETHOD("references",function(sym){if(sym instanceof AST_Symbol)sym=sym.definition();return this.enclosed.indexOf(sym)<0?null:sym;});AST_Symbol.DEFMETHOD("unmangleable",function(options){return this.definition().unmangleable(options);});AST_SymbolAccessor.DEFMETHOD("unmangleable",function(){return true;});AST_Label.DEFMETHOD("unmangleable",function(){return false;});AST_Symbol.DEFMETHOD("unreferenced",function(){return this.definition().references.length==0&&!(this.scope.uses_eval||this.scope.uses_with);});AST_Symbol.DEFMETHOD("undeclared",function(){return this.definition().undeclared;});AST_LabelRef.DEFMETHOD("undeclared",function(){return false;});AST_Label.DEFMETHOD("undeclared",function(){return false;});AST_Symbol.DEFMETHOD("definition",function(){return this.thedef;});AST_Symbol.DEFMETHOD("global",function(){return this.definition().global;});AST_Toplevel.DEFMETHOD("_default_mangler_options",function(options){return defaults(options,{except:[],eval:false,sort:false,toplevel:false,screw_ie8:false,keep_fnames:false});});AST_Toplevel.DEFMETHOD("mangle_names",function(options){options=this._default_mangler_options(options);var lname=-1;var to_mangle=[];if(options.cache){this.globals.each(function(symbol){if(options.except.indexOf(symbol.name)<0){to_mangle.push(symbol);}});}var tw=new TreeWalker(function(node,descend){if(node instanceof AST_LabeledStatement){var save_nesting=lname;descend();lname=save_nesting;return true;}if(node instanceof AST_Scope){var p=tw.parent(),a=[];node.variables.each(function(symbol){if(options.except.indexOf(symbol.name)<0){a.push(symbol);}});if(options.sort)a.sort(function(a,b){return b.references.length-a.references.length;});to_mangle.push.apply(to_mangle,a);return;}if(node instanceof AST_Label){var name;do{name=base54(++lname);}while(!is_identifier(name));node.mangled_name=name;return true;}if(options.screw_ie8&&node instanceof AST_SymbolCatch){to_mangle.push(node.definition());return;}});this.walk(tw);to_mangle.forEach(function(def){def.mangle(options);});if(options.cache){options.cache.cname=this.cname;}});AST_Toplevel.DEFMETHOD("compute_char_frequency",function(options){options=this._default_mangler_options(options);var tw=new TreeWalker(function(node){if(node instanceof AST_Constant)base54.consider(node.print_to_string());else if(node instanceof AST_Return)base54.consider("return");else if(node instanceof AST_Throw)base54.consider("throw");else if(node instanceof AST_Continue)base54.consider("continue");else if(node instanceof AST_Break)base54.consider("break");else if(node instanceof AST_Debugger)base54.consider("debugger");else if(node instanceof AST_Directive)base54.consider(node.value);else if(node instanceof AST_While)base54.consider("while");else if(node instanceof AST_Do)base54.consider("do while");else if(node instanceof AST_If){base54.consider("if");if(node.alternative)base54.consider("else");}else if(node instanceof AST_Var)base54.consider("var");else if(node instanceof AST_Const)base54.consider("const");else if(node instanceof AST_Lambda)base54.consider("function");else if(node instanceof AST_For)base54.consider("for");else if(node instanceof AST_ForIn)base54.consider("for in");else if(node instanceof AST_Switch)base54.consider("switch");else if(node instanceof AST_Case)base54.consider("case");else if(node instanceof AST_Default)base54.consider("default");else if(node instanceof AST_With)base54.consider("with");else if(node instanceof AST_ObjectSetter)base54.consider("set"+node.key);else if(node instanceof AST_ObjectGetter)base54.consider("get"+node.key);else if(node instanceof AST_ObjectKeyVal)base54.consider(node.key);else if(node instanceof AST_New)base54.consider("new");else if(node instanceof AST_This)base54.consider("this");else if(node instanceof AST_Try)base54.consider("try");else if(node instanceof AST_Catch)base54.consider("catch");else if(node instanceof AST_Finally)base54.consider("finally");else if(node instanceof AST_Symbol&&node.unmangleable(options))base54.consider(node.name);else if(node instanceof AST_Unary||node instanceof AST_Binary)base54.consider(node.operator);else if(node instanceof AST_Dot)base54.consider(node.property);});this.walk(tw);base54.sort();});var base54=function(){var string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";var chars,frequency;function reset(){frequency=Object.create(null);chars=string.split("").map(function(ch){return ch.charCodeAt(0);});chars.forEach(function(ch){frequency[ch]=0;});}base54.consider=function(str){for(var i=str.length;--i>=0;){var code=str.charCodeAt(i);if(code in frequency)++frequency[code];}};base54.sort=function(){chars=mergeSort(chars,function(a,b){if(is_digit(a)&&!is_digit(b))return 1;if(is_digit(b)&&!is_digit(a))return-1;return frequency[b]-frequency[a];});};base54.reset=reset;reset();base54.get=function(){return chars;};base54.freq=function(){return frequency;};function base54(num){var ret="",base=54;num++;do{num--;ret+=String.fromCharCode(chars[num%base]);num=Math.floor(num/base);base=64;}while(num>0);return ret;}return base54;}();AST_Toplevel.DEFMETHOD("scope_warnings",function(options){options=defaults(options,{undeclared:false,unreferenced:true,assign_to_global:true,func_arguments:true,nested_defuns:true,eval:true});var tw=new TreeWalker(function(node){if(options.undeclared&&node instanceof AST_SymbolRef&&node.undeclared()){AST_Node.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:node.name,file:node.start.file,line:node.start.line,col:node.start.col});}if(options.assign_to_global){var sym=null;if(node instanceof AST_Assign&&node.left instanceof AST_SymbolRef)sym=node.left;else if(node instanceof AST_ForIn&&node.init instanceof AST_SymbolRef)sym=node.init;if(sym&&(sym.undeclared()||sym.global()&&sym.scope!==sym.definition().scope)){AST_Node.warn("{msg}: {name} [{file}:{line},{col}]",{msg:sym.undeclared()?"Accidental global?":"Assignment to global",name:sym.name,file:sym.start.file,line:sym.start.line,col:sym.start.col});}}if(options.eval&&node instanceof AST_SymbolRef&&node.undeclared()&&node.name=="eval"){AST_Node.warn("Eval is used [{file}:{line},{col}]",node.start);}if(options.unreferenced&&(node instanceof AST_SymbolDeclaration||node instanceof AST_Label)&&!(node instanceof AST_SymbolCatch)&&node.unreferenced()){AST_Node.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:node instanceof AST_Label?"Label":"Symbol",name:node.name,file:node.start.file,line:node.start.line,col:node.start.col});}if(options.func_arguments&&node instanceof AST_Lambda&&node.uses_arguments){AST_Node.warn("arguments used in function {name} [{file}:{line},{col}]",{name:node.name?node.name.name:"anonymous",file:node.start.file,line:node.start.line,col:node.start.col});}if(options.nested_defuns&&node instanceof AST_Defun&&!(tw.parent()instanceof AST_Scope)){AST_Node.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:node.name.name,type:tw.parent().TYPE,file:node.start.file,line:node.start.line,col:node.start.col});}});this.walk(tw);});"use strict";function OutputStream(options){options=defaults(options,{indent_start:0,indent_level:4,quote_keys:false,space_colon:true,ascii_only:false,unescape_regexps:false,inline_script:false,width:80,max_line_len:32e3,beautify:false,source_map:null,bracketize:false,semicolons:true,comments:false,shebang:true,preserve_line:false,screw_ie8:false,preamble:null,quote_style:0},true);var _indentation=0;var current_col=0;var current_line=1;var current_pos=0;var OUTPUT="";function to_ascii(str,identifier){return str.replace(/[\u0080-\uffff]/g,function(ch){var code=ch.charCodeAt(0).toString(16);if(code.length<=2&&!identifier){while(code.length<2){code="0"+code;}return"\\x"+code;}else{while(code.length<4){code="0"+code;}return"\\u"+code;}});}function make_string(str,quote){var dq=0,sq=0;str=str.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(s){switch(s){case"\\":return"\\\\";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\x0B":return options.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case'"':++dq;return'"';case"'":++sq;return"'";case"\x00":return"\\x00";case"﻿":return"\\ufeff";}return s;});function quote_single(){return"'"+str.replace(/\x27/g,"\\'")+"'";}function quote_double(){return'"'+str.replace(/\x22/g,'\\"')+'"';}if(options.ascii_only)str=to_ascii(str);switch(options.quote_style){case 1:return quote_single();case 2:return quote_double();case 3:return quote=="'"?quote_single():quote_double();default:return dq>sq?quote_single():quote_double();}}function encode_string(str,quote){var ret=make_string(str,quote);if(options.inline_script){ret=ret.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1");ret=ret.replace(/\x3c!--/g,"\\x3c!--");ret=ret.replace(/--\x3e/g,"--\\x3e");}return ret;}function make_name(name){name=name.toString();if(options.ascii_only)name=to_ascii(name,true);return name;}function make_indent(back){return repeat_string(" ",options.indent_start+_indentation-back*options.indent_level);}var might_need_space=false;var might_need_semicolon=false;var _last=null;function last_char(){return _last.charAt(_last.length-1);}function maybe_newline(){if(options.max_line_len&&current_col>options.max_line_len)print("\n");}var requireSemicolonChars=makePredicate("( [ + * / - , .");function print(str){str=String(str);var ch=str.charAt(0);if(might_need_semicolon){might_need_semicolon=false;if((!ch||";}".indexOf(ch)<0)&&!/[;]$/.test(_last)){if(options.semicolons||requireSemicolonChars(ch)){OUTPUT+=";";current_col++;current_pos++;}else{OUTPUT+="\n";current_pos++;current_line++;current_col=0;if(/^\s+$/.test(str)){might_need_semicolon=true;}}if(!options.beautify)might_need_space=false;}}if(!options.beautify&&options.preserve_line&&_stack[_stack.length-1]){var target_line=_stack[_stack.length-1].start.line;while(current_line<target_line){OUTPUT+="\n";current_pos++;current_line++;current_col=0;might_need_space=false;}}if(might_need_space){var prev=last_char();if(is_identifier_char(prev)&&(is_identifier_char(ch)||ch=="\\")||/^[\+\-\/]$/.test(ch)&&ch==prev){OUTPUT+=" ";current_col++;current_pos++;}might_need_space=false;}var a=str.split(/\r?\n/),n=a.length-1;current_line+=n;if(n==0){current_col+=a[n].length;}else{current_col=a[n].length;}current_pos+=str.length;_last=str;OUTPUT+=str;}var space=options.beautify?function(){print(" ");}:function(){might_need_space=true;};var indent=options.beautify?function(half){if(options.beautify){print(make_indent(half?.5:0));}}:noop;var with_indent=options.beautify?function(col,cont){if(col===true)col=next_indent();var save_indentation=_indentation;_indentation=col;var ret=cont();_indentation=save_indentation;return ret;}:function(col,cont){return cont();};var newline=options.beautify?function(){print("\n");}:maybe_newline;var semicolon=options.beautify?function(){print(";");}:function(){might_need_semicolon=true;};function force_semicolon(){might_need_semicolon=false;print(";");}function next_indent(){return _indentation+options.indent_level;}function with_block(cont){var ret;print("{");newline();with_indent(next_indent(),function(){ret=cont();});indent();print("}");return ret;}function with_parens(cont){print("(");var ret=cont();print(")");return ret;}function with_square(cont){print("[");var ret=cont();print("]");return ret;}function comma(){print(",");space();}function colon(){print(":");if(options.space_colon)space();}var add_mapping=options.source_map?function(token,name){try{if(token)options.source_map.add(token.file||"?",current_line,current_col,token.line,token.col,!name&&token.type=="name"?token.value:name);}catch(ex){AST_Node.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:token.file,line:token.line,col:token.col,cline:current_line,ccol:current_col,name:name||""});}}:noop;function get(){return OUTPUT;}if(options.preamble){print(options.preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"));}var _stack=[];return{get:get,toString:get,indent:indent,indentation:function indentation(){return _indentation;},current_width:function current_width(){return current_col-_indentation;},should_break:function should_break(){return options.width&&this.current_width()>=options.width;},newline:newline,print:print,space:space,comma:comma,colon:colon,last:function last(){return _last;},semicolon:semicolon,force_semicolon:force_semicolon,to_ascii:to_ascii,print_name:function print_name(name){print(make_name(name));},print_string:function print_string(str,quote){print(encode_string(str,quote));},next_indent:next_indent,with_indent:with_indent,with_block:with_block,with_parens:with_parens,with_square:with_square,add_mapping:add_mapping,option:function option(opt){return options[opt];},line:function line(){return current_line;},col:function col(){return current_col;},pos:function pos(){return current_pos;},push_node:function push_node(node){_stack.push(node);},pop_node:function pop_node(){return _stack.pop();},stack:function stack(){return _stack;},parent:function parent(n){return _stack[_stack.length-2-(n||0)];}};}(function(){function DEFPRINT(nodetype,generator){nodetype.DEFMETHOD("_codegen",generator);}var use_asm=false;AST_Node.DEFMETHOD("print",function(stream,force_parens){var self=this,generator=self._codegen,prev_use_asm=use_asm;if(self instanceof AST_Directive&&self.value=="use asm"){use_asm=true;}function doit(){self.add_comments(stream);self.add_source_map(stream);generator(self,stream);}stream.push_node(self);if(force_parens||self.needs_parens(stream)){stream.with_parens(doit);}else{doit();}stream.pop_node();if(self instanceof AST_Lambda){use_asm=prev_use_asm;}});AST_Node.DEFMETHOD("print_to_string",function(options){var s=OutputStream(options);this.print(s);return s.get();});AST_Node.DEFMETHOD("add_comments",function(output){var c=output.option("comments"),self=this;var start=self.start;if(start&&!start._comments_dumped){start._comments_dumped=true;var comments=start.comments_before||[];if(self instanceof AST_Exit&&self.value){self.value.walk(new TreeWalker(function(node){if(node.start&&node.start.comments_before){comments=comments.concat(node.start.comments_before);node.start.comments_before=[];}if(node instanceof AST_Function||node instanceof AST_Array||node instanceof AST_Object){return true;}}));}if(!c){comments=comments.filter(function(comment){return comment.type=="comment5";});}else if(c.test){comments=comments.filter(function(comment){return c.test(comment.value)||comment.type=="comment5";});}else if(typeof c=="function"){comments=comments.filter(function(comment){return c(self,comment)||comment.type=="comment5";});}if(!output.option("beautify")&&comments.length>0&&/comment[134]/.test(comments[0].type)&&output.col()!==0&&comments[0].nlb){output.print("\n");}comments.forEach(function(c){if(/comment[134]/.test(c.type)){output.print("//"+c.value+"\n");output.indent();}else if(c.type=="comment2"){output.print("/*"+c.value+"*/");if(start.nlb){output.print("\n");output.indent();}else{output.space();}}else if(output.pos()===0&&c.type=="comment5"&&output.option("shebang")){output.print("#!"+c.value+"\n");output.indent();}});}});function PARENS(nodetype,func){if(Array.isArray(nodetype)){nodetype.forEach(function(nodetype){PARENS(nodetype,func);});}else{nodetype.DEFMETHOD("needs_parens",func);}}PARENS(AST_Node,function(){return false;});PARENS(AST_Function,function(output){return first_in_statement(output);});PARENS(AST_Object,function(output){return first_in_statement(output);});PARENS([AST_Unary,AST_Undefined],function(output){var p=output.parent();return p instanceof AST_PropAccess&&p.expression===this;});PARENS(AST_Seq,function(output){var p=output.parent();return p instanceof AST_Call||p instanceof AST_Unary||p instanceof AST_Binary||p instanceof AST_VarDef||p instanceof AST_PropAccess||p instanceof AST_Array||p instanceof AST_ObjectProperty||p instanceof AST_Conditional;});PARENS(AST_Binary,function(output){var p=output.parent();if(p instanceof AST_Call&&p.expression===this)return true;if(p instanceof AST_Unary)return true;if(p instanceof AST_PropAccess&&p.expression===this)return true;if(p instanceof AST_Binary){var po=p.operator,pp=PRECEDENCE[po];var so=this.operator,sp=PRECEDENCE[so];if(pp>sp||pp==sp&&this===p.right){return true;}}});PARENS(AST_PropAccess,function(output){var p=output.parent();if(p instanceof AST_New&&p.expression===this){try{this.walk(new TreeWalker(function(node){if(node instanceof AST_Call)throw p;}));}catch(ex){if(ex!==p)throw ex;return true;}}});PARENS(AST_Call,function(output){var p=output.parent(),p1;if(p instanceof AST_New&&p.expression===this)return true;return this.expression instanceof AST_Function&&p instanceof AST_PropAccess&&p.expression===this&&(p1=output.parent(1))instanceof AST_Assign&&p1.left===p;});PARENS(AST_New,function(output){var p=output.parent();if(no_constructor_parens(this,output)&&(p instanceof AST_PropAccess||p instanceof AST_Call&&p.expression===this))return true;});PARENS(AST_Number,function(output){var p=output.parent();if(this.getValue()<0&&p instanceof AST_PropAccess&&p.expression===this)return true;});PARENS([AST_Assign,AST_Conditional],function(output){var p=output.parent();if(p instanceof AST_Unary)return true;if(p instanceof AST_Binary&&!(p instanceof AST_Assign))return true;if(p instanceof AST_Call&&p.expression===this)return true;if(p instanceof AST_Conditional&&p.condition===this)return true;if(p instanceof AST_PropAccess&&p.expression===this)return true;});DEFPRINT(AST_Directive,function(self,output){output.print_string(self.value,self.quote);output.semicolon();});DEFPRINT(AST_Debugger,function(self,output){output.print("debugger");output.semicolon();});function display_body(body,is_toplevel,output){var last=body.length-1;body.forEach(function(stmt,i){if(!(stmt instanceof AST_EmptyStatement)){output.indent();stmt.print(output);if(!(i==last&&is_toplevel)){output.newline();if(is_toplevel)output.newline();}}});}AST_StatementWithBody.DEFMETHOD("_do_print_body",function(output){force_statement(this.body,output);});DEFPRINT(AST_Statement,function(self,output){self.body.print(output);output.semicolon();});DEFPRINT(AST_Toplevel,function(self,output){display_body(self.body,true,output);output.print("");});DEFPRINT(AST_LabeledStatement,function(self,output){self.label.print(output);output.colon();self.body.print(output);});DEFPRINT(AST_SimpleStatement,function(self,output){self.body.print(output);output.semicolon();});function print_bracketed(body,output){if(body.length>0)output.with_block(function(){display_body(body,false,output);});else output.print("{}");}DEFPRINT(AST_BlockStatement,function(self,output){print_bracketed(self.body,output);});DEFPRINT(AST_EmptyStatement,function(self,output){output.semicolon();});DEFPRINT(AST_Do,function(self,output){output.print("do");output.space();self._do_print_body(output);output.space();output.print("while");output.space();output.with_parens(function(){self.condition.print(output);});output.semicolon();});DEFPRINT(AST_While,function(self,output){output.print("while");output.space();output.with_parens(function(){self.condition.print(output);});output.space();self._do_print_body(output);});DEFPRINT(AST_For,function(self,output){output.print("for");output.space();output.with_parens(function(){if(self.init&&!(self.init instanceof AST_EmptyStatement)){if(self.init instanceof AST_Definitions){self.init.print(output);}else{parenthesize_for_noin(self.init,output,true);}output.print(";");output.space();}else{output.print(";");}if(self.condition){self.condition.print(output);output.print(";");output.space();}else{output.print(";");}if(self.step){self.step.print(output);}});output.space();self._do_print_body(output);});DEFPRINT(AST_ForIn,function(self,output){output.print("for");output.space();output.with_parens(function(){self.init.print(output);output.space();output.print("in");output.space();self.object.print(output);});output.space();self._do_print_body(output);});DEFPRINT(AST_With,function(self,output){output.print("with");output.space();output.with_parens(function(){self.expression.print(output);});output.space();self._do_print_body(output);});AST_Lambda.DEFMETHOD("_do_print",function(output,nokeyword){var self=this;if(!nokeyword){output.print("function");}if(self.name){output.space();self.name.print(output);}output.with_parens(function(){self.argnames.forEach(function(arg,i){if(i)output.comma();arg.print(output);});});output.space();print_bracketed(self.body,output);});DEFPRINT(AST_Lambda,function(self,output){self._do_print(output);});AST_Exit.DEFMETHOD("_do_print",function(output,kind){output.print(kind);if(this.value){output.space();this.value.print(output);}output.semicolon();});DEFPRINT(AST_Return,function(self,output){self._do_print(output,"return");});DEFPRINT(AST_Throw,function(self,output){self._do_print(output,"throw");});AST_LoopControl.DEFMETHOD("_do_print",function(output,kind){output.print(kind);if(this.label){output.space();this.label.print(output);}output.semicolon();});DEFPRINT(AST_Break,function(self,output){self._do_print(output,"break");});DEFPRINT(AST_Continue,function(self,output){self._do_print(output,"continue");});function make_then(self,output){if(output.option("bracketize")){make_block(self.body,output);return;}if(!self.body)return output.force_semicolon();if(self.body instanceof AST_Do&&!output.option("screw_ie8")){make_block(self.body,output);return;}var b=self.body;while(true){if(b instanceof AST_If){if(!b.alternative){make_block(self.body,output);return;}b=b.alternative;}else if(b instanceof AST_StatementWithBody){b=b.body;}else break;}force_statement(self.body,output);}DEFPRINT(AST_If,function(self,output){output.print("if");output.space();output.with_parens(function(){self.condition.print(output);});output.space();if(self.alternative){make_then(self,output);output.space();output.print("else");output.space();force_statement(self.alternative,output);}else{self._do_print_body(output);}});DEFPRINT(AST_Switch,function(self,output){output.print("switch");output.space();output.with_parens(function(){self.expression.print(output);});output.space();if(self.body.length>0)output.with_block(function(){self.body.forEach(function(stmt,i){if(i)output.newline();output.indent(true);stmt.print(output);});});else output.print("{}");});AST_SwitchBranch.DEFMETHOD("_do_print_body",function(output){if(this.body.length>0){output.newline();this.body.forEach(function(stmt){output.indent();stmt.print(output);output.newline();});}});DEFPRINT(AST_Default,function(self,output){output.print("default:");self._do_print_body(output);});DEFPRINT(AST_Case,function(self,output){output.print("case");output.space();self.expression.print(output);output.print(":");self._do_print_body(output);});DEFPRINT(AST_Try,function(self,output){output.print("try");output.space();print_bracketed(self.body,output);if(self.bcatch){output.space();self.bcatch.print(output);}if(self.bfinally){output.space();self.bfinally.print(output);}});DEFPRINT(AST_Catch,function(self,output){output.print("catch");output.space();output.with_parens(function(){self.argname.print(output);});output.space();print_bracketed(self.body,output);});DEFPRINT(AST_Finally,function(self,output){output.print("finally");output.space();print_bracketed(self.body,output);});AST_Definitions.DEFMETHOD("_do_print",function(output,kind){output.print(kind);output.space();this.definitions.forEach(function(def,i){if(i)output.comma();def.print(output);});var p=output.parent();var in_for=p instanceof AST_For||p instanceof AST_ForIn;var avoid_semicolon=in_for&&p.init===this;if(!avoid_semicolon)output.semicolon();});DEFPRINT(AST_Var,function(self,output){self._do_print(output,"var");});DEFPRINT(AST_Const,function(self,output){self._do_print(output,"const");});function parenthesize_for_noin(node,output,noin){if(!noin)node.print(output);else try{node.walk(new TreeWalker(function(node){if(node instanceof AST_Binary&&node.operator=="in")throw output;}));node.print(output);}catch(ex){if(ex!==output)throw ex;node.print(output,true);}}DEFPRINT(AST_VarDef,function(self,output){self.name.print(output);if(self.value){output.space();output.print("=");output.space();var p=output.parent(1);var noin=p instanceof AST_For||p instanceof AST_ForIn;parenthesize_for_noin(self.value,output,noin);}});DEFPRINT(AST_Call,function(self,output){self.expression.print(output);if(self instanceof AST_New&&no_constructor_parens(self,output))return;output.with_parens(function(){self.args.forEach(function(expr,i){if(i)output.comma();expr.print(output);});});});DEFPRINT(AST_New,function(self,output){output.print("new");output.space();AST_Call.prototype._codegen(self,output);});AST_Seq.DEFMETHOD("_do_print",function(output){this.car.print(output);if(this.cdr){output.comma();if(output.should_break()){output.newline();output.indent();}this.cdr.print(output);}});DEFPRINT(AST_Seq,function(self,output){self._do_print(output);});DEFPRINT(AST_Dot,function(self,output){var expr=self.expression;expr.print(output);if(expr instanceof AST_Number&&expr.getValue()>=0){if(!/[xa-f.]/i.test(output.last())){output.print(".");}}output.print(".");output.add_mapping(self.end);output.print_name(self.property);});DEFPRINT(AST_Sub,function(self,output){self.expression.print(output);output.print("[");self.property.print(output);output.print("]");});DEFPRINT(AST_UnaryPrefix,function(self,output){var op=self.operator;output.print(op);if(/^[a-z]/i.test(op)||/[+-]$/.test(op)&&self.expression instanceof AST_UnaryPrefix&&/^[+-]/.test(self.expression.operator)){output.space();}self.expression.print(output);});DEFPRINT(AST_UnaryPostfix,function(self,output){self.expression.print(output);output.print(self.operator);});DEFPRINT(AST_Binary,function(self,output){var op=self.operator;self.left.print(output);if(op[0]==">"&&self.left instanceof AST_UnaryPostfix&&self.left.operator=="--"){output.print(" ");}else{output.space();}output.print(op);if((op=="<"||op=="<<")&&self.right instanceof AST_UnaryPrefix&&self.right.operator=="!"&&self.right.expression instanceof AST_UnaryPrefix&&self.right.expression.operator=="--"){output.print(" ");}else{output.space();}self.right.print(output);});DEFPRINT(AST_Conditional,function(self,output){self.condition.print(output);output.space();output.print("?");output.space();self.consequent.print(output);output.space();output.colon();self.alternative.print(output);});DEFPRINT(AST_Array,function(self,output){output.with_square(function(){var a=self.elements,len=a.length;if(len>0)output.space();a.forEach(function(exp,i){if(i)output.comma();exp.print(output);if(i===len-1&&exp instanceof AST_Hole)output.comma();});if(len>0)output.space();});});DEFPRINT(AST_Object,function(self,output){if(self.properties.length>0)output.with_block(function(){self.properties.forEach(function(prop,i){if(i){output.print(",");output.newline();}output.indent();prop.print(output);});output.newline();});else output.print("{}");});DEFPRINT(AST_ObjectKeyVal,function(self,output){var key=self.key;var quote=self.quote;if(output.option("quote_keys")){output.print_string(key+"");}else if((typeof key=="number"||!output.option("beautify")&&+key+""==key)&&parseFloat(key)>=0){output.print(make_num(key));}else if(RESERVED_WORDS(key)?output.option("screw_ie8"):is_identifier_string(key)){output.print_name(key);}else{output.print_string(key,quote);}output.colon();self.value.print(output);});DEFPRINT(AST_ObjectSetter,function(self,output){output.print("set");output.space();self.key.print(output);self.value._do_print(output,true);});DEFPRINT(AST_ObjectGetter,function(self,output){output.print("get");output.space();self.key.print(output);self.value._do_print(output,true);});DEFPRINT(AST_Symbol,function(self,output){var def=self.definition();output.print_name(def?def.mangled_name||def.name:self.name);});DEFPRINT(AST_Undefined,function(self,output){output.print("void 0");});DEFPRINT(AST_Hole,noop);DEFPRINT(AST_Infinity,function(self,output){output.print("Infinity");});DEFPRINT(AST_NaN,function(self,output){output.print("NaN");});DEFPRINT(AST_This,function(self,output){output.print("this");});DEFPRINT(AST_Constant,function(self,output){output.print(self.getValue());});DEFPRINT(AST_String,function(self,output){output.print_string(self.getValue(),self.quote);});DEFPRINT(AST_Number,function(self,output){if(use_asm&&self.start.raw!=null){output.print(self.start.raw);}else{output.print(make_num(self.getValue()));}});function regexp_safe_literal(code){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(code)<0;}DEFPRINT(AST_RegExp,function(self,output){var str=self.getValue().toString();if(output.option("ascii_only")){str=output.to_ascii(str);}else if(output.option("unescape_regexps")){str=str.split("\\\\").map(function(str){return str.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(s){var code=parseInt(s.substr(2),16);return regexp_safe_literal(code)?String.fromCharCode(code):s;});}).join("\\\\");}output.print(str);var p=output.parent();if(p instanceof AST_Binary&&/^in/.test(p.operator)&&p.left===self)output.print(" ");});function force_statement(stat,output){if(output.option("bracketize")){if(!stat||stat instanceof AST_EmptyStatement)output.print("{}");else if(stat instanceof AST_BlockStatement)stat.print(output);else output.with_block(function(){output.indent();stat.print(output);output.newline();});}else{if(!stat||stat instanceof AST_EmptyStatement)output.force_semicolon();else stat.print(output);}}function first_in_statement(output){var a=output.stack(),i=a.length,node=a[--i],p=a[--i];while(i>0){if(p instanceof AST_Statement&&p.body===node)return true;if(p instanceof AST_Seq&&p.car===node||p instanceof AST_Call&&p.expression===node&&!(p instanceof AST_New)||p instanceof AST_Dot&&p.expression===node||p instanceof AST_Sub&&p.expression===node||p instanceof AST_Conditional&&p.condition===node||p instanceof AST_Binary&&p.left===node||p instanceof AST_UnaryPostfix&&p.expression===node){node=p;p=a[--i];}else{return false;}}}function no_constructor_parens(self,output){return self.args.length==0&&!output.option("beautify");}function best_of(a){var best=a[0],len=best.length;for(var i=1;i<a.length;++i){if(a[i].length<len){best=a[i];len=best.length;}}return best;}function make_num(num){var str=num.toString(10),a=[str.replace(/^0\./,".").replace("e+","e")],m;if(Math.floor(num)===num){if(num>=0){a.push("0x"+num.toString(16).toLowerCase(),"0"+num.toString(8));}else{a.push("-0x"+(-num).toString(16).toLowerCase(),"-0"+(-num).toString(8));}if(m=/^(.*?)(0+)$/.exec(num)){a.push(m[1]+"e"+m[2].length);}}else if(m=/^0?\.(0+)(.*)$/.exec(num)){a.push(m[2]+"e-"+(m[1].length+m[2].length),str.substr(str.indexOf(".")));}return best_of(a);}function make_block(stmt,output){if(stmt instanceof AST_BlockStatement){stmt.print(output);return;}output.with_block(function(){output.indent();stmt.print(output);output.newline();});}function DEFMAP(nodetype,generator){nodetype.DEFMETHOD("add_source_map",function(stream){generator(this,stream);});}DEFMAP(AST_Node,noop);function basic_sourcemap_gen(self,output){output.add_mapping(self.start);}DEFMAP(AST_Directive,basic_sourcemap_gen);DEFMAP(AST_Debugger,basic_sourcemap_gen);DEFMAP(AST_Symbol,basic_sourcemap_gen);DEFMAP(AST_Jump,basic_sourcemap_gen);DEFMAP(AST_StatementWithBody,basic_sourcemap_gen);DEFMAP(AST_LabeledStatement,noop);DEFMAP(AST_Lambda,basic_sourcemap_gen);DEFMAP(AST_Switch,basic_sourcemap_gen);DEFMAP(AST_SwitchBranch,basic_sourcemap_gen);DEFMAP(AST_BlockStatement,basic_sourcemap_gen);DEFMAP(AST_Toplevel,noop);DEFMAP(AST_New,basic_sourcemap_gen);DEFMAP(AST_Try,basic_sourcemap_gen);DEFMAP(AST_Catch,basic_sourcemap_gen);DEFMAP(AST_Finally,basic_sourcemap_gen);DEFMAP(AST_Definitions,basic_sourcemap_gen);DEFMAP(AST_Constant,basic_sourcemap_gen);DEFMAP(AST_ObjectSetter,function(self,output){output.add_mapping(self.start,self.key.name);});DEFMAP(AST_ObjectGetter,function(self,output){output.add_mapping(self.start,self.key.name);});DEFMAP(AST_ObjectProperty,function(self,output){output.add_mapping(self.start,self.key);});})();"use strict";function Compressor(options,false_by_default){if(!(this instanceof Compressor))return new Compressor(options,false_by_default);TreeTransformer.call(this,this.before,this.after);this.options=defaults(options,{sequences:!false_by_default,properties:!false_by_default,dead_code:!false_by_default,drop_debugger:!false_by_default,unsafe:false,unsafe_comps:false,conditionals:!false_by_default,comparisons:!false_by_default,evaluate:!false_by_default,booleans:!false_by_default,loops:!false_by_default,unused:!false_by_default,hoist_funs:!false_by_default,keep_fargs:true,keep_fnames:false,hoist_vars:false,if_return:!false_by_default,join_vars:!false_by_default,cascade:!false_by_default,side_effects:!false_by_default,pure_getters:false,pure_funcs:null,negate_iife:!false_by_default,screw_ie8:false,drop_console:false,angular:false,warnings:true,global_defs:{}},true);}Compressor.prototype=new TreeTransformer();merge(Compressor.prototype,{option:function option(key){return this.options[key];},warn:function warn(){if(this.options.warnings)AST_Node.warn.apply(AST_Node,arguments);},before:function before(node,descend,in_list){if(node._squeezed)return node;var was_scope=false;if(node instanceof AST_Scope){node=node.hoist_declarations(this);was_scope=true;}descend(node,this);node=node.optimize(this);if(was_scope&&node instanceof AST_Scope){node.drop_unused(this);descend(node,this);}node._squeezed=true;return node;}});(function(){function OPT(node,optimizer){node.DEFMETHOD("optimize",function(compressor){var self=this;if(self._optimized)return self;if(compressor.has_directive("use asm"))return self;var opt=optimizer(self,compressor);opt._optimized=true;if(opt===self)return opt;return opt.transform(compressor);});}OPT(AST_Node,function(self,compressor){return self;});AST_Node.DEFMETHOD("equivalent_to",function(node){return this.print_to_string()==node.print_to_string();});function make_node(ctor,orig,props){if(!props)props={};if(orig){if(!props.start)props.start=orig.start;if(!props.end)props.end=orig.end;}return new ctor(props);}function make_node_from_constant(compressor,val,orig){if(val instanceof AST_Node)return val.transform(compressor);switch(typeof val==="undefined"?"undefined":_typeof(val)){case"string":return make_node(AST_String,orig,{value:val}).optimize(compressor);case"number":return make_node(isNaN(val)?AST_NaN:AST_Number,orig,{value:val}).optimize(compressor);case"boolean":return make_node(val?AST_True:AST_False,orig).optimize(compressor);case"undefined":return make_node(AST_Undefined,orig).optimize(compressor);default:if(val===null){return make_node(AST_Null,orig,{value:null}).optimize(compressor);}if(val instanceof RegExp){return make_node(AST_RegExp,orig,{value:val}).optimize(compressor);}throw new Error(string_template("Can't handle constant of type: {type}",{type:typeof val==="undefined"?"undefined":_typeof(val)}));}}function as_statement_array(thing){if(thing===null)return[];if(thing instanceof AST_BlockStatement)return thing.body;if(thing instanceof AST_EmptyStatement)return[];if(thing instanceof AST_Statement)return[thing];throw new Error("Can't convert thing to statement array");}function is_empty(thing){if(thing===null)return true;if(thing instanceof AST_EmptyStatement)return true;if(thing instanceof AST_BlockStatement)return thing.body.length==0;return false;}function loop_body(x){if(x instanceof AST_Switch)return x;if(x instanceof AST_For||x instanceof AST_ForIn||x instanceof AST_DWLoop){return x.body instanceof AST_BlockStatement?x.body:x;}return x;}function tighten_body(statements,compressor){var CHANGED,max_iter=10;do{CHANGED=false;if(compressor.option("angular")){statements=process_for_angular(statements);}statements=eliminate_spurious_blocks(statements);if(compressor.option("dead_code")){statements=eliminate_dead_code(statements,compressor);}if(compressor.option("if_return")){statements=handle_if_return(statements,compressor);}if(compressor.option("sequences")){statements=sequencesize(statements,compressor);}if(compressor.option("join_vars")){statements=join_consecutive_vars(statements,compressor);}}while(CHANGED&&max_iter-->0);if(compressor.option("negate_iife")){negate_iifes(statements,compressor);}return statements;function process_for_angular(statements){function has_inject(comment){return (/@ngInject/.test(comment.value));}function make_arguments_names_list(func){return func.argnames.map(function(sym){return make_node(AST_String,sym,{value:sym.name});});}function make_array(orig,elements){return make_node(AST_Array,orig,{elements:elements});}function make_injector(func,name){return make_node(AST_SimpleStatement,func,{body:make_node(AST_Assign,func,{operator:"=",left:make_node(AST_Dot,name,{expression:make_node(AST_SymbolRef,name,name),property:"$inject"}),right:make_array(func,make_arguments_names_list(func))})});}function check_expression(body){if(body&&body.args){body.args.forEach(function(argument,index,array){var comments=argument.start.comments_before;if(argument instanceof AST_Lambda&&comments.length&&has_inject(comments[0])){array[index]=make_array(argument,make_arguments_names_list(argument).concat(argument));}});if(body.expression&&body.expression.expression){check_expression(body.expression.expression);}}}return statements.reduce(function(a,stat){a.push(stat);if(stat.body&&stat.body.args){check_expression(stat.body);}else{var token=stat.start;var comments=token.comments_before;if(comments&&comments.length>0){var last=comments.pop();if(has_inject(last)){if(stat instanceof AST_Defun){a.push(make_injector(stat,stat.name));}else if(stat instanceof AST_Definitions){stat.definitions.forEach(function(def){if(def.value&&def.value instanceof AST_Lambda){a.push(make_injector(def.value,def.name));}});}else{compressor.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",token);}}}}return a;},[]);}function eliminate_spurious_blocks(statements){var seen_dirs=[];return statements.reduce(function(a,stat){if(stat instanceof AST_BlockStatement){CHANGED=true;a.push.apply(a,eliminate_spurious_blocks(stat.body));}else if(stat instanceof AST_EmptyStatement){CHANGED=true;}else if(stat instanceof AST_Directive){if(seen_dirs.indexOf(stat.value)<0){a.push(stat);seen_dirs.push(stat.value);}else{CHANGED=true;}}else{a.push(stat);}return a;},[]);}function handle_if_return(statements,compressor){var self=compressor.self();var in_lambda=self instanceof AST_Lambda;var ret=[];loop:for(var i=statements.length;--i>=0;){var stat=statements[i];switch(true){case in_lambda&&stat instanceof AST_Return&&!stat.value&&ret.length==0:CHANGED=true;continue loop;case stat instanceof AST_If:if(stat.body instanceof AST_Return){if((in_lambda&&ret.length==0||ret[0]instanceof AST_Return&&!ret[0].value)&&!stat.body.value&&!stat.alternative){CHANGED=true;var cond=make_node(AST_SimpleStatement,stat.condition,{body:stat.condition});ret.unshift(cond);continue loop;}if(ret[0]instanceof AST_Return&&stat.body.value&&ret[0].value&&!stat.alternative){CHANGED=true;stat=stat.clone();stat.alternative=ret[0];ret[0]=stat.transform(compressor);continue loop;}if((ret.length==0||ret[0]instanceof AST_Return)&&stat.body.value&&!stat.alternative&&in_lambda){CHANGED=true;stat=stat.clone();stat.alternative=ret[0]||make_node(AST_Return,stat,{value:make_node(AST_Undefined,stat)});ret[0]=stat.transform(compressor);continue loop;}if(!stat.body.value&&in_lambda){CHANGED=true;stat=stat.clone();stat.condition=stat.condition.negate(compressor);stat.body=make_node(AST_BlockStatement,stat,{body:as_statement_array(stat.alternative).concat(ret)});stat.alternative=null;ret=[stat.transform(compressor)];continue loop;}if(compressor.option("sequences")&&ret.length==1&&in_lambda&&ret[0]instanceof AST_SimpleStatement&&(!stat.alternative||stat.alternative instanceof AST_SimpleStatement)){CHANGED=true;ret.push(make_node(AST_Return,ret[0],{value:make_node(AST_Undefined,ret[0])}).transform(compressor));ret=as_statement_array(stat.alternative).concat(ret);ret.unshift(stat);continue loop;}}var ab=aborts(stat.body);var lct=ab instanceof AST_LoopControl?compressor.loopcontrol_target(ab.label):null;if(ab&&(ab instanceof AST_Return&&!ab.value&&in_lambda||ab instanceof AST_Continue&&self===loop_body(lct)||ab instanceof AST_Break&&lct instanceof AST_BlockStatement&&self===lct)){if(ab.label){remove(ab.label.thedef.references,ab);}CHANGED=true;var body=as_statement_array(stat.body).slice(0,-1);stat=stat.clone();stat.condition=stat.condition.negate(compressor);stat.body=make_node(AST_BlockStatement,stat,{body:as_statement_array(stat.alternative).concat(ret)});stat.alternative=make_node(AST_BlockStatement,stat,{body:body});ret=[stat.transform(compressor)];continue loop;}var ab=aborts(stat.alternative);var lct=ab instanceof AST_LoopControl?compressor.loopcontrol_target(ab.label):null;if(ab&&(ab instanceof AST_Return&&!ab.value&&in_lambda||ab instanceof AST_Continue&&self===loop_body(lct)||ab instanceof AST_Break&&lct instanceof AST_BlockStatement&&self===lct)){if(ab.label){remove(ab.label.thedef.references,ab);}CHANGED=true;stat=stat.clone();stat.body=make_node(AST_BlockStatement,stat.body,{body:as_statement_array(stat.body).concat(ret)});stat.alternative=make_node(AST_BlockStatement,stat.alternative,{body:as_statement_array(stat.alternative).slice(0,-1)});ret=[stat.transform(compressor)];continue loop;}ret.unshift(stat);break;default:ret.unshift(stat);break;}}return ret;}function eliminate_dead_code(statements,compressor){var has_quit=false;var orig=statements.length;var self=compressor.self();statements=statements.reduce(function(a,stat){if(has_quit){extract_declarations_from_unreachable_code(compressor,stat,a);}else{if(stat instanceof AST_LoopControl){var lct=compressor.loopcontrol_target(stat.label);if(stat instanceof AST_Break&&lct instanceof AST_BlockStatement&&loop_body(lct)===self||stat instanceof AST_Continue&&loop_body(lct)===self){if(stat.label){remove(stat.label.thedef.references,stat);}}else{a.push(stat);}}else{a.push(stat);}if(aborts(stat))has_quit=true;}return a;},[]);CHANGED=statements.length!=orig;return statements;}function sequencesize(statements,compressor){if(statements.length<2)return statements;var seq=[],ret=[];function push_seq(){seq=AST_Seq.from_array(seq);if(seq)ret.push(make_node(AST_SimpleStatement,seq,{body:seq}));seq=[];}statements.forEach(function(stat){if(stat instanceof AST_SimpleStatement&&seq.length<2e3)seq.push(stat.body);else push_seq(),ret.push(stat);});push_seq();ret=sequencesize_2(ret,compressor);CHANGED=ret.length!=statements.length;return ret;}function sequencesize_2(statements,compressor){function cons_seq(right){ret.pop();var left=prev.body;if(left instanceof AST_Seq){left.add(right);}else{left=AST_Seq.cons(left,right);}return left.transform(compressor);}var ret=[],prev=null;statements.forEach(function(stat){if(prev){if(stat instanceof AST_For){var opera={};try{prev.body.walk(new TreeWalker(function(node){if(node instanceof AST_Binary&&node.operator=="in")throw opera;}));if(stat.init&&!(stat.init instanceof AST_Definitions)){stat.init=cons_seq(stat.init);}else if(!stat.init){stat.init=prev.body;ret.pop();}}catch(ex){if(ex!==opera)throw ex;}}else if(stat instanceof AST_If){stat.condition=cons_seq(stat.condition);}else if(stat instanceof AST_With){stat.expression=cons_seq(stat.expression);}else if(stat instanceof AST_Exit&&stat.value){stat.value=cons_seq(stat.value);}else if(stat instanceof AST_Exit){stat.value=cons_seq(make_node(AST_Undefined,stat));}else if(stat instanceof AST_Switch){stat.expression=cons_seq(stat.expression);}}ret.push(stat);prev=stat instanceof AST_SimpleStatement?stat:null;});return ret;}function join_consecutive_vars(statements,compressor){var prev=null;return statements.reduce(function(a,stat){if(stat instanceof AST_Definitions&&prev&&prev.TYPE==stat.TYPE){prev.definitions=prev.definitions.concat(stat.definitions);CHANGED=true;}else if(stat instanceof AST_For&&prev instanceof AST_Definitions&&(!stat.init||stat.init.TYPE==prev.TYPE)){CHANGED=true;a.pop();if(stat.init){stat.init.definitions=prev.definitions.concat(stat.init.definitions);}else{stat.init=prev;}a.push(stat);prev=stat;}else{prev=stat;a.push(stat);}return a;},[]);}function negate_iifes(statements,compressor){statements.forEach(function(stat){if(stat instanceof AST_SimpleStatement){stat.body=function transform(thing){return thing.transform(new TreeTransformer(function(node){if(node instanceof AST_Call&&node.expression instanceof AST_Function){return make_node(AST_UnaryPrefix,node,{operator:"!",expression:node});}else if(node instanceof AST_Call){node.expression=transform(node.expression);}else if(node instanceof AST_Seq){node.car=transform(node.car);}else if(node instanceof AST_Conditional){var expr=transform(node.condition);if(expr!==node.condition){node.condition=expr;var tmp=node.consequent;node.consequent=node.alternative;node.alternative=tmp;}}return node;}));}(stat.body);}});}}function extract_declarations_from_unreachable_code(compressor,stat,target){compressor.warn("Dropping unreachable code [{file}:{line},{col}]",stat.start);stat.walk(new TreeWalker(function(node){if(node instanceof AST_Definitions){compressor.warn("Declarations in unreachable code! [{file}:{line},{col}]",node.start);node.remove_initializers();target.push(node);return true;}if(node instanceof AST_Defun){target.push(node);return true;}if(node instanceof AST_Scope){return true;}}));}(function(def){var unary_bool=["!","delete"];var binary_bool=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];def(AST_Node,function(){return false;});def(AST_UnaryPrefix,function(){return member(this.operator,unary_bool);});def(AST_Binary,function(){return member(this.operator,binary_bool)||(this.operator=="&&"||this.operator=="||")&&this.left.is_boolean()&&this.right.is_boolean();});def(AST_Conditional,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean();});def(AST_Assign,function(){return this.operator=="="&&this.right.is_boolean();});def(AST_Seq,function(){return this.cdr.is_boolean();});def(AST_True,function(){return true;});def(AST_False,function(){return true;});})(function(node,func){node.DEFMETHOD("is_boolean",func);});(function(def){def(AST_Node,function(){return false;});def(AST_String,function(){return true;});def(AST_UnaryPrefix,function(){return this.operator=="typeof";});def(AST_Binary,function(compressor){return this.operator=="+"&&(this.left.is_string(compressor)||this.right.is_string(compressor));});def(AST_Assign,function(compressor){return(this.operator=="="||this.operator=="+=")&&this.right.is_string(compressor);});def(AST_Seq,function(compressor){return this.cdr.is_string(compressor);});def(AST_Conditional,function(compressor){return this.consequent.is_string(compressor)&&this.alternative.is_string(compressor);});def(AST_Call,function(compressor){return compressor.option("unsafe")&&this.expression instanceof AST_SymbolRef&&this.expression.name=="String"&&this.expression.undeclared();});})(function(node,func){node.DEFMETHOD("is_string",func);});function best_of(ast1,ast2){return ast1.print_to_string().length>ast2.print_to_string().length?ast2:ast1;}(function(def){AST_Node.DEFMETHOD("evaluate",function(compressor){if(!compressor.option("evaluate"))return[this];try{var val=this._eval(compressor);return[best_of(make_node_from_constant(compressor,val,this),this),val];}catch(ex){if(ex!==def)throw ex;return[this];}});def(AST_Statement,function(){throw new Error(string_template("Cannot evaluate a statement [{file}:{line},{col}]",this.start));});def(AST_Function,function(){throw def;});function ev(node,compressor){if(!compressor)throw new Error("Compressor must be passed");return node._eval(compressor);}def(AST_Node,function(){throw def;});def(AST_Constant,function(){return this.getValue();});def(AST_UnaryPrefix,function(compressor){var e=this.expression;switch(this.operator){case"!":return!ev(e,compressor);case"typeof":if(e instanceof AST_Function)return _typeof(function(){});e=ev(e,compressor);if(e instanceof RegExp)throw def;return typeof e==="undefined"?"undefined":_typeof(e);case"void":return void ev(e,compressor);case"~":return~ev(e,compressor);case"-":e=ev(e,compressor);if(e===0)throw def;return-e;case"+":return+ev(e,compressor);}throw def;});def(AST_Binary,function(c){var left=this.left,right=this.right;switch(this.operator){case"&&":return ev(left,c)&&ev(right,c);case"||":return ev(left,c)||ev(right,c);case"|":return ev(left,c)|ev(right,c);case"&":return ev(left,c)&ev(right,c);case"^":return ev(left,c)^ev(right,c);case"+":return ev(left,c)+ev(right,c);case"*":return ev(left,c)*ev(right,c);case"/":return ev(left,c)/ev(right,c);case"%":return ev(left,c)%ev(right,c);case"-":return ev(left,c)-ev(right,c);case"<<":return ev(left,c)<<ev(right,c);case">>":return ev(left,c)>>ev(right,c);case">>>":return ev(left,c)>>>ev(right,c);case"==":return ev(left,c)==ev(right,c);case"===":return ev(left,c)===ev(right,c);case"!=":return ev(left,c)!=ev(right,c);case"!==":return ev(left,c)!==ev(right,c);case"<":return ev(left,c)<ev(right,c);case"<=":return ev(left,c)<=ev(right,c);case">":return ev(left,c)>ev(right,c);case">=":return ev(left,c)>=ev(right,c);case"in":return ev(left,c)in ev(right,c);case"instanceof":return ev(left,c)instanceof ev(right,c);}throw def;});def(AST_Conditional,function(compressor){return ev(this.condition,compressor)?ev(this.consequent,compressor):ev(this.alternative,compressor);});def(AST_SymbolRef,function(compressor){var d=this.definition();if(d&&d.constant&&d.init)return ev(d.init,compressor);throw def;});def(AST_Dot,function(compressor){if(compressor.option("unsafe")&&this.property=="length"){var str=ev(this.expression,compressor);if(typeof str=="string")return str.length;}throw def;});})(function(node,func){node.DEFMETHOD("_eval",func);});(function(def){function basic_negation(exp){return make_node(AST_UnaryPrefix,exp,{operator:"!",expression:exp});}def(AST_Node,function(){return basic_negation(this);});def(AST_Statement,function(){throw new Error("Cannot negate a statement");});def(AST_Function,function(){return basic_negation(this);});def(AST_UnaryPrefix,function(){if(this.operator=="!")return this.expression;return basic_negation(this);});def(AST_Seq,function(compressor){var self=this.clone();self.cdr=self.cdr.negate(compressor);return self;});def(AST_Conditional,function(compressor){var self=this.clone();self.consequent=self.consequent.negate(compressor);self.alternative=self.alternative.negate(compressor);return best_of(basic_negation(this),self);});def(AST_Binary,function(compressor){var self=this.clone(),op=this.operator;if(compressor.option("unsafe_comps")){switch(op){case"<=":self.operator=">";return self;case"<":self.operator=">=";return self;case">=":self.operator="<";return self;case">":self.operator="<=";return self;}}switch(op){case"==":self.operator="!=";return self;case"!=":self.operator="==";return self;case"===":self.operator="!==";return self;case"!==":self.operator="===";return self;case"&&":self.operator="||";self.left=self.left.negate(compressor);self.right=self.right.negate(compressor);return best_of(basic_negation(this),self);case"||":self.operator="&&";self.left=self.left.negate(compressor);self.right=self.right.negate(compressor);return best_of(basic_negation(this),self);}return basic_negation(this);});})(function(node,func){node.DEFMETHOD("negate",function(compressor){return func.call(this,compressor);});});(function(def){def(AST_Node,function(compressor){return true;});def(AST_EmptyStatement,function(compressor){return false;});def(AST_Constant,function(compressor){return false;});def(AST_This,function(compressor){return false;});def(AST_Call,function(compressor){var pure=compressor.option("pure_funcs");if(!pure)return true;if(typeof pure=="function")return pure(this);return pure.indexOf(this.expression.print_to_string())<0;});def(AST_Block,function(compressor){for(var i=this.body.length;--i>=0;){if(this.body[i].has_side_effects(compressor))return true;}return false;});def(AST_SimpleStatement,function(compressor){return this.body.has_side_effects(compressor);});def(AST_Defun,function(compressor){return true;});def(AST_Function,function(compressor){return false;});def(AST_Binary,function(compressor){return this.left.has_side_effects(compressor)||this.right.has_side_effects(compressor);});def(AST_Assign,function(compressor){return true;});def(AST_Conditional,function(compressor){return this.condition.has_side_effects(compressor)||this.consequent.has_side_effects(compressor)||this.alternative.has_side_effects(compressor);});def(AST_Unary,function(compressor){return this.operator=="delete"||this.operator=="++"||this.operator=="--"||this.expression.has_side_effects(compressor);});def(AST_SymbolRef,function(compressor){return this.global()&&this.undeclared();});def(AST_Object,function(compressor){for(var i=this.properties.length;--i>=0;){if(this.properties[i].has_side_effects(compressor))return true;}return false;});def(AST_ObjectProperty,function(compressor){return this.value.has_side_effects(compressor);});def(AST_Array,function(compressor){for(var i=this.elements.length;--i>=0;){if(this.elements[i].has_side_effects(compressor))return true;}return false;});def(AST_Dot,function(compressor){if(!compressor.option("pure_getters"))return true;return this.expression.has_side_effects(compressor);});def(AST_Sub,function(compressor){if(!compressor.option("pure_getters"))return true;return this.expression.has_side_effects(compressor)||this.property.has_side_effects(compressor);});def(AST_PropAccess,function(compressor){return!compressor.option("pure_getters");});def(AST_Seq,function(compressor){return this.car.has_side_effects(compressor)||this.cdr.has_side_effects(compressor);});})(function(node,func){node.DEFMETHOD("has_side_effects",func);});function aborts(thing){return thing&&thing.aborts();}(function(def){def(AST_Statement,function(){return null;});def(AST_Jump,function(){return this;});function block_aborts(){var n=this.body.length;return n>0&&aborts(this.body[n-1]);}def(AST_BlockStatement,block_aborts);def(AST_SwitchBranch,block_aborts);def(AST_If,function(){return this.alternative&&aborts(this.body)&&aborts(this.alternative)&&this;});})(function(node,func){node.DEFMETHOD("aborts",func);});OPT(AST_Directive,function(self,compressor){if(compressor.has_directive(self.value)==="up"){return make_node(AST_EmptyStatement,self);}return self;});OPT(AST_Debugger,function(self,compressor){if(compressor.option("drop_debugger"))return make_node(AST_EmptyStatement,self);return self;});OPT(AST_LabeledStatement,function(self,compressor){if(self.body instanceof AST_Break&&compressor.loopcontrol_target(self.body.label)===self.body){return make_node(AST_EmptyStatement,self);}return self.label.references.length==0?self.body:self;});OPT(AST_Block,function(self,compressor){self.body=tighten_body(self.body,compressor);return self;});OPT(AST_BlockStatement,function(self,compressor){self.body=tighten_body(self.body,compressor);switch(self.body.length){case 1:return self.body[0];case 0:return make_node(AST_EmptyStatement,self);}return self;});AST_Scope.DEFMETHOD("drop_unused",function(compressor){var self=this;if(compressor.has_directive("use asm"))return self;if(compressor.option("unused")&&!(self instanceof AST_Toplevel)&&!self.uses_eval){var in_use=[];var initializations=new Dictionary();var scope=this;var tw=new TreeWalker(function(node,descend){if(node!==self){if(node instanceof AST_Defun){initializations.add(node.name.name,node);return true;}if(node instanceof AST_Definitions&&scope===self){node.definitions.forEach(function(def){if(def.value){initializations.add(def.name.name,def.value);if(def.value.has_side_effects(compressor)){def.value.walk(tw);}}});return true;}if(node instanceof AST_SymbolRef){push_uniq(in_use,node.definition());return true;}if(node instanceof AST_Scope){var save_scope=scope;scope=node;descend();scope=save_scope;return true;}}});self.walk(tw);for(var i=0;i<in_use.length;++i){in_use[i].orig.forEach(function(decl){var init=initializations.get(decl.name);if(init)init.forEach(function(init){var tw=new TreeWalker(function(node){if(node instanceof AST_SymbolRef){push_uniq(in_use,node.definition());}});init.walk(tw);});});}var tt=new TreeTransformer(function before(node,descend,in_list){if(node instanceof AST_Lambda&&!(node instanceof AST_Accessor)){if(!compressor.option("keep_fargs")){for(var a=node.argnames,i=a.length;--i>=0;){var sym=a[i];if(sym.unreferenced()){a.pop();compressor.warn("Dropping unused function argument {name} [{file}:{line},{col}]",{name:sym.name,file:sym.start.file,line:sym.start.line,col:sym.start.col});}else break;}}}if(node instanceof AST_Defun&&node!==self){if(!member(node.name.definition(),in_use)){compressor.warn("Dropping unused function {name} [{file}:{line},{col}]",{name:node.name.name,file:node.name.start.file,line:node.name.start.line,col:node.name.start.col});return make_node(AST_EmptyStatement,node);}return node;}if(node instanceof AST_Definitions&&!(tt.parent()instanceof AST_ForIn)){var def=node.definitions.filter(function(def){if(member(def.name.definition(),in_use))return true;var w={name:def.name.name,file:def.name.start.file,line:def.name.start.line,col:def.name.start.col};if(def.value&&def.value.has_side_effects(compressor)){def._unused_side_effects=true;compressor.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",w);return true;}compressor.warn("Dropping unused variable {name} [{file}:{line},{col}]",w);return false;});def=mergeSort(def,function(a,b){if(!a.value&&b.value)return-1;if(!b.value&&a.value)return 1;return 0;});var side_effects=[];for(var i=0;i<def.length;){var x=def[i];if(x._unused_side_effects){side_effects.push(x.value);def.splice(i,1);}else{if(side_effects.length>0){side_effects.push(x.value);x.value=AST_Seq.from_array(side_effects);side_effects=[];}++i;}}if(side_effects.length>0){side_effects=make_node(AST_BlockStatement,node,{body:[make_node(AST_SimpleStatement,node,{body:AST_Seq.from_array(side_effects)})]});}else{side_effects=null;}if(def.length==0&&!side_effects){return make_node(AST_EmptyStatement,node);}if(def.length==0){return in_list?MAP.splice(side_effects.body):side_effects;}node.definitions=def;if(side_effects){side_effects.body.unshift(node);return in_list?MAP.splice(side_effects.body):side_effects;}return node;}if(node instanceof AST_For){descend(node,this);if(node.init instanceof AST_BlockStatement){var body=node.init.body.slice(0,-1);node.init=node.init.body.slice(-1)[0].body;body.push(node);return in_list?MAP.splice(body):make_node(AST_BlockStatement,node,{body:body});}}if(node instanceof AST_Scope&&node!==self)return node;});self.transform(tt);}});AST_Scope.DEFMETHOD("hoist_declarations",function(compressor){var self=this;if(compressor.has_directive("use asm"))return self;var hoist_funs=compressor.option("hoist_funs");var hoist_vars=compressor.option("hoist_vars");if(hoist_funs||hoist_vars){var dirs=[];var hoisted=[];var vars=new Dictionary(),vars_found=0,var_decl=0;self.walk(new TreeWalker(function(node){if(node instanceof AST_Scope&&node!==self)return true;if(node instanceof AST_Var){++var_decl;return true;}}));hoist_vars=hoist_vars&&var_decl>1;var tt=new TreeTransformer(function before(node){if(node!==self){if(node instanceof AST_Directive){dirs.push(node);return make_node(AST_EmptyStatement,node);}if(node instanceof AST_Defun&&hoist_funs){hoisted.push(node);return make_node(AST_EmptyStatement,node);}if(node instanceof AST_Var&&hoist_vars){node.definitions.forEach(function(def){vars.set(def.name.name,def);++vars_found;});var seq=node.to_assignments();var p=tt.parent();if(p instanceof AST_ForIn&&p.init===node){if(seq==null)return node.definitions[0].name;return seq;}if(p instanceof AST_For&&p.init===node){return seq;}if(!seq)return make_node(AST_EmptyStatement,node);return make_node(AST_SimpleStatement,node,{body:seq});}if(node instanceof AST_Scope)return node;}});self=self.transform(tt);if(vars_found>0){var defs=[];vars.each(function(def,name){if(self instanceof AST_Lambda&&find_if(function(x){return x.name==def.name.name;},self.argnames)){vars.del(name);}else{def=def.clone();def.value=null;defs.push(def);vars.set(name,def);}});if(defs.length>0){for(var i=0;i<self.body.length;){if(self.body[i]instanceof AST_SimpleStatement){var expr=self.body[i].body,sym,assign;if(expr instanceof AST_Assign&&expr.operator=="="&&(sym=expr.left)instanceof AST_Symbol&&vars.has(sym.name)){var def=vars.get(sym.name);if(def.value)break;def.value=expr.right;remove(defs,def);defs.push(def);self.body.splice(i,1);continue;}if(expr instanceof AST_Seq&&(assign=expr.car)instanceof AST_Assign&&assign.operator=="="&&(sym=assign.left)instanceof AST_Symbol&&vars.has(sym.name)){var def=vars.get(sym.name);if(def.value)break;def.value=assign.right;remove(defs,def);defs.push(def);self.body[i].body=expr.cdr;continue;}}if(self.body[i]instanceof AST_EmptyStatement){self.body.splice(i,1);continue;}if(self.body[i]instanceof AST_BlockStatement){var tmp=[i,1].concat(self.body[i].body);self.body.splice.apply(self.body,tmp);continue;}break;}defs=make_node(AST_Var,self,{definitions:defs});hoisted.push(defs);}}self.body=dirs.concat(hoisted,self.body);}return self;});OPT(AST_SimpleStatement,function(self,compressor){if(compressor.option("side_effects")){if(!self.body.has_side_effects(compressor)){compressor.warn("Dropping side-effect-free statement [{file}:{line},{col}]",self.start);return make_node(AST_EmptyStatement,self);}}return self;});OPT(AST_DWLoop,function(self,compressor){var cond=self.condition.evaluate(compressor);self.condition=cond[0];if(!compressor.option("loops"))return self;if(cond.length>1){if(cond[1]){return make_node(AST_For,self,{body:self.body});}else if(self instanceof AST_While){if(compressor.option("dead_code")){var a=[];extract_declarations_from_unreachable_code(compressor,self.body,a);return make_node(AST_BlockStatement,self,{body:a});}}}return self;});function if_break_in_loop(self,compressor){function drop_it(rest){rest=as_statement_array(rest);if(self.body instanceof AST_BlockStatement){self.body=self.body.clone();self.body.body=rest.concat(self.body.body.slice(1));self.body=self.body.transform(compressor);}else{self.body=make_node(AST_BlockStatement,self.body,{body:rest}).transform(compressor);}if_break_in_loop(self,compressor);}var first=self.body instanceof AST_BlockStatement?self.body.body[0]:self.body;if(first instanceof AST_If){if(first.body instanceof AST_Break&&compressor.loopcontrol_target(first.body.label)===self){if(self.condition){self.condition=make_node(AST_Binary,self.condition,{left:self.condition,operator:"&&",right:first.condition.negate(compressor)});}else{self.condition=first.condition.negate(compressor);}drop_it(first.alternative);}else if(first.alternative instanceof AST_Break&&compressor.loopcontrol_target(first.alternative.label)===self){if(self.condition){self.condition=make_node(AST_Binary,self.condition,{left:self.condition,operator:"&&",right:first.condition});}else{self.condition=first.condition;}drop_it(first.body);}}}OPT(AST_While,function(self,compressor){if(!compressor.option("loops"))return self;self=AST_DWLoop.prototype.optimize.call(self,compressor);if(self instanceof AST_While){if_break_in_loop(self,compressor);self=make_node(AST_For,self,self).transform(compressor);}return self;});OPT(AST_For,function(self,compressor){var cond=self.condition;if(cond){cond=cond.evaluate(compressor);self.condition=cond[0];}if(!compressor.option("loops"))return self;if(cond){if(cond.length>1&&!cond[1]){if(compressor.option("dead_code")){var a=[];if(self.init instanceof AST_Statement){a.push(self.init);}else if(self.init){a.push(make_node(AST_SimpleStatement,self.init,{body:self.init}));}extract_declarations_from_unreachable_code(compressor,self.body,a);return make_node(AST_BlockStatement,self,{body:a});}}}if_break_in_loop(self,compressor);return self;});OPT(AST_If,function(self,compressor){if(!compressor.option("conditionals"))return self;var cond=self.condition.evaluate(compressor);self.condition=cond[0];if(cond.length>1){if(cond[1]){compressor.warn("Condition always true [{file}:{line},{col}]",self.condition.start);if(compressor.option("dead_code")){var a=[];if(self.alternative){extract_declarations_from_unreachable_code(compressor,self.alternative,a);}a.push(self.body);return make_node(AST_BlockStatement,self,{body:a}).transform(compressor);}}else{compressor.warn("Condition always false [{file}:{line},{col}]",self.condition.start);if(compressor.option("dead_code")){var a=[];extract_declarations_from_unreachable_code(compressor,self.body,a);if(self.alternative)a.push(self.alternative);return make_node(AST_BlockStatement,self,{body:a}).transform(compressor);}}}if(is_empty(self.alternative))self.alternative=null;var negated=self.condition.negate(compressor);var negated_is_best=best_of(self.condition,negated)===negated;if(self.alternative&&negated_is_best){negated_is_best=false;self.condition=negated;var tmp=self.body;self.body=self.alternative||make_node(AST_EmptyStatement);self.alternative=tmp;}if(is_empty(self.body)&&is_empty(self.alternative)){return make_node(AST_SimpleStatement,self.condition,{body:self.condition}).transform(compressor);}if(self.body instanceof AST_SimpleStatement&&self.alternative instanceof AST_SimpleStatement){return make_node(AST_SimpleStatement,self,{body:make_node(AST_Conditional,self,{condition:self.condition,consequent:self.body.body,alternative:self.alternative.body})}).transform(compressor);}if(is_empty(self.alternative)&&self.body instanceof AST_SimpleStatement){if(negated_is_best)return make_node(AST_SimpleStatement,self,{body:make_node(AST_Binary,self,{operator:"||",left:negated,right:self.body.body})}).transform(compressor);return make_node(AST_SimpleStatement,self,{body:make_node(AST_Binary,self,{operator:"&&",left:self.condition,right:self.body.body})}).transform(compressor);}if(self.body instanceof AST_EmptyStatement&&self.alternative&&self.alternative instanceof AST_SimpleStatement){return make_node(AST_SimpleStatement,self,{body:make_node(AST_Binary,self,{operator:"||",left:self.condition,right:self.alternative.body})}).transform(compressor);}if(self.body instanceof AST_Exit&&self.alternative instanceof AST_Exit&&self.body.TYPE==self.alternative.TYPE){return make_node(self.body.CTOR,self,{value:make_node(AST_Conditional,self,{condition:self.condition,consequent:self.body.value||make_node(AST_Undefined,self.body).optimize(compressor),alternative:self.alternative.value||make_node(AST_Undefined,self.alternative).optimize(compressor)})}).transform(compressor);}if(self.body instanceof AST_If&&!self.body.alternative&&!self.alternative){self.condition=make_node(AST_Binary,self.condition,{operator:"&&",left:self.condition,right:self.body.condition}).transform(compressor);self.body=self.body.body;}if(aborts(self.body)){if(self.alternative){var alt=self.alternative;self.alternative=null;return make_node(AST_BlockStatement,self,{body:[self,alt]}).transform(compressor);}}if(aborts(self.alternative)){var body=self.body;self.body=self.alternative;self.condition=negated_is_best?negated:self.condition.negate(compressor);self.alternative=null;return make_node(AST_BlockStatement,self,{body:[self,body]}).transform(compressor);}return self;});OPT(AST_Switch,function(self,compressor){if(self.body.length==0&&compressor.option("conditionals")){return make_node(AST_SimpleStatement,self,{body:self.expression}).transform(compressor);}for(;;){var last_branch=self.body[self.body.length-1];if(last_branch){var stat=last_branch.body[last_branch.body.length-1];if(stat instanceof AST_Break&&loop_body(compressor.loopcontrol_target(stat.label))===self)last_branch.body.pop();if(last_branch instanceof AST_Default&&last_branch.body.length==0){self.body.pop();continue;}}break;}var exp=self.expression.evaluate(compressor);out:if(exp.length==2)try{self.expression=exp[0];if(!compressor.option("dead_code"))break out;var value=exp[1];var in_if=false;var in_block=false;var started=false;var stopped=false;var ruined=false;var tt=new TreeTransformer(function(node,descend,in_list){if(node instanceof AST_Lambda||node instanceof AST_SimpleStatement){return node;}else if(node instanceof AST_Switch&&node===self){node=node.clone();descend(node,this);return ruined?node:make_node(AST_BlockStatement,node,{body:node.body.reduce(function(a,branch){return a.concat(branch.body);},[])}).transform(compressor);}else if(node instanceof AST_If||node instanceof AST_Try){var save=in_if;in_if=!in_block;descend(node,this);in_if=save;return node;}else if(node instanceof AST_StatementWithBody||node instanceof AST_Switch){var save=in_block;in_block=true;descend(node,this);in_block=save;return node;}else if(node instanceof AST_Break&&this.loopcontrol_target(node.label)===self){if(in_if){ruined=true;return node;}if(in_block)return node;stopped=true;return in_list?MAP.skip:make_node(AST_EmptyStatement,node);}else if(node instanceof AST_SwitchBranch&&this.parent()===self){if(stopped)return MAP.skip;if(node instanceof AST_Case){var exp=node.expression.evaluate(compressor);if(exp.length<2){throw self;}if(exp[1]===value||started){started=true;if(aborts(node))stopped=true;descend(node,this);return node;}return MAP.skip;}descend(node,this);return node;}});tt.stack=compressor.stack.slice();self=self.transform(tt);}catch(ex){if(ex!==self)throw ex;}return self;});OPT(AST_Case,function(self,compressor){self.body=tighten_body(self.body,compressor);return self;});OPT(AST_Try,function(self,compressor){self.body=tighten_body(self.body,compressor);return self;});AST_Definitions.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(def){def.value=null;});});AST_Definitions.DEFMETHOD("to_assignments",function(){var assignments=this.definitions.reduce(function(a,def){if(def.value){var name=make_node(AST_SymbolRef,def.name,def.name);a.push(make_node(AST_Assign,def,{operator:"=",left:name,right:def.value}));}return a;},[]);if(assignments.length==0)return null;return AST_Seq.from_array(assignments);});OPT(AST_Definitions,function(self,compressor){if(self.definitions.length==0)return make_node(AST_EmptyStatement,self);return self;});OPT(AST_Function,function(self,compressor){self=AST_Lambda.prototype.optimize.call(self,compressor);if(compressor.option("unused")&&!compressor.option("keep_fnames")){if(self.name&&self.name.unreferenced()){self.name=null;}}return self;});OPT(AST_Call,function(self,compressor){if(compressor.option("unsafe")){var exp=self.expression;if(exp instanceof AST_SymbolRef&&exp.undeclared()){switch(exp.name){case"Array":if(self.args.length!=1){return make_node(AST_Array,self,{elements:self.args}).transform(compressor);}break;case"Object":if(self.args.length==0){return make_node(AST_Object,self,{properties:[]});}break;case"String":if(self.args.length==0)return make_node(AST_String,self,{value:""});if(self.args.length<=1)return make_node(AST_Binary,self,{left:self.args[0],operator:"+",right:make_node(AST_String,self,{value:""})}).transform(compressor);break;case"Number":if(self.args.length==0)return make_node(AST_Number,self,{value:0});if(self.args.length==1)return make_node(AST_UnaryPrefix,self,{expression:self.args[0],operator:"+"}).transform(compressor);case"Boolean":if(self.args.length==0)return make_node(AST_False,self);if(self.args.length==1)return make_node(AST_UnaryPrefix,self,{expression:make_node(AST_UnaryPrefix,null,{expression:self.args[0],operator:"!"}),operator:"!"}).transform(compressor);break;case"Function":if(self.args.length==0)return make_node(AST_Function,self,{argnames:[],body:[]});if(all(self.args,function(x){return x instanceof AST_String;})){try{var code="(function("+self.args.slice(0,-1).map(function(arg){return arg.value;}).join(",")+"){"+self.args[self.args.length-1].value+"})()";var ast=parse(code);ast.figure_out_scope({screw_ie8:compressor.option("screw_ie8")});var comp=new Compressor(compressor.options);ast=ast.transform(comp);ast.figure_out_scope({screw_ie8:compressor.option("screw_ie8")});ast.mangle_names();var fun;try{ast.walk(new TreeWalker(function(node){if(node instanceof AST_Lambda){fun=node;throw ast;}}));}catch(ex){if(ex!==ast)throw ex;}if(!fun)return self;var args=fun.argnames.map(function(arg,i){return make_node(AST_String,self.args[i],{value:arg.print_to_string()});});var code=OutputStream();AST_BlockStatement.prototype._codegen.call(fun,fun,code);code=code.toString().replace(/^\{|\}$/g,"");args.push(make_node(AST_String,self.args[self.args.length-1],{value:code}));self.args=args;return self;}catch(ex){if(ex instanceof JS_Parse_Error){compressor.warn("Error parsing code passed to new Function [{file}:{line},{col}]",self.args[self.args.length-1].start);compressor.warn(ex.toString());}else{console.log(ex);throw ex;}}}break;}}else if(exp instanceof AST_Dot&&exp.property=="toString"&&self.args.length==0){return make_node(AST_Binary,self,{left:make_node(AST_String,self,{value:""}),operator:"+",right:exp.expression}).transform(compressor);}else if(exp instanceof AST_Dot&&exp.expression instanceof AST_Array&&exp.property=="join")EXIT:{var separator=self.args.length==0?",":self.args[0].evaluate(compressor)[1];if(separator==null)break EXIT;var elements=exp.expression.elements.reduce(function(a,el){el=el.evaluate(compressor);if(a.length==0||el.length==1){a.push(el);}else{var last=a[a.length-1];if(last.length==2){var val=""+last[1]+separator+el[1];a[a.length-1]=[make_node_from_constant(compressor,val,last[0]),val];}else{a.push(el);}}return a;},[]);if(elements.length==0)return make_node(AST_String,self,{value:""});if(elements.length==1)return elements[0][0];if(separator==""){var first;if(elements[0][0]instanceof AST_String||elements[1][0]instanceof AST_String){first=elements.shift()[0];}else{first=make_node(AST_String,self,{value:""});}return elements.reduce(function(prev,el){return make_node(AST_Binary,el[0],{operator:"+",left:prev,right:el[0]});},first).transform(compressor);}var node=self.clone();node.expression=node.expression.clone();node.expression.expression=node.expression.expression.clone();node.expression.expression.elements=elements.map(function(el){return el[0];});return best_of(self,node);}}if(compressor.option("side_effects")){if(self.expression instanceof AST_Function&&self.args.length==0&&!AST_Block.prototype.has_side_effects.call(self.expression,compressor)){return make_node(AST_Undefined,self).transform(compressor);}}if(compressor.option("drop_console")){if(self.expression instanceof AST_PropAccess){var name=self.expression.expression;while(name.expression){name=name.expression;}if(name instanceof AST_SymbolRef&&name.name=="console"&&name.undeclared()){return make_node(AST_Undefined,self).transform(compressor);}}}return self.evaluate(compressor)[0];});OPT(AST_New,function(self,compressor){if(compressor.option("unsafe")){var exp=self.expression;if(exp instanceof AST_SymbolRef&&exp.undeclared()){switch(exp.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return make_node(AST_Call,self,self).transform(compressor);}}}return self;});OPT(AST_Seq,function(self,compressor){if(!compressor.option("side_effects"))return self;if(!self.car.has_side_effects(compressor)){var p=compressor.parent();if(!(p instanceof AST_Call&&p.expression===self)){return self.cdr;}}if(compressor.option("cascade")){if(self.car instanceof AST_Assign&&!self.car.left.has_side_effects(compressor)){if(self.car.left.equivalent_to(self.cdr)){return self.car;}if(self.cdr instanceof AST_Call&&self.cdr.expression.equivalent_to(self.car.left)){self.cdr.expression=self.car;return self.cdr;}}if(!self.car.has_side_effects(compressor)&&!self.cdr.has_side_effects(compressor)&&self.car.equivalent_to(self.cdr)){return self.car;}}if(self.cdr instanceof AST_UnaryPrefix&&self.cdr.operator=="void"&&!self.cdr.expression.has_side_effects(compressor)){self.cdr.expression=self.car;return self.cdr;}if(self.cdr instanceof AST_Undefined){return make_node(AST_UnaryPrefix,self,{operator:"void",expression:self.car});}return self;});AST_Unary.DEFMETHOD("lift_sequences",function(compressor){if(compressor.option("sequences")){if(this.expression instanceof AST_Seq){var seq=this.expression;var x=seq.to_array();this.expression=x.pop();x.push(this);seq=AST_Seq.from_array(x).transform(compressor);return seq;}}return this;});OPT(AST_UnaryPostfix,function(self,compressor){return self.lift_sequences(compressor);});OPT(AST_UnaryPrefix,function(self,compressor){self=self.lift_sequences(compressor);var e=self.expression;if(compressor.option("booleans")&&compressor.in_boolean_context()){switch(self.operator){case"!":if(e instanceof AST_UnaryPrefix&&e.operator=="!"){return e.expression;}break;case"typeof":compressor.warn("Boolean expression always true [{file}:{line},{col}]",self.start);return make_node(AST_True,self);}if(e instanceof AST_Binary&&self.operator=="!"){self=best_of(self,e.negate(compressor));}}return self.evaluate(compressor)[0];});function has_side_effects_or_prop_access(node,compressor){var save_pure_getters=compressor.option("pure_getters");compressor.options.pure_getters=false;var ret=node.has_side_effects(compressor);compressor.options.pure_getters=save_pure_getters;return ret;}AST_Binary.DEFMETHOD("lift_sequences",function(compressor){if(compressor.option("sequences")){if(this.left instanceof AST_Seq){var seq=this.left;var x=seq.to_array();this.left=x.pop();x.push(this);seq=AST_Seq.from_array(x).transform(compressor);return seq;}if(this.right instanceof AST_Seq&&this instanceof AST_Assign&&!has_side_effects_or_prop_access(this.left,compressor)){var seq=this.right;var x=seq.to_array();this.right=x.pop();x.push(this);seq=AST_Seq.from_array(x).transform(compressor);return seq;}}return this;});var commutativeOperators=makePredicate("== === != !== * & | ^");OPT(AST_Binary,function(self,compressor){function reverse(op,force){if(force||!(self.left.has_side_effects(compressor)||self.right.has_side_effects(compressor))){if(op)self.operator=op;var tmp=self.left;self.left=self.right;self.right=tmp;}}if(commutativeOperators(self.operator)){if(self.right instanceof AST_Constant&&!(self.left instanceof AST_Constant)){if(!(self.left instanceof AST_Binary&&PRECEDENCE[self.left.operator]>=PRECEDENCE[self.operator])){reverse(null,true);}}if(/^[!=]==?$/.test(self.operator)){if(self.left instanceof AST_SymbolRef&&self.right instanceof AST_Conditional){if(self.right.consequent instanceof AST_SymbolRef&&self.right.consequent.definition()===self.left.definition()){if(/^==/.test(self.operator))return self.right.condition;if(/^!=/.test(self.operator))return self.right.condition.negate(compressor);}if(self.right.alternative instanceof AST_SymbolRef&&self.right.alternative.definition()===self.left.definition()){if(/^==/.test(self.operator))return self.right.condition.negate(compressor);if(/^!=/.test(self.operator))return self.right.condition;}}if(self.right instanceof AST_SymbolRef&&self.left instanceof AST_Conditional){if(self.left.consequent instanceof AST_SymbolRef&&self.left.consequent.definition()===self.right.definition()){if(/^==/.test(self.operator))return self.left.condition;if(/^!=/.test(self.operator))return self.left.condition.negate(compressor);}if(self.left.alternative instanceof AST_SymbolRef&&self.left.alternative.definition()===self.right.definition()){if(/^==/.test(self.operator))return self.left.condition.negate(compressor);if(/^!=/.test(self.operator))return self.left.condition;}}}}self=self.lift_sequences(compressor);if(compressor.option("comparisons"))switch(self.operator){case"===":case"!==":if(self.left.is_string(compressor)&&self.right.is_string(compressor)||self.left.is_boolean()&&self.right.is_boolean()){self.operator=self.operator.substr(0,2);}case"==":case"!=":if(self.left instanceof AST_String&&self.left.value=="undefined"&&self.right instanceof AST_UnaryPrefix&&self.right.operator=="typeof"&&compressor.option("unsafe")){if(!(self.right.expression instanceof AST_SymbolRef)||!self.right.expression.undeclared()){self.right=self.right.expression;self.left=make_node(AST_Undefined,self.left).optimize(compressor);if(self.operator.length==2)self.operator+="=";}}break;}if(compressor.option("conditionals")){if(self.operator=="&&"){var ll=self.left.evaluate(compressor);if(ll.length>1){if(ll[1]){compressor.warn("Condition left of && always true [{file}:{line},{col}]",self.start);var rr=self.right.evaluate(compressor);return rr[0];}else{compressor.warn("Condition left of && always false [{file}:{line},{col}]",self.start);return ll[0];}}}else if(self.operator=="||"){var ll=self.left.evaluate(compressor);if(ll.length>1){if(ll[1]){compressor.warn("Condition left of || always true [{file}:{line},{col}]",self.start);return ll[0];}else{compressor.warn("Condition left of || always false [{file}:{line},{col}]",self.start);var rr=self.right.evaluate(compressor);return rr[0];}}}}if(compressor.option("booleans")&&compressor.in_boolean_context())switch(self.operator){case"&&":var ll=self.left.evaluate(compressor);var rr=self.right.evaluate(compressor);if(ll.length>1&&!ll[1]||rr.length>1&&!rr[1]){compressor.warn("Boolean && always false [{file}:{line},{col}]",self.start);if(self.left.has_side_effects(compressor)){return make_node(AST_Seq,self,{car:self.left,cdr:make_node(AST_False)}).optimize(compressor);}return make_node(AST_False,self);}if(ll.length>1&&ll[1]){return rr[0];}if(rr.length>1&&rr[1]){return ll[0];}break;case"||":var ll=self.left.evaluate(compressor);var rr=self.right.evaluate(compressor);if(ll.length>1&&ll[1]||rr.length>1&&rr[1]){compressor.warn("Boolean || always true [{file}:{line},{col}]",self.start);if(self.left.has_side_effects(compressor)){return make_node(AST_Seq,self,{car:self.left,cdr:make_node(AST_True)}).optimize(compressor);}return make_node(AST_True,self);}if(ll.length>1&&!ll[1]){return rr[0];}if(rr.length>1&&!rr[1]){return ll[0];}break;case"+":var ll=self.left.evaluate(compressor);var rr=self.right.evaluate(compressor);if(ll.length>1&&ll[0]instanceof AST_String&&ll[1]||rr.length>1&&rr[0]instanceof AST_String&&rr[1]){compressor.warn("+ in boolean context always true [{file}:{line},{col}]",self.start);return make_node(AST_True,self);}break;}if(compressor.option("comparisons")&&self.is_boolean()){if(!(compressor.parent()instanceof AST_Binary)||compressor.parent()instanceof AST_Assign){var negated=make_node(AST_UnaryPrefix,self,{operator:"!",expression:self.negate(compressor)});self=best_of(self,negated);}switch(self.operator){case"<":reverse(">");break;case"<=":reverse(">=");break;}}if(self.operator=="+"&&self.right instanceof AST_String&&self.right.getValue()===""&&self.left instanceof AST_Binary&&self.left.operator=="+"&&self.left.is_string(compressor)){return self.left;}if(compressor.option("evaluate")){if(self.operator=="+"){if(self.left instanceof AST_Constant&&self.right instanceof AST_Binary&&self.right.operator=="+"&&self.right.left instanceof AST_Constant&&self.right.is_string(compressor)){self=make_node(AST_Binary,self,{operator:"+",left:make_node(AST_String,null,{value:""+self.left.getValue()+self.right.left.getValue(),start:self.left.start,end:self.right.left.end}),right:self.right.right});}if(self.right instanceof AST_Constant&&self.left instanceof AST_Binary&&self.left.operator=="+"&&self.left.right instanceof AST_Constant&&self.left.is_string(compressor)){self=make_node(AST_Binary,self,{operator:"+",left:self.left.left,right:make_node(AST_String,null,{value:""+self.left.right.getValue()+self.right.getValue(),start:self.left.right.start,end:self.right.end})});}if(self.left instanceof AST_Binary&&self.left.operator=="+"&&self.left.is_string(compressor)&&self.left.right instanceof AST_Constant&&self.right instanceof AST_Binary&&self.right.operator=="+"&&self.right.left instanceof AST_Constant&&self.right.is_string(compressor)){self=make_node(AST_Binary,self,{operator:"+",left:make_node(AST_Binary,self.left,{operator:"+",left:self.left.left,right:make_node(AST_String,null,{value:""+self.left.right.getValue()+self.right.left.getValue(),start:self.left.right.start,end:self.right.left.end})}),right:self.right.right});}}}if(self.right instanceof AST_Binary&&self.right.operator==self.operator&&(self.operator=="&&"||self.operator=="||")){self.left=make_node(AST_Binary,self.left,{operator:self.operator,left:self.left,right:self.right.left});self.right=self.right.right;return self.transform(compressor);}return self.evaluate(compressor)[0];});OPT(AST_SymbolRef,function(self,compressor){function isLHS(symbol,parent){return parent instanceof AST_Binary&&parent.operator==="="&&parent.left===symbol;}if(self.undeclared()&&!isLHS(self,compressor.parent())){var defines=compressor.option("global_defs");if(defines&&defines.hasOwnProperty(self.name)){return make_node_from_constant(compressor,defines[self.name],self);}switch(self.name){case"undefined":return make_node(AST_Undefined,self);case"NaN":return make_node(AST_NaN,self).transform(compressor);case"Infinity":return make_node(AST_Infinity,self).transform(compressor);}}return self;});OPT(AST_Infinity,function(self,compressor){return make_node(AST_Binary,self,{operator:"/",left:make_node(AST_Number,self,{value:1}),right:make_node(AST_Number,self,{value:0})});});OPT(AST_Undefined,function(self,compressor){if(compressor.option("unsafe")){var scope=compressor.find_parent(AST_Scope);var undef=scope.find_variable("undefined");if(undef){var ref=make_node(AST_SymbolRef,self,{name:"undefined",scope:scope,thedef:undef});ref.reference();return ref;}}return self;});var ASSIGN_OPS=["+","-","/","*","%",">>","<<",">>>","|","^","&"];OPT(AST_Assign,function(self,compressor){self=self.lift_sequences(compressor);if(self.operator=="="&&self.left instanceof AST_SymbolRef&&self.right instanceof AST_Binary&&self.right.left instanceof AST_SymbolRef&&self.right.left.name==self.left.name&&member(self.right.operator,ASSIGN_OPS)){self.operator=self.right.operator+"=";self.right=self.right.right;}return self;});OPT(AST_Conditional,function(self,compressor){if(!compressor.option("conditionals"))return self;if(self.condition instanceof AST_Seq){var car=self.condition.car;self.condition=self.condition.cdr;return AST_Seq.cons(car,self);}var cond=self.condition.evaluate(compressor);if(cond.length>1){if(cond[1]){compressor.warn("Condition always true [{file}:{line},{col}]",self.start);return self.consequent;}else{compressor.warn("Condition always false [{file}:{line},{col}]",self.start);return self.alternative;}}var negated=cond[0].negate(compressor);if(best_of(cond[0],negated)===negated){self=make_node(AST_Conditional,self,{condition:negated,consequent:self.alternative,alternative:self.consequent});}var consequent=self.consequent;var alternative=self.alternative;if(consequent instanceof AST_Assign&&alternative instanceof AST_Assign&&consequent.operator==alternative.operator&&consequent.left.equivalent_to(alternative.left)&&!consequent.left.has_side_effects(compressor)){return make_node(AST_Assign,self,{operator:consequent.operator,left:consequent.left,right:make_node(AST_Conditional,self,{condition:self.condition,consequent:consequent.right,alternative:alternative.right})});}if(consequent instanceof AST_Call&&alternative.TYPE===consequent.TYPE&&consequent.args.length==alternative.args.length&&!consequent.expression.has_side_effects(compressor)&&consequent.expression.equivalent_to(alternative.expression)){if(consequent.args.length==0){return make_node(AST_Seq,self,{car:self.condition,cdr:consequent});}if(consequent.args.length==1){consequent.args[0]=make_node(AST_Conditional,self,{condition:self.condition,consequent:consequent.args[0],alternative:alternative.args[0]});return consequent;}}if(consequent instanceof AST_Conditional&&consequent.alternative.equivalent_to(alternative)){return make_node(AST_Conditional,self,{condition:make_node(AST_Binary,self,{left:self.condition,operator:"&&",right:consequent.condition}),consequent:consequent.consequent,alternative:alternative});}if(consequent instanceof AST_Constant&&alternative instanceof AST_Constant&&consequent.equivalent_to(alternative)){if(self.condition.has_side_effects(compressor)){return AST_Seq.from_array([self.condition,make_node_from_constant(compressor,consequent.value,self)]);}else{return make_node_from_constant(compressor,consequent.value,self);}}if(consequent instanceof AST_True&&alternative instanceof AST_False){self.condition=self.condition.negate(compressor);return make_node(AST_UnaryPrefix,self.condition,{operator:"!",expression:self.condition});}if(consequent instanceof AST_False&&alternative instanceof AST_True){return self.condition.negate(compressor);}return self;});OPT(AST_Boolean,function(self,compressor){if(compressor.option("booleans")){var p=compressor.parent();if(p instanceof AST_Binary&&(p.operator=="=="||p.operator=="!=")){compressor.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:p.operator,value:self.value,file:p.start.file,line:p.start.line,col:p.start.col});return make_node(AST_Number,self,{value:+self.value});}return make_node(AST_UnaryPrefix,self,{operator:"!",expression:make_node(AST_Number,self,{value:1-self.value})});}return self;});OPT(AST_Sub,function(self,compressor){var prop=self.property;if(prop instanceof AST_String&&compressor.option("properties")){prop=prop.getValue();if(RESERVED_WORDS(prop)?compressor.option("screw_ie8"):is_identifier_string(prop)){return make_node(AST_Dot,self,{expression:self.expression,property:prop}).optimize(compressor);}var v=parseFloat(prop);if(!isNaN(v)&&v.toString()==prop){self.property=make_node(AST_Number,self.property,{value:v});}}return self;});OPT(AST_Dot,function(self,compressor){var prop=self.property;if(RESERVED_WORDS(prop)&&!compressor.option("screw_ie8")){return make_node(AST_Sub,self,{expression:self.expression,property:make_node(AST_String,self,{value:prop})}).optimize(compressor);}return self.evaluate(compressor)[0];});function literals_in_boolean_context(self,compressor){if(compressor.option("booleans")&&compressor.in_boolean_context()&&!self.has_side_effects(compressor)){return make_node(AST_True,self);}return self;}OPT(AST_Array,literals_in_boolean_context);OPT(AST_Object,literals_in_boolean_context);OPT(AST_RegExp,literals_in_boolean_context);OPT(AST_Return,function(self,compressor){if(self.value instanceof AST_Undefined){self.value=null;}return self;});})();"use strict";function SourceMap(options){options=defaults(options,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var orig_map=options.orig&&new MOZ_SourceMap.SourceMapConsumer(options.orig);var generator;if(orig_map){generator=MOZ_SourceMap.SourceMapGenerator.fromSourceMap(orig_map);}else{generator=new MOZ_SourceMap.SourceMapGenerator({file:options.file,sourceRoot:options.root});}function add(source,gen_line,gen_col,orig_line,orig_col,name){if(orig_map){var info=orig_map.originalPositionFor({line:orig_line,column:orig_col});if(info.source===null){return;}source=info.source;orig_line=info.line;orig_col=info.column;name=info.name||name;}generator.addMapping({generated:{line:gen_line+options.dest_line_diff,column:gen_col},original:{line:orig_line+options.orig_line_diff,column:orig_col},source:source,name:name});}return{add:add,get:function get(){return generator;},toString:function toString(){return JSON.stringify(generator.toJSON());}};}"use strict";(function(){var MOZ_TO_ME={ExpressionStatement:function ExpressionStatement(M){var expr=M.expression;if(expr.type==="Literal"&&typeof expr.value==="string"){return new AST_Directive({start:my_start_token(M),end:my_end_token(M),value:expr.value});}return new AST_SimpleStatement({start:my_start_token(M),end:my_end_token(M),body:from_moz(expr)});},TryStatement:function TryStatement(M){var handlers=M.handlers||[M.handler];if(handlers.length>1||M.guardedHandlers&&M.guardedHandlers.length){throw new Error("Multiple catch clauses are not supported.");}return new AST_Try({start:my_start_token(M),end:my_end_token(M),body:from_moz(M.block).body,bcatch:from_moz(handlers[0]),bfinally:M.finalizer?new AST_Finally(from_moz(M.finalizer)):null});},Property:function Property(M){var key=M.key;var name=key.type=="Identifier"?key.name:key.value;var args={start:my_start_token(key),end:my_end_token(M.value),key:name,value:from_moz(M.value)};switch(M.kind){case"init":return new AST_ObjectKeyVal(args);case"set":args.value.name=from_moz(key);return new AST_ObjectSetter(args);case"get":args.value.name=from_moz(key);return new AST_ObjectGetter(args);}},ObjectExpression:function ObjectExpression(M){return new AST_Object({start:my_start_token(M),end:my_end_token(M),properties:M.properties.map(function(prop){prop.type="Property";return from_moz(prop);})});},SequenceExpression:function SequenceExpression(M){return AST_Seq.from_array(M.expressions.map(from_moz));},MemberExpression:function MemberExpression(M){return new(M.computed?AST_Sub:AST_Dot)({start:my_start_token(M),end:my_end_token(M),property:M.computed?from_moz(M.property):M.property.name,expression:from_moz(M.object)});},SwitchCase:function SwitchCase(M){return new(M.test?AST_Case:AST_Default)({start:my_start_token(M),end:my_end_token(M),expression:from_moz(M.test),body:M.consequent.map(from_moz)});},VariableDeclaration:function VariableDeclaration(M){return new(M.kind==="const"?AST_Const:AST_Var)({start:my_start_token(M),end:my_end_token(M),definitions:M.declarations.map(from_moz)});},Literal:function Literal(M){var val=M.value,args={start:my_start_token(M),end:my_end_token(M)};if(val===null)return new AST_Null(args);switch(typeof val==="undefined"?"undefined":_typeof(val)){case"string":args.value=val;return new AST_String(args);case"number":args.value=val;return new AST_Number(args);case"boolean":return new(val?AST_True:AST_False)(args);default:var rx=M.regex;if(rx&&rx.pattern){args.value=new RegExp(rx.pattern,rx.flags).toString();}else{args.value=M.regex&&M.raw?M.raw:val;}return new AST_RegExp(args);}},Identifier:function Identifier(M){var p=FROM_MOZ_STACK[FROM_MOZ_STACK.length-2];return new(p.type=="LabeledStatement"?AST_Label:p.type=="VariableDeclarator"&&p.id===M?p.kind=="const"?AST_SymbolConst:AST_SymbolVar:p.type=="FunctionExpression"?p.id===M?AST_SymbolLambda:AST_SymbolFunarg:p.type=="FunctionDeclaration"?p.id===M?AST_SymbolDefun:AST_SymbolFunarg:p.type=="CatchClause"?AST_SymbolCatch:p.type=="BreakStatement"||p.type=="ContinueStatement"?AST_LabelRef:AST_SymbolRef)({start:my_start_token(M),end:my_end_token(M),name:M.name});}};MOZ_TO_ME.UpdateExpression=MOZ_TO_ME.UnaryExpression=function To_Moz_Unary(M){var prefix="prefix"in M?M.prefix:M.type=="UnaryExpression"?true:false;return new(prefix?AST_UnaryPrefix:AST_UnaryPostfix)({start:my_start_token(M),end:my_end_token(M),operator:M.operator,expression:from_moz(M.argument)});};map("Program",AST_Toplevel,"body@body");map("EmptyStatement",AST_EmptyStatement);map("BlockStatement",AST_BlockStatement,"body@body");map("IfStatement",AST_If,"test>condition, consequent>body, alternate>alternative");map("LabeledStatement",AST_LabeledStatement,"label>label, body>body");map("BreakStatement",AST_Break,"label>label");map("ContinueStatement",AST_Continue,"label>label");map("WithStatement",AST_With,"object>expression, body>body");map("SwitchStatement",AST_Switch,"discriminant>expression, cases@body");map("ReturnStatement",AST_Return,"argument>value");map("ThrowStatement",AST_Throw,"argument>value");map("WhileStatement",AST_While,"test>condition, body>body");map("DoWhileStatement",AST_Do,"test>condition, body>body");map("ForStatement",AST_For,"init>init, test>condition, update>step, body>body");map("ForInStatement",AST_ForIn,"left>init, right>object, body>body");map("DebuggerStatement",AST_Debugger);map("FunctionDeclaration",AST_Defun,"id>name, params@argnames, body%body");map("VariableDeclarator",AST_VarDef,"id>name, init>value");map("CatchClause",AST_Catch,"param>argname, body%body");map("ThisExpression",AST_This);map("ArrayExpression",AST_Array,"elements@elements");map("FunctionExpression",AST_Function,"id>name, params@argnames, body%body");map("BinaryExpression",AST_Binary,"operator=operator, left>left, right>right");map("LogicalExpression",AST_Binary,"operator=operator, left>left, right>right");map("AssignmentExpression",AST_Assign,"operator=operator, left>left, right>right");map("ConditionalExpression",AST_Conditional,"test>condition, consequent>consequent, alternate>alternative");map("NewExpression",AST_New,"callee>expression, arguments@args");map("CallExpression",AST_Call,"callee>expression, arguments@args");def_to_moz(AST_Directive,function To_Moz_Directive(M){return{type:"ExpressionStatement",expression:{type:"Literal",value:M.value}};});def_to_moz(AST_SimpleStatement,function To_Moz_ExpressionStatement(M){return{type:"ExpressionStatement",expression:to_moz(M.body)};});def_to_moz(AST_SwitchBranch,function To_Moz_SwitchCase(M){return{type:"SwitchCase",test:to_moz(M.expression),consequent:M.body.map(to_moz)};});def_to_moz(AST_Try,function To_Moz_TryStatement(M){return{type:"TryStatement",block:to_moz_block(M),handler:to_moz(M.bcatch),guardedHandlers:[],finalizer:to_moz(M.bfinally)};});def_to_moz(AST_Catch,function To_Moz_CatchClause(M){return{type:"CatchClause",param:to_moz(M.argname),guard:null,body:to_moz_block(M)};});def_to_moz(AST_Definitions,function To_Moz_VariableDeclaration(M){return{type:"VariableDeclaration",kind:M instanceof AST_Const?"const":"var",declarations:M.definitions.map(to_moz)};});def_to_moz(AST_Seq,function To_Moz_SequenceExpression(M){return{type:"SequenceExpression",expressions:M.to_array().map(to_moz)};});def_to_moz(AST_PropAccess,function To_Moz_MemberExpression(M){var isComputed=M instanceof AST_Sub;return{type:"MemberExpression",object:to_moz(M.expression),computed:isComputed,property:isComputed?to_moz(M.property):{type:"Identifier",name:M.property}};});def_to_moz(AST_Unary,function To_Moz_Unary(M){return{type:M.operator=="++"||M.operator=="--"?"UpdateExpression":"UnaryExpression",operator:M.operator,prefix:M instanceof AST_UnaryPrefix,argument:to_moz(M.expression)};});def_to_moz(AST_Binary,function To_Moz_BinaryExpression(M){return{type:M.operator=="&&"||M.operator=="||"?"LogicalExpression":"BinaryExpression",left:to_moz(M.left),operator:M.operator,right:to_moz(M.right)};});def_to_moz(AST_Object,function To_Moz_ObjectExpression(M){return{type:"ObjectExpression",properties:M.properties.map(to_moz)};});def_to_moz(AST_ObjectProperty,function To_Moz_Property(M){var key=is_identifier(M.key)?{type:"Identifier",name:M.key}:{type:"Literal",value:M.key};var kind;if(M instanceof AST_ObjectKeyVal){kind="init";}else if(M instanceof AST_ObjectGetter){kind="get";}else if(M instanceof AST_ObjectSetter){kind="set";}return{type:"Property",kind:kind,key:key,value:to_moz(M.value)};});def_to_moz(AST_Symbol,function To_Moz_Identifier(M){var def=M.definition();return{type:"Identifier",name:def?def.mangled_name||def.name:M.name};});def_to_moz(AST_RegExp,function To_Moz_RegExpLiteral(M){var value=M.value;return{type:"Literal",value:value,raw:value.toString(),regex:{pattern:value.source,flags:value.toString().match(/[gimuy]*$/)[0]}};});def_to_moz(AST_Constant,function To_Moz_Literal(M){var value=M.value;if(typeof value==="number"&&(value<0||value===0&&1/value<0)){return{type:"UnaryExpression",operator:"-",prefix:true,argument:{type:"Literal",value:-value,raw:M.start.raw}};}return{type:"Literal",value:value,raw:M.start.raw};});def_to_moz(AST_Atom,function To_Moz_Atom(M){return{type:"Identifier",name:String(M.value)};});AST_Boolean.DEFMETHOD("to_mozilla_ast",AST_Constant.prototype.to_mozilla_ast);AST_Null.DEFMETHOD("to_mozilla_ast",AST_Constant.prototype.to_mozilla_ast);AST_Hole.DEFMETHOD("to_mozilla_ast",function To_Moz_ArrayHole(){return null;});AST_Block.DEFMETHOD("to_mozilla_ast",AST_BlockStatement.prototype.to_mozilla_ast);AST_Lambda.DEFMETHOD("to_mozilla_ast",AST_Function.prototype.to_mozilla_ast);function raw_token(moznode){if(moznode.type=="Literal"){return moznode.raw!=null?moznode.raw:moznode.value+"";}}function my_start_token(moznode){var loc=moznode.loc,start=loc&&loc.start;var range=moznode.range;return new AST_Token({file:loc&&loc.source,line:start&&start.line,col:start&&start.column,pos:range?range[0]:moznode.start,endline:start&&start.line,endcol:start&&start.column,endpos:range?range[0]:moznode.start,raw:raw_token(moznode)});}function my_end_token(moznode){var loc=moznode.loc,end=loc&&loc.end;var range=moznode.range;return new AST_Token({file:loc&&loc.source,line:end&&end.line,col:end&&end.column,pos:range?range[1]:moznode.end,endline:end&&end.line,endcol:end&&end.column,endpos:range?range[1]:moznode.end,raw:raw_token(moznode)});}function map(moztype,mytype,propmap){var moz_to_me="function From_Moz_"+moztype+"(M){\n";moz_to_me+="return new U2."+mytype.name+"({\n"+"start: my_start_token(M),\n"+"end: my_end_token(M)";var me_to_moz="function To_Moz_"+moztype+"(M){\n";me_to_moz+="return {\n"+"type: "+JSON.stringify(moztype);if(propmap)propmap.split(/\s*,\s*/).forEach(function(prop){var m=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(prop);if(!m)throw new Error("Can't understand property map: "+prop);var moz=m[1],how=m[2],my=m[3];moz_to_me+=",\n"+my+": ";me_to_moz+=",\n"+moz+": ";switch(how){case"@":moz_to_me+="M."+moz+".map(from_moz)";me_to_moz+="M."+my+".map(to_moz)";break;case">":moz_to_me+="from_moz(M."+moz+")";me_to_moz+="to_moz(M."+my+")";break;case"=":moz_to_me+="M."+moz;me_to_moz+="M."+my;break;case"%":moz_to_me+="from_moz(M."+moz+").body";me_to_moz+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+prop);}});moz_to_me+="\n})\n}";me_to_moz+="\n}\n}";moz_to_me=new Function("U2","my_start_token","my_end_token","from_moz","return("+moz_to_me+")")(exports,my_start_token,my_end_token,from_moz);me_to_moz=new Function("to_moz","to_moz_block","return("+me_to_moz+")")(to_moz,to_moz_block);MOZ_TO_ME[moztype]=moz_to_me;def_to_moz(mytype,me_to_moz);}var FROM_MOZ_STACK=null;function from_moz(node){FROM_MOZ_STACK.push(node);var ret=node!=null?MOZ_TO_ME[node.type](node):null;FROM_MOZ_STACK.pop();return ret;}AST_Node.from_mozilla_ast=function(node){var save_stack=FROM_MOZ_STACK;FROM_MOZ_STACK=[];var ast=from_moz(node);FROM_MOZ_STACK=save_stack;return ast;};function set_moz_loc(mynode,moznode,myparent){var start=mynode.start;var end=mynode.end;if(start.pos!=null&&end.endpos!=null){moznode.range=[start.pos,end.endpos];}if(start.line){moznode.loc={start:{line:start.line,column:start.col},end:end.endline?{line:end.endline,column:end.endcol}:null};if(start.file){moznode.loc.source=start.file;}}return moznode;}function def_to_moz(mytype,handler){mytype.DEFMETHOD("to_mozilla_ast",function(){return set_moz_loc(this,handler(this));});}function to_moz(node){return node!=null?node.to_mozilla_ast():null;}function to_moz_block(node){return{type:"BlockStatement",body:node.body.map(to_moz)};}})();"use strict";function find_builtins(){var a=[];[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp].forEach(function(ctor){Object.getOwnPropertyNames(ctor).map(add);if(ctor.prototype){Object.getOwnPropertyNames(ctor.prototype).map(add);}});function add(name){push_uniq(a,name);}return a;}function mangle_properties(ast,options){options=defaults(options,{reserved:null,cache:null,only_cache:false,regex:null});var reserved=options.reserved;if(reserved==null)reserved=find_builtins();var cache=options.cache;if(cache==null){cache={cname:-1,props:new Dictionary()};}var regex=options.regex;var names_to_mangle=[];var unmangleable=[];ast.walk(new TreeWalker(function(node){if(node instanceof AST_ObjectKeyVal){add(node.key);}else if(node instanceof AST_ObjectProperty){add(node.key.name);}else if(node instanceof AST_Dot){if(this.parent()instanceof AST_Assign){add(node.property);}}else if(node instanceof AST_Sub){if(this.parent()instanceof AST_Assign){addStrings(node.property);}}}));return ast.transform(new TreeTransformer(function(node){if(node instanceof AST_ObjectKeyVal){node.key=mangle(node.key);}else if(node instanceof AST_ObjectProperty){node.key.name=mangle(node.key.name);}else if(node instanceof AST_Dot){node.property=mangle(node.property);}else if(node instanceof AST_Sub){node.property=mangleStrings(node.property);}}));function can_mangle(name){if(unmangleable.indexOf(name)>=0)return false;if(reserved.indexOf(name)>=0)return false;if(options.only_cache){return cache.props.has(name);}if(/^[0-9.]+$/.test(name))return false;return true;}function should_mangle(name){if(regex&&!regex.test(name))return false;if(reserved.indexOf(name)>=0)return false;return cache.props.has(name)||names_to_mangle.indexOf(name)>=0;}function add(name){if(can_mangle(name))push_uniq(names_to_mangle,name);if(!should_mangle(name)){push_uniq(unmangleable,name);}}function mangle(name){if(!should_mangle(name)){return name;}var mangled=cache.props.get(name);if(!mangled){do{mangled=base54(++cache.cname);}while(!can_mangle(mangled));cache.props.set(name,mangled);}return mangled;}function addStrings(node){var out={};try{(function walk(node){node.walk(new TreeWalker(function(node){if(node instanceof AST_Seq){walk(node.cdr);return true;}if(node instanceof AST_String){add(node.value);return true;}if(node instanceof AST_Conditional){walk(node.consequent);walk(node.alternative);return true;}throw out;}));})(node);}catch(ex){if(ex!==out)throw ex;}}function mangleStrings(node){return node.transform(new TreeTransformer(function(node){if(node instanceof AST_Seq){node.cdr=mangleStrings(node.cdr);}else if(node instanceof AST_String){node.value=mangle(node.value);}else if(node instanceof AST_Conditional){node.consequent=mangleStrings(node.consequent);node.alternative=mangleStrings(node.alternative);}return node;}));}}exports["Compressor"]=Compressor;exports["DefaultsError"]=DefaultsError;exports["Dictionary"]=Dictionary;exports["JS_Parse_Error"]=JS_Parse_Error;exports["MAP"]=MAP;exports["OutputStream"]=OutputStream;exports["SourceMap"]=SourceMap;exports["TreeTransformer"]=TreeTransformer;exports["TreeWalker"]=TreeWalker;exports["base54"]=base54;exports["defaults"]=defaults;exports["mangle_properties"]=mangle_properties;exports["merge"]=merge;exports["parse"]=parse;exports["push_uniq"]=push_uniq;exports["string_template"]=string_template;exports["is_identifier"]=is_identifier;global["UglifyJS"]=exports;})(module.exports,{});

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"compress\">压缩</span>\n        <span class=\"btn\" v-on:click=\"pretty\">格式化</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/css.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./css.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _require2 = __webpack_require__(20);

	var clipboard = _require2.clipboard;

	var CleanCSS = _require('clean-css');
	var beautifyCSS = _require('js-beautify').css;

	exports.default = {
	    data: function data() {
	        return {
	            input: ''
	        };
	    },
	    methods: {
	        compress: function compress() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                this.input = new CleanCSS({
	                    advanced: false,
	                    aggressiveMerging: false
	                }).minify(input).styles;
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },
	        pretty: function pretty() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                this.input = beautifyCSS(input);
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },

	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"compress\">压缩</span>\n        <span class=\"btn\" v-on:click=\"pretty\">格式化</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/time.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(59)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./time.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./time.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./time.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".page-time .row {\n  margin-top: 0.1rem;\n}\n.page-time .btn {\n  margin: 0 0.1rem;\n}\n", ""]);

	// exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _require2 = __webpack_require__(20);

	var clipboard = _require2.clipboard;

	var moment = _require('moment');

	exports.default = {
	    data: function data() {
	        return {
	            now: null,
	            input1: '',
	            input2: '',
	            output1: '',
	            output2: ''
	        };
	    },
	    methods: {

	        copy: function copy(event) {
	            var target = event.target;
	            var text = target.dataset.t;
	            clipboard.writeText(text);
	            toastr.success(g_config.copySuccessMsg);
	        },

	        transform1: function transform1() {
	            var input = this.input1.trim();
	            if (!input) {
	                return;
	            }
	            var time = moment(input, 'X');
	            if (!time.isValid()) {
	                toastr.error('invalid time');
	                return;
	            }

	            this.output1 = time.format('YYYY-MM-DD HH:mm:ss');

	            clipboard.writeText(this.output1);
	            toastr.success(g_config.copySuccessMsg);
	        },

	        transform2: function transform2() {
	            var input = this.input2.trim();
	            if (!input) {
	                return;
	            }

	            var time = moment(input);
	            if (!time.isValid()) {
	                toastr.error('invalid time');
	                return;
	            }

	            this.output2 = time.format('X');
	            clipboard.writeText(this.output2);
	            toastr.success(g_config.copySuccessMsg);
	        }
	    },

	    ready: function ready() {
	        var _this = this;

	        this.now = new Date();
	        setInterval(function () {
	            _this.now = new Date();
	        }, 1000);
	    }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-time\">\n\n    <div class=\"section\">\n        当前的时间戳为：{{ now | moment \"X\" }}\n        <span class=\"btn btn-success\" data-t='{{ now | moment \"X\" }}' v-on:click=\"copy($event)\">复制</span>\n    </div>\n    <div class=\"section\">\n        当前本地时间为：{{ now | moment \"YYYY-MM-DD HH:mm:ss\" }}\n        <span class=\"btn btn-success\" data-t='{{ now | moment \"YYYY-MM-DD HH:mm:ss\" }}' v-on:click=\"copy($event)\">复制</span>\n    </div>\n\n    <div class=\"section section-leading\">\n        <h3 class=\"section-title\">时间戳 → 本地时间</h3>\n        <div class=\"row\">\n            <input type=\"text\" v-model=\"input1\" class=\"text row-item\" placeholder=\"\">\n            <span class=\"btn\" v-on:click=\"transform1\">转换</span>\n            <div class=\"result row-item\">{{ output1 }}</div>\n        </div>\n    </div>\n\n    <div class=\"section section-leading\">\n        <h3 class=\"section-title\">本地时间 → 时间戳</h3>\n        <div class=\"row\">\n            <input type=\"text\" v-model=\"input2\" class=\"text row-item\" placeholder=\"\">\n            <span class=\"btn\" v-on:click=\"transform2\">转换</span>\n            <div class=\"result row-item\">{{ output2 }}</div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(67)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n}\nul,\nol {\n  list-style: none;\n}\ntextarea {\n  resize: none;\n}\ninput,\ntextarea {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  height: 100%;\n}\nbody {\n  height: 100%;\n  padding: 0.15rem;\n  background: #eee;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font: 0.14rem/2 \"\\51AC\\9752\\9ED1\\4F53\\7B80\\4F53\\4E2D\\6587\", \"Tahoma\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", \"STHeiti\", \"WenQuanYi Micro Hei\", SimSun, sans-serif;\n}\ninput,\ntextarea {\n  font-family: monaco, andale mono, courier new;\n  color: #666;\n}\na {\n  color: #5bc0de;\n}\n.fade-transition {\n  transition: all 0.3s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n  transform: translate3d(10px, 0, 0);\n}\n#toast-container .toast-error {\n  width: 5rem;\n}\n.disabled {\n  pointer-events: none;\n}\n.box {\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n  background: #fff;\n}\n.btn {\n  display: inline-flex;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 0.1rem;\n  border-radius: 3px;\n  border: 1px solid #5bc0de;\n  background-color: #5bc0de;\n  color: #fff;\n}\n.btn:hover {\n  position: relative;\n  top: 1px;\n  left: 1px;\n}\n.btn-cancel {\n  background: #fff;\n  color: #666;\n  border-color: #ddd;\n}\n.btn-success {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn.disabled {\n  opacity: 0.65;\n}\n.section {\n  margin: 0.1rem 0;\n}\n.section-leading {\n  margin-top: 0.3rem;\n}\n.section-title {\n  font-weight: normal;\n  border-left: 3px solid #428bca;\n  text-indent: 0.1rem;\n  font-size: 0.15rem;\n  line-height: 1.5;\n}\n.row {\n  display: flex;\n}\n.row-item {\n  flex: 1;\n}\n#app {\n  position: relative;\n  display: flex;\n  min-height: 100%;\n  padding-bottom: 0.4rem;\n}\n.nav {\n  width: 2rem;\n  margin-right: 0.15rem;\n  min-height: 5rem;\n}\n.content {\n  flex: 1;\n  padding: 0.15rem;\n}\n.footer {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n/**\n * nav\n */\n.nav a {\n  display: block;\n  padding: 0.1rem 0.15rem;\n  border-top: 1px solid #eaeaea;\n  color: #777;\n}\n.nav a:hover {\n  color: #333;\n}\n.nav a.v-link-active {\n  background: #5bc0de;\n  color: #fff;\n}\n.nav li:first-child a {\n  border-top: none;\n}\n/*\n * content\n */\n.content .text,\n.content textarea {\n  display: flex;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n.content .text {\n  padding: 0 0.1rem;\n}\n.content textarea {\n  padding: 0.1rem;\n  min-height: 3rem;\n}\n.footer {\n  text-align: center;\n  color: #999;\n}\n", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';

	var Vue = _require('vue');
	var moment = _require('moment');

	Vue.filter('moment', function (time, format) {
	    time = moment(time);
	    if (!time.isValid()) {
	        return '';
	    }

	    return time.format(format);
	});

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = {
		"name": "FE-Tools",
		"version": "0.1.3",
		"release": "0.1.3",
		"description": "FE Tools",
		"main": "index.js",
		"scripts": {
			"test": "npm run test",
			"start": "./node_modules/.bin/electron .",
			"build": "webpack --watch",
			"pack": "electron-packager . --platform=mas --arch=x64 --prune --ignore=src --icon=app.icns --out=release --overwrite --app-version=0.1.1"
		},
		"repository": {
			"type": "git",
			"url": "https://github.com/zenxds/fe-tools",
			"package": "https://raw.githubusercontent.com/zenxds/fe-tools/master/package.json",
			"releases": "https://github.com/zenxds/fe-tools/releases"
		},
		"keywords": [
			"GUI",
			"electron",
			"fe",
			"tools"
		],
		"author": {
			"name": "dongshuang.xds",
			"email": "dongshuang.xds@alibaba-inc.com"
		},
		"license": "ISC",
		"devDependencies": {
			"babel-core": "~6.9.1",
			"babel-loader": "~6.2.4",
			"babel-preset-es2015": "~6.9.0",
			"css-loader": "~0.23.1",
			"electron-prebuilt": "~1.2.2",
			"gulp": "~3.9.1",
			"json-loader": "~0.5.4",
			"style-loader": "~0.13.1",
			"stylus": "~0.54.5",
			"stylus-loader": "~2.1.1",
			"vue-hot-reload-api": "~1.3.2",
			"vue-html-loader": "~1.2.2",
			"vue-loader": "~8.5.2",
			"vue-style-loader": "~1.0.0",
			"webpack": "~1.13.1",
			"webpack-dev-server": "~1.14.1"
		},
		"dependencies": {
			"clean-css": "~3.4.18",
			"extend": "~3.0.0",
			"html-minifier": "~2.1.5",
			"iconv-lite": "~0.4.13",
			"jquery": "~3.0.0",
			"js-beautify": "~1.6.3",
			"mime": "~1.3.4",
			"moment": "~2.13.0",
			"normalize.css": "~4.1.1",
			"toastr": "~2.1.2",
			"vue": "^1.0.24",
			"vue-router": "^0.7.13"
		}
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(71)
	__vue_script__ = __webpack_require__(73)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/html.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./html.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./html.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./html.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _require2 = __webpack_require__(20);

	var clipboard = _require2.clipboard;

	var beautifyHTML = _require('js-beautify').html;
	var minify = _require('html-minifier').minify;

	exports.default = {
	    data: function data() {
	        return {
	            input: ''
	        };
	    },
	    methods: {
	        compress: function compress() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                this.input = minify(input, {
	                    collapseBooleanAttributes: true,
	                    collapseWhitespace: true,
	                    minifyCSS: true,
	                    minifyJS: true,
	                    removeComments: true,
	                    removeEmptyAttributes: true,

	                    removeRedundantAttributes: true,
	                    removeScriptTypeAttributes: true,
	                    removeStyleLinkTypeAttributes: true
	                });
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },
	        pretty: function pretty() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            try {
	                this.input = beautifyHTML(input);
	                toastr.success(g_config.copySuccessMsg);
	            } catch (e) {
	                toastr.error(e.toString());
	            }
	        },

	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"compress\">压缩</span>\n        <span class=\"btn\" v-on:click=\"pretty\">格式化</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/encode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./encode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./encode.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./encode.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".page-encode .action-item {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  margin-right: 0.1rem;\n  font-size: 0.16rem;\n  cursor: default;\n}\n.page-encode .action-item label {\n  margin-left: 0.03rem;\n}\n", ""]);

	// exports


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var UTF8 = __webpack_require__(17);
	var Unicode = __webpack_require__(18);

	var _require2 = __webpack_require__(20);

	var clipboard = _require2.clipboard;

	var iconv = _require('iconv-lite');

	var transformers = {
	    base64: {
	        encode: function encode(v) {
	            return btoa(v);
	        },
	        decode: function decode(v) {
	            return atob(v);
	        }
	    },

	    URI: {
	        encode: function encode(v) {
	            return encodeURI(v);
	        },
	        decode: function decode(v) {
	            return decodeURI(v);
	        }
	    },

	    URIComponent: {
	        encode: function encode(v) {
	            return encodeURIComponent(v);
	        },
	        decode: function decode(v) {
	            return decodeURIComponent(v.replace(/\+/g, ' '));
	        }
	    },

	    utf8: UTF8,
	    unicode: Unicode,

	    gbk: {
	        encode: function encode(v) {
	            var buffer = iconv.encode(v, 'gbk');
	            return buffer.toString('binary');
	        },

	        decode: function decode(v) {
	            v = v.replace(/\\x([a-fA-F0-9]{2})/g, function (match, p1) {
	                return String.fromCharCode(parseInt(p1, 16));
	            });

	            var buffer = new Buffer(v, 'binary');
	            return iconv.decode(buffer, 'gbk');
	        }
	    }
	};

	exports.default = {
	    data: function data() {
	        return {
	            type: '',
	            input: ''
	        };
	    },
	    watch: {},
	    methods: {
	        transform: function transform(method) {
	            var type = this.type;
	            var input = this.input.trim();
	            if (!type || !input) {
	                return;
	            }

	            var transformer = transformers[type];
	            if (transformer[method]) {
	                try {
	                    this.input = transformer[method](input);
	                    clipboard.writeText(this.input);
	                    toastr.success(g_config.copySuccessMsg);
	                } catch (e) {
	                    toastr.error(e.toString());
	                }
	            }
	        },
	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-encode\">\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"base64\" value=\"base64\" v-model=\"type\" checked>\n            <label for=\"base64\">base64</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"URI\" value=\"URI\" v-model=\"type\">\n            <label for=\"URI\">URI</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"URIComponent\" value=\"URIComponent\" v-model=\"type\">\n            <label for=\"URIComponent\">URIComponent</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"unicode\" value=\"unicode\" v-model=\"type\">\n            <label for=\"unicode\">unicode</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"gbk\" value=\"gbk\" v-model=\"type\">\n            <label for=\"gbk\">gbk</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"utf8\" value=\"utf8\" v-model=\"type\">\n            <label for=\"utf8\">utf8</label>\n        </div>\n    </div>\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"transform('encode')\">编码</span>\n        <span class=\"btn\" v-on:click=\"transform('decode')\">解码</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/crypto.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(199)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./crypto.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./crypto.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./crypto.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".page-crypto .action-item {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  margin-right: 0.1rem;\n  font-size: 0.16rem;\n  cursor: default;\n}\n.page-crypto .action-item label {\n  margin-left: 0.03rem;\n}\n", ""]);

	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var crypto = __webpack_require__(19);

	var _require = __webpack_require__(20);

	var clipboard = _require.clipboard;


	var transformers = {
	    md5: function md5(v) {
	        var md5 = crypto.createHash('md5');
	        md5.update(v);
	        return md5.digest('hex');
	    },

	    sha1: function sha1(v) {
	        var sha1 = crypto.createHash('sha1');
	        sha1.update(v);
	        return sha1.digest('hex');
	    }
	};

	exports.default = {
	    data: function data() {
	        return {
	            type: '',
	            input: ''
	        };
	    },
	    watch: {},
	    methods: {
	        encrypt: function encrypt() {
	            var type = this.type;
	            var input = this.input.trim();
	            if (!type || !input) {
	                return;
	            }

	            if (transformers[type]) {
	                try {
	                    this.input = transformers[type](input);
	                    clipboard.writeText(this.input);
	                    toastr.success(g_config.copySuccessMsg);
	                } catch (e) {
	                    toastr.error(e.toString());
	                }
	            }
	        },
	        empty: function empty() {
	            this.input = '';
	        }
	    }
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"page-crypto\">\n    <textarea v-model=\"input\"></textarea>\n\n    <div class=\"section\">\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"md5\" value=\"md5\" v-model=\"type\" checked>\n            <label for=\"md5\">md5加密</label>\n        </div>\n        <div class=\"action-item\">\n            <input type=\"radio\" name=\"type\" id=\"sha1\" value=\"sha1\" v-model=\"type\">\n            <label for=\"sha1\">sha1加密</label>\n        </div>\n    </div>\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"encrypt\">加密</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n</div>\n";

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(201)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/component/qrcode.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./qrcode.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qrcode.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./qrcode.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var AraleQRCode = __webpack_require__(40);

	var _require = __webpack_require__(20);

	var remote = _require.remote;
	var clipboard = _require.clipboard;

	var fs = __webpack_require__(34);

	exports.default = {
	    data: function data() {
	        return {
	            input: '',
	            output: null
	        };
	    },
	    methods: {
	        transform: function transform() {
	            var input = this.input.trim();
	            if (!input) {
	                return;
	            }

	            var output = this.$els.output;
	            var qrcode = new AraleQRCode({
	                text: input
	            });

	            output.innerHTML = '';
	            output.appendChild(qrcode);
	            this.output = qrcode;
	        },

	        save: function save() {
	            var _this = this;

	            remote.dialog.showSaveDialog({
	                title: "保存二维码到本地",
	                filters: [{ name: 'image', extensions: ['png'] }]
	            }, function (file) {
	                if (!file) {
	                    return;
	                }

	                var data = _this.output.toDataURL().replace(/^data:image\/\w+;base64,/, '');

	                fs.writeFile(file, data, 'base64', function (err) {
	                    if (err) {
	                        toastr.error(err.toString());
	                    } else {
	                        toastr.success('保存成功');
	                    }
	                });
	            });
	        },

	        empty: function empty() {
	            this.input = '';
	            this.output = '';
	        }
	    }
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <input type=\"text\" class=\"text\" v-model=\"input\">\n    <div class=\"section\">\n        <span class=\"btn\" v-on:click=\"transform\">转换</span>\n        <span class=\"btn btn-cancel\" v-on:click=\"empty\">清空</span>\n    </div>\n\n    <div class=\"section\" v-show=\"output\">\n        <div v-el:output id=\"output\"></div>\n        <span class=\"btn btn-success\" v-on:click=\"save\">保存</span>\n    </div>\n</div>\n";

/***/ }
/******/ ]);