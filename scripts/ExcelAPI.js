const XLSX = require('node-xlsx');

const FS = require('fs');

function read(str_file_name) {

    return new Promise((resolve, reject) => {

        if (!str_file_name) { reject({ success: false, status: 10001, data: null, message: '缺少参数' }); return; }

        if (typeof str_file_name !== 'string') { reject({ success: false, status: 10002, data: null, message: '参数格式不正确，无法解析' }); return; }

        let res = '';

        try {

            res = XLSX.parse(str_file_name) || '';

        } catch (error) {

            reject({ success: false, status: 30001, data: null, message: error }); return;
        }

        resolve({ success: true, status: 10001, data: res, message: 'xlsx文件解析完毕' });

    })

}

function write(str_file_name, list_data, list_sheet) {

    return new Promise((resolve, reject) => {

    })
}

module.exports = { read, write }