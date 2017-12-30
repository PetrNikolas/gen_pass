'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------
// Export component
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.updateInputValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        inputValue: event.target.value
      });
    };

    _this.generatorHandleClick = function (length) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      /** Password */
      var password = "";

      /** Possible word, numbers, etc. */
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      /** Check if value exist */
      if (!length || typeof length === "undefined") {
        length = 100;
      }

      if (length < 100001) {
        try {
          /** Iterator */
          for (var i = 0; i < length; i++) {
            password += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          _this.setState({
            generatedPassword: password
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        /** Error message */
        document.getElementById("error").style.display = "block";
      }
    };

    _this.state = {
      inputValue: 100,
      generatedPassword: ''
    };
    return _this;
  }

  /** Update value in input */

  /** Generate password */

  (0, _createClass3.default)(_class, [{
    key: 'render',

    /** Render HTML */
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_style2.default, {
        styleId: '3835206234',
        css: ['.card.jsx-3835206234{width:100%;max-width:45rem;margin:1.5rem auto 0;background-color:#fff;border:none;padding:2rem 1.5rem;}', '.btn-primary.jsx-3835206234,.btn-primary.jsx-3835206234:focus,.btn-primary.jsx-3835206234:active{background:#f8114d !important;border-color:#f8114d !important;}', 'input.jsx-3835206234{max-width:200px;margin:0 auto;height:2.5rem;padding:0 1rem;border:0;border-radius:3px;background-color:#f4f4fb;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', 'label.jsx-3835206234{color:#868f96 !important;}', 'textarea.jsx-3835206234{resize:none;height:7.25rem;padding:0 1.125rem;padding-top:1.6rem;padding-bottom:1rem;border:0;border-radius:3px;background-color:#f4f4fb !important;border-radius:3px;line-height:1.5;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', '.form-input.jsx-3835206234:focus{border-color:#868f96;box-shadow:none;}', '#error.jsx-3835206234{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-3835206234{width:100%;}h1.jsx-3835206234{font-size:1rem;}}']
      }), _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-3835206234' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-3835206234' + ' ' + 'card-title h1'
      }, 'Passwords generator'), _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your password now!')), _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'count', className: 'jsx-3835206234' + ' ' + 'form-label'
      }, 'Set lenght of your password (default is 100)'), _react2.default.createElement('input', { value: this.state.inputValue, onChange: function onChange(event) {
          return _this2.updateInputValue(event);
        }, type: 'number', min: '1', max: '100000', id: 'count', className: 'jsx-3835206234' + ' ' + 'form-input'
      })), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.inputValue);
        }, id: 'start_button', className: 'jsx-3835206234' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-3835206234'
      }, 'Max value is 100000')), _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-3835206234' + ' ' + 'form-label'
      }, 'Your password is:'), _react2.default.createElement('textarea', { value: this.state.generatedPassword, id: 'result', rows: '7', readOnly: true, className: 'jsx-3835206234' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-3835206234' + ' ' + 'card-subtitle text-gray'
      }, 'Random, secure, custom, easy and fast.')))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;