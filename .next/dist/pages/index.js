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
        className: 'jsx-1649734026' + ' ' + 'root'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1649734026'
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-1649734026'
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1649734026'
      }), _react2.default.createElement('title', {
        className: 'jsx-1649734026'
      }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-1649734026'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-1649734026'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-1649734026'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-1649734026'
      })), _react2.default.createElement(_style2.default, {
        styleId: '1649734026',
        css: ['.root.jsx-1649734026{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.footer.jsx-1649734026{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}', '.footer.jsx-1649734026 a.jsx-1649734026{color:#667189;}', '.centered.jsx-1649734026{text-align:center;}', '.navbar.jsx-1649734026 a.jsx-1649734026{color:#6a11cb !important;}', '.logo.jsx-1649734026 a.jsx-1649734026{color:#1c1a27 !important;font-size:35px;}', '.logo.jsx-1649734026 a.jsx-1649734026:hover{border-bottom:none;text-decoration:none;}', '.card.jsx-1649734026{width:50%;margin:0 auto;margin-top:7vh;border:.3rem dotted #e7e9ed;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.btn-primary.jsx-1649734026,.btn-primary.jsx-1649734026:focus,.btn-primary.jsx-1649734026:active{background:#6a11cb !important;border-color:#6a11cb !important;}', 'input.jsx-1649734026{max-width:150px;margin:0 auto;}', 'label.jsx-1649734026{color:#868f96 !important;}', 'textarea.jsx-1649734026{resize:none;}', '.form-input.jsx-1649734026:focus{border-color:#6a11cb;box-shadow:none;}', '#error.jsx-1649734026{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-1649734026{width:100%;}h1.jsx-1649734026{font-size:1rem;}.root.jsx-1649734026{padding:3px;}}']
      }), _react2.default.createElement('header', {
        className: 'jsx-1649734026' + ' ' + 'navbar animated fadeInDown'
      }, _react2.default.createElement('section', {
        className: 'jsx-1649734026' + ' ' + 'navbar-section logo'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-1649734026'
      }, 'GENPASS'))), _react2.default.createElement('section', {
        className: 'jsx-1649734026' + ' ' + 'navbar-section'
      }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-1649734026' + ' ' + 'btn btn-link'
      }, 'Username generator')))), _react2.default.createElement('main', {
        className: 'jsx-1649734026'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-1649734026' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-1649734026' + ' ' + 'card-title h1'
      }, 'Generator of random password'), _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your password now!')), _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'count', className: 'jsx-1649734026' + ' ' + 'form-label'
      }, 'Set lenght of your password (default is 100)'), _react2.default.createElement('input', { value: this.state.inputValue, onChange: function onChange(event) {
          return _this2.updateInputValue(event);
        }, type: 'number', min: '1', max: '100000', id: 'count', className: 'jsx-1649734026' + ' ' + 'form-input'
      })), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.inputValue);
        }, id: 'start_button', className: 'jsx-1649734026' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-1649734026'
      }, 'Max value is 100000')), _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-1649734026' + ' ' + 'form-label'
      }, 'Your password is:'), _react2.default.createElement('textarea', { value: this.state.generatedPassword, id: 'result', rows: '7', readOnly: true, className: 'jsx-1649734026' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-1649734026' + ' ' + 'card-subtitle text-gray'
      }, 'Random, secure, custom, easy and fast.'))))))), _react2.default.createElement('footer', {
        className: 'jsx-1649734026' + ' ' + 'footer animated fadeInDown'
      }, _react2.default.createElement('p', {
        className: 'jsx-1649734026' + ' ' + 'centered'
      }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello', className: 'jsx-1649734026'
      }, 'Send me a feedback.')), _react2.default.createElement('p', {
        className: 'jsx-1649734026' + ' ' + 'centered'
      }, 'Built with \u2665 by ', _react2.default.createElement('a', { target: '_blank', href: 'http://www.petrnikolas.com/', className: 'jsx-1649734026'
      }, 'Petr Nikolas'))));
    }
  }]);

  return _class;
}(_react2.default.Component);

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
exports.default = _class;

var styles = {
  root: {
    padding: '50px',
    font: '14px "Lucida Grande", Helvetica, Arial, sans-serif'
  },

  footer: {
    color: '#acb3c2',
    padding: '.5rem .5rem 1.5rem .5rem'
  },

  footer_a: {
    color: '#667189'
  },

  centered: {
    textAlign: 'center'
  },

  navbar_a: {
    color: '#6a11cb !important'
  },

  logo_a: {
    color: '#1c1a27 !important',
    fontSize: '35px',
    ':hover': {
      borderBottom: 'none',
      textDecoration: 'none'
    }
  },

  card: {
    width: '50%',
    margin: '0 auto',
    marginTop: '7vh',
    border: '.3rem dotted #e7e9ed',
    boxShadow: '0 6px 15px rgba(36,37,38,0.08)'
  },

  btn_primary: {
    background: '#6a11cb !important',
    borderColor: '#6a11cb !important',
    ':focus': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important'
    },
    ':active': {
      background: '#6a11cb !important',
      borderColor: '#6a11cb !important'
    }
  },

  input: {
    maxWidth: '150px',
    margin: '0 auto'
  },

  label: {
    color: '#868f96 !important'
  },

  textarea: {
    resize: 'none'
  },

  form_input: {
    ':focus': {
      borderColor: '#6a11cb',
      boxShadow: 'none'
    }
  },

  error: {
    color: 'red',
    display: 'none'
  }
};