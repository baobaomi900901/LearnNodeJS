// fs
const fs = require('fs');
const path = require('path');

// 第二个参数必须是响度对路劲, ./  ../ 或者不写
let a = path.resolve(__dirname, 'a.txt') // 解析出一个绝对路径
// console.log(__dirname);
console.log(a);

// sep 系统以什么方式分隔
// console.log(path.sep); // 路径分隔符
// console.log(__dirname); // 文件夹绝对路径, 不含文件名
// console.log(__filename); // 文件绝对路径, 含文件名

// __filename: 当前文件的绝对路径
let str = '/Users/mobytang/Documents/RengarTang/Practice/学习技术/LearnNodeJS/32-path/32-path.js'

// console.log(path.basename(str)); // 获取路径最后一部分
// console.log(path.dirname(str)); // 获取路径的目录部分
// console.log(path.extname(str)); // 获取路径的扩展名部分(文件后缀: .js)