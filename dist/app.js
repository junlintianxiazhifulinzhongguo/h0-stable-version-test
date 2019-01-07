'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();

var json = require('koa-json');
var onerror = require('koa-onerror');
var bodyparser = require('koa-bodyparser');
var logger = require('koa-logger');
var debug = require('debug')('koa2:server');
var path = require('path');

var config = require('./config');
var routes = require('./routes');

var port = process.env.PORT || config.port;

onerror(app);

app.use(bodyparser()).use(json()).use(logger()).use(router.routes()).use(router.allowedMethods());

app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
    var start, ms;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;

            console.log(ctx.method + ' ' + ctx.url + ' - $ms');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World';
});

routes(router);
app.on('error', function (err, ctx) {
  console.log(err);
  logger.error('server error', err, ctx);
});

module.exports = app.listen(config.port, function () {
  console.log('Listening on http://localhost:' + config.port);
});
//# sourceMappingURL=app.js.map