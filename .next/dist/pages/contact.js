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
        className: 'jsx-590250792' + ' ' + 'root'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-590250792'
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-590250792'
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-590250792'
      }), _react2.default.createElement('title', {
        className: 'jsx-590250792'
      }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-590250792'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-590250792'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-590250792'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-590250792'
      })), _react2.default.createElement(_style2.default, {
        styleId: '590250792',
        css: ['.root.jsx-590250792{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.navbar.jsx-590250792 a.jsx-590250792{color:#6a11cb !important;}', '.logo.jsx-590250792{color:#1c1a27;font-size:35px;}', '.card.jsx-590250792{width:50%;margin:0 auto;margin-top:25vh;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.btn-primary.jsx-590250792,.btn-primary.jsx-590250792:focus,.btn-primary.jsx-590250792:active{background:#6a11cb !important;border-color:#6a11cb !important;}', 'input.jsx-590250792{max-width:150px;margin:0 auto;}', 'label.jsx-590250792{color:#868f96 !important;}', 'textarea.jsx-590250792{resize:none;}', '.form-input.jsx-590250792:focus{border-color:#6a11cb;box-shadow:none;}']
      }), _react2.default.createElement('header', {
        className: 'jsx-590250792' + ' ' + 'navbar animated fadeInDown'
      }, _react2.default.createElement('section', {
        className: 'jsx-590250792' + ' ' + 'navbar-section logo'
      }, 'GENPASS'), _react2.default.createElement('section', {
        className: 'jsx-590250792' + ' ' + 'navbar-section'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-590250792' + ' ' + 'btn btn-link'
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-590250792' + ' ' + 'btn btn-link'
      }, 'Username generator')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
        className: 'jsx-590250792' + ' ' + 'btn btn-link'
      }, 'Contact')))), _react2.default.createElement('main', {
        className: 'jsx-590250792'
      }, _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-590250792' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-590250792' + ' ' + 'card-title h1'
      }, 'Hello!'), _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'card-subtitle text-gray'
      }, 'I\'m Petr Nikolas')), _react2.default.createElement('div', {
        className: 'jsx-590250792' + ' ' + 'card-body'
      }, 'You can contact me on my email:', _react2.default.createElement('br', {
        className: 'jsx-590250792'
      }), 'petr.nikolas@icloud.com')))))));
    }
  }]);

  return _class;
}(_react2.default.Component);
// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
exports.default = _class;