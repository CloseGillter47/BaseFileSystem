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



module.exports = { read, write }