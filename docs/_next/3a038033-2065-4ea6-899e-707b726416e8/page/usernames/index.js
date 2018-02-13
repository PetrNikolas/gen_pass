window.__NEXT_REGISTER_PAGE('/usernames', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      430: function(e, a, t) {
        e.exports = t(431)
      },
      431: function(e, a, t) {
        'use strict'
        function l(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(a, '__esModule', { value: !0 })
        var n = t(9),
          r = l(n),
          s = t(2),
          u = l(s),
          m = t(3),
          d = l(m),
          c = t(10),
          o = l(c),
          i = t(11),
          f = l(i),
          x = t(61),
          h = l(x),
          p = t(0),
          E = l(p),
          j = t(26),
          v = (l(j), t(33)),
          N = (l(v), t(62)),
          g = l(N),
          y = (function(e) {
            function a(e) {
              ;(0, u.default)(this, a)
              var t = (0, o.default)(
                this,
                (a.__proto__ || (0, r.default)(a)).call(this, e)
              )
              return (
                (t.updateNameValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    t.setState({ nameValue: e.target.value })
                }),
                (t.updateSurnameValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    t.setState({ surnameValue: e.target.value })
                }),
                (t.generatorHandleClick = function(e, a) {
                  document.getElementById('error').style.display = 'none'
                  var l = '',
                    n = '',
                    r = ''
                  if (e && void 0 !== e && a && void 0 !== a) {
                    var s = e + a
                    s.length
                    try {
                      for (var u = 0; u < 5; u++)
                        l += s.charAt(Math.floor(Math.random() * s.length))
                      for (var m = 0; m < 3; m++)
                        n += '1234567890'.charAt(Math.floor(7 * Math.random()))
                      ;(r = l + n), t.setState({ generatedUsername: r })
                    } catch (e) {
                      console.log(e)
                    }
                  } else
                    document.getElementById('error').style.display = 'block'
                }),
                (t.state = {
                  nameValue: '',
                  surnameValue: '',
                  generatedUsername: ''
                }),
                t
              )
            }
            return (
              (0, f.default)(a, e),
              (0, d.default)(a, [
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return E.default.createElement(
                      g.default,
                      null,
                      E.default.createElement(h.default, {
                        styleId: '2831617738',
                        css: [
                          '.card.jsx-2831617738{width:100%;max-width:45rem;margin:0.7rem auto 0;background-color:#fff;border:none;padding:1.5rem;}',
                          '@media only screen and (max-width:1100px){.card.jsx-2831617738{width:100%;}h2.jsx-2831617738{font-size:1rem;}}'
                        ]
                      }),
                      E.default.createElement(
                        'div',
                        { className: 'jsx-2831617738 container' },
                        E.default.createElement(
                          'div',
                          { className: 'jsx-2831617738 columns' },
                          E.default.createElement(
                            'div',
                            {
                              className:
                                'jsx-2831617738 column col-xs-12 text-center'
                            },
                            E.default.createElement(
                              'div',
                              {
                                id: 'main_card',
                                className: 'jsx-2831617738 card'
                              },
                              E.default.createElement(
                                'div',
                                { className: 'jsx-2831617738 card-header' },
                                E.default.createElement(
                                  'h2',
                                  { className: 'jsx-2831617738 card-title h3' },
                                  'Usernames generator'
                                ),
                                E.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-2831617738 card-subtitle text-gray'
                                  },
                                  'So, click on the button and generate your username from your name and surname now!'
                                ),
                                E.default.createElement('br', {
                                  className: 'jsx-2831617738'
                                }),
                                E.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-2831617738 card-subtitle text-gray'
                                  },
                                  '* second name is not required'
                                )
                              ),
                              E.default.createElement(
                                'div',
                                { className: 'jsx-2831617738 card-body' },
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-2831617738 form-group' },
                                  E.default.createElement(
                                    'div',
                                    { className: 'jsx-2831617738 columns' },
                                    E.default.createElement(
                                      'div',
                                      {
                                        className:
                                          'jsx-2831617738 column col-lg-4 col-xs-12'
                                      },
                                      E.default.createElement(
                                        'label',
                                        {
                                          className: 'jsx-2831617738 form-label'
                                        },
                                        'Your name'
                                      ),
                                      E.default.createElement('input', {
                                        value: this.state.nameValue,
                                        onChange: function(a) {
                                          return e.updateNameValue(a)
                                        },
                                        type: 'text',
                                        id: 'name',
                                        className: 'jsx-2831617738 form-input'
                                      })
                                    ),
                                    E.default.createElement(
                                      'div',
                                      {
                                        className:
                                          'jsx-2831617738 column col-lg-4 col-xs-12'
                                      },
                                      E.default.createElement(
                                        'label',
                                        {
                                          className: 'jsx-2831617738 form-label'
                                        },
                                        'Your surname'
                                      ),
                                      E.default.createElement('input', {
                                        value: this.state.surnameValue,
                                        onChange: function(a) {
                                          return e.updateSurnameValue(a)
                                        },
                                        type: 'text',
                                        id: 'surname',
                                        className: 'jsx-2831617738 form-input'
                                      })
                                    )
                                  )
                                ),
                                E.default.createElement(
                                  'button',
                                  {
                                    onClick: function() {
                                      e.generatorHandleClick(
                                        e.state.nameValue,
                                        e.state.surnameValue
                                      )
                                    },
                                    id: 'start_button',
                                    className: 'jsx-2831617738 btn btn-primary'
                                  },
                                  'Generate now!'
                                ),
                                E.default.createElement(
                                  'span',
                                  { id: 'error', className: 'jsx-2831617738' },
                                  'Name and surname are required'
                                )
                              ),
                              E.default.createElement(
                                'div',
                                { className: 'jsx-2831617738 card-footer' },
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-2831617738 form-group' },
                                  E.default.createElement(
                                    'label',
                                    { className: 'jsx-2831617738 form-label' },
                                    'Your username is:'
                                  ),
                                  E.default.createElement('textarea', {
                                    value: this.state.generatedUsername,
                                    id: 'result',
                                    rows: '3',
                                    readOnly: !0,
                                    className: 'jsx-2831617738 form-input'
                                  })
                                ),
                                E.default.createElement(
                                  'div',
                                  { className: 'jsx-2831617738' },
                                  'Generated from:',
                                  this.state.nameValue &&
                                    E.default.createElement(
                                      'span',
                                      {
                                        id: 'name_chip',
                                        className: 'jsx-2831617738 chip'
                                      },
                                      ' ',
                                      this.state.nameValue,
                                      ' '
                                    ),
                                  this.state.surnameValue &&
                                    E.default.createElement(
                                      'span',
                                      {
                                        id: 'surname_chip',
                                        className: 'jsx-2831617738 chip'
                                      },
                                      ' ',
                                      this.state.surnameValue,
                                      ' '
                                    )
                                ),
                                E.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-2831617738 card-subtitle text-gray'
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
              a
            )
          })(E.default.Component)
        a.default = y
      }
    },
    [430]
  ))
  return { page: comp.default }
})
