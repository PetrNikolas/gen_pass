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

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.updateNameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        nameValue: event.target.value
      });

      /** Show and hide chip  */
      if (typeof event.target.value !== 'undefined' && event.target.value) {
        document.getElementById("name_chip").style.display = "inline-block";
      } else {
        /** Chip */
        document.getElementById("name_chip").style.display = "none";
      }
    };

    _this.updateSecondNameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        secondNameValue: event.target.value
      });

      /** Show and hide chip  */
      if (typeof event.target.value !== 'undefined' && event.target.value) {
        document.getElementById("second_name_chip").style.display = "inline-block";
      } else {
        /** Chip */
        document.getElementById("second_name_chip").style.display = "none";
      }
    };

    _this.updateSurnameValue = function (event) {
      /** Error message */
      document.getElementById("error").style.display = "none";

      _this.setState({
        surnameValue: event.target.value
      });

      /** Show and hide chip  */
      if (typeof event.target.value !== 'undefined' && event.target.value) {
        document.getElementById("surname_chip").style.display = "inline-block";
      } else {
        /** Chip */
        document.getElementById("surname_chip").style.display = "none";
      }
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

      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_style2.default, {
        styleId: '2876828421',
        css: ['.breadcrumb-item.jsx-2876828421 a.jsx-2876828421{color:#f8114d;}', '.breadcrumb.jsx-2876828421 .breadcrumb-item.jsx-2876828421:not(:last-child) a.jsx-2876828421{color:#667189;}', '.card.jsx-2876828421{background:hsla(0,0%,98%,0.9);width:50%;border:.3rem dotted #e7e9ed;margin:0 auto;margin-top:7vh;box-shadow:0 6px 15px rgba(36,37,38,0.08);}', '.btn-primary.jsx-2876828421,.btn-primary.jsx-2876828421:focus,.btn-primary.jsx-2876828421:active{background:#f8114d !important;border-color:#f8114d !important;}', 'input.jsx-2876828421{max-width:150px;margin:0 auto;}', 'label.jsx-2876828421{color:#868f96 !important;}', 'textarea.jsx-2876828421{resize:none;}', '.form-input.jsx-2876828421:focus{border-color:#868f96;box-shadow:none;}', '#error.jsx-2876828421{color:red;display:none;}', '#name_chip.jsx-2876828421,#second_name_chip.jsx-2876828421,#surname_chip.jsx-2876828421{display:none;}', '@media only screen and (max-width:1100px){.card.jsx-2876828421{width:100%;}h1.jsx-2876828421{font-size:1rem;}}']
      }), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'container'
      }, _react2.default.createElement('ul', {
        className: 'jsx-2876828421' + ' ' + 'breadcrumb animated fadeInDown'
      }, _react2.default.createElement('li', {
        className: 'jsx-2876828421' + ' ' + 'breadcrumb-item'
      }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
        className: 'jsx-2876828421'
      }, 'Home'))), _react2.default.createElement('li', {
        className: 'jsx-2876828421' + ' ' + 'breadcrumb-item'
      }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
        className: 'jsx-2876828421'
      }, 'Username generator')))), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-2876828421' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-2876828421' + ' ' + 'card-title h1'
      }, 'Generator of random username'), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your username from your name and surname now!'), _react2.default.createElement('br', {
        className: 'jsx-2876828421'
      }), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-subtitle text-gray'
      }, '* second name is not required')), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'form-group'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'name', className: 'jsx-2876828421' + ' ' + 'form-label'
      }, 'Your name'), _react2.default.createElement('input', { value: this.state.nameValue, onChange: function onChange(event) {
          return _this2.updateNameValue(event);
        }, type: 'text', id: 'name', className: 'jsx-2876828421' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'secondName', className: 'jsx-2876828421' + ' ' + 'form-label'
      }, 'Your second name'), _react2.default.createElement('input', { value: this.state.secondNameValue, onChange: function onChange(event) {
          return _this2.updateSecondNameValue(event);
        }, type: 'text', id: 'secondName', className: 'jsx-2876828421' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'column col-lg-4 col-xs-12'
      }, _react2.default.createElement('label', { 'for': 'surname', className: 'jsx-2876828421' + ' ' + 'form-label'
      }, 'Your surname'), _react2.default.createElement('input', { value: this.state.surnameValue, onChange: function onChange(event) {
          return _this2.updateSurnameValue(event);
        }, type: 'text', id: 'surname', className: 'jsx-2876828421' + ' ' + 'form-input'
      })))), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.nameValue, _this2.state.secondNameValue, _this2.state.surnameValue);
        }, id: 'start_button', className: 'jsx-2876828421' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-2876828421'
      }, 'Name and surname are required')), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-2876828421' + ' ' + 'form-label'
      }, 'Your username is:'), _react2.default.createElement('textarea', { value: this.state.generatedUsername, id: 'result', rows: '3', readOnly: true, className: 'jsx-2876828421' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-2876828421'
      }, 'Generated from:', _react2.default.createElement('span', { id: 'name_chip', className: 'jsx-2876828421' + ' ' + 'chip'
      }, ' ', this.state.nameValue, ' '), _react2.default.createElement('span', { id: 'second_name_chip', className: 'jsx-2876828421' + ' ' + 'chip'
      }, ' ', this.state.secondNameValue, ' '), _react2.default.createElement('span', { id: 'surname_chip', className: 'jsx-2876828421' + ' ' + 'chip'
      }, ' ', this.state.surnameValue, ' ')), _react2.default.createElement('div', {
        className: 'jsx-2876828421' + ' ' + 'card-subtitle text-gray'
      }, 'Random, secure, custom, easy and fast.')))))));
    }
  }]);

  return _class;
}(_react2.default.Component);

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------


exports.default = _class;

var styles = {
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