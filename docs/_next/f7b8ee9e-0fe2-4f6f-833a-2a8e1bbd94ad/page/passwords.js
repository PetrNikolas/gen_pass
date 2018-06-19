module.exports = __NEXT_REGISTER_PAGE('/passwords', function() {
  var e = webpackJsonp(
    [4],
    {
      394: function(e, t, r) {
        e.exports = r(395)
      },
      395: function(e, t, r) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: true })
        r.d(t, 'default', function() {
          return E
        })
        var a = r(73)
        var n = r.n(a)
        var o = r(1)
        var s = r.n(o)
        var l = r(56)
        var c = r.n(l)
        var u = r(57)
        var i = r.n(u)
        var m = r(58)
        function d(e) {
          d =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function e(t) {
                  return typeof t
                }
              : function e(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }
          return d(e)
        }
        function f(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        }
        function p(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r]
            a.enumerable = a.enumerable || false
            a.configurable = true
            'value' in a && (a.writable = true)
            Object.defineProperty(e, a.key, a)
          }
        }
        function b(e, t, r) {
          t && p(e.prototype, t)
          r && p(e, r)
          return e
        }
        function y(e, t) {
          if (t && ('object' === d(t) || 'function' === typeof t)) return t
          return x(e)
        }
        function v(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: false,
              writable: true,
              configurable: true
            }
          })
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t))
        }
        function x(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e
        }
        var E = (function(e) {
          v(t, e)
          function t(e) {
            var r
            f(this, t)
            r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            Object.defineProperty(x(r), 'updateInputValue', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t) {
                document.getElementById('error').style.display = 'none'
                r.setState({ inputValue: t.target.value })
              }
            })
            Object.defineProperty(x(r), 'generatorHandleClick', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t) {
                document.getElementById('error').style.display = 'none'
                var a = ''
                var n =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                ;(t && 'undefined' !== typeof t) || (t = 20)
                if (t < 100001)
                  try {
                    for (var o = 0; o < t; o++)
                      a += n.charAt(Math.floor(Math.random() * n.length))
                    r.setState({ generatedPassword: a })
                  } catch (e) {
                    console.log(e)
                  }
                else document.getElementById('error').style.display = 'block'
              }
            })
            r.state = { inputValue: 20, generatedPassword: '' }
            return r
          }
          b(t, [
            {
              key: 'render',
              value: function e() {
                var t = this
                return s.a.createElement(
                  m['default'],
                  null,
                  s.a.createElement(n.a, {
                    styleId: '2330160520',
                    css: [
                      '.card.jsx-2330160520{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-2330160520{width:100%;}h2.jsx-2330160520{font-size:1rem;}}'
                    ]
                  }),
                  s.a.createElement(
                    'div',
                    { className: 'jsx-2330160520 container' },
                    s.a.createElement(
                      'div',
                      { className: 'jsx-2330160520 columns' },
                      s.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-2330160520 column col-xs-12 text-center'
                        },
                        s.a.createElement(
                          'h2',
                          {
                            className: 'jsx-2330160520 h3 text-center subtitle'
                          },
                          'PASSWORD'
                        ),
                        s.a.createElement(
                          'h1',
                          {
                            className: 'jsx-2330160520 h1 rwd_title text-center'
                          },
                          'Set lenght of your password and generate your password now!'
                        ),
                        s.a.createElement(
                          'div',
                          { className: 'jsx-2330160520 card' },
                          s.a.createElement(
                            'div',
                            { className: 'jsx-2330160520 card-body' },
                            s.a.createElement(
                              'div',
                              { className: 'jsx-2330160520 form-group' },
                              s.a.createElement('input', {
                                value: this.state.inputValue,
                                onChange: function e(r) {
                                  return t.updateInputValue(r)
                                },
                                type: 'number',
                                min: '1',
                                max: '100000',
                                id: 'count',
                                className: 'jsx-2330160520 form-input'
                              })
                            ),
                            s.a.createElement(
                              'button',
                              {
                                onClick: function e() {
                                  t.generatorHandleClick(t.state.inputValue)
                                },
                                id: 'start_button',
                                className: 'jsx-2330160520 btn btn-primary'
                              },
                              'Generate now!'
                            ),
                            s.a.createElement(
                              'span',
                              { id: 'error', className: 'jsx-2330160520' },
                              'Max value is 100000'
                            )
                          ),
                          s.a.createElement(
                            'div',
                            { className: 'jsx-2330160520 card-footer' },
                            s.a.createElement(
                              'div',
                              { className: 'jsx-2330160520 form-group' },
                              s.a.createElement(
                                'label',
                                { className: 'jsx-2330160520 form-label' },
                                'Your password is:'
                              ),
                              s.a.createElement('textarea', {
                                value: this.state.generatedPassword,
                                id: 'result',
                                rows: '7',
                                readOnly: true,
                                className: 'jsx-2330160520 form-input'
                              })
                            )
                          )
                        ),
                        s.a.createElement(
                          'div',
                          { className: 'jsx-2330160520 buttons-section' },
                          s.a.createElement(
                            i.a,
                            { href: '/qr-code' },
                            s.a.createElement(
                              'a',
                              { className: 'jsx-2330160520 btn btn-secondary' },
                              'Generate qr code'
                            )
                          ),
                          s.a.createElement(
                            i.a,
                            { href: '/usernames' },
                            s.a.createElement(
                              'a',
                              { className: 'jsx-2330160520 btn btn-secondary' },
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
        })(s.a.Component)
      }
    },
    [394]
  )
  return { page: e.default }
})
