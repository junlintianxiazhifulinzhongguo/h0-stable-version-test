'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginController = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;

var _decorator = require('../lib/decorator');

var _alipay = require('../service/alipay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var loginController = exports.loginController = (_dec = (0, _decorator.controller)('/api/v0/login'), _dec2 = (0, _decorator.get)("/"), _dec3 = (0, _decorator.get)("/authUrl"), _dec4 = (0, _decorator.get)("/authRedirect"), _dec(_class = (_class2 = function () {
    function loginController() {
        (0, _classCallCheck3.default)(this, loginController);
    }

    (0, _createClass3.default)(loginController, [{
        key: 'login',
        value: function login(ctx, next) {
            ctx.body = {
                "name": "lijun"
            };
        }
    }, {
        key: 'getAlipayAuthUrl',
        value: function getAlipayAuthUrl(ctx, next) {
            ctx.body = {
                auth_url: _alipay.auth_url
            };
        }
    }, {
        key: 'getAlipayAuthUrlById',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
                var a;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // www.junlintianxiazhifulinzhongguo.top/api/v0/login/authRedirect?app_id=2018123062714467&source=alipay_wallet&scope=auth_user&auth_code=05cfa47b90104c9eae6d760c983dOX57
                                // const { app_id,source,scope,auth_code } = ctx.query
                                // console.log(auth_code)
                                // const { access_token,alipay_user_id,expires_in,re_expires_in,refresh_token,user_id } = await access_token(auth_code)
                                // const result = await getUserInfo(access_token)
                                // const [ accessToken,alipayUserId,expiresIn,reExpiresIn,refreshToken,userId ] = await access_token(auth_code)
                                // const result = await getAccessToken(auth_code)
                                console.log(5555);
                                // console.log(result)
                                console.log(6666);
                                // ctx.body = {
                                //     accessToken
                                // }
                                // console.log(result.accessToken)


                                a = {
                                    "accessToken": "authusrBa5492ef2af1f4e22ac26bcd3d7f9eX57",
                                    "alipayUserId": "20880002728689039857121792515757",
                                    "expiresIn": 1296000,
                                    "reExpiresIn": 2592000,
                                    "refreshToken": "authusrB88a548e0513c4ffd8de8ed74c9e1aX57",
                                    "userId": "2088902939066578"
                                };

                                console.log(a.accessToken);
                                // const { accessToken,alipayUserId,expiresIn,reExpiresIn,refreshToken,userId  } = JSON.parse(a)
                                ctx.body = {
                                    a: 11
                                };

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAlipayAuthUrlById(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAlipayAuthUrlById;
        }()
    }]);
    return loginController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'login', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'login'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getAlipayAuthUrl', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAlipayAuthUrl'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getAlipayAuthUrlById', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAlipayAuthUrlById'), _class2.prototype)), _class2)) || _class);
//# sourceMappingURL=login.js.map