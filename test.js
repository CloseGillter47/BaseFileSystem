const ExcelAPI = require('./scripts/ExcelAPI')
const FileAPI = require('./scripts/FileAPI')

const path = require('path');


let res = ExcelAPI.read(path.join(__dirname, 'scripts', 'db', 'source', 'test.xlsx'));

res.then(success => {

    let data = success.data;
    console.log(data[0].data);

}, failed => {
    console.log('--');
    console.log(failed);
});