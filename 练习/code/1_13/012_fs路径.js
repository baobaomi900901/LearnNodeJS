const fs = require('fs');


// 相对路径:
// ./test  // 当前目录下的 test 文件夹
//  test // 当前目录下的 test 文件夹
// ../ // 上一级目录
// ../../ // 上两级目录


// 绝对路径:
// D:\code\code\test // D 盘下的 code 文件夹下的 code 文件夹下的 test 文件夹
// 不能写成 C盘, 会报错, 因为 C 盘是系统盘, 有权限限制
// /test // 根目录下的 test 文件夹

// 相对路径bug:
//  PS D:\RengarTang\GitCode\LearnNodeJS\资料> node ..\code\12_fs路径.js , 会创建在 资料 文件夹下, 参照的是当前命令行的工作路径
// fs.writeFileSync('./12-text.txt', 'hello world')

// __driname: 当前文件所在的文件夹的绝对路径
fs.writeFileSync(__dirname + '/12-text.txt', 'hello world')