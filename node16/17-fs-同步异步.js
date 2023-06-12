/**
 * 需求:
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 */

// 1.引入fs模块
const fs = require('fs'); // require是一个方法，用来加载模块的, fs是核心模块，直接引入即可


// // 异步写入文件
// // writeFile 时异步方法，不会阻塞后续代码的执行
// fs.writeFile('./座右铭.text', '三人行，则必有我师焉', err => {
//     // 如果err为null，表示写入成功，没有错误
//     if (err) {
//         console.log('文件写入失败')
//         return;
//     } else {
//         console.log('文件写入成功')
//         return;
//     }
// })
// console.log(1 + 1); //优先执行

// 同步写入文件
fs.writeFileSync('./座右铭2.text', '三人行，则必有我师焉3')
console.log(1 + 1);