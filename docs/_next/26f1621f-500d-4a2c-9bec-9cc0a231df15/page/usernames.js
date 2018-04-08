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
        var r = t(55)
        var n = t.n(r)
        var s = t(1)
        var l = t.n(s)
        var o = t(39)
        var c = t.n(o)
        var u = t(40)
        var m = t.n(u)
        var i = t(41)
        var d = (function() {
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
        function v(e, a) {
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
          v(a, e)
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
              var r = ''
              var n = ''
              var s = ''
              if (
                e &&
                'undefined' !== typeof e &&
                a &&
                'undefined' !== typeof a
              ) {
                var l = e + a
                var o = '1234567890'
                var c = l.length
                try {
                  for (var u = 0; u < 5; u++)
                    r += l.charAt(Math.floor(Math.random() * l.length))
                  for (var m = 0; m < 3; m++)
                    n += o.charAt(Math.floor(7 * Math.random()))
                  s = r + n
                  t.setState({ generatedUsername: s })
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
                  l.a.createElement(n.a, {
                    styleId: '673063405',
                    css: [
                      '.card.jsx-673063405{width:100%;max-width:45rem;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1.5rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-673063405{width:100%;}h2.jsx-673063405{font-size:1rem;}}'
                    ]
                  }),
                  l.a.createElement(
                    'div',
                    { className: 'jsx-673063405' + ' ' + 'container' },
                    l.a.createElement(
                      'div',
                      { className: 'jsx-673063405' + ' ' + 'columns' },
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-673063405' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        l.a.createElement(
                          'div',
                          {
                            id: 'main_card',
                            className: 'jsx-673063405' + ' ' + 'card'
                          },
                          l.a.createElement(
                            'div',
                            {
                              className: 'jsx-673063405' + ' ' + 'card-header'
                            },
                            l.a.createElement(
                              'h2',
                              {
                                className:
                                  'jsx-673063405' + ' ' + 'card-title h3'
                              },
                              'Usernames generator'
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-673063405' +
                                  ' ' +
                                  'card-subtitle text-gray'
                              },
                              'So, click on the button and generate your username from your name and surname now!'
                            ),
                            l.a.createElement('br', {
                              className: 'jsx-673063405'
                            }),
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-673063405' +
                                  ' ' +
                                  'card-subtitle text-gray'
                              },
                              '* second name is not required'
                            )
                          ),
                          l.a.createElement(
                            'div',
                            { className: 'jsx-673063405' + ' ' + 'card-body' },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-673063405' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'div',
                                {
                                  className: 'jsx-673063405' + ' ' + 'columns'
                                },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-673063405' +
                                      ' ' +
                                      'column col-lg-4 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-673063405' + ' ' + 'form-label'
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
                                      'jsx-673063405' + ' ' + 'form-input'
                                  })
                                ),
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-673063405' +
                                      ' ' +
                                      'column col-lg-4 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className:
                                        'jsx-673063405' + ' ' + 'form-label'
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
                                      'jsx-673063405' + ' ' + 'form-input'
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
                                  'jsx-673063405' + ' ' + 'btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            l.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-673063405' },
                              'Name and surname are required'
                            )
                          ),
                          l.a.createElement(
                            'div',
                            {
                              className: 'jsx-673063405' + ' ' + 'card-footer'
                            },
                            l.a.createElement(
                              'div',
                              {
                                className: 'jsx-673063405' + ' ' + 'form-group'
                              },
                              l.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-673063405' + ' ' + 'form-label'
                                },
                                'Your username is:'
                              ),
                              l.a.createElement('textarea', {
                                value: this.state.generatedUsername,
                                id: 'result',
                                rows: '3',
                                readOnly: true,
                                className: 'jsx-673063405' + ' ' + 'form-input'
                              })
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'jsx-673063405' },
                              'Generated from:',
                              this.state.nameValue &&
                                l.a.createElement(
                                  'span',
                                  {
                                    id: 'name_chip',
                                    className: 'jsx-673063405' + ' ' + 'chip'
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
                                    className: 'jsx-673063405' + ' ' + 'chip'
                                  },
                                  ' ',
                                  this.state.surnameValue,
                                  ' '
                                )
                            ),
                            l.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-673063405' +
                                  ' ' +
                                  'card-subtitle text-gray'
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
          ])
          return a
        })(l.a.Component)
        a['default'] = x
      }
    },
    [306]
  )
  return { page: e.default }
})
