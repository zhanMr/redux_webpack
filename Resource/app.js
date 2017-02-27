webpackJsonp([1],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = { "Data": {
		"HotelList": [{
			"Address": "上海浦东",
			"HotelId": 111,
			"ImageInfo": {
				"Name": "",
				"UrlList": []
			},
			"HotelName": "上海浦东-测试酒店名称",
			"TScore": 4.3,
			"CommentTotalNumber": 54
		}, {
			"Address": "北京北海",
			"HotelId": 111,
			"ImageInfo": {
				"Name": "",
				"UrlList": []
			},
			"HotelName": "北京北海-测试酒店名称",
			"TScore": 4.3,
			"CommentTotalNumber": 54
		}, {
			"Address": "上海浦东",
			"HotelId": 111,
			"ImageInfo": {
				"Name": "",
				"UrlList": []
			},
			"HotelName": "上海浦东-测试酒店名称",
			"TScore": 4.3,
			"CommentTotalNumber": 54
		}, {
			"Address": "北京北海",
			"HotelId": 111,
			"ImageInfo": {
				"Name": "",
				"UrlList": []
			},
			"HotelName": "北京北海-测试酒店名称",
			"TScore": 4.3,
			"CommentTotalNumber": 54
		}]

	}
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;

    return function (next) {
        return function (action) {
            console.log('pre state', getState());
            next(action);
            console.log('after dispatch', getState());
        };
    };
};

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _action = __webpack_require__(82);

var action = _interopRequireWildcard(_action);

var _redux = __webpack_require__(24);

var _reducer = __webpack_require__(83);

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRedux = __webpack_require__(38);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)(_reducer2.default);

var style = __webpack_require__(299);

var Other = function (_React$Component) {
    _inherits(Other, _React$Component);

    function Other() {
        _classCallCheck(this, Other);

        return _possibleConstructorReturn(this, (Other.__proto__ || Object.getPrototypeOf(Other)).apply(this, arguments));
    }

    _createClass(Other, [{
        key: 'add',
        value: function add() {
            var _props = this.props,
                data = _props.data,
                dispatch = _props.dispatch;

            data.text.push('xxxx');
            this.props.addTodo(data.text);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { onClick: this.add.bind(this) },
                '\u5B50\u7EC4\u4EF6!!'
            );
        }
    }]);

    return Other;
}(_react2.default.Component);

var Order = function (_React$Component2) {
    _inherits(Order, _React$Component2);

    function Order(props) {
        _classCallCheck(this, Order);

        var _this2 = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this, props));

        _this2.state = {
            text: '123'
        };
        return _this2;
    }

    _createClass(Order, [{
        key: 'changeText',
        value: function changeText(e) {
            this.setState({ text: e.target.value });
        }
    }, {
        key: 'addText',
        value: function addText() {
            var _props2 = this.props,
                data = _props2.data,
                dispatch = _props2.dispatch;

            data.text.push(this.state.text);
            dispatch(action.addTodo(data.text));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                data = _props3.data,
                dispatch = _props3.dispatch;

            var boundActionCreators = (0, _redux.bindActionCreators)(action, dispatch);
            var text = this.state.text;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement('input', { type: 'text', value: text, onChange: this.changeText.bind(this) }),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.addText.bind(this) },
                        '\u63D0\u4EA4'
                    )
                ),
                data.text.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { key: key, className: style.text },
                        item
                    );
                }),
                _react2.default.createElement(Other, _extends({}, this.props, boundActionCreators))
            );
        }
    }]);

    return Order;
}(_react2.default.Component);

function select(state) {
    return {
        data: state.addTodo
    };
}

exports.default = (0, _reactRedux.connect)(select)(Order);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(142)();
// imports


// module
exports.push([module.i, "._1SP_dMXNbzfdf9OXpYz1AE{\r\n    color: red\r\n}", ""]);

// exports
exports.locals = {
	"text": "_1SP_dMXNbzfdf9OXpYz1AE"
};

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

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


