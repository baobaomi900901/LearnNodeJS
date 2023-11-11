// 文件写入
/**
 * 需求:
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 */

// 1.引入fs模块
const fs = require('fs'); // require是一个方法，用来加载模块的, fs是核心模块，直接引入即可


// 2.调用方法写入文件
// writeFile方法参数: 文件名&文件路径，文件内容，选项对象, 回调函数
fs.writeFile('./1_文件写入.text', '三人行，则必有我师焉', err => {
    // 如果err为null，表示写入成功，没有错误
    if (err) {
        console.log('文件写入失败')
        return;
    } else {
        console.log('文件写入成功')
        return;
    }
})


