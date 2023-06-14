// fs
const fs = require('fs');
// process
const process = require('process');

// // 方式 1, readFile
// let data = fs.readFileSync('./19-流式写入.text');
// fs.writeFileSync('./19-流式写入-复制体.text', data);
// console.log(process.memoryUsage());

// // 方式 2, createReadStream, 优势: 适用于大文件, 一点一点读取, 不会占用太多内存
// let rs = fs.createReadStream('./19-流式写入.text');
// let ws = fs.createWriteStream('./19-流式写入-复制体2.text');

// rs.on('data', chunk => {
//     ws.write(chunk);
// })

// rs.on('end', () => {
//     console.log('读取流关闭了');
//     ws.end();
//     // console.log(process.memoryUsage());
// })


// 方式 3, pipe
let rs = fs.createReadStream('./19-流式写入.text');
let ws = fs.createWriteStream('./19-流式写入-复制体3.text');
rs.pipe(ws); // 管道, 一点一点读取, 一点一点写入