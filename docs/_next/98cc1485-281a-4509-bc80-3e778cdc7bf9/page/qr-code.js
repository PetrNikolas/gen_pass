module.exports = __NEXT_REGISTER_PAGE('/qr-code', function() {
  var A = webpackJsonp(
    [1],
    [
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        function a(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var B = /^#([a-f0-9]{3})$/i
        var s = function A(e) {
          var r = e.match(B)
          if (r)
            return [
              parseInt(r[1][0] + r[1][0], 16),
              parseInt(r[1][1] + r[1][1], 16),
              parseInt(r[1][2] + r[1][2], 16),
              null
            ]
          return false
        }
        var i = /^#([a-f0-9]{6})$/i
        var o = function A(e) {
          var r = e.match(i)
          if (r)
            return [
              parseInt(r[1].substring(0, 2), 16),
              parseInt(r[1].substring(2, 4), 16),
              parseInt(r[1].substring(4, 6), 16),
              null
            ]
          return false
        }
        var l = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
        var u = function A(e) {
          var r = e.match(l)
          if (r) return [Number(r[1]), Number(r[2]), Number(r[3]), null]
          return false
        }
        var c = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/
        var Q = function A(e) {
          var r = e.match(c)
          if (r && r.length > 4)
            return [Number(r[1]), Number(r[2]), Number(r[3]), Number(r[4])]
          return false
        }
        var w = function A(e) {
          return [
            Math.min(e[0], 255),
            Math.min(e[1], 255),
            Math.min(e[2], 255),
            e.length > 3 ? e[3] : null
          ]
        }
        var g = function A(e) {
          var r = U[e.toLowerCase()]
          return r ? r : false
        }
        var f = (function() {
          function A(e) {
            a(this, A)
            var r = Array.isArray(e)
                ? w(e)
                : s(e) || u(e) || Q(e) || g(e) || o(e) || [0, 0, 0, null],
              n = t(r, 4),
              B = n[0],
              i = n[1],
              l = n[2],
              c = n[3]
            this.r = B
            this.g = i
            this.b = l
            this.a = c
          }
          n(A, [
            {
              key: 'isTransparent',
              value: function A() {
                return 0 === this.a
              }
            },
            {
              key: 'toString',
              value: function A() {
                return null !== this.a && 1 !== this.a
                  ? 'rgba(' +
                      this.r +
                      ',' +
                      this.g +
                      ',' +
                      this.b +
                      ',' +
                      this.a +
                      ')'
                  : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')'
              }
            }
          ])
          return A
        })()
        e.default = f
        var U = {
          transparent: [0, 0, 0, 0],
          aliceblue: [240, 248, 255, null],
          antiquewhite: [250, 235, 215, null],
          aqua: [0, 255, 255, null],
          aquamarine: [127, 255, 212, null],
          azure: [240, 255, 255, null],
          beige: [245, 245, 220, null],
          bisque: [255, 228, 196, null],
          black: [0, 0, 0, null],
          blanchedalmond: [255, 235, 205, null],
          blue: [0, 0, 255, null],
          blueviolet: [138, 43, 226, null],
          brown: [165, 42, 42, null],
          burlywood: [222, 184, 135, null],
          cadetblue: [95, 158, 160, null],
          chartreuse: [127, 255, 0, null],
          chocolate: [210, 105, 30, null],
          coral: [255, 127, 80, null],
          cornflowerblue: [100, 149, 237, null],
          cornsilk: [255, 248, 220, null],
          crimson: [220, 20, 60, null],
          cyan: [0, 255, 255, null],
          darkblue: [0, 0, 139, null],
          darkcyan: [0, 139, 139, null],
          darkgoldenrod: [184, 134, 11, null],
          darkgray: [169, 169, 169, null],
          darkgreen: [0, 100, 0, null],
          darkgrey: [169, 169, 169, null],
          darkkhaki: [189, 183, 107, null],
          darkmagenta: [139, 0, 139, null],
          darkolivegreen: [85, 107, 47, null],
          darkorange: [255, 140, 0, null],
          darkorchid: [153, 50, 204, null],
          darkred: [139, 0, 0, null],
          darksalmon: [233, 150, 122, null],
          darkseagreen: [143, 188, 143, null],
          darkslateblue: [72, 61, 139, null],
          darkslategray: [47, 79, 79, null],
          darkslategrey: [47, 79, 79, null],
          darkturquoise: [0, 206, 209, null],
          darkviolet: [148, 0, 211, null],
          deeppink: [255, 20, 147, null],
          deepskyblue: [0, 191, 255, null],
          dimgray: [105, 105, 105, null],
          dimgrey: [105, 105, 105, null],
          dodgerblue: [30, 144, 255, null],
          firebrick: [178, 34, 34, null],
          floralwhite: [255, 250, 240, null],
          forestgreen: [34, 139, 34, null],
          fuchsia: [255, 0, 255, null],
          gainsboro: [220, 220, 220, null],
          ghostwhite: [248, 248, 255, null],
          gold: [255, 215, 0, null],
          goldenrod: [218, 165, 32, null],
          gray: [128, 128, 128, null],
          green: [0, 128, 0, null],
          greenyellow: [173, 255, 47, null],
          grey: [128, 128, 128, null],
          honeydew: [240, 255, 240, null],
          hotpink: [255, 105, 180, null],
          indianred: [205, 92, 92, null],
          indigo: [75, 0, 130, null],
          ivory: [255, 255, 240, null],
          khaki: [240, 230, 140, null],
          lavender: [230, 230, 250, null],
          lavenderblush: [255, 240, 245, null],
          lawngreen: [124, 252, 0, null],
          lemonchiffon: [255, 250, 205, null],
          lightblue: [173, 216, 230, null],
          lightcoral: [240, 128, 128, null],
          lightcyan: [224, 255, 255, null],
          lightgoldenrodyellow: [250, 250, 210, null],
          lightgray: [211, 211, 211, null],
          lightgreen: [144, 238, 144, null],
          lightgrey: [211, 211, 211, null],
          lightpink: [255, 182, 193, null],
          lightsalmon: [255, 160, 122, null],
          lightseagreen: [32, 178, 170, null],
          lightskyblue: [135, 206, 250, null],
          lightslategray: [119, 136, 153, null],
          lightslategrey: [119, 136, 153, null],
          lightsteelblue: [176, 196, 222, null],
          lightyellow: [255, 255, 224, null],
          lime: [0, 255, 0, null],
          limegreen: [50, 205, 50, null],
          linen: [250, 240, 230, null],
          magenta: [255, 0, 255, null],
          maroon: [128, 0, 0, null],
          mediumaquamarine: [102, 205, 170, null],
          mediumblue: [0, 0, 205, null],
          mediumorchid: [186, 85, 211, null],
          mediumpurple: [147, 112, 219, null],
          mediumseagreen: [60, 179, 113, null],
          mediumslateblue: [123, 104, 238, null],
          mediumspringgreen: [0, 250, 154, null],
          mediumturquoise: [72, 209, 204, null],
          mediumvioletred: [199, 21, 133, null],
          midnightblue: [25, 25, 112, null],
          mintcream: [245, 255, 250, null],
          mistyrose: [255, 228, 225, null],
          moccasin: [255, 228, 181, null],
          navajowhite: [255, 222, 173, null],
          navy: [0, 0, 128, null],
          oldlace: [253, 245, 230, null],
          olive: [128, 128, 0, null],
          olivedrab: [107, 142, 35, null],
          orange: [255, 165, 0, null],
          orangered: [255, 69, 0, null],
          orchid: [218, 112, 214, null],
          palegoldenrod: [238, 232, 170, null],
          palegreen: [152, 251, 152, null],
          paleturquoise: [175, 238, 238, null],
          palevioletred: [219, 112, 147, null],
          papayawhip: [255, 239, 213, null],
          peachpuff: [255, 218, 185, null],
          peru: [205, 133, 63, null],
          pink: [255, 192, 203, null],
          plum: [221, 160, 221, null],
          powderblue: [176, 224, 230, null],
          purple: [128, 0, 128, null],
          rebeccapurple: [102, 51, 153, null],
          red: [255, 0, 0, null],
          rosybrown: [188, 143, 143, null],
          royalblue: [65, 105, 225, null],
          saddlebrown: [139, 69, 19, null],
          salmon: [250, 128, 114, null],
          sandybrown: [244, 164, 96, null],
          seagreen: [46, 139, 87, null],
          seashell: [255, 245, 238, null],
          sienna: [160, 82, 45, null],
          silver: [192, 192, 192, null],
          skyblue: [135, 206, 235, null],
          slateblue: [106, 90, 205, null],
          slategray: [112, 128, 144, null],
          slategrey: [112, 128, 144, null],
          snow: [255, 250, 250, null],
          springgreen: [0, 255, 127, null],
          steelblue: [70, 130, 180, null],
          tan: [210, 180, 140, null],
          teal: [0, 128, 128, null],
          thistle: [216, 191, 216, null],
          tomato: [255, 99, 71, null],
          turquoise: [64, 224, 208, null],
          violet: [238, 130, 238, null],
          wheat: [245, 222, 179, null],
          white: [255, 255, 255, null],
          whitesmoke: [245, 245, 245, null],
          yellow: [255, 255, 0, null],
          yellowgreen: [154, 205, 50, null]
        }
        var d = (e.TRANSPARENT = new f([0, 0, 0, 0]))
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseBoundCurves = e.calculatePaddingBoxPath = e.calculateBorderBoxPath = e.parsePathForBorder = e.parseDocumentSize = e.calculateContentBox = e.calculatePaddingBox = e.parseBounds = e.Bounds = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(58)
        var a = i(n)
        var B = r(281)
        var s = i(B)
        function i(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function o(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var l = 0
        var u = 1
        var c = 2
        var Q = 3
        var w = 0
        var g = 1
        var f = (e.Bounds = (function() {
          function A(e, r, t, n) {
            o(this, A)
            this.left = e
            this.top = r
            this.width = t
            this.height = n
          }
          t(A, null, [
            {
              key: 'fromClientRect',
              value: function e(r, t, n) {
                return new A(r.left + t, r.top + n, r.width, r.height)
              }
            }
          ])
          return A
        })())
        var U = (e.parseBounds = function A(e, r, t) {
          return f.fromClientRect(e.getBoundingClientRect(), r, t)
        })
        var d = (e.calculatePaddingBox = function A(e, r) {
          return new f(
            e.left + r[Q].borderWidth,
            e.top + r[l].borderWidth,
            e.width - (r[u].borderWidth + r[Q].borderWidth),
            e.height - (r[l].borderWidth + r[c].borderWidth)
          )
        })
        var C = (e.calculateContentBox = function A(e, r, t) {
          var n = r[l].value
          var a = r[u].value
          var B = r[c].value
          var s = r[Q].value
          return new f(
            e.left + s + t[Q].borderWidth,
            e.top + n + t[l].borderWidth,
            e.width - (t[u].borderWidth + t[Q].borderWidth + s + a),
            e.height - (t[l].borderWidth + t[c].borderWidth + n + B)
          )
        })
        var h = (e.parseDocumentSize = function A(e) {
          var r = e.body
          var t = e.documentElement
          if (!r || !t)
            throw new Error(false ? 'Unable to get document size' : '')
          var n = Math.max(
            Math.max(r.scrollWidth, t.scrollWidth),
            Math.max(r.offsetWidth, t.offsetWidth),
            Math.max(r.clientWidth, t.clientWidth)
          )
          var a = Math.max(
            Math.max(r.scrollHeight, t.scrollHeight),
            Math.max(r.offsetHeight, t.offsetHeight),
            Math.max(r.clientHeight, t.clientHeight)
          )
          return new f(0, 0, n, a)
        })
        var F = (e.parsePathForBorder = function A(e, r) {
          switch (r) {
            case l:
              return E(
                e.topLeftOuter,
                e.topLeftInner,
                e.topRightOuter,
                e.topRightInner
              )
            case u:
              return E(
                e.topRightOuter,
                e.topRightInner,
                e.bottomRightOuter,
                e.bottomRightInner
              )
            case c:
              return E(
                e.bottomRightOuter,
                e.bottomRightInner,
                e.bottomLeftOuter,
                e.bottomLeftInner
              )
            case Q:
            default:
              return E(
                e.bottomLeftOuter,
                e.bottomLeftInner,
                e.topLeftOuter,
                e.topLeftInner
              )
          }
        })
        var E = function A(e, r, t, n) {
          var a = []
          if (e instanceof s.default) a.push(e.subdivide(0.5, false))
          else a.push(e)
          if (t instanceof s.default) a.push(t.subdivide(0.5, true))
          else a.push(t)
          if (n instanceof s.default) a.push(n.subdivide(0.5, true).reverse())
          else a.push(n)
          if (r instanceof s.default) a.push(r.subdivide(0.5, false).reverse())
          else a.push(r)
          return a
        }
        var v = (e.calculateBorderBoxPath = function A(e) {
          return [
            e.topLeftOuter,
            e.topRightOuter,
            e.bottomRightOuter,
            e.bottomLeftOuter
          ]
        })
        var H = (e.calculatePaddingBoxPath = function A(e) {
          return [
            e.topLeftInner,
            e.topRightInner,
            e.bottomRightInner,
            e.bottomLeftInner
          ]
        })
        var p = (e.parseBoundCurves = function A(e, r, t) {
          var n = t[N.TOP_LEFT][w].getAbsoluteValue(e.width)
          var B = t[N.TOP_LEFT][g].getAbsoluteValue(e.height)
          var s = t[N.TOP_RIGHT][w].getAbsoluteValue(e.width)
          var i = t[N.TOP_RIGHT][g].getAbsoluteValue(e.height)
          var o = t[N.BOTTOM_RIGHT][w].getAbsoluteValue(e.width)
          var f = t[N.BOTTOM_RIGHT][g].getAbsoluteValue(e.height)
          var U = t[N.BOTTOM_LEFT][w].getAbsoluteValue(e.width)
          var d = t[N.BOTTOM_LEFT][g].getAbsoluteValue(e.height)
          var C = []
          C.push((n + s) / e.width)
          C.push((U + o) / e.width)
          C.push((B + d) / e.height)
          C.push((i + f) / e.height)
          var h = Math.max.apply(Math, C)
          if (h > 1) {
            n /= h
            B /= h
            s /= h
            i /= h
            o /= h
            f /= h
            U /= h
            d /= h
          }
          var F = e.width - s
          var E = e.height - f
          var v = e.width - o
          var H = e.height - d
          return {
            topLeftOuter:
              n > 0 || B > 0
                ? I(e.left, e.top, n, B, N.TOP_LEFT)
                : new a.default(e.left, e.top),
            topLeftInner:
              n > 0 || B > 0
                ? I(
                    e.left + r[Q].borderWidth,
                    e.top + r[l].borderWidth,
                    Math.max(0, n - r[Q].borderWidth),
                    Math.max(0, B - r[l].borderWidth),
                    N.TOP_LEFT
                  )
                : new a.default(
                    e.left + r[Q].borderWidth,
                    e.top + r[l].borderWidth
                  ),
            topRightOuter:
              s > 0 || i > 0
                ? I(e.left + F, e.top, s, i, N.TOP_RIGHT)
                : new a.default(e.left + e.width, e.top),
            topRightInner:
              s > 0 || i > 0
                ? I(
                    e.left + Math.min(F, e.width + r[Q].borderWidth),
                    e.top + r[l].borderWidth,
                    F > e.width + r[Q].borderWidth ? 0 : s - r[Q].borderWidth,
                    i - r[l].borderWidth,
                    N.TOP_RIGHT
                  )
                : new a.default(
                    e.left + e.width - r[u].borderWidth,
                    e.top + r[l].borderWidth
                  ),
            bottomRightOuter:
              o > 0 || f > 0
                ? I(e.left + v, e.top + E, o, f, N.BOTTOM_RIGHT)
                : new a.default(e.left + e.width, e.top + e.height),
            bottomRightInner:
              o > 0 || f > 0
                ? I(
                    e.left + Math.min(v, e.width - r[Q].borderWidth),
                    e.top + Math.min(E, e.height + r[l].borderWidth),
                    Math.max(0, o - r[u].borderWidth),
                    f - r[c].borderWidth,
                    N.BOTTOM_RIGHT
                  )
                : new a.default(
                    e.left + e.width - r[u].borderWidth,
                    e.top + e.height - r[c].borderWidth
                  ),
            bottomLeftOuter:
              U > 0 || d > 0
                ? I(e.left, e.top + H, U, d, N.BOTTOM_LEFT)
                : new a.default(e.left, e.top + e.height),
            bottomLeftInner:
              U > 0 || d > 0
                ? I(
                    e.left + r[Q].borderWidth,
                    e.top + H,
                    Math.max(0, U - r[Q].borderWidth),
                    d - r[c].borderWidth,
                    N.BOTTOM_LEFT
                  )
                : new a.default(
                    e.left + r[Q].borderWidth,
                    e.top + e.height - r[c].borderWidth
                  )
          }
        })
        var N = { TOP_LEFT: 0, TOP_RIGHT: 1, BOTTOM_RIGHT: 2, BOTTOM_LEFT: 3 }
        var I = function A(e, r, t, n, B) {
          var i = 4 * ((Math.sqrt(2) - 1) / 3)
          var o = t * i
          var l = n * i
          var u = e + t
          var c = r + n
          switch (B) {
            case N.TOP_LEFT:
              return new s.default(
                new a.default(e, c),
                new a.default(e, c - l),
                new a.default(u - o, r),
                new a.default(u, r)
              )
            case N.TOP_RIGHT:
              return new s.default(
                new a.default(e, r),
                new a.default(e + o, r),
                new a.default(u, c - l),
                new a.default(u, c)
              )
            case N.BOTTOM_RIGHT:
              return new s.default(
                new a.default(u, r),
                new a.default(u, r + l),
                new a.default(e + o, c),
                new a.default(e, c)
              )
            case N.BOTTOM_LEFT:
            default:
              return new s.default(
                new a.default(u, c),
                new a.default(u - o, c),
                new a.default(e, r + l),
                new a.default(e, r)
              )
          }
        }
      },
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(30)
        var a = B(n)
        function B(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function s(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var i = /([\d.]+)(px|r?em|%)/i
        var o = (e.LENGTH_TYPE = { PX: 0, PERCENTAGE: 1 })
        var l = (function() {
          function A(e) {
            s(this, A)
            this.type = '%' === e.substr(e.length - 1) ? o.PERCENTAGE : o.PX
            var r = parseFloat(e)
            if (false)
              console.error('Invalid value given for Length: "' + e + '"')
            this.value = isNaN(r) ? 0 : r
          }
          t(
            A,
            [
              {
                key: 'isPercentage',
                value: function A() {
                  return this.type === o.PERCENTAGE
                }
              },
              {
                key: 'getAbsoluteValue',
                value: function A(e) {
                  return this.isPercentage()
                    ? e * (this.value / 100)
                    : this.value
                }
              }
            ],
            [
              {
                key: 'create',
                value: function e(r) {
                  return new A(r)
                }
              }
            ]
          )
          return A
        })()
        e.default = l
        var u = function A(e) {
          var r = e.parent
          return r ? A(r) : parseFloat(e.style.font.fontSize)
        }
        var c = (e.calculateLengthFromValueWithUnit = function A(e, r, t) {
          switch (t) {
            case 'px':
            case '%':
              return new l(r + t)
            case 'em':
            case 'rem':
              var n = new l(r)
              n.value *= 'em' === t ? parseFloat(e.style.font.fontSize) : u(e)
              return n
            default:
              return new l('0')
          }
        })
      },
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(16)
        var a = b(n)
        var B = r(31)
        var s = r(43)
        var i = r(88)
        var o = r(282)
        var l = r(283)
        var u = r(284)
        var c = r(285)
        var Q = r(286)
        var w = r(287)
        var g = r(59)
        var f = r(288)
        var U = r(289)
        var d = r(138)
        var C = r(137)
        var h = r(139)
        var F = r(87)
        var E = r(290)
        var v = r(140)
        var H = r(291)
        var p = r(292)
        var N = r(293)
        var I = r(294)
        var m = r(17)
        var T = r(141)
        var K = r(90)
        function b(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function y(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var L = ['INPUT', 'TEXTAREA', 'SELECT']
        var _ = (function() {
          function A(e, r, t, n) {
            var B = this
            y(this, A)
            this.parent = r
            this.tagName = e.tagName
            this.index = n
            this.childNodes = []
            this.listItems = []
            if ('number' === typeof e.start) this.listStart = e.start
            var b = e.ownerDocument.defaultView
            var _ = b.pageXOffset
            var D = b.pageYOffset
            var M = b.getComputedStyle(e, null)
            var O = (0, l.parseDisplay)(M.display)
            var R = 'radio' === e.type || 'checkbox' === e.type
            var P = (0, h.parsePosition)(M.position)
            this.style = {
              background: R ? T.INPUT_BACKGROUND : (0, s.parseBackground)(M, t),
              border: R ? T.INPUT_BORDERS : (0, i.parseBorder)(M),
              borderRadius:
                (e instanceof b.HTMLInputElement ||
                  e instanceof HTMLInputElement) &&
                R
                  ? (0, T.getInputBorderRadius)(e)
                  : (0, o.parseBorderRadius)(M),
              color: R ? T.INPUT_COLOR : new a.default(M.color),
              display: O,
              float: (0, u.parseCSSFloat)(M.float),
              font: (0, c.parseFont)(M),
              letterSpacing: (0, Q.parseLetterSpacing)(M.letterSpacing),
              listStyle:
                O === l.DISPLAY.LIST_ITEM ? (0, g.parseListStyle)(M) : null,
              lineBreak: (0, w.parseLineBreak)(M.lineBreak),
              margin: (0, f.parseMargin)(M),
              opacity: parseFloat(M.opacity),
              overflow:
                -1 === L.indexOf(e.tagName)
                  ? (0, U.parseOverflow)(M.overflow)
                  : U.OVERFLOW.HIDDEN,
              overflowWrap: (0, d.parseOverflowWrap)(
                M.overflowWrap ? M.overflowWrap : M.wordWrap
              ),
              padding: (0, C.parsePadding)(M),
              position: P,
              textDecoration: (0, F.parseTextDecoration)(M),
              textShadow: (0, E.parseTextShadow)(M.textShadow),
              textTransform: (0, v.parseTextTransform)(M.textTransform),
              transform: (0, H.parseTransform)(M),
              visibility: (0, p.parseVisibility)(M.visibility),
              wordBreak: (0, N.parseWordBreak)(M.wordBreak),
              zIndex: (0, I.parseZIndex)(
                P !== h.POSITION.STATIC ? M.zIndex : 'auto'
              )
            }
            if (this.isTransformed()) e.style.transform = 'matrix(1,0,0,1,0,0)'
            if (O === l.DISPLAY.LIST_ITEM) {
              var X = (0, K.getListOwner)(this)
              if (X) {
                var k = X.listItems.length
                X.listItems.push(this)
                this.listIndex =
                  e.hasAttribute('value') && 'number' === typeof e.value
                    ? e.value
                    : 0 === k
                      ? 'number' === typeof X.listStart ? X.listStart : 1
                      : X.listItems[k - 1].listIndex + 1
              }
            }
            if ('IMG' === e.tagName)
              e.addEventListener('load', function() {
                B.bounds = (0, m.parseBounds)(e, _, D)
                B.curvedBounds = (0, m.parseBoundCurves)(
                  B.bounds,
                  B.style.border,
                  B.style.borderRadius
                )
              })
            this.image = S(e, t)
            this.bounds = R
              ? (0, T.reformatInputBounds)((0, m.parseBounds)(e, _, D))
              : (0, m.parseBounds)(e, _, D)
            this.curvedBounds = (0, m.parseBoundCurves)(
              this.bounds,
              this.style.border,
              this.style.borderRadius
            )
            if (false)
              this.name =
                e.tagName.toLowerCase() +
                (e.id ? '#' + e.id : '') +
                e.className
                  .toString()
                  .split(' ')
                  .map(function(A) {
                    return A.length ? '.' + A : ''
                  })
                  .join('')
          }
          t(A, [
            {
              key: 'getClipPaths',
              value: function A() {
                var e = this.parent ? this.parent.getClipPaths() : []
                var r = this.style.overflow !== U.OVERFLOW.VISIBLE
                return r
                  ? e.concat([
                      (0, m.calculatePaddingBoxPath)(this.curvedBounds)
                    ])
                  : e
              }
            },
            {
              key: 'isInFlow',
              value: function A() {
                return (
                  this.isRootElement() &&
                  !this.isFloating() &&
                  !this.isAbsolutelyPositioned()
                )
              }
            },
            {
              key: 'isVisible',
              value: function A() {
                return (
                  !(0, B.contains)(this.style.display, l.DISPLAY.NONE) &&
                  this.style.opacity > 0 &&
                  this.style.visibility === p.VISIBILITY.VISIBLE
                )
              }
            },
            {
              key: 'isAbsolutelyPositioned',
              value: function A() {
                return (
                  this.style.position !== h.POSITION.STATIC &&
                  this.style.position !== h.POSITION.RELATIVE
                )
              }
            },
            {
              key: 'isPositioned',
              value: function A() {
                return this.style.position !== h.POSITION.STATIC
              }
            },
            {
              key: 'isFloating',
              value: function A() {
                return this.style.float !== u.FLOAT.NONE
              }
            },
            {
              key: 'isRootElement',
              value: function A() {
                return null === this.parent
              }
            },
            {
              key: 'isTransformed',
              value: function A() {
                return null !== this.style.transform
              }
            },
            {
              key: 'isPositionedWithZIndex',
              value: function A() {
                return this.isPositioned() && !this.style.zIndex.auto
              }
            },
            {
              key: 'isInlineLevel',
              value: function A() {
                return (
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE) ||
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_BLOCK) ||
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_FLEX) ||
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_GRID) ||
                  (0, B.contains)(
                    this.style.display,
                    l.DISPLAY.INLINE_LIST_ITEM
                  ) ||
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                )
              }
            },
            {
              key: 'isInlineBlockOrInlineTable',
              value: function A() {
                return (
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_BLOCK) ||
                  (0, B.contains)(this.style.display, l.DISPLAY.INLINE_TABLE)
                )
              }
            }
          ])
          return A
        })()
        e.default = _
        var S = function A(e, r) {
          if (
            e instanceof e.ownerDocument.defaultView.SVGSVGElement ||
            e instanceof SVGSVGElement
          ) {
            var t = new XMLSerializer()
            return r.loadImage(
              'data:image/svg+xml,' + encodeURIComponent(t.serializeToString(e))
            )
          }
          switch (e.tagName) {
            case 'IMG':
              var n = e
              return r.loadImage(n.currentSrc || n.src)
            case 'CANVAS':
              var a = e
              return r.loadCanvas(a)
            case 'IFRAME':
              var B = e.getAttribute('data-html2canvas-internal-iframe-key')
              if (B) return B
              break
          }
          return null
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.contains = function A(e, r) {
          return 0 !== (e & r)
        })
        var n = (e.distance = function A(e, r) {
          return Math.sqrt(e * e + r * r)
        })
        var a = (e.copyCSSStyles = function A(e, r) {
          for (var t = e.length - 1; t >= 0; t--) {
            var n = e.item(t)
            if ('content' !== n) r.style.setProperty(n, e.getPropertyValue(n))
          }
          return r
        })
        var B = (e.SMALL_IMAGE =
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseBackgroundImage = e.parseBackground = e.calculateBackgroundRepeatPath = e.calculateBackgroundPosition = e.calculateBackgroungPositioningArea = e.calculateBackgroungPaintingArea = e.calculateGradientBackgroundSize = e.calculateBackgroundSize = e.BACKGROUND_ORIGIN = e.BACKGROUND_CLIP = e.BACKGROUND_SIZE = e.BACKGROUND_REPEAT = void 0
        var t = r(16)
        var n = Q(t)
        var a = r(24)
        var B = Q(a)
        var s = r(280)
        var i = Q(s)
        var o = r(58)
        var l = Q(o)
        var u = r(17)
        var c = r(137)
        function Q(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function w(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var g = (e.BACKGROUND_REPEAT = {
          REPEAT: 0,
          NO_REPEAT: 1,
          REPEAT_X: 2,
          REPEAT_Y: 3
        })
        var f = (e.BACKGROUND_SIZE = {
          AUTO: 0,
          CONTAIN: 1,
          COVER: 2,
          LENGTH: 3
        })
        var U = (e.BACKGROUND_CLIP = {
          BORDER_BOX: 0,
          PADDING_BOX: 1,
          CONTENT_BOX: 2
        })
        var d = (e.BACKGROUND_ORIGIN = U)
        var C = 'auto'
        var h = function A(e) {
          w(this, A)
          switch (e) {
            case 'contain':
              this.size = f.CONTAIN
              break
            case 'cover':
              this.size = f.COVER
              break
            case 'auto':
              this.size = f.AUTO
              break
            default:
              this.value = new B.default(e)
          }
        }
        var F = (e.calculateBackgroundSize = function A(e, r, t) {
          var n = 0
          var a = 0
          var B = e.size
          if (B[0].size === f.CONTAIN || B[0].size === f.COVER) {
            var s = t.width / t.height
            var o = r.width / r.height
            return s < o !== (B[0].size === f.COVER)
              ? new i.default(t.width, t.width / o)
              : new i.default(t.height * o, t.height)
          }
          if (B[0].value) n = B[0].value.getAbsoluteValue(t.width)
          if (B[0].size === f.AUTO && B[1].size === f.AUTO) a = r.height
          else if (B[1].size === f.AUTO) a = n / r.width * r.height
          else if (B[1].value) a = B[1].value.getAbsoluteValue(t.height)
          if (B[0].size === f.AUTO) n = a / r.height * r.width
          return new i.default(n, a)
        })
        var E = (e.calculateGradientBackgroundSize = function A(e, r) {
          var t = e.size
          var n = t[0].value ? t[0].value.getAbsoluteValue(r.width) : r.width
          var a = t[1].value
            ? t[1].value.getAbsoluteValue(r.height)
            : t[0].value ? n : r.height
          return new i.default(n, a)
        })
        var v = new h(C)
        var H = (e.calculateBackgroungPaintingArea = function A(e, r) {
          switch (r) {
            case U.BORDER_BOX:
              return (0, u.calculateBorderBoxPath)(e)
            case U.PADDING_BOX:
            default:
              return (0, u.calculatePaddingBoxPath)(e)
          }
        })
        var p = (e.calculateBackgroungPositioningArea = function A(e, r, t, n) {
          var a = (0, u.calculatePaddingBox)(r, n)
          switch (e) {
            case d.BORDER_BOX:
              return r
            case d.CONTENT_BOX:
              var B = t[c.PADDING_SIDES.LEFT].getAbsoluteValue(r.width)
              var s = t[c.PADDING_SIDES.RIGHT].getAbsoluteValue(r.width)
              var i = t[c.PADDING_SIDES.TOP].getAbsoluteValue(r.width)
              var o = t[c.PADDING_SIDES.BOTTOM].getAbsoluteValue(r.width)
              return new u.Bounds(
                a.left + B,
                a.top + i,
                a.width - B - s,
                a.height - i - o
              )
            case d.PADDING_BOX:
            default:
              return a
          }
        })
        var N = (e.calculateBackgroundPosition = function A(e, r, t) {
          return new l.default(
            e[0].getAbsoluteValue(t.width - r.width),
            e[1].getAbsoluteValue(t.height - r.height)
          )
        })
        var I = (e.calculateBackgroundRepeatPath = function A(e, r, t, n, a) {
          var B = e.repeat
          switch (B) {
            case g.REPEAT_X:
              return [
                new l.default(Math.round(a.left), Math.round(n.top + r.y)),
                new l.default(
                  Math.round(a.left + a.width),
                  Math.round(n.top + r.y)
                ),
                new l.default(
                  Math.round(a.left + a.width),
                  Math.round(t.height + n.top + r.y)
                ),
                new l.default(
                  Math.round(a.left),
                  Math.round(t.height + n.top + r.y)
                )
              ]
            case g.REPEAT_Y:
              return [
                new l.default(Math.round(n.left + r.x), Math.round(a.top)),
                new l.default(
                  Math.round(n.left + r.x + t.width),
                  Math.round(a.top)
                ),
                new l.default(
                  Math.round(n.left + r.x + t.width),
                  Math.round(a.height + a.top)
                ),
                new l.default(
                  Math.round(n.left + r.x),
                  Math.round(a.height + a.top)
                )
              ]
            case g.NO_REPEAT:
              return [
                new l.default(
                  Math.round(n.left + r.x),
                  Math.round(n.top + r.y)
                ),
                new l.default(
                  Math.round(n.left + r.x + t.width),
                  Math.round(n.top + r.y)
                ),
                new l.default(
                  Math.round(n.left + r.x + t.width),
                  Math.round(n.top + r.y + t.height)
                ),
                new l.default(
                  Math.round(n.left + r.x),
                  Math.round(n.top + r.y + t.height)
                )
              ]
            default:
              return [
                new l.default(Math.round(a.left), Math.round(a.top)),
                new l.default(Math.round(a.left + a.width), Math.round(a.top)),
                new l.default(
                  Math.round(a.left + a.width),
                  Math.round(a.height + a.top)
                ),
                new l.default(Math.round(a.left), Math.round(a.height + a.top))
              ]
          }
        })
        var m = (e.parseBackground = function A(e, r) {
          return {
            backgroundColor: new n.default(e.backgroundColor),
            backgroundImage: y(e, r),
            backgroundClip: T(e.backgroundClip),
            backgroundOrigin: K(e.backgroundOrigin)
          }
        })
        var T = function A(e) {
          switch (e) {
            case 'padding-box':
              return U.PADDING_BOX
            case 'content-box':
              return U.CONTENT_BOX
          }
          return U.BORDER_BOX
        }
        var K = function A(e) {
          switch (e) {
            case 'padding-box':
              return d.PADDING_BOX
            case 'content-box':
              return d.CONTENT_BOX
          }
          return d.BORDER_BOX
        }
        var b = function A(e) {
          switch (e.trim()) {
            case 'no-repeat':
              return g.NO_REPEAT
            case 'repeat-x':
            case 'repeat no-repeat':
              return g.REPEAT_X
            case 'repeat-y':
            case 'no-repeat repeat':
              return g.REPEAT_Y
            case 'repeat':
              return g.REPEAT
          }
          if (false)
            console.error('Invalid background-repeat value "' + e + '"')
          return g.REPEAT
        }
        var y = function A(e, r) {
          var t = S(e.backgroundImage).map(function(A) {
            if ('url' === A.method) {
              var e = r.loadImage(A.args[0])
              A.args = e ? [e] : []
            }
            return A
          })
          var n = e.backgroundPosition.split(',')
          var a = e.backgroundRepeat.split(',')
          var B = e.backgroundSize.split(',')
          return t.map(function(A, e) {
            var r = (B[e] || C)
              .trim()
              .split(' ')
              .map(L)
            var t = (n[e] || C)
              .trim()
              .split(' ')
              .map(_)
            return {
              source: A,
              repeat: b('string' === typeof a[e] ? a[e] : a[0]),
              size: r.length < 2 ? [r[0], v] : [r[0], r[1]],
              position: t.length < 2 ? [t[0], t[0]] : [t[0], t[1]]
            }
          })
        }
        var L = function A(e) {
          return 'auto' === e ? v : new h(e)
        }
        var _ = function A(e) {
          switch (e) {
            case 'bottom':
            case 'right':
              return new B.default('100%')
            case 'left':
            case 'top':
              return new B.default('0%')
            case 'auto':
              return new B.default('0')
          }
          return new B.default(e)
        }
        var S = (e.parseBackgroundImage = function A(e) {
          var r = /^\s$/
          var t = []
          var n = []
          var a = ''
          var B = null
          var s = ''
          var i = 0
          var o = 0
          var l = function A() {
            var e = ''
            if (a) {
              if ('"' === s.substr(0, 1)) s = s.substr(1, s.length - 2)
              if (s) n.push(s.trim())
              var r = a.indexOf('-', 1) + 1
              if ('-' === a.substr(0, 1) && r > 0) {
                e = a.substr(0, r).toLowerCase()
                a = a.substr(r)
              }
              a = a.toLowerCase()
              if ('none' !== a) t.push({ prefix: e, method: a, args: n })
            }
            n = []
            a = s = ''
          }
          e.split('').forEach(function(A) {
            if (0 === i && r.test(A)) return
            switch (A) {
              case '"':
                if (!B) B = A
                else if (B === A) B = null
                break
              case '(':
                if (B) break
                else if (0 === i) {
                  i = 1
                  return
                } else o++
                break
              case ')':
                if (B) break
                else if (1 === i)
                  if (0 === o) {
                    i = 0
                    l()
                    return
                  } else o--
                break
              case ',':
                if (B) break
                else if (0 === i) {
                  l()
                  return
                } else if (1 === i)
                  if (0 === o && !a.match(/^url$/i)) {
                    n.push(s.trim())
                    s = ''
                    return
                  }
                break
            }
            if (0 === i) a += A
            else s += A
          })
          l()
          return t
        })
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.PATH = { VECTOR: 0, BEZIER_CURVE: 1, CIRCLE: 2 })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = r(57)
        function n(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = function A(e, r) {
          n(this, A)
          this.type = t.PATH.VECTOR
          this.x = e
          this.y = r
          if (false) {
            if (isNaN(e)) console.error('Invalid x value given for Vector')
            if (isNaN(r)) console.error('Invalid y value given for Vector')
          }
        }
        e.default = a
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0
        var t = r(43)
        var n = (e.LIST_STYLE_POSITION = { INSIDE: 0, OUTSIDE: 1 })
        var a = (e.LIST_STYLE_TYPE = {
          NONE: -1,
          DISC: 0,
          CIRCLE: 1,
          SQUARE: 2,
          DECIMAL: 3,
          CJK_DECIMAL: 4,
          DECIMAL_LEADING_ZERO: 5,
          LOWER_ROMAN: 6,
          UPPER_ROMAN: 7,
          LOWER_GREEK: 8,
          LOWER_ALPHA: 9,
          UPPER_ALPHA: 10,
          ARABIC_INDIC: 11,
          ARMENIAN: 12,
          BENGALI: 13,
          CAMBODIAN: 14,
          CJK_EARTHLY_BRANCH: 15,
          CJK_HEAVENLY_STEM: 16,
          CJK_IDEOGRAPHIC: 17,
          DEVANAGARI: 18,
          ETHIOPIC_NUMERIC: 19,
          GEORGIAN: 20,
          GUJARATI: 21,
          GURMUKHI: 22,
          HEBREW: 22,
          HIRAGANA: 23,
          HIRAGANA_IROHA: 24,
          JAPANESE_FORMAL: 25,
          JAPANESE_INFORMAL: 26,
          KANNADA: 27,
          KATAKANA: 28,
          KATAKANA_IROHA: 29,
          KHMER: 30,
          KOREAN_HANGUL_FORMAL: 31,
          KOREAN_HANJA_FORMAL: 32,
          KOREAN_HANJA_INFORMAL: 33,
          LAO: 34,
          LOWER_ARMENIAN: 35,
          MALAYALAM: 36,
          MONGOLIAN: 37,
          MYANMAR: 38,
          ORIYA: 39,
          PERSIAN: 40,
          SIMP_CHINESE_FORMAL: 41,
          SIMP_CHINESE_INFORMAL: 42,
          TAMIL: 43,
          TELUGU: 44,
          THAI: 45,
          TIBETAN: 46,
          TRAD_CHINESE_FORMAL: 47,
          TRAD_CHINESE_INFORMAL: 48,
          UPPER_ARMENIAN: 49,
          DISCLOSURE_OPEN: 50,
          DISCLOSURE_CLOSED: 51
        })
        var B = (e.parseListStyleType = function A(e) {
          switch (e) {
            case 'disc':
              return a.DISC
            case 'circle':
              return a.CIRCLE
            case 'square':
              return a.SQUARE
            case 'decimal':
              return a.DECIMAL
            case 'cjk-decimal':
              return a.CJK_DECIMAL
            case 'decimal-leading-zero':
              return a.DECIMAL_LEADING_ZERO
            case 'lower-roman':
              return a.LOWER_ROMAN
            case 'upper-roman':
              return a.UPPER_ROMAN
            case 'lower-greek':
              return a.LOWER_GREEK
            case 'lower-alpha':
              return a.LOWER_ALPHA
            case 'upper-alpha':
              return a.UPPER_ALPHA
            case 'arabic-indic':
              return a.ARABIC_INDIC
            case 'armenian':
              return a.ARMENIAN
            case 'bengali':
              return a.BENGALI
            case 'cambodian':
              return a.CAMBODIAN
            case 'cjk-earthly-branch':
              return a.CJK_EARTHLY_BRANCH
            case 'cjk-heavenly-stem':
              return a.CJK_HEAVENLY_STEM
            case 'cjk-ideographic':
              return a.CJK_IDEOGRAPHIC
            case 'devanagari':
              return a.DEVANAGARI
            case 'ethiopic-numeric':
              return a.ETHIOPIC_NUMERIC
            case 'georgian':
              return a.GEORGIAN
            case 'gujarati':
              return a.GUJARATI
            case 'gurmukhi':
              return a.GURMUKHI
            case 'hebrew':
              return a.HEBREW
            case 'hiragana':
              return a.HIRAGANA
            case 'hiragana-iroha':
              return a.HIRAGANA_IROHA
            case 'japanese-formal':
              return a.JAPANESE_FORMAL
            case 'japanese-informal':
              return a.JAPANESE_INFORMAL
            case 'kannada':
              return a.KANNADA
            case 'katakana':
              return a.KATAKANA
            case 'katakana-iroha':
              return a.KATAKANA_IROHA
            case 'khmer':
              return a.KHMER
            case 'korean-hangul-formal':
              return a.KOREAN_HANGUL_FORMAL
            case 'korean-hanja-formal':
              return a.KOREAN_HANJA_FORMAL
            case 'korean-hanja-informal':
              return a.KOREAN_HANJA_INFORMAL
            case 'lao':
              return a.LAO
            case 'lower-armenian':
              return a.LOWER_ARMENIAN
            case 'malayalam':
              return a.MALAYALAM
            case 'mongolian':
              return a.MONGOLIAN
            case 'myanmar':
              return a.MYANMAR
            case 'oriya':
              return a.ORIYA
            case 'persian':
              return a.PERSIAN
            case 'simp-chinese-formal':
              return a.SIMP_CHINESE_FORMAL
            case 'simp-chinese-informal':
              return a.SIMP_CHINESE_INFORMAL
            case 'tamil':
              return a.TAMIL
            case 'telugu':
              return a.TELUGU
            case 'thai':
              return a.THAI
            case 'tibetan':
              return a.TIBETAN
            case 'trad-chinese-formal':
              return a.TRAD_CHINESE_FORMAL
            case 'trad-chinese-informal':
              return a.TRAD_CHINESE_INFORMAL
            case 'upper-armenian':
              return a.UPPER_ARMENIAN
            case 'disclosure-open':
              return a.DISCLOSURE_OPEN
            case 'disclosure-closed':
              return a.DISCLOSURE_CLOSED
            case 'none':
            default:
              return a.NONE
          }
        })
        var s = (e.parseListStyle = function A(e) {
          var r = (0, t.parseBackgroundImage)(
            e.getPropertyValue('list-style-image')
          )
          return {
            listStyleType: B(e.getPropertyValue('list-style-type')),
            listStyleImage: r.length ? r[0] : null,
            listStylePosition: i(e.getPropertyValue('list-style-position'))
          }
        })
        var i = function A(e) {
          switch (e) {
            case 'inside':
              return n.INSIDE
            case 'outside':
            default:
              return n.OUTSIDE
          }
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(140)
        var a = r(142)
        function B(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var s = (function() {
          function A(e, r, t) {
            B(this, A)
            this.text = e
            this.parent = r
            this.bounds = t
          }
          t(A, null, [
            {
              key: 'fromTextNode',
              value: function e(r, t) {
                var n = o(r.data, t.style.textTransform)
                return new A(n, t, (0, a.parseTextBounds)(n, t, r))
              }
            }
          ])
          return A
        })()
        e.default = s
        var i = /(^|\s|:|-|\(|\))([a-z])/g
        var o = function A(e, r) {
          switch (r) {
            case n.TEXT_TRANSFORM.LOWERCASE:
              return e.toLowerCase()
            case n.TEXT_TRANSFORM.CAPITALIZE:
              return e.replace(i, l)
            case n.TEXT_TRANSFORM.UPPERCASE:
              return e.toUpperCase()
            default:
              return e
          }
        }
        function l(A, e, r) {
          if (A.length > 0) return e + r.toUpperCase()
          return A
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = r(143)
        var n = function A(e) {
          var r = 123
          if (e.createRange) {
            var t = e.createRange()
            if (t.getBoundingClientRect) {
              var n = e.createElement('boundtest')
              n.style.height = r + 'px'
              n.style.display = 'block'
              e.body.appendChild(n)
              t.selectNode(n)
              var a = t.getBoundingClientRect()
              var B = Math.round(a.height)
              e.body.removeChild(n)
              if (B === r) return true
            }
          }
          return false
        }
        var a = function A(e, r) {
          var t = new Image()
          var n = e.createElement('canvas')
          var a = n.getContext('2d')
          return new Promise(function(A) {
            t.src = r
            var e = function e() {
              try {
                a.drawImage(t, 0, 0)
                n.toDataURL()
              } catch (e) {
                return A(false)
              }
              return A(true)
            }
            t.onload = e
            t.onerror = function() {
              return A(false)
            }
            if (true === t.complete)
              setTimeout(function() {
                e()
              }, 500)
          })
        }
        var B = function A() {
          return 'undefined' !== typeof new Image().crossOrigin
        }
        var s = function A() {
          return 'string' === typeof new XMLHttpRequest().responseType
        }
        var i = function A(e) {
          var r = new Image()
          var t = e.createElement('canvas')
          var n = t.getContext('2d')
          r.src =
            "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>"
          try {
            n.drawImage(r, 0, 0)
            t.toDataURL()
          } catch (A) {
            return false
          }
          return true
        }
        var o = function A(e) {
          return 0 === e[0] && 255 === e[1] && 0 === e[2] && 255 === e[3]
        }
        var l = function A(e) {
          var r = e.createElement('canvas')
          var n = 100
          r.width = n
          r.height = n
          var a = r.getContext('2d')
          a.fillStyle = 'rgb(0, 255, 0)'
          a.fillRect(0, 0, n, n)
          var B = new Image()
          var s = r.toDataURL()
          B.src = s
          var i = (0, t.createForeignObjectSVG)(n, n, 0, 0, B)
          a.fillStyle = 'red'
          a.fillRect(0, 0, n, n)
          return (0, t.loadSerializedSVG)(i)
            .then(function(A) {
              a.drawImage(A, 0, 0)
              var r = a.getImageData(0, 0, n, n).data
              a.fillStyle = 'red'
              a.fillRect(0, 0, n, n)
              var B = e.createElement('div')
              B.style.backgroundImage = 'url(' + s + ')'
              B.style.height = n + 'px'
              return o(r)
                ? (0, t.loadSerializedSVG)(
                    (0, t.createForeignObjectSVG)(n, n, 0, 0, B)
                  )
                : Promise.reject(false)
            })
            .then(function(A) {
              a.drawImage(A, 0, 0)
              return o(a.getImageData(0, 0, n, n).data)
            })
            .catch(function(A) {
              return false
            })
        }
        var u = {
          get SUPPORT_RANGE_BOUNDS() {
            var A = n(document)
            Object.defineProperty(u, 'SUPPORT_RANGE_BOUNDS', { value: A })
            return A
          },
          get SUPPORT_SVG_DRAWING() {
            var A = i(document)
            Object.defineProperty(u, 'SUPPORT_SVG_DRAWING', { value: A })
            return A
          },
          get SUPPORT_BASE64_DRAWING() {
            return function(A) {
              var e = a(document, A)
              Object.defineProperty(u, 'SUPPORT_BASE64_DRAWING', {
                value: function A() {
                  return e
                }
              })
              return e
            }
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var A =
              'function' === typeof Array.from &&
              'function' === typeof window.fetch
                ? l(document)
                : Promise.resolve(false)
            Object.defineProperty(u, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
              value: A
            })
            return A
          },
          get SUPPORT_CORS_IMAGES() {
            var A = B()
            Object.defineProperty(u, 'SUPPORT_CORS_IMAGES', { value: A })
            return A
          },
          get SUPPORT_RESPONSE_TYPE() {
            var A = s()
            Object.defineProperty(u, 'SUPPORT_RESPONSE_TYPE', { value: A })
            return A
          },
          get SUPPORT_CORS_XHR() {
            var A = 'withCredentials' in new XMLHttpRequest()
            Object.defineProperty(u, 'SUPPORT_CORS_XHR', { value: A })
            return A
          }
        }
        e.default = u
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0
        var t = r(16)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = (e.TEXT_DECORATION_STYLE = {
          SOLID: 0,
          DOUBLE: 1,
          DOTTED: 2,
          DASHED: 3,
          WAVY: 4
        })
        var s = (e.TEXT_DECORATION = { NONE: null })
        var i = (e.TEXT_DECORATION_LINE = {
          UNDERLINE: 1,
          OVERLINE: 2,
          LINE_THROUGH: 3,
          BLINK: 4
        })
        var o = function A(e) {
          switch (e) {
            case 'underline':
              return i.UNDERLINE
            case 'overline':
              return i.OVERLINE
            case 'line-through':
              return i.LINE_THROUGH
          }
          return i.BLINK
        }
        var l = function A(e) {
          if ('none' === e) return null
          return e.split(' ').map(o)
        }
        var u = function A(e) {
          switch (e) {
            case 'double':
              return B.DOUBLE
            case 'dotted':
              return B.DOTTED
            case 'dashed':
              return B.DASHED
            case 'wavy':
              return B.WAVY
          }
          return B.SOLID
        }
        var c = (e.parseTextDecoration = function A(e) {
          var r = l(
            e.textDecorationLine ? e.textDecorationLine : e.textDecoration
          )
          if (null === r) return s.NONE
          var t = e.textDecorationColor
            ? new n.default(e.textDecorationColor)
            : null
          var a = u(e.textDecorationStyle)
          return {
            textDecorationLine: r,
            textDecorationColor: t,
            textDecorationStyle: a
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0
        var t = r(16)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = (e.BORDER_STYLE = { NONE: 0, SOLID: 1 })
        var s = (e.BORDER_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 })
        var i = Object.keys(s).map(function(A) {
          return A.toLowerCase()
        })
        var o = function A(e) {
          switch (e) {
            case 'none':
              return B.NONE
          }
          return B.SOLID
        }
        var l = (e.parseBorder = function A(e) {
          return i.map(function(A) {
            var r = new n.default(e.getPropertyValue('border-' + A + '-color'))
            var t = o(e.getPropertyValue('border-' + A + '-style'))
            var a = parseFloat(e.getPropertyValue('border-' + A + '-width'))
            return {
              borderColor: r,
              borderStyle: t,
              borderWidth: isNaN(a) ? 0 : a
            }
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.toCodePoints = function A(e) {
          var r = []
          var t = 0
          var n = e.length
          while (t < n) {
            var a = e.charCodeAt(t++)
            if (a >= 55296 && a <= 56319 && t < n) {
              var B = e.charCodeAt(t++)
              if (56320 === (64512 & B))
                r.push(((1023 & a) << 10) + (1023 & B) + 65536)
              else {
                r.push(a)
                t--
              }
            } else r.push(a)
          }
          return r
        })
        var n = (e.fromCodePoint = function A() {
          if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, arguments)
          var e = arguments.length
          if (!e) return ''
          var r = []
          var t = -1
          var n = ''
          while (++t < e) {
            var a = arguments.length <= t ? void 0 : arguments[t]
            if (a <= 65535) r.push(a)
            else {
              a -= 65536
              r.push((a >> 10) + 55296, a % 1024 + 56320)
            }
            if (t + 1 === e || r.length > 16384) {
              n += String.fromCharCode.apply(String, r)
              r.length = 0
            }
          }
          return n
        })
        var a =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        var B = 'undefined' === typeof Uint8Array ? [] : new Uint8Array(256)
        for (var s = 0; s < a.length; s++) B[a.charCodeAt(s)] = s
        var i = (e.decode = function A(e) {
          var r = 0.75 * e.length,
            t = e.length,
            n = void 0,
            a = 0,
            s = void 0,
            i = void 0,
            o = void 0,
            l = void 0
          if ('=' === e[e.length - 1]) {
            r--
            if ('=' === e[e.length - 2]) r--
          }
          var u =
            'undefined' !== typeof ArrayBuffer &&
            'undefined' !== typeof Uint8Array &&
            'undefined' !== typeof Uint8Array.prototype.slice
              ? new ArrayBuffer(r)
              : new Array(r)
          var c = Array.isArray(u) ? u : new Uint8Array(u)
          for (n = 0; n < t; n += 4) {
            s = B[e.charCodeAt(n)]
            i = B[e.charCodeAt(n + 1)]
            o = B[e.charCodeAt(n + 2)]
            l = B[e.charCodeAt(n + 3)]
            c[a++] = (s << 2) | (i >> 4)
            c[a++] = ((15 & i) << 4) | (o >> 2)
            c[a++] = ((3 & o) << 6) | (63 & l)
          }
          return u
        })
        var o = (e.polyUint16Array = function A(e) {
          var r = e.length
          var t = []
          for (var n = 0; n < r; n += 2) t.push((e[n + 1] << 8) | e[n])
          return t
        })
        var l = (e.polyUint32Array = function A(e) {
          var r = e.length
          var t = []
          for (var n = 0; n < r; n += 4)
            t.push((e[n + 3] << 24) | (e[n + 2] << 16) | (e[n + 1] << 8) | e[n])
          return t
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0
        var t = r(31)
        var n = r(30)
        var a = l(n)
        var B = r(60)
        var s = l(B)
        var i = r(59)
        var o = r(144)
        function l(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var u = 7
        var c = ['OL', 'UL', 'MENU']
        var Q = (e.getListOwner = function A(e) {
          var r = e.parent
          if (!r) return null
          do {
            var t = -1 !== c.indexOf(r.tagName)
            if (t) return r
            r = r.parent
          } while (r)
          return e.parent
        })
        var w = (e.inlineListItemElement = function A(e, r, n) {
          var B = r.style.listStyle
          if (!B) return
          var o = e.ownerDocument.defaultView.getComputedStyle(e, null)
          var l = e.ownerDocument.createElement('html2canvaswrapper')
          ;(0, t.copyCSSStyles)(o, l)
          l.style.position = 'absolute'
          l.style.bottom = 'auto'
          l.style.display = 'block'
          l.style.letterSpacing = 'normal'
          switch (B.listStylePosition) {
            case i.LIST_STYLE_POSITION.OUTSIDE:
              l.style.left = 'auto'
              l.style.right =
                e.ownerDocument.defaultView.innerWidth -
                r.bounds.left -
                r.style.margin[1].getAbsoluteValue(r.bounds.width) +
                u +
                'px'
              l.style.textAlign = 'right'
              break
            case i.LIST_STYLE_POSITION.INSIDE:
              l.style.left =
                r.bounds.left -
                r.style.margin[3].getAbsoluteValue(r.bounds.width) +
                'px'
              l.style.right = 'auto'
              l.style.textAlign = 'left'
              break
          }
          var c = void 0
          var Q = r.style.margin[0].getAbsoluteValue(r.bounds.width)
          var w = B.listStyleImage
          if (w)
            if ('url' === w.method) {
              var g = e.ownerDocument.createElement('img')
              g.src = w.args[0]
              l.style.top = r.bounds.top - Q + 'px'
              l.style.width = 'auto'
              l.style.height = 'auto'
              l.appendChild(g)
            } else {
              var f = 0.5 * parseFloat(r.style.font.fontSize)
              l.style.top = r.bounds.top - Q + r.bounds.height - 1.5 * f + 'px'
              l.style.width = f + 'px'
              l.style.height = f + 'px'
              l.style.backgroundImage = o.listStyleImage
            }
          else if ('number' === typeof r.listIndex) {
            c = e.ownerDocument.createTextNode(
              y(r.listIndex, B.listStyleType, true)
            )
            l.appendChild(c)
            l.style.top = r.bounds.top - Q + 'px'
          }
          var U = e.ownerDocument.body
          U.appendChild(l)
          if (c) {
            r.childNodes.push(s.default.fromTextNode(c, r))
            U.removeChild(l)
          } else r.childNodes.push(new a.default(l, r, n, 0))
        })
        var g = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: [
            'M',
            'CM',
            'D',
            'CD',
            'C',
            'XC',
            'L',
            'XL',
            'X',
            'IX',
            'V',
            'IV',
            'I'
          ]
        }
        var f = {
          integers: [
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            'Ք',
            'Փ',
            'Ւ',
            'Ց',
            'Ր',
            'Տ',
            'Վ',
            'Ս',
            'Ռ',
            'Ջ',
            'Պ',
            'Չ',
            'Ո',
            'Շ',
            'Ն',
            'Յ',
            'Մ',
            'Ճ',
            'Ղ',
            'Ձ',
            'Հ',
            'Կ',
            'Ծ',
            'Խ',
            'Լ',
            'Ի',
            'Ժ',
            'Թ',
            'Ը',
            'Է',
            'Զ',
            'Ե',
            'Դ',
            'Գ',
            'Բ',
            'Ա'
          ]
        }
        var U = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            19,
            18,
            17,
            16,
            15,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            'י׳',
            'ט׳',
            'ח׳',
            'ז׳',
            'ו׳',
            'ה׳',
            'ד׳',
            'ג׳',
            'ב׳',
            'א׳',
            'ת',
            'ש',
            'ר',
            'ק',
            'צ',
            'פ',
            'ע',
            'ס',
            'נ',
            'מ',
            'ל',
            'כ',
            'יט',
            'יח',
            'יז',
            'טז',
            'טו',
            'י',
            'ט',
            'ח',
            'ז',
            'ו',
            'ה',
            'ד',
            'ג',
            'ב',
            'א'
          ]
        }
        var d = {
          integers: [
            1e4,
            9e3,
            8e3,
            7e3,
            6e3,
            5e3,
            4e3,
            3e3,
            2e3,
            1e3,
            900,
            800,
            700,
            600,
            500,
            400,
            300,
            200,
            100,
            90,
            80,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1
          ],
          values: [
            'ჵ',
            'ჰ',
            'ჯ',
            'ჴ',
            'ხ',
            'ჭ',
            'წ',
            'ძ',
            'ც',
            'ჩ',
            'შ',
            'ყ',
            'ღ',
            'ქ',
            'ფ',
            'ჳ',
            'ტ',
            'ს',
            'რ',
            'ჟ',
            'პ',
            'ო',
            'ჲ',
            'ნ',
            'მ',
            'ლ',
            'კ',
            'ი',
            'თ',
            'ჱ',
            'ზ',
            'ვ',
            'ე',
            'დ',
            'გ',
            'ბ',
            'ა'
          ]
        }
        var C = function A(e, r, t, n, a, B) {
          if (e < r || e > t) return y(e, a, B.length > 0)
          return (
            n.integers.reduce(function(A, r, t) {
              while (e >= r) {
                e -= r
                A += n.values[t]
              }
              return A
            }, '') + B
          )
        }
        var h = function A(e, r, t, n) {
          var a = ''
          do {
            if (!t) e--
            a = n(e) + a
            e /= r
          } while (e * r >= r)
          return a
        }
        var F = function A(e, r, t, n, a) {
          var B = t - r + 1
          return (
            (e < 0 ? '-' : '') +
            (h(Math.abs(e), B, n, function(A) {
              return (0, o.fromCodePoint)(Math.floor(A % B) + r)
            }) +
              a)
          )
        }
        var E = function A(e, r) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : '. '
          var n = r.length
          return (
            h(Math.abs(e), n, false, function(A) {
              return r[Math.floor(A % n)]
            }) + t
          )
        }
        var v = 1 << 0
        var H = 1 << 1
        var p = 1 << 2
        var N = 1 << 3
        var I = function A(e, r, n, a, B, s) {
          if (e < -9999 || e > 9999)
            return y(e, i.LIST_STYLE_TYPE.CJK_DECIMAL, B.length > 0)
          var o = Math.abs(e)
          var l = B
          if (0 === o) return r[0] + l
          for (var u = 0; o > 0 && u <= 4; u++) {
            var c = o % 10
            if (0 === c && (0, t.contains)(s, v) && '' !== l) l = r[c] + l
            else if (
              c > 1 ||
              (1 === c && 0 === u) ||
              (1 === c && 1 === u && (0, t.contains)(s, H)) ||
              (1 === c && 1 === u && (0, t.contains)(s, p) && e > 100) ||
              (1 === c && u > 1 && (0, t.contains)(s, N))
            )
              l = r[c] + (u > 0 ? n[u - 1] : '') + l
            else if (1 === c && u > 0) l = n[u - 1] + l
            o = Math.floor(o / 10)
          }
          return (e < 0 ? a : '') + l
        }
        var m = '十百千萬'
        var T = '拾佰仟萬'
        var K = 'マイナス'
        var b = '마이너스 '
        var y = (e.createCounterText = function A(e, r, t) {
          var n = t ? '. ' : ''
          var a = t ? '、' : ''
          var B = t ? ', ' : ''
          switch (r) {
            case i.LIST_STYLE_TYPE.DISC:
              return '•'
            case i.LIST_STYLE_TYPE.CIRCLE:
              return '◦'
            case i.LIST_STYLE_TYPE.SQUARE:
              return '◾'
            case i.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
              var s = F(e, 48, 57, true, n)
              return s.length < 4 ? '0' + s : s
            case i.LIST_STYLE_TYPE.CJK_DECIMAL:
              return E(e, '〇一二三四五六七八九', a)
            case i.LIST_STYLE_TYPE.LOWER_ROMAN:
              return C(
                e,
                1,
                3999,
                g,
                i.LIST_STYLE_TYPE.DECIMAL,
                n
              ).toLowerCase()
            case i.LIST_STYLE_TYPE.UPPER_ROMAN:
              return C(e, 1, 3999, g, i.LIST_STYLE_TYPE.DECIMAL, n)
            case i.LIST_STYLE_TYPE.LOWER_GREEK:
              return F(e, 945, 969, false, n)
            case i.LIST_STYLE_TYPE.LOWER_ALPHA:
              return F(e, 97, 122, false, n)
            case i.LIST_STYLE_TYPE.UPPER_ALPHA:
              return F(e, 65, 90, false, n)
            case i.LIST_STYLE_TYPE.ARABIC_INDIC:
              return F(e, 1632, 1641, true, n)
            case i.LIST_STYLE_TYPE.ARMENIAN:
            case i.LIST_STYLE_TYPE.UPPER_ARMENIAN:
              return C(e, 1, 9999, f, i.LIST_STYLE_TYPE.DECIMAL, n)
            case i.LIST_STYLE_TYPE.LOWER_ARMENIAN:
              return C(
                e,
                1,
                9999,
                f,
                i.LIST_STYLE_TYPE.DECIMAL,
                n
              ).toLowerCase()
            case i.LIST_STYLE_TYPE.BENGALI:
              return F(e, 2534, 2543, true, n)
            case i.LIST_STYLE_TYPE.CAMBODIAN:
            case i.LIST_STYLE_TYPE.KHMER:
              return F(e, 6112, 6121, true, n)
            case i.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
              return E(e, '子丑寅卯辰巳午未申酉戌亥', a)
            case i.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
              return E(e, '甲乙丙丁戊己庚辛壬癸', a)
            case i.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
            case i.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
              return I(e, '零一二三四五六七八九', m, '負', a, H | p | N)
            case i.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
              return I(e, '零壹貳參肆伍陸柒捌玖', T, '負', a, v | H | p | N)
            case i.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
              return I(e, '零一二三四五六七八九', m, '负', a, H | p | N)
            case i.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
              return I(e, '零壹贰叁肆伍陆柒捌玖', T, '负', a, v | H | p | N)
            case i.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
              return I(e, '〇一二三四五六七八九', '十百千万', K, a, 0)
            case i.LIST_STYLE_TYPE.JAPANESE_FORMAL:
              return I(e, '零壱弐参四伍六七八九', '拾百千万', K, a, v | H | p)
            case i.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
              return I(e, '영일이삼사오육칠팔구', '십백천만', b, B, v | H | p)
            case i.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
              return I(e, '零一二三四五六七八九', '十百千萬', b, B, 0)
            case i.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
              return I(e, '零壹貳參四五六七八九', '拾百千', b, B, v | H | p)
            case i.LIST_STYLE_TYPE.DEVANAGARI:
              return F(e, 2406, 2415, true, n)
            case i.LIST_STYLE_TYPE.GEORGIAN:
              return C(e, 1, 19999, d, i.LIST_STYLE_TYPE.DECIMAL, n)
            case i.LIST_STYLE_TYPE.GUJARATI:
              return F(e, 2790, 2799, true, n)
            case i.LIST_STYLE_TYPE.GURMUKHI:
              return F(e, 2662, 2671, true, n)
            case i.LIST_STYLE_TYPE.HEBREW:
              return C(e, 1, 10999, U, i.LIST_STYLE_TYPE.DECIMAL, n)
            case i.LIST_STYLE_TYPE.HIRAGANA:
              return E(
                e,
                'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん'
              )
            case i.LIST_STYLE_TYPE.HIRAGANA_IROHA:
              return E(
                e,
                'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす'
              )
            case i.LIST_STYLE_TYPE.KANNADA:
              return F(e, 3302, 3311, true, n)
            case i.LIST_STYLE_TYPE.KATAKANA:
              return E(
                e,
                'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン',
                a
              )
            case i.LIST_STYLE_TYPE.KATAKANA_IROHA:
              return E(
                e,
                'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス',
                a
              )
            case i.LIST_STYLE_TYPE.LAO:
              return F(e, 3792, 3801, true, n)
            case i.LIST_STYLE_TYPE.MONGOLIAN:
              return F(e, 6160, 6169, true, n)
            case i.LIST_STYLE_TYPE.MYANMAR:
              return F(e, 4160, 4169, true, n)
            case i.LIST_STYLE_TYPE.ORIYA:
              return F(e, 2918, 2927, true, n)
            case i.LIST_STYLE_TYPE.PERSIAN:
              return F(e, 1776, 1785, true, n)
            case i.LIST_STYLE_TYPE.TAMIL:
              return F(e, 3046, 3055, true, n)
            case i.LIST_STYLE_TYPE.TELUGU:
              return F(e, 3174, 3183, true, n)
            case i.LIST_STYLE_TYPE.THAI:
              return F(e, 3664, 3673, true, n)
            case i.LIST_STYLE_TYPE.TIBETAN:
              return F(e, 3872, 3881, true, n)
            case i.LIST_STYLE_TYPE.DECIMAL:
            default:
              return F(e, 48, 57, true, n)
          }
        })
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e) {
        A.exports = {
          MODE_NUMBER: 1 << 0,
          MODE_ALPHA_NUM: 1 << 1,
          MODE_8BIT_BYTE: 1 << 2,
          MODE_KANJI: 1 << 3
        }
      },
      function(A, e) {
        A.exports = { L: 1, M: 0, Q: 3, H: 2 }
      },
      function(A, e, r) {
        var t = r(134)
        function n(A, e) {
          if (void 0 == A.length) throw new Error(A.length + '/' + e)
          var r = 0
          while (r < A.length && 0 == A[r]) r++
          this.num = new Array(A.length - r + e)
          for (var t = 0; t < A.length - r; t++) this.num[t] = A[t + r]
        }
        n.prototype = {
          get: function(A) {
            return this.num[A]
          },
          getLength: function() {
            return this.num.length
          },
          multiply: function(A) {
            var e = new Array(this.getLength() + A.getLength() - 1)
            for (var r = 0; r < this.getLength(); r++)
              for (var a = 0; a < A.getLength(); a++)
                e[r + a] ^= t.gexp(t.glog(this.get(r)) + t.glog(A.get(a)))
            return new n(e, 0)
          },
          mod: function(A) {
            if (this.getLength() - A.getLength() < 0) return this
            var e = t.glog(this.get(0)) - t.glog(A.get(0))
            var r = new Array(this.getLength())
            for (var a = 0; a < this.getLength(); a++) r[a] = this.get(a)
            for (var a = 0; a < A.getLength(); a++)
              r[a] ^= t.gexp(t.glog(A.get(a)) + e)
            return new n(r, 0).mod(A)
          }
        }
        A.exports = n
      },
      function(A, e) {
        var r = {
          glog: function(A) {
            if (A < 1) throw new Error('glog(' + A + ')')
            return r.LOG_TABLE[A]
          },
          gexp: function(A) {
            while (A < 0) A += 255
            while (A >= 256) A -= 255
            return r.EXP_TABLE[A]
          },
          EXP_TABLE: new Array(256),
          LOG_TABLE: new Array(256)
        }
        for (var t = 0; t < 8; t++) r.EXP_TABLE[t] = 1 << t
        for (var t = 8; t < 256; t++)
          r.EXP_TABLE[t] =
            r.EXP_TABLE[t - 4] ^
            r.EXP_TABLE[t - 5] ^
            r.EXP_TABLE[t - 6] ^
            r.EXP_TABLE[t - 8]
        for (var t = 0; t < 255; t++) r.LOG_TABLE[r.EXP_TABLE[t]] = t
        A.exports = r
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(57)
        var a = r(87)
        function B(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var s = function A(e, r) {
          var t = Math.max.apply(
            null,
            e.colorStops.map(function(A) {
              return A.stop
            })
          )
          var n = 1 / Math.max(1, t)
          e.colorStops.forEach(function(A) {
            r.addColorStop(n * A.stop, A.color.toString())
          })
        }
        var i = (function() {
          function A(e) {
            B(this, A)
            this.canvas = e ? e : document.createElement('canvas')
          }
          t(A, [
            {
              key: 'render',
              value: function A(e) {
                this.ctx = this.canvas.getContext('2d')
                this.options = e
                this.canvas.width = Math.floor(e.width * e.scale)
                this.canvas.height = Math.floor(e.height * e.scale)
                this.canvas.style.width = e.width + 'px'
                this.canvas.style.height = e.height + 'px'
                this.ctx.scale(this.options.scale, this.options.scale)
                this.ctx.translate(-e.x, -e.y)
                this.ctx.textBaseline = 'bottom'
                e.logger.log(
                  'Canvas renderer initialized (' +
                    e.width +
                    'x' +
                    e.height +
                    ' at ' +
                    e.x +
                    ',' +
                    e.y +
                    ') with scale ' +
                    this.options.scale
                )
              }
            },
            {
              key: 'clip',
              value: function A(e, r) {
                var t = this
                if (e.length) {
                  this.ctx.save()
                  e.forEach(function(A) {
                    t.path(A)
                    t.ctx.clip()
                  })
                }
                r()
                if (e.length) this.ctx.restore()
              }
            },
            {
              key: 'drawImage',
              value: function A(e, r, t) {
                this.ctx.drawImage(
                  e,
                  r.left,
                  r.top,
                  r.width,
                  r.height,
                  t.left,
                  t.top,
                  t.width,
                  t.height
                )
              }
            },
            {
              key: 'drawShape',
              value: function A(e, r) {
                this.path(e)
                this.ctx.fillStyle = r.toString()
                this.ctx.fill()
              }
            },
            {
              key: 'fill',
              value: function A(e) {
                this.ctx.fillStyle = e.toString()
                this.ctx.fill()
              }
            },
            {
              key: 'getTarget',
              value: function A() {
                return Promise.resolve(this.canvas)
              }
            },
            {
              key: 'path',
              value: function A(e) {
                var r = this
                this.ctx.beginPath()
                if (Array.isArray(e))
                  e.forEach(function(A, e) {
                    var t = A.type === n.PATH.VECTOR ? A : A.start
                    if (0 === e) r.ctx.moveTo(t.x, t.y)
                    else r.ctx.lineTo(t.x, t.y)
                    if (A.type === n.PATH.BEZIER_CURVE)
                      r.ctx.bezierCurveTo(
                        A.startControl.x,
                        A.startControl.y,
                        A.endControl.x,
                        A.endControl.y,
                        A.end.x,
                        A.end.y
                      )
                  })
                else
                  this.ctx.arc(
                    e.x + e.radius,
                    e.y + e.radius,
                    e.radius,
                    0,
                    2 * Math.PI,
                    true
                  )
                this.ctx.closePath()
              }
            },
            {
              key: 'rectangle',
              value: function A(e, r, t, n, a) {
                this.ctx.fillStyle = a.toString()
                this.ctx.fillRect(e, r, t, n)
              }
            },
            {
              key: 'renderLinearGradient',
              value: function A(e, r) {
                var t = this.ctx.createLinearGradient(
                  e.left + r.direction.x1,
                  e.top + r.direction.y1,
                  e.left + r.direction.x0,
                  e.top + r.direction.y0
                )
                s(r, t)
                this.ctx.fillStyle = t
                this.ctx.fillRect(e.left, e.top, e.width, e.height)
              }
            },
            {
              key: 'renderRadialGradient',
              value: function A(e, r) {
                var t = this
                var n = e.left + r.center.x
                var a = e.top + r.center.y
                var B = this.ctx.createRadialGradient(n, a, 0, n, a, r.radius.x)
                if (!B) return
                s(r, B)
                this.ctx.fillStyle = B
                if (r.radius.x !== r.radius.y) {
                  var i = e.left + 0.5 * e.width
                  var o = e.top + 0.5 * e.height
                  var l = r.radius.y / r.radius.x
                  var u = 1 / l
                  this.transform(i, o, [1, 0, 0, l, 0, 0], function() {
                    return t.ctx.fillRect(
                      e.left,
                      u * (e.top - o) + o,
                      e.width,
                      e.height * u
                    )
                  })
                } else this.ctx.fillRect(e.left, e.top, e.width, e.height)
              }
            },
            {
              key: 'renderRepeat',
              value: function A(e, r, t, n, a) {
                this.path(e)
                this.ctx.fillStyle = this.ctx.createPattern(
                  this.resizeImage(r, t),
                  'repeat'
                )
                this.ctx.translate(n, a)
                this.ctx.fill()
                this.ctx.translate(-n, -a)
              }
            },
            {
              key: 'renderTextNode',
              value: function A(e, r, t, n, B) {
                var s = this
                this.ctx.font = [
                  t.fontStyle,
                  t.fontVariant,
                  t.fontWeight,
                  t.fontSize,
                  t.fontFamily
                ].join(' ')
                e.forEach(function(A) {
                  s.ctx.fillStyle = r.toString()
                  if (B && A.text.trim().length)
                    B.slice(0)
                      .reverse()
                      .forEach(function(e) {
                        s.ctx.shadowColor = e.color.toString()
                        s.ctx.shadowOffsetX = e.offsetX * s.options.scale
                        s.ctx.shadowOffsetY = e.offsetY * s.options.scale
                        s.ctx.shadowBlur = e.blur
                        s.ctx.fillText(
                          A.text,
                          A.bounds.left,
                          A.bounds.top + A.bounds.height
                        )
                      })
                  else
                    s.ctx.fillText(
                      A.text,
                      A.bounds.left,
                      A.bounds.top + A.bounds.height
                    )
                  if (null !== n) {
                    var e = n.textDecorationColor || r
                    n.textDecorationLine.forEach(function(r) {
                      switch (r) {
                        case a.TEXT_DECORATION_LINE.UNDERLINE:
                          var n = s.options.fontMetrics.getMetrics(t),
                            B = n.baseline
                          s.rectangle(
                            A.bounds.left,
                            Math.round(A.bounds.top + B),
                            A.bounds.width,
                            1,
                            e
                          )
                          break
                        case a.TEXT_DECORATION_LINE.OVERLINE:
                          s.rectangle(
                            A.bounds.left,
                            Math.round(A.bounds.top),
                            A.bounds.width,
                            1,
                            e
                          )
                          break
                        case a.TEXT_DECORATION_LINE.LINE_THROUGH:
                          var i = s.options.fontMetrics.getMetrics(t),
                            o = i.middle
                          s.rectangle(
                            A.bounds.left,
                            Math.ceil(A.bounds.top + o),
                            A.bounds.width,
                            1,
                            e
                          )
                          break
                      }
                    })
                  }
                })
              }
            },
            {
              key: 'resizeImage',
              value: function A(e, r) {
                if (e.width === r.width && e.height === r.height) return e
                var t = this.canvas.ownerDocument.createElement('canvas')
                t.width = r.width
                t.height = r.height
                var n = t.getContext('2d')
                n.drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height)
                return t
              }
            },
            {
              key: 'setOpacity',
              value: function A(e) {
                this.ctx.globalAlpha = e
              }
            },
            {
              key: 'transform',
              value: function A(e, r, t, n) {
                this.ctx.save()
                this.ctx.translate(e, r)
                this.ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5])
                this.ctx.translate(-e, -r)
                n()
                this.ctx.restore()
              }
            }
          ])
          return A
        })()
        e.default = i
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        function n(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = (function() {
          function A(e, r, t) {
            n(this, A)
            this.enabled = 'undefined' !== typeof window && e
            this.start = t ? t : Date.now()
            this.id = r
          }
          t(A, [
            {
              key: 'child',
              value: function e(r) {
                return new A(this.enabled, r, this.start)
              }
            },
            {
              key: 'log',
              value: function A() {
                if (this.enabled && window.console && window.console.log) {
                  for (
                    var e = arguments.length, r = Array(e), t = 0;
                    t < e;
                    t++
                  )
                    r[t] = arguments[t]
                  Function.prototype.bind
                    .call(window.console.log, window.console)
                    .apply(
                      window.console,
                      [
                        Date.now() - this.start + 'ms',
                        this.id
                          ? 'html2canvas (' + this.id + '):'
                          : 'html2canvas:'
                      ].concat([].slice.call(r, 0))
                    )
                }
              }
            },
            {
              key: 'error',
              value: function A() {
                if (this.enabled && window.console && window.console.error) {
                  for (
                    var e = arguments.length, r = Array(e), t = 0;
                    t < e;
                    t++
                  )
                    r[t] = arguments[t]
                  Function.prototype.bind
                    .call(window.console.error, window.console)
                    .apply(
                      window.console,
                      [
                        Date.now() - this.start + 'ms',
                        this.id
                          ? 'html2canvas (' + this.id + '):'
                          : 'html2canvas:'
                      ].concat([].slice.call(r, 0))
                    )
                }
              }
            }
          ])
          return A
        })()
        e.default = a
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parsePadding = e.PADDING_SIDES = void 0
        var t = r(24)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = (e.PADDING_SIDES = { TOP: 0, RIGHT: 1, BOTTOM: 2, LEFT: 3 })
        var s = ['top', 'right', 'bottom', 'left']
        var i = (e.parsePadding = function A(e) {
          return s.map(function(A) {
            return new n.default(e.getPropertyValue('padding-' + A))
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.OVERFLOW_WRAP = { NORMAL: 0, BREAK_WORD: 1 })
        var n = (e.parseOverflowWrap = function A(e) {
          switch (e) {
            case 'break-word':
              return t.BREAK_WORD
            case 'normal':
            default:
              return t.NORMAL
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.POSITION = {
          STATIC: 0,
          RELATIVE: 1,
          ABSOLUTE: 2,
          FIXED: 3,
          STICKY: 4
        })
        var n = (e.parsePosition = function A(e) {
          switch (e) {
            case 'relative':
              return t.RELATIVE
            case 'absolute':
              return t.ABSOLUTE
            case 'fixed':
              return t.FIXED
            case 'sticky':
              return t.STICKY
          }
          return t.STATIC
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.TEXT_TRANSFORM = {
          NONE: 0,
          LOWERCASE: 1,
          UPPERCASE: 2,
          CAPITALIZE: 3
        })
        var n = (e.parseTextTransform = function A(e) {
          switch (e) {
            case 'uppercase':
              return t.UPPERCASE
            case 'lowercase':
              return t.LOWERCASE
            case 'capitalize':
              return t.CAPITALIZE
          }
          return t.NONE
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.reformatInputBounds = e.inlineSelectElement = e.inlineTextAreaElement = e.inlineInputElement = e.getInputBorderRadius = e.INPUT_BACKGROUND = e.INPUT_BORDERS = e.INPUT_COLOR = void 0
        var t = r(60)
        var n = d(t)
        var a = r(43)
        var B = r(88)
        var s = r(299)
        var i = d(s)
        var o = r(58)
        var l = d(o)
        var u = r(16)
        var c = d(u)
        var Q = r(24)
        var w = d(Q)
        var g = r(17)
        var f = r(142)
        var U = r(31)
        function d(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var C = (e.INPUT_COLOR = new c.default([42, 42, 42]))
        var h = new c.default([165, 165, 165])
        var F = new c.default([222, 222, 222])
        var E = {
          borderWidth: 1,
          borderColor: h,
          borderStyle: B.BORDER_STYLE.SOLID
        }
        var v = (e.INPUT_BORDERS = [E, E, E, E])
        var H = (e.INPUT_BACKGROUND = {
          backgroundColor: F,
          backgroundImage: [],
          backgroundClip: a.BACKGROUND_CLIP.PADDING_BOX,
          backgroundOrigin: a.BACKGROUND_ORIGIN.PADDING_BOX
        })
        var p = new w.default('50%')
        var N = [p, p]
        var I = [N, N, N, N]
        var m = new w.default('3px')
        var T = [m, m]
        var K = [T, T, T, T]
        var b = (e.getInputBorderRadius = function A(e) {
          return 'radio' === e.type ? I : K
        })
        var y = (e.inlineInputElement = function A(e, r) {
          if ('radio' === e.type || 'checkbox' === e.type) {
            if (e.checked) {
              var t = Math.min(r.bounds.width, r.bounds.height)
              r.childNodes.push(
                'checkbox' === e.type
                  ? [
                      new l.default(
                        r.bounds.left + 0.39363 * t,
                        r.bounds.top + 0.79 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.16 * t,
                        r.bounds.top + 0.5549 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.27347 * t,
                        r.bounds.top + 0.44071 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.39694 * t,
                        r.bounds.top + 0.5649 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.72983 * t,
                        r.bounds.top + 0.23 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.84 * t,
                        r.bounds.top + 0.34085 * t
                      ),
                      new l.default(
                        r.bounds.left + 0.39363 * t,
                        r.bounds.top + 0.79 * t
                      )
                    ]
                  : new i.default(
                      r.bounds.left + t / 4,
                      r.bounds.top + t / 4,
                      t / 4
                    )
              )
            }
          } else D(M(e), e, r, false)
        })
        var L = (e.inlineTextAreaElement = function A(e, r) {
          D(e.value, e, r, true)
        })
        var _ = (e.inlineSelectElement = function A(e, r) {
          var t = e.options[e.selectedIndex || 0]
          D(t ? t.text || '' : '', e, r, false)
        })
        var S = (e.reformatInputBounds = function A(e) {
          if (e.width > e.height) {
            e.left += (e.width - e.height) / 2
            e.width = e.height
          } else if (e.width < e.height) {
            e.top += (e.height - e.width) / 2
            e.height = e.width
          }
          return e
        })
        var D = function A(e, r, t, a) {
          var B = r.ownerDocument.body
          if (e.length > 0 && B) {
            var s = r.ownerDocument.createElement('html2canvaswrapper')
            ;(0, U.copyCSSStyles)(
              r.ownerDocument.defaultView.getComputedStyle(r, null),
              s
            )
            s.style.position = 'absolute'
            s.style.left = t.bounds.left + 'px'
            s.style.top = t.bounds.top + 'px'
            if (!a) s.style.whiteSpace = 'nowrap'
            var i = r.ownerDocument.createTextNode(e)
            s.appendChild(i)
            B.appendChild(s)
            t.childNodes.push(n.default.fromTextNode(i, t))
            B.removeChild(s)
          }
        }
        var M = function A(e) {
          var r =
            'password' === e.type
              ? new Array(e.value.length + 1).join('•')
              : e.value
          return 0 === r.length ? e.placeholder || '' : r
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseTextBounds = e.TextBounds = void 0
        var t = r(17)
        var n = r(87)
        var a = r(61)
        var B = i(a)
        var s = r(144)
        function i(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function o(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var l = (e.TextBounds = function A(e, r) {
          o(this, A)
          this.text = e
          this.bounds = r
        })
        var u = (e.parseTextBounds = function A(e, r, t) {
          var a = 0 !== r.style.letterSpacing
          var i = a
            ? (0, s.toCodePoints)(e).map(function(A) {
                return (0, s.fromCodePoint)(A)
              })
            : (0, s.breakWords)(e, r)
          var o = i.length
          var u = t.parentNode ? t.parentNode.ownerDocument.defaultView : null
          var w = u ? u.pageXOffset : 0
          var g = u ? u.pageYOffset : 0
          var f = []
          var U = 0
          for (var d = 0; d < o; d++) {
            var C = i[d]
            if (
              r.style.textDecoration !== n.TEXT_DECORATION.NONE ||
              C.trim().length > 0
            )
              if (B.default.SUPPORT_RANGE_BOUNDS)
                f.push(new l(C, Q(t, U, C.length, w, g)))
              else {
                var h = t.splitText(C.length)
                f.push(new l(C, c(t, w, g)))
                t = h
              }
            else if (!B.default.SUPPORT_RANGE_BOUNDS) t = t.splitText(C.length)
            U += C.length
          }
          return f
        })
        var c = function A(e, r, n) {
          var a = e.ownerDocument.createElement('html2canvaswrapper')
          a.appendChild(e.cloneNode(true))
          var B = e.parentNode
          if (B) {
            B.replaceChild(a, e)
            var s = (0, t.parseBounds)(a, r, n)
            if (a.firstChild) B.replaceChild(a.firstChild, a)
            return s
          }
          return new t.Bounds(0, 0, 0, 0)
        }
        var Q = function A(e, r, n, a, B) {
          var s = e.ownerDocument.createRange()
          s.setStart(e, r)
          s.setEnd(e, r + n)
          return t.Bounds.fromClientRect(s.getBoundingClientRect(), a, B)
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        function n(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = (function() {
          function A(e) {
            n(this, A)
            this.element = e
          }
          t(A, [
            {
              key: 'render',
              value: function A(e) {
                var r = this
                this.options = e
                this.canvas = document.createElement('canvas')
                this.ctx = this.canvas.getContext('2d')
                this.canvas.width = Math.floor(e.width) * e.scale
                this.canvas.height = Math.floor(e.height) * e.scale
                this.canvas.style.width = e.width + 'px'
                this.canvas.style.height = e.height + 'px'
                e.logger.log(
                  'ForeignObject renderer initialized (' +
                    e.width +
                    'x' +
                    e.height +
                    ' at ' +
                    e.x +
                    ',' +
                    e.y +
                    ') with scale ' +
                    e.scale
                )
                var t = B(
                  Math.max(e.windowWidth, e.width) * e.scale,
                  Math.max(e.windowHeight, e.height) * e.scale,
                  e.scrollX * e.scale,
                  e.scrollY * e.scale,
                  this.element
                )
                return s(t).then(function(A) {
                  if (e.backgroundColor) {
                    r.ctx.fillStyle = e.backgroundColor.toString()
                    r.ctx.fillRect(0, 0, e.width * e.scale, e.height * e.scale)
                  }
                  r.ctx.drawImage(A, -e.x * e.scale, -e.y * e.scale)
                  return r.canvas
                })
              }
            }
          ])
          return A
        })()
        e.default = a
        var B = (e.createForeignObjectSVG = function A(e, r, t, n, a) {
          var B = 'http://www.w3.org/2000/svg'
          var s = document.createElementNS(B, 'svg')
          var i = document.createElementNS(B, 'foreignObject')
          s.setAttributeNS(null, 'width', e)
          s.setAttributeNS(null, 'height', r)
          i.setAttributeNS(null, 'width', '100%')
          i.setAttributeNS(null, 'height', '100%')
          i.setAttributeNS(null, 'x', t)
          i.setAttributeNS(null, 'y', n)
          i.setAttributeNS(null, 'externalResourcesRequired', 'true')
          s.appendChild(i)
          i.appendChild(a)
          return s
        })
        var s = (e.loadSerializedSVG = function A(e) {
          return new Promise(function(A, r) {
            var t = new Image()
            t.onload = function() {
              return A(t)
            }
            t.onerror = r
            t.src =
              'data:image/svg+xml;charset=utf-8,' +
              encodeURIComponent(new XMLSerializer().serializeToString(e))
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.breakWords = e.fromCodePoint = e.toCodePoints = void 0
        var t = r(295)
        Object.defineProperty(e, 'toCodePoints', {
          enumerable: true,
          get: function A() {
            return t.toCodePoints
          }
        })
        Object.defineProperty(e, 'fromCodePoint', {
          enumerable: true,
          get: function A() {
            return t.fromCodePoint
          }
        })
        var n = r(30)
        var a = s(n)
        var B = r(138)
        function s(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var i = (e.breakWords = function A(e, r) {
          var n = (0, t.LineBreaker)(e, {
            lineBreak: r.style.lineBreak,
            wordBreak:
              r.style.overflowWrap === B.OVERFLOW_WRAP.BREAK_WORD
                ? 'break-word'
                : r.style.wordBreak
          })
          var a = []
          var s = void 0
          while (!(s = n.next()).done) a.push(s.value.slice())
          return a
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.FontMetrics = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(31)
        function a(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var B = 'Hidden Text'
        var s = (e.FontMetrics = (function() {
          function A(e) {
            a(this, A)
            this._data = {}
            this._document = e
          }
          t(A, [
            {
              key: '_parseMetrics',
              value: function A(e) {
                var r = this._document.createElement('div')
                var t = this._document.createElement('img')
                var a = this._document.createElement('span')
                var s = this._document.body
                if (!s)
                  throw new Error(
                    false ? 'No document found for font metrics' : ''
                  )
                r.style.visibility = 'hidden'
                r.style.fontFamily = e.fontFamily
                r.style.fontSize = e.fontSize
                r.style.margin = '0'
                r.style.padding = '0'
                s.appendChild(r)
                t.src = n.SMALL_IMAGE
                t.width = 1
                t.height = 1
                t.style.margin = '0'
                t.style.padding = '0'
                t.style.verticalAlign = 'baseline'
                a.style.fontFamily = e.fontFamily
                a.style.fontSize = e.fontSize
                a.style.margin = '0'
                a.style.padding = '0'
                a.appendChild(this._document.createTextNode(B))
                r.appendChild(a)
                r.appendChild(t)
                var i = t.offsetTop - a.offsetTop + 2
                r.removeChild(a)
                r.appendChild(this._document.createTextNode(B))
                r.style.lineHeight = 'normal'
                t.style.verticalAlign = 'super'
                var o = t.offsetTop - r.offsetTop + 2
                s.removeChild(r)
                return { baseline: i, middle: o }
              }
            },
            {
              key: 'getMetrics',
              value: function A(e) {
                var r = e.fontFamily + ' ' + e.fontSize
                if (void 0 === this._data[r])
                  this._data[r] = this._parseMetrics(e)
                return this._data[r]
              }
            }
          ])
          return A
        })())
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.Proxy = void 0
        var t = r(61)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = (e.Proxy = function A(e, r) {
          if (!r.proxy) return Promise.reject(false ? 'No proxy defined' : null)
          var t = r.proxy
          return new Promise(function(A, a) {
            var B =
              n.default.SUPPORT_CORS_XHR && n.default.SUPPORT_RESPONSE_TYPE
                ? 'blob'
                : 'text'
            var s = n.default.SUPPORT_CORS_XHR
              ? new XMLHttpRequest()
              : new XDomainRequest()
            s.onload = function() {
              if (s instanceof XMLHttpRequest)
                if (200 === s.status)
                  if ('text' === B) A(s.response)
                  else {
                    var r = new FileReader()
                    r.addEventListener(
                      'load',
                      function() {
                        return A(r.result)
                      },
                      false
                    )
                    r.addEventListener(
                      'error',
                      function(A) {
                        return a(A)
                      },
                      false
                    )
                    r.readAsDataURL(s.response)
                  }
                else
                  a(
                    false
                      ? 'Failed to proxy resource ' +
                        e.substring(0, 256) +
                        ' with status code ' +
                        s.status
                      : ''
                  )
              else A(s.responseText)
            }
            s.onerror = a
            s.open(
              'GET',
              t + '?url=' + encodeURIComponent(e) + '&responseType=' + B
            )
            if ('text' !== B && s instanceof XMLHttpRequest) s.responseType = B
            if (r.imageTimeout) {
              var i = r.imageTimeout
              s.timeout = i
              s.ontimeout = function() {
                return a(
                  false
                    ? 'Timed out (' + i + 'ms) proxying ' + e.substring(0, 256)
                    : ''
                )
              }
            }
            s.send()
          })
        })
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      function(A, e, r) {
        A.exports = r(268)
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = r(55)
        var n = r.n(t)
        var a = r(1)
        var B = r.n(a)
        var s = r(39)
        var i = r.n(s)
        var o = r(40)
        var l = r.n(o)
        var u = r(269)
        var c = r.n(u)
        var Q = r(276)
        var w = r.n(Q)
        var g = r(41)
        var f = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        function U(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        function d(A, e) {
          if (!A)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e && ('object' === typeof e || 'function' === typeof e) ? e : A
        }
        function C(A, e) {
          if ('function' !== typeof e && null !== e)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof e
            )
          A.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: A,
              enumerable: false,
              writable: true,
              configurable: true
            }
          })
          if (e)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(A, e)
              : (A.__proto__ = e)
        }
        var h = (function(A) {
          C(e, A)
          function e(A) {
            U(this, e)
            var r = d(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, A)
            )
            r.updateInputValue = function(A) {
              r.setState({ inputValue: A.target.value })
            }
            r.generatorHandleClick = function(A) {
              if (A) {
                var e = document.querySelector('#qr')
                w()(e, { scale: 0.52, useCORS: true })
                  .then(function(A) {
                    A.toBlob(function(A) {
                      window.saveAs(A, 'qrcode.png')
                    })
                  })
                  .catch(function(A) {
                    console.error(A)
                  })
              }
            }
            r.state = { inputValue: 'some text' }
            return r
          }
          f(e, [
            {
              key: 'render',
              value: function A() {
                var e = this
                return B.a.createElement(
                  g['default'],
                  null,
                  B.a.createElement(n.a, {
                    styleId: '1803136930',
                    css: [
                      '#modal-id.jsx-1803136930{display:none;}',
                      '#qr_result.jsx-1803136930{margin-left:-100px;}',
                      '.modal-container.jsx-1803136930 .modal-body.jsx-1803136930{max-height:60vh !important;}',
                      '#start_button.jsx-1803136930{margin-top:40px;}',
                      '.form-input.jsx-1803136930{max-width:450px !important;}',
                      '.card.jsx-1803136930{max-width:500px;margin:1.7rem auto 0;background-color:#fff;border:none;padding:1rem 0rem;}',
                      '@media only screen and (max-width:1100px){.card.jsx-1803136930{width:100%;}h2.jsx-1803136930{font-size:1rem;}}'
                    ]
                  }),
                  B.a.createElement(
                    'div',
                    { className: 'jsx-1803136930' + ' ' + 'container' },
                    B.a.createElement(
                      'div',
                      { className: 'jsx-1803136930' + ' ' + 'columns' },
                      B.a.createElement(
                        'div',
                        {
                          className:
                            'jsx-1803136930' +
                            ' ' +
                            'column col-xs-12 text-center'
                        },
                        B.a.createElement(
                          'h2',
                          {
                            className:
                              'jsx-1803136930' + ' ' + 'h3 text-center subtitle'
                          },
                          'QR CODE'
                        ),
                        B.a.createElement(
                          'h1',
                          {
                            className:
                              'jsx-1803136930' +
                              ' ' +
                              'h1 rwd_title text-center'
                          },
                          'Set the value of your QR code and watch it updating in real-time!'
                        ),
                        B.a.createElement(
                          'div',
                          { className: 'jsx-1803136930' + ' ' + 'card' },
                          B.a.createElement(
                            'div',
                            { className: 'jsx-1803136930' + ' ' + 'card-body' },
                            B.a.createElement(
                              'div',
                              {
                                className: 'jsx-1803136930' + ' ' + 'form-group'
                              },
                              B.a.createElement('input', {
                                value: this.state.inputValue,
                                onChange: function A(r) {
                                  return e.updateInputValue(r)
                                },
                                type: 'text',
                                className: 'jsx-1803136930' + ' ' + 'form-input'
                              })
                            )
                          ),
                          B.a.createElement(
                            'div',
                            {
                              className: 'jsx-1803136930' + ' ' + 'card-footer'
                            },
                            B.a.createElement(
                              'div',
                              { id: 'qr', className: 'jsx-1803136930' },
                              B.a.createElement(u['QRCode'], {
                                bgColor: '#FFFFFF',
                                fgColor: '#000000',
                                level: 'Q',
                                style: { width: 250 },
                                value: this.state.inputValue
                              })
                            ),
                            B.a.createElement(
                              'button',
                              {
                                onClick: function A() {
                                  e.generatorHandleClick(e.state.inputValue)
                                },
                                id: 'start_button',
                                className:
                                  'jsx-1803136930' + ' ' + 'btn btn-primary'
                              },
                              'Save as image'
                            )
                          )
                        ),
                        B.a.createElement(
                          'div',
                          {
                            className:
                              'jsx-1803136930' + ' ' + 'buttons-section'
                          },
                          B.a.createElement(
                            l.a,
                            { href: '/passwords' },
                            B.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-1803136930' + ' ' + 'btn btn-secondary'
                              },
                              'Generate password'
                            )
                          ),
                          B.a.createElement(
                            l.a,
                            { href: '/usernames' },
                            B.a.createElement(
                              'a',
                              {
                                className:
                                  'jsx-1803136930' + ' ' + 'btn btn-secondary'
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
          return e
        })(B.a.Component)
        e['default'] = h
      },
      function(A, e, r) {
        'use strict'
        var t = r(270)
        A.exports = { QRCode: t.QRCode }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t =
          Object.assign ||
          function(A) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var t in r)
                if (Object.prototype.hasOwnProperty.call(r, t)) A[t] = r[t]
            }
            return A
          }
        e.QRCode = c
        var n = r(1)
        var a = i(n)
        var B = r(7)
        var s = i(B)
        function i(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function o(A, e) {
          var r = {}
          for (var t in A) {
            if (e.indexOf(t) >= 0) continue
            if (!Object.prototype.hasOwnProperty.call(A, t)) continue
            r[t] = A[t]
          }
          return r
        }
        var l = r(271)
        var u = r(132)
        function c() {
          var A =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          var e = A.value,
            r = void 0 === e ? '' : e,
            n = A.level,
            B = void 0 === n ? 'L' : n,
            s = A.bgColor,
            i = void 0 === s ? '#FFFFFF' : s,
            c = A.fgColor,
            Q = void 0 === c ? '#000000' : c,
            w = o(A, ['value', 'level', 'bgColor', 'fgColor'])
          var g = new l(-1, u[B])
          g.addData(r)
          g.make()
          var f = g.modules
          var U = 0
          return a.default.createElement(
            'svg',
            t(
              {
                shapeRendering: 'crispEdges',
                viewBox: [0, 0, f.length, f.length].join(' ')
              },
              w
            ),
            f.map(function(A, e) {
              return A.map(function(A, r) {
                return a.default.createElement('rect', {
                  height: 1,
                  key: U++,
                  style: { fill: A ? Q : i },
                  width: 1,
                  x: r,
                  y: e
                })
              })
            })
          )
        }
        c.propTypes = {
          value: s.default.string.isRequired,
          size: s.default.number,
          level: s.default.oneOf(['L', 'M', 'Q', 'H']),
          bgColor: s.default.string,
          fgColor: s.default.string
        }
      },
      function(A, e, r) {
        var t = r(272)
        var n = r(273)
        var a = r(274)
        var B = r(275)
        var s = r(133)
        function i(A, e) {
          this.typeNumber = A
          this.errorCorrectLevel = e
          this.modules = null
          this.moduleCount = 0
          this.dataCache = null
          this.dataList = []
        }
        var o = i.prototype
        o.addData = function(A) {
          var e = new t(A)
          this.dataList.push(e)
          this.dataCache = null
        }
        o.isDark = function(A, e) {
          if (A < 0 || this.moduleCount <= A || e < 0 || this.moduleCount <= e)
            throw new Error(A + ',' + e)
          return this.modules[A][e]
        }
        o.getModuleCount = function() {
          return this.moduleCount
        }
        o.make = function() {
          if (this.typeNumber < 1) {
            var A = 1
            for (A = 1; A < 40; A++) {
              var e = n.getRSBlocks(A, this.errorCorrectLevel)
              var r = new a()
              var t = 0
              for (var s = 0; s < e.length; s++) t += e[s].dataCount
              for (var s = 0; s < this.dataList.length; s++) {
                var i = this.dataList[s]
                r.put(i.mode, 4)
                r.put(i.getLength(), B.getLengthInBits(i.mode, A))
                i.write(r)
              }
              if (r.getLengthInBits() <= 8 * t) break
            }
            this.typeNumber = A
          }
          this.makeImpl(false, this.getBestMaskPattern())
        }
        o.makeImpl = function(A, e) {
          this.moduleCount = 4 * this.typeNumber + 17
          this.modules = new Array(this.moduleCount)
          for (var r = 0; r < this.moduleCount; r++) {
            this.modules[r] = new Array(this.moduleCount)
            for (var t = 0; t < this.moduleCount; t++) this.modules[r][t] = null
          }
          this.setupPositionProbePattern(0, 0)
          this.setupPositionProbePattern(this.moduleCount - 7, 0)
          this.setupPositionProbePattern(0, this.moduleCount - 7)
          this.setupPositionAdjustPattern()
          this.setupTimingPattern()
          this.setupTypeInfo(A, e)
          if (this.typeNumber >= 7) this.setupTypeNumber(A)
          if (null == this.dataCache)
            this.dataCache = i.createData(
              this.typeNumber,
              this.errorCorrectLevel,
              this.dataList
            )
          this.mapData(this.dataCache, e)
        }
        o.setupPositionProbePattern = function(A, e) {
          for (var r = -1; r <= 7; r++) {
            if (A + r <= -1 || this.moduleCount <= A + r) continue
            for (var t = -1; t <= 7; t++) {
              if (e + t <= -1 || this.moduleCount <= e + t) continue
              if (
                (0 <= r && r <= 6 && (0 == t || 6 == t)) ||
                (0 <= t && t <= 6 && (0 == r || 6 == r)) ||
                (2 <= r && r <= 4 && 2 <= t && t <= 4)
              )
                this.modules[A + r][e + t] = true
              else this.modules[A + r][e + t] = false
            }
          }
        }
        o.getBestMaskPattern = function() {
          var A = 0
          var e = 0
          for (var r = 0; r < 8; r++) {
            this.makeImpl(true, r)
            var t = B.getLostPoint(this)
            if (0 == r || A > t) {
              A = t
              e = r
            }
          }
          return e
        }
        o.createMovieClip = function(A, e, r) {
          var t = A.createEmptyMovieClip(e, r)
          var n = 1
          this.make()
          for (var a = 0; a < this.modules.length; a++) {
            var B = a * n
            for (var s = 0; s < this.modules[a].length; s++) {
              var i = s * n
              var o = this.modules[a][s]
              if (o) {
                t.beginFill(0, 100)
                t.moveTo(i, B)
                t.lineTo(i + n, B)
                t.lineTo(i + n, B + n)
                t.lineTo(i, B + n)
                t.endFill()
              }
            }
          }
          return t
        }
        o.setupTimingPattern = function() {
          for (var A = 8; A < this.moduleCount - 8; A++) {
            if (null != this.modules[A][6]) continue
            this.modules[A][6] = A % 2 == 0
          }
          for (var e = 8; e < this.moduleCount - 8; e++) {
            if (null != this.modules[6][e]) continue
            this.modules[6][e] = e % 2 == 0
          }
        }
        o.setupPositionAdjustPattern = function() {
          var A = B.getPatternPosition(this.typeNumber)
          for (var e = 0; e < A.length; e++)
            for (var r = 0; r < A.length; r++) {
              var t = A[e]
              var n = A[r]
              if (null != this.modules[t][n]) continue
              for (var a = -2; a <= 2; a++)
                for (var s = -2; s <= 2; s++)
                  if (
                    -2 == a ||
                    2 == a ||
                    -2 == s ||
                    2 == s ||
                    (0 == a && 0 == s)
                  )
                    this.modules[t + a][n + s] = true
                  else this.modules[t + a][n + s] = false
            }
        }
        o.setupTypeNumber = function(A) {
          var e = B.getBCHTypeNumber(this.typeNumber)
          for (var r = 0; r < 18; r++) {
            var t = !A && 1 == ((e >> r) & 1)
            this.modules[Math.floor(r / 3)][
              r % 3 + this.moduleCount - 8 - 3
            ] = t
          }
          for (var r = 0; r < 18; r++) {
            var t = !A && 1 == ((e >> r) & 1)
            this.modules[r % 3 + this.moduleCount - 8 - 3][
              Math.floor(r / 3)
            ] = t
          }
        }
        o.setupTypeInfo = function(A, e) {
          var r = (this.errorCorrectLevel << 3) | e
          var t = B.getBCHTypeInfo(r)
          for (var n = 0; n < 15; n++) {
            var a = !A && 1 == ((t >> n) & 1)
            if (n < 6) this.modules[n][8] = a
            else if (n < 8) this.modules[n + 1][8] = a
            else this.modules[this.moduleCount - 15 + n][8] = a
          }
          for (var n = 0; n < 15; n++) {
            var a = !A && 1 == ((t >> n) & 1)
            if (n < 8) this.modules[8][this.moduleCount - n - 1] = a
            else if (n < 9) this.modules[8][15 - n - 1 + 1] = a
            else this.modules[8][15 - n - 1] = a
          }
          this.modules[this.moduleCount - 8][8] = !A
        }
        o.mapData = function(A, e) {
          var r = -1
          var t = this.moduleCount - 1
          var n = 7
          var a = 0
          for (var s = this.moduleCount - 1; s > 0; s -= 2) {
            if (6 == s) s--
            while (true) {
              for (var i = 0; i < 2; i++)
                if (null == this.modules[t][s - i]) {
                  var o = false
                  if (a < A.length) o = 1 == ((A[a] >>> n) & 1)
                  var l = B.getMask(e, t, s - i)
                  if (l) o = !o
                  this.modules[t][s - i] = o
                  n--
                  if (-1 == n) {
                    a++
                    n = 7
                  }
                }
              t += r
              if (t < 0 || this.moduleCount <= t) {
                t -= r
                r = -r
                break
              }
            }
          }
        }
        i.PAD0 = 236
        i.PAD1 = 17
        i.createData = function(A, e, r) {
          var t = n.getRSBlocks(A, e)
          var s = new a()
          for (var o = 0; o < r.length; o++) {
            var l = r[o]
            s.put(l.mode, 4)
            s.put(l.getLength(), B.getLengthInBits(l.mode, A))
            l.write(s)
          }
          var u = 0
          for (var o = 0; o < t.length; o++) u += t[o].dataCount
          if (s.getLengthInBits() > 8 * u)
            throw new Error(
              'code length overflow. (' +
                s.getLengthInBits() +
                '>' +
                8 * u +
                ')'
            )
          if (s.getLengthInBits() + 4 <= 8 * u) s.put(0, 4)
          while (s.getLengthInBits() % 8 != 0) s.putBit(false)
          while (true) {
            if (s.getLengthInBits() >= 8 * u) break
            s.put(i.PAD0, 8)
            if (s.getLengthInBits() >= 8 * u) break
            s.put(i.PAD1, 8)
          }
          return i.createBytes(s, t)
        }
        i.createBytes = function(A, e) {
          var r = 0
          var t = 0
          var n = 0
          var a = new Array(e.length)
          var i = new Array(e.length)
          for (var o = 0; o < e.length; o++) {
            var l = e[o].dataCount
            var u = e[o].totalCount - l
            t = Math.max(t, l)
            n = Math.max(n, u)
            a[o] = new Array(l)
            for (var c = 0; c < a[o].length; c++)
              a[o][c] = 255 & A.buffer[c + r]
            r += l
            var Q = B.getErrorCorrectPolynomial(u)
            var w = new s(a[o], Q.getLength() - 1)
            var g = w.mod(Q)
            i[o] = new Array(Q.getLength() - 1)
            for (var c = 0; c < i[o].length; c++) {
              var f = c + g.getLength() - i[o].length
              i[o][c] = f >= 0 ? g.get(f) : 0
            }
          }
          var U = 0
          for (var c = 0; c < e.length; c++) U += e[c].totalCount
          var d = new Array(U)
          var C = 0
          for (var c = 0; c < t; c++)
            for (var o = 0; o < e.length; o++)
              if (c < a[o].length) d[C++] = a[o][c]
          for (var c = 0; c < n; c++)
            for (var o = 0; o < e.length; o++)
              if (c < i[o].length) d[C++] = i[o][c]
          return d
        }
        A.exports = i
      },
      function(A, e, r) {
        var t = r(131)
        function n(A) {
          this.mode = t.MODE_8BIT_BYTE
          this.data = A
        }
        n.prototype = {
          getLength: function(A) {
            return this.data.length
          },
          write: function(A) {
            for (var e = 0; e < this.data.length; e++)
              A.put(this.data.charCodeAt(e), 8)
          }
        }
        A.exports = n
      },
      function(A, e, r) {
        var t = r(132)
        function n(A, e) {
          this.totalCount = A
          this.dataCount = e
        }
        n.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16]
        ]
        n.getRSBlocks = function(A, e) {
          var r = n.getRsBlockTable(A, e)
          if (void 0 == r)
            throw new Error(
              'bad rs block @ typeNumber:' + A + '/errorCorrectLevel:' + e
            )
          var t = r.length / 3
          var a = new Array()
          for (var B = 0; B < t; B++) {
            var s = r[3 * B + 0]
            var i = r[3 * B + 1]
            var o = r[3 * B + 2]
            for (var l = 0; l < s; l++) a.push(new n(i, o))
          }
          return a
        }
        n.getRsBlockTable = function(A, e) {
          switch (e) {
            case t.L:
              return n.RS_BLOCK_TABLE[4 * (A - 1) + 0]
            case t.M:
              return n.RS_BLOCK_TABLE[4 * (A - 1) + 1]
            case t.Q:
              return n.RS_BLOCK_TABLE[4 * (A - 1) + 2]
            case t.H:
              return n.RS_BLOCK_TABLE[4 * (A - 1) + 3]
            default:
              return
          }
        }
        A.exports = n
      },
      function(A, e) {
        function r() {
          this.buffer = new Array()
          this.length = 0
        }
        r.prototype = {
          get: function(A) {
            var e = Math.floor(A / 8)
            return 1 == ((this.buffer[e] >>> (7 - A % 8)) & 1)
          },
          put: function(A, e) {
            for (var r = 0; r < e; r++)
              this.putBit(1 == ((A >>> (e - r - 1)) & 1))
          },
          getLengthInBits: function() {
            return this.length
          },
          putBit: function(A) {
            var e = Math.floor(this.length / 8)
            if (this.buffer.length <= e) this.buffer.push(0)
            if (A) this.buffer[e] |= 128 >>> (this.length % 8)
            this.length++
          }
        }
        A.exports = r
      },
      function(A, e, r) {
        var t = r(131)
        var n = r(133)
        var a = r(134)
        var B = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        }
        var s = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          G15:
            (1 << 10) |
            (1 << 8) |
            (1 << 5) |
            (1 << 4) |
            (1 << 2) |
            (1 << 1) |
            (1 << 0),
          G18:
            (1 << 12) |
            (1 << 11) |
            (1 << 10) |
            (1 << 9) |
            (1 << 8) |
            (1 << 5) |
            (1 << 2) |
            (1 << 0),
          G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
          getBCHTypeInfo: function(A) {
            var e = A << 10
            while (s.getBCHDigit(e) - s.getBCHDigit(s.G15) >= 0)
              e ^= s.G15 << (s.getBCHDigit(e) - s.getBCHDigit(s.G15))
            return ((A << 10) | e) ^ s.G15_MASK
          },
          getBCHTypeNumber: function(A) {
            var e = A << 12
            while (s.getBCHDigit(e) - s.getBCHDigit(s.G18) >= 0)
              e ^= s.G18 << (s.getBCHDigit(e) - s.getBCHDigit(s.G18))
            return (A << 12) | e
          },
          getBCHDigit: function(A) {
            var e = 0
            while (0 != A) {
              e++
              A >>>= 1
            }
            return e
          },
          getPatternPosition: function(A) {
            return s.PATTERN_POSITION_TABLE[A - 1]
          },
          getMask: function(A, e, r) {
            switch (A) {
              case B.PATTERN000:
                return (e + r) % 2 == 0
              case B.PATTERN001:
                return e % 2 == 0
              case B.PATTERN010:
                return r % 3 == 0
              case B.PATTERN011:
                return (e + r) % 3 == 0
              case B.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0
              case B.PATTERN101:
                return (e * r) % 2 + (e * r) % 3 == 0
              case B.PATTERN110:
                return ((e * r) % 2 + (e * r) % 3) % 2 == 0
              case B.PATTERN111:
                return ((e * r) % 3 + (e + r) % 2) % 2 == 0
              default:
                throw new Error('bad maskPattern:' + A)
            }
          },
          getErrorCorrectPolynomial: function(A) {
            var e = new n([1], 0)
            for (var r = 0; r < A; r++) e = e.multiply(new n([1, a.gexp(r)], 0))
            return e
          },
          getLengthInBits: function(A, e) {
            if (1 <= e && e < 10)
              switch (A) {
                case t.MODE_NUMBER:
                  return 10
                case t.MODE_ALPHA_NUM:
                  return 9
                case t.MODE_8BIT_BYTE:
                  return 8
                case t.MODE_KANJI:
                  return 8
                default:
                  throw new Error('mode:' + A)
              }
            else if (e < 27)
              switch (A) {
                case t.MODE_NUMBER:
                  return 12
                case t.MODE_ALPHA_NUM:
                  return 11
                case t.MODE_8BIT_BYTE:
                  return 16
                case t.MODE_KANJI:
                  return 10
                default:
                  throw new Error('mode:' + A)
              }
            else if (e < 41)
              switch (A) {
                case t.MODE_NUMBER:
                  return 14
                case t.MODE_ALPHA_NUM:
                  return 13
                case t.MODE_8BIT_BYTE:
                  return 16
                case t.MODE_KANJI:
                  return 12
                default:
                  throw new Error('mode:' + A)
              }
            else throw new Error('type:' + e)
          },
          getLostPoint: function(A) {
            var e = A.getModuleCount()
            var r = 0
            for (var t = 0; t < e; t++)
              for (var n = 0; n < e; n++) {
                var a = 0
                var B = A.isDark(t, n)
                for (var s = -1; s <= 1; s++) {
                  if (t + s < 0 || e <= t + s) continue
                  for (var i = -1; i <= 1; i++) {
                    if (n + i < 0 || e <= n + i) continue
                    if (0 == s && 0 == i) continue
                    if (B == A.isDark(t + s, n + i)) a++
                  }
                }
                if (a > 5) r += 3 + a - 5
              }
            for (var t = 0; t < e - 1; t++)
              for (var n = 0; n < e - 1; n++) {
                var o = 0
                if (A.isDark(t, n)) o++
                if (A.isDark(t + 1, n)) o++
                if (A.isDark(t, n + 1)) o++
                if (A.isDark(t + 1, n + 1)) o++
                if (0 == o || 4 == o) r += 3
              }
            for (var t = 0; t < e; t++)
              for (var n = 0; n < e - 6; n++)
                if (
                  A.isDark(t, n) &&
                  !A.isDark(t, n + 1) &&
                  A.isDark(t, n + 2) &&
                  A.isDark(t, n + 3) &&
                  A.isDark(t, n + 4) &&
                  !A.isDark(t, n + 5) &&
                  A.isDark(t, n + 6)
                )
                  r += 40
            for (var n = 0; n < e; n++)
              for (var t = 0; t < e - 6; t++)
                if (
                  A.isDark(t, n) &&
                  !A.isDark(t + 1, n) &&
                  A.isDark(t + 2, n) &&
                  A.isDark(t + 3, n) &&
                  A.isDark(t + 4, n) &&
                  !A.isDark(t + 5, n) &&
                  A.isDark(t + 6, n)
                )
                  r += 40
            var l = 0
            for (var n = 0; n < e; n++)
              for (var t = 0; t < e; t++) if (A.isDark(t, n)) l++
            var u = Math.abs(100 * l / e / e - 50) / 5
            r += 10 * u
            return r
          }
        }
        A.exports = s
      },
      function(A, e, r) {
        'use strict'
        var t =
          Object.assign ||
          function(A) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var t in r)
                if (Object.prototype.hasOwnProperty.call(r, t)) A[t] = r[t]
            }
            return A
          }
        var n = r(135)
        var a = l(n)
        var B = r(136)
        var s = l(B)
        var i = r(277)
        var o = r(17)
        function l(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var u = function A(e, r) {
          var n = r || {}
          var B = new s.default(
            'boolean' === typeof n.logging ? n.logging : true
          )
          B.log('html2canvas ' + '$npm_package_version')
          if (false)
            B.error(
              'onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value'
            )
          var l = e.ownerDocument
          if (!l)
            return Promise.reject('Provided element is not within a Document')
          var u = l.defaultView
          var c = u.pageXOffset
          var Q = u.pageYOffset
          var w = 'HTML' === e.tagName || 'BODY' === e.tagName
          var g = w ? (0, o.parseDocumentSize)(l) : (0, o.parseBounds)(e, c, Q),
            f = g.width,
            U = g.height,
            d = g.left,
            C = g.top
          var h = {
            async: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            imageTimeout: 15e3,
            logging: true,
            proxy: null,
            removeContainer: true,
            foreignObjectRendering: false,
            scale: u.devicePixelRatio || 1,
            target: new a.default(n.canvas),
            useCORS: false,
            x: d,
            y: C,
            width: Math.ceil(f),
            height: Math.ceil(U),
            windowWidth: u.innerWidth,
            windowHeight: u.innerHeight,
            scrollX: u.pageXOffset,
            scrollY: u.pageYOffset
          }
          var F = (0, i.renderElement)(e, t({}, h, n), B)
          if (false)
            return F.catch(function(A) {
              B.error(A)
              throw A
            })
          return F
        }
        u.CanvasRenderer = a.default
        A.exports = u
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.renderElement = void 0
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = r(136)
        var a = d(n)
        var B = r(278)
        var s = r(300)
        var i = d(s)
        var o = r(143)
        var l = d(o)
        var u = r(61)
        var c = d(u)
        var Q = r(17)
        var w = r(303)
        var g = r(145)
        var f = r(16)
        var U = d(f)
        function d(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var C = (e.renderElement = function A(e, r, n) {
          var a = e.ownerDocument
          var s = new Q.Bounds(
            r.scrollX,
            r.scrollY,
            r.windowWidth,
            r.windowHeight
          )
          var o = a.documentElement
            ? new U.default(getComputedStyle(a.documentElement).backgroundColor)
            : f.TRANSPARENT
          var u = a.body
            ? new U.default(getComputedStyle(a.body).backgroundColor)
            : f.TRANSPARENT
          var d =
            e === a.documentElement
              ? o.isTransparent()
                ? u.isTransparent()
                  ? r.backgroundColor ? new U.default(r.backgroundColor) : null
                  : u
                : o
              : r.backgroundColor ? new U.default(r.backgroundColor) : null
          return (r.foreignObjectRendering
            ? c.default.SUPPORT_FOREIGNOBJECT_DRAWING
            : Promise.resolve(false)
          ).then(function(o) {
            return o
              ? (function(A) {
                  if (false)
                    n.log('Document cloned, using foreignObject rendering')
                  return A.inlineFonts(a)
                    .then(function() {
                      return A.resourceLoader.ready()
                    })
                    .then(function() {
                      var e = new l.default(A.documentElement)
                      return e.render({
                        backgroundColor: d,
                        logger: n,
                        scale: r.scale,
                        x: r.x,
                        y: r.y,
                        width: r.width,
                        height: r.height,
                        windowWidth: r.windowWidth,
                        windowHeight: r.windowHeight,
                        scrollX: r.scrollX,
                        scrollY: r.scrollY
                      })
                    })
                })(new w.DocumentCloner(e, r, n, true, A))
              : (0, w.cloneWindow)(a, s, e, r, n, A).then(function(A) {
                  var e = t(A, 3),
                    a = e[0],
                    s = e[1],
                    o = e[2]
                  if (false) n.log('Document cloned, using computed rendering')
                  var l = (0, B.NodeParser)(s, o, n)
                  var u = s.ownerDocument
                  if (d === l.container.style.background.backgroundColor)
                    l.container.style.background.backgroundColor = f.TRANSPARENT
                  return o.ready().then(function(A) {
                    var e = new g.FontMetrics(u)
                    if (false) n.log('Starting renderer')
                    var t = {
                      backgroundColor: d,
                      fontMetrics: e,
                      imageStore: A,
                      logger: n,
                      scale: r.scale,
                      x: r.x,
                      y: r.y,
                      width: r.width,
                      height: r.height
                    }
                    if (Array.isArray(r.target))
                      return Promise.all(
                        r.target.map(function(A) {
                          var e = new i.default(A, t)
                          return e.render(l)
                        })
                      )
                    else {
                      var B = new i.default(r.target, t)
                      var s = B.render(l)
                      if (true === r.removeContainer)
                        if (a.parentNode) a.parentNode.removeChild(a)
                        else if (false)
                          n.log(
                            'Cannot detach cloned iframe as it is not in the DOM anymore'
                          )
                      return s
                    }
                  })
                })
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.NodeParser = void 0
        var t = r(279)
        var n = c(t)
        var a = r(30)
        var B = c(a)
        var s = r(60)
        var i = c(s)
        var o = r(141)
        var l = r(90)
        var u = r(59)
        function c(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var Q = (e.NodeParser = function A(e, r, t) {
          if (false) t.log('Starting node parsing')
          var a = 0
          var s = new B.default(e, null, r, a++)
          var i = new n.default(s, null, true)
          g(e, s, i, r, a)
          if (false) t.log('Finished parsing node tree')
          return i
        })
        var w = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION']
        var g = function A(e, r, t, a, s) {
          if (false) throw new Error('Recursion error while parsing node tree')
          for (var c = e.firstChild, Q; c; c = Q) {
            Q = c.nextSibling
            var g = c.ownerDocument.defaultView
            if (
              c instanceof g.Text ||
              c instanceof Text ||
              (g.parent && c instanceof g.parent.Text)
            ) {
              if (c.data.trim().length > 0)
                r.childNodes.push(i.default.fromTextNode(c, r))
            } else if (
              c instanceof g.HTMLElement ||
              c instanceof HTMLElement ||
              (g.parent && c instanceof g.parent.HTMLElement)
            ) {
              if (-1 === w.indexOf(c.nodeName)) {
                var d = new B.default(c, r, a, s++)
                if (d.isVisible()) {
                  if ('INPUT' === c.tagName) (0, o.inlineInputElement)(c, d)
                  else if ('TEXTAREA' === c.tagName)
                    (0, o.inlineTextAreaElement)(c, d)
                  else if ('SELECT' === c.tagName)
                    (0, o.inlineSelectElement)(c, d)
                  else if (
                    d.style.listStyle &&
                    d.style.listStyle.listStyleType !== u.LIST_STYLE_TYPE.NONE
                  )
                    (0, l.inlineListItemElement)(c, d, a)
                  var C = 'TEXTAREA' !== c.tagName
                  var h = f(d, c)
                  if (h || U(d)) {
                    var F =
                      h || d.isPositioned()
                        ? t.getRealParentStackingContext()
                        : t
                    var E = new n.default(d, F, h)
                    F.contexts.push(E)
                    if (C) A(c, d, E, a, s)
                  } else {
                    t.children.push(d)
                    if (C) A(c, d, t, a, s)
                  }
                }
              }
            } else if (
              c instanceof g.SVGSVGElement ||
              c instanceof SVGSVGElement ||
              (g.parent && c instanceof g.parent.SVGSVGElement)
            ) {
              var v = new B.default(c, r, a, s++)
              var H = f(v, c)
              if (H || U(v)) {
                var p =
                  H || v.isPositioned() ? t.getRealParentStackingContext() : t
                var N = new n.default(v, p, H)
                p.contexts.push(N)
              } else t.children.push(v)
            }
          }
        }
        var f = function A(e, r) {
          return (
            e.isRootElement() ||
            e.isPositionedWithZIndex() ||
            e.style.opacity < 1 ||
            e.isTransformed() ||
            d(e, r)
          )
        }
        var U = function A(e) {
          return e.isPositioned() || e.isFloating()
        }
        var d = function A(e, r) {
          return (
            'BODY' === r.nodeName &&
            e.parent instanceof B.default &&
            e.parent.style.background.backgroundColor.isTransparent()
          )
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(30)
        var a = s(n)
        var B = r(139)
        function s(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function i(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var o = (function() {
          function A(e, r, t) {
            i(this, A)
            this.container = e
            this.parent = r
            this.contexts = []
            this.children = []
            this.treatAsRealStackingContext = t
          }
          t(A, [
            {
              key: 'getOpacity',
              value: function A() {
                return this.parent
                  ? this.container.style.opacity * this.parent.getOpacity()
                  : this.container.style.opacity
              }
            },
            {
              key: 'getRealParentStackingContext',
              value: function A() {
                return !this.parent || this.treatAsRealStackingContext
                  ? this
                  : this.parent.getRealParentStackingContext()
              }
            }
          ])
          return A
        })()
        e.default = o
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        function t(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var n = function A(e, r) {
          t(this, A)
          this.width = e
          this.height = r
        }
        e.default = n
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(57)
        var a = r(58)
        var B = s(a)
        function s(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function i(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var o = function A(e, r, t) {
          return new B.default(e.x + (r.x - e.x) * t, e.y + (r.y - e.y) * t)
        }
        var l = (function() {
          function A(e, r, t, a) {
            i(this, A)
            this.type = n.PATH.BEZIER_CURVE
            this.start = e
            this.startControl = r
            this.endControl = t
            this.end = a
          }
          t(A, [
            {
              key: 'subdivide',
              value: function e(r, t) {
                var n = o(this.start, this.startControl, r)
                var a = o(this.startControl, this.endControl, r)
                var B = o(this.endControl, this.end, r)
                var s = o(n, a, r)
                var i = o(a, B, r)
                var l = o(s, i, r)
                return t ? new A(this.start, n, s, l) : new A(l, i, B, this.end)
              }
            },
            {
              key: 'reverse',
              value: function e() {
                return new A(
                  this.end,
                  this.endControl,
                  this.startControl,
                  this.start
                )
              }
            }
          ])
          return A
        })()
        e.default = l
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseBorderRadius = void 0
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = r(24)
        var a = B(n)
        function B(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var s = ['top-left', 'top-right', 'bottom-right', 'bottom-left']
        var i = (e.parseBorderRadius = function A(e) {
          return s.map(function(A) {
            var r = e.getPropertyValue('border-' + A + '-radius')
            var n = r.split(' ').map(a.default.create),
              B = t(n, 2),
              s = B[0],
              i = B[1]
            return 'undefined' === typeof i ? [s, s] : [s, i]
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.DISPLAY = {
          NONE: 1 << 0,
          BLOCK: 1 << 1,
          INLINE: 1 << 2,
          RUN_IN: 1 << 3,
          FLOW: 1 << 4,
          FLOW_ROOT: 1 << 5,
          TABLE: 1 << 6,
          FLEX: 1 << 7,
          GRID: 1 << 8,
          RUBY: 1 << 9,
          SUBGRID: 1 << 10,
          LIST_ITEM: 1 << 11,
          TABLE_ROW_GROUP: 1 << 12,
          TABLE_HEADER_GROUP: 1 << 13,
          TABLE_FOOTER_GROUP: 1 << 14,
          TABLE_ROW: 1 << 15,
          TABLE_CELL: 1 << 16,
          TABLE_COLUMN_GROUP: 1 << 17,
          TABLE_COLUMN: 1 << 18,
          TABLE_CAPTION: 1 << 19,
          RUBY_BASE: 1 << 20,
          RUBY_TEXT: 1 << 21,
          RUBY_BASE_CONTAINER: 1 << 22,
          RUBY_TEXT_CONTAINER: 1 << 23,
          CONTENTS: 1 << 24,
          INLINE_BLOCK: 1 << 25,
          INLINE_LIST_ITEM: 1 << 26,
          INLINE_TABLE: 1 << 27,
          INLINE_FLEX: 1 << 28,
          INLINE_GRID: 1 << 29
        })
        var n = function A(e) {
          switch (e) {
            case 'block':
              return t.BLOCK
            case 'inline':
              return t.INLINE
            case 'run-in':
              return t.RUN_IN
            case 'flow':
              return t.FLOW
            case 'flow-root':
              return t.FLOW_ROOT
            case 'table':
              return t.TABLE
            case 'flex':
              return t.FLEX
            case 'grid':
              return t.GRID
            case 'ruby':
              return t.RUBY
            case 'subgrid':
              return t.SUBGRID
            case 'list-item':
              return t.LIST_ITEM
            case 'table-row-group':
              return t.TABLE_ROW_GROUP
            case 'table-header-group':
              return t.TABLE_HEADER_GROUP
            case 'table-footer-group':
              return t.TABLE_FOOTER_GROUP
            case 'table-row':
              return t.TABLE_ROW
            case 'table-cell':
              return t.TABLE_CELL
            case 'table-column-group':
              return t.TABLE_COLUMN_GROUP
            case 'table-column':
              return t.TABLE_COLUMN
            case 'table-caption':
              return t.TABLE_CAPTION
            case 'ruby-base':
              return t.RUBY_BASE
            case 'ruby-text':
              return t.RUBY_TEXT
            case 'ruby-base-container':
              return t.RUBY_BASE_CONTAINER
            case 'ruby-text-container':
              return t.RUBY_TEXT_CONTAINER
            case 'contents':
              return t.CONTENTS
            case 'inline-block':
              return t.INLINE_BLOCK
            case 'inline-list-item':
              return t.INLINE_LIST_ITEM
            case 'inline-table':
              return t.INLINE_TABLE
            case 'inline-flex':
              return t.INLINE_FLEX
            case 'inline-grid':
              return t.INLINE_GRID
          }
          return t.NONE
        }
        var a = function A(e, r) {
          return e | n(r)
        }
        var B = (e.parseDisplay = function A(e) {
          return e.split(' ').reduce(a, 0)
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.FLOAT = {
          NONE: 0,
          LEFT: 1,
          RIGHT: 2,
          INLINE_START: 3,
          INLINE_END: 4
        })
        var n = (e.parseCSSFloat = function A(e) {
          switch (e) {
            case 'left':
              return t.LEFT
            case 'right':
              return t.RIGHT
            case 'inline-start':
              return t.INLINE_START
            case 'inline-end':
              return t.INLINE_END
          }
          return t.NONE
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = function A(e) {
          switch (e) {
            case 'normal':
              return 400
            case 'bold':
              return 700
          }
          var r = parseInt(e, 10)
          return isNaN(r) ? 400 : r
        }
        var n = (e.parseFont = function A(e) {
          var r = e.fontFamily
          var n = e.fontSize
          var a = e.fontStyle
          var B = e.fontVariant
          var s = t(e.fontWeight)
          return {
            fontFamily: r,
            fontSize: n,
            fontStyle: a,
            fontVariant: B,
            fontWeight: s
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.parseLetterSpacing = function A(e) {
          if ('normal' === e) return 0
          var r = parseFloat(e)
          return isNaN(r) ? 0 : r
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.LINE_BREAK = { NORMAL: 'normal', STRICT: 'strict' })
        var n = (e.parseLineBreak = function A(e) {
          switch (e) {
            case 'strict':
              return t.STRICT
            case 'normal':
            default:
              return t.NORMAL
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseMargin = void 0
        var t = r(24)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = ['top', 'right', 'bottom', 'left']
        var s = (e.parseMargin = function A(e) {
          return B.map(function(A) {
            return new n.default(e.getPropertyValue('margin-' + A))
          })
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.OVERFLOW = { VISIBLE: 0, HIDDEN: 1, SCROLL: 2, AUTO: 3 })
        var n = (e.parseOverflow = function A(e) {
          switch (e) {
            case 'hidden':
              return t.HIDDEN
            case 'scroll':
              return t.SCROLL
            case 'auto':
              return t.AUTO
            case 'visible':
            default:
              return t.VISIBLE
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseTextShadow = void 0
        var t = r(16)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = /^([+-]|\d|\.)$/i
        var s = (e.parseTextShadow = function A(e) {
          if ('none' === e || 'string' !== typeof e) return null
          var r = ''
          var t = false
          var a = []
          var s = []
          var i = 0
          var o = null
          var l = function A() {
            if (r.length)
              if (t) a.push(parseFloat(r))
              else o = new n.default(r)
            t = false
            r = ''
          }
          var u = function A() {
            if (a.length && null !== o)
              s.push({
                color: o,
                offsetX: a[0] || 0,
                offsetY: a[1] || 0,
                blur: a[2] || 0
              })
            a.splice(0, a.length)
            o = null
          }
          for (var c = 0; c < e.length; c++) {
            var Q = e[c]
            switch (Q) {
              case '(':
                r += Q
                i++
                break
              case ')':
                r += Q
                i--
                break
              case ',':
                if (0 === i) {
                  l()
                  u()
                } else r += Q
                break
              case ' ':
                if (0 === i) l()
                else r += Q
                break
              default:
                if (0 === r.length && B.test(Q)) t = true
                r += Q
            }
          }
          l()
          u()
          if (0 === s.length) return null
          return s
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseTransform = void 0
        var t = r(24)
        var n = a(t)
        function a(A) {
          return A && A.__esModule ? A : { default: A }
        }
        var B = function A(e) {
          return parseFloat(e.trim())
        }
        var s = /(matrix|matrix3d)\((.+)\)/
        var i = (e.parseTransform = function A(e) {
          var r = l(
            e.transform ||
              e.webkitTransform ||
              e.mozTransform ||
              e.msTransform ||
              e.oTransform
          )
          if (null === r) return null
          return {
            transform: r,
            transformOrigin: o(
              e.transformOrigin ||
                e.webkitTransformOrigin ||
                e.mozTransformOrigin ||
                e.msTransformOrigin ||
                e.oTransformOrigin
            )
          }
        })
        var o = function A(e) {
          if ('string' !== typeof e) {
            var r = new n.default('0')
            return [r, r]
          }
          var t = e.split(' ').map(n.default.create)
          return [t[0], t[1]]
        }
        var l = function A(e) {
          if ('none' === e || 'string' !== typeof e) return null
          var r = e.match(s)
          if (r)
            if ('matrix' === r[1]) {
              var t = r[2].split(',').map(B)
              return [t[0], t[1], t[2], t[3], t[4], t[5]]
            } else {
              var n = r[2].split(',').map(B)
              return [n[0], n[1], n[4], n[5], n[12], n[13]]
            }
          return null
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.VISIBILITY = { VISIBLE: 0, HIDDEN: 1, COLLAPSE: 2 })
        var n = (e.parseVisibility = function A(e) {
          switch (e) {
            case 'hidden':
              return t.HIDDEN
            case 'collapse':
              return t.COLLAPSE
            case 'visible':
            default:
              return t.VISIBLE
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.WORD_BREAK = {
          NORMAL: 'normal',
          BREAK_ALL: 'break-all',
          KEEP_ALL: 'keep-all'
        })
        var n = (e.parseWordBreak = function A(e) {
          switch (e) {
            case 'break-all':
              return t.BREAK_ALL
            case 'keep-all':
              return t.KEEP_ALL
            case 'normal':
            default:
              return t.NORMAL
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (e.parseZIndex = function A(e) {
          var r = 'auto' === e
          return { auto: r, order: r ? 0 : parseInt(e, 10) }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = r(89)
        Object.defineProperty(e, 'toCodePoints', {
          enumerable: true,
          get: function A() {
            return t.toCodePoints
          }
        })
        Object.defineProperty(e, 'fromCodePoint', {
          enumerable: true,
          get: function A() {
            return t.fromCodePoint
          }
        })
        var n = r(296)
        Object.defineProperty(e, 'LineBreaker', {
          enumerable: true,
          get: function A() {
            return n.LineBreaker
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.LineBreaker = e.inlineBreakOpportunities = e.lineBreakAtIndex = e.codePointsToCharacterClasses = e.UnicodeTrie = e.BREAK_ALLOWED = e.BREAK_NOT_ALLOWED = e.BREAK_MANDATORY = e.classes = e.LETTER_NUMBER_MODIFIER = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var a = r(297)
        var B = r(298)
        var s = o(B)
        var i = r(89)
        function o(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function l(A) {
          if (Array.isArray(A)) {
            for (var e = 0, r = Array(A.length); e < A.length; e++) r[e] = A[e]
            return r
          } else return Array.from(A)
        }
        function u(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var c = (e.LETTER_NUMBER_MODIFIER = 50)
        var Q = 1
        var w = 2
        var g = 3
        var f = 4
        var U = 5
        var d = 6
        var C = 7
        var h = 8
        var F = 9
        var E = 10
        var v = 11
        var H = 12
        var p = 13
        var N = 14
        var I = 15
        var m = 16
        var T = 17
        var K = 18
        var b = 19
        var y = 20
        var L = 21
        var _ = 22
        var S = 23
        var D = 24
        var M = 25
        var O = 26
        var R = 27
        var P = 28
        var X = 29
        var k = 30
        var x = 31
        var z = 32
        var V = 33
        var J = 34
        var G = 35
        var Y = 36
        var W = 37
        var j = 38
        var q = 39
        var Z = 40
        var $ = 41
        var AA = 42
        var eA = 43
        var rA = (e.classes = {
          BK: Q,
          CR: w,
          LF: g,
          CM: f,
          NL: U,
          SG: d,
          WJ: C,
          ZW: h,
          GL: F,
          SP: E,
          ZWJ: v,
          B2: H,
          BA: p,
          BB: N,
          HY: I,
          CB: m,
          CL: T,
          CP: K,
          EX: b,
          IN: y,
          NS: L,
          OP: _,
          QU: S,
          IS: D,
          NU: M,
          PO: O,
          PR: R,
          SY: P,
          AI: X,
          AL: k,
          CJ: x,
          EB: z,
          EM: V,
          H2: J,
          H3: G,
          HL: Y,
          ID: W,
          JL: j,
          JV: q,
          JT: Z,
          RI: $,
          SA: AA,
          XX: eA
        })
        var tA = (e.BREAK_MANDATORY = '!')
        var nA = (e.BREAK_NOT_ALLOWED = '×')
        var aA = (e.BREAK_ALLOWED = '÷')
        var BA = (e.UnicodeTrie = (0, a.createTrieFromBase64)(s.default))
        var sA = [k, Y]
        var iA = [Q, w, g, U]
        var oA = [E, h]
        var lA = [R, O]
        var uA = iA.concat(oA)
        var cA = [j, q, Z, J, G]
        var QA = [I, p]
        var wA = (e.codePointsToCharacterClasses = function A(e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'strict'
          var t = []
          var n = []
          var a = []
          e.forEach(function(A, e) {
            var B = BA.get(A)
            if (B > c) {
              a.push(true)
              B -= c
            } else a.push(false)
            if (-1 !== ['normal', 'auto', 'loose'].indexOf(r))
              if (-1 !== [8208, 8211, 12316, 12448].indexOf(A)) {
                n.push(e)
                return t.push(m)
              }
            if (B === f || B === v) {
              if (0 === e) {
                n.push(e)
                return t.push(k)
              }
              var s = t[e - 1]
              if (-1 === uA.indexOf(s)) {
                n.push(n[e - 1])
                return t.push(s)
              }
              n.push(e)
              return t.push(k)
            }
            n.push(e)
            if (B === x) return t.push('strict' === r ? L : W)
            if (B === AA) return t.push(k)
            if (B === X) return t.push(k)
            if (B === eA)
              if ((A >= 131072 && A <= 196605) || (A >= 196608 && A <= 262141))
                return t.push(W)
              else return t.push(k)
            t.push(B)
          })
          return [n, t, a]
        })
        var gA = function A(e, r, t, n) {
          var a = n[t]
          if (Array.isArray(e) ? -1 !== e.indexOf(a) : e === a) {
            var B = t
            while (B <= n.length) {
              B++
              var s = n[B]
              if (s === r) return true
              if (s !== E) break
            }
          }
          if (a === E) {
            var i = t
            while (i > 0) {
              i--
              var o = n[i]
              if (Array.isArray(e) ? -1 !== e.indexOf(o) : e === o) {
                var l = t
                while (l <= n.length) {
                  l++
                  var u = n[l]
                  if (u === r) return true
                  if (u !== E) break
                }
              }
              if (o !== E) break
            }
          }
          return false
        }
        var fA = function A(e, r) {
          var t = e
          while (t >= 0) {
            var n = r[t]
            if (n === E) t--
            else return n
          }
          return 0
        }
        var UA = function A(e, r, t, n, a) {
          if (0 === t[n]) return nA
          var B = n - 1
          if (Array.isArray(a) && true === a[B]) return nA
          var s = B - 1
          var i = B + 1
          var o = r[B]
          var l = s >= 0 ? r[s] : 0
          var u = r[i]
          if (o === w && u === g) return nA
          if (-1 !== iA.indexOf(o)) return tA
          if (-1 !== iA.indexOf(u)) return nA
          if (-1 !== oA.indexOf(u)) return nA
          if (fA(B, r) === h) return aA
          if (BA.get(e[B]) === v && (u === W || u === z || u === V)) return nA
          if (o === C || u === C) return nA
          if (o === F) return nA
          if (-1 === [E, p, I].indexOf(o) && u === F) return nA
          if (-1 !== [T, K, b, D, P].indexOf(u)) return nA
          if (fA(B, r) === _) return nA
          if (gA(S, _, B, r)) return nA
          if (gA([T, K], L, B, r)) return nA
          if (gA(H, H, B, r)) return nA
          if (o === E) return aA
          if (o === S || u === S) return nA
          if (u === m || o === m) return aA
          if (-1 !== [p, I, L].indexOf(u) || o === N) return nA
          if (l === Y && -1 !== QA.indexOf(o)) return nA
          if (o === P && u === Y) return nA
          if (u === y && -1 !== sA.concat(y, b, M, W, z, V).indexOf(o))
            return nA
          if (
            (-1 !== sA.indexOf(u) && o === M) ||
            (-1 !== sA.indexOf(o) && u === M)
          )
            return nA
          if (
            (o === R && -1 !== [W, z, V].indexOf(u)) ||
            (-1 !== [W, z, V].indexOf(o) && u === O)
          )
            return nA
          if (
            (-1 !== sA.indexOf(o) && -1 !== lA.indexOf(u)) ||
            (-1 !== lA.indexOf(o) && -1 !== sA.indexOf(u))
          )
            return nA
          if (
            (-1 !== [R, O].indexOf(o) &&
              (u === M || (-1 !== [_, I].indexOf(u) && r[i + 1] === M))) ||
            (-1 !== [_, I].indexOf(o) && u === M) ||
            (o === M && -1 !== [M, P, D].indexOf(u))
          )
            return nA
          if (-1 !== [M, P, D, T, K].indexOf(u)) {
            var c = B
            while (c >= 0) {
              var Q = r[c]
              if (Q === M) return nA
              else if (-1 !== [P, D].indexOf(Q)) c--
              else break
            }
          }
          if (-1 !== [R, O].indexOf(u)) {
            var f = -1 !== [T, K].indexOf(o) ? s : B
            while (f >= 0) {
              var U = r[f]
              if (U === M) return nA
              else if (-1 !== [P, D].indexOf(U)) f--
              else break
            }
          }
          if (
            (j === o && -1 !== [j, q, J, G].indexOf(u)) ||
            (-1 !== [q, J].indexOf(o) && -1 !== [q, Z].indexOf(u)) ||
            (-1 !== [Z, G].indexOf(o) && u === Z)
          )
            return nA
          if (
            (-1 !== cA.indexOf(o) && -1 !== [y, O].indexOf(u)) ||
            (-1 !== cA.indexOf(u) && o === R)
          )
            return nA
          if (-1 !== sA.indexOf(o) && -1 !== sA.indexOf(u)) return nA
          if (o === D && -1 !== sA.indexOf(u)) return nA
          if (
            (-1 !== sA.concat(M).indexOf(o) && u === _) ||
            (-1 !== sA.concat(M).indexOf(u) && o === K)
          )
            return nA
          if (o === $ && u === $) {
            var d = t[B]
            var X = 1
            while (d > 0) {
              d--
              if (r[d] === $) X++
              else break
            }
            if (X % 2 !== 0) return nA
          }
          if (o === z && u === V) return nA
          return aA
        }
        var dA = (e.lineBreakAtIndex = function A(e, r) {
          if (0 === r) return nA
          if (r >= e.length) return tA
          var t = wA(e),
            a = n(t, 2),
            B = a[0],
            s = a[1]
          return UA(e, s, B, r)
        })
        var CA = function A(e, r) {
          if (!r) r = { lineBreak: 'normal', wordBreak: 'normal' }
          var t = wA(e, r.lineBreak),
            a = n(t, 3),
            B = a[0],
            s = a[1],
            i = a[2]
          if ('break-all' === r.wordBreak || 'break-word' === r.wordBreak)
            s = s.map(function(A) {
              return -1 !== [M, k, AA].indexOf(A) ? W : A
            })
          var o =
            'keep-all' === r.wordBreak
              ? i.map(function(A, r) {
                  return A && e[r] >= 19968 && e[r] <= 40959
                })
              : null
          return [B, s, o]
        }
        var hA = (e.inlineBreakOpportunities = function A(e, r) {
          var t = (0, i.toCodePoints)(e)
          var a = nA
          var B = CA(t, r),
            s = n(B, 3),
            o = s[0],
            l = s[1],
            u = s[2]
          t.forEach(function(A, e) {
            a +=
              (0, i.fromCodePoint)(A) +
              (e >= t.length - 1 ? tA : UA(t, l, o, e + 1, u))
          })
          return a
        })
        var FA = (function() {
          function A(e, r, t, n) {
            u(this, A)
            this._codePoints = e
            this.required = r === tA
            this.start = t
            this.end = n
          }
          t(A, [
            {
              key: 'slice',
              value: function A() {
                return i.fromCodePoint.apply(
                  void 0,
                  l(this._codePoints.slice(this.start, this.end))
                )
              }
            }
          ])
          return A
        })()
        var EA = (e.LineBreaker = function A(e, r) {
          var t = (0, i.toCodePoints)(e)
          var a = CA(t, r),
            B = n(a, 3),
            s = B[0],
            o = B[1],
            l = B[2]
          var u = t.length
          var c = 0
          var Q = 0
          return {
            next: function A() {
              if (Q >= u) return { done: true }
              var e = nA
              while (Q < u && (e = UA(t, o, s, ++Q, l)) === nA);
              if (e !== nA || Q === u) {
                var r = new FA(t, e, c, Q)
                c = Q
                return { value: r, done: false }
              }
              return { done: true }
            }
          }
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.Trie = e.createTrieFromBase64 = e.UTRIE2_INDEX_2_MASK = e.UTRIE2_INDEX_2_BLOCK_LENGTH = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = e.UTRIE2_INDEX_1_OFFSET = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = e.UTRIE2_INDEX_2_BMP_LENGTH = e.UTRIE2_LSCP_INDEX_2_LENGTH = e.UTRIE2_DATA_MASK = e.UTRIE2_DATA_BLOCK_LENGTH = e.UTRIE2_LSCP_INDEX_2_OFFSET = e.UTRIE2_SHIFT_1_2 = e.UTRIE2_INDEX_SHIFT = e.UTRIE2_SHIFT_1 = e.UTRIE2_SHIFT_2 = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(89)
        function a(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var B = (e.UTRIE2_SHIFT_2 = 5)
        var s = (e.UTRIE2_SHIFT_1 = 6 + 5)
        var i = (e.UTRIE2_INDEX_SHIFT = 2)
        var o = (e.UTRIE2_SHIFT_1_2 = s - B)
        var l = (e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> B)
        var u = (e.UTRIE2_DATA_BLOCK_LENGTH = 1 << B)
        var c = (e.UTRIE2_DATA_MASK = u - 1)
        var Q = (e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> B)
        var w = (e.UTRIE2_INDEX_2_BMP_LENGTH = l + Q)
        var g = (e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = w)
        var f = (e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6)
        var U = (e.UTRIE2_INDEX_1_OFFSET = g + f)
        var d = (e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> s)
        var C = (e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << o)
        var h = (e.UTRIE2_INDEX_2_MASK = C - 1)
        var F = (e.createTrieFromBase64 = function A(e) {
          var r = (0, n.decode)(e)
          var t = Array.isArray(r)
            ? (0, n.polyUint32Array)(r)
            : new Uint32Array(r)
          var a = Array.isArray(r)
            ? (0, n.polyUint16Array)(r)
            : new Uint16Array(r)
          var B = 24
          var s = a.slice(B / 2, t[4] / 2)
          var i =
            2 === t[5]
              ? a.slice((B + t[4]) / 2)
              : t.slice(Math.ceil((B + t[4]) / 4))
          return new E(t[0], t[1], t[2], t[3], s, i)
        })
        var E = (e.Trie = (function() {
          function A(e, r, t, n, B, s) {
            a(this, A)
            this.initialValue = e
            this.errorValue = r
            this.highStart = t
            this.highValueIndex = n
            this.index = B
            this.data = s
          }
          t(A, [
            {
              key: 'get',
              value: function A(e) {
                var r = void 0
                if (e >= 0) {
                  if (e < 55296 || (e > 56319 && e <= 65535)) {
                    r = this.index[e >> B]
                    r = (r << i) + (e & c)
                    return this.data[r]
                  }
                  if (e <= 65535) {
                    r = this.index[l + ((e - 55296) >> B)]
                    r = (r << i) + (e & c)
                    return this.data[r]
                  }
                  if (e < this.highStart) {
                    r = U - d + (e >> s)
                    r = this.index[r]
                    r += (e >> B) & h
                    r = this.index[r]
                    r = (r << i) + (e & c)
                    return this.data[r]
                  }
                  if (e <= 1114111) return this.data[this.highValueIndex]
                }
                return this.errorValue
              }
            }
          ])
          return A
        })())
      },
      function(A, e, r) {
        'use strict'
        A.exports =
          'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA'
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = r(57)
        function n(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var a = function A(e, r, a) {
          n(this, A)
          this.type = t.PATH.CIRCLE
          this.x = e
          this.y = r
          this.radius = a
          if (false) {
            if (isNaN(e)) console.error('Invalid x value given for Circle')
            if (isNaN(r)) console.error('Invalid y value given for Circle')
            if (isNaN(a)) console.error('Invalid radius value given for Circle')
          }
        }
        e.default = a
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var a = r(17)
        var B = r(145)
        var s = r(301)
        var i = r(60)
        var o = c(i)
        var l = r(43)
        var u = r(88)
        function c(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function Q(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var w = (function() {
          function A(e, r) {
            Q(this, A)
            this.target = e
            this.options = r
            e.render(r)
          }
          n(A, [
            {
              key: 'renderNode',
              value: function A(e) {
                if (e.isVisible()) {
                  this.renderNodeBackgroundAndBorders(e)
                  this.renderNodeContent(e)
                }
              }
            },
            {
              key: 'renderNodeContent',
              value: function A(e) {
                var r = this
                var t = function A() {
                  if (e.childNodes.length)
                    e.childNodes.forEach(function(A) {
                      if (A instanceof o.default) {
                        var t = A.parent.style
                        r.target.renderTextNode(
                          A.bounds,
                          t.color,
                          t.font,
                          t.textDecoration,
                          t.textShadow
                        )
                      } else r.target.drawShape(A, e.style.color)
                    })
                  if (e.image) {
                    var t = r.options.imageStore.get(e.image)
                    if (t) {
                      var n = (0, a.calculateContentBox)(
                        e.bounds,
                        e.style.padding,
                        e.style.border
                      )
                      var B =
                        'number' === typeof t.width && t.width > 0
                          ? t.width
                          : n.width
                      var s =
                        'number' === typeof t.height && t.height > 0
                          ? t.height
                          : n.height
                      if (B > 0 && s > 0)
                        r.target.clip(
                          [(0, a.calculatePaddingBoxPath)(e.curvedBounds)],
                          function() {
                            r.target.drawImage(t, new a.Bounds(0, 0, B, s), n)
                          }
                        )
                    }
                  }
                }
                var n = e.getClipPaths()
                if (n.length) this.target.clip(n, t)
                else t()
              }
            },
            {
              key: 'renderNodeBackgroundAndBorders',
              value: function A(e) {
                var r = this
                var t =
                  !e.style.background.backgroundColor.isTransparent() ||
                  e.style.background.backgroundImage.length
                var n = e.style.border.some(function(A) {
                  return (
                    A.borderStyle !== u.BORDER_STYLE.NONE &&
                    !A.borderColor.isTransparent()
                  )
                })
                var a = function A() {
                  var n = (0, l.calculateBackgroungPaintingArea)(
                    e.curvedBounds,
                    e.style.background.backgroundClip
                  )
                  if (t)
                    r.target.clip([n], function() {
                      if (!e.style.background.backgroundColor.isTransparent())
                        r.target.fill(e.style.background.backgroundColor)
                      r.renderBackgroundImage(e)
                    })
                  e.style.border.forEach(function(A, t) {
                    if (
                      A.borderStyle !== u.BORDER_STYLE.NONE &&
                      !A.borderColor.isTransparent()
                    )
                      r.renderBorder(A, t, e.curvedBounds)
                  })
                }
                if (t || n) {
                  var B = e.parent ? e.parent.getClipPaths() : []
                  if (B.length) this.target.clip(B, a)
                  else a()
                }
              }
            },
            {
              key: 'renderBackgroundImage',
              value: function A(e) {
                var r = this
                e.style.background.backgroundImage
                  .slice(0)
                  .reverse()
                  .forEach(function(A) {
                    if ('url' === A.source.method && A.source.args.length)
                      r.renderBackgroundRepeat(e, A)
                    else if (/gradient/i.test(A.source.method))
                      r.renderBackgroundGradient(e, A)
                  })
              }
            },
            {
              key: 'renderBackgroundRepeat',
              value: function A(e, r) {
                var t = this.options.imageStore.get(r.source.args[0])
                if (t) {
                  var n = (0, l.calculateBackgroungPositioningArea)(
                    e.style.background.backgroundOrigin,
                    e.bounds,
                    e.style.padding,
                    e.style.border
                  )
                  var a = (0, l.calculateBackgroundSize)(r, t, n)
                  var B = (0, l.calculateBackgroundPosition)(r.position, a, n)
                  var s = (0, l.calculateBackgroundRepeatPath)(
                    r,
                    B,
                    a,
                    n,
                    e.bounds
                  )
                  var i = Math.round(n.left + B.x)
                  var o = Math.round(n.top + B.y)
                  this.target.renderRepeat(s, t, a, i, o)
                }
              }
            },
            {
              key: 'renderBackgroundGradient',
              value: function A(e, r) {
                var t = (0, l.calculateBackgroungPositioningArea)(
                  e.style.background.backgroundOrigin,
                  e.bounds,
                  e.style.padding,
                  e.style.border
                )
                var n = (0, l.calculateGradientBackgroundSize)(r, t)
                var B = (0, l.calculateBackgroundPosition)(r.position, n, t)
                var i = new a.Bounds(
                  Math.round(t.left + B.x),
                  Math.round(t.top + B.y),
                  n.width,
                  n.height
                )
                var o = (0, s.parseGradient)(e, r.source, i)
                if (o)
                  switch (o.type) {
                    case s.GRADIENT_TYPE.LINEAR_GRADIENT:
                      this.target.renderLinearGradient(i, o)
                      break
                    case s.GRADIENT_TYPE.RADIAL_GRADIENT:
                      this.target.renderRadialGradient(i, o)
                      break
                  }
              }
            },
            {
              key: 'renderBorder',
              value: function A(e, r, t) {
                this.target.drawShape(
                  (0, a.parsePathForBorder)(t, r),
                  e.borderColor
                )
              }
            },
            {
              key: 'renderStack',
              value: function A(e) {
                var r = this
                if (e.container.isVisible()) {
                  var t = e.getOpacity()
                  if (t !== this._opacity) {
                    this.target.setOpacity(e.getOpacity())
                    this._opacity = t
                  }
                  var n = e.container.style.transform
                  if (null !== n)
                    this.target.transform(
                      e.container.bounds.left + n.transformOrigin[0].value,
                      e.container.bounds.top + n.transformOrigin[1].value,
                      n.transform,
                      function() {
                        return r.renderStackContent(e)
                      }
                    )
                  else this.renderStackContent(e)
                }
              }
            },
            {
              key: 'renderStackContent',
              value: function A(e) {
                var r = f(e),
                  n = t(r, 5),
                  a = n[0],
                  B = n[1],
                  s = n[2],
                  i = n[3],
                  o = n[4]
                var l = g(e),
                  u = t(l, 2),
                  c = u[0],
                  Q = u[1]
                this.renderNodeBackgroundAndBorders(e.container)
                a.sort(U).forEach(this.renderStack, this)
                this.renderNodeContent(e.container)
                Q.forEach(this.renderNode, this)
                i.forEach(this.renderStack, this)
                o.forEach(this.renderStack, this)
                c.forEach(this.renderNode, this)
                B.forEach(this.renderStack, this)
                s.sort(U).forEach(this.renderStack, this)
              }
            },
            {
              key: 'render',
              value: function A(e) {
                var r = this
                if (this.options.backgroundColor)
                  this.target.rectangle(
                    this.options.x,
                    this.options.y,
                    this.options.width,
                    this.options.height,
                    this.options.backgroundColor
                  )
                this.renderStack(e)
                var t = this.target.getTarget()
                if (false)
                  return t.then(function(A) {
                    r.options.logger.log('Render completed')
                    return A
                  })
                return t
              }
            }
          ])
          return A
        })()
        e.default = w
        var g = function A(e) {
          var r = []
          var t = []
          var n = e.children.length
          for (var a = 0; a < n; a++) {
            var B = e.children[a]
            if (B.isInlineLevel()) r.push(B)
            else t.push(B)
          }
          return [r, t]
        }
        var f = function A(e) {
          var r = []
          var t = []
          var n = []
          var a = []
          var B = []
          var s = e.contexts.length
          for (var i = 0; i < s; i++) {
            var o = e.contexts[i]
            if (
              o.container.isPositioned() ||
              o.container.style.opacity < 1 ||
              o.container.isTransformed()
            )
              if (o.container.style.zIndex.order < 0) r.push(o)
              else if (o.container.style.zIndex.order > 0) n.push(o)
              else t.push(o)
            else if (o.container.isFloating()) a.push(o)
            else B.push(o)
          }
          return [r, t, n, a, B]
        }
        var U = function A(e, r) {
          if (e.container.style.zIndex.order > r.container.style.zIndex.order)
            return 1
          else if (
            e.container.style.zIndex.order < r.container.style.zIndex.order
          )
            return -1
          return e.container.index > r.container.index ? 1 : -1
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.transformWebkitRadialGradientArgs = e.parseGradient = e.RadialGradient = e.LinearGradient = e.RADIAL_GRADIENT_SHAPE = e.GRADIENT_TYPE = void 0
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = r(30)
        var a = c(n)
        var B = r(302)
        var s = r(16)
        var i = c(s)
        var o = r(24)
        var l = c(o)
        var u = r(31)
        function c(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function Q(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var w = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i
        var g = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i
        var f = /(px)|%|( 0)$/i
        var U = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i
        var d = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i
        var C = (e.GRADIENT_TYPE = { LINEAR_GRADIENT: 0, RADIAL_GRADIENT: 1 })
        var h = (e.RADIAL_GRADIENT_SHAPE = { CIRCLE: 0, ELLIPSE: 1 })
        var F = {
          left: new l.default('0%'),
          top: new l.default('0%'),
          center: new l.default('50%'),
          right: new l.default('100%'),
          bottom: new l.default('100%')
        }
        var E = (e.LinearGradient = function A(e, r) {
          Q(this, A)
          this.type = C.LINEAR_GRADIENT
          this.colorStops = e
          this.direction = r
        })
        var v = (e.RadialGradient = function A(e, r, t, n) {
          Q(this, A)
          this.type = C.RADIAL_GRADIENT
          this.colorStops = e
          this.shape = r
          this.center = t
          this.radius = n
        })
        var H = (e.parseGradient = function A(e, r, t) {
          var n = r.args,
            a = r.method,
            B = r.prefix
          if ('linear-gradient' === a) return N(n, t, !!B)
          else if ('gradient' === a && 'linear' === n[0])
            return N(['to bottom'].concat(S(n.slice(3))), t, !!B)
          else if ('radial-gradient' === a)
            return I(e, '-webkit-' === B ? _(n) : n, t)
          else if ('gradient' === a && 'radial' === n[0])
            return I(e, S(_(n.slice(1))), t)
        })
        var p = function A(e, r, t) {
          var n = []
          for (var a = r; a < e.length; a++) {
            var B = e[a]
            var s = f.test(B)
            var o = B.lastIndexOf(' ')
            var u = new i.default(s ? B.substring(0, o) : B)
            var c = s
              ? new l.default(B.substring(o + 1))
              : a === r
                ? new l.default('0%')
                : a === e.length - 1 ? new l.default('100%') : null
            n.push({ color: u, stop: c })
          }
          var Q = n.map(function(A) {
            var e = A.color,
              r = A.stop
            var n = 0 === t ? 0 : r ? r.getAbsoluteValue(t) / t : null
            return { color: e, stop: n }
          })
          var w = Q[0].stop
          for (var g = 0; g < Q.length; g++)
            if (null !== w) {
              var U = Q[g].stop
              if (null === U) {
                var d = g
                while (null === Q[d].stop) d++
                var C = d - g + 1
                var h = Q[d].stop
                var F = (h - w) / C
                for (; g < d; g++) w = Q[g].stop = w + F
              } else w = U
            }
          return Q
        }
        var N = function A(e, r, t) {
          var n = (0, B.parseAngle)(e[0])
          var a = w.test(e[0])
          var s = a || null !== n || g.test(e[0])
          var i = s
            ? null !== n
              ? m(t ? n - 0.5 * Math.PI : n, r)
              : a ? K(e[0], r) : b(e[0], r)
            : m(Math.PI, r)
          var o = s ? 1 : 0
          var l = Math.min(
            (0, u.distance)(
              Math.abs(i.x0) + Math.abs(i.x1),
              Math.abs(i.y0) + Math.abs(i.y1)
            ),
            2 * r.width,
            2 * r.height
          )
          return new E(p(e, o, l), i)
        }
        var I = function A(e, r, t) {
          var n = r[0].match(d)
          var a =
            n && ('circle' === n[1] || (void 0 !== n[3] && void 0 === n[5]))
              ? h.CIRCLE
              : h.ELLIPSE
          var B = {}
          var s = {}
          if (n) {
            if (void 0 !== n[3])
              B.x = (0, o.calculateLengthFromValueWithUnit)(
                e,
                n[3],
                n[4]
              ).getAbsoluteValue(t.width)
            if (void 0 !== n[5])
              B.y = (0, o.calculateLengthFromValueWithUnit)(
                e,
                n[5],
                n[6]
              ).getAbsoluteValue(t.height)
            if (n[7]) s.x = F[n[7].toLowerCase()]
            else if (void 0 !== n[8])
              s.x = (0, o.calculateLengthFromValueWithUnit)(e, n[8], n[9])
            if (n[10]) s.y = F[n[10].toLowerCase()]
            else if (void 0 !== n[11])
              s.y = (0, o.calculateLengthFromValueWithUnit)(e, n[11], n[12])
          }
          var i = {
            x: void 0 === s.x ? t.width / 2 : s.x.getAbsoluteValue(t.width),
            y: void 0 === s.y ? t.height / 2 : s.y.getAbsoluteValue(t.height)
          }
          var l = L((n && n[2]) || 'farthest-corner', a, i, B, t)
          return new v(p(r, n ? 1 : 0, Math.min(l.x, l.y)), a, i, l)
        }
        var m = function A(e, r) {
          var t = r.width
          var n = r.height
          var a = 0.5 * t
          var B = 0.5 * n
          var s = Math.abs(t * Math.sin(e)) + Math.abs(n * Math.cos(e))
          var i = s / 2
          var o = a + Math.sin(e) * i
          var l = B - Math.cos(e) * i
          var u = t - o
          var c = n - l
          return { x0: o, x1: u, y0: l, y1: c }
        }
        var T = function A(e) {
          return Math.acos(
            e.width / 2 / ((0, u.distance)(e.width, e.height) / 2)
          )
        }
        var K = function A(e, r) {
          switch (e) {
            case 'bottom':
            case 'to top':
              return m(0, r)
            case 'left':
            case 'to right':
              return m(Math.PI / 2, r)
            case 'right':
            case 'to left':
              return m(3 * Math.PI / 2, r)
            case 'top right':
            case 'right top':
            case 'to bottom left':
            case 'to left bottom':
              return m(Math.PI + T(r), r)
            case 'top left':
            case 'left top':
            case 'to bottom right':
            case 'to right bottom':
              return m(Math.PI - T(r), r)
            case 'bottom left':
            case 'left bottom':
            case 'to top right':
            case 'to right top':
              return m(T(r), r)
            case 'bottom right':
            case 'right bottom':
            case 'to top left':
            case 'to left top':
              return m(2 * Math.PI - T(r), r)
            case 'top':
            case 'to bottom':
            default:
              return m(Math.PI, r)
          }
        }
        var b = function A(e, r) {
          var n = e.split(' ').map(parseFloat),
            a = t(n, 2),
            B = a[0],
            s = a[1]
          var i = B / 100 * r.width / (s / 100 * r.height)
          return m(Math.atan(isNaN(i) ? 1 : i) + Math.PI / 2, r)
        }
        var y = function A(e, r, t, n) {
          var a = [
            { x: 0, y: 0 },
            { x: 0, y: e.height },
            { x: e.width, y: 0 },
            { x: e.width, y: e.height }
          ]
          return a.reduce(
            function(A, e) {
              var a = (0, u.distance)(r - e.x, t - e.y)
              if (n ? a < A.optimumDistance : a > A.optimumDistance)
                return { optimumCorner: e, optimumDistance: a }
              return A
            },
            { optimumDistance: n ? Infinity : -Infinity, optimumCorner: null }
          ).optimumCorner
        }
        var L = function A(e, r, t, n, a) {
          var B = t.x
          var s = t.y
          var i = 0
          var o = 0
          switch (e) {
            case 'closest-side':
              if (r === h.CIRCLE)
                i = o = Math.min(
                  Math.abs(B),
                  Math.abs(B - a.width),
                  Math.abs(s),
                  Math.abs(s - a.height)
                )
              else if (r === h.ELLIPSE) {
                i = Math.min(Math.abs(B), Math.abs(B - a.width))
                o = Math.min(Math.abs(s), Math.abs(s - a.height))
              }
              break
            case 'closest-corner':
              if (r === h.CIRCLE)
                i = o = Math.min(
                  (0, u.distance)(B, s),
                  (0, u.distance)(B, s - a.height),
                  (0, u.distance)(B - a.width, s),
                  (0, u.distance)(B - a.width, s - a.height)
                )
              else if (r === h.ELLIPSE) {
                var l =
                  Math.min(Math.abs(s), Math.abs(s - a.height)) /
                  Math.min(Math.abs(B), Math.abs(B - a.width))
                var c = y(a, B, s, true)
                i = (0, u.distance)(c.x - B, (c.y - s) / l)
                o = l * i
              }
              break
            case 'farthest-side':
              if (r === h.CIRCLE)
                i = o = Math.max(
                  Math.abs(B),
                  Math.abs(B - a.width),
                  Math.abs(s),
                  Math.abs(s - a.height)
                )
              else if (r === h.ELLIPSE) {
                i = Math.max(Math.abs(B), Math.abs(B - a.width))
                o = Math.max(Math.abs(s), Math.abs(s - a.height))
              }
              break
            case 'farthest-corner':
              if (r === h.CIRCLE)
                i = o = Math.max(
                  (0, u.distance)(B, s),
                  (0, u.distance)(B, s - a.height),
                  (0, u.distance)(B - a.width, s),
                  (0, u.distance)(B - a.width, s - a.height)
                )
              else if (r === h.ELLIPSE) {
                var Q =
                  Math.max(Math.abs(s), Math.abs(s - a.height)) /
                  Math.max(Math.abs(B), Math.abs(B - a.width))
                var w = y(a, B, s, false)
                i = (0, u.distance)(w.x - B, (w.y - s) / Q)
                o = Q * i
              }
              break
            default:
              i = n.x || 0
              o = void 0 !== n.y ? n.y : i
              break
          }
          return { x: i, y: o }
        }
        var _ = (e.transformWebkitRadialGradientArgs = function A(e) {
          var r = ''
          var t = ''
          var n = ''
          var a = ''
          var B = 0
          var s = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i
          var i = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i
          var o = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i
          var l = e[B].match(s)
          if (l) B++
          var u = e[B].match(i)
          if (u) {
            r = u[1] || ''
            n = u[2] || ''
            if ('contain' === n) n = 'closest-side'
            else if ('cover' === n) n = 'farthest-corner'
            B++
          }
          var c = e[B].match(o)
          if (c) B++
          var Q = e[B].match(s)
          if (Q) B++
          var w = e[B].match(o)
          if (w) B++
          var g = Q || l
          if (g && g[1]) {
            a = g[1] + (/^\d+$/.test(g[1]) ? 'px' : '')
            if (g[2]) a += ' ' + g[2] + (/^\d+$/.test(g[2]) ? 'px' : '')
          }
          var f = w || c
          if (f) {
            t = f[0]
            if (!f[1]) t += 'px'
          }
          if (a && !r && !t && !n) {
            t = a
            a = ''
          }
          if (a) a = 'at ' + a
          return [
            [r, n, t, a]
              .filter(function(A) {
                return !!A
              })
              .join(' ')
          ].concat(e.slice(B))
        })
        var S = function A(e) {
          return e
            .map(function(A) {
              return A.match(U)
            })
            .map(function(A, r) {
              if (!A) return e[r]
              switch (A[1]) {
                case 'from':
                  return A[4] + ' 0%'
                case 'to':
                  return A[4] + ' 100%'
                case 'color-stop':
                  if ('%' === A[3]) return A[4] + ' ' + A[2]
                  return A[4] + ' ' + 100 * parseFloat(A[2]) + '%'
              }
            })
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        var t = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i
        var n = (e.parseAngle = function A(e) {
          var r = e.match(t)
          if (r) {
            var n = parseFloat(r[1])
            switch (r[2].toLowerCase()) {
              case 'deg':
                return Math.PI * n / 180
              case 'grad':
                return Math.PI / 200 * n
              case 'rad':
                return n
              case 'turn':
                return 2 * Math.PI * n
            }
          }
          return null
        })
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.cloneWindow = e.DocumentCloner = void 0
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var a = r(17)
        var B = r(146)
        var s = r(304)
        var i = w(s)
        var o = r(31)
        var l = r(43)
        var u = r(135)
        var c = w(u)
        var Q = r(305)
        function w(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function g(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var f = 'data-html2canvas-ignore'
        var U = (e.DocumentCloner = (function() {
          function A(e, r, t, n, a) {
            g(this, A)
            this.referenceElement = e
            this.scrolledElements = []
            this.copyStyles = n
            this.inlineImages = n
            this.logger = t
            this.options = r
            this.renderer = a
            this.resourceLoader = new i.default(r, t, window)
            this.pseudoContentData = { counters: {}, quoteDepth: 0 }
            this.documentElement = this.cloneNode(
              e.ownerDocument.documentElement
            )
          }
          n(A, [
            {
              key: 'inlineAllImages',
              value: function A(e) {
                var r = this
                if (this.inlineImages && e) {
                  var t = e.style
                  Promise.all(
                    (0, l.parseBackgroundImage)(t.backgroundImage).map(function(
                      A
                    ) {
                      if ('url' === A.method)
                        return r.resourceLoader
                          .inlineImage(A.args[0])
                          .then(function(A) {
                            return A && 'string' === typeof A.src
                              ? 'url("' + A.src + '")'
                              : 'none'
                          })
                          .catch(function(A) {
                            if (false) r.logger.log('Unable to load image', A)
                          })
                      return Promise.resolve(
                        '' + A.prefix + A.method + '(' + A.args.join(',') + ')'
                      )
                    })
                  ).then(function(A) {
                    if (A.length > 1) t.backgroundColor = ''
                    t.backgroundImage = A.join(',')
                  })
                  if (e instanceof HTMLImageElement)
                    this.resourceLoader
                      .inlineImage(e.src)
                      .then(function(A) {
                        if (
                          A &&
                          e instanceof HTMLImageElement &&
                          e.parentNode
                        ) {
                          var r = e.parentNode
                          var t = (0, o.copyCSSStyles)(
                            e.style,
                            A.cloneNode(false)
                          )
                          r.replaceChild(t, e)
                        }
                      })
                      .catch(function(A) {
                        if (false) r.logger.log('Unable to load image', A)
                      })
                }
              }
            },
            {
              key: 'inlineFonts',
              value: function A(e) {
                var r = this
                return Promise.all(
                  Array.from(e.styleSheets).map(function(A) {
                    if (A.href)
                      return fetch(A.href)
                        .then(function(A) {
                          return A.text()
                        })
                        .then(function(e) {
                          return C(e, A.href)
                        })
                        .catch(function(A) {
                          if (false)
                            r.logger.log('Unable to load stylesheet', A)
                          return []
                        })
                    return d(A, e)
                  })
                )
                  .then(function(A) {
                    return A.reduce(function(A, e) {
                      return A.concat(e)
                    }, [])
                  })
                  .then(function(A) {
                    return Promise.all(
                      A.map(function(A) {
                        return fetch(A.formats[0].src)
                          .then(function(A) {
                            return A.blob()
                          })
                          .then(function(A) {
                            return new Promise(function(e, r) {
                              var t = new FileReader()
                              t.onerror = r
                              t.onload = function() {
                                var A = t.result
                                e(A)
                              }
                              t.readAsDataURL(A)
                            })
                          })
                          .then(function(e) {
                            A.fontFace.setProperty('src', 'url("' + e + '")')
                            return '@font-face {' + A.fontFace.cssText + ' '
                          })
                      })
                    )
                  })
                  .then(function(A) {
                    var t = e.createElement('style')
                    t.textContent = A.join('\n')
                    r.documentElement.appendChild(t)
                  })
              }
            },
            {
              key: 'createElementClone',
              value: function A(e) {
                var r = this
                if (this.copyStyles && e instanceof HTMLCanvasElement) {
                  var t = e.ownerDocument.createElement('img')
                  try {
                    t.src = e.toDataURL()
                    return t
                  } catch (A) {
                    if (false)
                      this.logger.log(
                        'Unable to clone canvas contents, canvas is tainted'
                      )
                  }
                }
                if (e instanceof HTMLIFrameElement) {
                  var n = e.cloneNode(false)
                  var B = y()
                  n.setAttribute('data-html2canvas-internal-iframe-key', B)
                  var s = (0, a.parseBounds)(e, 0, 0),
                    i = s.width,
                    l = s.height
                  this.resourceLoader.cache[B] = _(e, this.options)
                    .then(function(A) {
                      return r.renderer(
                        A,
                        {
                          async: r.options.async,
                          allowTaint: r.options.allowTaint,
                          backgroundColor: '#ffffff',
                          canvas: null,
                          imageTimeout: r.options.imageTimeout,
                          logging: r.options.logging,
                          proxy: r.options.proxy,
                          removeContainer: r.options.removeContainer,
                          scale: r.options.scale,
                          foreignObjectRendering:
                            r.options.foreignObjectRendering,
                          useCORS: r.options.useCORS,
                          target: new c.default(),
                          width: i,
                          height: l,
                          x: 0,
                          y: 0,
                          windowWidth: A.ownerDocument.defaultView.innerWidth,
                          windowHeight: A.ownerDocument.defaultView.innerHeight,
                          scrollX: A.ownerDocument.defaultView.pageXOffset,
                          scrollY: A.ownerDocument.defaultView.pageYOffset
                        },
                        r.logger.child(B)
                      )
                    })
                    .then(function(A) {
                      return new Promise(function(r, t) {
                        var a = document.createElement('img')
                        a.onload = function() {
                          return r(A)
                        }
                        a.onerror = t
                        a.src = A.toDataURL()
                        if (n.parentNode)
                          n.parentNode.replaceChild(
                            (0, o.copyCSSStyles)(
                              e.ownerDocument.defaultView.getComputedStyle(e),
                              a
                            ),
                            n
                          )
                      })
                    })
                  return n
                }
                if (
                  e instanceof HTMLStyleElement &&
                  e.sheet &&
                  e.sheet.cssRules
                ) {
                  var u = [].slice
                    .call(e.sheet.cssRules, 0)
                    .reduce(function(A, e) {
                      return A + e.cssText
                    }, '')
                  var Q = e.cloneNode(false)
                  Q.textContent = u
                  return Q
                }
                return e.cloneNode(false)
              }
            },
            {
              key: 'cloneNode',
              value: function A(e) {
                var r =
                  e.nodeType === Node.TEXT_NODE
                    ? document.createTextNode(e.nodeValue)
                    : this.createElementClone(e)
                var t = e.ownerDocument.defaultView
                var n =
                  e instanceof t.HTMLElement ? t.getComputedStyle(e) : null
                var a =
                  e instanceof t.HTMLElement
                    ? t.getComputedStyle(e, ':before')
                    : null
                var B =
                  e instanceof t.HTMLElement
                    ? t.getComputedStyle(e, ':after')
                    : null
                if (this.referenceElement === e && r instanceof t.HTMLElement)
                  this.clonedReferenceElement = r
                if (r instanceof t.HTMLBodyElement) T(r)
                var s = (0, Q.parseCounterReset)(n, this.pseudoContentData)
                var i = (0, Q.resolvePseudoContent)(
                  e,
                  a,
                  this.pseudoContentData
                )
                for (var l = e.firstChild; l; l = l.nextSibling)
                  if (
                    l.nodeType !== Node.ELEMENT_NODE ||
                    ('SCRIPT' !== l.nodeName &&
                      !l.hasAttribute(f) &&
                      ('function' !== typeof this.options.ignoreElements ||
                        !this.options.ignoreElements(l)))
                  )
                    if (!this.copyStyles || 'STYLE' !== l.nodeName)
                      r.appendChild(this.cloneNode(l))
                var u = (0, Q.resolvePseudoContent)(
                  e,
                  B,
                  this.pseudoContentData
                )
                ;(0, Q.popCounters)(s, this.pseudoContentData)
                if (e instanceof t.HTMLElement && r instanceof t.HTMLElement) {
                  if (a) this.inlineAllImages(E(e, r, a, i, H))
                  if (B) this.inlineAllImages(E(e, r, B, u, p))
                  if (n && this.copyStyles && !(e instanceof HTMLIFrameElement))
                    (0, o.copyCSSStyles)(n, r)
                  this.inlineAllImages(r)
                  if (0 !== e.scrollTop || 0 !== e.scrollLeft)
                    this.scrolledElements.push([r, e.scrollLeft, e.scrollTop])
                  switch (e.nodeName) {
                    case 'CANVAS':
                      if (!this.copyStyles) F(e, r)
                      break
                    case 'TEXTAREA':
                    case 'SELECT':
                      r.value = e.value
                      break
                  }
                }
                return r
              }
            }
          ])
          return A
        })())
        var d = function A(e, r) {
          return (e.cssRules ? Array.from(e.cssRules) : [])
            .filter(function(A) {
              return A.type === CSSRule.FONT_FACE_RULE
            })
            .map(function(A) {
              var e = (0, l.parseBackgroundImage)(
                A.style.getPropertyValue('src')
              )
              var t = []
              for (var n = 0; n < e.length; n++)
                if (
                  'url' === e[n].method &&
                  e[n + 1] &&
                  'format' === e[n + 1].method
                ) {
                  var a = r.createElement('a')
                  a.href = e[n].args[0]
                  if (r.body) r.body.appendChild(a)
                  var B = { src: a.href, format: e[n + 1].args[0] }
                  t.push(B)
                }
              return {
                formats: t.filter(function(A) {
                  return /^woff/i.test(A.format)
                }),
                fontFace: A.style
              }
            })
            .filter(function(A) {
              return A.formats.length
            })
        }
        var C = function A(e, r) {
          var t = document.implementation.createHTMLDocument('')
          var n = document.createElement('base')
          n.href = r
          var a = document.createElement('style')
          a.textContent = e
          if (t.head) t.head.appendChild(n)
          if (t.body) t.body.appendChild(a)
          return a.sheet ? d(a.sheet, t) : []
        }
        var h = function A(e, r, t) {
          if (
            e.defaultView &&
            (r !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset)
          )
            e.defaultView.scrollTo(r, t)
        }
        var F = function A(e, r) {
          try {
            if (r) {
              r.width = e.width
              r.height = e.height
              var t = e.getContext('2d')
              var n = r.getContext('2d')
              if (t)
                n.putImageData(t.getImageData(0, 0, e.width, e.height), 0, 0)
              else n.drawImage(e, 0, 0)
            }
          } catch (A) {}
        }
        var E = function A(e, r, t, n, a) {
          if (
            !t ||
            !t.content ||
            'none' === t.content ||
            '-moz-alt-content' === t.content ||
            'none' === t.display
          )
            return
          var B = r.ownerDocument.createElement('html2canvaspseudoelement')
          ;(0, o.copyCSSStyles)(t, B)
          if (n) {
            var s = n.length
            for (var i = 0; i < s; i++) {
              var u = n[i]
              switch (u.type) {
                case Q.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                  var c = r.ownerDocument.createElement('img')
                  c.src = (0, l.parseBackgroundImage)(
                    'url(' + u.value + ')'
                  )[0].args[0]
                  c.style.opacity = '1'
                  B.appendChild(c)
                  break
                case Q.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                  B.appendChild(r.ownerDocument.createTextNode(u.value))
                  break
              }
            }
          }
          B.className = N + ' ' + I
          r.className += a === H ? ' ' + N : ' ' + I
          if (a === H) r.insertBefore(B, r.firstChild)
          else r.appendChild(B)
          return B
        }
        var v = /^url\((.+)\)$/i
        var H = ':before'
        var p = ':after'
        var N = '___html2canvas___pseudoelement_before'
        var I = '___html2canvas___pseudoelement_after'
        var m =
          '{\n    content: "" !important;\n    display: none !important;\n}'
        var T = function A(e) {
          K(e, '.' + N + H + m + '\n         .' + I + p + m)
        }
        var K = function A(e, r) {
          var t = e.ownerDocument.createElement('style')
          t.innerHTML = r
          e.appendChild(t)
        }
        var b = function A(e) {
          var r = t(e, 3),
            n = r[0],
            a = r[1],
            B = r[2]
          n.scrollLeft = a
          n.scrollTop = B
        }
        var y = function A() {
          return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16)
        }
        var L = /^data:text\/(.+);(base64)?,(.*)$/i
        var _ = function A(e, r) {
          try {
            return Promise.resolve(e.contentWindow.document.documentElement)
          } catch (A) {
            return r.proxy
              ? (0, B.Proxy)(e.src, r)
                  .then(function(A) {
                    var e = A.match(L)
                    if (!e) return Promise.reject()
                    return 'base64' === e[2]
                      ? window.atob(decodeURIComponent(e[3]))
                      : decodeURIComponent(e[3])
                  })
                  .then(function(A) {
                    return S(e.ownerDocument, (0, a.parseBounds)(e, 0, 0)).then(
                      function(e) {
                        var r = e.contentWindow
                        var t = r.document
                        t.open()
                        t.write(A)
                        var n = D(e).then(function() {
                          return t.documentElement
                        })
                        t.close()
                        return n
                      }
                    )
                  })
              : Promise.reject()
          }
        }
        var S = function A(e, r) {
          var t = e.createElement('iframe')
          t.className = 'html2canvas-container'
          t.style.visibility = 'hidden'
          t.style.position = 'fixed'
          t.style.left = '-10000px'
          t.style.top = '0px'
          t.style.border = '0'
          t.width = r.width.toString()
          t.height = r.height.toString()
          t.scrolling = 'no'
          t.setAttribute(f, 'true')
          if (!e.body)
            return Promise.reject(
              false
                ? 'Body element not found in Document that is getting rendered'
                : ''
            )
          e.body.appendChild(t)
          return Promise.resolve(t)
        }
        var D = function A(e) {
          var r = e.contentWindow
          var t = r.document
          return new Promise(function(A, n) {
            r.onload = e.onload = t.onreadystatechange = function() {
              var r = setInterval(function() {
                if (
                  t.body.childNodes.length > 0 &&
                  'complete' === t.readyState
                ) {
                  clearInterval(r)
                  A(e)
                }
              }, 50)
            }
          })
        }
        var M = (e.cloneWindow = function A(e, r, t, n, a, B) {
          var s = new U(t, n, a, false, B)
          var i = e.defaultView.pageXOffset
          var o = e.defaultView.pageYOffset
          return S(e, r).then(function(A) {
            var a = A.contentWindow
            var B = a.document
            var l = D(A).then(function() {
              s.scrolledElements.forEach(b)
              a.scrollTo(r.left, r.top)
              if (
                /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                (a.scrollY !== r.top || a.scrollX !== r.left)
              ) {
                B.documentElement.style.top = -r.top + 'px'
                B.documentElement.style.left = -r.left + 'px'
                B.documentElement.style.position = 'absolute'
              }
              var i = Promise.resolve([
                A,
                s.clonedReferenceElement,
                s.resourceLoader
              ])
              var o = n.onclone
              return s.clonedReferenceElement instanceof a.HTMLElement ||
                s.clonedReferenceElement instanceof e.defaultView.HTMLElement ||
                s.clonedReferenceElement instanceof HTMLElement
                ? 'function' === typeof o
                  ? Promise.resolve()
                      .then(function() {
                        return o(B)
                      })
                      .then(function() {
                        return i
                      })
                  : i
                : Promise.reject(
                    false
                      ? 'Error finding the ' +
                        t.nodeName +
                        ' in the cloned document'
                      : ''
                  )
            })
            B.open()
            B.write(O(document.doctype) + '<html></html>')
            h(t.ownerDocument, i, o)
            B.replaceChild(B.adoptNode(s.documentElement), B.documentElement)
            B.close()
            return l
          })
        })
        var O = function A(e) {
          var r = ''
          if (e) {
            r += '<!DOCTYPE '
            if (e.name) r += e.name
            if (e.internalSubset) r += e.internalSubset
            if (e.publicId) r += '"' + e.publicId + '"'
            if (e.systemId) r += '"' + e.systemId + '"'
            r += '>'
          }
          return r
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.ResourceStore = void 0
        var t = (function() {
          function A(A, e) {
            for (var r = 0; r < e.length; r++) {
              var t = e[r]
              t.enumerable = t.enumerable || false
              t.configurable = true
              if ('value' in t) t.writable = true
              Object.defineProperty(A, t.key, t)
            }
          }
          return function(e, r, t) {
            if (r) A(e.prototype, r)
            if (t) A(e, t)
            return e
          }
        })()
        var n = r(61)
        var a = s(n)
        var B = r(146)
        function s(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function i(A, e) {
          if (!(A instanceof e))
            throw new TypeError('Cannot call a class as a function')
        }
        var o = (function() {
          function A(e, r, t) {
            i(this, A)
            this.options = e
            this._window = t
            this.origin = this.getOrigin(t.location.href)
            this.cache = {}
            this.logger = r
            this._index = 0
          }
          t(A, [
            {
              key: 'loadImage',
              value: function A(e) {
                var r = this
                if (this.hasResourceInCache(e)) return e
                if (!f(e) || a.default.SUPPORT_SVG_DRAWING)
                  if (
                    true === this.options.allowTaint ||
                    w(e) ||
                    this.isSameOrigin(e)
                  )
                    return this.addImage(e, e, false)
                  else if (!this.isSameOrigin(e))
                    if ('string' === typeof this.options.proxy) {
                      this.cache[e] = (0, B.Proxy)(e, this.options).then(
                        function(A) {
                          return U(A, r.options.imageTimeout || 0)
                        }
                      )
                      return e
                    } else if (
                      true === this.options.useCORS &&
                      a.default.SUPPORT_CORS_IMAGES
                    )
                      return this.addImage(e, e, true)
              }
            },
            {
              key: 'inlineImage',
              value: function A(e) {
                var r = this
                if (w(e)) return U(e, this.options.imageTimeout || 0)
                if (this.hasResourceInCache(e)) return this.cache[e]
                if (
                  !this.isSameOrigin(e) &&
                  'string' === typeof this.options.proxy
                )
                  return (this.cache[e] = (0, B.Proxy)(e, this.options).then(
                    function(A) {
                      return U(A, r.options.imageTimeout || 0)
                    }
                  ))
                return this.xhrImage(e)
              }
            },
            {
              key: 'xhrImage',
              value: function A(e) {
                var r = this
                this.cache[e] = new Promise(function(A, t) {
                  var n = new XMLHttpRequest()
                  n.onreadystatechange = function() {
                    if (4 === n.readyState)
                      if (200 !== n.status)
                        t(
                          'Failed to fetch image ' +
                            e.substring(0, 256) +
                            ' with status code ' +
                            n.status
                        )
                      else {
                        var r = new FileReader()
                        r.addEventListener(
                          'load',
                          function() {
                            var e = r.result
                            A(e)
                          },
                          false
                        )
                        r.addEventListener(
                          'error',
                          function(A) {
                            return t(A)
                          },
                          false
                        )
                        r.readAsDataURL(n.response)
                      }
                  }
                  n.responseType = 'blob'
                  if (r.options.imageTimeout) {
                    var a = r.options.imageTimeout
                    n.timeout = a
                    n.ontimeout = function() {
                      return t(
                        false
                          ? 'Timed out (' +
                            a +
                            'ms) fetching ' +
                            e.substring(0, 256)
                          : ''
                      )
                    }
                  }
                  n.open('GET', e, true)
                  n.send()
                }).then(function(A) {
                  return U(A, r.options.imageTimeout || 0)
                })
                return this.cache[e]
              }
            },
            {
              key: 'loadCanvas',
              value: function A(e) {
                var r = String(this._index++)
                this.cache[r] = Promise.resolve(e)
                return r
              }
            },
            {
              key: 'hasResourceInCache',
              value: function A(e) {
                return 'undefined' !== typeof this.cache[e]
              }
            },
            {
              key: 'addImage',
              value: function A(e, r, t) {
                var n = this
                if (false) this.logger.log('Added image ' + e.substring(0, 256))
                var B = function A(e) {
                  return new Promise(function(A, a) {
                    var B = new Image()
                    B.onload = function() {
                      return A(B)
                    }
                    if (!e || t) B.crossOrigin = 'anonymous'
                    B.onerror = a
                    B.src = r
                    if (true === B.complete)
                      setTimeout(function() {
                        A(B)
                      }, 500)
                    if (n.options.imageTimeout) {
                      var s = n.options.imageTimeout
                      setTimeout(function() {
                        return a(
                          false
                            ? 'Timed out (' +
                              s +
                              'ms) fetching ' +
                              r.substring(0, 256)
                            : ''
                        )
                      }, s)
                    }
                  })
                }
                this.cache[e] =
                  g(r) && !f(r)
                    ? a.default.SUPPORT_BASE64_DRAWING(r).then(B)
                    : B(true)
                return e
              }
            },
            {
              key: 'isSameOrigin',
              value: function A(e) {
                return this.getOrigin(e) === this.origin
              }
            },
            {
              key: 'getOrigin',
              value: function A(e) {
                var r =
                  this._link ||
                  (this._link = this._window.document.createElement('a'))
                r.href = e
                r.href = r.href
                return r.protocol + r.hostname + r.port
              }
            },
            {
              key: 'ready',
              value: function A() {
                var e = this
                var r = Object.keys(this.cache)
                var t = r.map(function(A) {
                  return e.cache[A].catch(function(A) {
                    if (false) e.logger.log('Unable to load image', A)
                    return null
                  })
                })
                return Promise.all(t).then(function(A) {
                  if (false)
                    e.logger.log('Finished loading ' + A.length + ' images', A)
                  return new l(r, A)
                })
              }
            }
          ])
          return A
        })()
        e.default = o
        var l = (e.ResourceStore = (function() {
          function A(e, r) {
            i(this, A)
            this._keys = e
            this._resources = r
          }
          t(A, [
            {
              key: 'get',
              value: function A(e) {
                var r = this._keys.indexOf(e)
                return -1 === r ? null : this._resources[r]
              }
            }
          ])
          return A
        })())
        var u = /^data:image\/svg\+xml/i
        var c = /^data:image\/.*;base64,/i
        var Q = /^data:image\/.*/i
        var w = function A(e) {
          return Q.test(e)
        }
        var g = function A(e) {
          return c.test(e)
        }
        var f = function A(e) {
          return 'svg' === e.substr(-3).toLowerCase() || u.test(e)
        }
        var U = function A(e, r) {
          return new Promise(function(A, t) {
            var n = new Image()
            n.onload = function() {
              return A(n)
            }
            n.onerror = t
            n.src = e
            if (true === n.complete)
              setTimeout(function() {
                A(n)
              }, 500)
            if (r)
              setTimeout(function() {
                return t(false ? 'Timed out (' + r + 'ms) loading image' : '')
              }, r)
          })
        }
      },
      function(A, e, r) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: true })
        e.parseContent = e.resolvePseudoContent = e.popCounters = e.parseCounterReset = e.TOKEN_TYPE = e.PSEUDO_CONTENT_ITEM_TYPE = void 0
        var t = (function() {
          function A(A, e) {
            var r = []
            var t = true
            var n = false
            var a = void 0
            try {
              for (
                var B = A[Symbol.iterator](), s;
                !(t = (s = B.next()).done);
                t = true
              ) {
                r.push(s.value)
                if (e && r.length === e) break
              }
            } catch (A) {
              n = true
              a = A
            } finally {
              try {
                if (!t && B['return']) B['return']()
              } finally {
                if (n) throw a
              }
            }
            return r
          }
          return function(e, r) {
            if (Array.isArray(e)) return e
            else if (Symbol.iterator in Object(e)) return A(e, r)
            else
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance'
              )
          }
        })()
        var n = r(90)
        var a = r(59)
        var B = (e.PSEUDO_CONTENT_ITEM_TYPE = { TEXT: 0, IMAGE: 1 })
        var s = (e.TOKEN_TYPE = {
          STRING: 0,
          ATTRIBUTE: 1,
          URL: 2,
          COUNTER: 3,
          COUNTERS: 4,
          OPENQUOTE: 5,
          CLOSEQUOTE: 6
        })
        var i = (e.parseCounterReset = function A(e, r) {
          if (!e || !e.counterReset || 'none' === e.counterReset) return []
          var n = []
          var a = e.counterReset.split(/\s*,\s*/)
          var B = a.length
          for (var s = 0; s < B; s++) {
            var i = a[s].split(/\s+/),
              o = t(i, 2),
              l = o[0],
              u = o[1]
            n.push(l)
            var c = r.counters[l]
            if (!c) c = r.counters[l] = []
            c.push(parseInt(u || 0, 10))
          }
          return n
        })
        var o = (e.popCounters = function A(e, r) {
          var t = e.length
          for (var n = 0; n < t; n++) r.counters[e[n]].pop()
        })
        var l = (e.resolvePseudoContent = function A(e, r, n) {
          if (
            !r ||
            !r.content ||
            'none' === r.content ||
            '-moz-alt-content' === r.content ||
            'none' === r.display
          )
            return null
          var a = u(r.content)
          var i = a.length
          var o = []
          var l = ''
          var c = r.counterIncrement
          if (c && 'none' !== c) {
            var g = c.split(/\s+/),
              f = t(g, 2),
              U = f[0],
              d = f[1]
            var C = n.counters[U]
            if (C) C[C.length - 1] += void 0 === d ? 1 : parseInt(d, 10)
          }
          for (var h = 0; h < i; h++) {
            var F = a[h]
            switch (F.type) {
              case s.STRING:
                l += F.value || ''
                break
              case s.ATTRIBUTE:
                if (e instanceof HTMLElement && F.value)
                  l += e.getAttribute(F.value) || ''
                break
              case s.COUNTER:
                var E = n.counters[F.name || '']
                if (E) l += w([E[E.length - 1]], '', F.format)
                break
              case s.COUNTERS:
                var v = n.counters[F.name || '']
                if (v) l += w(v, F.glue, F.format)
                break
              case s.OPENQUOTE:
                l += Q(r, true, n.quoteDepth)
                n.quoteDepth++
                break
              case s.CLOSEQUOTE:
                n.quoteDepth--
                l += Q(r, false, n.quoteDepth)
                break
              case s.URL:
                if (l) {
                  o.push({ type: B.TEXT, value: l })
                  l = ''
                }
                o.push({ type: B.IMAGE, value: F.value || '' })
                break
            }
          }
          if (l) o.push({ type: B.TEXT, value: l })
          return o
        })
        var u = (e.parseContent = function A(e, r) {
          if (r && r[e]) return r[e]
          var t = []
          var n = e.length
          var a = false
          var B = false
          var i = false
          var o = ''
          var l = ''
          var u = []
          for (var Q = 0; Q < n; Q++) {
            var w = e.charAt(Q)
            switch (w) {
              case "'":
              case '"':
                if (B) o += w
                else {
                  a = !a
                  if (!i && !a) {
                    t.push({ type: s.STRING, value: o })
                    o = ''
                  }
                }
                break
              case '\\':
                if (B) {
                  o += w
                  B = false
                } else B = true
                break
              case '(':
                if (a) o += w
                else {
                  i = true
                  l = o
                  o = ''
                  u = []
                }
                break
              case ')':
                if (a) o += w
                else if (i) {
                  if (o) u.push(o)
                  switch (l) {
                    case 'attr':
                      if (u.length > 0)
                        t.push({ type: s.ATTRIBUTE, value: u[0] })
                      break
                    case 'counter':
                      if (u.length > 0) {
                        var g = { type: s.COUNTER, name: u[0] }
                        if (u.length > 1) g.format = u[1]
                        t.push(g)
                      }
                      break
                    case 'counters':
                      if (u.length > 0) {
                        var f = { type: s.COUNTERS, name: u[0] }
                        if (u.length > 1) f.glue = u[1]
                        if (u.length > 2) f.format = u[2]
                        t.push(f)
                      }
                      break
                    case 'url':
                      if (u.length > 0) t.push({ type: s.URL, value: u[0] })
                      break
                  }
                  i = false
                  o = ''
                }
                break
              case ',':
                if (a) o += w
                else if (i) {
                  u.push(o)
                  o = ''
                }
                break
              case ' ':
              case '\t':
                if (a) o += w
                else if (o) {
                  c(t, o)
                  o = ''
                }
                break
              default:
                o += w
            }
            if ('\\' !== w) B = false
          }
          if (o) c(t, o)
          if (r) r[e] = t
          return t
        })
        var c = function A(e, r) {
          switch (r) {
            case 'open-quote':
              e.push({ type: s.OPENQUOTE })
              break
            case 'close-quote':
              e.push({ type: s.CLOSEQUOTE })
              break
          }
        }
        var Q = function A(e, r, t) {
          var n = e.quotes ? e.quotes.split(/\s+/) : ["'\"'", "'\"'"]
          var a = 2 * t
          if (a >= n.length) a = n.length - 2
          if (!r) ++a
          return n[a].replace(/^["']|["']$/g, '')
        }
        var w = function A(e, r, t) {
          var B = e.length
          var s = ''
          for (var i = 0; i < B; i++) {
            if (i > 0) s += r || ''
            s += (0, n.createCounterText)(
              e[i],
              (0, a.parseListStyleType)(t || 'decimal'),
              false
            )
          }
          return s
        }
      }
    ],
    [267]
  )
  return { page: A.default }
})
