// fs
const fs = require('fs');

// 删除文件
// fs.unlink('./资料/论语.text', err => {
//     if (err) throw err;
//     console.log('删除成功');
// })

// rm , 不能删除文件夹, 只能删除文件
fs.rm('./座右铭2.text', err => {
    if (err) throw err;
    console.log('删除成功');
})