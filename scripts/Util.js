const CRYPTO = require('crypto');

/**
 * @aes192加密模块
 * @param str string 要加密的字符串
 * @param secret string 要使用的加密密钥(要记住,不然就解不了密啦)
 * @retrun string 加密后的字符串
 * */
module.exports.getEncAse192 = function (str, secret) {

    //设置加密类型 和 要使用的加密密钥
    var cipher = CRYPTO.createCipher("aes192", secret);

    //编码方式从utf-8转为hex;
    var enc = cipher.update(str, "utf8", "hex");

    //编码方式从转为hex;
    enc += cipher.final("hex");

    //返回加密后的字符串
    return enc;
};

/**
 * @aes192解密模块
 * @param str string 要解密的字符串
 * @param secret string 要使用的解密密钥(要和密码的加密密钥对应,不然就解不了密啦)
 * @retrun string 解密后的字符串
 * */
module.exports.getDecAse192 = function (str, secret) {

    var decipher = CRYPTO.createDecipher("aes192", secret);

    //编码方式从hex转为utf-8;
    var dec = decipher.update(str, "hex", "utf8");

    //编码方式从utf-8;
    dec += decipher.final("utf8");

    return dec;
};

/**
 * @Util 获取系统生成的时间长字符串
 * @args date 可传参数，一个时间对象或者时间字符串
 * @param date [date] 可传参数，一个时间对象或者时间字符串
 * @retrun string 一串数字字符,含义为YYYYMMDDhhmmssss
 */
module.exports.getLongSystemString = function (date) {

    date = date || new Date();

    if (typeof date === 'string') date = new Date(date);

    let time = date.getTime();

    // 北京时间是 +8 小时
    date.setTime(time + 8 * 1000 * 60 * 60);

    let dateStr = date.toJSON();

    return dateStr.replace(/\D/g, '');
};

/**
 * @Util 获取系统生成的时间短字符串
 * @args date 可传参数，一个时间对象或者时间字符串
 * @param date [date] 可传参数，一个时间对象或者时间字符串
 * @retrun string 一串数字字符,含义为YYYYMMDD
 */
module.exports.getSortSystemString = function (date) {

    date = date || new Date();

    if (typeof date === 'string') date = new Date(date);

    let time = date.getTime();

    // 北京时间是 +8 小时
    date.setTime(time + 8 * 1000 * 60 * 60);

    let dateStr = date.toJSON();

    return dateStr.replace(/\D/g, '').substr(0, 8);
};

/**
 * @Util 获取系统生成的日期字符串
 * @args date 可传参数，一个时间对象或者时间字符串
 * @param date [date] 可传参数，一个时间对象或者时间字符串
 * @retrun string 一串数字字符，含义为YYYYMMDDhhmm
 */
module.exports.getDateSystemString = function (date) {

    date = date || new Date();

    if (typeof date === 'string') date = new Date(date);

    let _time = date.getTime();

    // 北京时间是 +8 小时
    date.setTime(_time + 8 * 1000 * 60 * 60);

    let dateStr = date.toJSON();

    return dateStr.replace(/\D/g, '').substr(0, 12);
};