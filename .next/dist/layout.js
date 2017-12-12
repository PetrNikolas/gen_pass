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

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    // ------------------------------------------------------------------------------
    // Export layout
    // ------------------------------------------------------------------------------
  } };
exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', {
    className: 'jsx-1860790629' + ' ' + 'root'
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charSet: 'utf-8', className: 'jsx-1860790629'
  }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', className: 'jsx-1860790629'
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1860790629'
  }), _react2.default.createElement('title', {
    className: 'jsx-1860790629'
  }, 'GENPASS'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', className: 'jsx-1860790629'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre.min.css', className: 'jsx-1860790629'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css', className: 'jsx-1860790629'
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css', className: 'jsx-1860790629'
  })), _react2.default.createElement(_style2.default, {
    styleId: '1860790629',
    css: ['.root.jsx-1860790629{padding:50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;background:#ece9e6;background:-webkit-linear-gradient(to right,#ece9e6,#ffffff);background:linear-gradient(to right,#ece9e6,#ffffff);}', '.footer.jsx-1860790629{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}', '.footer.jsx-1860790629 a.jsx-1860790629{color:#667189;}', '.footer.jsx-1860790629 .hearth_icon.jsx-1860790629{color:#f8114d;}', '.centered.jsx-1860790629{text-align:center;}', '.navbar.jsx-1860790629 a.jsx-1860790629{color:#50596c !important;}', '.navbar.jsx-1860790629 a.jsx-1860790629:hover,.navbar.jsx-1860790629 a.jsx-1860790629:focus,.navbar.jsx-1860790629 a.jsx-1860790629:active{border:none !important;border-bottom:2px solid #f8114d !important;}', '.logo.jsx-1860790629 a.jsx-1860790629{color:#1c1a27 !important;font-size:35px;}', '.logo.jsx-1860790629 a.jsx-1860790629:hover{border-bottom:none !important;text-decoration:none;}', '@media only screen and (max-width:1100px){.root.jsx-1860790629{padding:3px;}}']
  }), _react2.default.createElement('header', {
    className: 'jsx-1860790629' + ' ' + 'navbar animated fadeInDown'
  }, _react2.default.createElement('section', {
    className: 'jsx-1860790629' + ' ' + 'navbar-section logo'
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-1860790629'
  }, 'GENPASS'))), _react2.default.createElement('section', {
    className: 'jsx-1860790629' + ' ' + 'navbar-section'
  }, _react2.default.createElement(_link2.default, { href: '/username-generator' }, _react2.default.createElement('a', {
    className: 'jsx-1860790629' + ' ' + 'btn btn-link'
  }, 'Username generator')))), _react2.default.createElement('main', {
    className: 'jsx-1860790629'
  }, children), _react2.default.createElement('footer', {
    className: 'jsx-1860790629' + ' ' + 'footer animated fadeInDown'
  }, _react2.default.createElement('p', {
    className: 'jsx-1860790629' + ' ' + 'centered'
  }, _react2.default.createElement('a', { href: 'mailto:petr.nikolas@icloud.com?subject=Hello', className: 'jsx-1860790629'
  }, 'Send me a feedback.')), _react2.default.createElement('p', {
    className: 'jsx-1860790629' + ' ' + 'centered'
  }, 'Built with ', _react2.default.createElement('span', {
    className: 'jsx-1860790629' + ' ' + 'hearth_icon'
  }, '\u2665'), ' by ', _react2.default.createElement('a', { target: '_blank', href: 'http://www.petrnikolas.com/', className: 'jsx-1860790629'
  }, 'Petr Nikolas'))));
};