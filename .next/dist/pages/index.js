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

var _layout = require('../layout');

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

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  /** Render HTML */

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_style2.default, {
        styleId: '1979907109',
        css: ['h1.jsx-1979907109{padding-top:7rem;color:#5755d9;}', '.card.jsx-1979907109{width:auto;margin:1.5rem auto 0;background-color:#fff;border:none;padding:2rem 1.5rem;box-shadow:0 3px 20px rgba(0,0,0,.1);}', '.btn-primary.jsx-1979907109,.btn-primary.jsx-1979907109:focus,.btn-primary.jsx-1979907109:active{background:#f8114d !important;border-color:#f8114d !important;}', 'input.jsx-1979907109{max-width:200px;margin:0 auto;height:2.5rem;padding:0 1rem;border:0;border-radius:3px;background-color:#f4f4fb;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', 'label.jsx-1979907109{color:#868f96 !important;}', 'textarea.jsx-1979907109{resize:none;height:7.25rem;padding:0 1.125rem;padding-top:1.6rem;padding-bottom:1rem;border:0;border-radius:3px;background-color:#f4f4fb !important;border-radius:3px;line-height:1.5;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}', '.form-input.jsx-1979907109:focus{border-color:#868f96;box-shadow:none;}', '#error.jsx-1979907109{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-1979907109{width:100%;}h1.jsx-1979907109{font-size:1rem;}}']
      }), _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'container'
      }, _react2.default.createElement('h1', {
        className: 'jsx-1979907109' + ' ' + 'card-title h1 text-center animated fadeInDown'
      }, 'Random generators'), _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'column col-xs-12 col-6 text-center'
      }, _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card-header'
      }, _react2.default.createElement('h2', {
        className: 'jsx-1979907109' + ' ' + 'card-title h2'
      }, 'Passwords generator'), _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card-subtitle text-gray'
      }, _react2.default.createElement(_link2.default, { href: '/passwords' }, _react2.default.createElement('a', {
        className: 'jsx-1979907109' + ' ' + 'btn btn-link'
      }, 'Generate now')))))), _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'column col-xs-12 col-6 text-center'
      }, _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card-header'
      }, _react2.default.createElement('h2', {
        className: 'jsx-1979907109' + ' ' + 'card-title h2'
      }, 'Usernames generator'), _react2.default.createElement('div', {
        className: 'jsx-1979907109' + ' ' + 'card-subtitle text-gray'
      }, _react2.default.createElement(_link2.default, { href: '/usernames' }, _react2.default.createElement('a', {
        className: 'jsx-1979907109' + ' ' + 'btn btn-link'
      }, 'Generate now')))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;