module.exports = __NEXT_REGISTER_PAGE('/', function() {
  var e = webpackJsonp(
    [6],
    {
      228: function(e, a, t) {
        e.exports = t(229)
      },
      229: function(e, a, t) {
        'use strict'
        Object.defineProperty(a, '__esModule', { value: true })
        var r = t(55)
        var n = t.n(r)
        var s = t(1)
        var c = t.n(s)
        var o = t(39)
        var l = t.n(o)
        var i = t(40)
        var m = t.n(i)
        var d = t(41)
        var u = (function() {
          function e(e, a) {
            for (var t = 0; t < a.length; t++) {
              var r = a[t]
              r.enumerable = r.enumerable || false
              r.configurable = true
              if ('value' in r) r.writable = true
              Object.defineProperty(e, r.key, r)
            }
          }
          return function(a, t, r) {
            if (t) e(a.prototype, t)
            if (r) e(a, r)
            return a
          }
        })()
        function f(e, a) {
          if (!(e instanceof a))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(e, a) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return a && ('object' === typeof a || 'function' === typeof a) ? a : e
        }
        function x(e, a) {
          if ('function' !== typeof a && null !== a)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof a
            )
          e.prototype = Object.create(a && a.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          })
          if (a)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, a)
              : (e.__proto__ = a)
        }
        var b = (function(e) {
          x(a, e)
          function a(e) {
            f(this, a)
            return p(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, e)
            )
          }
          u(a, [
            {
              key: 'render',
              value: function e() {
                return c.a.createElement(
                  d['default'],
                  null,
                  c.a.createElement(n.a, {
                    styleId: '227669760',
                    css: [
                      '.columns.jsx-227669760{padding-top:58px;}',
                      '.card.jsx-227669760{width:auto;background:white;border:none;padding:90px 1rem;cursor:pointer;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;margin:1rem 0.5rem;}',
                      '.card.jsx-227669760 .h3.jsx-227669760{color:rgb(54,2,254);font-size:44px;font-weight:900;}',
                      ".qr-code-bg.jsx-227669760{background:url('static/img/qr.png') #fff no-repeat;background-size:cover;}",
                      ".password-bg.jsx-227669760{background:url('static/img/password.png') #fff no-repeat;background-size:cover;}",
                      ".username-bg.jsx-227669760{background:url('static/img/username.png') #fff no-repeat;background-size:cover;}",
                      '@media only screen and (max-width:1100px){.card.jsx-227669760{width:100%;}h2.jsx-227669760{font-size:1rem;}}'
                    ]
                  }),
                  c.a.createElement(
                    'div',
                    { className: 'jsx-227669760' + ' ' + 'container' },
                    c.a.createElement(
                      'h2',
                      {
                        className:
                          'jsx-227669760' + ' ' + 'h3 text-center subtitle'
                      },
                      'WELCOME TO GENPASS'
                    ),
                    c.a.createElement(
                      'h1',
                      {
                        className:
                          'jsx-227669760' + ' ' + 'h1 rwd_title text-center'
                      },
                      'Generator that doesn’t save your personal data'
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'jsx-227669760' + ' ' + 'columns' },
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-227669760' +
                            ' ' +
                            'column col-xs-12 col-md-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/qr-code' },
                          c.a.createElement(
                            'div',
                            {
                              className:
                                'jsx-227669760' + ' ' + 'card qr-code-bg'
                            },
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h3',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'card-title h3'
                                },
                                'QR code'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'btn btn-primary'
                                },
                                'Generate'
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-227669760' +
                            ' ' +
                            'column col-xs-12 col-md-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/passwords' },
                          c.a.createElement(
                            'div',
                            {
                              className:
                                'jsx-227669760' + ' ' + 'card password-bg'
                            },
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h3',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'card-title h3'
                                },
                                'Password'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'btn btn-primary'
                                },
                                'Generate'
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-227669760' +
                            ' ' +
                            'column col-xs-12 col-md-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/usernames' },
                          c.a.createElement(
                            'div',
                            {
                              className:
                                'jsx-227669760' + ' ' + 'card username-bg'
                            },
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h3',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'card-title h3'
                                },
                                'Username'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-227669760' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-227669760' + ' ' + 'btn btn-primary'
                                },
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
          return a
        })(c.a.Component)
        a['default'] = b
      }
    },
    [228]
  )
  return { page: e.default }
})
