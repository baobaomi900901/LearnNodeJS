// 引入fs模块
const fs = require('fs');


// // 异步读取文件
// fs.readFile('./19-流式写入.text', 'utf8', (err, data) => {
//     // err == null 读取成功
//     if (err) throw err; // 抛出错误
//     console.log(data.toString());
// })

// 同步读取
let data = fs.readFileSync('./19-流式写入.text', 'utf8');
console.log(data.toString()); 