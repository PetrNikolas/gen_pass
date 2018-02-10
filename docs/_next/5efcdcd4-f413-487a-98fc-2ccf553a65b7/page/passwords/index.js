window.__NEXT_REGISTER_PAGE('/passwords', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      358: function(e, t, a) {
        e.exports = a(359)
      },
      359: function(e, t, a) {
        'use strict'
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var r = a(11),
          s = l(r),
          n = a(2),
          d = l(n),
          u = a(3),
          o = l(u),
          c = a(12),
          m = l(c),
          i = a(13),
          f = l(i),
          x = a(84),
          p = l(x),
          v = a(0),
          y = l(v),
          E = a(29),
          g = (l(E), a(40)),
          h = (l(g), a(86)),
          j = l(h),
          b = (function(e) {
            function t(e) {
              ;(0, d.default)(this, t)
              var a = (0, m.default)(
                this,
                (t.__proto__ || (0, s.default)(t)).call(this, e)
              )
              return (
                (a.updateInputValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    a.setState({ inputValue: e.target.value })
                }),
                (a.generatorHandleClick = function(e) {
                  document.getElementById('error').style.display = 'none'
                  var t = '',
                    l =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                  if (((e && void 0 !== e) || (e = 20), e < 100001))
                    try {
                      for (var r = 0; r < e; r++)
                        t += l.charAt(Math.floor(Math.random() * l.length))
                      a.setState({ generatedPassword: t })
                    } catch (e) {
                      console.log(e)
                    }
                  else document.getElementById('error').style.display = 'block'
                }),
                (a.state = { inputValue: 20, generatedPassword: '' }),
                a
              )
            }
            return (
              (0, f.default)(t, e),
              (0, o.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return y.default.createElement(
                      j.default,
                      null,
                      y.default.createElement(p.default, {
                        styleId: '3042443449',
                        css: [
                          '.card.jsx-3042443449{width:100%;max-width:45rem;margin:0.7rem auto 0;background-color:#fff;border:none;padding:2rem 1.5rem;}',
                          '@media only screen and (max-width:1100px){.card.jsx-3042443449{width:100%;}h2.jsx-3042443449{font-size:1rem;}}'
                        ]
                      }),
                      y.default.createElement(
                        'div',
                        { className: 'jsx-3042443449 container' },
                        y.default.createElement(
                          'div',
                          { className: 'jsx-3042443449 columns' },
                          y.default.createElement(
                            'div',
                            {
                              className:
                                'jsx-3042443449 column col-xs-12 text-center'
                            },
                            y.default.createElement(
                              'div',
                              {
                                id: 'main_card',
                                className: 'jsx-3042443449 card'
                              },
                              y.default.createElement(
                                'div',
                                { className: 'jsx-3042443449 card-header' },
                                y.default.createElement(
                                  'h2',
                                  { className: 'jsx-3042443449 card-title h3' },
                                  'Passwords generator'
                                ),
                                y.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3042443449 card-subtitle text-gray'
                                  },
                                  'So, click on the button and generate your password now!'
                                )
                              ),
                              y.default.createElement(
                                'div',
                                { className: 'jsx-3042443449 card-body' },
                                y.default.createElement(
                                  'div',
                                  { className: 'jsx-3042443449 form-group' },
                                  y.default.createElement(
                                    'label',
                                    {
                                      for: 'count',
                                      className: 'jsx-3042443449 form-label'
                                    },
                                    'Set lenght of your password (default is 20)'
                                  ),
                                  y.default.createElement('input', {
                                    value: this.state.inputValue,
                                    onChange: function(t) {
                                      return e.updateInputValue(t)
                                    },
                                    type: 'number',
                                    min: '1',
                                    max: '100000',
                                    id: 'count',
                                    className: 'jsx-3042443449 form-input'
                                  })
                                ),
                                y.default.createElement(
                                  'button',
                                  {
                                    onClick: function() {
                                      e.generatorHandleClick(e.state.inputValue)
                                    },
                                    id: 'start_button',
                                    className: 'jsx-3042443449 btn btn-primary'
                                  },
                                  'Generate now!'
                                ),
                                y.default.createElement(
                                  'span',
                                  { id: 'error', className: 'jsx-3042443449' },
                                  'Max value is 100000'
                                )
                              ),
                              y.default.createElement(
                                'div',
                                { className: 'jsx-3042443449 card-footer' },
                                y.default.createElement(
                                  'div',
                                  { className: 'jsx-3042443449 form-group' },
                                  y.default.createElement(
                                    'label',
                                    {
                                      for: 'result',
                                      className: 'jsx-3042443449 form-label'
                                    },
                                    'Your password is:'
                                  ),
                                  y.default.createElement('textarea', {
                                    value: this.state.generatedPassword,
                                    id: 'result',
                                    rows: '7',
                                    readOnly: !0,
                                    className: 'jsx-3042443449 form-input'
                                  })
                                ),
                                y.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3042443449 card-subtitle text-gray'
                                  },
                                  'Random, secure, custom, easy and fast.'
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
              t
            )
          })(y.default.Component)
        t.default = b
      }
    },
    [358]
  ))
  return { page: comp.default }
})
