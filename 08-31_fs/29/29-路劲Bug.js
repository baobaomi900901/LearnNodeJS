// fs
const fs = require('fs');

// 相对路径
// fs.writeFileSync('./index.html', '座右铭: 人生在世, 要么碌碌无为, 要么辉煌一时')
// node ./29/29-路劲Bug.js
// fs 的相对路径是相对于 node 命令行工作的路径

// 绝对路劲, __dirname 所在文件的所在目录的绝对路径
console.log(__dirname);

fs.writeFileSync(__dirname + '/index2.html', '座右铭: 人生在世, 要么碌碌无为, 要么辉煌一时')