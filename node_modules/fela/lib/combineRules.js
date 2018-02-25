'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineRules;

var _assignStyle = require('css-in-js-utils/lib/assignStyle');

var _assignStyle2 = _interopRequireDefault(_assignStyle);

var _arrayReduce = require('fast-loops/lib/arrayReduce');

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combineRules() {
  for (var _len = arguments.length, rules = Array(_len), _key = 0; _key < _len; _key++) {
    rules[_key] = arguments[_key];
  }

  return function (props, renderer) {
    var merge = renderer._mergeStyle || _assignStyle2.default;

    return (0, _arrayReduce2.default)(rules, function (style, rule) {
      return merge(style, rule(props, renderer));
    }, {});
  };
}