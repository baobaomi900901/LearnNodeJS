// fs
const fs = require('fs');

// 创建文件夹, mk 是 make 的缩写, dir 是 directory 的缩写
// fs.mkdir('./资料2', err => {
//     if (err) throw err;
//     console.log('创建成功');
// })

// 递归创建, recursive 是递归的意思
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) throw err;
//     console.log('创建成功');
// })


// 读取文件夹, readdir 是 read directory 的缩写
// fs.readdir('./', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// })

// 删除文件夹, rmdir 是 remove directory 的缩写
// fs.rmdir('./a/b/c', err => {
//     if (err) throw err;
//     console.log('删除成功');
// })

// setTimeout, 1 秒后执行
// setTimeout(() => {
//     // 递归删除
//     fs.rmdir('./a', { recursive: true }, err => {
//         if (err) throw err;
//         console.log('删除成功');
//     })
// }, 3000)

// 建议使用 rm, rmdir 以后可能会被删除
fs.rm('./a', { recursive: true }, err => {
    if (err) throw err;
    console.log('删除成功');
})
