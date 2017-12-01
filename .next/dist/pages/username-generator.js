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

    _this.updateNameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        nameValue: event.target.value
      });
    };

    _this.updateSecondNameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        secondNameValue: event.target.value
      });
    };

    _this.updateSurnameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        surnameValue: event.target.value
      });
    };

    _this.generatorHandleClick = function (name, secondName, surname) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      /** Password */
      var first_variant = "";
      var second_varinat = "";
      var username = "";

      /** Check if second name exist */
      if (!secondName || typeof secondName === "undefined") {
        secondName = '';
      }

      if (name && typeof name !== "undefined" && surname && typeof surname !== "undefined") {
        /** Possible variants */
        var possible_of_name = name + secondName + surname + '1234567890';
        var length_of_name = possible_of_name.length;

        try {
          /** Iterator */
          for (var i = 0; i < length_of_name; i++) {
            first_variant += possible_of_name.charAt(Math.floor(Math.random() * possible_of_name.length));
          }

          username = first_variant;

          for (var _i = 0; _i < length; _i++) {
            username += username.charAt(Math.floor(Math.random() * username.length));
          }

          _this.setState({
            generatedUsername: username
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
      nameValue: '',
      secondNameValue: '',
      surnameValue: '',
      generatedUsername: ''
    };
    return _this;
  }

  /** Update value in input - name */

  /** Update value in input - second name */

  /** Update value in input - surname */

  /** Generate password */

  (0, _createClass3.default)(_class, [{
    key: 'render',

    /** Render HTML */
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'root'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-4049999136'
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-4049999136'
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-4049999136'
      }), _react2.default.createElement('title', {
        className: 'jsx-4049999136'
      }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-4049999136'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-4049999136'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-4049999136'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-4049999136'
      })), _react2.default.createElement(_style2.default, {
        styleId: '4049999136',
        css: ['.root.jsx-4049999136{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.footer.jsx-4049999136{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}', '.footer.jsx-4049999136 a.jsx-4049999136{color:#667189;}', '.centered.jsx-4049999136{text-align:center;}', '.navbar.jsx-4049999136 a.jsx-4049999136{color:#6a11cb !important;}', '.logo.jsx-4049999136 a.jsx-4049999136{color:#1c1a27 !important;font-size:35px;}', '.logo.jsx-4049999136 a.jsx-4049999136:hover{border-bottom:none;text-decoration:none;}', '.card.jsx-4049999136{width:50%;border:.3rem dotted #e7e9ed;margin:0 auto;margin-top:7vh;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.btn-primary.jsx-4049999136,.btn-primary.jsx-4049999136:focus,.btn-primary.jsx-4049999136:active{background:#6a11cb !important;border-color:#6a11cb !important;}', 'input.jsx-4049999136{max-width:150px;margin:0 auto;}', 'label.jsx-4049999136{color:#868f96 !important;}', 'textarea.jsx-4049999136{resize:none;}', '.form-input.jsx-4049999136:focus{border-color:#6a11cb;box-shadow:none;}', '#error.jsx-4049999136{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-4049999136{width:100%;}h1.jsx-4049999136{font-size:1rem;}.root.jsx-4049999136{padding:3px;}}']
      }), _react2.default.createElement('header', {
        className: 'jsx-4049999136' + ' ' + 'navbar animated fadeInDown'
      }, _react2.default.createElement('section', {
        className: 'jsx-4049999136' + ' ' + 'navbar-section logo'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-4049999136'
      }, 'GENPASS'))), _react2.default.createElement('section', {
        className: 'jsx-4049999136' + ' ' + 'navbar-section'
      }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-4049999136' + ' ' + 'btn btn-link'
      }, 'Username generator')))), _react2.default.createElement('main', {
        className: 'jsx-4049999136'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'container'
      }, _react2.default.createElement('ul', {
        className: 'jsx-4049999136' + ' ' + 'breadcrumb animated fadeInDown'
      }, _react2.default.createElement('li', {
        className: 'jsx-4049999136' + ' ' + 'breadcrumb-item'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-4049999136'
      }, 'Home'))), _react2.default.createElement('li', {
        className: 'jsx-4049999136' + ' ' + 'breadcrumb-item'
      }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-4049999136'
      }, 'Username generator')))), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-4049999136' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-4049999136' + ' ' + 'card-title h1'
      }, 'Generator of random username'), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your username from your name and surname now!'), _react2.default.createElement('br', {
        className: 'jsx-4049999136'
      }), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-subtitle text-gray'
      }, '* second name is not required')), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'form-group'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'name', className: 'jsx-4049999136' + ' ' + 'form-label'
      }, 'Your name'), _react2.default.createElement('input', { value: this.state.nameValue, onChange: function onChange(event) {
          return _this2.updateNameValue(event);
        }, type: 'text', id: 'name', className: 'jsx-4049999136' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'secondName', className: 'jsx-4049999136' + ' ' + 'form-label'
      }, 'Your second name'), _react2.default.createElement('input', { value: this.state.secondNameValue, onChange: function onChange(event) {
          return _this2.updateSecondNameValue(event);
        }, type: 'text', id: 'secondName', className: 'jsx-4049999136' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'surname', className: 'jsx-4049999136' + ' ' + 'form-label'
      }, 'Your surname'), _react2.default.createElement('input', { value: this.state.surnameValue, onChange: function onChange(event) {
          return _this2.updateSurnameValue(event);
        }, type: 'text', id: 'surname', className: 'jsx-4049999136' + ' ' + 'form-input'
      })))), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.nameValue, _this2.state.secondNameValue, _this2.state.surnameValue);
        }, id: 'start_button', className: 'jsx-4049999136' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-4049999136'
      }, 'Name and surname are required')), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-4049999136' + ' ' + 'form-label'
      }, 'Your username is:'), _react2.default.createElement('textarea', { value: this.state.generatedUsername, id: 'result', rows: '3', readOnly: true, className: 'jsx-4049999136' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-4049999136'
      }, 'Generated from:', _react2.default.createElement('span', {
        className: 'jsx-4049999136' + ' ' + 'chip'
      }, ' ', this.state.nameValue, ' '), _react2.default.createElement('span', {
        className: 'jsx-4049999136' + ' ' + 'chip'
      }, ' ', this.state.secondNameValue, ' '), _react2.default.createElement('span', {
        className: 'jsx-4049999136' + ' ' + 'chip'
      }, ' ', this.state.surnameValue, ' ')), _react2.default.createElement('div', {
        className: 'jsx-4049999136' + ' ' + 'card-subtitle text-gray'
      }, 'Random, secure, custom, easy and fast.'))))))), _react2.default.createElement('footer', {
        className: 'jsx-4049999136' + ' ' + 'footer animated fadeInDown'
      }, _react2.default.createElement('p', {
        className: 'jsx-4049999136' + ' ' + 'centered'
      }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello', className: 'jsx-4049999136'
      }, 'Send me a feedback.')), _react2.default.createElement('p', {
        className: 'jsx-4049999136' + ' ' + 'centered'
      }, 'Built with \u2665 by ', _react2.default.createElement('a', { target: '_blank', href: 'http://www.petrnikolas.com/', className: 'jsx-4049999136'
      }, 'Petr Nikolas'))));
    }
  }]);

  return _class;
}(_react2.default.Component);
// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
exports.default = _class;