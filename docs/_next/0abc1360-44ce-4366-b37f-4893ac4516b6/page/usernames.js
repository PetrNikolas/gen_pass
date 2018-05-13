module.exports = __NEXT_REGISTER_PAGE('/usernames', function() {
  var e = webpackJsonp(
    [4],
    {
      306: function(e, a, t) {
        e.exports = t(307)
      },
      307: function(e, a, t) {
        'use strict'
        Object.defineProperty(a, '__esModule', { value: true })
        var n = t(55)
        var r = t.n(n)
        var s = t(1)
        var l = t.n(s)
        var c = t(39)
        var o = t.n(c)
        var u = t(40)
        var m = t.n(u)
        var i = t(41)
        var d = (function() {
          function e(e, a) {
            for (var t = 0; t < a.length; t++) {
              var n = a[t]
              n.enumerable = n.enumerable || false
              n.configurable = true
              if ('value' in n) n.writable = true
              Object.defineProperty(e, n.key, n)
            }
          }
          return function(a, t, n) {
            if (t) e(a.prototype, t)
            if (n) e(a, n)
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
            var t = p(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, e)
            )
            t.updateNumbersIncludedValue = function(e) {
              var a = void 0
              if (true === e.target.value || 'true' === e.target.value)
                a = false
              else a = true
              t.setState({ numbersIncluded: a })
            }
            t.updateNameValue = function(e) {
              document.getElementById('error').style.display = 'none'
              t.setState({ nameValue: e.target.value })
            }
            t.updateSurnameValue = function(e) {
              document.getElementById('error').style.display = 'none'
              t.setState({ surnameValue: e.target.value })
            }
            t.generatorHandleClick = function(e, a) {
              document.getElementById('error').style.display = 'none'
              var n = ''
              var r = ''
              if (
                e &&
                'undefined' !== typeof e &&
                a &&
                'undefined' !== typeof a
              ) {
                var s = '1234567890'
                try {
                  if (t.state.numbersIncluded)
                    for (var l = 0; l < 3; l++)
                      n += s.charAt(Math.floor(7 * Math.random()))
                  r = e.slice(0, 3) + a.slice(0, 5) + n
                  t.setState({ generatedUsername: r })
                } catch (e) {
                  console.log(e)
                }
              } else document.getElementById('error').style.display = 'block'
            }
            t.state = {
              nameValue: '',
              surnameValue: '',
              generatedUsername: '',
              numbersIncluded: false
            }
            return t
          }
          d(a, [
            {
              key: 'render',
              value: function e() {
                var a = this
                return l.a.createElement(
                  i['default'],
                  null,
                  l.a.createElement(r.a, {
                    styleId: '3857553884',
                    css: [
                      '.card.jsx-3857553884{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '#start_button.jsx-3857553884{margin-top:15px;}',
                      '@media only screen and (max-width:1100px){.card.jsx-3857553884{width:100%;}h2.jsx-3857553884{font-size:1rem;}}'
                    ]
                  }),
                  l.a.createElement(
                    'div',
                    { className: 'jsx-3857553884' + ' ' + 'container' },
                    l.a.createElement(
                      'div',
                      { className: 'jsx-3857553884' + ' ' + 'columns' },
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-3857553884' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        l.a.createElement(
                          'h2',
                          {
                            className:
                              'jsx-3857553884' + ' ' + 'h3 text-center subtitle'
                          },
                          'USERNAME'
                        ),
                        l.a.createElement(
                          'h1',
                          {
                            className:
                              'jsx-3857553884' +
                              ' ' +
                              'h1 rwd_title text-center'
                          },
                          'Generate your username from your name and surname now!'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'jsx-3857553884' + ' ' + 'card' },
                          l.a.createElement(
                            'div',
                            { className: 'jsx-3857553884' + ' ' + 'card-body' },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-3857553884' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'jsx-3857553884' + ' ' + 'columns'
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884' +
                                      ' ' +
                                      'column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-3857553884' + ' ' + 'form-label'
                                    },
                                    'Your name'
                                  ),
                                  l.a.createElement('input', {
                                    value: this.state.nameValue,
                                    onChange: function e(t) {
                                      return a.updateNameValue(t)
                                    },
                                    type: 'text',
                                    id: 'name',
                                    className:
                                      'jsx-3857553884' + ' ' + 'form-input'
                                  })
                                ),
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884' +
                                      ' ' +
                                      'column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-3857553884' + ' ' + 'form-label'
                                    },
                                    'Your surname'
                                  ),
                                  l.a.createElement('input', {
                                    value: this.state.surnameValue,
                                    onChange: function e(t) {
                                      return a.updateSurnameValue(t)
                                    },
                                    type: 'text',
                                    id: 'surname',
                                    className:
                                      'jsx-3857553884' + ' ' + 'form-input'
                                  })
                                )
                              ),
                              l.a.createElement(
                                'div',
                                {
                                  className: 'jsx-3857553884' + ' ' + 'columns'
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884' +
                                      ' ' +
                                      'column col-lg-12 col-md-12 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-3857553884' + ' ' + 'form-checkbox'
                                    },
                                    l.a.createElement('input', {
                                      type: 'checkbox',
                                      value: this.state.numbersIncluded,
                                      onChange: function e(t) {
                                        return a.updateNumbersIncludedValue(t)
                                      },
                                      className: 'jsx-3857553884'
                                    }),
                                    l.a.createElement('i', {
                                      className:
                                        'jsx-3857553884' + ' ' + 'form-icon'
                                    }),
                                    ' Included numbers'
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              'button',
                              {
                                onClick: function e() {
                                  a.generatorHandleClick(
                                    a.state.nameValue,
                                    a.state.surnameValue
                                  )
                                },
                                id: 'start_button',
                                className:
                                  'jsx-3857553884' + ' ' + 'btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            l.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-3857553884' },
                              'Name and surname are required'
                            )
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'jsx-3857553884' + ' ' + 'card-footer'
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-3857553884' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-3857553884' + ' ' + 'form-label'
                                },
                                'Your username is:'
                              ),
                              l.a.createElement('textarea', {
                                value: this.state.generatedUsername,
                                id: 'result',
                                rows: '3',
                                readOnly: true,
                                className: 'jsx-3857553884' + ' ' + 'form-input'
                              })
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'jsx-3857553884' },
                              'Generated from:',
                              this.state.nameValue &&
                                l.a.createElement(
                                  'span',
                                  {
                                    id: 'name_chip',
                                    className: 'jsx-3857553884' + ' ' + 'chip'
                                  },
                                  ' ',
                                  this.state.nameValue,
                                  ' '
                                ),
                              this.state.surnameValue &&
                                l.a.createElement(
                                  'span',
                                  {
                                    id: 'surname_chip',
                                    className: 'jsx-3857553884' + ' ' + 'chip'
                                  },
                                  ' ',
                                  this.state.surnameValue,
                                  ' '
                                )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          {
                            className:
                              'jsx-3857553884' + ' ' + 'buttons-section'
                          },
                          l.a.createElement(
                            m.a,
                            { href: '/passwords' },
                            l.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-3857553884' + ' ' + 'btn btn-secondary'
                              },
                              'Generate password'
                            )
                          ),
                          l.a.createElement(
                            m.a,
                            { href: '/qr-code' },
                            l.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-3857553884' + ' ' + 'btn btn-secondary'
                              },
                              'Generate qr code'
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
        })(l.a.Component)
        a['default'] = b
      }
    },
    [306]
  )
  return { page: e.default }
})
