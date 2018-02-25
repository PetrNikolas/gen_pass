module.exports = __NEXT_REGISTER_PAGE('/passwords', function() {
  var e = webpackJsonp(
    [5],
    {
      265: function(e, t, a) {
        e.exports = a(266)
      },
      266: function(e, t, a) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: true })
        var r = a(55)
        var n = a.n(r)
        var s = a(1)
        var o = a.n(s)
        var l = a(39)
        var c = a.n(l)
        var u = a(40)
        var i = a.n(u)
        var d = a(41)
        var m = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a]
              r.enumerable = r.enumerable || false
              r.configurable = true
              if ('value' in r) r.writable = true
              Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, a, r) {
            if (a) e(t.prototype, a)
            if (r) e(t, r)
            return t
          }
        })()
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t && ('object' === typeof t || 'function' === typeof t) ? t : e
        }
        function v(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            )
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          })
          if (t)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t)
        }
        var y = (function(e) {
          v(t, e)
          function t(e) {
            f(this, t)
            var a = p(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            )
            a.updateInputValue = function(e) {
              document.getElementById('error').style.display = 'none'
              a.setState({ inputValue: e.target.value })
            }
            a.generatorHandleClick = function(e) {
              document.getElementById('error').style.display = 'none'
              var t = ''
              var r =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
              if (!e || 'undefined' === typeof e) e = 20
              if (e < 100001)
                try {
                  for (var n = 0; n < e; n++)
                    t += r.charAt(Math.floor(Math.random() * r.length))
                  a.setState({ generatedPassword: t })
                } catch (e) {
                  console.log(e)
                }
              else document.getElementById('error').style.display = 'block'
            }
            a.state = { inputValue: 20, generatedPassword: '' }
            return a
          }
          m(t, [
            {
              key: 'render',
              value: function e() {
                var t = this
                return o.a.createElement(
                  d['default'],
                  null,
                  o.a.createElement(n.a, {
                    styleId: '3042443449',
                    css: [
                      '.card.jsx-3042443449{width:100%;max-width:45rem;margin:0.7rem auto 0;background-color:#fff;border:none;padding:2rem 1.5rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-3042443449{width:100%;}h2.jsx-3042443449{font-size:1rem;}}'
                    ]
                  }),
                  o.a.createElement(
                    'div',
                    { className: 'jsx-3042443449' + ' ' + 'container' },
                    o.a.createElement(
                      'div',
                      { className: 'jsx-3042443449' + ' ' + 'columns' },
                      o.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-3042443449' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        o.a.createElement(
                          'div',
                          {
                            id: 'main_card',
                            className: 'jsx-3042443449' + ' ' + 'card'
                          },
                          o.a.createElement(
                            'div',
                            {
                              className: 'jsx-3042443449' + ' ' + 'card-header'
                            },
                            o.a.createElement(
                              'h2',
                              {
                                className:
                                  'jsx-3042443449' + ' ' + 'card-title h3'
                              },
                              'Passwords generator'
                            ),
                            o.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-3042443449' +
                                  ' ' +
                                  'card-subtitle text-gray'
                              },
                              'So, click on the button and generate your password now!'
                            )
                          ),
                          o.a.createElement(
                            'div',
                            { className: 'jsx-3042443449' + ' ' + 'card-body' },
                            o.a.createElement(
                              'div',
                              {
                                className: 'jsx-3042443449' + ' ' + 'form-group'
                              },
                              o.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-3042443449' + ' ' + 'form-label'
                                },
                                'Set lenght of your password (default is 20)'
                              ),
                              o.a.createElement('input', {
                                value: this.state.inputValue,
                                onChange: function e(a) {
                                  return t.updateInputValue(a)
                                },
                                type: 'number',
                                min: '1',
                                max: '100000',
                                id: 'count',
                                className: 'jsx-3042443449' + ' ' + 'form-input'
                              })
                            ),
                            o.a.createElement(
                              'button',
                              {
                                onClick: function e() {
                                  t.generatorHandleClick(t.state.inputValue)
                                },
                                id: 'start_button',
                                className:
                                  'jsx-3042443449' + ' ' + 'btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            o.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-3042443449' },
                              'Max value is 100000'
                            )
                          ),
                          o.a.createElement(
                            'div',
                            {
                              className: 'jsx-3042443449' + ' ' + 'card-footer'
                            },
                            o.a.createElement(
                              'div',
                              {
                                className: 'jsx-3042443449' + ' ' + 'form-group'
                              },
                              o.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-3042443449' + ' ' + 'form-label'
                                },
                                'Your password is:'
                              ),
                              o.a.createElement('textarea', {
                                value: this.state.generatedPassword,
                                id: 'result',
                                rows: '7',
                                readOnly: true,
                                className: 'jsx-3042443449' + ' ' + 'form-input'
                              })
                            ),
                            o.a.createElement(
                              'div',
                              {
                                className:
                                  'jsx-3042443449' +
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
          return t
        })(o.a.Component)
        t['default'] = y
      }
    },
    [265]
  )
  return { page: e.default }
})
