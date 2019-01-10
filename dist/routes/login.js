'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginController = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var loginController = exports.loginController = (_dec = (0, _decorator.controller)('/api/v0/login'), _dec2 = (0, _decorator.get)("/"), _dec3 = (0, _decorator.get)("/auth_url"), _dec4 = (0, _decorator.get)("/auth_url/:id"), _dec(_class = (_class2 = function () {
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
            var result = _alipay.auth_url;
            ctx.body = {
                result: result
            };
        }
    }, {
        key: 'getAlipayAuthUrlById',
        value: function getAlipayAuthUrlById(ctx, next) {
            var result = _alipay.auth_url;
            ctx.body = {
                result: result,
                "name": "lijun"
            };
        }
    }]);
    return loginController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'login', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'login'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getAlipayAuthUrl', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAlipayAuthUrl'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getAlipayAuthUrlById', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAlipayAuthUrlById'), _class2.prototype)), _class2)) || _class);
//# sourceMappingURL=login.js.map