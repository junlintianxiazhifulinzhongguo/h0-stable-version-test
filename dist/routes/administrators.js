'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.administratorsController = undefined;

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

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

var _decorator = require('../lib/decorator');

var _administrators = require('../service/administrators');

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

var administratorsController = exports.administratorsController = (_dec = (0, _decorator.controller)('/api/v0/administrators'), _dec2 = (0, _decorator.get)("/"), _dec3 = (0, _decorator.get)("/:username"), _dec(_class = (_class2 = function () {
    function administratorsController() {
        (0, _classCallCheck3.default)(this, administratorsController);
    }

    (0, _createClass3.default)(administratorsController, [{
        key: 'getAdministrators',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
                var result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _administrators.getAll)();

                            case 2:
                                result = _context.sent;

                                ctx.body = {
                                    result: result
                                };

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAdministrators(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getAdministrators;
        }()
    }, {
        key: 'getAdministratorsByUsername',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
                var username, result;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                username = ctx.params.username;
                                _context2.next = 3;
                                return (0, _administrators.getByUsername)(username);

                            case 3:
                                result = _context2.sent;

                                ctx.body = {
                                    result: result
                                };

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAdministratorsByUsername(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return getAdministratorsByUsername;
        }()
    }]);
    return administratorsController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'getAdministrators', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAdministrators'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getAdministratorsByUsername', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getAdministratorsByUsername'), _class2.prototype)), _class2)) || _class);
//# sourceMappingURL=administrators.js.map