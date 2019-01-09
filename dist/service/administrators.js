"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getByUsername = exports.getAll = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Administrators = _mongoose2.default.model("Administrators");
var getAll = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var query, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        query = {};
                        _context.next = 3;
                        return Administrators.find(query);

                    case 3:
                        result = _context.sent;
                        return _context.abrupt("return", result);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getAll() {
        return _ref.apply(this, arguments);
    };
}();
var getByUsername = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(username) {
        var query, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        query = {};

                        if (username) {
                            query.username = username;
                        }
                        _context2.next = 4;
                        return Administrators.find(query);

                    case 4:
                        result = _context2.sent;
                        return _context2.abrupt("return", result);

                    case 6:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getByUsername(_x) {
        return _ref2.apply(this, arguments);
    };
}();
exports.getAll = getAll;
exports.getByUsername = getByUsername;
//# sourceMappingURL=administrators.js.map