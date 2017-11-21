'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/b', as: '/a' }, _react2.default.createElement('a', null, 'a'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/a', as: '/b' }, _react2.default.createElement('a', null, 'b'))));
};