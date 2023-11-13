const fs = require('fs');


// 参数: 文件名&文件路径，选项对象, 回调函数
fs.readFile('./3_流式写入.text', 'utf8', (err, data) => {
    if (err) {
        console.log('文件读取失败')
        return;
    }
    console.log(data.toString())
})