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
        var s = t.n(r)
        var n = t(1)
        var c = t.n(n)
        var l = t(39)
        var o = t.n(l)
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
        function x(e, a) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return a && ('object' === typeof a || 'function' === typeof a) ? a : e
        }
        function p(e, a) {
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
        var v = (function(e) {
          p(a, e)
          function a(e) {
            f(this, a)
            return x(
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
                  c.a.createElement(s.a, {
                    styleId: '1168513960',
                    css: [
                      '.card.jsx-1168513960{width:auto;background-color:#fff;border:none;padding:2rem 1.5rem;cursor:pointer;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;margin:0 0.5rem;}',
                      '.card.jsx-1168513960:hover{box-shadow:0 3px 20px rgba(0,0,0,0.1);-moz-transform:scale(1.1);-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}',
                      '@media only screen and (max-width:1100px){.card.jsx-1168513960{width:100%;}h2.jsx-1168513960{font-size:1rem;}}'
                    ]
                  }),
                  c.a.createElement(
                    'div',
                    { className: 'jsx-1168513960' + ' ' + 'container' },
                    c.a.createElement(
                      'h2',
                      {
                        className:
                          'jsx-1168513960' + ' ' + 'h1 rwd_title text-center'
                      },
                      'Random generators'
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'jsx-1168513960' + ' ' + 'columns' },
                      c.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-1168513960' +
                            ' ' +
                            'column col-xs-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/qr-code' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-1168513960' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'card-title h3'
                                },
                                'QR codes generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-1168513960' + ' ' + 'card-body'
                              },
                              c.a.createElement('img', {
                                src: 'static/img/pen.svg',
                                width: '105',
                                alt: 'Passwords',
                                className: 'jsx-1168513960'
                              })
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'btn btn-primary'
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
                            'jsx-1168513960' +
                            ' ' +
                            'column col-xs-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/passwords' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-1168513960' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'card-title h3'
                                },
                                'Passwords generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-1168513960' + ' ' + 'card-body'
                              },
                              c.a.createElement('img', {
                                src: 'static/img/pen.svg',
                                width: '105',
                                alt: 'Passwords',
                                className: 'jsx-1168513960'
                              })
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'btn btn-primary'
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
                            'jsx-1168513960' +
                            ' ' +
                            'column col-xs-12 col-4 text-center'
                        },
                        c.a.createElement(
                          m.a,
                          { href: '/usernames' },
                          c.a.createElement(
                            'div',
                            { className: 'jsx-1168513960' + ' ' + 'card' },
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-header'
                              },
                              c.a.createElement(
                                'h2',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'card-title h3'
                                },
                                'Usernames generator'
                              )
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className: 'jsx-1168513960' + ' ' + 'card-body'
                              },
                              c.a.createElement('img', {
                                src: 'static/img/user.svg',
                                width: '105',
                                height: '121',
                                alt: 'Usernames',
                                className: 'jsx-1168513960'
                              })
                            ),
                            c.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-1168513960' + ' ' + 'card-footer'
                              },
                              c.a.createElement(
                                'a',
                                {
                                  className:
                                    'jsx-1168513960' + ' ' + 'btn btn-primary'
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
        a['default'] = v
      }
    },
    [228]
  )
  return { page: e.default }
})
