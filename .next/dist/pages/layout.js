'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _head = require('next/dist/lib/head.js')

var _head2 = _interopRequireDefault(_head)

var _link = require('next/dist/lib/link.js')

var _link2 = _interopRequireDefault(_link)

var _reactFela = require('react-fela')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _jsxFileName =
  '/Users/petrnikolasprokop/Documents/work/gen_pass/pages/layout.js'

// ------------------------------------------------------------------------------
// Styles
// ------------------------------------------------------------------------------
var Container = (0, _reactFela.createComponent)(function() {
  return {
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5
  }
})

// ------------------------------------------------------------------------------
// Export layout
// ------------------------------------------------------------------------------

exports.default = function(_ref) {
  var children = _ref.children
  return _react2.default.createElement(
    'div',
    {
      className: 'root',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    _react2.default.createElement(
      _head2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      _react2.default.createElement('meta', {
        charSet: 'utf-8',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }),
      _react2.default.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }),
      _react2.default.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        'GENPASS'
      ),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        type: 'image/ico',
        href: '/static/img/favicon.ico',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }),
      _react2.default.createElement('meta', {
        name: 'author',
        content: 'Petr Nikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }),
      _react2.default.createElement('meta', {
        name: 'description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:title',
        content: 'GENPASS',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:type',
        content: 'website',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:url',
        content: 'http://generator-random.com/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:card',
        content: 'summary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:title',
        content: 'GENPASS',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:site',
        content: '@PetrNikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:creator',
        content: '@PetrNikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }),
      _react2.default.createElement('meta', {
        name: 'HandheldFriendly',
        content: 'True',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }),
      _react2.default.createElement('meta', {
        name: 'MobileOptimized',
        content: '320',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/reset.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/main.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/components.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/responsive.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html:
            '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }),
      _react2.default.createElement('script', {
        async: '',
        src:
          'https://cdn.rawgit.com/eligrey/FileSaver.js/5ed507ef8aa53d8ecfea96d96bc7214cd2476fd2/FileSaver.min.js',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })
    ),
    _react2.default.createElement(
      'header',
      {
        className: 'navbar animated fadeIn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      },
      _react2.default.createElement(
        'section',
        {
          className: 'navbar-section logo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        },
        _react2.default.createElement(
          _link2.default,
          {
            href: '/',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          _react2.default.createElement(
            'h1',
            {
              className: 'h1',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            'GENPASS'
          )
        )
      ),
      _react2.default.createElement(
        'section',
        {
          className: 'navbar-section',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        },
        _react2.default.createElement(
          _link2.default,
          {
            href: '/qr-code',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-link',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            'QR codes'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          {
            href: '/passwords',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            }
          },
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-link',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              }
            },
            'Passwords'
          )
        ),
        _react2.default.createElement(
          _link2.default,
          {
            href: '/usernames',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-link',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            'Usernames'
          )
        )
      )
    ),
    _react2.default.createElement(
      'header',
      {
        className: 'desktop_header animated fadeIn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      },
      _react2.default.createElement(
        'div',
        {
          className: 'logo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        _react2.default.createElement(
          _link2.default,
          {
            href: '/',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          _react2.default.createElement(
            'h1',
            {
              className: 'card-title h1',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              }
            },
            'GENPASS'
          )
        ),
        _react2.default.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          },
          'Random generators'
        )
      ),
      _react2.default.createElement(
        'nav',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        },
        _react2.default.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          },
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            },
            _react2.default.createElement(
              _link2.default,
              {
                href: '/qr-code',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              },
              _react2.default.createElement(
                'a',
                {
                  className: 'selected',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                  }
                },
                'QR codes'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            _react2.default.createElement(
              _link2.default,
              {
                href: '/passwords',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                }
              },
              _react2.default.createElement(
                'a',
                {
                  className: 'selected',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                },
                'Passwords'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            },
            _react2.default.createElement(
              _link2.default,
              {
                href: '/usernames',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                }
              },
              _react2.default.createElement(
                'a',
                {
                  className: 'selected',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                  }
                },
                'Usernames'
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'footer clearfix',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        },
        _react2.default.createElement(
          'ul',
          {
            className: 'social clearfix',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          },
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            _react2.default.createElement('a', {
              href: 'https://www.facebook.com/peta.prokop',
              target: '_blank',
              className: 'fb',
              'data-title': 'Facebook',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            })
          ),
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              }
            },
            _react2.default.createElement('a', {
              href: 'https://plus.google.com/111138628395528220719',
              target: '_blank',
              className: 'google',
              'data-title': 'Google +',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            })
          ),
          _react2.default.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              }
            },
            _react2.default.createElement('a', {
              href: 'https://twitter.com/PetrNikolas',
              target: '_blank',
              className: 'twitter',
              'data-title': 'Twitter',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'rights',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            }
          },
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            _react2.default.createElement(
              'a',
              {
                href: 'mailto:petr.nikolas@icloud.com?subject=Hello',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
                }
              },
              'Send me a feedback.'
            )
          ),
          _react2.default.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              }
            },
            'Built with ',
            _react2.default.createElement(
              'span',
              {
                className: 'hearth_icon',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                }
              },
              '\u2665'
            ),
            ' by',
            ' ',
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                href: 'http://www.petrnikolas.com/',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                }
              },
              'Petr Nikolas.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'main',
      {
        className: 'main animated fadeIn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      },
      children
    )
  )
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsImNyZWF0ZUNvbXBvbmVudCIsIkNvbnRhaW5lciIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibGluZUhlaWdodCIsImNoaWxkcmVuIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFTOzs7Ozs7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsSUFBTSw0Q0FBNEIsWUFBQTs7Y0FBTyxBQUM3QixBQUNWO2dCQUZ1QyxBQUUzQixBQUNaO2lCQUh1QyxBQUcxQixBQUNiO2dCQUpnQyxBQUFPLEFBSTNCO0FBSjJCLEFBQ3ZDO0FBREYsQUFBa0IsQ0FBQTs7QUFPbEI7QUFDQTtBQUNBLEFBQ0E7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLFNBQU4sQUFBYztnQkFBZDtrQkFERixBQUNFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLG1CQUFrQixTQUFsQyxBQUEwQztnQkFBMUM7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUhGLEFBR0UsQUFFQTtBQUZBO3NCQUVBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUxGLEFBS0UsQUFFQTtTQUFBLEFBQ00sQUFDSjtVQUZGLEFBRU8sQUFDTDtVQUhGLEFBR087O2dCQUhQO2tCQVBGLEFBT0UsQUFNQTtBQU5BO0FBQ0UsOENBS0ksTUFBTixBQUFXLFVBQVMsU0FBcEIsQUFBNEI7Z0JBQTVCO2tCQWJGLEFBYUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxlQUFjLFNBQXpCLEFBQWlD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QUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQXRCVixBQVFFLEFBQ0UsQUFXRSxBQUNFLEFBQ0UsQUFNUixrQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQTtVQUNFLEFBQ08sQUFDTDtZQUZGLEFBRVMsQUFDUDtlQUhGLEFBR1ksQUFDVjtrQkFKRixBQUlhOztnQkFKYjtrQkFGSixBQUNFLEFBQ0UsQUFPRjtBQVBFO0FBQ0UsdUJBTUosY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUE7VUFDRSxBQUNPLEFBQ0w7WUFGRixBQUVTLEFBQ1A7ZUFIRixBQUdZLEFBQ1Y7a0JBSkYsQUFJYTs7Z0JBSmI7a0JBVkosQUFTRSxBQUNFLEFBT0Y7QUFQRTtBQUNFLHVCQU1KLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBO1VBQ0UsQUFDTyxBQUNMO1lBRkYsQUFFUyxBQUNQO2VBSEYsQUFHWSxBQUNWO2tCQUpGLEFBSWE7O2dCQUpiO2tCQW5CTixBQUNFLEFBaUJFLEFBQ0UsQUFTSjtBQVRJO0FBQ0Usd0JBUU4sY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtnQkFBUjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBSUYseUNBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ2EsK0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7Z0JBQWhCO2tCQUFBO0FBQUE7S0FEYixBQUNhLFdBQTBDLE9BRHZELEFBRUUscUJBQUEsY0FBQSxPQUFHLFFBQUgsQUFBVSxVQUFTLE1BQW5CLEFBQXdCO2dCQUF4QjtrQkFBQTtBQUFBO0tBbkpWLEFBbUZFLEFBNEJFLEFBNEJFLEFBTUUsQUFFRSxBQVFSLHNDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQSxBQUF3QztBQUF4QztLQTVKVyxBQUNiLEFBMkpFO0FBNUpKIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0cm5pa29sYXNwcm9rb3AvRG9jdW1lbnRzL3dvcmsvZ2VuX3Bhc3MifQ==
