const fs = require('fs');

// 方法1: unlink, unlinkSync
// 参数: 文件名&文件路径, 回调函数
fs.unlink('./2_文件写入-异步.text', err => {
    if (err) {
        console.log('删除失败')
        return;
    }
    console.log('删除成功')
})

// 方法2: rm,rmSync node v14.14.0以上才支持,
// 参数: 文件名&文件路径, 回调函数
// fs.rm('./3_流式写入.text', err => {
//     if (err) {
//         console.log('删除失败')
//         return;
//     }
//     console.log('删除成功')
// })