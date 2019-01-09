'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iniSchema = exports.connect = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('../config/index');

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
var connect = function connect() {
    var maxConnectTimes = 0;
    return new _promise2.default(function (resolve, reject) {
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

var iniSchema = function iniSchema() {
    _glob2.default.sync((0, _path.resolve)(__dirname, './schema', '**/*.js')).forEach(require);
    var Administrators = _mongoose2.default.model("Administrators");
    // const administrators = new Administrators({
    //     username: '李',
    //     password: '123',
    //     email:'22116728@qq.com'
    // });
    // Administrators.comparePassword('123','$2b$10$/hu2sJVUY16DPtXaZA0lR.jiIpHOMMmUioDFMs.19XtXKmmKyjROS').then(function(data){
    //     console.log(data)
    // })
    // console.log(Administrators)
};

exports.connect = connect;
exports.iniSchema = iniSchema;
//# sourceMappingURL=init.js.map