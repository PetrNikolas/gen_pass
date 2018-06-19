module.exports = __NEXT_REGISTER_PAGE('/', function() {
  var e = webpackJsonp(
    [5],
    {
      300: function(e, t, a) {
        e.exports = a(301)
      },
      301: function(e, t, a) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: true })
        a.d(t, 'default', function() {
          return E
        })
        var r = a(73)
        var n = a.n(r)
        var c = a(1)
        var s = a.n(c)
        var o = a(56)
        var l = a.n(o)
        var i = a(57)
        var m = a.n(i)
        var u = a(58)
        function d(e) {
          d =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function e(t) {
                  return typeof t
                }
              : function e(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }
          return d(e)
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a]
            r.enumerable = r.enumerable || false
            r.configurable = true
            'value' in r && (r.writable = true)
            Object.defineProperty(e, r.key, r)
          }
        }
        function b(e, t, a) {
          t && p(e.prototype, t)
          a && p(e, a)
          return e
        }
        function x(e, t) {
          if (t && ('object' === d(t) || 'function' === typeof t)) return t
          return j(e)
        }
        function j(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e
        }
        function v(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          })
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t))
        }
        var E = (function(e) {
          v(t, e)
          function t(e) {
            f(this, t)
            return x(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
          }
          b(t, [
            {
              key: 'render',
              value: function e() {
                return s.a.createElement(
                  u['default'],
                  null,
                  s.a.createElement(n.a, {
                    styleId: '127738663',
                    css: [
                      '.columns.jsx-127738663{padding-top:58px;}',
                      '.card.jsx-127738663{width:auto;background:white;border:none;padding:90px 1rem;cursor:pointer;margin:1rem 0.5rem;-webkit-transition:0.7s;-webkit-transition:0.7s;transition:0.7s;}',
                      '.card.jsx-127738663:hover{margin-top:3px;}',
                      '.card.jsx-127738663 .h3.jsx-127738663{color:rgb(54,2,254);font-size:44px;font-weight:900;}',
                      ".qr-code-bg.jsx-127738663{background:url('static/img/qr.png') #fff no-repeat;background-size:cover;}",
                      ".password-bg.jsx-127738663{background:url('static/img/password.png') #fff no-repeat;background-size:cover;}",
                      ".username-bg.jsx-127738663{background:url('static/img/username.png') #fff no-repeat;background-size:cover;}",
                      '@media only screen and (max-width:1100px){.card.jsx-127738663{width:100%;}h2.jsx-127738663{font-size:1rem;}}'
                    ]
                  }),
                  s.a.createElement(
                    'div',
                    { className: 'jsx-127738663 container' },
                    s.a.createElement(
                      'h2',
                      { className: 'jsx-127738663 h3 text-center subtitle' },
                      'WELCOME TO GENPASS'
                    ),
                    s.a.createElement(
                      'h1',
                      { className: 'jsx-127738663 h1 rwd_title text-center' },
                      'Generator that doesn’t save your personal data'
                    ),
                    s.a.createElement(
                      'div',
                      { className: 'jsx-127738663 columns' },
                      s.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-127738663 column col-xs-12 col-md-12 col-4 text-center'
                        },
                        s.a.createElement(
                          m.a,
                          { href: '/qr-code' },
                          s.a.createElement(
                            'div',
                            { className: 'jsx-127738663 card qr-code-bg' },
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-header' },
                              s.a.createElement(
                                'h3',
                                { className: 'jsx-127738663 card-title h3' },
                                'QR code'
                              )
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-footer' },
                              s.a.createElement(
                                'a',
                                { className: 'jsx-127738663 btn btn-primary' },
                                'Generate'
                              )
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-127738663 column col-xs-12 col-md-12 col-4 text-center'
                        },
                        s.a.createElement(
                          m.a,
                          { href: '/passwords' },
                          s.a.createElement(
                            'div',
                            { className: 'jsx-127738663 card password-bg' },
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-header' },
                              s.a.createElement(
                                'h3',
                                { className: 'jsx-127738663 card-title h3' },
                                'Password'
                              )
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-footer' },
                              s.a.createElement(
                                'a',
                                { className: 'jsx-127738663 btn btn-primary' },
                                'Generate'
                              )
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-127738663 column col-xs-12 col-md-12 col-4 text-center'
                        },
                        s.a.createElement(
                          m.a,
                          { href: '/usernames' },
                          s.a.createElement(
                            'div',
                            { className: 'jsx-127738663 card username-bg' },
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-header' },
                              s.a.createElement(
                                'h3',
                                { className: 'jsx-127738663 card-title h3' },
                                'Username'
                              )
                            ),
                            s.a.createElement(
                              'div',
                              { className: 'jsx-127738663 card-footer' },
                              s.a.createElement(
                                'a',
                                { className: 'jsx-127738663 btn btn-primary' },
                                'Generate'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              }
            }
          ])
          return t
        })(s.a.Component)
      }
    },
    [300]
  )
  return { page: e.default }
})
