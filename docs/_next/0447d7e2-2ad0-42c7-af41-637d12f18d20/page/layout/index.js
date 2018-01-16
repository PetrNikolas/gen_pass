window.__NEXT_REGISTER_PAGE('/layout', function() {
  var comp = (module.exports = webpackJsonp(
    [6],
    {
      356: function(e, t, a) {
        e.exports = a(357)
      },
      357: function(e, t, a) {
        'use strict'
        function n(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var l = a(0),
          c = n(l),
          r = a(29),
          s = n(r),
          m = a(40),
          o = n(m),
          i = a(132)
        ;(0, i.createComponent)(function() {
          return {
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5
          }
        })
        t.default = function(e) {
          var t = e.children
          return c.default.createElement(
            'div',
            { className: 'root' },
            c.default.createElement(
              s.default,
              null,
              c.default.createElement('meta', { charSet: 'utf-8' }),
              c.default.createElement('meta', {
                httpEquiv: 'X-UA-Compatible',
                content: 'IE=edge'
              }),
              c.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              }),
              c.default.createElement('title', null, 'GENPASS'),
              c.default.createElement('link', {
                rel: 'shortcut icon',
                type: 'image/ico',
                href: '/static/img/favicon.ico'
              }),
              c.default.createElement('meta', {
                name: 'author',
                content: 'Petr Nikolas'
              }),
              c.default.createElement('meta', {
                name: 'description',
                content: 'Random generators'
              }),
              c.default.createElement('meta', {
                property: 'og:title',
                content: 'GENPASS'
              }),
              c.default.createElement('meta', {
                property: 'og:type',
                content: 'website'
              }),
              c.default.createElement('meta', {
                property: 'og:url',
                content: 'http://generator-random.com/'
              }),
              c.default.createElement('meta', {
                property: 'og:description',
                content: 'Random generators'
              }),
              c.default.createElement('meta', {
                name: 'twitter:card',
                content: 'summary'
              }),
              c.default.createElement('meta', {
                name: 'twitter:title',
                content: 'GENPASS'
              }),
              c.default.createElement('meta', {
                name: 'twitter:description',
                content: 'Random generators'
              }),
              c.default.createElement('meta', {
                name: 'twitter:site',
                content: '@PetrNikolas'
              }),
              c.default.createElement('meta', {
                name: 'twitter:creator',
                content: '@PetrNikolas'
              }),
              c.default.createElement('meta', {
                name: 'HandheldFriendly',
                content: 'True'
              }),
              c.default.createElement('meta', {
                name: 'MobileOptimized',
                content: '320'
              }),
              c.default.createElement('link', {
                rel: 'stylesheet',
                href:
                  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
              }),
              c.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre.min.css'
              }),
              c.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css'
              }),
              c.default.createElement('link', {
                rel: 'stylesheet',
                href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css'
              }),
              c.default.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/main.css'
              }),
              c.default.createElement('script', {
                dangerouslySetInnerHTML: {
                  __html:
                    '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
                }
              })
            ),
            c.default.createElement(
              'header',
              { className: 'navbar animated fadeInDown' },
              c.default.createElement(
                'section',
                { className: 'navbar-section logo' },
                c.default.createElement(
                  o.default,
                  { href: '/' },
                  c.default.createElement('a', null, 'GENPASS')
                )
              ),
              c.default.createElement(
                'section',
                { className: 'navbar-section' },
                c.default.createElement(
                  o.default,
                  { href: '/passwords' },
                  c.default.createElement(
                    'a',
                    { className: 'btn btn-link' },
                    'Passwords'
                  )
                ),
                c.default.createElement(
                  o.default,
                  { href: '/usernames' },
                  c.default.createElement(
                    'a',
                    { className: 'btn btn-link' },
                    'Usernames'
                  )
                )
              )
            ),
            c.default.createElement('main', null, t),
            c.default.createElement(
              'footer',
              { className: 'footer animated fadeInDown' },
              c.default.createElement(
                'p',
                { className: 'centered' },
                c.default.createElement(
                  'a',
                  { href: 'mailto:petr.nikolas@icloud.com?subject=Hello' },
                  c.default.createElement('i', { className: 'icon icon-mail' }),
                  ' Send me a feedback.'
                )
              ),
              c.default.createElement(
                'p',
                { className: 'centered' },
                'Built with ',
                c.default.createElement(
                  'span',
                  { className: 'hearth_icon' },
                  '♥'
                ),
                ' by',
                ' ',
                c.default.createElement(
                  'a',
                  { target: '_blank', href: 'http://www.petrnikolas.com/' },
                  'Petr Nikolas'
                )
              )
            )
          )
        }
      }
    },
    [356]
  ))
  return { page: comp.default }
})
