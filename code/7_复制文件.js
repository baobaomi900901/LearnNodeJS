// 需求 : 在 资料 文件夹下, 复制 上班状态.mp4
const fs = require('fs');

const process = require('process');

// 方法1, readFile
// 1. 读取文件
let data = fs.readFileSync('../资料/上班状态.mp4');
// 2. 写入文件
fs.writeFileSync('../资料/上班状态-2.mp4', data);
console.log('内存使用对象', process.memoryUsage()) //23.265625, 23.8359375

// {
// rss: 24395776, // 常驻内存, 单位字节
// heapTotal: 5550080, // 堆内存总量
// heapUsed: 4932248, // 已使用的堆内存
// external: 3019310, // 外部内存
// arrayBuffers: 2678552 // ArrayBuffer
// }


// // 方法2, createReadStream, 优点 : 速度快, 适合大文件, 一点一点读取, 一点一点写入, 理想状态只需要 64kb 的内存
// let rs = fs.createReadStream('../资料/上班状态.mp4');
// let ws = fs.createWriteStream('../资料/上班状态-3.mp4');
// // 绑定 data 事件
// rs.on('data', (chunk) => {
//     ws.write(chunk); // 写入数据
// })

// rs.on('end', () => {
//     console.log('读取完成');
//     console.log('process.memoryUsage()', process.memoryUsage())
//     ws.close();
// })

// {
// rss: 24993792,
// heapTotal: 5550080,
// heapUsed: 5038424,
// external: 3160148,
// arrayBuffers: 2809624
//  }


// 方式3, pipe, 管道
let rs = fs.createReadStream('../资料/上班状态.mp4'); // 读取流
let ws = fs.createWriteStream('../资料/上班状态-4.mp4'); // 写入流
rs.pipe(ws); // 管道, 一点一点读取, 一点一点写入