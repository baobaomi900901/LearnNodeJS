// fs
const fs = require('fs');

// 创建一个读取流
let rs = fs.createReadStream('./19-流式写入.text')


// 监听读取流的开启
rs.on('data', chunk => {
    console.log("开始读取流");
    console.log("");
    console.log(chunk.toString());
})


// 监听读取流的关闭
rs.on('end', () => {
    console.log('读取流关闭了');
})