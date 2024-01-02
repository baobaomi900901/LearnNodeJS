const fs = require('fs');

// 1.创建文件夹
// fs.mkdir('./test', err => {
//     if (err) {
//         console.log('创建失败')
//         return;
//     }
//     console.log('创建成功')
// })

// 递归创建, 必须加上 recursive: true,意思是 允许递归创建
fs.mkdir('./test/test1/test2', { recursive: true }, err => {
    if (err) {
        console.log('创建失败')
        return;
    }
    console.log('创建成功')
})

// vscode配置: compact, 紧凑形式呈现文件夹