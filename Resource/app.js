webpackJsonp([0],{

/***/ 103:
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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _action = __webpack_require__(62);

var action = _interopRequireWildcard(_action);

var _redux = __webpack_require__(20);

var _reducer = __webpack_require__(63);

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRedux = __webpack_require__(29);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _redux.createStore)(_reducer2.default);

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

            data.text.push('xxx');
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
                        { key: key },
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _action = __webpack_require__(62);

var action = _interopRequireWildcard(_action);

var _redux = __webpack_require__(20);

var _reducer = __webpack_require__(63);

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRedux = __webpack_require__(29);

var _order = __webpack_require__(104);

var _order2 = _interopRequireDefault(_order);

var _log = __webpack_require__(103);

var _log2 = _interopRequireDefault(_log);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithLog = (0, _redux.applyMiddleware)(_log2.default)(_redux.createStore);
var store = createStoreWithLog(_reducer2.default);
function tests() {}
store.subscribe(tests);
store.dispatch(action.addTodo([1]));
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_order2.default, null)
), document.getElementById('box'));

/***/ }),

/***/ 62:
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(20);

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

},[235]);