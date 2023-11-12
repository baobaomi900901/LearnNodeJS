const fs = require('fs');

// 读取文件夹
fs.readdir('../资料', (err, data) => {
    if (err) {
        console.log('读取失败')
        return;
    }
    console.log(data)
})

// 读取当前文件夹
fs.readdir('./', (err, data) => {
    if (err) {
        console.log('读取失败')
        return;
    }
    console.log(data)
})