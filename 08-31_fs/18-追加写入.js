const fs = require('fs');
fs.writeFile('./18-座右铭.text', '第一次写入', err => {
    // 如果err为null，表示写入成功，没有错误
    if (err) {
        console.log('文件写入失败')
        return;
    } else {
        console.log('文件写入成功')
        return;
    }
})
console.log(1 + 1);

// 追加写入
fs.appendFile('./18-座右铭.text', '\r\n第二次写入', err => {
    // 如果err为null，表示写入成功，没有错误
    if (err) {
        console.log('第二次文件写入失败')
        return;
    }
    console.log('第二次文件写入成功')

})

// writeFile 追加写入
// 一般日志使用这种方式
fs.writeFile('./18-座右铭.text', '\r\n第三次写入', { flag: 'a' }, err => {
    // 如果err为null，表示写入成功，没有错误
    if (err) {
        console.log('第三次文件写入失败')
        return;
    }
    console.log('第三次文件写入成功')
})