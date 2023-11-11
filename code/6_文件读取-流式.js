const fs = require('fs');

// 流式读取
// createReadStream 参数: 文件名&文件路径
const rs = fs.createReadStream('./3_流式写入.text');

// 绑定 data 事件, chunk是读取的数据
rs.on('data', (chunk) => {
    console.log(chunk.toString());
    console.log(chunk.length);
})

// 监听读取完成事件
rs.on('end', () => {
    console.log('读取完成');
})