const FS = require('fs')

const PATH = require('path')

const _ = require('lodash')

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

    buildFilePath: function () {

        const args = _.values(arguments);

        let errflag = false;

        _.forEach(args, function (o) {

            if (Object.prototype.toString.call(o) !== "[object String]") {
                errflag = errflag || true;
            } else {
                errflag = errflag || false;
            }
        });

        if (!args || !args.length) return '';

        if (errflag) throw new Error('参数不全为字符串');

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

/**
 * @description 扫描文件夹下面的Excel文件到.json文件；多文件批量操作
 * @args path 文件夹的路径
 * @args target 将扫描的结果整理到目标文件
 * @retrun object 返回整理好的结果，只是关系列表，非详细的内容
 */
module.exports.inputFromFolder = function (path, target) {

    if (!path || Object.prototype.toString.call(path) !== '[object String]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');


};

/**
 * @description 将指定的文件夹下的临时文件（.json）导出Excel文件；多文件批量操作
 * @args path 文件夹的路径
 * @args target 
 * @retrun object 返回整理好的结果，只是关系列表，非详细的内容
 */
module.exports.outputToFolder = function (path, target) {

    if (!path || Object.prototype.toString.call(path) !== '[object String]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');

}

/**
 * @description 导入单个excel文件到.json文件；单文件操作
 * @args path 文件夹的路径
 * @args target 将扫描的结果整理到目标文件
 * @retrun object 返回整理好的结果，只是关系列表，非详细的内容
 */
module.exports.inputEXCEL = function (path, target) {

    if (!path || Object.prototype.toString.call(path) !== '[object String]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');

};

/**
 * @description 导出单个.json文件到excel；单文件操作
 * @args path 文件夹的路径
 * @args target 将扫描的结果整理到目标文件
 * @retrun object 返回整理好的结果，只是关系列表，非详细的内容
 */
module.exports.exportEXCEL = function (path, target) {

    if (!path || Object.prototype.toString.call(path) !== '[object String]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');

};

/**
 * @description 将对象Object导出到Json文件里；这是便捷方式
 * @args data 内容对象Object
 * @args target 以时间来命名的文件名
 * @retrun object 返回整理好的结果
 */
module.exports.outputJSON = function (data, target) {

    if (!data || Object.prototype.toString.call(data) !== '[object Object]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');

};

/**
 * @description 将对象Object导出到Excel文件里；这是便捷方式
 * @args data 内容对象Object
 * @args target 以时间来命名的文件名
 * @retrun object 返回整理好的结果
 */
module.exports.JSONtoEXCEL = function (data, target) {

    if (!data || Object.prototype.toString.call(data) !== '[object Object]') throw new Error('必须传入文件路径、或格式错误');

    if (!target || Object.prototype.toString.call(target) !== '[object String]') throw new Error('必须传入目标文件、或格式错误');

};