/***/ }),

/***/ 298:
/***/ (function(module, exports) {

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
	if(typeof DEBUG !== "undefined" && DEBUG) {
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


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(298)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?modules!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?modules!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _action = __webpack_require__(82);

var action = _interopRequireWildcard(_action);

var _redux = __webpack_require__(24);

var _reducer = __webpack_require__(83);

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRedux = __webpack_require__(38);

var _order = __webpack_require__(137);

var _order2 = _interopRequireDefault(_order);

var _log = __webpack_require__(136);

var _log2 = _interopRequireDefault(_log);

var _angular = __webpack_require__(49);

var _angular2 = _interopRequireDefault(_angular);

var _hotel = __webpack_require__(135);

var _hotel2 = _interopRequireDefault(_hotel);

var _reactRouter = __webpack_require__(139);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createStoreWithLog = (0, _redux.applyMiddleware)(_log2.default)(_redux.createStore);
var store = createStoreWithLog(_reducer2.default);
function tests() {}

//===========react redux=============================================================================================================================================================================

if (document.getElementById('box')) {
  store.subscribe(tests);
  store.dispatch(action.addTodo([1]));
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_order2.default, null)
  ), document.getElementById('box'));
  _.map([1, 2, 3], function (item) {
    console.log(item);
  });
}

