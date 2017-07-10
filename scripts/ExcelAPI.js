const XLSX = require('node-xlsx');

const FS = require('fs');

/**
 * 读取xlsx文件
 * @param {string} str_file_name - 读取的文件全路径
 * @returns {object} 返回读取的内容
 */
function read(str_file_name) {

    if (!str_file_name || typeof str_file_name !== 'string') { console.log('参数必须为字符串，不能为空或其他'); return null; }

    let res;

    try {

        res = XLSX.parse(str_file_name) || '';

    } catch (error) {

        console.log('读取异常');

        console.log(error);

        return null;
    }

    console.log('读取完成');

    return res;

}

/**
 * 写入xlsx 文件
 * @param {string} str_file_name 写入的文件全路径
 * @param {array} list_data - 要写入的数据
 * @param {array} [list_sheet] - 需要单独设置sheet名的集合，默认是sheet1、sheet2...
 * @returns {boolean} 返回操作的成功与否
 */
function write(str_file_name, list_data, list_sheet) {

    if (!str_file_name || typeof str_file_name !== 'string') { console.log('第一个参数必须为字符串，不能为空或其他'); return false; }

    if (!list_data || Object.prototype.toString.call(list_data) !== '[object Array]') { console.log('第二个参数必须为数组，不能为空或其他'); return false; }

    if (!list_sheet || Object.prototype.toString.call(list_sheet) !== '[object Array]') { console.log('第三个参数要求为数组'); return false; }

    let res;

    try {

        for (let i = 0; i < list_data.length; i++) {

            res.push({ name: list_sheet[i] || ('sheet' + i), data: list_data[i] });
        }

        let buffer = XLSX.build(res);

        FS.writeFileSync(str_file_name, buffer, { 'flag': 'w' });

    } catch (error) {

        console.log('写出异常');

        console.log(error);

        return false;
    }

    console.log('写出完成');

    return true;
}

module.exports = { read, write }