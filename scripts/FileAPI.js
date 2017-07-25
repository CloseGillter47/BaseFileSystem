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

/**
 * @description 扫描文件夹下面的Excel文件
 * @args path 文件夹的路径
 * @args target 可选 将扫描的结果整理到目标文件
 * @retrun object 返回整理好的结果
 */
module.exports.scanFolder = function (path, target) {



};

/**
 * 从单个xlsx文件中导入数据
 */
module.exports.inputEXCEL = function () {

};

/**
 * 将所有json文件导出xlsx文件
 */
module.exports.exportEXCEL = function () {

};

/**
 * 
 */
module.exports.outputJSON = function () {

};

module.exports.JSONtoEXCEL = function () {

};
