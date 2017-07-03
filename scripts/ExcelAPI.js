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

        if (!str_file_name || !list_data) { reject({ success: false, status: 10001, data: null, message: '缺少参数' }); return; }

        if (typeof str_file_name !== 'string') { reject({ success: false, status: 10002, data: null, message: '参数格式不正确，无法解析' }); return; }

        if (Object.prototype.toString.call(list_data) !== '[object Array]') { reject({ success: false, status: 10002, data: null, message: '参数格式错误' }); return; }

        if (!!list_sheet && Object.prototype.toString.call(list_sheet) !== '[object Array]') { reject({ success: false, status: 10002, data: null, message: '参数格式错误' }); return; }

        let res = [];

        list_sheet = list_sheet || [];

        for (let i = 0; i < list_data.length; i++) {

            res.push({ data: list_data[i], name: list_sheet[i] || ('sheet' + i) });

        }

        try {

            let buffer = XLSX.build(res);

            FS.writeFileSync(str_file_name, buffer);


        } catch (error) {

            reject({ success: false, status: 30001, data: null, message: error }); return;

        }

        resolve({ success: true, status: 10001, data: res, message: 'xlsx文件解析完毕' });

    })
}

module.exports = { read, write }