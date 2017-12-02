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
        styleId: '2055779022',
        css: ['.card.jsx-2055779022{width:100%;max-width:45rem;margin:2.5rem auto 0;-webkit-box-shadow:0 0.5rem 2rem rgba(0,0,0,.15);box-shadow:0 0.5rem 2rem rgba(0,0,0,.15);border-radius:.75rem;background-color:#fff;padding:2rem 1.5rem;}', '.btn-primary.jsx-2055779022,.btn-primary.jsx-2055779022:focus,.btn-primary.jsx-2055779022:active{background:#f8114d !important;border-color:#f8114d !important;}', 'input.jsx-2055779022{max-width:150px;margin:0 auto;}', 'label.jsx-2055779022{color:#868f96 !important;}', 'textarea.jsx-2055779022{resize:none;}', '.form-input.jsx-2055779022:focus{border-color:#868f96;box-shadow:none;}', '#error.jsx-2055779022{color:red;display:none;}', '@media only screen and (max-width:1100px){.card.jsx-2055779022{width:100%;}h1.jsx-2055779022{font-size:1rem;}}']
      }), _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'columns'
      }, _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'column col-xs-12 text-center'
      }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-2055779022' + ' ' + 'card animated fadeInUp'
      }, _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'card-header'
      }, _react2.default.createElement('h1', {
        className: 'jsx-2055779022' + ' ' + 'card-title h1'
      }, 'Generator of random password'), _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'card-subtitle text-gray'
      }, 'So, click on the button and generate your password now!')), _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'card-body'
      }, _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'count', className: 'jsx-2055779022' + ' ' + 'form-label'
      }, 'Set lenght of your password (default is 100)'), _react2.default.createElement('input', { value: this.state.inputValue, onChange: function onChange(event) {
          return _this2.updateInputValue(event);
        }, type: 'number', min: '1', max: '100000', id: 'count', className: 'jsx-2055779022' + ' ' + 'form-input'
      })), _react2.default.createElement('button', { onClick: function onClick() {
          _this2.generatorHandleClick(_this2.state.inputValue);
        }, id: 'start_button', className: 'jsx-2055779022' + ' ' + 'btn btn-primary'
      }, 'Generate now!'), _react2.default.createElement('span', { id: 'error', className: 'jsx-2055779022'
      }, 'Max value is 100000')), _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'card-footer'
      }, _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'form-group'
      }, _react2.default.createElement('label', { 'for': 'result', className: 'jsx-2055779022' + ' ' + 'form-label'
      }, 'Your password is:'), _react2.default.createElement('textarea', { value: this.state.generatedPassword, id: 'result', rows: '7', readOnly: true, className: 'jsx-2055779022' + ' ' + 'form-input'
      })), _react2.default.createElement('div', {
        className: 'jsx-2055779022' + ' ' + 'card-subtitle text-gray'
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