module.exports = __NEXT_REGISTER_PAGE('/usernames', function() {
  var e = webpackJsonp(
    [3],
    {
      435: function(e, t, a) {
        e.exports = a(436)
      },
      436: function(e, t, a) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: true })
        a.d(t, 'default', function() {
          return v
        })
        var r = a(73)
        var n = a.n(r)
        var s = a(1)
        var l = a.n(s)
        var c = a(56)
        var o = a.n(c)
        var u = a(57)
        var m = a.n(u)
        var i = a(58)
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
        function b(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a]
            r.enumerable = r.enumerable || false
            r.configurable = true
            'value' in r && (r.writable = true)
            Object.defineProperty(e, r.key, r)
          }
        }
        function p(e, t, a) {
          t && b(e.prototype, t)
          a && b(e, a)
          return e
        }
        function x(e, t) {
          if (t && ('object' === d(t) || 'function' === typeof t)) return t
          return E(e)
        }
        function y(e, t) {
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
        function E(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e
        }
        var v = (function(e) {
          y(t, e)
          function t(e) {
            var a
            f(this, t)
            a = x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            Object.defineProperty(E(a), 'updateNumbersIncludedValue', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t) {
                var e
                e = true !== t.target.value && 'true' !== t.target.value
                a.setState({ numbersIncluded: e })
              }
            })
            Object.defineProperty(E(a), 'updateNameValue', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t) {
                document.getElementById('error').style.display = 'none'
                a.setState({ nameValue: t.target.value })
              }
            })
            Object.defineProperty(E(a), 'updateSurnameValue', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t) {
                document.getElementById('error').style.display = 'none'
                a.setState({ surnameValue: t.target.value })
              }
            })
            Object.defineProperty(E(a), 'generatorHandleClick', {
              configurable: true,
              enumerable: true,
              writable: true,
              value: function e(t, r) {
                document.getElementById('error').style.display = 'none'
                var n = ''
                var s = ''
                if (
                  t &&
                  'undefined' !== typeof t &&
                  r &&
                  'undefined' !== typeof r
                ) {
                  var l = '1234567890'
                  try {
                    if (a.state.numbersIncluded)
                      for (var c = 0; c < 3; c++)
                        n += l.charAt(Math.floor(7 * Math.random()))
                    s = t.slice(0, 3) + r.slice(0, 5) + n
                    a.setState({ generatedUsername: s })
                  } catch (e) {
                    console.log(e)
                  }
                } else document.getElementById('error').style.display = 'block'
              }
            })
            a.state = {
              nameValue: '',
              surnameValue: '',
              generatedUsername: '',
              numbersIncluded: false
            }
            return a
          }
          p(t, [
            {
              key: 'render',
              value: function e() {
                var t = this
                return l.a.createElement(
                  i['default'],
                  null,
                  l.a.createElement(n.a, {
                    styleId: '3857553884',
                    css: [
                      '.card.jsx-3857553884{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '#start_button.jsx-3857553884{margin-top:15px;}',
                      '@media only screen and (max-width:1100px){.card.jsx-3857553884{width:100%;}h2.jsx-3857553884{font-size:1rem;}}'
                    ]
                  }),
                  l.a.createElement(
                    'div',
                    { className: 'jsx-3857553884 container' },
                    l.a.createElement(
                      'div',
                      { className: 'jsx-3857553884 columns' },
                      l.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-3857553884 column col-xs-12 text-center'
                        },
                        l.a.createElement(
                          'h2',
                          {
                            className: 'jsx-3857553884 h3 text-center subtitle'
                          },
                          'USERNAME'
                        ),
                        l.a.createElement(
                          'h1',
                          {
                            className: 'jsx-3857553884 h1 rwd_title text-center'
                          },
                          'Generate your username from your name and surname now!'
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'jsx-3857553884 card' },
                          l.a.createElement(
                            'div',
                            { className: 'jsx-3857553884 card-body' },
                            l.a.createElement(
                              'div',
                              { className: 'jsx-3857553884 form-group' },
                              l.a.createElement(
                                'div',
                                { className: 'jsx-3857553884 columns' },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884 column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    { className: 'jsx-3857553884 form-label' },
                                    'Your name'
                                  ),
                                  l.a.createElement('input', {
                                    value: this.state.nameValue,
                                    onChange: function e(a) {
                                      return t.updateNameValue(a)
                                    },
                                    type: 'text',
                                    id: 'name',
                                    className: 'jsx-3857553884 form-input'
                                  })
                                ),
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884 column col-lg-6 col-md-6 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    { className: 'jsx-3857553884 form-label' },
                                    'Your surname'
                                  ),
                                  l.a.createElement('input', {
                                    value: this.state.surnameValue,
                                    onChange: function e(a) {
                                      return t.updateSurnameValue(a)
                                    },
                                    type: 'text',
                                    id: 'surname',
                                    className: 'jsx-3857553884 form-input'
                                  })
                                )
                              ),
                              l.a.createElement(
                                'div',
                                { className: 'jsx-3857553884 columns' },
                                l.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'jsx-3857553884 column col-lg-12 col-md-12 col-xs-12'
                                  },
                                  l.a.createElement(
                                    'label',
                                    {
                                      className: 'jsx-3857553884 form-checkbox'
                                    },
                                    l.a.createElement('input', {
                                      type: 'checkbox',
                                      value: this.state.numbersIncluded,
                                      onChange: function e(a) {
                                        return t.updateNumbersIncludedValue(a)
                                      },
                                      className: 'jsx-3857553884'
                                    }),
                                    l.a.createElement('i', {
                                      className: 'jsx-3857553884 form-icon'
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
                                  t.generatorHandleClick(
                                    t.state.nameValue,
                                    t.state.surnameValue
                                  )
                                },
                                id: 'start_button',
                                className: 'jsx-3857553884 btn btn-primary'
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
                            { className: 'jsx-3857553884 card-footer' },
                            l.a.createElement(
                              'div',
                              { className: 'jsx-3857553884 form-group' },
                              l.a.createElement(
                                'label',
                                { className: 'jsx-3857553884 form-label' },
                                'Your username is:'
                              ),
                              l.a.createElement('textarea', {
                                value: this.state.generatedUsername,
                                id: 'result',
                                rows: '3',
                                readOnly: true,
                                className: 'jsx-3857553884 form-input'
                              })
                            ),
                            l.a.createElement(
                              'div',
                              { className: 'jsx-3857553884' },
                              this.state.generatedUsername &&
                                l.a.createElement(
                                  'span',
                                  { className: 'jsx-3857553884' },
                                  'With this username you can register for example on',
                                  ' ',
                                  l.a.createElement(
                                    'a',
                                    {
                                      href: 'https://www.facebook.com/',
                                      target: '_blank',
                                      className: 'jsx-3857553884'
                                    },
                                    'facebook'
                                  ),
                                  ',',
                                  ' ',
                                  l.a.createElement(
                                    'a',
                                    {
                                      href: 'https://www.instagram.com/',
                                      target: '_blank',
                                      className: 'jsx-3857553884'
                                    },
                                    'instagram'
                                  ),
                                  ',',
                                  ' ',
                                  l.a.createElement(
                                    'a',
                                    {
                                      href: 'https://twitter.com/',
                                      target: '_blank',
                                      className: 'jsx-3857553884'
                                    },
                                    'twitter'
                                  ),
                                  ',',
                                  ' ',
                                  l.a.createElement(
                                    'a',
                                    {
                                      href: 'https://www.linkedin.com/',
                                      target: '_blank',
                                      className: 'jsx-3857553884'
                                    },
                                    'linkedIn'
                                  ),
                                  ',',
                                  ' ',
                                  l.a.createElement(
                                    'a',
                                    {
                                      href: 'https://www.snapchat.com/',
                                      target: '_blank',
                                      className: 'jsx-3857553884'
                                    },
                                    'snapchat'
                                  ),
                                  ', etc..'
                                )
                            )
                          )
                        ),
                        l.a.createElement(
                          'div',
                          { className: 'jsx-3857553884 buttons-section' },
                          l.a.createElement(
                            m.a,
                            { href: '/passwords' },
                            l.a.createElement(
                              'a',
                              { className: 'jsx-3857553884 btn btn-secondary' },
                              'Generate password'
                            )
                          ),
                          l.a.createElement(
                            m.a,
                            { href: '/qr-code' },
                            l.a.createElement(
                              'a',
                              { className: 'jsx-3857553884 btn btn-secondary' },
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
          return t
        })(l.a.Component)
      }
    },
    [435]
  )
  return { page: e.default }
})
