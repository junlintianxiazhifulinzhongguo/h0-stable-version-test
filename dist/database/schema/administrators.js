'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Mixed = Schema.Types.Mixed;
var SALT_WORK_FACTOR = 10;
var MAX_LOGIN_ATTEMPTS = 5;
var LOCK_TIME = 2 * 60 * 60 * 1000;
var administratorsSchema = new Schema({
    username: {
        require: true,
        unique: true,
        type: String
    },
    email: {
        require: true,
        unique: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    alipayUserId: {
        unique: true,
        type: String,
        default: ''
    },
    loginAttempts: {
        require: true,
        type: Number,
        default: 0
    },
    lockUntil: {
        require: true,
        type: Number,
        default: 1
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

administratorsSchema.virtual('isLocked').get(function () {
    return undefined.lockUntil && undefined.lockUntil > Date.now();
});

administratorsSchema.pre('save', function (next) {
    var _this = this;

    if (!this.isModified('password')) return next();
    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        _bcrypt2.default.hash(_this.password, salt, function (error, hash) {
            if (error) return next(error);
            console.log(_this.password);
            _this.password = hash;
            console.log(_this.password);
            next();
        });
    });
});
administratorsSchema.methods = {
    comparePassword: function comparePassword(_password, password) {
        return new Promise(function (resolve, reject) {
            _bcrypt2.default.compare(_password, password, function (err, isMatch) {
                if (!err) resolve(isMatch);else reject(err);
            });
        });
    },

    incLoginAttepts: function incLoginAttepts(user) {
        return new Promise(function (resolve, reject) {
            if (undefined.lockUntil && undefined.lockUntil < Date.now()) {
                undefined.update({
                    $set: {
                        loginAttempts: 1,
                        lockUntil: 1
                    }
                }, function (err) {
                    if (err) reject(err);else resolve(true);
                });
            } else {
                var updates = {
                    $inc: {
                        loginAttempts: 1
                    }
                };
                if (undefined.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !undefined.isLocked) {
                    updates.$set = {
                        lockUntil: Date.now() + LOCK_TIME
                    };
                }
                undefined.update(updates, function (err) {
                    if (err) reject(err);else resolve(true);
                });
            }
        });
    }

};

_mongoose2.default.model('Administrators', administratorsSchema);
//# sourceMappingURL=administrators.js.map