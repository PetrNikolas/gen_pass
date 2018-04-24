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
        var m = a(41)
        var d = (function() {
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
        function y(e, t) {
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
        var v = (function(e) {
          y(t, e)
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
          d(t, [
            {
              key: 'render',
              value: function e() {
                var t = this
                return o.a.createElement(
                  m['default'],
                  null,
                  o.a.createElement(n.a, {
                    styleId: '2330160520',
                    css: [
                      '.card.jsx-2330160520{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-2330160520{width:100%;}h2.jsx-2330160520{font-size:1rem;}}'
                    ]
                  }),
                  o.a.createElement(
                    'div',
                    { className: 'jsx-2330160520' + ' ' + 'container' },
                    o.a.createElement(
                      'div',
                      { className: 'jsx-2330160520' + ' ' + 'columns' },
                      o.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2330160520' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        o.a.createElement(
                          'h2',
                          {
                            className:
                              'jsx-2330160520' + ' ' + 'h3 text-center subtitle'
                          },
                          'PASSWORD'
                        ),
                        o.a.createElement(
                          'h1',
                          {
                            className:
                              'jsx-2330160520' +
                              ' ' +
                              'h1 rwd_title text-center'
                          },
                          'Set lenght of your password and generate your password now!'
                        ),
                        o.a.createElement(
                          'div',
                          { className: 'jsx-2330160520' + ' ' + 'card' },
                          o.a.createElement(
                            'div',
                            { className: 'jsx-2330160520' + ' ' + 'card-body' },
                            o.a.createElement(
                              'div',
                              {
                                className: 'jsx-2330160520' + ' ' + 'form-group'
                              },
                              o.a.createElement('input', {
                                value: this.state.inputValue,
                                onChange: function e(a) {
                                  return t.updateInputValue(a)
                                },
                                type: 'number',
                                min: '1',
                                max: '100000',
                                id: 'count',
                                className: 'jsx-2330160520' + ' ' + 'form-input'
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
                                  'jsx-2330160520' + ' ' + 'btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            o.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-2330160520' },
                              'Max value is 100000'
                            )
                          ),
                          o.a.createElement(
                            'div',
                            {
                              className: 'jsx-2330160520' + ' ' + 'card-footer'
                            },
                            o.a.createElement(
                              'div',
                              {
                                className: 'jsx-2330160520' + ' ' + 'form-group'
                              },
                              o.a.createElement(
                                'label',
                                {
                                  className:
                                    'jsx-2330160520' + ' ' + 'form-label'
                                },
                                'Your password is:'
                              ),
                              o.a.createElement('textarea', {
                                value: this.state.generatedPassword,
                                id: 'result',
                                rows: '7',
                                readOnly: true,
                                className: 'jsx-2330160520' + ' ' + 'form-input'
                              })
                            )
                          )
                        ),
                        o.a.createElement(
                          'div',
                          {
                            className:
                              'jsx-2330160520' + ' ' + 'buttons-section'
                          },
                          o.a.createElement(
                            i.a,
                            { href: '/qr-code' },
                            o.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-2330160520' + ' ' + 'btn btn-secondary'
                              },
                              'Generate qr code'
                            )
                          ),
                          o.a.createElement(
                            i.a,
                            { href: '/usernames' },
                            o.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-2330160520' + ' ' + 'btn btn-secondary'
                              },
                              'Generate username'
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
        t['default'] = v
      }
    },
    [265]
  )
  return { page: e.default }
})
