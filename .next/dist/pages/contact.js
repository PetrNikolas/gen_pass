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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------------------------------------------------
// Export component
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
      return _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'root'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-2247875213'
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-2247875213'
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-2247875213'
      }), _react2.default.createElement('title', {
        className: 'jsx-2247875213'
      }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-2247875213'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-2247875213'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-2247875213'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-2247875213'
      })), _react2.default.createElement(_style2.default, {
        styleId: '2247875213',
        css: ['.root.jsx-2247875213{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.navbar.jsx-2247875213 a.jsx-2247875213{color:#6a11cb !important;}', '.logo.jsx-2247875213{color:#1c1a27;font-size:35px;}', '#main_card.jsx-2247875213{height:78vh;margin-top:20px;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.padding.jsx-2247875213{padding-top:20vh;}', '.btn-primary.jsx-2247875213,.btn-primary.jsx-2247875213:focus,.btn-primary.jsx-2247875213:active{background:#6a11cb !important;border-color:#6a11cb !important;}', 'input.jsx-2247875213{max-width:150px;margin:0 auto;}', 'label.jsx-2247875213{color:#868f96 !important;}', 'textarea.jsx-2247875213{resize:none;}', '.form-input.jsx-2247875213:focus{border-color:#6a11cb;box-shadow:none;}']
      }), _react2.default.createElement('header', {
        className: 'jsx-2247875213' + ' ' + 'navbar animated fadeInDown'
      }, _react2.default.createElement('section', {
        className: 'jsx-2247875213' + ' ' + 'navbar-section logo'
      }, 'GENPASS'), _react2.default.createElement('section', {
        className: 'jsx-2247875213' + ' ' + 'navbar-section'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-2247875213' + ' ' + 'btn btn-link'
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-2247875213' + ' ' + 'btn btn-link'
      }, 'Username generator')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
        className: 'jsx-2247875213' + ' ' + 'btn btn-link'
      }, 'Contact')))), _react2.default.createElement('main', {
        className: 'jsx-2247875213'
      }, _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-2247875213' + ' ' + 'empty'
      }, _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'empty-icon padding'
      }, _react2.default.createElement('i', {
        className: 'jsx-2247875213' + ' ' + 'icon icon-people'
      })), _react2.default.createElement('h1', {
        className: 'jsx-2247875213' + ' ' + 'card-title h1'
      }, 'Hello!'), _react2.default.createElement('p', {
        className: 'jsx-2247875213' + ' ' + 'empty-title h5'
      }, 'I\'m Petr Nikolas'), _react2.default.createElement('p', {
        className: 'jsx-2247875213' + ' ' + 'empty-subtitle'
      }, 'Click the button to start a conversation with me.'), _react2.default.createElement('div', {
        className: 'jsx-2247875213' + ' ' + 'empty-action'
      }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello%Petr%20Nikolas', className: 'jsx-2247875213' + ' ' + 'btn btn-primary'
      }, 'Send a message'))))))));
    }
  }]);

  return _class;
}(_react2.default.Component);
// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
exports.default = _class;