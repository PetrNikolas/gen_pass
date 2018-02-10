'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

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
    { className: 'root' },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge'
      }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }),
      _react2.default.createElement('title', null, 'GENPASS'),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/ico',
        href: '/static/img/favicon.ico'
      }),
      _react2.default.createElement('meta', {
        name: 'author',
        content: 'Petr Nikolas'
      }),
      _react2.default.createElement('meta', {
        name: 'description',
        content: 'Random generators'
      }),
      _react2.default.createElement('meta', {
        property: 'og:title',
        content: 'GENPASS'
      }),
      _react2.default.createElement('meta', {
        property: 'og:type',
        content: 'website'
      }),
      _react2.default.createElement('meta', {
        property: 'og:url',
        content: 'http://generator-random.com/'
      }),
      _react2.default.createElement('meta', {
        property: 'og:description',
        content: 'Random generators'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:card',
        content: 'summary'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:title',
        content: 'GENPASS'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:description',
        content: 'Random generators'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:site',
        content: '@PetrNikolas'
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:creator',
        content: '@PetrNikolas'
      }),
      _react2.default.createElement('meta', {
        name: 'HandheldFriendly',
        content: 'True'
      }),
      _react2.default.createElement('meta', {
        name: 'MobileOptimized',
        content: '320'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/reset.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/main.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/components.css'
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/responsive.css'
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html:
            '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
        }
      })
    ),
    _react2.default.createElement(
      'header',
      { className: 'navbar animated fadeIn' },
      _react2.default.createElement(
        'section',
        { className: 'navbar-section logo' },
        _react2.default.createElement(
          _link2.default,
          { href: '/' },
          _react2.default.createElement('h1', { className: 'h1' }, 'GENPASS')
        )
      ),
      _react2.default.createElement(
        'section',
        { className: 'navbar-section' },
        _react2.default.createElement(
          _link2.default,
          { href: '/passwords' },
          _react2.default.createElement(
            'a',
            { className: 'btn btn-link' },
            'Passwords'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          { href: '/usernames' },
          _react2.default.createElement(
            'a',
            { className: 'btn btn-link' },
            'Usernames'
          )
        )
      )
    ),
    _react2.default.createElement(
      'header',
      { className: 'desktop_header animated fadeIn' },
      _react2.default.createElement(
        'div',
        { className: 'logo' },
        _react2.default.createElement(
          _link2.default,
          { href: '/' },
          _react2.default.createElement(
            'h1',
            { className: 'card-title h1' },
            'GENPASS'
          )
        ),
        _react2.default.createElement('span', null, 'Random generators')
      ),
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _link2.default,
              { href: '/passwords' },
              _react2.default.createElement(
                'a',
                { className: 'selected' },
                'Passwords'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _link2.default,
              { href: '/usernames' },
              _react2.default.createElement(
                'a',
                { className: 'selected' },
                'Usernames'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'footer clearfix' },
        _react2.default.createElement(
          'ul',
          { className: 'social clearfix' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('a', {
              href: 'https://www.facebook.com/peta.prokop',
              target: '_blank',
              className: 'fb',
              'data-title': 'Facebook'
            })
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('a', {
              href: 'https://plus.google.com/111138628395528220719',
              target: '_blank',
              className: 'google',
              'data-title': 'Google +'
            })
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('a', {
              href: 'https://twitter.com/PetrNikolas',
              target: '_blank',
              className: 'twitter',
              'data-title': 'Twitter'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rights' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'mailto:petr.nikolas@icloud.com?subject=Hello' },
              'Send me a feedback.'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Built with ',
            _react2.default.createElement(
              'span',
              { className: 'hearth_icon' },
              '\u2665'
            ),
            ' by',
            ' ',
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'http://www.petrnikolas.com/' },
              'Petr Nikolas.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'main',
      { className: 'main animated fadeIn' },
      children
    )
  )
}
