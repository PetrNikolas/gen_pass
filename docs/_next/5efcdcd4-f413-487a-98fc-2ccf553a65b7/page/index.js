window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [7],
    {
      234: function(e, a, t) {
        e.exports = t(235)
      },
      235: function(e, a, t) {
        'use strict'
        function s(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(a, '__esModule', { value: !0 })
        var l = t(11),
          r = s(l),
          n = t(2),
          c = s(n),
          d = t(3),
          m = s(d),
          o = t(12),
          u = s(o),
          i = t(13),
          f = s(i),
          x = t(84),
          j = s(x),
          h = t(0),
          E = s(h),
          N = t(29),
          v = (s(N), t(40)),
          w = s(v),
          b = t(86),
          p = s(b),
          g = (function(e) {
            function a(e) {
              return (
                (0, c.default)(this, a),
                (0, u.default)(
                  this,
                  (a.__proto__ || (0, r.default)(a)).call(this, e)
                )
              )
            }
            return (
              (0, f.default)(a, e),
              (0, m.default)(a, [
                {
                  key: 'render',
                  value: function() {
                    return E.default.createElement(
                      p.default,
                      null,
                      E.default.createElement(j.default, {
                        styleId: '1168513960',
                        css: [
                          '.card.jsx-1168513960{width:auto;background-color:#fff;border:none;padding:2rem 1.5rem;cursor:pointer;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;margin:0 0.5rem;}',
                          '.card.jsx-1168513960:hover{box-shadow:0 3px 20px rgba(0,0,0,0.1);-moz-transform:scale(1.1);-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}',
                          '@media only screen and (max-width:1100px){.card.jsx-1168513960{width:100%;}h2.jsx-1168513960{font-size:1rem;}}'
                        ]
                      }),
                      E.default.createElement(
                        'div',
                        { className: 'jsx-1168513960 container' },
                        E.default.createElement(
                          'h2',
                          {
                            className: 'jsx-1168513960 h1 rwd_title text-center'
                          },
                          'Random generators'
                        ),
                        E.default.createElement(
                          'div',
                          { className: 'jsx-1168513960 columns' },
                          E.default.createElement(
                            'div',
                            {
                              className:
                                'jsx-1168513960 column col-xs-12 col-4 text-center'
                            },
                            E.default.createElement(
                              w.default,
                              { href: '/passwords' },
                              E.default.createElement(
                                'div',
                                { className: 'jsx-1168513960 card' },
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-header' },
                                  E.default.createElement(
                                    'h2',
                                    {
                                      className: 'jsx-1168513960 card-title h3'
                                    },
                                    'Passwords generator'
                                  )
                                ),
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-body' },
                                  E.default.createElement('img', {
                                    src: 'static/img/pen.svg',
                                    width: '105',
                                    alt: 'Passwords',
                                    className: 'jsx-1168513960'
                                  })
                                ),
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-footer' },
                                  E.default.createElement(
                                    'a',
                                    {
                                      className:
                                        'jsx-1168513960 btn btn-primary'
                                    },
                                    'Generate now'
                                  )
                                )
                              )
                            )
                          ),
                          E.default.createElement(
                            'div',
                            {
                              className:
                                'jsx-1168513960 column col-xs-12 col-4 text-center'
                            },
                            E.default.createElement(
                              w.default,
                              { href: '/usernames' },
                              E.default.createElement(
                                'div',
                                { className: 'jsx-1168513960 card' },
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-header' },
                                  E.default.createElement(
                                    'h2',
                                    {
                                      className: 'jsx-1168513960 card-title h3'
                                    },
                                    'Usernames generator'
                                  )
                                ),
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-body' },
                                  E.default.createElement('img', {
                                    src: 'static/img/user.svg',
                                    width: '105',
                                    height: '121',
                                    alt: 'Usernames',
                                    className: 'jsx-1168513960'
                                  })
                                ),
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-1168513960 card-footer' },
                                  E.default.createElement(
                                    'a',
                                    {
                                      className:
                                        'jsx-1168513960 btn btn-primary'
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
              ]),
              a
            )
          })(E.default.Component)
        a.default = g
      }
    },
    [234]
  ))
  return { page: comp.default }
})
