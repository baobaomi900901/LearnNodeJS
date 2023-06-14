// fs
const fs = require('fs');

// 查看文件状态 stat
fs.stat('./座右铭3.text', (err, stats) => {
    if (err) throw err;
    // console.log(stats);
    // console.log(stats.size); // 文件大小
    // console.log(stats.birthtime); // 创建时间
    // console.log(stats.mtime); // 修改时间
    // console.log(stats.atime); // 访问时间
    // console.log(stats.ctime); // 状态改变时间
    // console.log(stats.isDirectory()); // 是否是文件夹
    // console.log(stats.isFile()); // 是否是文件
    // // 打印类型
    // console.log(stats.isFile() ? '文件' : '文件夹');
    // // stats 读取文件格式
    // console.log(stats.mode); // mode 读取文件格式, 8进制, 33188, 
})

// statSync 与 stat 用法一致, 但是没有回调函数, 会阻塞代码


// 读取文件格式
const path = require('path'); // 引入path模块
const filePath = './座右铭3.text'; // 文件路径
const extname = path.extname(filePath); // 读取文件格式
console.log(extname); // 输出：'.text'