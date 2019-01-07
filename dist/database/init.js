'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('../config/index');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
var connect = function connect() {
    var maxConnectTimes = 0;
    return new Promise(function (resolve, reject) {
        if (process.env != 'production') {
            _mongoose2.default.set('debug', true);
        }
        _mongoose2.default.connect(_index.mongodb.db, { useNewUrlParser: true });
        _mongoose2.default.connection.on('disconnected', function () {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                _mongoose2.default.connect(_index.mongodb.db, { useNewUrlParser: true });
            } else {
                throw new Error('数据库挂了，请维修');
            }
        });
        _mongoose2.default.connection.on('error', function (err) {
            maxConnectTimes++;
            if (maxConnectTimes < 5) {
                _mongoose2.default.connect(_index.mongodb.db, { useNewUrlParser: true });
            } else {
                throw new Error('数据库挂了，请维修');
            }
        });
        _mongoose2.default.connection.once('open', function () {
            maxConnectTimes = 0;
            resolve('连接成功');
            console.log('Mongodb connected succsefully');
        });
    });
};
exports.connect = connect;
//# sourceMappingURL=init.js.map