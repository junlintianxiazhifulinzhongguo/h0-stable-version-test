'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.common = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common = exports.common = function common(app) {
    (0, _koaOnerror2.default)(app);
    app.use((0, _koaBodyparser2.default)()).use((0, _koaJson2.default)()).use((0, _koaLogger2.default)()).use(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
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
    }()).on('error', function (err, ctx) {
        console.log(err);
        _koaLogger2.default.error('server error', err, ctx);
    });
};
//# sourceMappingURL=common.js.map