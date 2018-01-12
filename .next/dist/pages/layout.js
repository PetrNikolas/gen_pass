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
      className: 'jsx-915937761' + ' ' + 'root'
    },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', {
        charSet: 'utf-8',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement(
        'title',
        {
          className: 'jsx-915937761'
        },
        'GENPASS'
      ),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/ico',
        href: '/static/img/favicon.ico',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'author',
        content: 'Petr Nikolas',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'description',
        content: 'Random generators',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        property: 'og:title',
        content: 'GENPASS',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        property: 'og:type',
        content: 'website',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        property: 'og:url',
        content: 'http://generator-random.com/',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        property: 'og:description',
        content: 'Random generators',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:card',
        content: 'summary',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:title',
        content: 'GENPASS',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:description',
        content: 'Random generators',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:site',
        content: '@PetrNikolas',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:creator',
        content: '@PetrNikolas',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'HandheldFriendly',
        content: 'True',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('meta', {
        name: 'MobileOptimized',
        content: '320',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        className: 'jsx-915937761'
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html:
            '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
        },
        className: 'jsx-915937761'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '915937761',
      css: [
        ".root.jsx-915937761{padding:30px 50px 50px 50px;font:14px 'Lucida Grande',Helvetica,Arial,sans-serif;}",
        '.footer.jsx-915937761{color:#acb3c2;padding:0.5rem 0.5rem 1.5rem 0.5rem;}',
        '.footer.jsx-915937761 a.jsx-915937761{color:#667189;}',
        '.footer.jsx-915937761 .hearth_icon.jsx-915937761{color:#f8114d;}',
        '.centered.jsx-915937761{text-align:center;}',
        '.navbar.jsx-915937761 a.jsx-915937761{color:#50596c !important;}',
        '.navbar.jsx-915937761 a.jsx-915937761:hover,.navbar.jsx-915937761 a.jsx-915937761:focus,.navbar.jsx-915937761 a.jsx-915937761:active{border:none !important;border-bottom:2px solid #f8114d !important;}',
        '.logo.jsx-915937761 a.jsx-915937761{color:#1c1a27 !important;font-size:35px;}',
        '.logo.jsx-915937761 a.jsx-915937761:hover{border-bottom:none !important;text-decoration:none;}',
        '@media only screen and (max-width:1100px){.root.jsx-915937761{padding:3px;}}'
      ]
    }),
    _react2.default.createElement(
      'header',
      {
        className: 'jsx-915937761' + ' ' + 'navbar animated fadeInDown'
      },
      _react2.default.createElement(
        'section',
        {
          className: 'jsx-915937761' + ' ' + 'navbar-section logo'
        },
        _react2.default.createElement(
          _link2.default,
          { href: '/' },
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-915937761'
            },
            'GENPASS'
          )
        )
      ),
      _react2.default.createElement(
        'section',
        {
          className: 'jsx-915937761' + ' ' + 'navbar-section'
        },
        _react2.default.createElement(
          _link2.default,
          { href: '/passwords' },
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-915937761' + ' ' + 'btn btn-link'
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
              className: 'jsx-915937761' + ' ' + 'btn btn-link'
            },
            'Usernames'
          )
        )
      )
    ),
    _react2.default.createElement(
      'main',
      {
        className: 'jsx-915937761'
      },
      children
    ),
    _react2.default.createElement(
      'footer',
      {
        className: 'jsx-915937761' + ' ' + 'footer animated fadeInDown'
      },
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-915937761' + ' ' + 'centered'
        },
        _react2.default.createElement(
          'a',
          {
            href: 'mailto:petr.nikolas@icloud.com?subject=Hello',
            className: 'jsx-915937761'
          },
          _react2.default.createElement('i', {
            className: 'jsx-915937761' + ' ' + 'icon icon-mail'
          }),
          ' Send me a feedback.'
        )
      ),
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-915937761' + ' ' + 'centered'
        },
        'Built with ',
        _react2.default.createElement(
          'span',
          {
            className: 'jsx-915937761' + ' ' + 'hearth_icon'
          },
          '\u2665'
        ),
        ' by',
        ' ',
        _react2.default.createElement(
          'a',
          {
            target: '_blank',
            href: 'http://www.petrnikolas.com/',
            className: 'jsx-915937761'
          },
          'Petr Nikolas'
        )
      )
    )
  )
}
