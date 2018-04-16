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
        function b(e, a) {
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
        var x = (function(e) {
          b(a, e)
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
                    styleId: '2900894080',
                    css: [
                      '.columns.jsx-2900894080{min-height:100vh;}',
                      '.card.jsx-2900894080{width:auto;background:transparent;border:none;padding:10vh 1.5rem;cursor:pointer;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;margin:0 0.5rem;}',
                      '.card.jsx-2900894080 h2.jsx-2900894080{color:#fff;}',
                      '.card-header.jsx-2900894080{padding-bottom:7vh;}',
                      ".qr-bg.jsx-2900894080{background:url('static/img/bg-2.jpg') #1c1a27 no-repeat;background-size:cover;}",
                      ".usernames-bg.jsx-2900894080{background:url('static/img/bg-1.jpg') #1c1a27 no-repeat;background-size:cover;}",
                      ".passwords-bg.jsx-2900894080{background:url('static/img/bg-3.jpg') #1c1a27 no-repeat;background-size:cover;}",
                      '@media only screen and (max-width:1100px){.card.jsx-2900894080{width:100%;}h2.jsx-2900894080{font-size:1rem;}}'
                    ]
                  }),
                  c.a.createElement(
                    'div',
                    { className: 'jsx-2900894080' + ' ' + 'container' },
                    c.a.createElement(
                      'h2',
                      {
                        className:
                          'jsx-2900894080' + ' ' + 'h1 rwd_title text-center'
                      },
                      'Random generators'
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'jsx-2900894080' + ' ' + 'columns' },
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2900894080' +
                            ' ' +
                            'column col-xs-12 col-6 text-center qr-bg'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/qr-code' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-2900894080' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'card-title h3'
                                },
                                'QR codes generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'btn btn-primary'
                                },
                                'Generate now'
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2900894080' +
                            ' ' +
                            'column col-xs-12 col-6 text-center passwords-bg'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/passwords' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-2900894080' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'card-title h3'
                                },
                                'Passwords generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'btn btn-primary'
                                },
                                'Generate now'
                              )
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2900894080' +
                            ' ' +
                            'column col-xs-12 col-12 text-center usernames-bg'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/usernames' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-2900894080' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'card-title h3'
                                },
                                'Usernames generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-2900894080' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-2900894080' + ' ' + 'btn btn-primary'
                                },
                                'Generate now'
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
        a['default'] = x
      }
    },
    [228]
  )
  return { page: e.default }
})
