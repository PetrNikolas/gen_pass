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
        lineNumber: 19
      }
    },
    _react2.default.createElement(
      _head2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      _react2.default.createElement('meta', {
        charSet: 'utf-8',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }),
      _react2.default.createElement('meta', {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }),
      _react2.default.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      _react2.default.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
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
          lineNumber: 27
        }
      }),
      _react2.default.createElement('meta', {
        name: 'author',
        content: 'Petr Nikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }),
      _react2.default.createElement('meta', {
        name: 'description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:title',
        content: 'GENPASS',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:type',
        content: 'website',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:url',
        content: 'http://generator-random.com/',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }),
      _react2.default.createElement('meta', {
        property: 'og:description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:card',
        content: 'summary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:title',
        content: 'GENPASS',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:description',
        content: 'Random generators',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:site',
        content: '@PetrNikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }),
      _react2.default.createElement('meta', {
        name: 'twitter:creator',
        content: '@PetrNikolas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }),
      _react2.default.createElement('meta', {
        name: 'HandheldFriendly',
        content: 'True',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }),
      _react2.default.createElement('meta', {
        name: 'MobileOptimized',
        content: '320',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }),
      _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '/static/css/main.css',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }),
      _react2.default.createElement('script', {
        dangerouslySetInnerHTML: {
          __html:
            '\n          !function(e,t,a,n,c,s,o){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,s=t.createElement(a),o=t.getElementsByTagName(a)[0],s.async=1,s.src=n,o.parentNode.insertBefore(s,o)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-112389082-1","auto"),ga("send","pageview");\n        '
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })
    ),
    _react2.default.createElement(
      'header',
      {
        className: 'navbar animated fadeInDown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      },
      _react2.default.createElement(
        'section',
        {
          className: 'navbar-section logo',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        _react2.default.createElement(
          _link2.default,
          {
            href: '/',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          _react2.default.createElement(
            'a',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
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
            lineNumber: 84
          }
        },
        _react2.default.createElement(
          _link2.default,
          {
            href: '/passwords',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-link',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
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
              lineNumber: 88
            }
          },
          _react2.default.createElement(
            'a',
            {
              className: 'btn btn-link',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            'Usernames'
          )
        )
      )
    ),
    _react2.default.createElement(
      'main',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      },
      children
    ),
    _react2.default.createElement(
      'footer',
      {
        className: 'footer animated fadeInDown',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      },
      _react2.default.createElement(
        'p',
        {
          className: 'centered',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        },
        _react2.default.createElement(
          'a',
          {
            href: 'mailto:petr.nikolas@icloud.com?subject=Hello',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          _react2.default.createElement('i', {
            className: 'icon icon-mail',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          }),
          ' Send me a feedback.'
        )
      ),
      _react2.default.createElement(
        'p',
        {
          className: 'centered',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        },
        'Built with ',
        _react2.default.createElement(
          'span',
          {
            className: 'hearth_icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
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
              lineNumber: 104
            }
          },
          'Petr Nikolas'
        )
      )
    )
  )
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsImNyZWF0ZUNvbXBvbmVudCIsIkNvbnRhaW5lciIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibGluZUhlaWdodCIsImNoaWxkcmVuIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsSUFBTSw0Q0FBNEIsWUFBQTs7Y0FBTyxBQUM3QixBQUNWO2dCQUZ1QyxBQUUzQixBQUNaO2lCQUh1QyxBQUcxQixBQUNiO2dCQUpnQyxBQUFPLEFBSTNCO0FBSjJCLEFBQ3ZDO0FBREYsQUFBa0IsQ0FBQTs7QUFPbEI7QUFDQTtBQUNBLEFBQ0E7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLFNBQU4sQUFBYztnQkFBZDtrQkFERixBQUNFLEFBQ0E7QUFEQTs4Q0FDTSxXQUFOLEFBQWdCLG1CQUFrQixTQUFsQyxBQUEwQztnQkFBMUM7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUhGLEFBR0UsQUFFQTtBQUZBO3NCQUVBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUxGLEFBS0UsQUFFQTtTQUFBLEFBQ00sQUFDSjtVQUZGLEFBRU8sQUFDTDtVQUhGLEFBR087O2dCQUhQO2tCQVBGLEFBT0UsQUFNQTtBQU5BO0FBQ0UsOENBS0ksTUFBTixBQUFXLFVBQVMsU0FBcEIsQUFBNEI7Z0JBQTVCO2tCQWJGLEFBYUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxlQUFjLFNBQXpCLEFBQWlDO2dCQUFqQztrQkFkRixBQWNFLEFBRUE7QUFGQTs4Q0FFTSxVQUFOLEFBQWUsWUFBVyxTQUExQixBQUFrQztnQkFBbEM7a0JBaEJGLEFBZ0JFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsV0FBVSxTQUF6QixBQUFpQztnQkFBakM7a0JBakJGLEFBaUJFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsVUFBUyxTQUF4QixBQUFnQztnQkFBaEM7a0JBbEJGLEFBa0JFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsa0JBQWlCLFNBQWhDLEFBQXdDO2dCQUF4QztrQkFuQkYsQUFtQkUsQUFFQTtBQUZBOzhDQUVNLE1BQU4sQUFBVyxnQkFBZSxTQUExQixBQUFrQztnQkFBbEM7a0JBckJGLEFBcUJFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsaUJBQWdCLFNBQTNCLEFBQW1DO2dCQUFuQztrQkF0QkYsQUFzQkUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyx1QkFBc0IsU0FBakMsQUFBeUM7Z0JBQXpDO2tCQXZCRixBQXVCRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLGdCQUFlLFNBQTFCLEFBQWtDO2dCQUFsQztrQkF4QkYsQUF3QkUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxtQkFBa0IsU0FBN0IsQUFBcUM7Z0JBQXJDO2tCQXpCRixBQXlCRSxBQUVBO0FBRkE7OENBRU0sTUFBTixBQUFXLG9CQUFtQixTQUE5QixBQUFzQztnQkFBdEM7a0JBM0JGLEFBMkJFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsbUJBQWtCLFNBQTdCLEFBQXFDO2dCQUFyQztrQkE1QkYsQUE0QkUsQUFFQTtBQUZBOztTQUVBLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQTlCRixBQThCRSxBQUlBO0FBSkE7QUFDRTtTQUdGLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQWxDRixBQWtDRSxBQUlBO0FBSkE7QUFDRTtTQUdGLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQXRDRixBQXNDRSxBQUlBO0FBSkE7QUFDRTtTQUdGLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQTFDRixBQTBDRSxBQUlBO0FBSkE7QUFDRSw4Q0FHSSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBOUNGLEFBOENFLEFBRUE7QUFGQTs7O2NBRUEsQUFDMkI7QUFBQSxBQUN2Qjs7Z0JBRko7a0JBakRKLEFBQ0UsQUFnREUsQUFTRjtBQVRFO0FBQ0UsdUJBUUosY0FBQSxZQUFRLFdBQVIsQUFBa0I7Z0JBQWxCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLGFBQVMsV0FBVCxBQUFtQjtnQkFBbkI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FITixBQUNFLEFBQ0UsQUFDRSxBQUlKLDhCQUFBLGNBQUEsYUFBUyxXQUFULEFBQW1CO2dCQUFuQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLCtCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0F0RVIsQUEwREUsQUFPRSxBQUlFLEFBQ0UsQUFLTixpQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFPO0FBQVA7QUFBQSxLQTNFRixBQTJFRSxBQUVBLDJCQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCO2dCQUFsQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtnQkFBUjtrQkFBQSxBQUNFO0FBREY7MENBQ0ssV0FBSCxBQUFhO2dCQUFiO2tCQURGLEFBQ0U7QUFBQTtNQUhOLEFBQ0UsQUFDRSxBQUlGLDBDQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUNhLCtCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBRGIsQUFDYSxXQUEwQyxPQUR2RCxBQUVFLHFCQUFBLGNBQUEsT0FBRyxRQUFILEFBQVUsVUFBUyxNQUFuQixBQUF3QjtnQkFBeEI7a0JBQUE7QUFBQTtLQXRGTyxBQUNiLEFBNkVFLEFBTUUsQUFFRTtBQXRGUiIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldHJuaWtvbGFzcHJva29wL0RvY3VtZW50cy93b3JrL2dlbl9wYXNzIn0=
