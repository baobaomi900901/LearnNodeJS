// fs
const fs = require('fs');

// // 相对路径
// fs.writeFile('./座右铭-28.text', '座右铭: 人生在世, 要么碌碌无为, 要么辉煌一时', err => {
//     if (err) throw err;
//     console.log('写入成功');
// })

// 绝对路径
// BUG: 无法写入
// fs.writeFileSync('D:/index.html', '座右铭: 人生在世, 要么碌碌无为, 要么辉煌一时') // bug: 无法写入
