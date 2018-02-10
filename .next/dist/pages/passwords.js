'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of')

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn')

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require('babel-runtime/helpers/inherits')

var _inherits3 = _interopRequireDefault(_inherits2)

var _style = require('styled-jsx/style.js')

var _style2 = _interopRequireDefault(_style)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _head = require('next/dist/lib/head.js')

var _head2 = _interopRequireDefault(_head)

var _link = require('next/dist/lib/link.js')

var _link2 = _interopRequireDefault(_link)

var _layout = require('./layout')

var _layout2 = _interopRequireDefault(_layout)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _jsxFileName =
  '/Users/petrnikolasprokop/Documents/work/gen_pass/pages/passwords.js?entry'
// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Export component
// ------------------------------------------------------------------------------

var _class = (function(_React$Component) {
  ;(0, _inherits3.default)(_class, _React$Component)

  function _class(props) {
    ;(0, _classCallCheck3.default)(this, _class)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(
        this,
        props
      )
    )

    _this.updateInputValue = function(event) {
      /** Error message */
      document.getElementById('error').style.display = 'none'

      _this.setState({
        inputValue: event.target.value
      })
    }

    _this.generatorHandleClick = function(length) {
      /** Error message */
      document.getElementById('error').style.display = 'none'

      /** Password */
      var password = ''

      /** Possible word, numbers, etc. */
      var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      /** Check if value exist */
      if (!length || typeof length === 'undefined') {
        length = 20
      }

      if (length < 100001) {
        try {
          /** Iterator */
          for (var i = 0; i < length; i++) {
            password += possible.charAt(
              Math.floor(Math.random() * possible.length)
            )
          }

          _this.setState({
            generatedPassword: password
          })
        } catch (err) {
          console.log(err)
        }
      } else {
        /** Error message */
        document.getElementById('error').style.display = 'block'
      }
    }

    _this.state = {
      inputValue: 20,
      generatedPassword: ''
    }
    return _this
  }

  /** Update value in input */

  /** Generate password */

  ;(0, _createClass3.default)(_class, [
    {
      key: 'render',

      /** Render HTML */
      value: function render() {
        var _this2 = this

        return _react2.default.createElement(
          _layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          _react2.default.createElement(_style2.default, {
            styleId: '3835206234',
            css:
              '.card.jsx-3835206234{width:100%;max-width:45rem;margin:1.5rem auto 0;background-color:#fff;border:none;padding:2rem 1.5rem;}.btn-primary.jsx-3835206234,.btn-primary.jsx-3835206234:focus,.btn-primary.jsx-3835206234:active{background:#f8114d !important;border-color:#f8114d !important;}input.jsx-3835206234{max-width:200px;margin:0 auto;height:2.5rem;padding:0 1rem;border:0;border-radius:3px;background-color:#f4f4fb;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}label.jsx-3835206234{color:#868f96 !important;}textarea.jsx-3835206234{resize:none;height:7.25rem;padding:0 1.125rem;padding-top:1.6rem;padding-bottom:1rem;border:0;border-radius:3px;background-color:#f4f4fb !important;border-radius:3px;line-height:1.5;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out;transition:box-shadow .5s,border-color .25s ease-in-out;-webkit-transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;transition:box-shadow .5s,border-color .25s ease-in-out,-webkit-box-shadow .5s;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;}.form-input.jsx-3835206234:focus{border-color:#868f96;box-shadow:none;}#error.jsx-3835206234{color:red;display:none;}@media only screen and (max-width:1100px){.card.jsx-3835206234{width:100%;}h1.jsx-3835206234{font-size:1rem;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bhc3N3b3Jkcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRW9CLEFBR3dCLEFBU21CLEFBS2QsQUFpQlMsQUFJYixBQW9CUyxBQUtYLEFBTUcsQUFJSSxVQVRKLENBNURHLEFBa0VoQixDQS9CZSxHQW1DZixDQXhEYyxLQXlDRSxFQU1sQixFQTlCQSxFQTlCdUIsQUFtQ0YsR0EzQmEsQUFNbEIsT0F5Q2hCLE9BeENpQixFQXFCSSxFQW5DRyxXQWViLEdBUFgsR0E0QnNCLEdBcEJGLEVBZk4sWUFDUSxHQW1DWCxDQXBCZ0IsUUFxQlAsUUFuQ3BCLFNBZTBFLENBcUJwQyxvQ0FDbEIsa0JBQ0YsZ0JBQ3dELENBdkJSLHVFQXdCQSxpRUF2QlIsdUVBd0JBLGlEQXZCdUIsdUVBd0JBLCtGQXZCdkQsd0JBQ0gscUJBQ0wsMEJBc0JRLHdCQUNILFdBdEJ2QixVQXVCa0IsNkRBQ2xCIiwiZmlsZSI6InBhZ2VzL3Bhc3N3b3Jkcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0cm5pa29sYXNwcm9rb3AvRG9jdW1lbnRzL3dvcmsvZ2VuX3Bhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEltcG9ydCBsaWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQYWdlIGZyb20gJy4vbGF5b3V0J1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0IGNvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dFZhbHVlOiAyMCxcbiAgICAgIGdlbmVyYXRlZFBhc3N3b3JkOiAnJ1xuICAgIH07XG4gIH1cblxuICAvKiogVXBkYXRlIHZhbHVlIGluIGlucHV0ICovXG4gIHVwZGF0ZUlucHV0VmFsdWUgPSAoZXZlbnQpID0+IHtcbiAgICAvKiogRXJyb3IgbWVzc2FnZSAqL1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBHZW5lcmF0ZSBwYXNzd29yZCAqL1xuICBnZW5lcmF0b3JIYW5kbGVDbGljayA9IChsZW5ndGgpID0+IHtcbiAgICAvKiogRXJyb3IgbWVzc2FnZSAqL1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgLyoqIFBhc3N3b3JkICovXG4gICAgbGV0IHBhc3N3b3JkID0gXCJcIjtcblxuICAgIC8qKiBQb3NzaWJsZSB3b3JkLCBudW1iZXJzLCBldGMuICovXG4gICAgY29uc3QgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG5cbiAgICAvKiogQ2hlY2sgaWYgdmFsdWUgZXhpc3QgKi9cbiAgICBpZiAoIWxlbmd0aCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBsZW5ndGggPSAyMDtcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoIDwgMTAwMDAxKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvKiogSXRlcmF0b3IgKi9cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXNzd29yZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBnZW5lcmF0ZWRQYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIEVycm9yIG1lc3NhZ2UgKi9cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG4gIH1cbiAgXG4gIC8qKiBSZW5kZXIgSFRNTCAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5idG4tcHJpbWFyeSwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmODExNGQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y4MTE0ZCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4yNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC1ib3gtc2hhZG93IC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMjVzIGVhc2UtaW4tb3V0LC13ZWJraXQtYm94LXNoYWRvdyAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyxib3JkZXItY29sb3IgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzLGJvcmRlci1jb2xvciAuMjVzIGVhc2UtaW4tb3V0LC13ZWJraXQtYm94LXNoYWRvdyAuNXM7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODY4Zjk2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiA3LjI1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjEyNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjZyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZmIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMjVzIGVhc2UtaW4tb3V0LC13ZWJraXQtYm94LXNoYWRvdyAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjI1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuNXMsYm9yZGVyLWNvbG9yIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyxib3JkZXItY29sb3IgLjI1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjVzO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4NjhmOTY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNlcnJvciB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbC14cy0xMiB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluX2NhcmRcIiBjbGFzc05hbWU9XCJjYXJkIGFuaW1hdGVkIGZhZGVJblVwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgaDFcIj5QYXNzd29yZHMgZ2VuZXJhdG9yPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LWdyYXlcIj5TbywgY2xpY2sgb24gdGhlIGJ1dHRvbiBhbmQgZ2VuZXJhdGUgeW91ciBwYXNzd29yZCBub3chPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCIgZm9yPVwiY291bnRcIj5TZXQgbGVuZ2h0IG9mIHlvdXIgcGFzc3dvcmQgKGRlZmF1bHQgaXMgMjApPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9IG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnVwZGF0ZUlucHV0VmFsdWUoZXZlbnQpfSB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjEwMDAwMFwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBpZD1cImNvdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4geyB0aGlzLmdlbmVyYXRvckhhbmRsZUNsaWNrKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkgfSB9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwic3RhcnRfYnV0dG9uXCI+R2VuZXJhdGUgbm93ITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlcnJvclwiPk1heCB2YWx1ZSBpcyAxMDAwMDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIiBmb3I9XCJyZXN1bHRcIj5Zb3VyIHBhc3N3b3JkIGlzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5lcmF0ZWRQYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIGlkPVwicmVzdWx0XCIgcm93cz1cIjdcIiByZWFkT25seT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LWdyYXlcIj5SYW5kb20sIHNlY3VyZSwgY3VzdG9tLCBlYXN5IGFuZCBmYXN0LjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfSBcbn0gICJdfQ== */\n/*@ sourceURL=pages/passwords.js?entry */'
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-3835206234' + ' ' + 'container',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-3835206234' + ' ' + 'columns',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 149
                }
              },
              _react2.default.createElement(
                'div',
                {
                  className:
                    'jsx-3835206234' + ' ' + 'column col-xs-12 text-center',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  }
                },
                _react2.default.createElement(
                  'div',
                  {
                    id: 'main_card',
                    className:
                      'jsx-3835206234' + ' ' + 'card animated fadeInUp',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 152
                    }
                  },
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'jsx-3835206234' + ' ' + 'card-header',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 153
                      }
                    },
                    _react2.default.createElement(
                      'h1',
                      {
                        className: 'jsx-3835206234' + ' ' + 'card-title h1',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 154
                        }
                      },
                      'Passwords generator'
                    ),
                    _react2.default.createElement(
                      'div',
                      {
                        className:
                          'jsx-3835206234' + ' ' + 'card-subtitle text-gray',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 155
                        }
                      },
                      'So, click on the button and generate your password now!'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'jsx-3835206234' + ' ' + 'card-body',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      {
                        className: 'jsx-3835206234' + ' ' + 'form-group',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 159
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        {
                          for: 'count',
                          className: 'jsx-3835206234' + ' ' + 'form-label',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 160
                          }
                        },
                        'Set lenght of your password (default is 20)'
                      ),
                      _react2.default.createElement('input', {
                        value: this.state.inputValue,
                        onChange: function onChange(event) {
                          return _this2.updateInputValue(event)
                        },
                        type: 'number',
                        min: '1',
                        max: '100000',
                        id: 'count',
                        className: 'jsx-3835206234' + ' ' + 'form-input',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 161
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'button',
                      {
                        onClick: function onClick() {
                          _this2.generatorHandleClick(_this2.state.inputValue)
                        },
                        id: 'start_button',
                        className: 'jsx-3835206234' + ' ' + 'btn btn-primary',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 163
                        }
                      },
                      'Generate now!'
                    ),
                    _react2.default.createElement(
                      'span',
                      {
                        id: 'error',
                        className: 'jsx-3835206234',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 164
                        }
                      },
                      'Max value is 100000'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'jsx-3835206234' + ' ' + 'card-footer',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      {
                        className: 'jsx-3835206234' + ' ' + 'form-group',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 168
                        }
                      },
                      _react2.default.createElement(
                        'label',
                        {
                          for: 'result',
                          className: 'jsx-3835206234' + ' ' + 'form-label',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 169
                          }
                        },
                        'Your password is:'
                      ),
                      _react2.default.createElement('textarea', {
                        value: this.state.generatedPassword,
                        id: 'result',
                        rows: '7',
                        readOnly: true,
                        className: 'jsx-3835206234' + ' ' + 'form-input',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 170
                        }
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      {
                        className:
                          'jsx-3835206234' + ' ' + 'card-subtitle text-gray',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 173
                        }
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

  return _class
})(_react2.default.Component)

