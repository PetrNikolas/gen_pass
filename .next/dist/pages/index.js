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

      return _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'root'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-182322028'
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-182322028'
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-182322028'
      }), _react2.default.createElement('title', {
        className: 'jsx-182322028'
      }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-182322028'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-182322028'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-182322028'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-182322028'
      })), _react2.default.createElement(_style2.default, {
        styleId: '182322028',
        css: ['.root.jsx-182322028{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.footer.jsx-182322028{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}', '.footer.jsx-182322028 a.jsx-182322028{color:#667189;}', '.centered.jsx-182322028{text-align:center;}', '.navbar.jsx-182322028 a.jsx-182322028{color:#6a11cb !important;}', '.logo.jsx-182322028{color:#1c1a27;font-size:35px;}', '.card.jsx-182322028{width:50%;margin:0 auto;margin-top:5vh;border:.3rem dotted #e7e9ed;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.btn-primary.jsx-182322028,.btn-primary.jsx-182322028:focus,.btn-primary.jsx-182322028:active{background:#6a11cb !important;border-color:#6a11cb !important;}', 'input.jsx-182322028{max-width:150px;margin:0 auto;}', 'label.jsx-182322028{color:#868f96 !important;}', 'textarea.jsx-182322028{resize:none;}', '.form-input.jsx-182322028:focus{border-color:#6a11cb;box-shadow:none;}', '#error.jsx-182322028{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-182322028{width:100%;}h1.jsx-182322028{font-size:1rem;}.root.jsx-182322028{padding:3px;}}']
      }), _react2.default.createElement('header', {
        className: 'jsx-182322028' + ' ' + 'navbar animated fadeInDown'
      }, _react2.default.createElement('section', {
        className: 'jsx-182322028' + ' ' + 'navbar-section logo'
      }, 'GENPASS'), _react2.default.createElement('section', {
        className: 'jsx-182322028' + ' ' + 'navbar-section'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-182322028' + ' ' + 'btn btn-link'
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', { 'data-badge': 'beta', className: 'jsx-182322028' + ' ' + 'btn btn-link badge'
      }, 'Username generator')), _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', {
        className: 'jsx-182322028' + ' ' + 'btn btn-link'
      }, 'Contact')))), _react2.default.createElement('main', {
        className: 'jsx-182322028'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-182322028' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-182322028' + ' ' + 'card-title h1'
      }, 'Generator of random password'), _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your password now!')), _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'count', className: 'jsx-182322028' + ' ' + 'form-label'
      }, 'Set lenght of your password (default is 100)'), _react2.default.createElement('input', { value: this.state.inputValue, onChange: function onChange(event) {
          return _this2.updateInputValue(event);
        }, type: 'number', min: '1', max: '100000', id: 'count', className: 'jsx-182322028' + ' ' + 'form-input'
      })), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.inputValue);
        }, id: 'start_button', className: 'jsx-182322028' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-182322028'
      }, 'Max value is 100000')), _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-182322028' + ' ' + 'form-label'
      }, 'Your password is:'), _react2.default.createElement('textarea', { value: this.state.generatedPassword, id: 'result', rows: '7', readOnly: true, className: 'jsx-182322028' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-182322028' + ' ' + 'card-subtitle text-gray'
      }, 'Random, secure, custom, easy and fast.'))))))), _react2.default.createElement('footer', {
        className: 'jsx-182322028' + ' ' + 'footer animated fadeInDown'
      }, _react2.default.createElement('p', {
        className: 'jsx-182322028' + ' ' + 'centered'
      }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello', className: 'jsx-182322028'
      }, 'Send me a feedback.')), _react2.default.createElement('p', {
        className: 'jsx-182322028' + ' ' + 'centered'
      }, 'Built with \u2665 by ', _react2.default.createElement('a', { target: '_blank', href: 'http://www.petrnikolas.com/', className: 'jsx-182322028'
      }, 'Petr Nikolas'))));
    }
  }]);

  return _class;
}(_react2.default.Component);
// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
exports.default = _class;