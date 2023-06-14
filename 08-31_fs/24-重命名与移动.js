// fs
const fs = require('fs');

// 重命名, 参数: 1, 旧文件名, 2, 新文件名, 3, 回调函数, 有一个参数err, 如果重命名失败, err 就是错误对象
// fs.rename('./座右铭.text', './论语.text', err => {
//     if (err) throw err;
//     console.log('重命名成功');
// })

// 移动, 如果目标文件夹不存在, 会报错
fs.rename('./论语.text', './资料/论语.text', err => {
    if (err) throw err;
    console.log('移动成功');
})

// renameSync 与 rename 用法一致, 但是没有回调函数, 会阻塞代码