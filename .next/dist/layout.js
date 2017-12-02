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
// Export layout
// ------------------------------------------------------------------------------
exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-40380392' + ' ' + 'root'
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-40380392'
  }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-40380392'
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-40380392'
  }), _react2.default.createElement('title', {
    className: 'jsx-40380392'
  }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-40380392'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-40380392'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-40380392'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-40380392'
  })), _react2.default.createElement(_style2.default, {
    styleId: '40380392',
    css: ['.root.jsx-40380392{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}', '.footer.jsx-40380392{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}', '.footer.jsx-40380392 a.jsx-40380392{color:#667189;}', '.centered.jsx-40380392{text-align:center;}', '.navbar.jsx-40380392 a.jsx-40380392{color:#6a11cb !important;}', '.logo.jsx-40380392 a.jsx-40380392{color:#1c1a27 !important;font-size:35px;}', '.logo.jsx-40380392 a.jsx-40380392:hover{border-bottom:none;text-decoration:none;}', '@media only screen and (max-width:1100px){.root.jsx-40380392{padding:3px;}}']
  }), _react2.default.createElement('header', {
    className: 'jsx-40380392' + ' ' + 'navbar animated fadeInDown'
  }, _react2.default.createElement('section', {
    className: 'jsx-40380392' + ' ' + 'navbar-section logo'
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-40380392'
  }, 'GENPASS'))), _react2.default.createElement('section', {
    className: 'jsx-40380392' + ' ' + 'navbar-section'
  }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
    className: 'jsx-40380392' + ' ' + 'btn btn-link'
  }, 'Username generator')))), _react2.default.createElement('main', {
    className: 'jsx-40380392'
  }, children), _react2.default.createElement('footer', {
    className: 'jsx-40380392' + ' ' + 'footer animated fadeInDown'
  }, _react2.default.createElement('p', {
    className: 'jsx-40380392' + ' ' + 'centered'
  }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello', className: 'jsx-40380392'
  }, 'Send me a feedback.')), _react2.default.createElement('p', {
    className: 'jsx-40380392' + ' ' + 'centered'
  }, 'Built with \u2665 by ', _react2.default.createElement('a', { target: '_blank', href: 'http://www.petrnikolas.com/', className: 'jsx-40380392'
  }, 'Petr Nikolas'))));
};

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------


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
  }
};