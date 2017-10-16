var crypto = require('crypto');

var algorithm = 'aes-256-ctr';
var password = 'ab24@da920kd';

module.exports = {
    encrypt : function (encryptString){
        var cipher = crypto.createCipher (algorithm, password)
        var crypted = cipher.update (encryptString, 'utf8', 'hex')
        crypted += cipher.final ('hex');
        return crypted;
    }
};
