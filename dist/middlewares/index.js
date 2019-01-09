'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = ['common', 'router'];
var useMiddlewares = function useMiddlewares(app) {
  _ramda2.default.map(_ramda2.default.compose(_ramda2.default.forEachObjIndexed(function (initWith) {
    return initWith(app);
  }), require, function (name) {
    return (0, _path.resolve)(__dirname, './' + name);
  }))(middlewares);
};
exports.default = useMiddlewares;
//# sourceMappingURL=index.js.map