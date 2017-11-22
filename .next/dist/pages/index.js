'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
// Generate password
// ------------------------------------------------------------------------------
var generatorHandleClick = function generatorHandleClick(length) {
  /** Password */
  var password = "";

  /** Possible word, numbers, etc. */
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  /** Iterator */
  for (var i = 0; i < length; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  console.log(password);
};

// ------------------------------------------------------------------------------
// Export
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'root'
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-3556081632'
  }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-3556081632'
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-3556081632'
  }), _react2.default.createElement('title', {
    className: 'jsx-3556081632'
  }, 'GEN PASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-3556081632'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-3556081632'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-3556081632'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-3556081632'
  })), _react2.default.createElement(_style2.default, {
    styleId: '3556081632',
    css: ['.root.jsx-3556081632{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;background:#fefefe !important;}', '.navbar.jsx-3556081632 a.jsx-3556081632{color:#00b4f0 !important;}', '.card.jsx-3556081632{width:50%;margin:0 auto;margin-top:25vh;}', '.btn-primary.jsx-3556081632{background:#00b4f0 !important;border-color:#00b4f0 !important;}']
  }), _react2.default.createElement('header', {
    className: 'jsx-3556081632' + ' ' + 'navbar animated fadeInDown'
  }, _react2.default.createElement('section', {
    className: 'jsx-3556081632' + ' ' + 'navbar-section'
  }, _react2.default.createElement('a', { href: '/', className: 'jsx-3556081632' + ' ' + 'btn btn-link'
  }, 'Home')), _react2.default.createElement('section', {
    className: 'jsx-3556081632' + ' ' + 'navbar-center'
  }, 'GEN PASS'), _react2.default.createElement('section', {
    className: 'jsx-3556081632' + ' ' + 'navbar-section'
  }, _react2.default.createElement('a', { href: '#', className: 'jsx-3556081632' + ' ' + 'btn btn-link'
  }, 'Username generator'), _react2.default.createElement('a', { href: '#', className: 'jsx-3556081632' + ' ' + 'btn btn-link'
  }, 'Donate'), _react2.default.createElement('a', { href: '#', className: 'jsx-3556081632' + ' ' + 'btn btn-link'
  }, 'Contact'))), _react2.default.createElement('main', {
    className: 'jsx-3556081632'
  }, _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'container'
  }, _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'columns'
  }, _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'column col-xs-12 text-center'
  }, _react2.default.createElement('div', { id: 'main_card', className: 'jsx-3556081632' + ' ' + 'card animated fadeInUp'
  }, _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'card-header'
  }, _react2.default.createElement('h1', {
    className: 'jsx-3556081632' + ' ' + 'card-title h1'
  }, 'Generator of random password'), _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'card-subtitle text-gray'
  }, 'Random, secure, custom, easy and fast.')), _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'card-body'
  }, 'You can try generate your random password. So, click on the button and generate your password now!'), _react2.default.createElement('div', {
    className: 'jsx-3556081632' + ' ' + 'card-footer'
  }, _react2.default.createElement('a', { onClick: function onClick() {
      generatorHandleClick(100);
    }, id: 'start_button', className: 'jsx-3556081632' + ' ' + 'btn btn-primary'
  }, 'Generate now!'))))))));
};