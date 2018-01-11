'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _style = require('styled-jsx/style.js')

var _style2 = _interopRequireDefault(_style)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _head = require('next/dist/lib/head.js')

var _head2 = _interopRequireDefault(_head)

var _link = require('next/dist/lib/link.js')

var _link2 = _interopRequireDefault(_link)

var _reactFela = require('react-fela')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------
var Container = (0, _reactFela.createComponent)(function() {
  return {
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5
  }
})

// ------------------------------------------------------------------------------
// Export layout
// ------------------------------------------------------------------------------

exports.default = function(_ref) {
  var children = _ref.children
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1876301701' + ' ' + 'root'
    },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', {
        charSet: 'utf-8',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement(
        'title',
        {
          className: 'jsx-1876301701'
        },
        'GENPASS'
      ),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/ico',
        href: '/static/img/favicon.ico',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'author',
        content: 'Petr Nikolas',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'description',
        content: 'Random generators',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        property: 'og:title',
        content: 'GENPASS',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        property: 'og:type',
        content: 'website',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        property: 'og:url',
        content: 'http://generator-random.com/',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        property: 'og:description',
        content: 'Random generators',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:card',
        content: 'summary',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:title',
        content: 'GENPASS',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:description',
        content: 'Random generators',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:site',
        content: '@PetrNikolas',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:creator',
        content: '@PetrNikolas',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'HandheldFriendly',
        content: 'True',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('meta', {
        name: 'MobileOptimized',
        content: '320',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        className: 'jsx-1876301701'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        className: 'jsx-1876301701'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1876301701',
      css: [
        '.root.jsx-1876301701{padding:30px 50px 50px 50px;font:14px "Lucida Grande",Helvetica,Arial,sans-serif;}',
        '.footer.jsx-1876301701{color:#acb3c2;padding:.5rem .5rem 1.5rem .5rem;}',
        '.footer.jsx-1876301701 a.jsx-1876301701{color:#667189;}',
        '.footer.jsx-1876301701 .hearth_icon.jsx-1876301701{color:#f8114d;}',
        '.centered.jsx-1876301701{text-align:center;}',
        '.navbar.jsx-1876301701 a.jsx-1876301701{color:#50596c !important;}',
        '.navbar.jsx-1876301701 a.jsx-1876301701:hover,.navbar.jsx-1876301701 a.jsx-1876301701:focus,.navbar.jsx-1876301701 a.jsx-1876301701:active{border:none !important;border-bottom:2px solid #f8114d !important;}',
        '.logo.jsx-1876301701 a.jsx-1876301701{color:#1c1a27 !important;font-size:35px;}',
        '.logo.jsx-1876301701 a.jsx-1876301701:hover{border-bottom:none !important;text-decoration:none;}',
        '@media only screen and (max-width:1100px){.root.jsx-1876301701{padding:3px;}}'
      ]
    }),
    _react2.default.createElement(
      'header',
      {
        className: 'jsx-1876301701' + ' ' + 'navbar animated fadeInDown'
      },
      _react2.default.createElement(
        'section',
        {
          className: 'jsx-1876301701' + ' ' + 'navbar-section logo'
        },
        _react2.default.createElement(
          _link2.default,
          { href: '/' },
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-1876301701'
            },
            'GENPASS'
          )
        )
      ),
      _react2.default.createElement(
        'section',
        {
          className: 'jsx-1876301701' + ' ' + 'navbar-section'
        },
        _react2.default.createElement(
          _link2.default,
          { href: '/passwords' },
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-1876301701' + ' ' + 'btn btn-link'
            },
            'Passwords'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          { href: '/usernames' },
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-1876301701' + ' ' + 'btn btn-link'
            },
            'Usernames'
          )
        )
      )
    ),
    _react2.default.createElement(
      'main',
      {
        className: 'jsx-1876301701'
      },
      children
    ),
    _react2.default.createElement(
      'footer',
      {
        className: 'jsx-1876301701' + ' ' + 'footer animated fadeInDown'
      },
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-1876301701' + ' ' + 'centered'
        },
        _react2.default.createElement(
          'a',
          {
            href: 'mailto:petr.nikolas@icloud.com?subject=Hello',
            className: 'jsx-1876301701'
          },
          _react2.default.createElement('i', {
            className: 'jsx-1876301701' + ' ' + 'icon icon-mail'
          }),
          ' Send me a feedback.'
        )
      ),
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-1876301701' + ' ' + 'centered'
        },
        'Built with ',
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-1876301701' + ' ' + 'hearth_icon'
          },
          '\u2665'
        ),
        ' by ',
        _react2.default.createElement(
          'a',
          {
            target: '_blank',
            href: 'http://www.petrnikolas.com/',
            className: 'jsx-1876301701'
          },
          'Petr Nikolas'
        )
      )
    )
  )
}
