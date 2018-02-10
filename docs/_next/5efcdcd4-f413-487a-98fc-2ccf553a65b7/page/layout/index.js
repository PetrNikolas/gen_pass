window.__NEXT_REGISTER_PAGE('/layout', function() {
  var comp = (module.exports = webpackJsonp(
    [6],
    {
      356: function(e, t, a) {
        e.exports = a(357)
      },
      357: function(e, t, a) {
        'use strict'
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var n = a(0),
          r = l(n),
          c = a(29),
          s = l(c),
          m = a(40),
          d = l(m),
          o = a(132)
        ;(0, o.createComponent)(function() {
          return {
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5
          }
        })
        t.default = function(e) {
          var t = e.children
          return r.default.createElement(
            'div',
            { className: 'root' },
            r.default.createElement(
              s.default,
              null,
              r.default.createElement('meta', { charSet: 'utf-8' }),
              r.default.createElement('meta', {
                httpEquiv: 'X-UA-Compatible',
                content: 'IE=edge'
              }),
              r.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              }),
              r.default.createElement('title', null, 'GENPASS'),
              r.default.createElement('link', {
                rel: 'shortcut icon',
                type: 'image/ico',
                href: '/static/img/favicon.ico'
              }),
              r.default.createElement('meta', {
                name: 'author',
                content: 'Petr Nikolas'
              }),
              r.default.createElement('meta', {
                name: 'description',
                content: 'Random generators'
              }),
              r.default.createElement('meta', {
                property: 'og:title',
                content: 'GENPASS'
              }),
              r.default.createElement('meta', {
                property: 'og:type',
                content: 'website'
              }),
              r.default.createElement('meta', {
                property: 'og:url',
                content: 'http://generator-random.com/'
              }),
              r.default.createElement('meta', {
                property: 'og:description',
                content: 'Random generators'
              }),
              r.default.createElement('meta', {
                name: 'twitter:card',
                content: 'summary'
              }),
              r.default.createElement('meta', {
                name: 'twitter:title',
                content: 'GENPASS'
              }),
              r.default.createElement('meta', {
                name: 'twitter:description',
                content: 'Random generators'
              }),
              r.default.createElement('meta', {
                name: 'twitter:site',
                content: '@PetrNikolas'
              }),
              r.default.createElement('meta', {
                name: 'twitter:creator',
                content: '@PetrNikolas'
              }),
              r.default.createElement('meta', {
                name: 'HandheldFriendly',
                content: 'True'
              }),
              r.default.createElement('meta', {
                name: 'MobileOptimized',
                content: '320'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/reset.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href:
                  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre.min.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/main.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/components.css'
              }),
              r.default.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/responsive.css'
              }),
              r.default.createElement('script', {
                dangerouslySetInnerHTML: {
                  __html:
                    '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
                }
              })
            ),
            r.default.createElement(
              'header',
              { className: 'navbar animated fadeIn' },
              r.default.createElement(
                'section',
                { className: 'navbar-section logo' },
                r.default.createElement(
                  d.default,
                  { href: '/' },
                  r.default.createElement('h1', { className: 'h1' }, 'GENPASS')
                )
              ),
              r.default.createElement(
                'section',
                { className: 'navbar-section' },
                r.default.createElement(
                  d.default,
                  { href: '/passwords' },
                  r.default.createElement(
                    'a',
                    { className: 'btn btn-link' },
                    'Passwords'
                  )
                ),
                r.default.createElement(
                  d.default,
                  { href: '/usernames' },
                  r.default.createElement(
                    'a',
                    { className: 'btn btn-link' },
                    'Usernames'
                  )
                )
              )
            ),
            r.default.createElement(
              'header',
              { className: 'desktop_header animated fadeIn' },
              r.default.createElement(
                'div',
                { className: 'logo' },
                r.default.createElement(
                  d.default,
                  { href: '/' },
                  r.default.createElement(
                    'h1',
                    { className: 'card-title h1' },
                    'GENPASS'
                  )
                ),
                r.default.createElement('span', null, 'Random generators')
              ),
              r.default.createElement(
                'nav',
                null,
                r.default.createElement(
                  'ul',
                  null,
                  r.default.createElement(
                    'li',
                    null,
                    r.default.createElement(
                      d.default,
                      { href: '/passwords' },
                      r.default.createElement(
                        'a',
                        { className: 'selected' },
                        'Passwords'
                      )
                    )
                  ),
                  r.default.createElement(
                    'li',
                    null,
                    r.default.createElement(
                      d.default,
                      { href: '/usernames' },
                      r.default.createElement(
                        'a',
                        { className: 'selected' },
                        'Usernames'
                      )
                    )
                  )
                )
              ),
              r.default.createElement(
                'div',
                { className: 'footer clearfix' },
                r.default.createElement(
                  'ul',
                  { className: 'social clearfix' },
                  r.default.createElement(
                    'li',
                    null,
                    r.default.createElement('a', {
                      href: 'https://www.facebook.com/peta.prokop',
                      target: '_blank',
                      className: 'fb',
                      'data-title': 'Facebook'
                    })
                  ),
                  r.default.createElement(
                    'li',
                    null,
                    r.default.createElement('a', {
                      href: 'https://plus.google.com/111138628395528220719',
                      target: '_blank',
                      className: 'google',
                      'data-title': 'Google +'
                    })
                  ),
                  r.default.createElement(
                    'li',
                    null,
                    r.default.createElement('a', {
                      href: 'https://twitter.com/PetrNikolas',
                      target: '_blank',
                      className: 'twitter',
                      'data-title': 'Twitter'
                    })
                  )
                ),
                r.default.createElement(
                  'div',
                  { className: 'rights' },
                  r.default.createElement(
                    'p',
                    null,
                    r.default.createElement(
                      'a',
                      { href: 'mailto:petr.nikolas@icloud.com?subject=Hello' },
                      'Send me a feedback.'
                    )
                  ),
                  r.default.createElement(
                    'p',
                    null,
                    'Built with ',
                    r.default.createElement(
                      'span',
                      { className: 'hearth_icon' },
                      '♥'
                    ),
                    ' by',
                    ' ',
                    r.default.createElement(
                      'a',
                      { target: '_blank', href: 'http://www.petrnikolas.com/' },
                      'Petr Nikolas.'
                    )
                  )
                )
              )
            ),
            r.default.createElement(
              'main',
              { className: 'main animated fadeIn' },
              t
            )
          )
        }
      }
    },
    [356]
  ))
  return { page: comp.default }
})
