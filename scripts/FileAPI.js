const FS = require('fs')

const PATH = require('path')

const EXCEL = require('./ExcelAPI')



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

function write(path, data, config) {

}

module.exports = { read, write }