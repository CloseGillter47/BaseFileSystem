const ExcelAPI = require('./scripts/ExcelAPI')
const FileAPI = require('./scripts/FileAPI')
const $t = require('./scripts/Util')

const path = require('path');


let res;

// /////////////////////////////////////////////////////////////////////////////////////

// res = ExcelAPI.read(path.join(__dirname, 'scripts', 'db', 'source', 'test.xlsx'));

// console.log(res);

// ---------------------------------------------------------------------------------- //

// let data = [
//     [['表头1', '表头2', '表头3', '表头4', '表头5'], ['1001', '1002', '1003', '1004', '1005'], ['2001', '2002', '2003', '2004', '2005']],
//     [['表头A', '表头B', '表头C', '表头D', '表头E'], ['MOOA', 'MOOB', 'MOOC', 'MOOD', 'MOOE'], ['NOOA', 'NOOB', 'NOOC', 'NOOD', 'NOOE']]
// ];

// res = ExcelAPI.write(path.join(__dirname, 'scripts', 'db', 'export', 'out-test.xlsx'), data, ['第一学期', '第二学期']);

// console.log(res);

// /////////////////////////////////////////////////////////////////////////////////////


// res = FileAPI.read(path.join(__dirname, 'scripts', 'db', 'source', 'test.xlsx'));

// console.log(res);


// /////////////////////////////////////////////////////////////////////////////////////

res = $t.getEncAse192('admin', 'code');

console.log(res);

res = $t.getDecAse192(res, 'code');

console.log(res);

// /////////////////////////////////////////////////////////////////////////////////////