exports.default = _class
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bhc3N3b3Jkcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJMaW5rIiwiUGFnZSIsInByb3BzIiwidXBkYXRlSW5wdXRWYWx1ZSIsImV2ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInNldFN0YXRlIiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZ2VuZXJhdG9ySGFuZGxlQ2xpY2siLCJsZW5ndGgiLCJwYXNzd29yZCIsInBvc3NpYmxlIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlZFBhc3N3b3JkIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7QUFOakI7QUFDQTtBQUNBOzs7QUFPQTtBQUNBO0FBQ0E7OztrQ0FFRTs7a0JBQUEsQUFBWSxPQUFPO3dDQUFBOztzSUFBQSxBQUNYOztVQURXLEFBU25CLG1CQUFtQixVQUFBLEFBQUMsT0FBVSxBQUM1QjtBQUNBO2VBQUEsQUFBUyxlQUFULEFBQXdCLFNBQXhCLEFBQWlDLE1BQWpDLEFBQXVDLFVBQXZDLEFBQWlELEFBRWpEOztZQUFBLEFBQUs7b0JBQ1MsTUFBQSxBQUFNLE9BRHBCLEFBQWMsQUFDYSxBQUU1QjtBQUhlLEFBQ1o7QUFkZTs7VUFBQSxBQW1CbkIsdUJBQXVCLFVBQUEsQUFBQyxRQUFXLEFBQ2pDO0FBQ0E7ZUFBQSxBQUFTLGVBQVQsQUFBd0IsU0FBeEIsQUFBaUMsTUFBakMsQUFBdUMsVUFBdkMsQUFBaUQsQUFFakQ7O0FBQ0E7VUFBSSxXQUFKLEFBQWUsQUFFZjs7QUFDQTtVQUFNLFdBQU4sQUFBaUIsQUFFakI7O0FBQ0E7VUFBSSxDQUFBLEFBQUMsVUFBVSxPQUFBLEFBQU8sV0FBdEIsQUFBaUMsYUFBYSxBQUM1QztpQkFBQSxBQUFTLEFBQ1Y7QUFFRDs7VUFBSSxTQUFKLEFBQWEsUUFBUSxBQUNuQjtZQUFJLEFBQ0Y7QUFDQTtlQUFJLElBQUksSUFBUixBQUFZLEdBQUcsSUFBZixBQUFtQixRQUFuQixBQUEyQixLQUFLLEFBQzVCO3dCQUFZLFNBQUEsQUFBUyxPQUFPLEtBQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxXQUFXLFNBQXZELEFBQVksQUFBZ0IsQUFBb0MsQUFDbkU7QUFFRDs7Z0JBQUEsQUFBSzsrQkFBTCxBQUFjLEFBQ08sQUFFdEI7QUFIZSxBQUNaO0FBUEosVUFTRSxPQUFBLEFBQU8sS0FBSyxBQUNaO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7QUFDRjtBQWJELGFBYU8sQUFDTDtBQUNBO2lCQUFBLEFBQVMsZUFBVCxBQUF3QixTQUF4QixBQUFpQyxNQUFqQyxBQUF1QyxVQUF2QyxBQUFpRCxBQUNsRDtBQUNGO0FBbkRrQixBQUVqQjs7VUFBQSxBQUFLO2tCQUFRLEFBQ0MsQUFDWjt5QkFKZSxBQUVqQixBQUFhLEFBRVE7QUFGUixBQUNYO1dBR0g7QUFFRDs7QUFVQTs7Ozs7U0FtQ0E7Ozs2QkFDUzttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLE9BQUE7aUJBQUE7YUFBQSxBQThFRTtBQTlFRiwwQkE4RUUsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUUsY0FBQSxTQUFLLElBQUwsQUFBUSxpREFBUixBQUE4Qjs7b0JBQTlCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYzs7b0JBQWQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFDRSxBQUVFLEFBR0YsNkVBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsV0FBOEIsT0FBOUIsQUFBa0MsNkNBQWxDLEFBQWlCOztvQkFBakI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx5RkFBTyxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixZQUFZLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLGlCQUFkLEFBQVMsQUFBc0I7QUFBOUUsV0FBc0YsTUFBdEYsQUFBMkYsVUFBUyxLQUFwRyxBQUF3RyxLQUFJLEtBQTVHLEFBQWdILFVBQWdDLElBQWhKLEFBQW1KLDZDQUFuSixBQUFtSTs7b0JBQW5JO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxZQUFRLFNBQVUsbUJBQU0sQUFBRTtpQkFBQSxBQUFLLHFCQUFxQixPQUFBLEFBQUssTUFBL0IsQUFBcUMsQUFBYTtBQUE1RSxXQUEyRyxJQUEzRyxBQUE4RyxvREFBOUcsQUFBeUY7O29CQUF6RjtzQkFBQTtBQUFBO1NBTEYsQUFLRSxBQUNBLGtDQUFBLGNBQUEsVUFBTSxJQUFOLEFBQVMsb0JBQVQ7O29CQUFBO3NCQUFBO0FBQUE7U0FaSixBQU1FLEFBTUUsQUFHRix5Q0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxXQUE4QixPQUE5QixBQUFrQyw4Q0FBbEMsQUFBaUI7O29CQUFqQjtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLGtFQUFVLE9BQU8sS0FBQSxBQUFLLE1BQXRCLEFBQTRCLG1CQUEwQyxJQUF0RSxBQUF5RSxVQUFTLE1BQWxGLEFBQXVGLEtBQUksVUFBM0YsMENBQUEsQUFBeUQ7O29CQUF6RDtzQkFISixBQUNFLEFBRUUsQUFHRjtBQUhFOzJCQUdGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUE7QUFBQTtBQUFBLFNBeEdkLEFBQ0UsQUE4RUUsQUFDRSxBQUNFLEFBRUUsQUFlRSxBQU1FLEFBU2Y7Ozs7O0VBekswQixnQkFBTSxBIiwiZmlsZSI6InBhc3N3b3Jkcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0cm5pa29sYXNwcm9rb3AvRG9jdW1lbnRzL3dvcmsvZ2VuX3Bhc3MifQ==
