const fs = require('fs');
const path = require('path'); // path 是核心模块, 直接引入即可

// // 1. path.resolve , 用于拼接路径
// console.log(path.resolve(__dirname, './test', './a.js')); // 正常
// console.log(path.resolve(__dirname, 'test', 'a.js')); // 正常
// console.log(path.resolve(__dirname, '/test', '/a.js')); // D:\a.js
// console.log(path.resolve(__dirname, './test', '../a.js')); // 没有 test 文件夹

// // 2. path.sep , 获取路径分隔符
// console.log(path.sep); // \  windows , / linux

// // 3. path.parse , 文件的绝对路径,
// // __filename: 当前文件的绝对路径
// // __dirname: 当前工作目录的绝对路径
let pathStr = 'D:\\RengarTang\\GitCode\\LearnNodeJS\\code\\014_Path模块.js'
// // let pathStr2 = __filename
// // console.log(pathStr == pathStr2);
// // console.log(pathStr, "\n", pathStr2);
// // console.log(path.parse(pathStr));

// 4. path.basename , 获取文件名
console.log(path.basename(pathStr));

// 5. path.dirname , 获取文件夹名
console.log(path.dirname(pathStr));

// 6. path.extname , 获取文件后缀名
console.log(path.extname(pathStr));