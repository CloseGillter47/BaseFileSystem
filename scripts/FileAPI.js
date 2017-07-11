const FS = require('fs')

const PATH = require('path')

const EXCEL = require('./ExcelAPI')


/**
 * 统一写入文件接口
 * @param {string} path path 文件路径
 * @returns {object} 返回读取的文件内容
 */
function read(path) {

    let ext = PATH.extname(path);

    if (ext === '.xlsx') {

        let res = EXCEL.read(path);

        return res;

    }

    if (ext === '.json') {

        let data = FS.readFileSync(path, 'utf8') || '{}';

        let res = JSON.parse(data);

        return res;

    }

}

/**
 * 统一写入文件接口
 * @param {string} path path 文件路径
 * @param {array} data data 文件内容
 * @param {object||array} [config] config 额为配置
 * @returns {boolean} 返回操作的成功标志
 */
function write(path, data, config) {

    let res = false;

    let ext = PATH.extname(path);

    if (ext === '.xlsx') {

        res = EXCEL.write(path, data, config);

        return res;

    }

    if (ext === '.json') {

        let _data = JSON.stringify(data);

        res = FS.writeFileSync(path, _data, 'utf8');

        return res;

    }

}

/**
 * 工具包
 */
const util = {

    buildLongDateString: function (date) {

        date = date || new Date();

        if (typeof date === 'string') date = new Date(date);

        let _time = date.getTime();

        // 北京时间是 +8 小时
        date.setTime(_time + 8 * 1000 * 60 * 60);

        let _dateStr = date.toJSON();

        return _dateStr.replace(/\D/g, '');

    },

    buildDateString: function (date) {

        date = date || new Date();

        if (typeof date === 'string') date = new Date(date);

        let _time = date.getTime();

        // 北京时间是 +8 小时
        date.setTime(_time + 8 * 1000 * 60 * 60);

        let _dateStr = date.toJSON();

        return _dateStr.replace(/\D/g, '').substr(0, _dateStr.length - 3);
    },

    buildSortDateString: function (date) {

        date = date || new Date();

        if (typeof date === 'string') date = new Date(date);

        let _time = date.getTime();

        // 北京时间是 +8 小时
        date.setTime(_time + 8 * 1000 * 60 * 60);

        let _dateStr = date.toJSON();

        return _dateStr.replace(/\D/g, '').substr(0, 8);
    },

    buildFilePath: function (args) {

        if (!args || !args.length || typeof args !== 'string') return '';

        return PATH.join(__dirname, ...args);
    }

};

module.exports.util = util;

module.exports.read = function (path) {
    read(path);
};

module.exports.write = function (path, data, config) {
    write(path, data, config);
};


