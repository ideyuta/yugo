/**
 * Conditionally Joinning Objects
 *
 * @params {Object[]} rawObjects Objects
 * @return {Object}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = yugo;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function yugo() {
  for (var _len = arguments.length, rawObjects = Array(_len), _key = 0; _key < _len; _key++) {
    rawObjects[_key] = arguments[_key];
  }

  var objects = rawObjects.map(function (o) {
    if (typeof o === 'object') {
      if (o instanceof Array) {
        if (o[1]) {
          return o[0];
        }
        return null;
      }
      return o;
    }
    return null;
  }).filter(function (o) {
    return o !== null;
  });
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objects)));
}

module.exports = exports['default'];