//===========react-router=============================================================================================================================================================================
if (document.getElementById('react-router')) {
  var One = function (_React$Component) {
    _inherits(One, _React$Component);

    function One() {
      _classCallCheck(this, One);

      return _possibleConstructorReturn(this, (One.__proto__ || Object.getPrototypeOf(One)).apply(this, arguments));
    }

    _createClass(One, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
      }
    }, {
      key: 'routerWillLeave',
      value: function routerWillLeave() {
        return 'Are you sure??xx';
      }
    }, {
      key: 'render',
      value: function render() {
        //redux_webpack/react-router.html#/
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            '\u9996\u9875'
          ),
          this.props.children,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: '/message' },
              '\u6587\u7AE01'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/message?id=1' },
              '\u6587\u7AE02'
            )
          )
        );
      }
    }]);

    return One;
  }(_react2.default.Component);

  ;

  var Two = function (_React$Component2) {
    _inherits(Two, _React$Component2);

    function Two() {
      _classCallCheck(this, Two);

      return _possibleConstructorReturn(this, (Two.__proto__ || Object.getPrototypeOf(Two)).apply(this, arguments));
    }

    _createClass(Two, [{
      key: 'render',
      value: function render() {
        //redux_webpack/react-router.html#/two
        return _react2.default.createElement(
          'div',
          null,
          '\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9'
        );
      }
    }]);

    return Two;
  }(_react2.default.Component);

  ;

  var Home = function (_React$Component3) {
    _inherits(Home, _React$Component3);

    function Home() {
      _classCallCheck(this, Home);

      return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          '\u8FD9\u6BB5\u8BDD\u9996\u9875\u76F4\u63A5\u80FD\u770B\u5230\u4E86'
        );
      }
    }]);

    return Home;
  }(_react2.default.Component);

  var Message = function (_React$Component4) {
    _inherits(Message, _React$Component4);

    function Message() {
      _classCallCheck(this, Message);

      return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
    }

    _createClass(Message, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            '\u8FD9\u662F\u4E00\u7BC7\u6587\u7AE0\u554A'
          ),
          this.props.children,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', activeStyle: { color: 'red' }, className: 'link' },
            'Home'
          )
        );
      }
    }]);

    return Message;
  }(_react2.default.Component);

  var routerConfig = [{
    path: '/',
    component: One,
    indexRoute: { component: Home },
    childrenRoutes: [{ path: 'two', component: Message }]
  }];
  // ReactDom.render((
  //   <Router history={hashHistory}>
  //     <Route path="/" component={One}>
  //       {/* <IndexRedirect to='two'/> */}
  //       <IndexRoute component={Home}></IndexRoute>
  //       <Route path="two" component={Two}></Route>
  //       <Redirect from="three" to="two"></Redirect>//访问three跳转到two
  //     </Route>
  //     <Route path="/message*"  component={Message}></Route>
  //   </Router>
  // ), document.getElementById('react-router'));
  _reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: routerConfig }), document.getElementById('react-router'));
}
//===========angluar=============================================================================================================================================================================
if (document.getElementById('angular')) {
  document.getElementById('angular').innerHTML = '\n      <div ng-app="app">\n          <div class="body nofoot hotels_mod" ng-controller="hotel"><div hotel></div></div>\n        </div>\n  ';
  _hotel2.default.Data.ShowAllHotel = true;
  _hotel2.default.Data.HotelList.forEach(function (item, index) {
    item.Status = index <= 5;
    console.log(item.Status);
  });
  var app = _angular2.default.module('app', []);
  app.directive('hotel', function () {
    return {
      template: '\n              <div class="hotels_box">\n                <div>\n                  <div class="hotel" ng-repeat="item in hotel.HotelList | orderBy: \'HotelId\'" ng-show="item.Status" ng-click="all()" ng-class-even="{\'box2\': true}">\n                      <div class="hotels_base_info" data-id={{item.HotelId}}>\n                          <h3>{{$index + 1}}.{{item.HotelName}}<span ng-bind="showImage(item)"></span></h3>\n                          <divng-click="test($event)">\n                            <img ng-if="showImage(item)" src={{item.ImageInfo.UrlList[0].Value}} />\n                            <img ng-if="!showImage(item)" src=\'\' alt="\u6682\u65E0\u56FE\u7247"/>\n                          </div>\n                          <div>\n                            <p><span><i>{{item.TScore}}</i></span>\u5206</p><p><span>{{item.CommentTotalNumber}}</span>\u4EBA\u70B9\u8BC4</p>\n                          </div>\n                          <div class="hotels_desc"><p>\u9AD8\u6863\u578B\u9152\u5E97</p>\u5A01\u57FA\u57FA</div>\n                      </div>\n                  </div>\n                  <div ng-if="hotel.HotelList.length > 10" ng-show ="hotel.ShowAllHotel"  ng-click="showAllHotel()"><span class="show_more_btn">\u5C55\u5F00\u66F4\u591A\u9152\u5E97</span></div>\n                </div>\n              </div>\n              <div ng-controller="test"><span id="span" ng-click="changeText()">{{username}}</span> {{hex}}</div>\n          '
    };
  });
  app.factory('Data', function () {
    return {
      name: ''
    };
  });
  app.service('$my', function () {
    this.my = function (arr) {
      return arr.join('、');
    };
  });
  app.controller('test', function ($scope, $timeout, $my, Data) {
    $timeout(function () {
      console.log('xxx');
      $scope.username = 'who are you';
      $scope.hex = $my.my([1, 2, 3]);
    }, 1000);
    $scope.changeText = function () {
      $scope.username = "I'm JACK";
      Data.name = $scope.username;
    };
  });
  app.controller('hotel', function ($scope, Data) {
    $scope.showImage = function (item) {
      return item.ImageInfo.UrlList && item.ImageInfo.UrlList.length > 0;
    };
    $scope.showAllHotel = function () {
      $scope.hotel.HotelList.forEach(function (item) {
        item.Status = true;
      });
      $scope.hotel.ShowAllHotel = false;
    };
    $scope.test = function ($event) {
      $event.stopPropagation();
      console.log('点击了图片');
      console.log($scope.username);
      console.log(Data.name);
    };
    $scope.all = function () {
      console.log('点击了整体');
    };
    $scope.hotel = _hotel2.default.Data;
  });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
var ADD_TODO = '添加 TODO';

function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    };
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(24);

function addTodo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case '添加 TODO':
            return action;
        default:
            return state;
    }
}

var todoApp = (0, _redux.combineReducers)({
    addTodo: addTodo
});

exports.default = todoApp;

/***/ })

},[300]);