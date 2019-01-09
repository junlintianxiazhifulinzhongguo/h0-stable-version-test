'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _init = require('./database/init');

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('koa2:server');

var port = process.env.PORT || _config2.default.port;(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var app;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _init.connect)();

        case 2:
          _context.next = 4;
          return (0, _init.iniSchema)();

        case 4:
          app = new _koa2.default();
          _context.next = 7;
          return (0, _middlewares2.default)(app);

        case 7:
          module.exports = app.listen(port, function () {
            console.log('Listening on http://localhost:' + port);
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))();
//# sourceMappingURL=app.js.map