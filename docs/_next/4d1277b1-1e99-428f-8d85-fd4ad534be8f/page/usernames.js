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
        var o = t(39)
        var c = t.n(o)
        var m = t(40)
        var u = t.n(m)
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
        var E = (function(e) {
          x(a, e)
          function a(e) {
            f(this, a)
            var t = p(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, e)
            )
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
                  for (var l = 0; l < 3; l++)
                    n += s.charAt(Math.floor(7 * Math.random()))
                  r = e.slice(0, 3) + a.slice(0, 5) + n
                  t.setState({ generatedUsername: r })
                } catch (e) {
                  console.log(e)
                }
              } else document.getElementById('error').style.display = 'block'
            }
            t.state = { nameValue: '', surnameValue: '', generatedUsername: '' }
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
                    styleId: '2330160520',
                    css: [
                      '.card.jsx-2330160520{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-2330160520{width:100%;}h2.jsx-2330160520{font-size:1rem;}}'
                    ]
                  }),
                  l.a.createElement(
                    'div',
                    { className: 'jsx-2330160520' + ' ' + 'container' },
                    l.a.createElement(
                      'div',
                      { className: 'jsx-2330160520' + ' ' + 'columns' },
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2330160520' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        l.a.createElement(
                          'h2',
                          {
                            className:
                              'jsx-2330160520' + ' ' + 'h3 text-center subtitle'
                          },
                          'USERNAME'
                        ),
                        l.a.createElement(
                          'h1',
                          {
                            className:
                              'jsx-2330160520' +
                              ' ' +
                              'h1 rwd_title text-center'
                          },
                          'Generate your username from your name and surname now!'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'jsx-2330160520' + ' ' + 'card' },
                          l.a.createElement(
                            'div',
                            { className: 'jsx-2330160520' + ' ' + 'card-body' },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-2330160520' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'jsx-2330160520' + ' ' + 'columns'
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-2330160520' +
                                      ' ' +
                                      'column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-2330160520' + ' ' + 'form-label'
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
                                      'jsx-2330160520' + ' ' + 'form-input'
                                  })
                                ),
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-2330160520' +
                                      ' ' +
                                      'column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-2330160520' + ' ' + 'form-label'
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
                                      'jsx-2330160520' + ' ' + 'form-input'
                                  })
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
                                  'jsx-2330160520' + ' ' + 'btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            l.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-2330160520' },
                              'Name and surname are required'
                            )
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'jsx-2330160520' + ' ' + 'card-footer'
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-2330160520' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-2330160520' + ' ' + 'form-label'
                                },
                                'Your username is:'
                              ),
                              l.a.createElement('textarea', {
                                value: this.state.generatedUsername,
                                id: 'result',
                                rows: '3',
                                readOnly: true,
                                className: 'jsx-2330160520' + ' ' + 'form-input'
                              })
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'jsx-2330160520' },
                              'Generated from:',
                              this.state.nameValue &&
                                l.a.createElement(
                                  'span',
                                  {
                                    id: 'name_chip',
                                    className: 'jsx-2330160520' + ' ' + 'chip'
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
                                    className: 'jsx-2330160520' + ' ' + 'chip'
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
                              'jsx-2330160520' + ' ' + 'buttons-section'
                          },
                          l.a.createElement(
                            u.a,
                            { href: '/passwords' },
                            l.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-2330160520' + ' ' + 'btn btn-secondary'
                              },
                              'Generate password'
                            )
                          ),
                          l.a.createElement(
                            u.a,
                            { href: '/qr-code' },
                            l.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-2330160520' + ' ' + 'btn btn-secondary'
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
        a['default'] = E
      }
    },
    [306]
  )
  return { page: e.default }
})
