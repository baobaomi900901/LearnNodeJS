const fs = require('fs');

// 删除文件夹, 建议使用 rm 删除
// fs.rmdir('./test/', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败')
//         return;
//     }
//     console.log('删除成功')
// })

// rm 删除
fs.rm('./test/', { recursive: true }, err => {
    if (err) {
        console.log('删除失败')
        return;
    }
    console.log('删除成功')
}) 