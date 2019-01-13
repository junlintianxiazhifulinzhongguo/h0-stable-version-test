'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserInfo = exports.getAccessToken = exports.auth_url = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlipaySdk = require('alipay-sdk').default;

var alipaySdk = new AlipaySdk({
    url: _config2.default.alipay.URL,
    appId: _config2.default.alipay.APPID,
    privateKey: _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../config/key/alipay/rsa_private_key.pem'), 'utf-8'),
    alipayPublicKey: _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../config/key/alipay/alipay_public_key.pem'), 'ascii'),
    format: _config2.default.alipay.FORMAT,
    charset: _config2.default.alipay.CHARSET,
    signType: _config2.default.alipay.SIGN_TYPE,
    timestamp: _config2.default.alipay.TIMESTAMP,
    version: _config2.default.alipay.VERSION
});

var auth_url = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=' + _config2.default.alipay.APPID + '&scope=auth_user&redirect_uri=' + _config2.default.alipay.Redirect_uri;

var getAccessToken = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(auth_code) {
        var result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log(auth_code, 1111222);
                        _context.next = 4;
                        return alipaySdk.exec('alipay.system.oauth.token', {
                            grantType: 'authorization_code',
                            code: auth_code
                        }, {
                            validateSign: true,
                            log: null
                        });

                    case 4:
                        result = _context.sent;

                        console.log(result);
                        return _context.abrupt('return', result);

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 9]]);
    }));

    return function getAccessToken(_x) {
        return _ref.apply(this, arguments);
    };
}();

var getUserInfo = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(access_token) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        console.log(access_token, 333333);
                        _context2.next = 4;
                        return alipaySdk.exec('alipay.user.info.share', {
                            auth_token: access_token
                        }, {
                            validateSign: true,
                            log: null
                        });

                    case 4:
                        result = _context2.sent;

                        console.log(result);
                        return _context2.abrupt('return', result);

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 9]]);
    }));

    return function getUserInfo(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

exports.auth_url = auth_url;
exports.getAccessToken = getAccessToken;
exports.getUserInfo = getUserInfo;
//# sourceMappingURL=alipay.js.map