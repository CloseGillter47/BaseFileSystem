const XLSX = require('node-xlsx');

const FS = require('fs');

/**
 * 读取xlsx文件
 * @param {string} str_file_name - 读取的文件全路径
 * @returns {promise} 返回操作的Promise结果
 */
function read(str_file_name) {

    return new Promise((resolve, reject) => {

        if (!str_file_name) { reject({ success: false, status: 101, data: null, message: '缺少参数' }); return; }

        if (typeof str_file_name !== 'string') { reject({ success: false, status: 102, data: null, message: '参数格式不正确，无法解析' }); return; }

        let res = '';

        try {

            res = XLSX.parse(str_file_name) || '';

        } catch (error) {

            reject({ success: false, status: 301, data: null, message: error }); return;
        }

        resolve({ success: true, status: 200, data: res, message: 'xlsx文件解析完毕' });

    })

}

/**
 * 写入xlsx 文件
 * @param {string} str_file_name 写入的文件全路径
 * @param {array} list_data - 要写入的数据
 * @param {array} [list_sheet] - 需要单独设置sheet名的集合，默认是sheet1、sheet2...
 * @returns {promise} 返回操作的Promise结果
 */
function write(str_file_name, list_data, list_sheet) {

    return new Promise((resolve, reject) => {

        if (!str_file_name || !list_data) { reject({ success: false, status: 101, data: null, message: '缺少参数' }); return; }

        if (typeof str_file_name !== 'string') { reject({ success: false, status: 102, data: null, message: '参数格式不正确，无法解析' }); return; }

        if (Object.prototype.toString.call(list_data) !== '[object Array]') { reject({ success: false, status: 102, data: null, message: '参数格式错误' }); return; }

        if (!!list_sheet && Object.prototype.toString.call(list_sheet) !== '[object Array]') { reject({ success: false, status: 102, data: null, message: '参数格式错误' }); return; }

        let res = [];

        list_sheet = list_sheet || [];

        for (let i = 0; i < list_data.length; i++) {

            res.push({ data: list_data[i], name: list_sheet[i] || ('sheet' + i) });

        }

        try {

            let buffer = XLSX.build(res);

            FS.writeFileSync(str_file_name, buffer, { 'flag': 'w' });

        } catch (error) {

            reject({ success: false, status: 301, data: null, message: error }); return;

        }

        resolve({ success: true, status: 200, data: res, message: 'xlsx文件解析完毕' });

    })
}

module.exports = { read, write }