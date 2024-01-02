const fs = require('fs');

// 查看文件夹信息
// stat
fs.stat('../资料', (err, stats) => {
    if (err) {
        console.log('查看失败')
        return;
    }
    console.log(stats) // 文件大小
    console.log("是否是文件 :>>", stats.isFile()) // 是否是文件
    console.log("是否是文件夹 :>>", stats.isDirectory()) // 是否是文件夹
})

// Stats {
//     dev: 309010441, // 文件系统的标识符
//     mode: 33206, // 文件权限
//     nlink: 1,  // 文件的硬链接数量
//     uid: 0,  // 文件所有者的用户标识符
//     gid: 0,  // 文件所有者的组标识符
//     rdev: 0,
//     blksize: 4096,  // 文件系统 I/O 操作的块大小
//     ino: 3940649673954302,  // 文件的 inode 编号
//     size: 2659142, // 文件大小 2.54M
//     blocks: 5200,  // 文件系统中的块数
//     atimeMs: 1699747093998.5034,
//     mtimeMs: 1699718044013.7568,
//     ctimeMs: 1699718079284.8513,
//     birthtimeMs: 1699718100861.572,
//     atime: 2023-11-11T23:58:13.999Z, // 访问时间
//     mtime: 2023-11-11T15:54:04.014Z, // 修改时间
//     ctime: 2023-11-11T15:54:39.285Z,  // 最后一次修改文件状态的时间
//     birthtime: 2023-11-11T15:55:00.862Z  // 创建时间
//   }