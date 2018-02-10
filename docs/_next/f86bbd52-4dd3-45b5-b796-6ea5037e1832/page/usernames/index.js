window.__NEXT_REGISTER_PAGE('/usernames', function() {
  var comp = (module.exports = webpackJsonp(
    [4],
    {
      360: function(e, a, t) {
        e.exports = t(361)
      },
      361: function(e, a, t) {
        'use strict'
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        Object.defineProperty(a, '__esModule', { value: !0 })
        var n = t(11),
          s = r(n),
          o = t(2),
          l = r(o),
          d = t(3),
          i = r(d),
          u = t(12),
          c = r(u),
          m = t(13),
          f = r(m),
          b = t(84),
          x = r(b),
          p = t(0),
          h = r(p),
          w = t(29),
          N = (r(w), t(40)),
          g = (r(N), t(86)),
          j = r(g),
          E = (function(e) {
            function a(e) {
              ;(0, l.default)(this, a)
              var t = (0, c.default)(
                this,
                (a.__proto__ || (0, s.default)(a)).call(this, e)
              )
              return (
                (t.updateNameValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    t.setState({ nameValue: e.target.value })
                }),
                (t.updateSecondNameValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    t.setState({ secondNameValue: e.target.value })
                }),
                (t.updateSurnameValue = function(e) {
                  ;(document.getElementById('error').style.display = 'none'),
                    t.setState({ surnameValue: e.target.value })
                }),
                (t.generatorHandleClick = function(e, a, r) {
                  document.getElementById('error').style.display = 'none'
                  var n = '',
                    s = '',
                    o = ''
                  if (
                    ((a && void 0 !== a) || (a = ''),
                    e && void 0 !== e && r && void 0 !== r)
                  ) {
                    var l = e + a + r
                    l.length
                    try {
                      for (var d = 0; d < 5; d++)
                        n += l.charAt(Math.floor(Math.random() * l.length))
                      for (var i = 0; i < 3; i++)
                        s += '1234567890'.charAt(Math.floor(7 * Math.random()))
                      ;(o = n + s), t.setState({ generatedUsername: o })
                    } catch (e) {
                      console.log(e)
                    }
                  } else
                    document.getElementById('error').style.display = 'block'
                }),
                (t.state = {
                  nameValue: '',
                  secondNameValue: '',
                  surnameValue: '',
                  generatedUsername: ''
                }),
                t
              )
            }
            return (
              (0, f.default)(a, e),
              (0, i.default)(a, [
                {
                  key: 'render',
                  value: function() {
                    var e = this
                    return h.default.createElement(
                      j.default,
                      null,
                      h.default.createElement(x.default, {
                        styleId: '229388632',
                        css: [
                          '.card.jsx-229388632{width:100%;max-width:45rem;margin:.5rem auto 0;background-color:#fff;border:none;padding:1.5rem;}',
                          '.btn-primary.jsx-229388632,.btn-primary.jsx-229388632:focus,.btn-primary.jsx-229388632:active{background:#f8114d !important;border-color:#f8114d !important;}',
                          'input.jsx-229388632{max-width:200px;margin:0 auto;height:2.5rem;padding:0 1rem;border:0;border-radius:3px;background-color:#f4f4fb;line-height:1.5;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}',
                          'label.jsx-229388632{color:#868f96 !important;}',
                          'textarea.jsx-229388632{resize:none;height:7.25rem;padding:0 1.125rem;padding-top:1.6rem;padding-bottom:1rem;border:0;border-radius:3px;background-color:#f4f4fb !important;border-radius:3px;line-height:1.5;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}',
                          '.form-input.jsx-229388632:focus{border-color:#868f96;box-shadow:none;}',
                          '#error.jsx-229388632{color:red;display:none;}',
                          '@media only screen and (max-width:1100px){.card.jsx-229388632{width:100%;}h1.jsx-229388632{font-size:1rem;}}'
                        ]
                      }),
                      h.default.createElement(
                        'div',
                        { className: 'jsx-229388632 container' },
                        h.default.createElement(
                          'div',
                          { className: 'jsx-229388632 columns' },
                          h.default.createElement(
                            'div',
                            {
                              className:
                                'jsx-229388632 column col-xs-12 text-center'
                            },
                            h.default.createElement(
                              'div',
                              {
                                id: 'main_card',
                                className: 'jsx-229388632 card'
                              },
                              h.default.createElement(
                                'div',
                                { className: 'jsx-229388632 card-header' },
                                h.default.createElement(
                                  'h1',
                                  { className: 'jsx-229388632 card-title h1' },
                                  'Usernames generator'
                                ),
                                h.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-229388632 card-subtitle text-gray'
                                  },
                                  'So, click on the button and generate your username from your name and surname now!'
                                ),
                                h.default.createElement('br', {
                                  className: 'jsx-229388632'
                                }),
                                h.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-229388632 card-subtitle text-gray'
                                  },
                                  '* second name is not required'
                                )
                              ),
                              h.default.createElement(
                                'div',
                                { className: 'jsx-229388632 card-body' },
                                h.default.createElement(
                                  'div',
                                  { className: 'jsx-229388632 form-group' },
                                  h.default.createElement(
                                    'div',
                                    { className: 'jsx-229388632 columns' },
                                    h.default.createElement(
                                      'div',
                                      {
                                        className:
                                          'jsx-229388632 column col-lg-4 col-xs-12'
                                      },
                                      h.default.createElement(
                                        'label',
                                        {
                                          for: 'name',
                                          className: 'jsx-229388632 form-label'
                                        },
                                        'Your name'
                                      ),
                                      h.default.createElement('input', {
                                        value: this.state.nameValue,
                                        onChange: function(a) {
                                          return e.updateNameValue(a)
                                        },
                                        type: 'text',
                                        id: 'name',
                                        className: 'jsx-229388632 form-input'
                                      })
                                    ),
                                    h.default.createElement(
                                      'div',
                                      {
                                        className:
                                          'jsx-229388632 column col-lg-4 col-xs-12'
                                      },
                                      h.default.createElement(
                                        'label',
                                        {
                                          for: 'secondName',
                                          className: 'jsx-229388632 form-label'
                                        },
                                        'Your second name'
                                      ),
                                      h.default.createElement('input', {
                                        value: this.state.secondNameValue,
                                        onChange: function(a) {
                                          return e.updateSecondNameValue(a)
                                        },
                                        type: 'text',
                                        id: 'secondName',
                                        className: 'jsx-229388632 form-input'
                                      })
                                    ),
                                    h.default.createElement(
                                      'div',
                                      {
                                        className:
                                          'jsx-229388632 column col-lg-4 col-xs-12'
                                      },
                                      h.default.createElement(
                                        'label',
                                        {
                                          for: 'surname',
                                          className: 'jsx-229388632 form-label'
                                        },
                                        'Your surname'
                                      ),
                                      h.default.createElement('input', {
                                        value: this.state.surnameValue,
                                        onChange: function(a) {
                                          return e.updateSurnameValue(a)
                                        },
                                        type: 'text',
                                        id: 'surname',
                                        className: 'jsx-229388632 form-input'
                                      })
                                    )
                                  )
                                ),
                                h.default.createElement(
                                  'button',
                                  {
                                    onClick: function() {
                                      e.generatorHandleClick(
                                        e.state.nameValue,
                                        e.state.secondNameValue,
                                        e.state.surnameValue
                                      )
                                    },
                                    id: 'start_button',
                                    className: 'jsx-229388632 btn btn-primary'
                                  },
                                  'Generate now!'
                                ),
                                h.default.createElement(
                                  'span',
                                  { id: 'error', className: 'jsx-229388632' },
                                  'Name and surname are required'
                                )
                              ),
                              h.default.createElement(
                                'div',
                                { className: 'jsx-229388632 card-footer' },
                                h.default.createElement(
                                  'div',
                                  { className: 'jsx-229388632 form-group' },
                                  h.default.createElement(
                                    'label',
                                    {
                                      for: 'result',
                                      className: 'jsx-229388632 form-label'
                                    },
                                    'Your username is:'
                                  ),
                                  h.default.createElement('textarea', {
                                    value: this.state.generatedUsername,
                                    id: 'result',
                                    rows: '3',
                                    readOnly: !0,
                                    className: 'jsx-229388632 form-input'
                                  })
                                ),
                                h.default.createElement(
                                  'div',
                                  { className: 'jsx-229388632' },
                                  'Generated from:',
                                  this.state.nameValue &&
                                    h.default.createElement(
                                      'span',
                                      {
                                        id: 'name_chip',
                                        className: 'jsx-229388632 chip'
                                      },
                                      ' ',
                                      this.state.nameValue,
                                      ' '
                                    ),
                                  this.state.secondNameValue &&
                                    h.default.createElement(
                                      'span',
                                      {
                                        id: 'second_name_chip',
                                        className: 'jsx-229388632 chip'
                                      },
                                      ' ',
                                      this.state.secondNameValue,
                                      ' '
                                    ),
                                  this.state.surnameValue &&
                                    h.default.createElement(
                                      'span',
                                      {
                                        id: 'surname_chip',
                                        className: 'jsx-229388632 chip'
                                      },
                                      ' ',
                                      this.state.surnameValue,
                                      ' '
                                    )
                                ),
                                h.default.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-229388632 card-subtitle text-gray'
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
          })(h.default.Component)
        a.default = E
      }
    },
    [360]
  ))
  return { page: comp.default }
})
