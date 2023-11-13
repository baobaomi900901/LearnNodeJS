/**
 * 需求:
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 */

// 1.引入fs模块
const fs = require('fs'); // require是一个方法，用来加载模块的, fs是核心模块，直接引入即可
fs.writeFileSync('./2_文件写入-异步.text', '三人行，则必有我师焉-17')
console.log(1 + 1);